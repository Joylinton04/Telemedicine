import React from "react";
import { Calendar, Users, Clock, Stethoscope, FileText } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
}

interface Service {
  id: string;
  name: string;
  duration: string;
}

const doctors: Doctor[] = [
  { id: "1", name: "Dr. Jane Doe", specialization: "Cardiologist" },
  { id: "2", name: "Dr. John Smith", specialization: "Pediatrician" },
  { id: "3", name: "Dr. Emily Davis", specialization: "Neurologist" },
  { id: "4", name: "Dr. Michael Brown", specialization: "Dermatologist" },
];

const services: Service[] = [
  { id: "1", name: "Regular Check-Up", duration: "30 min" },
  { id: "2", name: "Dental Consultation", duration: "45 min" },
  { id: "3", name: "Cardiology Consultation", duration: "60 min" },
  { id: "4", name: "Pediatrics Consultation", duration: "45 min" },
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  doctor: z.string().min(1, "Please select a doctor"),
  service: z.string().min(1, "Please select a service"),
  description: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const InputWithIcon: React.FC<{
  icon: React.ReactNode;
  field: any;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}> = ({ icon, field, label, placeholder, type = "text", className = "" }) => (
  <FormItem className="relative">
    <label className="text-sm font-medium text-gray-600">
      {label}
    </label>
    <FormControl>
      <div className="relative group">
        <Input
          placeholder={placeholder}
          type={type}
          {...field}
          className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     text-gray-800 transition-all duration-300 ${className}`}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 
                      transition-colors duration-300 group-hover:text-blue-500">
          {icon}
        </div>
      </div>
    </FormControl>
    <FormMessage />
  </FormItem>
);

const PatientAppointments = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
      doctor: "",
      service: "",
      description: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    try {
      console.log(data);
      // Add your submission logic here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Book an Appointment</h1>
        <p className="text-gray-600 mt-2">Fill in the details below to schedule your appointment</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <InputWithIcon
                  icon={<Users size={20} />}
                  field={field}
                  label="Full Name"
                  placeholder="Enter your full name"
                />
              )}
            />

            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <InputWithIcon
                    icon={<Calendar size={20} />}
                    field={field}
                    label="Date"
                    type="date"
                  />
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <InputWithIcon
                    icon={<Clock size={20} />}
                    field={field}
                    label="Time"
                    type="time"
                  />
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="doctor"
              render={({ field }) => (
                <FormItem>
                  <label className="text-sm font-medium text-gray-600">
                    Select Doctor
                  </label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id}>
                          <div className="flex items-center">
                            <Stethoscope size={16} className="mr-2 text-gray-400" />
                            <div>
                              <span>{doctor.name}</span>
                              <span className="text-sm text-gray-400 ml-2">
                                ({doctor.specialization})
                              </span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <label className="text-sm font-medium text-gray-600">
                    Select Service
                  </label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{service.name}</span>
                            <span className="text-sm text-gray-400">{service.duration}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <label className="text-sm font-medium text-gray-600">
                    Description
                  </label>
                  <FormControl>
                    <div className="relative group">
                      <Textarea
                        placeholder="Please describe your symptoms or reason for visit..."
                        className="min-h-[120px] resize-none pl-10"
                        {...field}
                      />
                      <FileText 
                        size={20} 
                        className="absolute left-3 top-3 text-gray-400 
                                 transition-colors duration-300 group-hover:text-blue-500"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2
                       transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Book Appointment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PatientAppointments;