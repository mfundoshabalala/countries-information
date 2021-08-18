/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import ListGroupItemComponent from './shared/ListGroupItemComponent';

interface CardComponentProps {
	country: CountryProps;
}

const CardComponent: React.FC<CardComponentProps> = ({ country }) => (
	<Link
		passHref
		href={{
			pathname: '/country/[slug]',
			query: { slug: country.alpha3Code.toLowerCase() },
		}}
	>
		<a className="flex flex-col space-y-2 w-72 card-border-text">
			<div className="relative grid place-items-center aspect-h-3 aspect-w-5 drop-shadow">
				<Image
					src={country.flag}
					className="rounded-t-md"
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
					alt={`Flag of ${country.name}`}
				/>
			</div>
			<div className="px-4 pb-6 drop-shadow-sm">
				<p className="my-4 text-lg font-bold drop-shadow-sm dark:drop-shadow h-[4ch] leading-tight">
					{country.name}
				</p>
				<ListGroupItemComponent
					title="Population"
					value={country.population.toLocaleString()}
				/>
				<ListGroupItemComponent title="Region" value={country.region} />
				<ListGroupItemComponent title="Capital" value={country.capital} />
			</div>
		</a>
	</Link>
);

export default CardComponent;
