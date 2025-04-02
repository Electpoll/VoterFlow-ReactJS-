import PropTypes from 'prop-types';


Section.propTypes = {
    headerText: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['details', 'positions']).isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
  };
  
 export function Section({headerText, subText, type, data}) {
    return (
      <div className="mt-5">
        <h3 className="text-xl font-semibold">{headerText}</h3>
        <p className='text-sm md:text-base'>{subText}</p>
        
        {type === 'details' && (
          <div className="grid gap-4 p-4">
            <DetailItem label="NAME" value={data.name} />
            <DetailItem label="EMAIL" value={data.email} />
            <DetailItem label="MATRIC NUMBER" value={data.matricNumber} />
            <DetailItem label="LEVEL" value={data.level} />
          </div>
        )}
        
        {type === 'positions' && (
          <div className="grid md:grid-cols-2 gap-3 p-4">
            {data.map((position, index) => (
              <PositionItem key={index} position={position} />
            ))}
          </div>
        )}
      </div>
    );
  }
  
  DetailItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
  };
  
export function DetailItem({ label, value }) {
    return (
      <div className="bg-gray-100 space-x-3 flex items-center">
        <img src="/list.svg" alt="" />
        <div className="text-xs md:text-base font-semibold">{label}</div>
        <div className="text-gray-900">{value}</div>
      </div>
    );
  }
  
  PositionItem.propTypes = {
    position: PropTypes.string.isRequired
  };
  
export function PositionItem({ position }) {
    return (
      <div className="flex items-center space-x-3">
        <img src="/list.svg" alt="" />
        <div className="text-gray-900">{position}</div>
      </div>
    );
  }