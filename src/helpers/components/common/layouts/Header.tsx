import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex gap-5 items-center px-2">
      <div className="text-2xl">
        <IoMdNotificationsOutline />
      </div>
      <div className="flex gap-2 items-center font-popins font-medium text-[14px] leading-5">
        <div className="flex h-10 w-10 bg-blue-600 rounded-full justify-center items-center text-white-light">
          U
        </div>
        <p>User</p>
      </div>
    </div>
  );
};

export default Header;
