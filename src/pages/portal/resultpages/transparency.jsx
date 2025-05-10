import BallotResults from '../../../components/ballot'
import { ELECTION_STATS } from '../../../components/mock'
import Nav from '../../../components/nav'
import Sidebar from '../../../components/sidebar'
import { NumbersBox, StatBox } from '../../../components/statbox'
import { Users } from 'lucide-react'
export default function Transparency() {

     const {timeRemaining, totalVotes, votePercentage} = ELECTION_STATS

     const hallData = {
        title: "Votes Per Hall of Residence",
        items: [
        { name: "Nnamdi Azikwe Hall", votes: 954, icon: <Users /> },
        { name: "Queen Elizabeth Hall II", votes: 500, icon: <Users /> },
        { name: "Lord Tedder Hall", votes: 80, icon: <Users /> }
        ]
        };

  return (
       <>
        <div className="flex min-h-screen">
        <Sidebar for="results" logout={false}/>
    
        <div className="p-8 w-full bg-gray-100">
               <div className="flex justify-end">
                      <Nav link="result"/>
                </div>
    
                 <h2 className="text-xl font-medium my-5">Reports are updated in real time.</h2>
    
            <div className="bg-black rounded-md shadow-md mt-5 py-5 sm:px-5 flex flex-col md:flex-row items-center md:justify-center gap-10 w-full">
              <div className="md:border-e-2 border-white pe-5">
                   <StatBox label="Total Votes..." value={totalVotes} text='People Voted' />
              </div>
               <div className="md:border-e-2 border-white pe-5">
                   <StatBox label="Accredited voters..." value={2165} text='People Accredited' />
              </div>
              
              <div className="md:border-e-2 border-white pe-5">
                    <StatBox label="Vote %..." value={`${votePercentage}%`} text='(People Voted %)' />
              </div>

                 <StatBox label="Access tally..." value={1287} text='Users Logged in' />
    
           
            </div>
            <div className="my-5">
            <BallotResults {...hallData} />
            </div>
    
             <button className="mt-6 w-full bg-gray-400 text-white py-3 rounded-sm hover:bg-gray-800 transition-colors">
              Download Results
            </button>
        </div>
    
    
        </div>
        </>
  )
}
