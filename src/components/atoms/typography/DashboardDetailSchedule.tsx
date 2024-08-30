interface DashboardTitleProps {
  title: string;
  sks: number;
}

export default function DashboardDetailSchedule({
  title,
  sks,
}: DashboardTitleProps) {
  return (
    <div
      className="space-y-3 min-h-[250px] text-white"
      style={{
        backgroundImage: "url(/assets/images/computer-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px",
        borderRadius: "8px",
      }}
    >
      <h1 className="font-paytone text-4xl">{title}</h1>
      <p className="text-xl">{sks} SKS</p>
    </div>
  );
}
