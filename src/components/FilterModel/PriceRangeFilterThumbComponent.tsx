import { SliderThumb } from '@mui/material';
import React from 'react';

type PriceRangeFilterThumbComponentComponentProps =
	React.HTMLAttributes<unknown>;

const PriceRangeFilterThumbComponent = (
	props: PriceRangeFilterThumbComponentComponentProps,
) => {
	const { children, ...other } = props;

	return (
		<>
			<SliderThumb {...other}>
				{children}
				<span className="airbnb-bar" />
				<span className="airbnb-bar" />
				<span className="airbnb-bar" />
			</SliderThumb>
		</>
	);
};

export default PriceRangeFilterThumbComponent;
