import { ipcMain } from 'electron'
import { Robot } from './interfaces/IRobot'

export async function installRobot(ipc: typeof ipcMain, robot: Robot) {
  ipc.handle('robot', async (_event, arg) => {
    console.log(`received: ${arg}`)
    switch (arg) {
      case 'start':
        console.log(`starting robot...${robot}`)
        return await robot?.start()
      case 'stop':
        return await robot?.stop()
    }
    return {
      success: false,
      message: `invalid command: ${arg}`
    }
  })
}