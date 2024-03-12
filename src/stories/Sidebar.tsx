import { useLocation, useNavigate } from "react-router-dom";
import { getUniqueKey } from "../utils/methods/stringMethods";
import Logo from "../helpers/assets/img/Vector.svg";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";
import {
  Dashboard,
  Inventory,
  Logout,
  People,
  Purcahse,
  Sales,
} from "../helpers/assets/img";

export interface SidebarProps {
  type: "small" | "large";
}

const Sidebar: React.FC<SidebarProps> = ({ type }) => {
  // Hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // Menu Data
  const inventorySidebar = () => [
    {
      label: "Dashboard",
      link: `/dashboard`,
      icon: Dashboard,
    },
    {
      label: "Inventory",
      link: `/inventory`,
      icon: Inventory,
    },
    {
      label: "Purchase",
      link: `/purcahse`,
      icon: Purcahse,
    },
    {
      label: "Sales",
      link: `/sales`,
      icon: Sales,
    },
    {
      label: "Customer Retention",
      link: `/customer`,
      icon: People,
    },
  ];
  //   Active Menu Css
  const getActiveCss = (link: string) =>
    pathname === link
      ? `font-medium text-sm text-blue-500`
      : "font-medium text-sm";
  return type === "large" ? (
    <aside className="col-span-2 bg-[#0E84ED] text-[#FFFFFF] h-full w-full  py-4 hidden md:flex md:flex-col gap-4 justify-between border-r-[1px] border-primary-100  cursor-pointer">
      <div className="logo flex items-center justify-between text-2xl gap-3 px-5">
        <img src={Logo} alt="enterleaf" className="h-20 w-[150px] text-white" />
        <BiChevronLeft />
      </div>
      <div className="flex flex-col gap-2 -translate-y-32 ">
        {inventorySidebar()?.map(({ label, link, icon }: any, idx: number) => (
          <div
            className="flex w-full py-2 px-5 justify-between items-center border-b-[1px] border-salte-600 gap-2"
            key={getUniqueKey(idx, label)}
          >
            <div className="flex gap-2 l1-r ">
              <img src={icon} alt="menu icon" />
              <p onClick={() => navigate(link)} className={getActiveCss(link)}>
                {label}
              </p>
            </div>
            {idx != 0 ? <BiChevronDown size={20} /> : ""}
          </div>
        ))}
      </div>
      <div className="flex py-2 justify-center gap-2 text-sm">
        <img className="h-5 w-5" src={Logout} alt="Logout" />
        Log out
      </div>
    </aside>
  ) : (
    <aside className="col-span-1 bg-[#0E84ED] text-[#FFFFFF] h-full w-full  py-4 hidden md:flex md:flex-col gap-4 justify-start  border-r-[1px] border-primary-100  cursor-pointer">
      <div className="logo flex items-center justify-between text-2xl gap-3 px-5">
        <BiChevronLeft />
      </div>
      <div className="flex flex-col gap-2 ">
        {inventorySidebar()?.map(({ label, icon }: any, idx: number) => (
          <div
            className="h-full flex w-full py-2 px-10 justify-between items-center border-b-[1px] border-salte-600 gap-2"
            key={getUniqueKey(idx, label)}
          >
            <div className="bg-[#0E84ED] text-white flex gap-2 l1-r ">
              <img src={icon} alt="menu icon" />
              {idx != 0 ? <BiChevronDown size={20} /> : ""}
            </div>
          </div>
        ))}
      </div>
      <div className="flex py-2 justify-center gap-2 text-sm">
        <img className="h-5 w-5" src={Logout} alt="Logout" />
      </div>
    </aside>
  );
};

export default Sidebar;
