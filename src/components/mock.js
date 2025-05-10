
export const MOCK_USER = {
  name: 'Bukola Olapade',
  email: 'benjaminolapade@gmail.com',
  matricNumber: '123456',
  level: '300L',
  voteNumber: 343
};

export const CANDIDATES = {
  president: [
    { id: 1, name: 'Cody Fernand', votes: 954, image: '/api/placeholder/200/200' },
    { id: 2, name: 'Hannah Baker', votes: 200, image: '/api/placeholder/200/200' },
    { id: 3, name: 'Indecisive', votes: 80, image: '/api/placeholder/200/200' }
  ],
  vicePresident: [
    { id: 1, name: 'Maryam Fadel', votes: 500, image: '/api/placeholder/200/200' },
    { id: 2, name: 'Jamal Givens', votes: 300, image: '/api/placeholder/200/200' },
    { id: 3, name: 'Indecisive', votes: 50, image: '/api/placeholder/200/200' }
  ],
  positions: [
    'President', 'Vice-President', 'General Secretary', 
    'Assistant General Secretary', 'Sports Secretary', 
    'Social/Welfare Officer', 'Academic Coordinator', 
    'Public Relation Officer'
  ]
};

// For President example
export const presidentData = {
  title: "President",
  items: [
    { name: "Cody Fernand", votes: 954, imageUrl: "/path/to/cody.jpg" },
    { name: "Hannah Baker", votes: 200, imageUrl: "/path/to/hannah.jpg" },
    { name: "Indecisive", votes: 80, imageUrl: "/path/to/question.jpg" }
  ]
};

export const ELECTION_STATS = {
  totalVotes: 1234,
  accreditedVoters: 2165,
  votePercentage: 57,
  accessTally: 1287,
  timeRemaining: [
    {
      time: 'Days',
      number: 0
    },
    {
      time: 'Hours',
      number: 7 
    },
    {
      time: 'Minutes',
      number: 43
    },
    {
      time: 'Seconds',
      number: 57
    }
  ]
};
