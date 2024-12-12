import { http } from "@/utils/index";
import { ResType } from "./shared";
import { AxiosResponse } from "axios";

type ChannelItem = {
  id: number;
  name: string;
};

type ChannelRes = {
  channels: ChannelItem[];
};

export function fetchChannelAPI(): Promise<AxiosResponse<ResType<ChannelRes>>> {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
}

export type { ChannelItem };
