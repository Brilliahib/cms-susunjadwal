import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { useGetAllAssignment } from "@/http/assignment/get-all-assignment";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Clock } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AssignmentList() {
  const session = useSession();
  const { data } = useGetAllAssignment(session.data?.access_token as string, {
    enabled: session.status === "authenticated",
  });
  return (
    <>
      <div className="my-6 grid md:grid-cols-4 grid-cols-1 gap-4">
        {data?.data.map((assignment) => (
          <Link href={`assignments/${assignment.id}`}>
            <Card
              className="w-full border-2 border-muted shadow-transparent group-hover:bg-muted h-full"
              key={assignment.id}
            >
              <CardHeader className="space-y-2">
                <Badge
                  variant={assignment.is_finish ? "success" : "destructive"}
                >
                  <span>
                    {assignment.is_finish ? "Selesai" : "Belum dikerjakan"}
                  </span>
                </Badge>
                <h1 className="font-bold hover:text-primary hover:underline line-clamp-1">
                  {assignment.title}
                </h1>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {assignment.description}
                </p>
              </CardHeader>
              <CardFooter>
                <span className="text-muted-foreground text-sm flex gap-2">
                  <Clock className="h-4 w-4" />
                  {format(assignment.end, "d MMMM yyyy, HH:mm:ss", {
                    locale: id,
                  })}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
