import { z } from "zod";

export const scheduleSchema = z.object({
  nama_matakuliah: z.string().min(1, { message: "Title harus diisi" }).trim(),
  start: z.string().min(1, { message: "Start date harus diisi" }).trim(),
  end: z.string().min(1, { message: "End date harus diisi" }).trim(),
  dosen_pengampu: z
    .string()
    .min(1, { message: "Nama dosen harus diisi" })
    .trim(),
  sks: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "SKS harus diisi dengan angka positif",
    }),
  kelas: z.string().min(1, { message: "Nama dosen harus diisi" }).trim(),
  ruang_kelas: z.string().min(1, { message: "Nama dosen harus diisi" }).trim(),
});

export type ScheduleType = z.infer<typeof scheduleSchema>;
