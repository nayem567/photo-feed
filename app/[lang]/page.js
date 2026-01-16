import { getDictionary } from "@/app/[lang]/dictonaries";
import PhotoList from "@/app/components/PhotoList";

export default async function Home() {

  // const { lang } = await params;
  // const dictionary = await getDictionary(lang);

  let photos = [];

  try {
    const response = await fetch(`${process.env.BASE_API_URL}/photos`);

    if (!response.ok) {
      console.error(
        `Failed to fetch photos: ${response.status} ${response.statusText}`
      );
    } else {
      photos = await response.json();
    }
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
}
