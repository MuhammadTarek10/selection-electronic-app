"use client";

import { isAuthenticated, login } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [router]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = (formData.get("username") as string).trim().toLowerCase();
    const password = (formData.get("password") as string).trim();

    await login(username, password);
  }

  return (
    <div className="bg-hacking bg-cover">
      <div className="h-screen flex items-center justify-end mx-12">
        <div className="flex flex-col gap-4 justify-center items-center p-6 rounded-lg bg-gradient-to-b from-slate-700 to-blue-50">
          <h1 className="text-2xl font-bold text-white">تسجيل الدخول</h1>
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <input type="text" name="username" placeholder="اسم المستخدم" className="p-2 rounded-lg bg-gray-200 text-black focus:outline-none" tabIndex={0} />
            <input type="password" name="password" placeholder="كلمة المرور" className="p-2 rounded-lg bg-gray-200 text-black focus:outline-none" tabIndex={0} />
            <button type="submit" className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
