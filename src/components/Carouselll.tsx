import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { User2 } from "lucide-react";

const Carouselll = () => {
  const carouselInfo = [
    {
      name: "Richmond Mensah",
      info: "I think telemedicine will reduce the long waiting time at the local hospital since some/most people wouldn’t have to be at the hospital to see a specialist for minor health diagnosis.",
      occupation: "Software Developer",
    },
    {
      name: "Adu A Joy",
      info: "Telemedicine will provide quick health care delivery to patients, avoid unnecessary referrals, and also save transport times for mostly non-emergency situations.",
      occupation: "Student",
    },
    {
      name: "Dr. Philp",
      info: "It will ease the burden of queuing for small ailments like colds. Also, it will save transportation costs. It can be a quick form of emergency and can prompt if the case needs attention from a healthcare facility.",
      occupation: "Doctor",
    },
    {
      name: "Clarret",
      info: "It helps prevent time wasting and also avoids the need for traveling long distances to reach healthcare facilities in the community.",
      occupation: "Student",
    },
    {
      name: "Akua",
      info: "Reasons such as comfort and convenience due to the fact that healthcare services can be accessed from home, time-saving, and lower expenses.",
      occupation: "Nurse",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full mt-4 px-4">
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full py-2"
        >
          <CarouselContent className="h-[350px] gap-6">
            {carouselInfo.map((car) => (
              <CarouselItem
                className="basis-[35%] ssm:basis-[100%] bg-white h-full p-[30px] mdd:p-[20px] rounded-xl flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300"
                key={car.name}
              >
                <p className="text-center text-blue-500 text-8xl font-extrabold mb-4">“</p>
                <div className="font-main3 text-gray-700 text-sm text-center">
                  {car.info}
                </div>
                <div className="flex gap-4 mt-8 items-center">
                  <div className="bg-gradient-to-tr from-blue-500 to-purple-400 w-12 h-12 rounded-full shadow-lg flex justify-center items-center">
                    <User2 className="text-white" size={25} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-lg text-gray-900">{car.name}</h1>
                    <p className="text-sm text-gray-500">{car.occupation}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gray-600 hover:text-blue-500 transition duration-300 ssm:hidden" />
          <CarouselNext className="text-gray-600 hover:text-blue-500 transition duration-300 ssm:hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default Carouselll;
