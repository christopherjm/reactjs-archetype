import { createStore } from 'redux';
import reducers from './rootReducer';

export default createStore(reducers, window.devToolsExtension && window.devToolsExtension());
