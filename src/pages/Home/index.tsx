import { Tabs } from "antd-mobile";
import "./style.css";
import useTable from "./useTab";
import HomeList from "./HomeList";

const Home = () => {
  const channels = useTable();
  return (
    <div>
      <div className="tabContainer">
        <Tabs>
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              <HomeList channelId={item.id} />
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
