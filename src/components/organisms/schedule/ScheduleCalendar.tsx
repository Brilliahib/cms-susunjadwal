import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetAllSchedule } from "@/http/schedule/get-all-schedule";
import FullCalendar from "@fullcalendar/react";
import { useSession } from "next-auth/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import { useRouter } from "next/navigation";

export default function ScheduleCalendar() {
  const session = useSession();
  const router = useRouter();
  const { data, isPending } = useGetAllSchedule(
    session.data?.access_token as string,
    {
      enabled: session.status === "authenticated",
    }
  );

  // TO DO CREATE CARD SKELETON FOR LOADING CALENDAR
  if (isPending) {
    return <div>loading...</div>;
  }

  const events =
    data?.data?.map((event) => ({
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

  const handleEventClick = (clickInfo: EventClickArg) => {
    const eventId = clickInfo.event.id;
    router.push(`/dashboard/schedule/${eventId}`);
  };

  return (
    <div className="my-6">
      <Card>
        <CardContent>
          <CardHeader>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,dayGridWeek,dayGridDay",
              }}
              eventClassNames="bg-primary text-white cursor-pointer"
              eventClick={handleEventClick}
            />
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  );
}
