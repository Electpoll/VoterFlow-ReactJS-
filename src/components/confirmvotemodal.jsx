import { X } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * ConfirmVoteModal - A modal component that displays selected candidates for confirmation
 * before final vote submission
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {function} props.onClose - Function to call when modal is closed
 * @param {function} props.onSubmit - Function to call when vote is confirmed
 * @param {Object} props.selectedCandidates - Object containing selected candidates by position
 * @param {Object} props.candidatesData - Complete data about all candidates
 */
export default function ConfirmVoteModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  selectedCandidates,
  candidatesData
}) {
  if (!isOpen) return null;

  // Create a list of position/candidate pairs for display
  const selectedPositions = Object.entries(selectedCandidates).filter(([_, id]) => id !== null);
  
  // Function to get candidate name by ID and position
  const getCandidateName = (position, candidateId) => {
    const candidate = candidatesData[position]?.find(c => c.id === candidateId);
    return candidate?.name || 'Unknown Candidate';
  };

  return (
    // Modal backdrop - fixed position covering entire screen with semi-transparent background
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Modal content container */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
        {/* Modal header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Review And Submit Your Choices</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal body - list of selected candidates */}
        <div className="p-4">
          <div className="space-y-3">
            {selectedPositions.map(([position, candidateId]) => (
              <div key={position} className="flex items-center justify-start gap-2">
                {/* Icon representing the position */}  
                 <img src="/list.svg" alt="" />
                <div>
                  <div className="flex">
                    <span className="font-medium min-w-32">
                      {position.charAt(0).toUpperCase() + position.slice(1).replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="mx-2">-</span>
                    <span className="font-semibold">
                      {getCandidateName(position, candidateId)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal footer with action button */}
        <div className="p-4">
          <button 
            onClick={onSubmit}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Cast Your Vote
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmVoteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectedCandidates: PropTypes.object.isRequired,
  candidatesData: PropTypes.object.isRequired
};