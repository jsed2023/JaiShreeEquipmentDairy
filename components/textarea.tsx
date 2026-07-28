import { Label, TextArea, TextField } from "@heroui/react";

export default function TextAreaField() {
  return (
    <TextField className="max-w-xs">
      <Label>Description</Label>

      <TextArea
        placeholder="Enter your description"
        variant="primary"
      />
    </TextField>
  );
}