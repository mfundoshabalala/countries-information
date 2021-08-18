import FormSearchComponent from './FormSearchComponent';
import FormSelectComponent from './FormSelectComponent';

const FilterComponent: React.FC = () => (
	<form className="flex flex-wrap w-full my-10 text-sm sm:justify-between">
		<FormSearchComponent />
		<FormSelectComponent />
	</form>
);

export default FilterComponent;
