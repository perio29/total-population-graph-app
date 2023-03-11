import { Prefectures } from "@/utils/type";
import useSWRImmutable from "swr";

const usePrefecture = () => {
  /* 再フェッチをしないようにuseSWRImmutableを使用*/
  const { data, error } = useSWRImmutable<Prefectures>(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures"
  );

  return { data, error, isLoading: !data && !error };
};

export default usePrefecture;
