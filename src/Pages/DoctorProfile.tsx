import { User2 } from "lucide-react";



const DoctorProfile = () => {
    const doctorData = {
        photo: "/doctor.jpg",
        name: "Dr. Adu Atakora",
        specialization: "Cardiologist",
        experience: 12,
        email: "adujoy989@gmail.com",
        phone: "+233 245678901",
        biography:
          "Dr. John Doe is a highly experienced cardiologist with over 12 years of experience in treating heart-related conditions. He is dedicated to providing compassionate and personalized care.",
        specializations: [
          "Cardiology",
          "Hypertension Management",
          "Heart Surgery",
          "Echocardiography",
        ],
        appointments: [
          {
            date: "01/11/2024",
            patientName: "Alice Smith",
            purpose: "Routine Checkup",
            status: "Completed",
          },
          {
            date: "25/10/2024",
            patientName: "Bob Johnson",
            purpose: "Follow-Up",
            status: "Pending",
          },
        ],
        reviews: [
          {
            patientName: "Alice Smith",
            rating: 5,
            comment: "Excellent care and attention. Highly recommended!",
          },
          {
            patientName: "Bob Johnson",
            rating: 4,
            comment: "Great doctor, but the wait time was a bit long.",
          },
        ],
      };
      
    return (
      <div className="p-6 overflow-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mdd:p-4">
          <div className="flex items-center gap-6">
            {/* Profile Picture */}
            <div className="h-[120px] w-[120px] rounded-full overflow-hidden shadow-lg">
              {/* <img
                src={doctorData.photo || "/"}
                alt="Doctor Profile"
                className="h-full w-full object-cover"
              /> */}
              <User2 className="h-full w-full" strokeWidth={1.5}/>
            </div>
            {/* Doctor Details */}
            <div>
              <h1 className="text-2xl font-bold mdd:text-lg">{doctorData.name}</h1>
              <p className="text-gray-600 mdd:text-sm">{doctorData.specialization}</p>
              <p className="text-gray-500 mdd:text-sm">
                {doctorData.experience} years of experience
              </p>
            </div>
          </div>
          {/* Contact Info */}
          <div className="text-sm">
            <p className="font-medium">
              Email: <span className="text-blue-500">{doctorData.email}</span>
            </p>
            <p className="font-medium">
              Phone: <span>{doctorData.phone}</span>
            </p>
            {/* <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
              Book Appointment
            </button> */}
          </div>
        </div>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 lgg:grid-cols-3 gap-6 mt-6 mdd:gap-4">
          {/* Left Section */}
          <div className="col-span-1 lgg:col-span-2 bg-white p-6 rounded-lg shadow-md mdd:col-span-3">
            {/* Biography */}
            <h2 className="text-xl font-bold mb-4">Biography</h2>
            <p className="text-gray-600">{doctorData.biography}</p>
          </div>
  
          {/* Right Section */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-md mdd:col-span-3">
            {/* Specialization */}
            <h2 className="text-xl font-bold mb-4">Specialization</h2>
            <ul className="list-disc list-inside text-gray-600">
              {doctorData.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Appointment History */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold mb-4">Appointment History</h2>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-700">
                <th className="py-2">Date</th>
                <th className="py-2">Patient Name</th>
                <th className="py-2">Purpose</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {doctorData.appointments.map((appt, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{appt.date}</td>
                  <td className="py-2">{appt.patientName}</td>
                  <td className="py-2">{appt.purpose}</td>
                  <td
                    className={`py-2 font-bold ${
                      appt.status === "Completed"
                        ? "text-green-500"
                        : appt.status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {appt.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Ratings & Reviews */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold mb-4">Ratings & Reviews</h2>
          <div className="flex flex-col gap-4">
            {doctorData.reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow-sm border"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">{review.patientName}</h3>
                  <p className="text-yellow-500">
                    {"★".repeat(review.rating)}{" "}
                    <span className="text-gray-500">
                      ({review.rating}/5)
                    </span>
                  </p>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default DoctorProfile;
  