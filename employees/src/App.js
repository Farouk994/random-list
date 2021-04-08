import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList'
import Employees from '../src/util/employees'


class App extends React.Component {
  state = {
    profiles : [ ],
  };

  render() {  
    return (
      <div>
        <EmployeeList/>
        <Employees/>
     </div>
    );
  }
}

export default App;
