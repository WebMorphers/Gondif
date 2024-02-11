import Image from "next/image";
import Link from "next/link";
import Login from "./Login/page";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
