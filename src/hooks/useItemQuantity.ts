import { useState } from 'react';

const useItemQuantity = (initialState: number, minCount = 0, maxCount = 5) => {
	const [count, setCount] = useState(initialState);

	const handleAdd = () => {
		if (count === maxCount) return;

		setCount((pre) => pre + 1);
	};

	const handleRemove = () => {
		if (count === minCount) return;

		setCount((pre) => pre - 1);
	};

	return [count, handleAdd, handleRemove] as const;
};

export { useItemQuantity };
