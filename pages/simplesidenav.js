import Head from "next/head";
import {
  ChevronDoubleLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import DynamicHeroIcon from "../Components/DynamicHeroIcon";

const SimpleSideNav = () => {
  const options = [
    { icon: "HomeIcon", name: "Overview" },
    { icon: "ChartBarIcon", name: "Dashboard" },
    { icon: "Square3Stack3DIcon", name: "Projects" },
    { icon: "DocumentCheckIcon", name: "Tasks" },
    { icon: "FlagIcon", name: "Reporting" },
    { icon: "UsersIcon", name: "Users" },
  ];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Head>
        <title>Simple Side Navbar</title>
      </Head>
      <div className=" bg-purple-600 text-white flex flex-col h-screen">
        <div>
          <h2 className="font-mono p-2 text-3xl uppercase mt-5"> 
          {open?'LOGO':'LO'}
          </h2>

          {!open ? (
            <div className="p-2" onClick={()=>setOpen(!open)}>
              <DynamicHeroIcon icon="Bars3Icon" className="w-8" />
            </div>
          ) : (
            <div className="mt-5 flex p-1">
              <div className="flex p-2 rounded-md border-2">
                <DynamicHeroIcon icon="MagnifyingGlassIcon" className="w-6" />
                <input
                  type="text"
                  placeholder="Search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="border-none outline-none bg-transparent placeholder:text-white"
                />
              </div>
            </div>
          )}
          <ul className="mt-5 flex flex-col text-md gap-y-3 w-ful h-full">
            {options.map((option) => (
              <li key={option.name}>
                <div className={`flex p-2 gap-x-2 hover:bg-purple-900 `}>
                  {open ? (
                    <>
                      {<DynamicHeroIcon icon={option.icon} className="w-4" />}{" "}
                      {option.name}
                    </>
                  ) : (
                    <>
                      {<DynamicHeroIcon icon={option.icon} className="w-8" />}
                    </>
                  )}
                </div>
              </li>
            ))}
            {open ?
            <li className="flex gap-x-2 cursor-pointer" onClick={() => setOpen(!open)}>
              
                    <ChevronDoubleLeftIcon className="w-4" /> Collapse Menu
              
            </li>:''}
          </ul>
        </div>
      </div>

      <div className="bg-purple-800 w-full overflow-y-scroll">
        Simpe Side Nav
      </div>
    </div>
  );
};

export default SimpleSideNav;
