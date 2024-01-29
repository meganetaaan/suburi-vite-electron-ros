// import { ipcRenderer } from 'electron'
import { Maybe, isMaybe } from '../../main/interfaces/util'
import { RobotState } from '../../main/interfaces/IRobot'

const ipcRenderer = window.electron.ipcRenderer
export async function startRobot(): Promise<Maybe<RobotState>> {
  const result = await ipcRenderer.invoke('robot', 'start')
  isMaybe<RobotState>(result)
  return result
}

export async function stopRobot(): Promise<Maybe<RobotState>> {
  const result = await ipcRenderer.invoke('robot', 'stop')
  isMaybe<RobotState>(result)
  return result
}
