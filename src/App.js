import React from 'react'
import Nav from "./component/Nav"
import { AllRoutes } from './route';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
<AllRoutes/>

    </div>
  );
}

export default App