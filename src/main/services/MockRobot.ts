import { Maybe } from '../interfaces/util'
import { Robot, RobotState } from '../interfaces/IRobot'

export class MockRobot implements Robot {
  constructor() { }
  async start(): Promise<Maybe<RobotState>> {
    return {
      success: true,
      value: {
        state: 'WORKING'
      }
    }
  }
  async stop(): Promise<Maybe<RobotState>> {
    return {
      success: true,
      value: {
        state: 'IDLE'
      }
    }
  }
}