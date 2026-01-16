import { getDictionary } from "@/app/[lang]/dictonaries";

export default async function Home({ params }) {

  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <h1>{dictionary.followers}</h1>
    </div>
  );
}
