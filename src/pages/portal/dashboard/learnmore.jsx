import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Footer from '../../home/footer';

export default function LearnMore() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className="p-5 md:px-10 md:py-7">
        <Navbar />
        </div>
        <div className="md:my-5 md:p-5 md:px-10 md:py-7">
        <FeedbackHero />
        </div>
        <Footer/>
    </div>
  )
}



// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white py-2 md:px-4 shadow-md rounded-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="" className='h-4 md:h-7 w-full' />
        </div>
        
        <div className="hidden lg:flex items-center space-x-2 md:space-x-6">
          <a href="#about" className="text-xs md:text-base  text-gray-800 hover:text-gray-600">About Us</a>
          <a href="#pricing" className="text-xs md:text-base text-gray-800 hover:text-gray-600">Pricing</a>
          <a href="#schedule" className="text-xs md:text-base text-gray-800 hover:text-gray-600">Schedule A Meeting</a>
          <div className="relative">
            <button 
              className="flex items-center text-gray-800 hover:text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              Account <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button className="bg-gray-900 text-white text-xs md:text-base px-2 py-1 lg:px-4 lg:py-2 rounded hover:bg-gray-800 transition">
            Create Election
          </button>
          <button className="border border-gray-300 text-xs md:text-base px-2 py-1 lg:px-4 lg:py-2 rounded hover:bg-gray-50 transition">
            View Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

// Survey Form Component
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    electionTitle: "Law Students' Society Election '25",
    experienceWord: "",
    navigationRating: "5 - Very Easy",
    overallRating: "5 - Excellent",
    recommendation: "Definitely",
    improvement: "",
    summary: "",
    consent: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };
  
  return (
    <div className="w-full max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">What was the title of the election you participated in?</label>
          <div className="relative">
            <select 
              name="electionTitle"
              value={formData.electionTitle}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option>Law Students' Society Election '25</option>
              <option>Student Council Election</option>
              <option>Club President Election</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">How would you describe your voting experience in one word?</label>
          <input
            type="text"
            name="experienceWord"
            placeholder="Example: Seamless, Easy, Quick, Stressful, etc."
            value={formData.experienceWord}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        
        <div>
          <label className="block mb-2 font-medium">How easy was it to navigate the Electpoll platform?</label>
          <div className="relative">
            <select
              name="navigationRating"
              value={formData.navigationRating}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option>5 - Very Easy</option>
              <option>4 - Easy</option>
              <option>3 - Neutral</option>
              <option>2 - Difficult</option>
              <option>1 - Very Difficult</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Rate your overall experience with Electpoll.</label>
          <div className="relative">
            <select
              name="overallRating"
              value={formData.overallRating}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option>5 - Excellent</option>
              <option>4 - Good</option>
              <option>3 - Average</option>
              <option>2 - Poor</option>
              <option>1 - Terrible</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Would you recommend Electpoll for future elections?</label>
          <div className="relative">
            <select
              name="recommendation"
              value={formData.recommendation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option>Definitely</option>
              <option>Probably</option>
              <option>Not sure</option>
              <option>Probably not</option>
              <option>Definitely not</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">What could we improve to enhance the election process?</label>
          <textarea
            name="improvement"
            placeholder="(Optional)"
            value={formData.improvement}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 min-h-24"
          />
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Sum up your Electpoll experience in a few sentences.</label>
          <textarea
            name="summary"
            placeholder='Example: "The election was fast, easy, and seamless; the quickest election I&apos;e ever experienced."'
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 min-h-24"
          />
        </div>
        
        <div className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-2"
          />
          <label className="text-sm text-gray-600">I agree to my feedback being used for promotional purposes.</label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-gray-900 text-white p-3 rounded hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

// Hero Section Component
const FeedbackHero = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6">How seamless did you find the election?</h1>
          <div className="h-1 w-12 bg-orange-500 mb-6"></div>
          <p className="text-lg mb-6">
            We are awfully dedicated to making sure that elections are easy and stressless.
            Your review of every election allows us access how good a job we are doing and
            where to improve.
          </p>
          <a 
            href="#dedication" 
            className="inline-flex items-center text-gray-900 font-medium hover:text-orange-500 transition"
          >
            Read More About Our Dedication 
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};
