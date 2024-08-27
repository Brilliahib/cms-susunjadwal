"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { LoginType, loginSchema } from "@/validators/auth/login-validator";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (body: LoginType) => {
    const res = await signIn("credentials", { ...body, redirect: false });
    if (!res || res.error == "") {
      toast({
        title: "Gagal Masuk",
        description: "terjadi kesalahan, coba lagi.",
        variant: "destructive",
      });
      return;
    }

    if (res.error === "CredentialsSignin") {
      toast({
        title: "Gagal Masuk",
        description: "username atau password salah",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Berhasil Masuk",
      description: "anda berhasil masuk",
    });
    return router.push("/dashboard");
  };

  return (
    <Card className="flex h-[30rem] w-full max-w-3xl overflow-hidden">
      <div className="w-full p-10">
        <CardHeader>
          <CardTitle className="text-5xl">Masuk</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id="email"
                        placeholder="Masukkan email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Masukkan password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Link href="#" className="underline">
                  Lupa password?
                </Link>
              </div>
              <div className="space-x-3 text-right">
                <Button variant="outline" asChild>
                  <Link href="/daftar">Daftar</Link>
                </Button>
                <Button type="submit">Masuk</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </div>
    </Card>
  );
}
