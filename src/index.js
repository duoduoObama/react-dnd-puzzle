import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/dragelement/App';
import * as serviceWorker from './serviceWorker';
// import Knight from './component/dragelement/king';
// import Square from './component/dragelement/square';
// import Board from './component/dragelement/board';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
