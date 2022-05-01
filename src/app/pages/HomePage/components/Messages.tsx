import { faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { MessageResponseItem } from 'types/Chat';
import { experiments } from 'webpack';
import { selectMessages } from '../Features/ChatFeed/slice/selectors';
import {
  ChatMessage,
  ChatMessageContainer,
  ChatTextBox,
} from './ChatComponents';

export function Messages() {
  const messages: MessageResponseItem[] = useSelector(selectMessages);

  return (
    <div className="chat-container">
      <div className="chatWrapper">
        {messages.map(message => (
          <Message key={message.text} message={message.text} />
        ))}
      </div>
    </div>
  );
}

export function Message(props: { message: string }) {
  return (
    <ChatMessageContainer>
      <ChatTextBox>
        <ChatMessage
          style={{
            float: 'right',
            marginRight: '18px',
            color: 'white',
            backgroundColor: '#3B2A50',
          }}
        >
          {props.message}
        </ChatMessage>
      </ChatTextBox>
    </ChatMessageContainer>
  );
}

export function MessageRefactor(props: { message: string }) {
  return <h1>Hello World</h1>;
}
