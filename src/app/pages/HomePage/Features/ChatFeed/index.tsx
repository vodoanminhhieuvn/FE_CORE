import { useSelector } from 'react-redux';
import { ChatFeed } from '../../components/ChatComponents';
import MessageInput from '../../components/MessageInput';
import { Messages } from '../../components/Messages';
import { selectMessages } from './slice/selectors';

// ? Importing styles
import styles from './styles.module.scss';

export default function ChatFeedPage() {
  const messages = useSelector(selectMessages);

  const mainContent = (
    <div className={styles.main}>
      <Messages />
      <MessageInput />
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.side}></div>
      {mainContent}
    </div>
  );
}
