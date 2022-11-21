import { legacy_createStore } from "redux";
import { reducer ,initState} from './reducer';

export const store = legacy_createStore(reducer,initState)