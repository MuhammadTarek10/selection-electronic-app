"use client";

import { login } from "@/actions/auth";
import { FormEvent } from "react";

const LoginPage = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = (formData.get("username") as string).trim().toLowerCase();
    const password = (formData.get("password") as string).trim();

    login(username, password);
  }

  return (
    <div className="bg-hacking bg-cover">
      <div className="h-screen flex items-center justify-end mx-12">
        <div className="flex flex-col gap-4 justify-center items-center p-6 rounded-lg bg-gradient-to-b from-slate-700 to-blue-50">
          <h1 className="text-2xl font-bold text-white">Login</h1>
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <input type="text" name="username" placeholder="Username" className="p-2 rounded-lg bg-gray-200 text-black focus:outline-none" tabIndex={0} />
            <input type="password" name="password" placeholder="Password" className="p-2 rounded-lg bg-gray-200 text-black focus:outline-none" tabIndex={0} />
            <button type="submit" className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
