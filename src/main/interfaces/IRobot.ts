import { Maybe } from "./util"

export interface Robot {
  start: () => Promise<Maybe<RobotState>>
  stop: () => Promise<Maybe<RobotState>>
}

export interface RobotState {
  state: 'WORKING' | 'IDLE' | 'UNKNOWN'
}
