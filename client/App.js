import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/product/">
          <Main />
        </Route>
        <Route path="product/:id">
          <Details />
        </Route>
      </div>
    </BrowserRouter>
  );
}
export default App;