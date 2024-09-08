import { PropsWithChildren } from "react";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const AdminLayout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "admin") return redirect("/dashboard");

  return <div className="min-h-full w-full">{children}</div>;
};

export default AdminLayout;
