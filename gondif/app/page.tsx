import Image from "next/image";
import Link from "next/link";
import Login from "./Login/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"Login"}> Login</Link>
    </main>
  );
}
