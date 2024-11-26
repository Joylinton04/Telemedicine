import { Button } from "@/components/ui/button";
import React from "react";

const Financial = () => {
  return (
    <div className="p-6 min-h-[calc(100vh-70px)] overflow-auto">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Manage your Finances
        </h1>
        <Button className="ssm:hidden bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
          Add Payment Method
        </Button>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 shadow-sm rounded-md mdd:p-4">
          <h2 className="text-gray-500 text-lg mdd:text-base mdd:w-max">Total Wallet Balance</h2>
          <p className="text-3xl font-bold text-gray-800 mdd:text-xl">$8,500.00</p>
          <p className="text-sm text-green-500 mt-2 mdd:text-xs">+5% This Month</p>
        </div>
        <div className="bg-white p-6 shadow-sm rounded-md mdd:p-4">
          <h2 className="text-gray-500 text-lg mdd:text-base">Pending Payments</h2>
          <p className="text-3xl font-bold text-red-500 mdd:text-xl">$1,200.00</p>
          <p className="text-sm text-red-400 mt-2 mdd:text-xs">3 Unpaid Appointments</p>
        </div>
        <div className="bg-white p-6 shadow-sm rounded-md mdd:p-4">
          <h2 className="text-gray-500 text-lg mdd:text-base">Last Payment</h2>
          <p className="text-3xl font-bold text-gray-800 mdd:text-xl">$200.00</p>
          <p className="text-sm text-gray-500 mt-2 mdd:text-xs">Paid on 3rd Nov 2024</p>
        </div>
      </div>

      {/* Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income & Expense Chart */}
      

        {/* Recent Transactions */}
        <div className="bg-white p-6 shadow-sm rounded-md">
          <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {/* Transaction Item */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-800">Consultation Fee</h3>
                <p className="text-sm text-gray-500">Dr. Jane Doe</p>
              </div>
              <p className="text-red-500 font-medium">- $120.00</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-800">Wallet Top-Up</h3>
                <p className="text-sm text-gray-500">Credit Card</p>
              </div>
              <p className="text-green-500 font-medium">+ $500.00</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-800">Medication Purchase</h3>
                <p className="text-sm text-gray-500">Prescription Drugs</p>
              </div>
              <p className="text-red-500 font-medium">- $75.00</p>
            </div>
            <button className="w-full text-blue-600 mt-4 hover:underline">
              View All Transactions
            </button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-6 bg-white p-6 shadow-sm rounded-md">
        <h2 className="text-lg font-bold mb-4">Payment Methods</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-4 p-4 shadow-sm rounded-md border">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="w-10"
            />
            <div>
              <p className="font-bold">Visa - **** 1234</p>
              <p className="text-sm text-gray-500">Expires 12/26</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 shadow-sm rounded-md border">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="Mastercard"
              className="w-10"
            />
            <div>
              <p className="font-bold">Mastercard - **** 5678</p>
              <p className="text-sm text-gray-500">Expires 05/25</p>
            </div>
          </div>
          <button className="text-blue-600 hover:underline">
            Add New Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default Financial;
