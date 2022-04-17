import { MessageResponseItem } from 'types/Chat';

export interface ChatState {
  messages: MessageResponseItem[];
  loading: boolean;
}

export type ContainerState = ChatState;
