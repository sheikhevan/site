import { type ComponentPropsWithoutRef } from "react";

export function Wrapper({
                          // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchParams,
  ...props
}: ComponentPropsWithoutRef<"div"> & { searchParams?: unknown }) {
  return <div className="mx-auto w-full max-w-3xl px-4 text-left" {...props} />;
}
