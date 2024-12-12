type ResType<T> = {
  message: string;
  data: T;
};

type ChannelItem = {
  id: number;
  name: string;
};

export type { ResType, ChannelItem };
