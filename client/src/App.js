import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import theme from './theme';
import { Provider } from 'react-redux'
import { store } from './store'
import './assets/scss/index.scss';


const browserHistory = createBrowserHistory()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
  )};
}
