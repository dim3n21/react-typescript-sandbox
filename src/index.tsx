import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './ToDoAppTypescript/Todo';
import RickAndMorty from './RickAndMorty/RickAndMorty';
import { StoreProvider } from './RickAndMorty/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <RickAndMorty />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);