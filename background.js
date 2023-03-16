chrome.contextMenus.create({
  id: "ask",
  title: "Ask ChatGPT 🧑‍💻",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id , info.selectionText)
});
