import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allrediusers from './reducers/index.js';
import {Provider} from "react-redux";

const dataRediusers = createStore (
    allrediusers,
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={dataRediusers}>
   
     <BrowserRouter>
        <App />
     </BrowserRouter>
     
  </Provider>
    
   
 
)
