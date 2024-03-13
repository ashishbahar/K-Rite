import React, { useState } from "react";
import man from "../assets/images/png/User.png";
import { Data, Data2, Data3 } from "./Helper";

const SideBar = () => {
  const [drop, setDrop] = useState(0);
  const [team, setTeam] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = Data.filter((item) =>
    item.Brand.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredData2 = Data2.filter((item) =>
    item.Brand.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredData3 = Data3.filter((item) =>
    item.Brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div class="container mt-[20px]">
        <div className=" flex justify-between h_100_vh w-full flex-row">
          <div className=" w-[20%]">
            <div className=" h-full border-[2px] flex-col flex justify-between border-solid border-[#00000063] rounded-md p-[10px]">
              <div className=" ">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="line_height">INC</p>
                    <p className="line_height ">InnovteHub</p>
                  </div>
                  <img src={man} alt="man" />
                </div>
                <div className=" mt-3 p-3 rounded-md border-[1px] border-solid border-[#00000046]">
                  <p
                    className={`cursor-pointer  px-3 py-2  rounded-md flex justify-between items-center ${
                      team === 1 ? "bg-[#8080805f]" : ""
                    } `}
                    onClick={() => setTeam(1)}
                  >
                    Design Team
                  </p>{" "}
                  <p
                    className={`cursor-pointer  px-3 py-2  rounded-md flex justify-between items-center ${
                      team === 2 ? "bg-[#8080805f]" : ""
                    } `}
                    onClick={() => setTeam(2)}
                  >
                    Marketing Team
                  </p>
                  <p
                    className={`cursor-pointer  px-3 py-2  rounded-md flex justify-between items-center ${
                      team === 3 ? "bg-[#8080805f]" : ""
                    } `}
                    onClick={() => setTeam(3)}
                  >
                    Development Team
                  </p>
                </div>
                <p className=" flex  justify-between mb-3 mt-5 font-bold text-[17px]">
                  <span>Folders</span> <span>+</span>
                </p>
                <div>
                  <p
                    className={`cursor-pointer  px-3 py-2  rounded-md flex justify-between items-center ${
                      drop === 1 ? "bg-[#8080805f]" : "bg-[#8080801a]"
                    } `}
                    onClick={() => setDrop(drop === 1 ? 0 : 1)}
                  >
                    <span className=" font-semibold">Products</span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0.451294L5 5.45129L10 0.451294H0Z"
                          fill="black"
                          fillOpacity="0.54"
                        />
                      </svg>
                    </span>
                  </p>
                  <ul className={` mt-2 ${drop === 1 ? "block" : "hidden"}`}>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "RoadMap" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("RoadMap")}
                    >
                      RoadMap
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "Feedback" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("Feedback")}
                    >
                      Feedback
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "Team" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("Team")}
                    >
                      Team
                    </li>
                  </ul>
                </div>
                <div className=" mt-3">
                  <p
                    className={`cursor-pointer  px-3 py-2  rounded-md flex justify-between items-center ${
                      drop === 2 ? "bg-[#8080805f]" : "bg-[#8080801a]"
                    } `}
                    onClick={() => setDrop(drop === 2 ? 0 : 2)}
                  >
                    <span className=" font-semibold">Sales</span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0.451294L5 5.45129L10 0.451294H0Z"
                          fill="black"
                          fillOpacity="0.54"
                        />
                      </svg>
                    </span>
                  </p>
                  <ul className={` mt-2 ${drop === 2 ? "block" : "hidden"}`}>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "Performance" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("Performance")}
                    >
                      Performance
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "Analytics" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("Analytics")}
                    >
                      Analytics
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "Assignment" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("Assignment")}
                    >
                      Assignment
                    </li>
                  </ul>
                </div>{" "}
                <div className=" mt-3">
                  <p
                    className={`cursor-pointer  px-3 py-2  rounded-md flex justify-between items-center ${
                      drop === 3 ? "bg-[#8080805f]" : "bg-[#8080801a]"
                    } `}
                    onClick={() => setDrop(drop === 3 ? 0 : 3)}
                  >
                    <span className=" font-semibold">Design</span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0.451294L5 5.45129L10 0.451294H0Z"
                          fill="black"
                          fillOpacity="0.54"
                        />
                      </svg>
                    </span>
                  </p>
                  <ul className={` mt-2 ${drop === 3 ? "block" : "hidden"}`}>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "option1" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("option1")}
                    >
                      option1
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "option2" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("option2")}
                    >
                      option2
                    </li>
                    <li
                      className={`px-4 py-1 cursor-pointer rounded-md hover:bg-[#80808014] duration-200 ${
                        selectedItem === "option3" ? "!bg-[#8080805f]" : ""
                      }`}
                      onClick={() => handleItemClick("option3")}
                    >
                      option3
                    </li>
                  </ul>
                </div>
                <p
                  className={`cursor-pointer  px-3 py-2 mt-5  rounded-md flex justify-between items-center ${
                    drop === 4 ? "bg-[#8080805f]" : ""
                  } `}
                  onClick={() => setDrop(drop === 4 ? 0 : 4)}
                >
                  Office
                </p>{" "}
                <p
                  className={`cursor-pointer  px-3 py-2   rounded-md flex justify-between items-center ${
                    drop === 5 ? "bg-[#8080805f]" : ""
                  } `}
                  onClick={() => setDrop(drop === 5 ? 0 : 5)}
                >
                  Legal
                </p>
              </div>
              <div>
                <p className=" cursor-pointer"> Invite Teammates</p>
                <p className=" mt-1 cursor-pointer"> Help and First Step</p>
              </div>
            </div>
          </div>
          <div className="w-[78%]">
            <div
              className=" border-[2px] justify-between h-full
              border-solid border-[#00000063] rounded-md px-[20px] py-3"
            >
              <div className="flex items-center justify-between">
                <div className=" flex items-center">
                  <img src={man} alt="man" />
                  <p
                    className={` text-[20px] font-semibold ms-4 mt-2 ${
                      drop === 1 ? "block" : "hidden"
                    }`}
                  >
                    Products
                  </p>{" "}
                  <p
                    className={` text-[20px] font-semibold ms-4 mt-2 ${
                      drop === 2 ? "block" : "hidden"
                    }`}
                  >
                    Sales
                  </p>{" "}
                  <p
                    className={` text-[20px] font-semibold ms-4 mt-2 ${
                      drop === 3 ? "block" : "hidden"
                    }`}
                  >
                    Design
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Brand Name"
                    className=" border-2 rounded-md border-solid border-black px-2 py-1"
                  />
                </div>
              </div>
              <table className="w-full mt-5">
                <thead>
                  <tr>
                    <th className=" ">Brand </th>
                    <th className=" ">Description</th>
                    <th className=" "> Categories</th>
                    <th className=" ">Tags</th>
                    <th className=" "> Next Meeting</th>
                  </tr>
                </thead>
                <tbody className={`  ${drop === 1 ? "" : "hidden"}`}>
                  {filteredData.map((obj, i) => {
                    return (
                      <tr key={i}>
                        <td className="opacity-[.6]">{obj.Brand}</td>
                        <td className="opacity-[.6]">{obj.Des}</td>
                        <td className="opacity-[.6]">{obj.Cat}</td>
                        <td className="opacity-[.6]">{obj.Tag}</td>
                        <td className="opacity-[.6]">{obj.NextMeeting}</td>
                      </tr>
                    );
                  })}
                </tbody>{" "}
                <tbody className={`  ${drop === 2 ? "" : "hidden"}`}>
                  {filteredData2.map((obj, i) => {
                    return (
                      <tr key={i}>
                        <td className="opacity-[.6]">{obj.Brand}</td>
                        <td className="opacity-[.6]">{obj.Des}</td>
                        <td className="opacity-[.6]">{obj.Cat}</td>
                        <td className="opacity-[.6]">{obj.Tag}</td>
                        <td className="opacity-[.6]">{obj.NextMeeting}</td>
                      </tr>
                    );
                  })}
                </tbody>{" "}
                <tbody className={`  ${drop === 3 ? "" : "hidden"}`}>
                  {filteredData3.map((obj, i) => {
                    return (
                      <tr key={i}>
                        <td className="opacity-[.6]">{obj.Brand}</td>
                        <td className="opacity-[.6]">{obj.Des}</td>
                        <td className="opacity-[.6]">{obj.Cat}</td>
                        <td className="opacity-[.6]">{obj.Tag}</td>
                        <td className="opacity-[.6]">{obj.NextMeeting}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
