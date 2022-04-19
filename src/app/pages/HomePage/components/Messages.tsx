import React from 'react';
import { useSelector } from 'react-redux';
import { MessageResponseItem } from 'types/Chat';
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
        <ChatMessage>{props.message}</ChatMessage>
      </ChatTextBox>
    </ChatMessageContainer>
  );
}
