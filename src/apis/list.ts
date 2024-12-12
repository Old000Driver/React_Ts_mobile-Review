import { http } from "@/utils/index";
import { ResType } from "./shared";

type ChannelItem = {
  id: number;
  name: string;
};

type ChannelRes = {
  channels: ChannelItem;
};

export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
}
