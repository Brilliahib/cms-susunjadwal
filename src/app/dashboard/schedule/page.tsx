"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import ButtonAddSchedule from "@/components/molecules/button/ButtonAddSchedule";
import ScheduleCalendar from "@/components/organisms/schedule/ScheduleCalendar";

export default function ScheduleDashboard() {
  return (
    <>
      <DashboardTitle title="Jadwal Kuliah" />
      <ButtonAddSchedule />
      <ScheduleCalendar />
    </>
  );
}
