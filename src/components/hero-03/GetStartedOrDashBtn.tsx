import { getUser } from "@/lib/supabase/getUser";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SignUpDialog from "../dialogs/SignUpDialog";
import { Button } from "../ui/button";

export default async function GetStartedOrDashBtn() {
  const user = await getUser();
  return user ? (
    <Link href="/dashboard">
      <Button size="lg" className="rounded-full p-6 text-base">
        Open dashboard <ArrowUpRight className="h-5! w-5!" />
      </Button>
    </Link>
  ) : (
    <SignUpDialog
      withTrigger
      customBtn={
        <Button size="lg" className="rounded-full p-6 text-base">
          Get Started <ArrowUpRight className="h-5! w-5!" />
        </Button>
      }
    />
  );
}
