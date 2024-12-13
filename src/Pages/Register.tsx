import { Mail, Lock, User, SquareMousePointer } from "lucide-react";
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
import { useState } from "react";

const Register = () => {
  const [isDoctor, setIsDoctor] = useState(false);

  const formSchema = z.object({
    username: z.string().min(4).max(10, {
      message: "username must be at least 5 characters",
    }),
    email: z.string().email(),
    password: z.string().min(8).max(30),
    role: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "",
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    data.role == "doctor" ? setIsDoctor(true) : setIsDoctor(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center px-4 font-main">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create an Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign up to get started with our telemedicine services
        </p>
        <Form {...form}>
          <form
            className="space-y-6 relative"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            {/* Name Input */}
            <div
              className={`space-y-6 relative ${
                isDoctor && "-translate-x-[200%] duration-500"
              }`}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-600"
                    >
                      Username
                    </label>
                    <FormControl className="text-2xl relative">
                      <div>
                        <Input
                          placeholder="andy404_"
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-0 text-gray-800"
                        />
                        <User
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Input */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-600"
                    >
                      Email Address
                    </label>
                    <FormControl className="text-2xl relative">
                      <div>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 focus:ring-blue-500 rounded-md shadow-sm focus:ring-0 text-gray-800"
                        />
                        <Mail
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <FormControl className="text-2xl relative">
                      <div>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          id="password"
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 focus:ring-blue-500 rounded-md shadow-sm focus:ring-0 text-gray-800"
                        />
                        <Lock
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl className="text-2xl relative">
                      <div>
                        <select
                          className="text-sm font-medium text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                          {...field}
                        >
                          <option value="">Select your role</option>
                          <option value="patient">Patient</option>
                          <option value="doctor">Doctor</option>
                        </select>
                        <SquareMousePointer
                          className="absolute right-3 top-3 text-gray-400"
                          size={20}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div
              className={`absolute top-0 space-y-6${
                isDoctor && " duration-300"
              } bg-sky-600`}
            >
              register as a doctor
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
              Register
            </button>
          </form>
        </Form>

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
