"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const session = useSession();
  return (
    <>
      <p className="text-slate-900">{session?.data?.user.name}</p>
    </>
  );
}
