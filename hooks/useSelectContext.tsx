import useSWR from 'swr';
import { useState, useEffect, createContext, useContext } from 'react';

interface SelectContextProps {
	setRegion: React.Dispatch<React.SetStateAction<string>>;
	regionalData: CountryProps[] | undefined;
	regionalDataError: string | undefined;
	region: string;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

const SelectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [region, setRegion] = useState('');
	const [regionalData, setRegionalData] = useState<CountryProps[] | undefined>([]);

	const { data, error: regionalDataError } = useSWR<CountryProps[] | undefined>(
		region ? `https://restcountries.eu/rest/v2/region/${region}` : null
	);

	useEffect(() => {
		setRegionalData(data);
	}, [data]);

	const value = { regionalDataError, region, regionalData, setRegion };

	return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
};

const useSelectContext = (): SelectContextProps => {
	const context = useContext(SelectContext);

	if (context === undefined) {
		throw new Error('useSelectContext must be used within SelectProvider');
	}

	return context;
};

export { SelectProvider, useSelectContext };
