import React from 'react'
import {ActionCable} from 'react-actioncable-provider'

class Chat extends React.Component {


    onReceived = (message) => {
        console.log('RECEIVING', message.message)
        this.props.getGroupInfo(this.props.id)
    }

    sendMessage = () => {
        const message = this.refs.newMessage.value
        // Call perform or send
        this.refs.roomChannel.perform('send_message', {message})
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <ActionCable ref='roomChannel' channel={{channel: 'ChatroomChannel', room: `Group${this.props.id}`}} onReceived={this.onReceived} />
                {this.props.messages ?<ul>
                    {this.props.messages.map((message) =>
                        <li key={message.id}><h1>{message.body}</h1></li>
                    )}
                </ul> : null}
                <input ref='newMessage' type='text' />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}

export default Chat


