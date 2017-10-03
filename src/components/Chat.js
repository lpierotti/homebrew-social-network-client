import React from 'react'
import {ActionCable} from 'react-actioncable-provider'
import {Launcher} from 'react-chat-window'

class Chat extends React.Component {

    constructor() {
        super()
        this.state = {
            text: ""
        }
    }
    

    onReceived = (message) => {
        console.log('RECEIVING', message.message)
        this.props.getGroupInfo(this.props.id)
    }

    sendMessage = () => {
        const message = this.refs.newMessage.value
        // Call perform or send
        this.setState({text: ""})
        this.refs.roomChannel.perform('send_message', {message})
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <Launcher
                    agentProfile={{
                      teamName: 'react-live-chat',
                      imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                    }}
                    onMessageWasSent={this.sendMessage}
                    messageList={this.props.messages}
                  />
                <ActionCable ref='roomChannel' channel={{channel: 'ChatroomChannel', room: `Group${this.props.id}`}} onReceived={this.onReceived} />
                {this.props.messages ?<div>
                    {this.props.messages.map((message) =>
                        <p key={message.id}>{message.body}</p>
                    )}
                </div> : null}
                <input onChange={this.handleChange} value={this.state.text} ref='newMessage' type='text' />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}

export default Chat


