import React from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import {store} from "./src/store";
import { Provider } from 'react-redux';

export default function App() {
  return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
  );
}
