import HeaderComponent from 'components/HeaderComponent';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div>
		<HeaderComponent />
		<main className="container flex flex-col items-center mx-auto">{children}</main>
	</div>
);

export default BaseLayout;
