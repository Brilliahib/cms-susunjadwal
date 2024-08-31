import CardAssignmentIncomplete from "@/components/molecules/card/CardAssignmentIncomplete";

export default function WrapperDashboard() {
  return (
    <>
      <div className="my-6 flex grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
        <CardAssignmentIncomplete />
        <CardAssignmentIncomplete />
        <CardAssignmentIncomplete />
      </div>
    </>
  );
}
