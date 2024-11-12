import { HomePage } from "../HomePage";
import { getDictionary } from "./dictionaries";
import Header, { Sitedata } from "../Home/Header";


export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const t: Sitedata = await getDictionary(lang);
  console.log(t);

  return (
    <>
      <div className="z-100">
        <Header SITE_DATA={t} />
        {/* {JSON.stringify(t)} */}
        <HomePage SITE_DATA={t} />
      </div>
    </>
  );
}
