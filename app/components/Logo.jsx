import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/logo.png"
        alt="logo"
        height={156}
        width={156}
      />
    </Link>
  );
}
