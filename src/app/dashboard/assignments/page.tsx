"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import ButtonAddAssignment from "@/components/molecules/button/ButtonAddAssignment";
import AssignmentList from "@/components/organisms/assignment/AssignmentList";

export default function AssignmentDashboard() {
  return (
    <>
      <DashboardTitle title="Catatan Tugas" />
      <ButtonAddAssignment />
      <AssignmentList />
    </>
  );
}
