const path = require("path");
const { app, BrowserWindow,ipcMain } = require("electron")
const WinState = require("electron-win-state").default //屏幕
console.log(WinState);
const winState = new WinState({
  defaultWidth: 800,
  defaultHeight: 600
})
const createWindow = () => {
  const win = new BrowserWindow({
    ...winState.winOptions,
    width:1000,
    height:800,
    minWidth: 1000,
    height: 800,
    minHeight: 800,
    x:100,
    Y:100,
    frame: false,
    show: false,
    webPreferences: {
        // nodeIntegration:true,//主线程
        // contextIsolation:false, //
      //  nodeIntegration:true,       // 为了解决require 识别问题
      //  contextIsolation: true,
      //  enableRemoteModule: true,
       // preload: __static + '/preload.js'
       preload: path.join(__dirname, 'preload.js'),
       // 关闭上下文隔离
       contextIsolation: false,
       nodeIntegration: true,
      //preload: path.join(__dirname, 'preload/preload.js')//预处理
    }
  });
  win.loadURL('http://127.0.0.1:5173/')
  //win.loadURL('https://www.baidu.com/')
  // win.loadFile('./index.html')

  win.webContents.openDevTools() //打开开发工具
  // process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';//关闭安全警告
  winState.manage(win)
  win.on('ready-to-show', () => {
    win.show()
  }) //打开窗口优雅些
  ipcMain.on('window-min',function(){
     win.minimize() //窗口最小化收到渲染进程的窗口最小化操作的通知，并调用窗口最小化函数，执行该操作
  })
  ipcMain.on('window-max',function () {
    if(win.isMaximized()){ // 为true表示窗口已最大化
      win.restore();// 将窗口恢复为之前的状态.
    }else{
      win.maximize();
    }
  })//最大化
  ipcMain.on('window-minimize', function () {
       win.minimize()
  }) //最小化

  ipcMain.on('window-restore', function () {
    win.restore()
  }) //恢复
  ipcMain.on('move-application',(event,res) => {
    // mainWindow 初始的BrowserWindow窗口
      win && win.setPosition(res.appX,res.appY)
    })
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 There, it's common
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('before-quit', () => {
  console.log('667')
})//关闭前
app.on('browser-window-blur', () => {
  console.log('777')
})//失去焦点
app.on('browser-window-focus', () => {
  console.log('888')
})//失去焦点

ipcMain.on('window-close',function (){
  app.quit()
})


 

