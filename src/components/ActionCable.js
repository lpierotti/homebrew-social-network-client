import ActionCable from 'actioncable'

const token = localStorage.getItem('jwt')
const App = {}
App.cable = ActionCable.createConsumer(`ws://localhost:300/cable?token=${token}`)

export default App.cable
