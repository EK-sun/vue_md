import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//swiper
import 'swiper/dist/css/swiper.min.css'

//全局样式
import './stylesheets/main.scss'

//全局配置
import './modules/config'

//router相关
import { 
    HashRouter as Router
} from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store'
console.log(store, store.getState())

ReactDOM.render(
    <Router>
        <App />
    </Router>    
    , document.getElementById('root'));
registerServiceWorker();
