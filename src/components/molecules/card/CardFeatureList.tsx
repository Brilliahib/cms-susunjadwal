import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardFeatureList() {
  return (
    <>
      <div className="md:space-y-12 space-y-8 md:px-12 px-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Membantu Pembelajaran</h1>
          <p className="text-muted-foreground">
            Susun Jadwal menghadirkan beberapa fitur yang pastinya membantu
            dalam pembelajaran .
          </p>
        </div>
        <div className="flex grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Manajemen Tugas
              </CardTitle>
              <CardDescription>
                Kelola tugas dengan efisien, pantau kemajuan secara real-time,
                dan dapatkan pengingat untuk tenggat waktu yang akan datang.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Mata Kuliah</CardTitle>
              <CardDescription>
                Atur dan pantau mata kuliah Anda dengan mudah, serta lacak
                perkembangan akademik Anda sepanjang semester.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Kalender Jadwal Kuliah
              </CardTitle>
              <CardDescription>
                Lihat dan jadwalkan kuliah Anda dengan jelas, integrasikan semua
                jadwal dalam satu tampilan yang mudah diakses.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
