import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home/page';
import LearnMore from './pages/portal/dashboard/learnmore';
import Login from './pages/login/page';
import Dashboard from './pages/portal/dashboard/dashboard';
import CastVote from './pages/portal/votingpages/castvotes';
import Success from './pages/portal/votingpages/success'; 
import Electionresults from './pages/portal/resultpages/electionresults';
import Transparency from './pages/portal/resultpages/transparency';

function App() {


  return (
    <div className='syne'>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/learnmore' element={<LearnMore/>}/>
      <Route exact path='/voting-portal/' element={<Dashboard/>}/>
      <Route exact path="/voting-portal/cast-vote" element={<CastVote />} />
      <Route exact path='/voting-portal/success' element={<Success/>}/>
      <Route exact path='/voting-portal/results' element={<Electionresults/>}/>
      <Route exact path='/voting-portal/transparency-report' element={<Transparency/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
