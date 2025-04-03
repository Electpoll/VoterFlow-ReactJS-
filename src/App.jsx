import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home/page';
import Results from './pages/results/results';
import Login from './pages/login/page';
import Dashboard from './pages/portal/dashboard/dashboard';
import CastVote from './pages/portal/votingpages/castvotes';
// import VerifyChoices from './pages/portal/votingpages/verifychoices';
// import CheckDetails from './pages/portal/votingpages/check-details';
// import ElectionResults from './pages/portal/resultpages/electionresults';
// import TransparencyReport from './pages/portal/resultpages/transparencyreports';
function App() {


  return (
    <div className='syne'>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/voting-portal/' element={<Dashboard/>}/>
      <Route exact path="/voting-portal/cast-vote" element={<CastVote />} />
      {/* <Route path="verify-choices" element={<VerifyChoices />} />
      <Route path='check-details' element={<CheckDetails />} />
      <Route path="results" element={<ElectionResults />} />
      <Route path="transparency-report" element={<TransparencyReport />} /> */}
      <Route exact path='/results' element={<Results/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
