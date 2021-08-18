/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import useSWR from 'swr';
import * as _ from 'lodash';

import ListGroupItemComponent from 'components/shared/ListGroupItemComponent';
import BaseLayout from 'layout/BaseLayout';

const CountryPage: NextPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	const { data: country, error } = useSWR(
		slug ? `https://restcountries.eu/rest/v2/alpha/${slug}` : null
	);

	const { data: countries } = useSWR(`https://restcountries.eu/rest/v2/all`);

	if (error) return <div>Failed to load</div>;
	if (!country) return <div>Loading...</div>;

	const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		if (event.key === 'Backspace') {
			router.back();
		}
	};

	return (
		<>
			<Head>
				<title>{country.name}</title>
			</Head>
			<BaseLayout>
				<div className="flex flex-col w-full mt-10 space-y-10">
					<a
						className="flex items-center justify-center px-6 py-2 space-x-2 custom-border-text max-w-max"
						onClick={() => router.back()}
						onKeyDown={() => handleKeyDown}
						role="button"
						tabIndex={0}
					>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
						</span>
						<span>Back</span>
					</a>
					<section>
						<div className="flex justify-center mx-auto space-x-10">
							<div className="relative flex-1 max-w-lg drop-shadow">
								<Image
									objectPosition="center"
									objectFit="contain"
									src={country.flag}
									alt={country.name}
									layout="fill"
								/>
							</div>
							<div className="flex flex-col flex-1 max-w-lg gap-y-5">
								<h1 className="text-3xl font-extrabold tracking-wide">
									{country.name}
								</h1>
								<div className="grid">
									<ListGroupItemComponent
										title="Native Name"
										value={country.nativeName}
									/>
									<ListGroupItemComponent
										title="Top Level Domain"
										value={country.topLevelDomain}
									/>
									<ListGroupItemComponent
										title="Population"
										value={country.population.toLocaleString()}
									/>
									<ListGroupItemComponent
										title="Currencies"
										value={country.currencies}
									/>
									<ListGroupItemComponent title="Region" value={country.region} />
									<ListGroupItemComponent
										title="Languages"
										value={country.languages}
									/>
									<ListGroupItemComponent
										title="Sub Region"
										value={country.subregion}
									/>
									<ListGroupItemComponent title="Capital" value={country.capital} />
								</div>
								<div className="flex">
									<p className="whitespace-nowrap">Border Countries :</p>
									<ul className="flex flex-wrap gap-2 ml-2 max-w-[48ch]">
										{_.filter(countries, (c) =>
											_.includes(country.borders, c.alpha3Code)
										)
											.map(({ name }) => name)
											.sort((a, b) => a.length - b.length || a.localeCompare(b) || 0)
											.map((name) => (
												<li key={name} className="px-2 py-1 card-border-text">
													{name}
												</li>
											))}
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
			</BaseLayout>
		</>
	);
};

export default CountryPage;
