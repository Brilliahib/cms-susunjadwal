"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateFallbackFromName } from "@/utils/misc";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const session = useSession();
  return (
    <>
      <p className="text-slate-900">{session?.data?.user.name}</p>
      <DropdownMenu>
        <div className="flex items-center gap-5">
          <h4 className="hidden font-semibold md:block">
            {session?.data?.user.name}
          </h4>
          <DropdownMenuTrigger asChild>
            <Button size="icon" className="rounded-full">
              <Avatar className="border border-muted">
                <AvatarFallback className="text-gray-700">
                  {generateFallbackFromName(session?.data?.user.name || "User")}
                </AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <p>{session?.data?.user.name}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/login" })}>
            Keluar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
