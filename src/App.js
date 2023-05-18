import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Percent from './Pages/Percentages'
import Dashboard from './Pages/Dashboard'
import Messages from './Pages/Messages'
import Notifications from './Pages/Notification'
import Settings from './Pages/Settings'




function App() {
  return (
    <div className="Container">
      <div className='App'>
        <Sidebar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/:item'  element={<Home/>} />
              <Route path='/percent' element={<Percent/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/messages' element={<Messages/>} />
              <Route path='/notification' element={<Notifications/>}/>
              <Route path='/Setting' element={<Settings/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
