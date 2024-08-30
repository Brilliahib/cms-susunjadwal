"use client";

import DashboardDetailSchedule from "@/components/atoms/typography/DashboardDetailSchedule";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetDetailSchedule } from "@/http/schedule/get-detail-schedule";
import { Assignment } from "@/types/assignment/assignment";
import { useSession } from "next-auth/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
      <div className="flex gap-4">
        <div className="md:w-4/12">
          <Card>
            <CardHeader>
              <h1 className="text-xl font-bold">Tugas</h1>
            </CardHeader>
            <CardContent>
              {data?.events?.tasks?.length ? (
                <Accordion type="single" collapsible className="w-full">
                  {data.events.tasks.map((task: Assignment, index: number) => (
                    <AccordionItem key={task.id} value={`task-${index}`}>
                      <AccordionTrigger>{task.title}</AccordionTrigger>
                      <AccordionContent>
                        <p>{task.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p>Hore tidak ada tugas!</p>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="md:w-8/12 w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center">
                Not Finished Yet!
              </CardTitle>
              <CardDescription className="text-center">
                This will be used as lecture content.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
