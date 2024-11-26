import { data } from "@/Datatable/Data";
import { data as data2 } from "@/Datatable/AppointmentData";
import { useParams } from "react-router-dom";
import {
  Activity,
  Calendar,
  Clock,
  Cross,
  Droplet,
  HeartPulse,
  Ruler,
  UserPlus,
  Weight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Patient = () => {
  const combinedData = [...data, ...data2];
  const { id } = useParams();
  const filteredData = combinedData.filter((data) => data.id == id);
  const patientData = filteredData[0];
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="p-6 h-[calc(100vh-70px)] overflow-auto bg-gray-50 ssm:h-screen">
      {/* Main Container */}
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="sticky top-[20px] w-[220px] border-r-2 border-gray-200 px-4 h-full">
          <div className="flex flex-col items-center gap-4">
            {/* Patient Avatar */}
            <div className="h-[160px] w-[160px] rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-xl">
              <Cross className="w-3/4 h-3/4 text-white" />
            </div>
            {/* Patient Info */}
            <div className="text-start">
              <h1 className="text-lg font-bold uppercase">
                {patientData.name}
              </h1>
              <p className="text-gray-600">Age: {patientData.age}</p>
              <p className="text-gray-600">Gender: {patientData.gender}</p>
              <p className="text-gray-600">Email: {patientData.email}</p>
              <p className="text-gray-600">Phone: +233 543576794</p>
              <p className="text-gray-600">Address: Sunyani, Bono</p>
            </div>
            {/* Action Button */}
            <button
              className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all"
              onClick={() => handleShowAlert()}
            >
              Initiate a Chat
            </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 grow">
          {/* Status and Details */}
          <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
            <div className="flex items-center gap-4">
              <HeartPulse size={40} className="text-red-500" />
              <Activity size={40} className="text-blue-500" />
              <Droplet size={40} className="text-green-500" />
            </div>
            <div>
              <span className="font-bold text-gray-700 text-lg">
                Patient Status:{" "}
              </span>
              <span className="text-red-500">Offline</span>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Appointment Details</h2>
            <div className="text-gray-600">
              <p>- Patient scheduled this appointment to seek counselling.</p>
              <div className="mt-4">
                <p>
                  <strong>Doctor:</strong> Dr. Adu Atakora
                </p>
                <p>
                  <strong>Date:</strong> 12th December, 2024
                </p>
                <p>
                  <strong>Time:</strong> 1hr 30mins
                </p>
                <p>
                  <strong>Status:</strong> Approved
                </p>
              </div>
            </div>
          </div>

          {/* Health Status */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Current Health Status</h2>
            <div className="flex gap-6 justify-evenly">
              <div className="flex flex-col items-center">
                <HeartPulse size={60} className="text-red-500" />
                <p>
                  Blood Pressure: <strong>140mmHg</strong>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Weight size={60} className="text-green-500" />
                <p>
                  Weight: <strong>20kg</strong>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Activity size={60} className="text-blue-500" />
                <p>
                  Heart Rate: <strong>60bpm</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Medical History</h2>
            <p>- High blood pressure and diabetes</p>
            <p>- History of chronic pain</p>
            <p>- Previous surgeries</p>
          </div>

          {/* Prescriptions */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Prescriptions</h2>
            <p className="text-red-500 text-center font-bold">
              No active or past prescriptions
            </p>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div
        className={`fixed top-[120px] right-4 z-50 bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg rounded-lg 
    transition-all duration-300 ease-in-out ${
      showAlert ? "translate-x-0" : "translate-x-[150%]"
    }`}
      >
        <div className="flex items-center px-6 py-4">
          <div className="mr-4 flex items-center justify-center bg-white text-blue-500 w-10 h-10 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg">Notice</h2>
            <p className="text-sm">Patient is currently unavailable</p>
          </div>
          <button
            onClick={() => setShowAlert(false)}
            className="ml-4 text-white bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-all"
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patient;
