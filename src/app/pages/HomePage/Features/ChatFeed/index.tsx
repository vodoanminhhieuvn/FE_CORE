import { useDispatch } from 'react-redux';
import { OnChangeEvent } from 'types/Event';
import MessageInput from '../../components/MessageInput';
import { Messages } from '../../components/Messages';
import { useChatSlice } from './slice';

// ? Importing styles
import styles from './styles.module.scss';

export default function ChatFeedPage() {
  const { actions: chatFeedActions } = useChatSlice();

  const dispatch = useDispatch();

  const onChangeUserMessage = (evt: OnChangeEvent) => {
    dispatch(chatFeedActions.changeUserMessage(evt.currentTarget.value));
  };

  const onClick = () => {
    dispatch(chatFeedActions.submitUserMessage());
  };

  const mainContent = (
    <div className={styles.main}>
      <Messages />
      <MessageInput onClick={onClick} onChange={onChangeUserMessage} />
    </div>
  );

  return (
    <div className={styles.container}>
      {/* <div className={styles.side}></div> */}
      {mainContent}
    </div>
  );
}
