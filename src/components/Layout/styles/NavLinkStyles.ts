import { Stack, styled, Typography } from '@mui/material';
import Link from 'next/link';
import { InternalLinkProps } from '../types/NavLinkType';

const StyledNavLinkItemContainer = styled(Stack)(() => ({
	flex: 1,
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const StyledNavLink = styled(Link)(({ isActiveLink }: InternalLinkProps) => ({
	textDecoration: 'none',
	height: '100%',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	color: isActiveLink ? 'secondary.main' : 'rgba(66,69,219,0.6)',
	opacity: isActiveLink ? '1' : '0.7',
}));

const StyledNavLinkTypography = styled(Typography)(
	({ isPng }: { isPng: boolean }) => ({
		bottom: isPng ? '3px' : 0,
		position: 'relative',
		fontSize: 12,
	}),
);

export { StyledNavLinkItemContainer, StyledNavLink, StyledNavLinkTypography };
