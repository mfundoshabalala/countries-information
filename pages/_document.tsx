import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { JSXElementConstructor, ReactElement, ReactFragment } from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<{
		html: string;
		head?: (JSX.Element | null)[] | undefined;
		styles?:
			| ReactElement<unknown, string | JSXElementConstructor<unknown>>[]
			| ReactFragment
			| undefined;
	}> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
				</Head>
				<body className="text-gray-900 bg-white font-nunitoSans dark:bg-gray-800 dark:text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
