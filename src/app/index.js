import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <img src="src/resources/PageUnderConstruction.png" />
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));