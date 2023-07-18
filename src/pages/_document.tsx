import { Head, Html, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Link href="/fonts/CircularStd-Bold.ttf" rel="stylesheet" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Flow+Rounded&family=Mukta&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
