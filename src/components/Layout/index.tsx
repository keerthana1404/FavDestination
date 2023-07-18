import Footer from '@components/Footer';
import { Container, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { TopSpacing } from '@styles/globalMuiStyles';
import dynamic from 'next/dynamic';
import { ReactNode, useMemo } from 'react';
const DesktopLayout = dynamic(() => import('./DesktopLayout'));
const MobileLayout = dynamic(() => import('./MobileLayout'), {
	ssr: false,
});

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
			<TopSpacing />
			<Container
				maxWidth={'xl'}
				sx={{
					padding: {
						xs: '0 20px!important',
						sm: '0 24px!important',
						md: '0 30px!important',
						lg: '0 84px!important',
						xl: '0 25px!important',
					},
				}}
			>
				{children}
			</Container>
			<Toolbar variant="dense" />
			<Footer />

			{/* For very Bottom spacing in mobile view */}
			<Toolbar
				variant="regular"
				sx={{ display: { sx: 'block', md: 'none' } }}
			/>
		</>
	);
};

export default Layout;
