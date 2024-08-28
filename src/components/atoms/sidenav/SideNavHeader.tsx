"use client";

import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import { generateFallbackFromName } from "@/utils/misc";

import { Link as NavLink } from "@/components/organisms/side/SideNav";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface SideNavHeaderProps {
  session: Session;
  links: NavLink[];
}

export default function SideNavHeader({ session }: SideNavHeaderProps) {
  return (
    <header className="fixed left-0 right-0 z-40 h-14 lg:h-[60px] lg:px-6">
      <div className="flex h-full w-full  items-center justify-between gap-4 bg-background px-4 md:justify-end md:px-16">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col">
            <div className="mx-auto my-8">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <h1 className="text-3xl font-semibold">SusunJadwal</h1>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <div className="flex items-center gap-5">
            <h4 className="hidden font-semibold md:block">
              {session.user.name}
            </h4>
            <DropdownMenuTrigger asChild>
              <Button variant="tertiary" size="icon" className="rounded-full">
                <Avatar className="border border-muted">
                  <AvatarFallback className="text-gray-700">
                    {generateFallbackFromName(session.user.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <p>{session.user.name}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive cursor-pointer focus:text-destructive focus:bg-destructive/20"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Keluar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
