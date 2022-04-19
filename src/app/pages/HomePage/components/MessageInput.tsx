import React from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import { ChatInputContainer } from './ChatComponents';
import { InputGroup, FormControl, Button } from '@themesberg/react-bootstrap';
import { OnChangeEvent } from 'types/event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { selectUserMessage } from '../Features/ChatFeed/slice/selectors';

export default function MessageInput(props: {
  onChange: (evt: OnChangeEvent) => void;
  onClick: () => void;
}) {
  const userMessage = useSelector(selectUserMessage);

  return (
    <ChatInputContainer>
      <InputGroup>
        <FormControl
          value={userMessage}
          placeholder="Message"
          aria-label="Message"
          aria-describedby="basic-addon1"
          onChange={props.onChange}
        />
        <Button onClick={props.onClick} id="button-addon2">
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </InputGroup>
    </ChatInputContainer>
  );
}
