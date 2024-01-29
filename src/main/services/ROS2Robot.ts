import { Client, Node, init } from "rclnodejs";
import { Robot, RobotState } from '../interfaces/IRobot'
import { Maybe } from "../interfaces/util";

export class ROS2Robot implements Robot {
  static robot: ROS2Robot
  static async getRobot() {
    if (ROS2Robot.robot == null) {
      await init()
      ROS2Robot.robot = new ROS2Robot()
    }
    return ROS2Robot.robot
  }
  #node: Node = new Node('robot')
  #client: Client<'example_interfaces/srv/AddTwoInts'>;
  constructor() {
    this.#node.createPublisher
    this.#client = this.#node.createClient('example_interfaces/srv/AddTwoInts', '/robot/command')
  }
  async start(): Promise<Maybe<RobotState>> {
    console.log('calling start')
    if (!this.#client.isServiceServerAvailable()) {
      console.warn('service not available')
      return {
        success: false,
        message: 'service not available'
      }
    }
    return new Promise((resolve, _) => {
      const request = {
        a: 0,
        b: 1
      }
      try {
        this.#client.sendRequest(request, (response) => {
          console.log(response.sum)
          resolve({ success: true, value: { state: 'WORKING' } })
        })
      } catch (_) {
        console.log('failed')
        resolve({
          success: false,
          message: 'failed to call service',
        })
      }
    })
  }
  async stop(): Promise<Maybe<RobotState>> {
    return new Promise((resolve, _) => {
      const request = {
        a: 0,
        b: 1
      }
      this.#client.sendRequest(request, (response) => {
        console.log(response.sum)
        resolve({ success: true, value: { state: 'WORKING' } })
      })
    })
  }
}