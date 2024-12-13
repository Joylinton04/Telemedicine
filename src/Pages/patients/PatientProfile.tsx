import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Save } from "lucide-react";

const PatientProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [patientDetails, setPatientDetails] = useState({
    name: "George Aye",
    email: "george.aye@example.com",
    phone: "+233 543576794",
    address: "123 Health St, Sunyani",
    dob: "1985-06-15",
  });

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientDetails({ ...patientDetails, [name]: value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveDetails = () => {
    toggleEditMode();
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 min-h-[calc(100vh-70px)]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient Profile</h1>
        <Button
          onClick={editMode ? saveDetails : toggleEditMode}
          className="flex gap-2 items-center bg-blue-600 text-white hover:bg-blue-700"
        >
          {editMode ? <Save size={16} /> : <Pencil size={16} />} {editMode ? "Save" : "Edit Profile"}
        </Button>
      </div>

      {/* Patient Details */}
      <Card className="p-6 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-500 mb-1">Name</label>
            {editMode ? (
              <Input
                name="name"
                value={patientDetails.name}
                onChange={handleInputChange}
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{patientDetails.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-500 mb-1">Email</label>
            {editMode ? (
              <Input
                name="email"
                value={patientDetails.email}
                onChange={handleInputChange}
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{patientDetails.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-500 mb-1">Phone</label>
            {editMode ? (
              <Input
                name="phone"
                value={patientDetails.phone}
                onChange={handleInputChange}
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{patientDetails.phone}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-500 mb-1">Address</label>
            {editMode ? (
              <Input
                name="address"
                value={patientDetails.address}
                onChange={handleInputChange}
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{patientDetails.address}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-500 mb-1">Date of Birth</label>
            {editMode ? (
              <Input
                type="date"
                name="dob"
                value={patientDetails.dob}
                onChange={handleInputChange}
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{patientDetails.dob}</p>
            )}
          </div>
        </div>
      </Card>

      {/* Medical History */}
      <Card className="p-6 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4">Medical History</h2>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <p>General Check-up</p>
            <span className="text-sm text-gray-500">12th Dec 2023</span>
          </li>
          <li className="flex justify-between">
            <p>Blood Pressure Test</p>
            <span className="text-sm text-gray-500">20th Nov 2023</span>
          </li>
          <li className="flex justify-between">
            <p>Diabetes Consultation</p>
            <span className="text-sm text-gray-500">5th Oct 2023</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default PatientProfile;
