import PropTypes from 'prop-types';
import { Users } from 'lucide-react';

/**
 * BallotResults component that displays voting results in a visual format
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the ballot (e.g., "President", "Votes Per Hall of Residence")
 * @param {Array} props.items - Array of ballot items to display
 */
export default function BallotResults({ title, items }) {
  // Calculate total votes to determine percentage widths
  const totalVotes = items.reduce((sum, item) => sum + item.votes, 0);

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <BallotItem 
            key={index} 
            name={item.name} 
            votes={item.votes} 
            percentage={(item.votes / totalVotes) * 100} 
            icon={item.icon} 
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

BallotResults.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      icon: PropTypes.node,
      imageUrl: PropTypes.string
    })
  ).isRequired
};

/**
 * Individual ballot item component
 */
function BallotItem({ name, votes, percentage, icon, imageUrl }) {
  return (
    <div className="w-full h-16 rounded-lg border border-gray-100 flex overflow-hidden">
      {/* Bar representing percentage of votes */}
      <div 
        className="bg-amber-500 h-full flex items-center px-4"
        style={{ width: `${percentage}%` }}
      >
        {/* Icon or Image */}
        {imageUrl ? (
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="text-black mr-3">
            {icon || <Users size={24} />}
          </div>
        )}
        
        {/* Name and votes - Only show in the colored part if enough space */}
        {percentage > 15 && (
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-black text-sm md:text-base">{name}</h3>
            <p className="text-sm text-black">{votes} Votes</p>
          </div>
        )}
      </div>
      
      {/* Right side (white area) - Show name and votes here if not shown in colored area */}
      {percentage <= 15 && (
        <div className="px-4 flex items-center">
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-sm md:text-base">{name}</h3>
            <p className="text-sm">{votes} Votes</p>
          </div>
        </div>
      )}
    </div>
  );
}

BallotItem.propTypes = {
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  icon: PropTypes.node,
  imageUrl: PropTypes.string
};

