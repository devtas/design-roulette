import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    titleStyle: {},
    text: 'design roulette',
    tags: []
  }
  
  inputFocus = () => {
    console.log('focus')
    this.setState({
      titleStyle: {
        transform: 'scale(10)',
        color: '#ffffff',
        textShadow: '.1px 0 0 #BFBFBF, -.1px 0 0 #BFBFBF, 0 .1px 0 #BFBFBF, 0 -.1px 0 #BFBFBF, .1px .1px #BFBFBF, -.1px -.1px 0 #BFBFBF, .1px -.1px 0 #BFBFBF, -.1px .1px 0 #BFBFBF'
        // opacity: .1,
      }
    })
  }
  
  inputBlur = () => {
    console.log('blur')
    this.setState({
      titleStyle: {},
      text: 'design roulette'
    })
  }

  changeVal = e => {
    this.setState({
      text: e.target.value
    })
  }

  key = e => {
    const { text } = this.state
    if (
      e.charCode == 13 ||
      e.charCode == 44
      )
      {
        this.addTag(text)
    }
  }

  addTag = text => {
    const { tags } = this.state
    const newTags = tags || [];
    newTags.push(text);
    this.setState({
      tags: newTags
    });
  }

  renderTags = items => {
    return (
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    )
  }

  render() {
    const { titleStyle, text, tags } = this.state
    return(
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div className="hero">

          <h1 className="title" style={titleStyle}>{text}</h1>

          <p className="description">
            pesquise qualquer tag para encontrar inspirações
          </p>

          <div className="row form-area">
            <input
              type="text"
              placeholder="insira sua tag aqui"
              onFocus={() => this.inputFocus()}
              onBlur={() => this.inputBlur()}
              onChange={event => this.changeVal(event)}
              onKeyPress={event => this.key(event)} />
          </div>

          <div className="row tags-area">
            { this.renderTags(tags) }
            {/* <a href="https://nextjs.org/docs" className="card">
              <h3>Documentation &rarr;</h3>
              <p>Learn more about Next.js in the documentation.</p>
            </a>
            <a href="https://nextjs.org/learn" className="card">
              <h3>Next.js Learn &rarr;</h3>
              <p>Learn about Next.js by following an interactive tutorial!</p>
            </a>
            <a
              href="https://github.com/zeit/next.js/tree/master/examples"
              className="card"
            >
              <h3>Examples &rarr;</h3>
              <p>Find other example boilerplates on the Next.js GitHub.</p>
            </a> */}
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #1f1f1f;
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            overflow: hidden;
          }
          .title {
            -webkit-font-smoothing: antialiased;
            transform: translate3d( 0, 0, 0);
            font-size: 48px;
            line-height: 1.15;
            margin: 0;
            position: absolute;
            z-index: 1;
            transition: all 2000ms ease;
            top: calc(50% - 22.5px);
            left: calc(50% - 166px);
          }

          .form-area {
            position: relative;
            z-index: 2;
          }
          .form-area input {
            border: .5px solid #cfcfcf;
            outline: none;
            font-size: 20px;
            height: 60px;
            padding: 10px 30px;
            width: 300px;
          }

          .tags-area ul {
            list-style: none;
          }

          .tags-area ul li {
            display: inline-block;
            margin: 5px 10px;
          }

          .title,
          .description,
          .form-area input {
            text-align: center;
          }

          .description {
            margin-top: 80px;
            position: relative;
            z-index: 2;
          }

          .row {
            max-width: 880px;
            margin: 20px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: .5px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 1.5px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    )
  }
}

export default Home
