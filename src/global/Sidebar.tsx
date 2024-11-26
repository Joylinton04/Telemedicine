import { Input } from "@/components/ui/input";
import {
  BadgeDollarSign,
  Home,
  MapPinned,
  Search,
  Settings,
  SquareActivity,
  User,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useScroll from "@/hook/useScroll";

const Sidebar = () => {
  const [hidden, setIsHidden] = useState<Boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY >= 20) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [scrollY]);

  const menu = [
    {
      title: "Main Menu",
      items: [
        {
          title: "Dashboard",
          path: "/",
          icon: <Home size={"20px"}/>,
        },
        {
          title: "Appointments",
          path: "/appointments",
          icon: <MapPinned size={"20px"} />,
        },
        // {
        //   title: "Patients",
        //   path: "/patients",
        //   icon: <Users size={"20px"} />,
        // },
        {
          title: "Financial",
          path: "/financial",
          icon: <BadgeDollarSign size={"20px"} />,
        },
      ],
    },
    {
      title: "Users",
      items: [
        {
          title: "Profile",
          path: "/profile",
          icon: <User size={"20px"} />,
        },
        {
          title: "Settings",
          path: "/",
          icon: <Settings size={"20px"} />,
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={`w-[200px] bg-white p-4 font-main3 border-r border-gray-100 h-screen sticky z-50 top-0 ${
          hidden && "w-max"
        } ssm:hidden`}
      >
        <div className="flex flex-col gap-4 h-screen">
          <div
            className="font-extrabold flex gap-2 items-center"
            onClick={() => setIsHidden(!hidden)}
          >
            <SquareActivity className="text-green-600" size={"40px"} />
            <span className={`uppercase ${hidden && "hidden"}`}>Pluscare</span>
          </div>
          <div className={`relative flex ${hidden && "hidden"}`}>
            <Input
              className="h-[35px] pl-7 text-sm"
              placeholder="Search here..."
            />
            <p className="absolute left-[5px] top-[5px]">
              <Search size={"20px"} />
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {menu.map((menu) => (
              <div className="flex flex-col gap-2" key={menu.title}>
                <h1 className="font-medium text-slate-500 whitespace-nowrap">
                  {menu.title}
                </h1>
                {menu.items.map((link) => (
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-2 hover:bg-[#dbeafe] hover:text-blue-600 py-3 px-4 rounded"
                    key={link.title}
                  >
                    {link.icon}
                    <span
                      className={`font-medium text-[15px] ${
                        hidden && "hidden"
                      }`}
                    >
                      {link.title}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white z-50 shadow-lg border-t border-gray-200 ssm:fixed sm:hidden 
          ${showMenu ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"} duration-500`}
      >
        <div className="flex gap-4 w-full justify-center">
          {menu &&
            menu.map((item) => (
              <div className="flex gap-4" key={item.title}>
                {item.items.map((option) => (
                  <NavLink
                    key={option.title}
                    to={option.path}
                    className="flex flex-col gap-1 py-4 px-2 hover:bg-bgsoft hover:scale-110 duration-300 rounded cursor-pointer items-center"
                  >
                  <div className="text-lg">{option.icon}</div>
                  <span className="text-xs font-medium">{option.title}</span>
                  </NavLink>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
