import { CustomSidebar } from "./components/CustomSidebar";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <CustomSidebar />
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
