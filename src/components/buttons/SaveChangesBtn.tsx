import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

export function SaveChangesBtn() {
  return (
    <DialogClose asChild>
      <Button type="submit" className="w-fit">
        Save Changes
      </Button>
    </DialogClose>
  );
}
