import { LogoutButton } from "@/components/LogoutButton";
import { NavButton } from "@/components/NavButton";
import Image from "next/image";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="bg-black">
      <aside>
        <div className="h-full w-[200px] fixed bg-gradient-to-b from-gray-400 border-r border-black/10">
          <div className="h-[60px] border-black/10 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <Image src="/images/logo.png" alt="الحرب الإلكترونية" width={50} height={50} />
              <h1 className="text-2xl font-bold">لوحة التحكم</h1>
            </div>
          </div>
          <nav className="h-[calc(100vh-60px)] overflow-y-auto">
            <ul className="h-full p-4 flex flex-col justify-between">
              <div>
                <NavButton name="الرئيسية" url="/dashboard" />
                <NavButton name="الحالات" url="/dashboard/cases" />
                <NavButton name="التصليحات" url="/dashboard/fixing" />
                <NavButton name="تحليل البيانات" url="/dashboard/analytics" />
              </div>
              <div>
                <LogoutButton />
              </div>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="ml-[210px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full flex justify-end items-center px-6"></div>
        </header>
        <div className="h-[calc(100vh-60px)]">{props.children}</div>
      </div>
    </div>
  );
};
export default DashboardLayout;
