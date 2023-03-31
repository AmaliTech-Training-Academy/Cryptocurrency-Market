import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
<<<<<<< HEAD
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store";
=======
=======
>>>>>>> e14c10a4edabf5371579b050cb54b4c86a7d3e07
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import {store} from "./store";
<<<<<<< HEAD
>>>>>>> 977fb35 ( feature:all toggle functions done)
=======
>>>>>>> e14c10a4edabf5371579b050cb54b4c86a7d3e07

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
