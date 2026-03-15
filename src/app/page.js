'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/profile/nextjs"><li>Profile</li></Link>
        <button onClick={()=>router.push("/about")}>go to google</button>
      </ul>
    </>
  );
}
