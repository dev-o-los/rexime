import BuilderPage from "@/components/builder/BuilderPage";
import { hasResumeEditAccess } from "@/lib/supabase/hasResumeEditAccess";
import Error from "../error";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const allowed = await hasResumeEditAccess(id);

  if (!allowed) {
    return <Error />;
  }

  return <BuilderPage id={id} />;
}
