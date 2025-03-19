import { type ComponentPropsWithoutRef } from 'react';

export function Heading(props: ComponentPropsWithoutRef<'h1'>) {
	return <h1 className="text-evancustom-taupe text-4xl underline" {...props} />;
}
