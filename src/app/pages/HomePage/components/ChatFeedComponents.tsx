import styled, { css } from 'styled-components';

export const ColumnLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChatFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main {
    flex: 3;
    background-color: #252329;
    ${ColumnLayout};
  }

  .side,
  .mobile {
    flex: 1;
    background-color: #19191b;
    ${ColumnLayout}
  }

  @media screen and (max-width: 767px) {
    .main {
      flex: 1;
    }

    .side {
      display: none;
    }
  }
`;
