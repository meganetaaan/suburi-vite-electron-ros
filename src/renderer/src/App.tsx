import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { useRobot } from './hooks/useRobot'
import { useCallback } from 'react'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const {
    robot,
    startRobot,
    stopRobot
  } = useRobot()

  const handleStartButtonClick = useCallback(() => {
    startRobot()
  }, [])

  const handleStopButtonClick = useCallback(() => {
    stopRobot()
  }, [])

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      {robot.state}
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={handleStartButtonClick}>
            Start Robot
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={handleStopButtonClick}>
            Stop Robot
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
