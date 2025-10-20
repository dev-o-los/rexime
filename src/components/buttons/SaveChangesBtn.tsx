import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

export function SaveChangesBtn() {
  return (
    <div className="text-end mt-3">
      <DialogClose asChild>
        <Button type="submit" className="w-fit">
          Save Changes
        </Button>
      </DialogClose>
    </div>
  );
}
