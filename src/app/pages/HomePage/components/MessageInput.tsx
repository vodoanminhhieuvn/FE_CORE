import React from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import IconButtonOutline from 'app/components/IconButtonOutline';

import { ChatInputContainer } from './ChatComponents';
import { InputGroup, FormControl } from '@themesberg/react-bootstrap';

export default function MessageInput() {
  return (
    <ChatInputContainer>
      <InputGroup>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <IconButtonOutline icon={faPaperPlane} />
    </ChatInputContainer>
  );
}
