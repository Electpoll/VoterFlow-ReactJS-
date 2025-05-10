import BallotResults from '../../../components/ballot'
import { ELECTION_STATS, presidentData } from '../../../components/mock'
import Nav from '../../../components/nav'
import Sidebar from '../../../components/sidebar'
import { NumbersBox, StatBox } from '../../../components/statbox'


export default function Electionresults() {
    const {timeRemaining, totalVotes, votePercentage} = ELECTION_STATS

    
  return ( 
    <>
    <div className="flex min-h-screen">
    <Sidebar for="results" logout={false}/>

    <div className="p-8 w-full bg-gray-100">
           <div className="flex justify-end">
                  <Nav link="result"/>
            </div>

             <h2 className="text-xl font-medium my-5">Results are updated in real time.</h2>

               <div className="bg-black rounded-md shadow-md mt-5 py-5 sm:px-3 flex flex-col md:flex-row items-center md:justify-center gap-4 w-full">
          <div className="md:border-e-2 border-white space-y-4 w-3/5 pe-5">
            <p className='text-white'>Election ends in...</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {timeRemaining.map((i, index) => (
                <NumbersBox key={index} value={i.number} text={i.time}/>
              ))}
            </div>
          </div>
          
          <div className="md:border-e-2 border-white pe-5">
            <StatBox label="Votes so far..." value={totalVotes} text='People Voted' />
          </div>

          <StatBox label="Vote %..." value={`${votePercentage}%`} text='(People Voted %)' />
        </div>
        <div className="my-5">
        <BallotResults {...presidentData} />
        </div>

         <button className="mt-6 w-full bg-gray-400 text-white py-3 rounded-sm hover:bg-gray-800 transition-colors">
          Download Results
        </button>
    </div>


    </div>
    </>
  )
}
