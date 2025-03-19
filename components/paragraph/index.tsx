import { type ComponentPropsWithoutRef } from 'react';

export function Paragraph(props: ComponentPropsWithoutRef<'p'>) {
    return <p className="text-evancustom-taupe text-xl" {...props} />;
}
