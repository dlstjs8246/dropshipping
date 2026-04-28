import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") ?? "/dashboard";

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=missing_code", url.origin));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL(`/login?error=${encodeURIComponent(error.message)}`, url.origin)
    );
  }

  // The handle_new_user trigger creates org + membership automatically.
  // Detect first-time login by checking whether user_keys row exists.
  const { data: userResult } = await supabase.auth.getUser();
  const userId = userResult.user?.id;

  if (userId) {
    const { data: keyRow } = await supabase
      .from("user_keys")
      .select("user_id")
      .eq("user_id", userId)
      .maybeSingle();

    if (!keyRow) {
      return NextResponse.redirect(new URL("/onboarding/1", url.origin));
    }
  }

  return NextResponse.redirect(new URL(next, url.origin));
}
