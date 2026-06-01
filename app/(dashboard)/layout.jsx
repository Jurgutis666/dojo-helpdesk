import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

//Components
import Navbar from "../components/Navbar";

export default async function DashboardLayout({ children }) {
  const supabase = createClient();
  //const { data } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}
