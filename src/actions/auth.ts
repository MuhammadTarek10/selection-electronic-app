"use server";

import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (username: string, password: string) => {
  cookies().set("token", randomUUID());

  redirect("/dashboard");
};

export const logout = async () => {
  cookies().set("token", "", { expires: new Date(0) });

  redirect("/");
};

export const isAuthenticated = () => {
  return cookies().get("token") !== undefined;
};
