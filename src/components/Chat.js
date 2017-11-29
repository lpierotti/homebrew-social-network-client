import React from 'react'
import {ActionCable} from 'react-actioncable-provider'
import ChatBubble from 'react-chat-bubble';
import { Form, Button } from 'semantic-ui-react'

class Chat extends React.Component {

    constructor() {
        super()
        this.state = {
            text: "",
            open: false
        }
    }
    
    handleClick = (event) => {
        event.preventDefault()
        this.setState({open: !this.state.open})
    }

    onReceived = (message) => {
        this.props.getGroupInfo(this.props.id)
        
    }

    sendMessage = (event) => {
        event.preventDefault()
        const message = this.state.text
        // Call perform or send
        this.setState({text: ""})
        this.refs.roomChannel.perform('send_message', {message})
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    render () {
        if (this.state.open) {
            return (
                <div>
                    <div className='chat'>
                        <Button className='chatTop' onClick={this.handleClick}>Group Chat</Button>
                        <ChatBubble messages={this.props.messages} />
                        <ActionCable ref='roomChannel' channel={{channel: 'ChatroomChannel', room: `Group${this.props.id}`}} onReceived={this.onReceived} />
                    </div>
                    <div className='chatSubmit'>
                        <Form onSubmit={this.sendMessage}>
                            <Form.Group>
                                <Form.Input onChange={this.handleChange} value={this.state.text}/>
                                <Form.Input type='submit' />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            )
        } else {
            return <Button className='chatSubmit' onClick={this.handleClick}>Group Chat</Button>
        }
        
    }
}

export default Chat


