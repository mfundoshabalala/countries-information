import useSWR from 'swr';
import * as _ from 'lodash';
import { useEffect, useState } from 'react';

import { useSelectContext } from 'hooks/useSelectContext';
import { useSearchContext } from 'hooks/useSearchContext';

import CardComponent from './CardComponent';
import CardComponentLoader from './CardComponentLoader';

const CountryListComponent: React.FC = () => {
	const { regionalData, regionalDataError } = useSelectContext();
	const { searchTerm } = useSearchContext();
	const [countries, setCountries] = useState<CountryProps[] | undefined>([]);
	const { data: allData, error: allDataError } = useSWR<CountryProps[] | undefined>(
		'https://restcountries.eu/rest/v2/all'
	);

	useEffect(() => setCountries(regionalData ?? allData), [allData, regionalData]);

	if (allDataError || regionalDataError) return <div>Failed to load</div>;
	if (!countries) {
		return (
			<ul className="flex flex-wrap justify-center place-content-stretch gap-y-12 gap-x-6">
				{_.times(8, () => (
					<CardComponentLoader />
				))}
			</ul>
		);
	}

	return (
		<>
			<ul className="flex flex-wrap justify-center place-content-stretch gap-y-12 gap-x-6">
				{_.map(
					countries.filter((country) =>
						country?.name.toLowerCase().includes(searchTerm.toLowerCase())
					),
					(country) => (
						<li key={country?.alpha3Code}>
							<CardComponent country={country} />
						</li>
					)
				)}
			</ul>
		</>
	);
};

export default CountryListComponent;
