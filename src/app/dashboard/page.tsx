import ResumeList from "@/components/dashboard/ResumeList";
import AddResumeDialog from "@/components/dialogs/AddResumeDialog";
import NashBarDash from "@/components/navbar/NavBarDash";

export default function Page() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NashBarDash />
      </div>
      <div
        className="
        p-7
        grid gap-6
        justify-start
        sm:grid-cols-[repeat(auto-fit,minmax(250px,max-content))]
        grid-cols-1
  "
      >
        <AddResumeDialog />
        <ResumeList />
      </div>
    </div>
  );
}
