import { useSearchContext } from 'hooks/useSearchContext';

const FormSearchComponent: React.FC = () => {
	const { handleSearchTermChange } = useSearchContext();

	return (
		<div className="relative flex items-center">
			<input
				type="search"
				name="search"
				id="search"
				onChange={handleSearchTermChange}
				className="input-border-text"
				placeholder="Search for a country"
			/>
			<span className="absolute left-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="gray"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</span>
		</div>
	);
};

export default FormSearchComponent;
