import './App.css';
import Homepage from './components/homepage/homepage';
import Results from './components/results/results';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/page';
import Dashboard from './components/portal/portal';
import CastVote from './components/portal/votingpages/castvotes';
import VerifyChoices from './components/portal/votingpages/verifychoices';
import CheckDetails from './components/portal/votingpages/check-details';
import ElectionResults from './components/portal/resultpages/electionresults';
import TransparencyReport from './components/portal/resultpages/transparencyreports';
function App() {


  return (
    <div className='body syne'>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/portal' element={<Dashboard/>}/>
      <Route exact path='/results' element={<Results/>}/>
      <Route path="/portal/cast-vote" element={<CastVote />} />
      <Route path="/portal/verify-choices" element={<VerifyChoices />} />
      <Route path='/portal/check-details' element={<CheckDetails />} />
      <Route path="/portal/results" element={<ElectionResults />} />
      <Route path="/portal/transparency-report" element={<TransparencyReport />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
