import React from "react";
import { Mail, Lock, User, SquareMousePointer } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center px-4 font-main">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create an Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Sign up to get started with our telemedicine services
        </p>

        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <div className="mt-1 relative">
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Enter your full name"
                required
              />
              <User className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <div className="mt-1 relative">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Enter your email"
                required
              />
              <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Create a password"
                required
              />
              <Lock className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              
            </label>
            <div className="mt-1 relative">
              <select className="text-sm font-medium text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                <option value="">Select your role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
              <SquareMousePointer className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
          </div>

          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
