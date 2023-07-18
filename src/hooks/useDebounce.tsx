import { useEffect, useState } from 'react';

let timer: NodeJS.Timeout;

const useDebounce = <T,>(val: T, debounceTime = 200) => {
	const [searchDebounceItem, setSearchDebounceItem] = useState<T>('' as T);

	useEffect(() => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			setSearchDebounceItem(val);
		}, debounceTime);
		return () => {
			clearTimeout(timer);
		};
	}, [val, debounceTime]);

	return [searchDebounceItem] as const;
};

export { useDebounce };
