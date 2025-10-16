import { button } from "@material-tailwind/react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Details = () => {
  const [activeTab, setActiveTab] = useState("data_analysis");

  const tabs = [
    { id: "data_analysis", label: "Data Analysis" },
    { id: "graphical_display", label: "Graphical Display" },
    { id: "query_informations", label: "Query Information" },
    { id: "downloads", label: "Downloads" },
  ];

  return (
    <div className="h-60 w-full overflow-auto bg-[#171c22] p-4">
      <div className="bg-[#1c232b] min-h-full pl-2 rounded-xl">
        <Tabs className="">
          <TabList className="flex gap-10">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={` py-2 text-center font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "text-blue-400 border-b-2 border-blue-400 cursor-pointer"
                  : "text-white hover:text-blue-500 cursor-pointer"
              }`}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <hr className="border-white" />

          <TabPanel>
            <h2 className="text-white">Content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-white">Content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-white">Content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-white">Content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Details;
