import React from 'react';
import {
  ChatMessage,
  ChatMessageContainer,
  ChatTextBox,
} from './ChatComponents';

export function Messages() {
  return (
    <div id="chat" className="chat-container">
      <div className="chatWrapper">
        <Message message="New Message" />
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
