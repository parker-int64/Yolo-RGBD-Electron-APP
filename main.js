// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, ipcMain} = require('electron')
const path = require('path')

function createWindow () {
  Menu.setApplicationMenu(null);
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, '/preload.js')

    }
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  
  // React localhost and port
  mainWindow.loadURL('http://localhost:3009/');

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Minimize the window
  ipcMain.on("win-minimize",  ()=>{
    mainWindow.minimize();
  });

  // Maximize the window
  ipcMain.on("win-maximize",  ()=>{
    if (mainWindow.isMaximized()) {
      // restore if the window is already the maximize size
      mainWindow.unmaximize()
  } else {
      // maximize the window
      mainWindow.maximize()
  }
  });

  // Close the window
  ipcMain.on("win-close",  ()=>{
    mainWindow.close();
  });

  // change the maxmize icon to the overlap 
  mainWindow.on('maximize', ()=>{
    mainWindow.webContents.send("change-icon")
  });

  // well, change the maximize icon when restored to the default size
  mainWindow.on('unmaximize', ()=>{
      mainWindow.webContents.send("restore-icon")
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.