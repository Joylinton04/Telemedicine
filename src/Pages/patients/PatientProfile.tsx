import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Pencil, 
  Save, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Clock,
  Activity,
  AlertCircle,
} from "lucide-react";
import { format } from 'date-fns'

interface PatientDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  bloodGroup?: string;
  allergies?: string[];
}

interface MedicalRecord {
  id: string;
  treatment: string;
  date: string;
  doctor: string;
  status: 'completed' | 'scheduled' | 'cancelled';
}

const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  icon: React.ReactNode;
  editMode: boolean;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, value, icon, editMode, type = "text", onChange }) => (
  <div className="space-y-2">
    <label className="block text-gray-500 text-sm font-medium">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      {editMode ? (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="pl-10 transition-all duration-300 border-gray-300 hover:border-blue-400 focus:border-blue-500"
        />
      ) : (
        <p className="text-gray-700 py-2 pl-10">{value}</p>
      )}
    </div>
  </div>
);

const MedicalHistoryItem: React.FC<{ record: MedicalRecord }> = ({ record }) => (
  <li className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-full ${
        record.status === 'completed' ? 'bg-green-100' :
        record.status === 'scheduled' ? 'bg-blue-100' : 'bg-red-100'
      }`}>
        <Activity size={20} className={`${
          record.status === 'completed' ? 'text-green-600' :
          record.status === 'scheduled' ? 'text-blue-600' : 'text-red-600'
        }`} />
      </div>
      <div>
        <p className="font-medium">{record.treatment}</p>
        <p className="text-sm text-gray-500">Dr. {record.doctor}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Clock size={16} className="text-gray-400" />
      <span className="text-sm text-gray-500">
        {format(new Date(record.date), 'PP')}
      </span>
    </div>
  </li>
);

const PatientProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    name: "George Aye",
    email: "george.aye@example.com",
    phone: "+233 543576794",
    address: "123 Health St, Sunyani",
    dob: "1985-06-15",
    bloodGroup: "A+",
    allergies: ["Penicillin", "Peanuts"],
  });

  const medicalHistory: MedicalRecord[] = [
    {
      id: "1",
      treatment: "General Check-up",
      date: "2023-12-12",
      doctor: "Jane Smith",
      status: "completed"
    },
    {
      id: "2",
      treatment: "Blood Pressure Test",
      date: "2023-11-20",
      doctor: "Michael Brown",
      status: "completed"
    },
    {
      id: "3",
      treatment: "Diabetes Consultation",
      date: "2023-10-05",
      doctor: "Sarah Wilson",
      status: "scheduled"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientDetails(prev => ({ ...prev, [name]: value }));
  };

  const saveDetails = () => {
    setEditMode(false);
    // Add API call here to save changes
    console.log("Saving details:", patientDetails);
  };

  return (
    <div className="p-6 min-h-[calc(100vh-70px)] bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Patient Profile</h1>
            <p className="text-gray-500 mt-1">Manage your personal information and view medical history</p>
          </div>
          <Button
            onClick={editMode ? saveDetails : () => setEditMode(true)}
            className={`flex gap-2 items-center ${
              editMode 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white transition-all duration-300`}
          >
            {editMode ? <Save size={16} /> : <Pencil size={16} />}
            {editMode ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Personal Information */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <User size={20} className="text-blue-600" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                name="name"
                value={patientDetails.name}
                icon={<User size={16} />}
                editMode={editMode}
                onChange={handleInputChange}
              />
              <InputField
                label="Email Address"
                name="email"
                value={patientDetails.email}
                icon={<Mail size={16} />}
                editMode={editMode}
                onChange={handleInputChange}
              />
              <InputField
                label="Phone Number"
                name="phone"
                value={patientDetails.phone}
                icon={<Phone size={16} />}
                editMode={editMode}
                onChange={handleInputChange}
              />
              <InputField
                label="Address"
                name="address"
                value={patientDetails.address}
                icon={<MapPin size={16} />}
                editMode={editMode}
                onChange={handleInputChange}
              />
              <InputField
                label="Date of Birth"
                name="dob"
                value={patientDetails.dob}
                icon={<Calendar size={16} />}
                editMode={editMode}
                type="date"
                onChange={handleInputChange}
              />
              <div className="space-y-2">
                <label className="block text-gray-500 text-sm font-medium">Allergies</label>
                <div className="flex gap-2 flex-wrap">
                  {patientDetails.allergies?.map((allergy, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Medical History */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Activity size={20} className="text-blue-600" />
              Medical History
            </h2>
            <ul className="space-y-2">
              {medicalHistory.map((record) => (
                <MedicalHistoryItem key={record.id} record={record} />
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;