import { useState, useEffect } from "react";
import { Mail, Lock, User, SquareMousePointer, PersonStanding, Workflow, Timer, Stethoscope } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const InputField = ({ 
  label, 
  icon: Icon, 
  field, 
  placeholder, 
  type = "text",
  className = "" 
}:any) => (
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
          className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     text-gray-800 transition-all duration-300 ${className}`}
        />
        <Icon
          className="absolute right-3 top-3 text-gray-400 transition-colors duration-300 group-hover:text-blue-500"
          size={20}
        />
      </div>
    </FormControl>
    <FormMessage />
  </FormItem>
);

const SelectField = ({ label, icon: Icon, field, options }:any) => (
  <FormItem className="relative">
    <label className="text-sm font-medium text-gray-600">
      {label}
    </label>
    <FormControl>
      <div className="relative group">
        <select
          {...field}
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     text-gray-600 appearance-none transition-all duration-300"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          className="absolute right-3 top-3 text-gray-400 transition-colors duration-300 group-hover:text-blue-500"
          size={20}
        />
      </div>
    </FormControl>
    <FormMessage />
  </FormItem>
);

const Register = () => {
  const [isDoctor, setIsDoctor] = useState(false);

  const formSchema = z.object({
    username: z.string().min(4).max(10),
    email: z.string().email(),
    password: z.string().min(8).max(30),
    role: z.string().min(1, "Please select a role"),
    gender: z.string().min(1, "Please select your gender"),
    specialization: z.string().optional(),
    biography: z.string().optional(),
    experience: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "",
      gender: "",
      specialization: "",
      biography: "",
      experience: "",
    },
  });

  // Watch for role changes to show/hide doctor fields
  const role = form.watch("role");
  
  useEffect(() => {
    setIsDoctor(role === "doctor");
  }, [role]);

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center px-4 py-8 font-main">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8 overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create an Account
          </h1>
          <p className="text-sm text-gray-500">
            Sign up to get started with our telemedicine services
          </p>
        </div>

        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="space-y-4">
              {/* Basic Information */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <InputField
                    label="Username"
                    icon={User}
                    field={field}
                    placeholder="andy404_"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <InputField
                    label="Email Address"
                    icon={Mail}
                    field={field}
                    placeholder="your.email@example.com"
                    type="email"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <InputField
                    label="Password"
                    icon={Lock}
                    field={field}
                    placeholder="••••••••"
                    type="password"
                  />
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <SelectField
                      label="Role"
                      icon={SquareMousePointer}
                      field={field}
                      options={[
                        { value: "", label: "Select your role" },
                        { value: "patient", label: "Patient" },
                        { value: "doctor", label: "Doctor" }
                      ]}
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <SelectField
                      label="Gender"
                      icon={PersonStanding}
                      field={field}
                      options={[
                        { value: "", label: "Select gender" },
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" }
                      ]}
                    />
                  )}
                />
              </div>
            </div>

            {/* Doctor-specific fields */}
            {isDoctor && (
              <div className="space-y-4 animate-fadeIn">
                <FormField
                  control={form.control}
                  name="specialization"
                  render={({ field }) => (
                    <InputField
                      label="Specialization"
                      icon={Stethoscope}
                      field={field}
                      placeholder="e.g., Cardiologist"
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="biography"
                  render={({ field }) => (
                    <FormItem>
                      <label className="text-sm font-medium text-gray-600">
                        Biography
                      </label>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your medical background..."
                          className="min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <InputField
                      label="Years of Experience"
                      icon={Timer}
                      field={field}
                      placeholder="e.g., 5"
                      type="number"
                    />
                  )}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md 
                       hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50
                       transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Create Account
            </button>
          </form>
        </Form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Already have an account?{" "}
            <a 
              href="/login" 
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;