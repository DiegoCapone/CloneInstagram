import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigator from './src/Navigator'

import storeConfig from './src/Store/StoreConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://cloneinstagram-87f37.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
