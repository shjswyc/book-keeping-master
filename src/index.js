import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './app/home/HomeView';
import '../public/css/global.css'

ReactDOM.render(
  <React.StrictMode>
    <HomeView />
  </React.StrictMode>,
  document.getElementById('root')
);