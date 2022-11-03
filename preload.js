const { contextBridge,ipcRendere } = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    // 这里注意避免将ipcRenderer等致命api直接挂载在window上，可能会导致安全问题
    sendMsg: (msg) => ipcRenderer.send('ipc-example', msg)  
})
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  })