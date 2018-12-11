import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common.scss';
import * as serviceWorker from './serviceWorker';
 // 引入路由配置组件
 import Root from './router';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
