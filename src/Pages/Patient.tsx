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
    }, 2500);
  };

  return (
    <div className="p-6 sm:h-[calc(100vh-70px)] overflow-auto bg-gray-50">
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
            <div className="flex items-center gap-4 ssm:justify-between">
              <HeartPulse size={40} className="text-red-500" />
              <Activity size={40} className="text-blue-500" />
              <Droplet size={40} className="text-green-500" />
            </div>
            <div className="ssm:hidden">
              <span className="font-bold text-gray-700 text-lg">
                Patient Status:{" "}
              </span>
              <span className="text-red-500">Offline</span>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4">Appointment Details</h2>
            <div className="text-gray-600">
              <p className="ssm:text-sm">- Patient scheduled this appointment to seek counselling.</p>
              <div className="mt-2">
                <p>
                  <strong>Doctor:</strong> <span className="ssm:text-xs">Dr. Adu Atakora</span>
                </p>
                <p>
                  <strong>Date:</strong> <span className="ssm:text-xs">12th October, 2024</span>
                </p>
                <p>
                  <strong>Time:</strong> <span className="ssm:text-xs">1hr 30mins</span>
                </p>
                <p>
                  <strong>Status:</strong> <span className="ssm:text-xs">Approved</span>
                </p>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4">Upcoming Appointments</h2>
            <ul className="list-disc list-inside text-gray-700 mt-4 ssm:text-sm">
              <li>Dr. Mensah - General Checkup on 20th November, 2024</li>
              <li>Dr. Boateng - Physiotherapy on 5th December, 2024</li>
            </ul>
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

          {/*Vital signs history  */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Vital Signs History</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-700 ssm:text-xs">
                  <th>Date</th>
                  <th>Blood Pressure</th>
                  <th>Heart Rate</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ssm:text-xs ssm:px-1">01/11/2024</td>
                  <td className="ssm:text-xs ssm:px-1">140/90 mmHg</td>
                  <td className="ssm:text-xs ssm:px-1">72 bpm</td>
                  <td className="ssm:text-xs ssm:px-1">68 kg</td>
                </tr>
                <tr>
                  <td className="ssm:text-xs ssm:px-1">25/10/2024</td>
                  <td className="ssm:text-xs ssm:px-1">135/85 mmHg</td>
                  <td className="ssm:text-xs ssm:px-1">75 bpm</td>
                  <td className="ssm:text-xs ssm:px-1">70 kg</td>
                </tr>
              </tbody>
            </table>
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

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Upload Prescriptions</h2>
            <div className="flex flex-col gap-4">
              <input
                type="file"
                className="block w-full border border-gray-300 rounded-lg p-2"
                accept=".pdf, .jpg, .png"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                Upload
              </button>
            </div>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Emergency Contacts</h2>
            <ul className="text-gray-700 flex gap-12">
              <li>
                <strong>Name:</strong> John Mensah
                <br />
                <strong>Relation:</strong> Father
                <br />
                <strong>Phone:</strong> +233 543576794
              </li>
              <li>
                <strong>Name:</strong> Mary Mensah
                <br />
                <strong>Relation:</strong> Mother
                <br />
                <strong>Phone:</strong> +233 543576794
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Download Reports</h2>
            <button className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600">
              Download Health Report
            </button>
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
        <div className="flex items-center px-6 py-4 ssm:px-4">
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
            <h2 className="font-bold text-lg ssm:text-base">Notice</h2>
            <p className="text-sm ssm:text-xs">Patient is currently unavailable</p>
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
