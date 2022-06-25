import { createStore } from 'redux';
import flipRoomReducer from './reducer/reducer';

fetch('https://cointelegraph.com/rss').then(res => res.json).then(data => console.log(data))


let store = createStore(flipRoomReducer, Rooms)

export default store;