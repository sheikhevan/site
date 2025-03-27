import { type ComponentPropsWithoutRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Wrapper({
  searchParams,
  ...props
}: ComponentPropsWithoutRef<"div"> & { searchParams?: any }) {
  return <div className="mx-auto w-full max-w-3xl px-4 text-left" {...props} />;
}
