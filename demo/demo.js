const bel = require('bel')
const csjs = require('csjs-inject')
const logo = require('play-logo')

const orgpage = require('../')

document.title = 'play'

const style = document.createElement('style')
style.textContent = [
  '*, *:before, *:after { box-sizing: inherit; }',
  'body { margin: 0; height: 100vh; min-height: 100vh; }',
].join('\n')
document.head.appendChild(style)

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


// @DONE: add standalone play-skilltree page
// @TODO: use skilltrees page and just make play-skilltree use a custom theme

// @TODO: add skilltree link
// @TODO: later - replace skilltree link with codecamp page
// @TODO: add link to global skilltree into codecamp page
// @TODO: replace workshop-solidity with workshop-create-workshop
// http://ethereum-play.github.io/play-skilltree

// @TODO: Add logo browser tab icon for play.ethereum.org page

setTimeout(async () => {
  var el = bel`<div class=${css.container}>
    <a href=${link} target="_blank" class=${css.logo}>${icon}</a>
    <div class=${css.presentation}>
      <a class=${css.image} href="https://ethereum-play.github.io/editor-solidity/" target="_blank">
        <div class=${css.title}> solidity editor </div>
        <img src="demo/assets/editor.png">
      </a>
      <a class=${css.image} href="https://ethereum-play.github.io/workshop-create-workshop/" target="_blank">
        <div class=${css.title}> create workshop </div>
        <img src="demo/assets/workshop.png">
      </a>
      <a class=${css.image} href="https://ethereum-play.github.io/skilltree/" target="_blank">
        <div class=${css.title}> learn solidity </div>
        <img src="demo/assets/skilltree.png">
      </a>
    </div>
  </div>`
  // <a class=${css.image} href="https://play.ethereum.org/workshop-solidity/" target="_blank">
  // <div class=${css.title}> workshop </div>
  // <img src="workshop.png">
  // </a>
  document.body.appendChild(el)
}, 0)


const css = csjs`
.container {
  position         : relative;
  box-sizing       : border-box;
  display          : flex;
  flex-direction   : column;
  justify-content  : center;
  height           : 100%;
  width            : 100%;
  flex-grow        : 1;
  margin           : 0;
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
  margin           : 30px;
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
