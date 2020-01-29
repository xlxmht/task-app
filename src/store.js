import { createStore } from 'redux';
import rootReducer from './reducers';
/* GLOBAL STATE */
const appStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

appStore.subscribe(function() {
  // console.log(appStore.getState());
})

export default appStore;