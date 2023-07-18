import { dropdownMapContainerStyle } from '@components/Layout/styles/DesktopLayoutStyles';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const DropdownBox = dynamic(() => import('./DropdownBox'), {
	ssr: false,
});

interface DropdownMapButtonProps {
	isModalOpen: boolean;
	setIsModalOpen: UseStateUpdationValueType<boolean>;
}

const DropdownMapButton = ({
	isModalOpen,
	setIsModalOpen,
}: DropdownMapButtonProps) => {
	const [country, setCountry] = useState('Singapore');

	const handleDropdownMapButtonToggle = () => {
		setIsModalOpen((pre) => !pre);
	};

	return (
		<>
			<Box
				sx={dropdownMapContainerStyle}
				color="grey"
				onClick={handleDropdownMapButtonToggle}
			>
				<Box
					display={'flex'}
					justifyContent="center"
					alignItems={'center'}
					gap="5px"
				>
					<LocationOnOutlinedIcon />
					<Typography variant="body1" sx={{ fontSize: '17px' }}>
						{country}
					</Typography>
				</Box>
				{isModalOpen ? (
					<KeyboardArrowUpIcon />
				) : (
					<KeyboardArrowDownIcon />
				)}
				<DropdownBox
					country={country}
					setCountry={setCountry}
					ismodalopen={isModalOpen}
				/>
			</Box>
		</>
	);
};
export default React.memo(DropdownMapButton);
