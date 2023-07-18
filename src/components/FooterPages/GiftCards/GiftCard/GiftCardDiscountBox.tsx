import {
	discountBoxCardContainerStyle,
	discountBoxStyle,
} from '@components/FooterPages/styles/GiftCardsStyles';
import { Box, CardContent, Divider, Typography } from '@mui/material';

interface GiftCardDiscountBoxProps {
	isHovered: boolean;
	currency?: string;
	price_per_month?: string;
	discount?: string;
}

const GiftCardDiscountBox = ({
	currency,
	price_per_month,
	discount,
	isHovered,
}: GiftCardDiscountBoxProps) => {
	return (
		<>
			<Divider sx={{ marginLeft: 3, marginRight: 3 }} />
			<CardContent sx={discountBoxCardContainerStyle}>
				{price_per_month && (
					<Box
						sx={{
							display: 'flex',
							border: '30px',
							backgroundColor: 'secondary',
							color: isHovered ? 'primary.main' : 'grey',
						}}
					>
						<Typography
							sx={{
								paddingRight: '5px',
								fontWeight: 'bolder',
							}}
						>
							{currency}
						</Typography>
						<Typography
							sx={{
								fontWeight: 'bolder',
								color: isHovered
									? 'primary.main'
									: 'secondary.main',
							}}
						>
							{price_per_month}.00
						</Typography>
						<Typography sx={{ fontWeight: 'bolder' }}>
							/mth
						</Typography>
					</Box>
				)}
				{discount && (
					<Box sx={discountBoxStyle}>
						<Typography sx={{ fontWeight: 'bolder' }}>
							Save
						</Typography>
						<Typography
							color="secondary"
							sx={{
								fontWeight: 'bolder',
								fontSize: '16px',
							}}
						>
							{discount}%
						</Typography>
					</Box>
				)}
			</CardContent>
			<Divider sx={{ marginLeft: 3, marginRight: 3 }} />
		</>
	);
};

export default GiftCardDiscountBox;
