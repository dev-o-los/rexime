import { getUser } from "@/lib/supabase/getUser";
import { UserInfoButton } from "../buttons/UserInfoButton";
import SignUpDialog from "../dialogs/SignUpDialog";

export default async function RightNavBarContent() {
  const user = await getUser();
  return user ? <UserInfoButton /> : <SignUpDialog />;
}
