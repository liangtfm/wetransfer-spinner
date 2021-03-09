import { createStore as reduxCreateStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "START_UPLOAD":
      return Object.assign({}, state, {
        progress: state.progress + 10,
      });
    case "CANCEL_UPLOAD":
      return Object.assign({}, state, {
        progress: 0,
      });
    case "CHANGE_THEME":
      return Object.assign({}, state, {
        theme: state.theme === "light" ? "dark" : "light",
      });
    default:
      return state;
  }
};

const initialState = { progress: 0, theme: "light" };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
