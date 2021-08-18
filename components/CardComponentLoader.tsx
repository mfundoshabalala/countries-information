import ContentLoader from 'react-content-loader';

const CardComponentLoader: React.FC = (props) => (
	<ContentLoader
		speed={1}
		width={288}
		height={352}
		viewBox="0 0 288 352"
		backgroundColor="#858585"
		foregroundColor="#eaeaeb"
		{...props}
	>
		<rect x="3" y="3" rx="8" ry="8" width="280" height="170" />
		<rect x="3" y="190" rx="8" ry="8" width="280" height="50" />
		<rect x="3" y="262" rx="4" ry="4" width="280" height="16" />
		<rect x="3" y="286" rx="4" ry="4" width="280" height="16" />
		<rect x="3" y="310" rx="4" ry="4" width="280" height="16" />
	</ContentLoader>
);

export default CardComponentLoader;
