import React from "react";
import { Calendar, Calendar1, Users } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger } from "@radix-ui/react-select";
import { SelectContent, SelectItem } from "@/components/ui/select";

const PatientAppointments = () => {
  const formSchema = z.object({
    name: z.string(),
    date: z.date(),
    time: z.string(),
    role: z.string(),
    service: z.string(),
    textfield: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: new Date(),
      time: "",
      role: "",
      service: "",
      textfield: "",
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  const doctors = [
    "Dr. Jane Doe",
    "Dr. John Smith",
    "Dr. Emily Davis",
    "Dr. Michael Brown",
  ];
  const services = [
    "Regular Check-Up",
    "Dental Consultation",
    "Cardiology Consultation",
    "Pediatrics Consultation",
  ];

  return (
    <div className="p-6 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>
      <Form {...form}>
        <form className="space-y-6 relative flex flex-col items-center" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="w-[80%] flex flex-col gap-[1rem]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <FormControl className="text-2xl relative">
                    <div>
                      <Input
                        placeholder="name"
                        {...field}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-0 text-gray-800"
                      />
                      <Users
                        className="absolute right-3 top-3 text-gray-400"
                        size={20}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-[2rem]">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-600"
                    >
                      Date
                    </label>
                    <FormControl className="text-2xl relative">
                      <div className="relative">
                        <Input id="date" type="date" className="w-full" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="relative">
                    <label
                      htmlFor="time"
                      className="text-sm font-medium text-gray-600"
                    >
                      Time
                    </label>
                    <FormControl className="text-2xl relative">
                      <div className="relative">
                        <Input id="time" type="time" className="w-full" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="relative flex flex-col">
                  <label
                    htmlFor="time"
                    className="text-sm font-medium text-gray-600"
                  >
                    Select a service
                  </label>
                  <FormControl className="text-2xl relative">
                    <Select {...field}>
                      <SelectTrigger>
                        <Input
                          placeholder="Choose a doctor"
                          // value={form.getFieldState}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor, index) => (
                          <SelectItem key={index} value={doctor}>
                            {doctor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="relative flex flex-col">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-gray-600"
                  >
                    Service
                  </label>
                  <FormControl className="text-2xl relative">
                    <Select {...field}>
                      <SelectTrigger>
                        <Input placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
                control={form.control}
                name="textfield"
                render={({ field }) => (
                  <FormItem className="relative">
                    <label
                      htmlFor="textfield"
                      className="text-sm font-medium text-gray-600"
                    >
                      Description
                    </label>
                    <FormControl className="text-2xl relative">
                      <div className="relative">
                        <textarea id="textfeild" className="w-full text-sm h-[120px] px-4 py-2"/>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>

          <div>
            <Button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
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

{
  /* <form onSubmit={handleSubmit(onSubmit)} className="space-y-6"> */
}
{
  /* Patient Name */
}
//   <div>
//     <Label htmlFor="name">Patient Name</Label>
//     <Input
//       id="name"
//       placeholder="Enter your name"
//       {...register("name", { required: "Name is required" })}
//     />
//   </div>

//   {/* Appointment Date */}
//   <div>
//     <Label htmlFor="date">Appointment Date</Label>
//     <div className="relative">
//       <Input
//         id="date"
//         type="date"
//         {...register("date", { required: "Date is required" })}
//       />
//       <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//     </div>
//   </div>

//   {/* Select Service */}
//   <div>
//     <Label htmlFor="service">Select Service</Label>
//     <Controller
//       name="service"
//       control={control}
//       rules={{ required: "Please select a service" }}
//       render={({ field }) => (
//         <Select {...field} id="service">
//           <SelectTrigger>
//             <Input placeholder="Choose a service" readOnly />
//           </SelectTrigger>
//           <SelectContent>
//             {services.map((service, index) => (
//               <SelectItem key={index} value={service}>
//                 {service}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       )}
//     />
//   </div>

//   {/* Submit Button */}
//   <div>
//     <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
//       Book Appointment
//     </Button>
//   </div>
// </form>
