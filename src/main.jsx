// import React from 'react'
// import ReactDOM from 'react-dom'

// import App from './App'

// // ReactDOM.render(<App/>,document.getElementById('root'))
// //hooks our App to root div
// //or
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Ensure correct import
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // ✅ (Optional: for global styles)
// import 'antd/dist/antd.css'
import "antd/dist/reset.css";
import store from './app/store';
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
 
    
  
);
