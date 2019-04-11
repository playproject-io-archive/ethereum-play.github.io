const bel = require('bel')
const csjs = require('csjs-inject')
const logo = require('play-logo')

const skilltree = require('skilltree.js')
const registry = require('url-registry')

const crawler = require('./crawler.js')

async function skilltrees (data, href) {
  const element = bel`<div class=${css2.skilltree}></div>`
  setTimeout(async () => {
    const dag = await crawler(data)
    skilltree(element, dag)
  }, 0)
  return element
}
const css2 = csjs`
.skilltree {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}`

;(async () => {
  try {
    const db = await registry(`r70vo-1554993396`, () => true)
    // e.g. if (typeof url === 'string') return true
    // // @TODO: check that the "URL" actually makes sense - otherwise, filter it out
    // // @TODO: design or update `url-registry` so that data is always bound the URL
    // // which issues the `put` command and if that url (=location.href) is illegal
    // // don't make the request! - ...maybe allow disabeling via `validate(...)` ?
    const data = await db.list()
    const el = await skilltrees(data)
    const container = document.querySelector('#skilltree')
    // document.body.innerHTML = ''
    container.appendChild(el)
  } catch (e) {}
})()

document.title = 'play'

const style = document.createElement('style')
style.setAttribute('class', 'base')
style.textContent = [
  '*, *:before, *:after { box-sizing: inherit; }',
  'body { margin: 0; height: 100vh; min-height: 100vh; }',
].join('\n')
document.head.appendChild(style)

const css = csjs`
  .main {
    display          : flex;
    flex-grow        : 1;
    margin           : 0;
  }
  .container {
    position         : relative;
    box-sizing       : border-box;
    display          : flex;
    flex-direction   : column;
    justify-content  : center;
    height           : 100%;
    overflow         : hidden;
  }
  .skilltree {
    flex-direction: column;
    flex-grow: 1;
    background-color: #21252b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container_logo {
    flex-grow        : 1;
    position         : relative;
    box-sizing       : border-box;
    display          : flex;
    flex-direction   : column;
    justify-content  : center;
    max-height       : 100%;
    overflow         : hidden;
  }
  .logo {
    box-sizing       : border-box;
    flex-grow        : 1;
    padding          : 5%;
    background-color : #21252b;
    display          : flex;
    flex-direction   : column;
    align-items      : center;
    justify-content  : center;
    height           : 67%;
  }
  .presentation {
    box-sizing       : border-box;
    display          : flex;
    flex-direction   : row;
    flex-grow        : 1;
    height           : 33%;
    background-color : #21252b;
  }
  .image {
    position         : relative;
    flex-grow        : 1;
    width            : 33%;
    border           : 2px dashed white;
    margin           : 20px;
    overflow         : hidden;
  }
  .title {
    position: absolute;
    top: 30%;
    left: 30%;
    color: white;
    background-color: rgba(30, 30, 30, 0.6);
    font-size: 50px;
    font-family: mono;
    font-weight: 900;
    padding: 10px;
  }
  .title:hover {
    color: rgba(30, 30, 30, 0.6);
    background-color: white;
  }
`
var icon = logo({
  urls: getImages(),
  colors: [
    `hsla(${360*Math.random()},100%,60%,1)`,
    `hsla(${360*Math.random()},100%,60%,1)`,
    `hsla(${360*Math.random()},100%,60%,1)`,
  ]
})
function addShadow () {
  icon.style = `
    width: 100%;
    height: 100%;
    filter: drop-shadow(-5px -5px 500px hsla(${360*Math.random()},100%,60%,1));
    transition: 2s filter linear;`
  setTimeout(removeShadow, 2000)
}
function removeShadow () {
  icon.style = `
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 0px 0px #21252b);
    transition: 2s filter linear;`
  setTimeout(addShadow, 2000)
}
setTimeout(addShadow, 2000)

var link = 'https://github.com/ethereum/play'
var el = bel`<div class=${css.container}>
  <div class=${css.main}>
    <div class=${css.container_logo}>
      <a href=${link} target="_blank" class=${css.logo}>${icon}</a>
    </div>
    <div id="skilltree" class=${css.skilltree}>
      <h1 class=${css.title} style="  top: 0; left: 0; position: relative;"> Curriculum </h1>
    </div>
  </div>
  <div class=${css.presentation}>
    <a class=${css.image} href="https://play.ethereum.org/workshop-solidity/" target="_blank">
    <div class=${css.title}> workshop </div>
    <img src="workshop.png">
    </a>
    <a class=${css.image} href="https://ethereum-play.github.io/editor-solidity/" target="_blank">
    <div class=${css.title}> editor </div>
    <img src="editor.png">
    </a>
    <a class=${css.image} href="https://github.com/ethereum/play/milestones?direction=asc&sort=title&state=open" target="_blank">
    <div class=${css.title}> roadmap </div>
    <img src="roadmap.png">
    </a>
  </div>
</div>`

document.body.appendChild(el)


function getImages () {
  const pick1 = () => Math.random() < 0.75 ? '' :
    'https://c2.staticflickr.com/2/1714/25721703222_3c19da395a_b.jpg'
  const pick2 = () => Math.random() < 0.75 ? '' :
    'https://i.imgur.com/Q4qAH30.jpg'
  const pick3 = () => Math.random() < 0.75 ? '' :
    'https://i.imgur.com/sZK75ef.png'
  var items = [
    // 'https://thumbs.dreamstime.com/t/seamless-pattern-background-ethereum-signs-vector-illustration-118033192.jpg',
    // 'http://cryptoventures.io/wp-content/uploads/2018/07/ximage-3375234_1280-550x275.png.pagespeed.ic.G-wZvuZdxH.png',
    // 'https://semanticblocks.files.wordpress.com/2016/05/sbn.png',
    // 'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/tDtXElz/storyblocks-block-chain-technology-concept-illustration-blockchain_rNtA7bH6f_SB_PM.jpg',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsvQ5vy6020klLuB3i4QNN_Cr8iUjmBH4IdDafgbZCawAFwqK',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAbCFJ7VdVgAA5UoaWYuOLjOoOoPd8z__4ir_28XkpPvHTEHm8A'
  ]
  function pick () {
    var idx = Math.floor(Math.random()*items.length)
    var item = items[idx]
    items[idx] = ''
    return item
  }
  // return [pick(), pick(), pick()]
  return [pick1(), pick2(), pick3()]
}
