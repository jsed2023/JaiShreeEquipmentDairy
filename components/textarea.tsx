import { Textarea } from "@nextui-org/react";

export default function TextArea() {
  return (
    <Textarea
      label="Description"
      variant="bordered"
      placeholder="Enter your description"
      classNames={{
        base: "max-w-xs",
      }}
    />
  );
}
