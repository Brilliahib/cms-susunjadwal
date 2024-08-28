"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import AssignmentList from "@/components/organisms/assignment/AssignmentList";
import { Button } from "@/components/ui/button";

export default function AssignmentDashboard() {
  return (
    <>
      <DashboardTitle title="Tugas Saya" />
      <AssignmentList />
    </>
  );
}
