import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore} from "redux";

//
//
// const reducer = (state: any, action: any) => {
//     switch (action.type){
//         case
//         default:
//             return state;
//     }
//
// }
//
// const store = createStore()
//
//
//

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
