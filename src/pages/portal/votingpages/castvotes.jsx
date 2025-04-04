
import { useState } from 'react';
import { CANDIDATES } from '../../../components/mock';
import PropTypes from 'prop-types'
import Sidebar from '../../../components/sidebar';
import Nav from '../../../components/nav';


export default function CastVote() {
  const [selectedCandidates, setSelectedCandidates] = useState({
    president: null,
    vicePresident: null
  });

  const handleCandidateSelect = (position, candidateId) => {
    setSelectedCandidates(prev => ({
      ...prev,
      [position]: candidateId
    }));
  };

  return (
    <>
    <div className="flex">
      <Sidebar for="voting" logout={true}/>
    
    <div className="p-8 w-full bg-gray-100">
    <div className="flex justify-end">
          <Nav link="dashboard"/>
        </div>

      <h2 className="text-2xl font-bold mb-6">Cast Your Vote</h2>
      
      <div className="space-y-6">
        <VotingSection 
          title="President" 
          candidates={CANDIDATES.president}
          position="president"
          selectedCandidate={selectedCandidates.president}
          onSelect={handleCandidateSelect}
        />
        
        <VotingSection 
          title="Vice President" 
          candidates={CANDIDATES.vicePresident}
          position="vicePresident"
          selectedCandidate={selectedCandidates.vicePresident}
          onSelect={handleCandidateSelect}
        />
        
        <button 
          className="w-full bg-black text-white py-3 rounded-xl 
          hover:bg-gray-800 transition-colors 
          disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedCandidates.president || !selectedCandidates.vicePresident}
        >
          Submit Your Vote
        </button>
      </div>
    </div>
    </div>
    </>
  );
}


VotingSection.propTypes = {
    title: PropTypes.string.isRequired,
    candidates: PropTypes.node.isRequired,
    position: PropTypes.string.isRequired,
    selectedCandidate: PropTypes.node.isRequired,
    onSelect: PropTypes.func.isRequired
  };

function VotingSection({ title, candidates, position, selectedCandidate, onSelect }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {candidates.map((candidate) => (
          <CandidateCard 
            key={candidate.id}
            candidate={candidate}
            isSelected={selectedCandidate === candidate.id}
            onSelect={() => onSelect(position, candidate.id)}
          />
        ))}
      </div>
    </div>
  );
}

CandidateCard.propTypes = {
    candidate: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
}
function CandidateCard({ candidate, isSelected, onSelect }) {
  return (
    <div 
      onClick={onSelect}
      className={`
        border-2 rounded-xl p-4 text-center cursor-pointer 
        transition-all duration-300 
        ${isSelected 
          ? 'border-[#FF9900] bg-[#FF9900]/10 shadow-lg' 
          : 'border-gray-200 hover:border-[#FF9900]/50'
        }
      `}
    >
      <div className="flex justify-center mb-4">
        <img 
          src={candidate.image} 
          alt={candidate.name} 
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <h4 className="font-semibold">{candidate.name}</h4>
      {candidate.votes && (
        <p className="text-sm text-gray-500">{candidate.votes} Votes</p>
      )}
      {isSelected && (
        <div className="mt-2 text-[#FF9900]">
          ✓ Selected
        </div>
      )}
    </div>
  );
}
