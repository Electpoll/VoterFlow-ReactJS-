import PropTypes from 'prop-types';
import { ELECTION_STATS, MOCK_USER, CANDIDATES } from '../mock';

export default function Dashboard() {
  const { timeRemaining, totalVotes, votePercentage, accreditedVoters } = ELECTION_STATS;
  const { name } = MOCK_USER;

  return (
    <div className="p-8 w-full bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Welcome {name},</h2>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatBox label="Election ends in" value={`${timeRemaining.hours}h ${timeRemaining.minutes}m`} />
          <StatBox label="Votes so far" value={totalVotes} />
          <StatBox label="Vote %" value={`${votePercentage}%`} />
          <StatBox label="Accredited Voters" value={accreditedVoters} />
        </div>
        
        <YourDetailsSection />
        <AvailablePositionsSection />
      </div>
    </div>
  );
}

StatBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};
function StatBox({ label, value }) {
  return (
    <div className="bg-[#FF9900] text-black p-4 rounded-lg text-center">
      <div className="font-bold text-xl">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}

function YourDetailsSection() {
  const { name, email, matricNumber, level } = MOCK_USER;
  
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Your Details</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <DetailItem label="NAME" value={name} />
        <DetailItem label="EMAIL" value={email} />
        <DetailItem label="MATRIC NUMBER" value={matricNumber} />
        <DetailItem label="LEVEL" value={level} />
      </div>
    </div>
  );
}

DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};
function DetailItem({ label, value }) {
  return (
    <div className="bg-gray-100 p-3 rounded-lg">
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function AvailablePositionsSection() {
  const { positions } = CANDIDATES;
  
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Available Positions</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {positions.map((position, index) => (
          <div 
            key={index} 
            className="bg-[#FF9900] text-black p-3 rounded-lg"
          >
            {position}
          </div>
        ))}
      </div>
      <button 
        className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors"
      >
        Proceed to Vote
      </button>
    </div>
  );
}
