import { useState } from 'react';

const useToggle = (initialState: boolean) => {
	const [toggle, setToggle] = useState(() => (initialState ? true : false));
	return [toggle, setToggle] as const;
};

export { useToggle };
