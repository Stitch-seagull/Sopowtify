const {
  app,
  BrowserWindow
} = require('electron')
const package = require('../package.json')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    title: 'Sopowtify',
    icon: './assets/logo.ico'
  })

  mainWindow.setTitle(package.productName)

  mainWindow.loadFile('src/pages/bibliothèque.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
