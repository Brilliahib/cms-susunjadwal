"use client";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import WrapperDashboard from "@/components/organisms/dashboard/WrapperDashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (session?.user.role === "admin") return redirect("/dashboard/admin");
  return (
    <>
      <DashboardTitle title="Dashboard" />
      <WrapperDashboard />
    </>
  );
}
