import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export default function List() {
  return (
    <div className="grid grid-cols-12 w-screen">
      <div className="col-span-2">
        <SidebarComponent />
      </div>
      <div className="col-span-10">
        <NavbarComponent />
      </div>
    </div>
  );
}
