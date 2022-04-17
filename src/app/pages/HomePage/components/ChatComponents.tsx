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
  margin: 30px 0px 30px 20px;
`;

export const ChatMessage = styled.p`
  color: #e0e0e0;
  font-size: 14px;
  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
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
