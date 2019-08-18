import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const App = props => {
    console.log('styledz', styled);
  return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src="src/resources/PageUnderConstruction.png" />
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
`;