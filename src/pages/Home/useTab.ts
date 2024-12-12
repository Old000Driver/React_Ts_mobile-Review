import { useEffect, useState } from "react";
import { fetchChannelAPI } from "@/apis/list";
import type { ChannelItem } from "@/apis/list";

function useTable() {
  const [channels, setChannels] = useState<ChannelItem[]>([]);
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        console.log(res);
        if (res.data.message === "OK") {
          // console.log("12324124", res.data.data.channels);
          setChannels(res.data.data.channels);
        }
      } catch (error) {
        throw new Error("获取频道列表失败");
      }
    };
    getChannels();
  }, []);
  return channels;
}

export default useTable;
