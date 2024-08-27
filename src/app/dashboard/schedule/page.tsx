"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useGetAllSchedule } from "@/http/schedule/get-all-schedule";
import { useSession } from "next-auth/react";
import FullCalendar from "@fullcalendar/react";
import { Card, CardContent } from "@/components/ui/card";

export default function ScheduleDashboard() {
  const session = useSession();
  const { data } = useGetAllSchedule(session.data?.access_token as string, {
    enabled: session.status === "authenticated",
  });

  const events =
    data?.data.map((event) => ({
      id: event.id.toString(),
      title: event.nama_matakuliah,
      start: event.start,
      end: event.end,
      extendedProps: {
        dosen: event.dosen_pengampu,
        ruang: event.ruang_kelas,
        sks: event.sks,
      },
    })) || [];
  return (
    <>
      <DashboardTitle title="Jadwal Kuliah" />
      <Card>
        <CardContent>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,dayGridWeek,dayGridDay",
            }}
          />
        </CardContent>
      </Card>
    </>
  );
}
