import { useState } from 'react';
import { Download, FileText, Clock, Users, CheckCircle } from 'lucide-react';

export default function TransparencyReport() {
  const [activeTab, setActiveTab] = useState('overview');

  const reportSections = [
    { 
      id: 'overview', 
      title: 'Election Overview',
      content: <OverviewContent />
    },
    { 
      id: 'voter-details', 
      title: 'Voter Details',
      content: <VoterDetailsContent />
    },
    { 
      id: 'audit-trail', 
      title: 'Audit Trail',
      content: <AuditTrailContent />
    }
  ];

  return (
    <div className="p-8 w-full bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Transparency Report</h2>
        <button 
          className="bg-[#FF9900] text-black px-4 py-2 rounded-lg 
          flex items-center hover:bg-orange-600 transition-colors"
        >
          <Download className="mr-2" size={20} />
          Download Report
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-md">
        <div className="flex border-b">
          {reportSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`
                flex-1 py-4 flex items-center justify-center
                ${activeTab === section.id 
                  ? 'bg-[#FF9900] text-black' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {section.title}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {reportSections.find(section => section.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}

function OverviewContent() {
  const overviewStats = [
    { 
      icon: <Clock className="text-[#FF9900]" />, 
      label: 'Election Duration', 
      value: '7 days' 
    },
    { 
      icon: <Users className="text-[#FF9900]" />, 
      label: 'Total Voters', 
      value: '2,165' 
    },
    { 
      icon: <CheckCircle className="text-[#FF9900]" />, 
      label: 'Verified Votes', 
      value: '1,234' 
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Election Overview</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {overviewStats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-4 rounded-lg flex items-center"
          >
            <div className="mr-4">{stat.icon}</div>
            <div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
              <div className="font-bold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Election Integrity Statement</h4>
        <p className="text-gray-600">
          This election was conducted with full transparency, 
          following all prescribed guidelines and monitored 
          by independent observers to ensure fairness and accuracy.
        </p>
      </div>
    </div>
  );
}

function VoterDetailsContent() {
  const voterBreakdown = [
    { hall: 'Nnamdi Azikwe Hall', voters: 954, percentage: 57 },
    { hall: 'Queen Elizabeth Hall II', voters: 200, percentage: 12 },
    { hall: 'Lord Tedder Hall', voters: 80, percentage: 5 }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Voter Participation</h3>
      <div className="space-y-4">
        {voterBreakdown.map((hall, index) => (
          <div 
            key={index} 
            className="bg-gray-100 rounded-lg p-4 flex items-center"
          >
            <div className="flex-grow">
              <div className="font-semibold">{hall.hall}</div>
              <div className="text-sm text-gray-600">
                {hall.voters} voters ({hall.percentage}%)
              </div>
            </div>
            <div 
              className="w-16 h-2 bg-[#FF9900] rounded-full"
              style={{ width: `${hall.percentage * 2}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditTrailContent() {
  const auditLogs = [
    { timestamp: '2025-03-20 10:15', action: 'Election Initiated' },
    { timestamp: '2025-03-21 09:30', action: 'Voter Registration Closed' },
    { timestamp: '2025-03-22 14:45', action: 'Preliminary Candidates Verified' },
    { timestamp: '2025-03-24 18:20', action: 'Voting Period Started' }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Audit Trail</h3>
      <div className="space-y-4">
        {auditLogs.map((log, index) => (
          <div 
            key={index} 
            className="bg-gray-100 rounded-lg p-4 flex items-between"
          >
            <div className="flex-grow">
              <div className="font-semibold">{log.action}</div>
              <div className="text-sm text-gray-600">{log.timestamp}</div>
            </div>
            <FileText className="text-[#FF9900]" />
          </div>
        ))}
      </div>
    </div>
  );
}
