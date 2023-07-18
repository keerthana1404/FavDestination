import { LinkProps } from 'next/link';

interface InternalLinkProps extends Omit<LinkProps, 'href'> {
	isActiveLink: boolean;
}

export { InternalLinkProps, InternalLinkWithPngProps };
