import { useState } from 'react';
import { 
  AlertCircle, 
  User, 
  Mail, 
  HashIcon,
  GraduationCap 
} from 'lucide-react';
import { MOCK_USER, CANDIDATES } from '../../../components/mock';
import PropTypes from 'prop-types';

export default function CheckDetails() {
  const [isDetailsVerified, setIsDetailsVerified] = useState(false);
  const { 
    name, 
    email, 
    matricNumber, 
    level 
  } = MOCK_USER;

  const handleVerifyDetails = () => {
    // In a real application, this would involve actual verification
    setIsDetailsVerified(true);
  };

  return (
    <div className="p-8 w-full bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Check Your Details</h2>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="space-y-4">
            <DetailRow 
              icon={<User className="text-[#FF9900]" />} 
              label="Name" 
              value={name} 
            />
            <DetailRow 
              icon={<Mail className="text-[#FF9900]" />} 
              label="Email" 
              value={email} 
            />
            <DetailRow 
              icon={<HashIcon className="text-[#FF9900]" />} 
              label="Matric Number" 
              value={matricNumber} 
            />
            <DetailRow 
              icon={<GraduationCap className="text-[#FF9900]" />} 
              label="Level" 
              value={level} 
            />
          </div>

          <VerificationAlert 
            isVerified={isDetailsVerified} 
            onVerify={handleVerifyDetails} 
          />
        </div>

        <PositionsSection />
      </div>
    </div>
  );
}

DetailRow.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};
function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded-lg">
      <div className="mr-4">{icon}</div>
      <div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}

VerificationAlert.propTypes = {
  isVerified: PropTypes.bool.isRequired,
  onVerify: PropTypes.func.isRequired
}
function VerificationAlert({ isVerified, onVerify }) {
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <AlertCircle className="mr-3 text-yellow-500" />
        <span className="font-semibold">Verify Your Details</span>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Please verify that the information above is correct. 
        If any details are incorrect, contact the electoral committee.
      </p>
      
      {!isVerified ? (
        <button 
          onClick={onVerify}
          className="w-full bg-[#FF9900] text-black py-3 rounded-xl 
          hover:bg-orange-600 transition-colors"
        >
          Verify Details
        </button>
      ) : (
        <div className="bg-green-100 text-green-800 p-3 rounded-lg flex items-center">
          <CheckCircle className="mr-3" />
          Details Verified Successfully
        </div>
      )}
    </div>
  );
}

function PositionsSection() {
  const { positions } = CANDIDATES;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Available Positions</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {positions.map((position, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-3 rounded-lg flex items-center"
          >
            <span className="w-6 h-6 bg-[#FF9900] text-black 
              rounded-full flex items-center justify-center mr-3">
              {index + 1}
            </span>
            {position}
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper component (since Lucide doesn't have a direct CheckCircle)
CheckCircle.propTypes = {
  className: PropTypes.string
}
function CheckCircle({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
