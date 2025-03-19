import { type ComponentPropsWithoutRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Wrapper({ searchParams, ...props }: ComponentPropsWithoutRef<'div'> & { searchParams?: any }) {
    return <div className="flex flex-col items-center" {...props} />;
}