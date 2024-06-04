"use client";

import { logout } from "@/actions/auth";

export const LogoutButton = () => {
  return (
    <p onClick={() => logout()} className={"bg-red-500 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg text-center cursor-pointer"}>
      تسجيل الخروج
    </p>
  );
};
