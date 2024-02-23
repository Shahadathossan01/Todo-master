import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layouts/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import TaskField from './components/TaskField/TaskField';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {path:'/login',element:<LoginPage></LoginPage>},
          {path:'/register',element:<RegisterPage></RegisterPage>},
          {path:'/',element:<PrivateRoute><TaskField></TaskField></PrivateRoute>}
        ]
    }
])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
