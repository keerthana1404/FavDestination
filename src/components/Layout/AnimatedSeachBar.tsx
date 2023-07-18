import { TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { forwardRef, memo, Ref } from 'react';
import { searchBarStyle } from './styles/LayoutStyles';

const AnimatedSearchBar = motion(
	// eslint-disable-next-line react/display-name
	forwardRef(
		(props: any, ref: Ref<HTMLInputElement | HTMLTextAreaElement>) => {
			return (
				<TextField
					{...props}
					ref={ref}
					placeholder="Search Destination and Activities."
					size="small"
					sx={{
						...searchBarStyle,
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				/>
			);
		},
	),
);

export default memo(AnimatedSearchBar);
