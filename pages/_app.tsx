import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<SWRConfig
			value={{
				refreshInterval: 10000,
				fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
			}}
		>
			{/* <DefaultSeo {...SEO} /> */}
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</SWRConfig>
	);
}

export default MyApp;
