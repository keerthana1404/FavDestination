import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import { useDebounce } from '@hooks/useDebounce';
import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import PriceRangeFilterThumbComponent from './PriceRangeFilterThumbComponent';
import { AirbnbSlider } from './styles/FilterStyles';

interface PriceProp {
	startPrice: number;
	endPrice: number;
}

interface PriceRangeFilter {
	price: PriceProp;
	setPrice: (_item: PriceProp | ((_preVal: PriceProp) => PriceProp)) => void;
}

const PriceRangeFilter = ({ price, setPrice }: PriceRangeFilter) => {
	const [searchDebounceItem] = useDebounce<PriceProp>(price, 250);

	const handleChange = (event: any) => {
		setPrice({
			startPrice: event.target.value[0],
			endPrice: event.target.value[1],
		});
	};

	return (
		<>
			<ComponentHeadingTypography variant="h6">
				Price range
			</ComponentHeadingTypography>
			<Typography variant="body2">
				Slide to choose your preferred range / Optional
			</Typography>
			<Box px={2}>
				<AirbnbSlider
					slots={{ thumb: PriceRangeFilterThumbComponent }}
					getAriaLabel={(index) =>
						index === 0 ? 'Minimum price' : 'Maximum price'
					}
					min={100}
					max={10000}
					defaultValue={[
						searchDebounceItem?.startPrice || 2200,
						searchDebounceItem?.endPrice || 4534,
					]}
					onChange={handleChange}
				/>
			</Box>
			<Stack
				flexDirection={'row'}
				justifyContent={'space-between'}
				px={2}
			>
				<Typography variant="body1" fontWeight={'bold'}>
					Min :
					<span
						style={{
							color: 'grey',
							fontSize: '14px',
						}}
					>
						{searchDebounceItem.startPrice}
					</span>
				</Typography>
				<Typography variant="body1" fontWeight={'bold'}>
					Min :
					<span
						style={{
							color: 'grey',
							fontSize: '14px',
						}}
					>
						{searchDebounceItem.endPrice}
					</span>
				</Typography>
			</Stack>
		</>
	);
};

export default memo(PriceRangeFilter);
