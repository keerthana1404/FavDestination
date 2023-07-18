import { giftCardButtonStyle } from '@components/FooterPages/styles/GiftCardsStyles';
import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GiftCardDiscountBox from './GiftCardDiscountBox';

interface CardItemProps {
	time_period: string;
	price: string;
	currency: string;
	discount?: string;
	price_per_month?: string;
	giftCard?: boolean;
}

const GiftCard = ({
	time_period,
	price,
	currency,
	discount,
	price_per_month,
	giftCard,
}: CardItemProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Grid item lg={3} md={4} sm={6} xs={12}>
			<Card
				sx={{
					borderRadius: '10px',
					boxShadow: '0 1px 12px #2e72ee',
					bgcolor: isHovered ? 'secondary.main' : 'primary.main',
				}}
				component={motion.div}
				whileHover={{ scale: 1.04 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<CardHeader
					title={
						<ComponentHeadingTypography
							variant="h6"
							sx={{
								marginLeft: 1,
								color: isHovered ? 'primary.main' : 'black',
							}}
						>
							{time_period}
						</ComponentHeadingTypography>
					}
				/>
				<Divider light={true} sx={{ marginLeft: 3, marginRight: 3 }} />
				<CardContent
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{
							fontWeight: 'bolder',
							paddingBottom: 13,
							color: isHovered ? 'primary.main' : 'grey',
						}}
					>
						{currency}
					</Typography>
					<Typography
						variant="h2"
						sx={{
							fontWeight: 'bolder',
							color: isHovered
								? 'primary.main'
								: 'secondary.main',
						}}
					>
						{price}
					</Typography>
					<Typography
						variant="h5"
						sx={{
							paddingTop: 7,
							color: isHovered
								? 'primary.main'
								: 'secondary.main',
						}}
					>
						.00
					</Typography>
				</CardContent>
				{(price_per_month || discount) && (
					<GiftCardDiscountBox
						currency={currency}
						price_per_month={price_per_month}
						discount={discount}
						isHovered={isHovered}
					/>
				)}
				<CardContent>
					<Button
						sx={{
							...giftCardButtonStyle,
							...(isHovered && {
								bgcolor: 'primary.main',
								color: 'secondary.main',
							}),
						}}
						variant="contained"
					>
						{giftCard ? 'Claim now' : 'Buy now'}
					</Button>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default GiftCard;
