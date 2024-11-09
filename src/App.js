

import { Provider } from 'react-redux';
import Body from './Component/Body';
import store from './Utils/store';



function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Body />
      </div>
    </Provider>

  );
}

export default App;
