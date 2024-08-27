import LoginForm from "@/components/organisms/auth/LoginForm";
import { defineMetadata } from "@/lib/metadata";

export const metadata = defineMetadata({
  title: "Masuk",
});

export default function Masuk() {
  return (
    <main className="h-screen  bg-[url(/assets/images/auth/bg-pattern.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex h-full w-full items-center justify-center bg-white/80">
        <LoginForm />
      </div>
    </main>
  );
}
