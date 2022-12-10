import { NewsItem } from "@/types";

const state = {
  news: [] as NewsItem[],
};

type RootState = typeof state;

export { state, RootState };
