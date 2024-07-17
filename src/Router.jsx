// import React from 'react'
// import { Outlet, Route, Routes } from 'react-router-dom'
// import App from './App'
// import Login from './components/Login'
// import HomePage from './pages/HomePage'
// import Registration from './components/Registration'
// import States from './pages/States'
// import Hotels from './pages/Hotels'
// import StateAndLoader from './pages/States/StateAndLoader'
// import MyBookings from './pages/mybookings/MyBookings'
// import AdminDashboard from './pages/AdminDashboard'
// import Users from './pages/AdminDashboard/Users'
// import AdminSidebar from './pages/AdminDashboard/AdminSidebar'
// import Queries from './pages/AdminDashboard/Queries'
// import AddHotels from './pages/AdminDashboard/AddHotels'
// import AddStates from './pages/AdminDashboard/AddStates'

// const Router = () => {
//   return (
//     <Routes>
//         <Route path='/' element={<App/>}>
//                 <Route path='' element ={<HomePage/>}/>
//                 <Route path='/login' element={<Outlet/>} >
//                   <Route index element={<Login/>}/>
//                   <Route path='/login/registration' element={<Registration/>} />
//                 </Route>
//                 <Route path='/states' element={<StateAndLoader/>} />
//         <Route path='/hotels' element={<Hotels />} />
        
//         <Route path='/mybookings' element={<MyBookings/>} />
//         {/* <Route path='/admindashboard' element={<AdminDashboard/>} /> */}
//         <Route path='/admindashboard' element={<AdminSidebar/>}>
//             <Route index element={<AdminDashboard/>} />
//             <Route path='/admindashboard/users' element={<Users/>} />
//             <Route path='/admindashboard/queries' element={<Queries/>} />
//             <Route path='/admindashboard/addhotels' element={<AddHotels/>} />
//             <Route path='/admindashboard/addstates' element={<AddStates/>} />

//         </Route>


//         </Route>
//     </Routes>
//   )
// }

// export default Router
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import HomePage from './pages/HomePage'
import Registration from './components/Registration'
import States from './pages/States'
import Hotels from './pages/Hotels'
import StateAndLoader from './pages/States/StateAndLoader'
import MyBookings from './pages/mybookings/MyBookings'
import AdminDashboard from './pages/AdminDashboard'
import Users from './pages/AdminDashboard/Users'
import AdminSidebar from './pages/AdminDashboard/AdminSidebar'
import Queries from './pages/AdminDashboard/Queries'
import AddHotels from './pages/AdminDashboard/AddHotels'
import AddStates from './pages/AdminDashboard/AddStates'
import { ContactProvider } from '../src/context/ContactContext'; // Adjust the path as necessary
import TourPackages from './pages/TourPackages'

const Router = () => {
  return (
    <ContactProvider>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<HomePage />} />
          <Route path='/login' element={<Outlet />}>
            <Route index element={<Login />} />
            <Route path='/login/registration' element={<Registration />} />
          </Route>
          <Route path='/states' element={<StateAndLoader />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/tours' element={<TourPackages />} />
          <Route path='/mybookings' element={<MyBookings />} />
          <Route path='/admindashboard' element={<AdminSidebar />}>
            <Route index element={<AdminDashboard />} />
            <Route path='/admindashboard/users' element={<Users />} />
            <Route path='/admindashboard/queries' element={<Queries />} />
            <Route path='/admindashboard/addhotels' element={<AddHotels />} />
            <Route path='/admindashboard/addstates' element={<AddStates />} />
          </Route>
        </Route>
      </Routes>
    </ContactProvider>
  )
}

export default Router;
