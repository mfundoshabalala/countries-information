import Toggler from './shared/Toggler';

const HeaderComponent: React.FC = () => (
	<header className="px-10 shadow">
		<div className="container flex items-center justify-between h-16 mx-auto text-gray-700 drop-shadow-sm dark:text-gray-100 flex-nowrap">
			<div className="text-4xl font-black uppercase">
				Covid<sub>19</sub>
			</div>
			<Toggler />
		</div>
	</header>
);

export default HeaderComponent;
