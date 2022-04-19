import { MessageResponseItem } from 'types/Chat';

export interface ChatState {
  messages: MessageResponseItem[];
  userMessage: string;
  chatLoading: boolean;
}

export type ContainerState = ChatState;
