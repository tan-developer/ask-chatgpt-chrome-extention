var isPopup = false;
var x, y, YTop = 0;
const takeHTMLFileContent = async (url) => {
  const res = await fetch(url);

  const data = await res.text();
  return data;
};

const gotMessage = (message, sender, sendMessage) => {
  console.log(YTop);
  extention.style.top = `${y+YTop}px`;
  extention.style.left = `${x}px`;
  div.className = "show";
  console.log(message)
  document.getElementsByClassName("chatgpt__container")[0].innerHTML = message
};

chrome.runtime.onMessage.addListener(gotMessage);

var div = document.createElement("div");
div.id = "chatgpt__extentions";

// return actual url of inject url base on id of extention
var URLHtml = chrome.runtime.getURL("inject.html");

// console.log(URLHtml);

takeHTMLFileContent(URLHtml).then((text) => {
  div.innerHTML = text;
});

document.body.appendChild(div);

const extention = document.getElementById("chatgpt__extentions");

document.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
});

window.addEventListener("scroll", function (event) {
  YTop = this.scrollY
});

window.addEventListener("load", function (event) {
  YTop = this.scrollY
});
