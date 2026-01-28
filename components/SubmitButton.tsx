"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ ...props }: React.ComponentProps<typeof Button>) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className="cursor-pointer text-white px-10 w-full sm:w-36 py-5 text-md font-bold rounded-md hover:bg-primary"
    >
      {pending ? <LoaderCircle className="animate-spin" /> : props.title}
    </Button>
  );
};

export default SubmitButton;
