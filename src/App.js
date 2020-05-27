import React, { useReducer } from 'react';
import './App.css';
//import ComponentC from './components/ComponentC';
import DataFetching from './components/DataFetching';

export const CountContext = React.createContext() // contextapi

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;

    case "decrement":
      return state - action.payload;

    case "reset":
      return initialState

    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState) // useReducer. ilk parametre state(yani count state'dir)

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div>
        <DataFetching />
      </div>

      {/* <div className="App">
        Count from App : {count}
        <br />
        <ComponentC />
      </div> */}
    </CountContext.Provider>
  );
}

export default App;
