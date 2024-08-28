import React from 'react';
import Dragdrop from './Dragdrop';
import { Count } from './Custom hooks/Count';
import { Anothercount } from './Custom hooks/Anothercount';
import ParentComponent from './Custom hooks/ParentCallback';
import { UseCallback } from './Custom hooks/UseCallback';
import LanguageSelector from './LanguageSelector';
import UseTranslation from './useTranslation';
import UseMemoExample from './Usememo';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageTranslation/LanguageSwitcher';
import Home from './LanguageTranslation/Home';
import About from './LanguageTranslation/About';
import Navigation from './LanguageTranslation/Navigation';
import Dashboards from './LanguageTranslation/Dashboards';

import { AuthProvider } from './RoleBasedapproach/AuthContext';
import { Login } from './LanguageTranslation/Login';
import PrivateRoute from './LanguageTranslation/PrivateRoute';


const App = () => {
  return (
  <div>
   {/* <Dragdrop/> */}
   {/* <Count/> */}
   {/* <Anothercount/> */}
   {/* <ParentComponent/> */}
   {/* <UseCallback/> */}
{/* <UseTranslation/>  */}
{/* <UseMemoExample/> */}
{/* <LanguageSwitcher/>
<Home/>
<About/> */}
  <AuthProvider>
      <Router>
        <div>
          <LanguageSwitcher />
          <Navigation />
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route
              element={
                <PrivateRoute role="admin"/>}
>                <Route path='/about' element={ <About/>}/>
             
            </Route>
            <Route
              element={
                <PrivateRoute role="user"/>}
>                <Route path='/home' element={ <Home/>}/>
             
            </Route>
           
              <Route path='/dashboards' element={ <Dashboards />}/>
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
 









{/* 
 <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"><AdminDashboards /></ProtectedRoute>} />
          <Route path="/user-dashboard" element={<ProtectedRoute role="user"><UserDashboards /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider> */}


    

   
  </div>
  );
};

export default App;
