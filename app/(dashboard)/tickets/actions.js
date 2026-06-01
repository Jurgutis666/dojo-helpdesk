"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTicket(formData) {
  const ticket = Object.fromEntries(formData);

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("Tickets").insert({
    ...ticket,
    user_email: user.email,
  });

  if (error) {
    throw new Error("Could not add the new ticket");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}

export async function deleteTicket(id) {
  const supabase = createClient();

  // delete the data
  const { error } = await supabase.from("Tickets").delete().eq("id", id);

  if (error) {
    throw new Error("Could not delete the ticket");
  }

  revalidatePath("/tickets");
  redirect("/tickets");
}
