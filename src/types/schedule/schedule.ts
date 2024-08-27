export interface Schedule {
  id: number;
  nama_matakuliah: string;
  start: Date;
  end: Date;
  sks: number;
  dosen_pengampu: string;
  kelas: string;
  ruang_kelas: string;
}
