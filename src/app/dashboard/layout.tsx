import { NavButton } from "../../components/NavButton";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside>
        <div className="h-full w-[200px] fixed bg-gray-800 border-r border-black/10">
          <div className="h-[60px] border-b border-black/10 flex items-center justify-center">
            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>
          <nav className="h-[calc(100vh-60px)] overflow-y-auto">
            <ul className="h-full p-4 flex flex-col justify-between">
              <div>
                <NavButton name="Home" url="/dashboard" />
                <NavButton name="Fixing" url="/fixing" />
                <NavButton name="Cases" url="/case" />
              </div>
              <div>
                <NavButton name="Logout" url="/logout" color="red" />
              </div>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="ml-[210px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full flex justify-end items-center px-6"></div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};
export default DashboardLayout;
