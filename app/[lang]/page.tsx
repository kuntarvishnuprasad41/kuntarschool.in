import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import HomePage from "../HomePage";
import { getDictionary } from "./dictionaries";
import Header from "../Home/Header";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const [mounted, setMounted] = useState(false);
  // const minimumLoadTime = 500; // milliseconds

  const t = await getDictionary(lang);
  console.log(t);

  return (
    <>
      <div className="z-100">
        <Header SITE_DATA={t} />
        {/* {JSON.stringify(t)} */}
        <HomePage data={t} />
      </div>
    </>
  );
}
