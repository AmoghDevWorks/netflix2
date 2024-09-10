import React from 'react';
import ReactDOM from 'react-dom/client';
import Structure, { appRouter } from '.';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './components/utils/appStore';

ReactDOM.render(
    <Provider store={appStore}>
      <Structure />
    </Provider>,
    document.getElementById('root')
  );