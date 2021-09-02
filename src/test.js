import string from './css.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
let n = 1
demo.innerHTML = string.substring(0, n)//返回字符串的子字符串写入到页面中
demo2.innerText = string.substring(0, n)//写到页面的文本中

let time = 50
const run = () => {//运行
  if (id > string.length) {//如果id大于字符串的长度
    window.clearInterval(id)//清除调用函数
    return//直接返回
  }
  n += 1
  demo.innerHTML = string.substring(0, n)
  demo2.innerText = string.substring(0, n)
  demo2.scrollTop = demo2.scrollHeight//demo2的滚动最大高度等于自身的滚动高度
}
const play = () => {//调用事件
  return setInterval(run, time)//按时间调用这个函数都会有个id值，表示调用了多少次
}
let id = play()
const pause = () => {//清除调用事件
  return window.clearInterval(id)
}
const play1 = () => {
  pause()
  id = play()
}
const slow = () => {
  pause()
  time = 100
  id = play()
}
const normal = () => {
  pause()
  time = 25
  id = play()
}
const fast = () => {
  pause()
  time = 0
  id = play()
}
document.querySelector('#btnPause').onclick = pause
document.querySelector('#btnPlay').onclick = play1
document.querySelector('#btnSlow').onclick = slow
document.querySelector('#btnNormal').onclick = normal
document.querySelector('#btnFast').onclick = fast