import { type ComponentPropsWithoutRef } from "react";

export function Subheading(props: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="text-evancustom-taupe text-2xl font-bold py-2" {...props} />
  );
}
