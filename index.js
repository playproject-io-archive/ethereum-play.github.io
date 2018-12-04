const bel = require('bel')
const csjs = require('csjs-inject')
const logo = require('play-logo')

document.title = 'play'

const style = document.createElement('style')
style.setAttribute('class', 'base')
style.textContent = [
  '*, *:before, *:after { box-sizing: inherit; }',
  'body { margin: 0; height: 100vh; min-height: 100vh; }',
].join('\n')
document.head.appendChild(style)

const css = csjs`
  .logo {
    box-sizing       : border-box;
    width            : 100%;
    height           : 100%;
    padding          : 5%;
    background-color : #21252b;
    display          : flex;
    flex-direction   : column;
    align-items      : center;
    justify-content  : center;
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
var el = bel`<a href=${link} target="_blank" class=${css.logo}>${icon}</a>`

document.body.appendChild(el)


function getImages () {
  const pick1 = () => Math.random() < 0.75 ? '' :
    'https://us.123rf.com/450wm/popaukropa/popaukropa1802/popaukropa180200092/95634477-blockchain-network-background-technology-block-chain-abstract-seamless-pattern.jpg'
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
