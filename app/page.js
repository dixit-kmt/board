import { redirect } from "next/navigation";

export default async function Home(res) {
  redirect("/dashboard");
}