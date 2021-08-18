import Head from 'next/head';
import { NextPage } from 'next';

import FilterComponent from 'components/FilterComponent';
import CountryListComponent from 'components/CountryListComponent';
import { SelectProvider } from 'hooks/useSelectContext';
import { SearchProvider } from 'hooks/useSearchContext';
import BaseLayout from 'layout/BaseLayout';

const HomePage: NextPage = () => (
	<BaseLayout>
		<Head>
			<title>Home Page</title>
		</Head>
		<SelectProvider>
			<SearchProvider>
				<FilterComponent />
				<CountryListComponent />
			</SearchProvider>
		</SelectProvider>
	</BaseLayout>
);

export default HomePage;
