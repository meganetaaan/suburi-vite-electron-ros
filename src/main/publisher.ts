import * as rclnodejs from 'rclnodejs'

export function publishMessage(
  publisher: rclnodejs.Publisher<'std_msgs/msg/String'>,
  count: number
): void {
  const msg = rclnodejs.createMessageObject('std_msgs/msg/String')
  const data = `Hello from ROS2 with rclnodejs for ${count} times!`
  msg.data = data
  publisher.publish(msg)
  console.log(`sent message: ${data}`)
}

;(async (): Promise<void> => {
  await rclnodejs.init()
  console.log('initialized.')
  const node = new rclnodejs.Node('publisher_example_node')
  const publisher = node.createPublisher('std_msgs/msg/String', 'hello')
  let count = 0
  setInterval(() => {
    publishMessage(publisher, count++)
  }, 1000)
  node.spin()
})()
