import React from 'react';
import './App.css';
import {Route,Routes,BrowserRouter, Navigate} from 'react-router-dom'
import Home from './Pages/Home';
import Register from './Pages/Register';
import BookingCar from './Pages/BookingCar';
import Login from './Pages/Login';
import './index.css';





function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
<Routes>  

     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login></Login>} />
     <Route path='/register' element={<Register></Register>} />
     <Route path='/bookingcar' element={<BookingCar></BookingCar>} />
   

</Routes>  
</BrowserRouter>
</div>  
  );
}

//    export function protectedRoute(props) {
//   if (localStorage.getItem('User')) {
//     return <Route {...props} />;
//   } else {
//     return <Navigate to='/login' />;
//   }
// }


export default App;
