import { useState } from 'react';
import './App.css';
import { Modal, Content } from 'components';
import { GlobalState, devState } from 'globalState';

const App = () => {
  const [state, setState] = useState(devState);
  return (
    <GlobalState.Provider value={[state, setState]}>
      <div className="App">
        <Modal />
        <Content />
      </div>
    </GlobalState.Provider>
  );
}

export default App;
