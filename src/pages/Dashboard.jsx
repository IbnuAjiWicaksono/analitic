import Card from "../Component/card";
import NavBar from "../Component/navBar";
import Cardd from "../Component/cardd";
import Dropdown from "../Component/dropdown";
import Chart from "../Component/chart";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex grid-col-2 pt-20">
        <div className="grid grid-rows-1 w-1/3 h-full">
          <div className="h-full flex flex-col justify-between">
          <p className="text-xl font-medium pl-10 pb-5 pt-5">Dashboard {">"} Twitter</p>
     <p className="ttext-sm font-semibold pl-10 pb-2">Platform</p>
          <Dropdown/>
          <Cardd/>
          </div>
        </div>
        <div className="flex-1">
          <Card />
          <div className="p-2 pb-10 w-full h-max">
           <Chart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
