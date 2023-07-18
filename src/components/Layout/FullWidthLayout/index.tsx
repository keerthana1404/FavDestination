import Footer from '@components/Footer';
import { Toolbar, useMediaQuery, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import { ReactNode, useMemo } from 'react';
const DesktopLayout = dynamic(() => import('../DesktopLayout'));
const MobileLayout = dynamic(() => import('../MobileLayout'), {
	ssr: false,
});

interface FullWidthLayoutProps {
	children: ReactNode;
}

const FullWidthLayout = ({ children }: FullWidthLayoutProps) => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const Bar = useMemo(
		() => (isDesktop ? <DesktopLayout /> : <MobileLayout />),
		[isDesktop],
	);

	return (
		<>
			{Bar}
			{children}
			<Footer />
			{/* For bottom spacing for mobileBar not topbar(not required) */}
			<Toolbar
				variant="regular"
				sx={{ display: { sx: 'block', md: 'none' } }}
			></Toolbar>
		</>
	);
};

export default FullWidthLayout;
