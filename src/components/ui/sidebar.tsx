import Link from "next/link";

import { FaEdit, FaHome, FaHospital } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

export default function Sidebar({
  show,
  setter,
}: {
  show: boolean;
  setter: Function;
}) {
  // Define our base class
  const className =
    "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({
    icon,
    name,
    route,
  }: {
    icon: JSX.Element;
    name: string;
    route: string;
  }) => {
    return (
      <Link
        href={route}
        onClick={() => {
          setter((oldVal: any) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10`}>
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal: any) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex">
          <Link href="/">
            {/*eslint-disable-next-line*/}
            <img
              src="/images/logo.png"
              alt="Company Logo"
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="flex flex-col">
          <MenuItem name="الرئيسية" route="/dashboard" icon={<FaHome />} />
          <MenuItem
            name="الحالات"
            route="/dashboard/cases"
            icon={<FaHospital />}
          />
          <MenuItem
            name="التعديلات"
            route="/dashboard/fixing"
            icon={<FaEdit />}
          />
          <MenuItem
            name="التحليلات"
            route="/dashboard/analytics"
            icon={<IoMdAnalytics />}
          />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
