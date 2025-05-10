import PropTypes from 'prop-types';


StatBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired
  };
  
export function StatBox({ label, value, text }) {
    return (
      <div className="space-y-4">
        <p className='text-white'>{label}</p>
        <NumbersBox value={value} text={text}/>
      </div>
    );
  }
  
  NumbersBox.propTypes = {
    value: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired
  };
  
export function NumbersBox({value, text}) {
    return (
      <div className="bg-[#FF7A00] space-y-2 p-4 rounded-sm text-center flex-1">
        <div className="font-bold text-lg sm:text-xl md:text-2xl text-black">{value}</div>
        <div className="text-xs sm:text-sm lg:text-base text-white">{text}</div>
      </div>
    );
  }