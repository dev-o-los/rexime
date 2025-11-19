import { ibmplexmono } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TiltCard } from "../cards/TiltCard";

export default function BottomSheet({
  resumeImg,
  resumeTitle,
}: {
  resumeImg: string;
  resumeTitle: string;
}) {
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <div>
          <TiltCard imageUrl={resumeImg}>
            <h1
              className={`text-center text-3xl max-w-[200px] text-ellipsis line-clamp-2 font-semibold ${ibmplexmono.className}`}
            >
              {resumeTitle}
            </h1>
          </TiltCard>
        </div>
      </SheetTrigger>
      <SheetPopup side="bottom" inset>
        <Form className="flex-1">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input type="text" defaultValue="Margaret Welsh" />
            </Field>
            <Field>
              <FieldLabel>Username</FieldLabel>
              <Input type="text" defaultValue="@maggie.welsh" />
            </Field>
          </div>
          <SheetFooter>
            <SheetClose render={<Button variant="ghost" />}>Cancel</SheetClose>
            <Button type="submit">Save</Button>
          </SheetFooter>
        </Form>
      </SheetPopup>
    </Sheet>
  );
}
