const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080
    })

    win.loadFile('index.html')
    // This will remove the menu bar
    win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})