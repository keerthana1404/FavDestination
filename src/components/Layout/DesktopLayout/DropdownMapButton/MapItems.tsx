import { CountryDataType } from '@components/Layout/types/NavBarType';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

interface MapItemsProps {
	country: string;
	countryData: CountryDataType[];
	setCountry: UseStateUpdationValueType<string>;
}

const MapItems = ({ country, countryData, setCountry }: MapItemsProps) => {
	const handleHandleClose = (item: CountryDataType) => {
		setCountry(item.label);
	};

	return (
		<>
			{countryData.map((item) => {
				const choosenCountry = country === item.label;
				return (
					<Stack key={`MapItem-${item.label}-${item.id}`}>
						<Box
							onClick={() => handleHandleClose(item)}
							sx={{
								border: '2px solid transparent',
								transition: 'all .1s',
								background: choosenCountry
									? 'linear-gradient(to left, rgba(38,209,246,1) , rgba(63,73,236,1) ) border-box'
									: '',
								height: { xs: 130, md: 80, lg: 130 },
								width: { xs: 130, md: 80, lg: 130 },
								borderRadius: 1,
								overflow: 'hidden',
							}}
						>
							<Image
								src={item.img}
								height={130}
								width={130}
								alt={item.label}
							/>
						</Box>
						<Typography
							sx={{
								color: choosenCountry
									? 'secondary.main'
									: 'grey',
							}}
							color={'grey'}
							textAlign="center"
						>
							{item.label}
						</Typography>
					</Stack>
				);
			})}
		</>
	);
};

export default memo(MapItems);
