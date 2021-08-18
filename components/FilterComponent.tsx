import FormSearchComponent from './FormSearchComponent';
import FormSelectComponent from './FormSelectComponent';

const FilterComponent: React.FC = () => (
	<form className="flex flex-wrap justify-between w-full px-4 my-10 text-sm gap-y-4">
		<FormSearchComponent />
		<FormSelectComponent />
	</form>
);

export default FilterComponent;
