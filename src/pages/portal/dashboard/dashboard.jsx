import { ELECTION_STATS, MOCK_USER, CANDIDATES } from '../../../components/mock';
import Sidebar from '../../../components/sidebar';
import Nav from '../../../components/nav';
import { StatBox, NumbersBox } from '../../../components/statbox';
import { Section } from '../../../components/section';


export default function Dashboard() {
  const { timeRemaining, totalVotes, votePercentage } = ELECTION_STATS;
  const { name } = MOCK_USER;
  const { positions } = CANDIDATES;

  return (
    <div className="flex">
      <Sidebar for="voting" logout={true}/>

      <div className="p-5 md:p-8 min-h-screen xl:h-full min-w-full bg-gray-100">
        <div className="flex justify-end">
          <Nav link="dashboard"/>
        </div>

        <h2 className="text-lg font-bold mt-10">Welcome {name},</h2>
        
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
   
        <Section 
          headerText='Your Details' 
          subText='Verify that below are your details. If the details are not yours, ensure to report this to the electoral committee.'
          type="details"
          data={MOCK_USER}
        />
        
        <Section 
          headerText='Available Positions' 
          subText='Electoral positions available for voting.' 
          type="positions"
          data={positions}
        />

        <a href="/voting-portal/cast-vote">
        <button className="mt-6 w-full bg-black text-white py-3 rounded-sm hover:bg-gray-800 transition-colors">
          Proceed to Vote
        </button>
        </a>
      </div>
    </div>
  );
}


