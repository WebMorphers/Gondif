'use client';

import { signOut, useSession } from 'next-auth/react';
import MapboxMap from '@/app/Map/MapBoxMap';

export default function Home() {
  const session = useSession();

  return (
    <div className="h-screen">
      <div >{session?.data?.user?.name }</div>
      <button onClick={() => signOut()}>Logout</button>
      <MapboxMap />
    </div>
  );
}