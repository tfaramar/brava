import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';
import ScrollToTop from './scrollTop';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <ScrollToTop />
            <App />
        </HashRouter>
    </Provider>
);

export default Root;