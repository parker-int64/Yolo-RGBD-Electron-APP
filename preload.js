// TODO: Add more APIs the contextBridge
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld("api",{
    sendWinMinimizeSignal: () =>{
        ipcRenderer.invoke("win-minimize")
    },
    sendWinMaximizeSignal: () => {
        ipcRenderer.invoke("win-maximize")
    },
    sendWinCloseSignal: () =>{
        ipcRenderer.invoke("win-close")
    },

    // used in renderer process
    receive: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(event, ...args))
    },
})