import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Details = () => {
  return (
    <div className="h-60 w-full overflow-auto bg-[#171c22] p-4">
      <div className="bg-[#1c232b] min-h-full p-2 rounded-xl">
        <Tabs>
          <TabList className="flex gap-8 mb-2">
            <Tab className="text-white cursor-pointer focus:text-blue-400">Data Analysis</Tab>
            <Tab className="text-white cursor-pointer focus:text-blue-400">Graphical Display</Tab>
            <Tab className="text-white cursor-pointer focus:text-blue-400">Query Information</Tab>
            <Tab className="text-white cursor-pointer focus:text-blue-400">Downloads</Tab>
          </TabList>

          <hr className="border-white"/>

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
