import Image from "next/image";
import Link from "next/link";

import { Link as NavLink } from "@/components/organisms/side/SideNav";
import SideNavLink from "./SideNavLink";

interface SideNavLProps {
  links: NavLink[];
}

export default function SideNavL({ links }: SideNavLProps) {
  return (
    <div className="relative z-50 hidden overflow-hidden bg-[#fbfbfb] p-10 md:block">
      <div className="z-10 flex h-full max-h-screen flex-col gap-12">
        <div>
          <Link
            href="/"
            className="flex text-left items-center gap-2 font-semibold"
          >
            <h1 className="text-xl font-bold">SusunJadwal</h1>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start gap-5 font-medium">
            {links
              .filter((link) => !link.hide)
              .map((link) => (
                <SideNavLink key={link.label} {...link} />
              ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
