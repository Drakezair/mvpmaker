import React from 'react';

import './App.css'
import 'react-vertical-timeline-component/style.min.css';
import "react-datepicker/dist/react-datepicker.css";



import { Provider } from 'react-redux';
import store from './redux/store';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// APP
import AppRouter from './router';

function App() {
  return (<Provider store={store} ><AppRouter /> </Provider>);
}

export default App;
