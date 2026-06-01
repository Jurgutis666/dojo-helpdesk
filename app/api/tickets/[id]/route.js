import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Tickets")
    .select()
    .eq("id", params.id)
    .single();

  return NextResponse.json({ data, error });
}
