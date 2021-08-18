import * as _ from 'lodash';

interface ListGroupItemProps {
	title: string;
	value: string | number;
}
const ListGroupItemComponent: React.FC<ListGroupItemProps> = (props) => {
	const { title, value } = props;

	return (
		<div className="flex flex-nowrap">
			<span className="whitespace-nowrap">{title} :</span>
			{!Array.isArray(value) && <span className="ml-1 font-thin">{value}</span>}
			{Array.isArray(value) &&
				!Object.prototype.hasOwnProperty.call(value[0], 'name') && (
					<span className="ml-1 font-thin">{value.join(', ')}</span>
				)}
			{Array.isArray(value) &&
				Object.prototype.hasOwnProperty.call(value[0], 'name') && (
					<ul className="flex flex-wrap ml-1 font-thin">
						{_.map(value, (item) => (
							<li className="mx-1" key={item.name}>
								{item.name}
							</li>
						))}
					</ul>
				)}
		</div>
	);
};

export default ListGroupItemComponent;
