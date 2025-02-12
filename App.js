import { BrowserRouter  as Router,Routes,Route, Switch ,Link, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import './app.css'
import Home from './components/Home/Home';
import Main from './components/Main/Main';



const  router =  createRoutesFromElements([
  <Routes>
     <Route  exact path="/" element={<Home/>}></Route>
     <Route exact path="/" Component={<Main/>}></Route>
  </Routes>

])

const  Routerdefinition = createBrowserRouter(router)


  
      function App() {
        <RouterProvider router={Routerdefinition}/>
      }

export default App