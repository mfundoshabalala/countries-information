/* eslint-disable jsx-a11y/label-has-associated-control */
import { useTheme } from 'next-themes';

const Toggler: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const onToggle = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<div className="">
			<label htmlFor="themeToggler" className="flex items-center cursor-pointer">
				<div className="mr-3 font-medium text-gray-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="gray"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				</div>

				<div className="relative">
					<input
						id="themeToggler"
						type="checkbox"
						className="sr-only peer"
						onChange={onToggle}
						checked={theme === 'dark'}
					/>
					<div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
					<div className="absolute w-6 h-6 transition duration-100 bg-white border border-gray-400 rounded-full peer-checked:translate-x-full peer-checked:bg-gray-700 drop-shadow -left-1 -top-1" />
				</div>
				<div className="ml-3 font-medium text-gray-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						viewBox="0 0 20 20"
						fill="gray"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</div>
			</label>
		</div>
	);
};

export default Toggler;
