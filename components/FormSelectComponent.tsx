import { useSelectContext } from 'hooks/useSelectContext';

const FormSelectComponent: React.FC = () => {
	const { setRegion } = useSelectContext();

	const onSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setRegion(event?.target?.value);
	};

	return (
		<select onChange={onSelectionChange} className="w-full select-border-text xs:w-auto">
			<option value="" disabled hidden selected>
				Filter by region
			</option>
			<option value="africa">Africa</option>
			<option value="americas">Americas</option>
			<option value="asia">Asia</option>
			<option value="europe">Europe</option>
			<option value="oceania">Oceania</option>
		</select>
	);
};

export default FormSelectComponent;
