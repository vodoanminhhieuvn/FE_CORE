import styled from 'styled-components';

export const ChatFeed = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  background-color: rgb(240, 240, 240);
`;

export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const ChatMessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ChatTextBox = styled.div`
  width: 100%;
  display: inline-block;
`;

export const ChatMessage = styled.p`
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  max-width: 60%;
`;

export const ChatInputContainer = styled.div`
  padding: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 95%;
  background-color: #3c393f;
  align-self: center;
  border-radius: 8px;
`;
