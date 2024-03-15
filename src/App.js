import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Router, Routes, Route, Link  } from 'react-router-dom';

import DirectorsPage from './Component/ArrayComponent';
import ToggleButtonComponent from './Component/statecomponent';
//import images from "./images/images.png";
import DataFetchingComponent from './Component/DataFetchingComponent';
import CountriesComponent from './Component/DataFetchingComponent';
import EmpArrayComponent from './Component/ArrayComponent';
import EmployeeListComponent from './Component/BootstrapCardComponent';
import StudentDataFetchingComponent from './Component/DataFetchingComponent';
import EmployeeDataFetchingComponent from './Component/Week5';
import EventHandlingComponent from './Component/EventHandling';
import MyPropsComponent from './Component/W3_PropsComponent';
import StudentUseEffectComponent from './Component/Week4';
import TernaryOperatorComponent from './Component/Week6';
import EmployeeBootstrapDataFetchingComponent from './Component/Week7';
import FormsComponent from './Component/Forms';
import RegistrationPage from './Component/RegistrationPage';
import RegistrationComponent from './Component/RegistrationPage';
import Login from './Component/Login';
import HomePage from './Component/HomePage';
















function App() {



  return (
    <div className="App">
      
      <h1 className="text-secondary" style={{textAlign: 'center'}}>Welcome to My React Application</h1>

      <div className='container mt-3'>
          {/* <MyPropsComponent name="Raju" />
          <MyPropsComponent name="Raju" age="25"/> */}
          {/* <h3 className='text-primary'>Props Object Destructing......</h3> */}
          {/* <MyPropsComponent/> */}
          {/* <DirectorsPage/> */}
          {/* <ToggleButtonComponent/> */}
         
          
          {/* <h3 className='text-primary'>Array of Objects......</h3>
          {/* <EmpArrayComponent/> */}
           {/* <DataFetchingComponent/> */}
           {/* <StudentDataFetchingComponent/> */}
           {/* <CountriesComponent/> */}
          <hr/>
          {/* <h3 className='text-primary'>BootstrapCard Component......</h3> */}
          {/* <EmployeeListComponent/> */}
          {/* <EmployeeDataFetchingComponent/>  */}

          {/* <h3 className='text-primary'>EventHandling Component......</h3> */}
          {/* <EventHandlingComponent/> */}
          
          <div className='container'>
            
          <BrowserRouter>
            
              <Routes>
                  <Route path="/W3_PropsComponent" element={<MyPropsComponent/>}/>
                  <Route path='/statecomponent' element={<ToggleButtonComponent/>}/>
                  <Route path='/Week4' element={<StudentUseEffectComponent/>}/>
                  <Route path='/Week5' element={<EmployeeDataFetchingComponent/>} />
                  <Route path='/Week6' element={<TernaryOperatorComponent/>} />
                  <Route path='/Week7' element={<EmployeeBootstrapDataFetchingComponent/>} />
                  <Route path='/EventHandling' element={<EventHandlingComponent/>} />
                  <Route path='/Forms' element={<FormsComponent/>} />
                  <Route path='/RegistrationPage' element={<RegistrationComponent/>} />
                  <Route exact path='/' element={<Login/>}/>
                  <Route exact path='/Login' element={<Login/>}/>

                  <Route path='/HomePage' element={<HomePage/>}/>

              </Routes>
              </BrowserRouter>
          </div>
      </div>
      
    </div>
  );
}

export default App;
