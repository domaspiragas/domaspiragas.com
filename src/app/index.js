import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ContentWrapper = styled.div`
        display: flex;
        justify-content: center;
    `;

const App = props => {
    console.log('styledz', styled.div);
  return (
      <ContentWrapper>
          <img src="src/resources/PageUnderConstruction.png" />
      </ContentWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

