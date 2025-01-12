import React from "react";
import { Calendar, DollarSign, Clock, Users, CreditCard, ArrowRight, Bell } from "lucide-react";


type Prop1 = {
  title: string
  value: string
  icon: React.FC<any>
}

type Prop2 = {
  date: string
  doctor?: string
  status: 'Completed' | 'Paid' | 'Cancelled' | 'Refunded' | 'Pending'
  amount: string
}

const StatCard = ({ title, value, icon: Icon, bgColor, textColor }:any) => (
  <div className={`${bgColor} p-6 rounded-lg transition-all duration-300 hover:shadow-lg group cursor-pointer`}>
    <div className="flex items-center justify-between mb-2">
      <div className={`p-2 ${textColor} bg-white/20 rounded-lg`}>
        <Icon size={20} />
      </div>
      <span className={`text-xs font-medium ${textColor} opacity-60`}>Last 30 days</span>
    </div>
    <h3 className={`${textColor} font-bold text-2xl mb-1`}>{value}</h3>
    <p className={`${textColor} text-sm opacity-80`}>{title}</p>
  </div>
);

const TableRow = ({ date, doctor, status, amount }:Prop2) => (
  <tr className="hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200">
    <td className="py-3 px-4 text-sm">{date}</td>
    {doctor && <td className="py-3 px-4 text-sm">{doctor}</td>}
    {amount && <td className="py-3 px-4 text-sm">${amount}</td>}
    <td className="py-3 px-4">
      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
        status === 'Completed' || status === 'Paid'
          ? 'bg-green-100 text-green-700'
          : status === 'Pending'
          ? 'bg-yellow-100 text-yellow-700'
          : 'bg-red-100 text-red-700'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const PatientDashboard = () => {
  const stats = [
    { 
      title: "Total Appointments", 
      value: "120", 
      icon: Calendar,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      textColor: "text-white"
    },
    { 
      title: "Payments Made", 
      value: "$8,200", 
      icon: DollarSign,
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white"
    },
    { 
      title: "Pending Payments", 
      value: "3", 
      icon: Clock,
      bgColor: "bg-gradient-to-r from-red-500 to-red-600",
      textColor: "text-white"
    },
    { 
      title: "Doctors Consulted", 
      value: "3", 
      icon: Users,
      bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      textColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 ssm:p-3">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <h1 className="font-bold text-3xl text-gray-800 ssm:text-xl">
            👋🏼 Welcome Back, Mr. George Aye!
          </h1>
          <p className="text-sm text-gray-500">
            Manage your healthcare services here
          </p>
        </div>
        <button className="p-2 relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg text-gray-800">Recent Appointments</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1 transition-colors">
              View All
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 border-b">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 border-b">Doctor</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <TableRow
                    key={index}
                    date="12th Dec 2024"
                    doctor="Dr. Jane Doe"
                    status="Completed"
                    amount=""
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payments Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg text-gray-800">Recent Payments</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1 transition-colors">
              View All
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 border-b">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 border-b">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <TableRow
                    key={index}
                    date="12th Dec 2024"
                    amount="200.00"
                    status="Paid"
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;