import React, { Component, PropTypes } from 'react'
import {ActionCable} from 'react-actioncable-provider'

export default class Chat extends React.Component {
    
    constructor() {
    	super()
    	this.state = {
	      messages: []
	    };
    }
    

    onReceived = (message) => {
        console.log('RECEIVING', message.message)
        this.setState({
            messages: [
                ...this.state.messages,
                message.message
            ]
        })
    }

    sendMessage = () => {
        const message = this.refs.newMessage.value
        // Call perform or send
        this.refs.roomChannel.perform('send_message', {message})
    }

    render () {
        return (
            <div>
                <ActionCable ref='roomChannel' channel={{channel: 'ChatroomChannel', room: `Group${this.props.id}`}} onReceived={this.onReceived} />
                <ul>
                    {this.state.messages.map((message) =>
                        <li key={message.id}><h1>{message.body}</h1></li>
                    )}
                </ul>
                <input ref='newMessage' type='text' />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}


