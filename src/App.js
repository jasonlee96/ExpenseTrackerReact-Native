import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './Router';
import Database from './components/Database';

class App extends Component {
  componentDidMount(){
    let db = new Database();
    // db.listExpenseCategory().then((data)=>{
    //   console.log(data);
    // }).catch((error)=>console.log("Moutnerror: " + error));
  }
  render (){
    //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
