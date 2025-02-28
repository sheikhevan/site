import { type ComponentPropsWithoutRef } from 'react';

export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
	return <h1 className="text-mechanical-300 text-4xl underline" {...props} />;
}
