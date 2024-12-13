import React from "react";

const PatientDashboard = () => {
  return (
    <div className="min-h-screen p-6 ssm:p-2">
      {/* Header Section */}
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="font-bold text-2xl font-main3 text-gray-800 ssm:text-lg">
          👋🏼 Welcome Back, Mr. George Aye!
        </h1>
        <p className="text-sm text-gray-500 ssm:text-xs">
          Manage your healthcare services here.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-lg text-gray-800 mb-4">Recent Appointments</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-4 text-gray-600">Date</th>
                <th className="border-b py-2 px-4 text-gray-600">Doctor</th>
                <th className="border-b py-2 px-4 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b border-gray-100 ssm:text-sm">
                  <td className="py-2 px-4">12th Dec 2024</td>
                  <td className="py-2 px-4">Dr. Jane Doe</td>
                  <td className="py-2 px-4 text-green-600 font-medium">Completed</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Health Stats */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-lg text-gray-800 mb-4">Health Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <h3 className="text-blue-600 font-bold text-xl">120</h3>
              <p className="text-gray-600 text-sm">Appointments</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h3 className="text-green-600 font-bold text-xl">$8,200</h3>
              <p className="text-gray-600 text-sm">Payments Made</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg text-center">
              <h3 className="text-red-600 font-bold text-xl">3</h3>
              <p className="text-gray-600 text-sm">Pending Payments</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <h3 className="text-yellow-600 font-bold text-xl">3</h3>
              <p className="text-gray-600 text-sm">Doctors Consulted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payments Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="font-bold text-lg text-gray-800 mb-4">Recent Payments</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-gray-600">Date</th>
              <th className="border-b py-2 px-4 text-gray-600">Amount</th>
              <th className="border-b py-2 px-4 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="hover:bg-gray-50 ssm:text-sm">
                <td className="py-2 px-4">12th Dec 2024</td>
                <td className="py-2 px-4">$200.00</td>
                <td className="py-2 px-4 text-green-600 font-medium">Paid</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientDashboard;
