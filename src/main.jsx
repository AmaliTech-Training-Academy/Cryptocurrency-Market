import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store";
=======
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import {store} from "./store";
>>>>>>> 977fb35 ( feature:all toggle functions done)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
