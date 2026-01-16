import Image from "next/image";
import Link from "next/link";

const PHOTO_CARD_IMAGE_WIDTH = 700;
const PHOTO_CARD_IMAGE_HEIGHT = 700;

export default function PhotoCard({ photo }) {
  return (
    <Link href={`photos/${photo.id}`} className="group">
      <Image
        src={photo.url}
        alt={photo.title}
        width={PHOTO_CARD_IMAGE_WIDTH}
        height={PHOTO_CARD_IMAGE_HEIGHT}
      />
      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
}
