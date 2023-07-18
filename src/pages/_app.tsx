import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@utils/Theme';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import type { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';
const Layout = dynamic(() => import('@components/Layout'));
const FullWidthLayout = dynamic(
	() => import('@components/Layout/FullWidthLayout'),
);

export type NextPageWithLayout<P = ReactElement, IP = P> = NextPage<P, IP> & {
	FullWidthLayout?: (_page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const { theme } = useTheme();

	if (Component.FullWidthLayout) {
		return Component.FullWidthLayout(
			<ThemeProvider theme={theme}>
				<FullWidthLayout>
					<Component {...pageProps} />
				</FullWidthLayout>
			</ThemeProvider>,
		);
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}
