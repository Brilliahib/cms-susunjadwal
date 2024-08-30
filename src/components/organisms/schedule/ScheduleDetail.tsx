"use client";

import DashboardDetailSchedule from "@/components/atoms/typography/DashboardDetailSchedule";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetDetailSchedule } from "@/http/schedule/get-detail-schedule";
import { useSession } from "next-auth/react";

interface Props {
  id: number;
}

export default function ScheduleDetail({ id }: Props) {
  const session = useSession();
  const { data, isPending } = useGetDetailSchedule(
    {
      token: session.data?.access_token as string,
      id,
    },
    { enabled: session.status === "authenticated" }
  );

  if (isPending) {
    return <Skeleton className="h-8 w-72" />;
  }

  const eventName = data?.events?.nama_matakuliah ?? "";

  return (
    <>
      <DashboardDetailSchedule title={eventName} sks={data?.events?.sks ?? 0} />
    </>
  );
}
