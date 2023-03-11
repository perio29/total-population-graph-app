import ScreenTop from "@/components/screens/top";
import { SWRConfig } from "swr";

const fetcher = async (key: string) => {
  const res = await fetch(key, {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
    },
  });
  const data = await res.json();
  return data;
};

export default function Home() {
  return (
    <SWRConfig value={{ fetcher }}>
      <ScreenTop />
    </SWRConfig>
  );
}
