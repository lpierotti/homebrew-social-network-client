import React, { Component, PropTypes } from 'react'
import {ActionCable} from 'react-actioncable-provider'

export default class Chat extends React.Component {
    
    constructor() {
    	super()
    	this.state = {
	      messages: []
	    };
    }
    

    onReceived (message) {
        this.setState({
            messages: [
                ...this.state.messages,
                message
            ]
        })
    }

    sendMessage = () => {
        const message = this.refs.newMessage.value
        // Call perform or send
        this.refs.roomChannel.perform('sendMessage', {message})
    }

    render () {
        return (
            <div>
                <ActionCable ref='roomChannel' channel={{channel: 'ChatroomsChannel', room: `Group${this.props.id}`}} onReceived={this.onReceived} />
                <ul>
                    {this.state.messages.map((message) =>
                        <li key={message.id}>{message.body}</li>
                    )}
                </ul>
                <input ref='newMessage' type='text' />
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}


