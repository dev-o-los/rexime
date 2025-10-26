import AddResumeDialog from "@/components/dialogs/AddResumeDialog";
import NashBarDash from "@/components/navbar/NavBarDash";
import ResumeList from "@/components/resume-dash/ResumeList";

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
