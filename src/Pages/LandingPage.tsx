import Navbar from "@/global/Login/Navbar";
import teleMedImg from "@/assets/Telemedicine.webp";
import teleHealth from "@/assets/telehealth.jpeg";
import teledoc from "@/assets/teledoc.webp";
import { Button } from "@/components/ui/button";
import { CalendarHeart, Check, Clock6, SaveOff } from "lucide-react";
import Carouselll from "@/components/Carouselll";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="font-main h-[400vh]">
      <div className="aboslute top-0 left-0 bg-blue-900 h-[80vh] rounded-br-full text-white" id="home">
        <Navbar />

        <div className="flex justify-center items-center mt-28 relative">
          <div className="wid widlimit flex justify-between relative">
            <div className="flex flex-col gap-5">
              <div className="font-extrabold text-6xl">Skip the travel!</div>
              <p className="text-2xl font-bold">
                Take Online Doc/or Consultation
              </p>
              <p className="text-slate-300">
                Private consultation + audio/video call + chat
              </p>
              <Button className="w-[200px] bg-blue-500 font-bold">
                Consult now
              </Button>
            </div>
            <div className="w-[520px] h-[520px] rounded-full bg-white -mt-24 bg-gradient-to-b from-white to-[#f2f6f9]">
              <img
                src={teleMedImg}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="wid widlimit flex justify-between relative bg-white h-[500px] rounded-b-[40px] rounded-t-[40px] items-center text-black">
            <div className="absolute top-3 -left-1 bg-blue-400 h-[20px] w-[40px] semi -rotate-[50deg]"></div>
            <div className="absolute bottom-3 -right-1 bg-blue-900 h-[20px] w-[40px] semi rotate-[130deg]"></div>
            <div className="p-6">
              <img
                src={teledoc}
                className="w-[480px] h-[330px] object-cover oval"
              />
            </div>
            <div className="flex flex-col gap-5 w-[40%]">
              <p className="text-4xl font-extrabold">
                Talk to a Doctor within minutes
              </p>
              <p className="text-slate-500">
                Access top doctors for online consultation from anywhere,
                anytime through VIDEO/PHONE or CHAT
              </p>
              <Button className="w-[200px] bg-blue-500 font-bold">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-20 text-black">
          <div className="wid widlimit flex gap-[8rem]">
            <div className="text-3xl font-extrabold border-b border-violet-700 pb-3 w-max h-max" id="services">
              Our Services
            </div>
            <div className="flex flex-wrap gap-y-8 gap-x-4 justify-between">
              <div className="flex flex-col w-[45%] gap-2">
                <h1 className="font-extrabold text-lg">Video Consultation</h1>
                <p className="text-slate-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo consequuntur rem non velit, laboriosam tempore quae,
                  earum excepturi itaque similique corrupti eum ipsum at aut
                  quis nesciunt dolor? Laudantium, cumque?
                </p>
              </div>
              <div className="flex flex-col w-[45%] gap-2">
                <h1 className="font-extrabold text-lg">Online Prescription</h1>
                <p className="text-slate-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo consequuntur rem non velit, laboriosam tempore quae,
                  earum excepturi itaque similique corrupti eum ipsum at aut
                  quis nesciunt dolor? Laudantium, cumque?
                </p>
              </div>
              <div className="flex flex-col w-[45%] gap-2">
                <h1 className="font-extrabold text-lg">Medical Advice</h1>
                <p className="text-slate-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo consequuntur rem non velit, laboriosam tempore quae,
                  earum excepturi itaque similique corrupti eum ipsum at aut
                  quis nesciunt dolor? Laudantium, cumque?
                </p>
              </div>
              <div className="flex flex-col w-[45%] gap-2">
                <h1 className="font-extrabold text-lg">Video Consultation</h1>
                <p className="text-slate-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo consequuntur rem non velit, laboriosam tempore quae,
                  earum excepturi itaque similique corrupti eum ipsum at aut
                  quis nesciunt dolor? Laudantium, cumque?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-20 text-black">
          <div className="wid widlimit relative">
            <h1 className="text-center font-extrabold text-4xl font-main3 pb-2">
              Benefit of Telemedicine
            </h1>
            <hr className="border-b border-purple-600 w-[100px] absolute left-1/2 -translate-x-1/2" />
            <div className="flex gap-16 mt-16">
              <div className="h-[480px] w-[520px]">
                <img
                  src={teleHealth}
                  className="h-full w-full object-center object-cover rounded-3xl"
                />
              </div>
              <div className="flex flex-col gap-6 w-1/2 justify-between">
                <div className="flex gap-6 items-center">
                  <div className="p-4 bg-white rounded-full shadow-sm">
                    <Clock6 className="text-sky-600" size={25} />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-extrabold text-xl">Convenient and Easy</h2>
                    <p className="text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non ligula velit. Nulla facilisi. Sed consequat, velit
                      vel scelerisque venenatis, neque neque facilisis velit, in
                      efficitur metus nisi et arcu.efficitur metus nisi et arcu.efficitur metus nisi et arcu.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="p-4 bg-white rounded-full shadow-sm">
                    <CalendarHeart className="text-sky-600" size={25} />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-extrabold text-xl">Safe Consultations</h2>
                    <p className="text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non ligula velit. Nulla facilisi. Sed consequat, velit
                      Sed non ligula velit. Nulla facilisi. Sed consequat, velit
                      vel scelerisque venenatis, neque neque facilisis velit, in
                      efficitur metus nisi et arcu.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="p-4 bg-white rounded-full shadow-sm">
                    <Clock6 className="text-sky-600" size={25} />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-extrabold text-xl">Anytime, Anywhere</h2>
                    <p className="text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non ligula velit. Nulla facilisi. Sed consequat, velit
                      vel scelerisque venenatis, neque neque facilisis velit, in
                      Sed non ligula velit. Nulla facilisi. Sed consequat, velit
                      efficitur metus nisi et arcu.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-36 text-black rounded-t-[6rem] bg-blue-800 h-[80vh]">
        <div className="wid widlimit relative p-8">
          <h1 className="font-extrabold text-4xl font-main3 pb-2 text-white text-center">
              Others Thoughts on Telemedicine
          </h1>
          <span className="absolute z-30 h-[0.1rem] w-[100px] left-1/2 -translate-x-1/2 bg-gray-200 rounded"/>
        <div className="mt-10">
          <Carouselll/>
        </div>
        </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
};

export default LandingPage;
