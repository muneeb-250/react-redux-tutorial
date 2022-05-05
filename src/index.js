import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import App from "./App";
const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
