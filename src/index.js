import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import myStore from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myStore.store}>
      <PersistGate loading={null} persistor={myStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
