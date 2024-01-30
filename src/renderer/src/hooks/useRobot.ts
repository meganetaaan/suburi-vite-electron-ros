import { startRobot, stopRobot } from "@renderer/robotRenderer"
import { useCallback, useState } from "react"
import { RobotState } from "../../../interfaces/IRobot"

export const useRobot = () => {
  const [robot, setRobot] = useState<RobotState>({ state: 'UNKNOWN' })
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const clearErrorMessage = useCallback(() => {
    setErrorMessage(null)
  }, [])
  const start = useCallback(async () => {
    const result = await startRobot()
    if (result.success) {
      setRobot({
        ...robot,
        ...result.value
      })
    } else {
      setErrorMessage(result.message)
    }
  }, [])
  const stop = useCallback(async () => {
    const result = await stopRobot()
    if (result.success) {
      setRobot({
        ...robot,
        ...result.value
      })
    } else {
      setErrorMessage(result.message)
    }
  }, [])
  return {
    robot,
    errorMessage,
    clearErrorMessage,
    startRobot: start,
    stopRobot: stop,
  }
}