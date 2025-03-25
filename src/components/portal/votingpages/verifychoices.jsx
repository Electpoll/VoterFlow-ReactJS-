import PropTypes from 'prop-types';
import { CANDIDATES } from '../mock';

export default function VerifyChoices() {
  // In a real app, this would come from previous voting state
  const selectedCandidates = {
    president: CANDIDATES.president[0],
    vicePresident: CANDIDATES.vicePresident[0],
    generalSecretary: { name: 'Jerome Keita' },
    assistantGeneralSecretary: { name: 'Gordon Jenkins' },
    sportsSecretary: { name: 'Nadia Amir' },
    socialWelfareOfficer: { name: 'Oprah Bermuda' },
    academicCoordinator: { name: 'Daniel Rogers' },
    publicRelationOfficer: { name: 'Stephen Stark' }
  };

  return (
    <div className="p-8 w-full bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Verify Your Choices</h2>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <p className="mb-4 text-gray-600">
          Look through your choices and be sure they are correct before casting your vote.
        </p>
        
        <div className="space-y-4">
          {Object.entries(selectedCandidates).map(([position, candidate]) => (
            <ChoiceRow 
              key={position} 
              position={position.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} 
              candidate={candidate.name} 
            />
          ))}
        </div>
        
        <div className="mt-6 flex space-x-4">
          <button 
            className="flex-1 bg-gray-200 text-black py-3 rounded-xl 
            hover:bg-gray-300 transition-colors"
          >
            Return to Voting Page
          </button>
          <button 
            className="flex-1 bg-black text-white py-3 rounded-xl 
            hover:bg-gray-800 transition-colors"
          >
            Cast Your Vote
          </button>
        </div>
      </div>
    </div>
  );
}


ChoiceRow.propTypes = {
    position: PropTypes.string.isRequired,
    candidate: PropTypes.string.isRequired
}
function ChoiceRow({ position, candidate }) {
  return (
    <div className="flex justify-between items-center 
      bg-gray-100 p-4 rounded-lg">
      <span className="font-semibold">{position}</span>
      <div className="flex items-center">
        <span className="mr-4 text-gray-700">{candidate}</span>
        <div className="w-6 h-6 bg-[#FF9900] text-black 
          rounded-full flex items-center justify-center">
          ✓
        </div>
      </div>
    </div>
  );
}
