import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import CustomizedCheckbox from '../CustomizedCheckBox';
import {
	StyledCardDescription,
	StyledOrderCustomizationIconButton,
	StyledPriceContainer,
	StyledTypography18,
	StyledTypography24,
	StyledUnderLineContent,
	StylesCardContent,
	StylesDisabledCardContent,
	StylesIcon,
	StylesOrderCartCard,
	StylesOrderCartContent,
} from '../styles/CartStyles';

interface OrderCartCardProps {
	id: string | number;
	image: string;
	title: string;
	description: string;
	currency: string;
	pricePerAdult: number;
	pricePerChild: number;
	location: string;
	noOfAdults: number;
	noOfChildren: number;
	totalPrice: number;
	date: string;
	expired: boolean;
	// eslint-disable-next-line no-unused-vars
	onOrderModified: (updatedOrder: any) => void;
	// eslint-disable-next-line no-unused-vars
	onOrderRemove: (removedOrder: any) => void;
	// eslint-disable-next-line no-unused-vars
	onOrderSelect: (updatedOrderId: string | number) => void;
}

const OrderCartCard = ({
	id,
	image,
	currency,
	description,
	pricePerAdult,
	pricePerChild,
	location,
	noOfAdults,
	noOfChildren,
	title,
	totalPrice,
	date,
	expired,
	onOrderModified,
	onOrderRemove,
	onOrderSelect,
}: OrderCartCardProps) => {
	const [numberOfAdults, setNumberOfAdults] = useState(noOfAdults);
	const [numberOfChildren, setNumberOfChildren] = useState(noOfChildren);
	const [price, setPrice] = useState(totalPrice);
	const [disableAdultsRemove, setDisableAdultsRemove] = useState(false);
	const [diableChildrenRemove, setDiableChildrenRemove] = useState(false);
	const [disableAdultsAdd, setDisableAdultsAdd] = useState(false);
	const [diableChildrenAdd, setDiableChildrenAdd] = useState(false);
	const [cardExpired, setCardExprired] = useState(false);

	const onOrderModifiedRef = useRef<any>(null);

	onOrderModifiedRef.current = onOrderModified;

	useEffect(() => {
		if (expired) {
			setCardExprired(true);
			setDisableAdultsAdd(true);
			setDiableChildrenAdd(true);
			setDisableAdultsRemove(true);
			setDiableChildrenRemove(true);
		}
	}, [expired]);
	useEffect(() => {
		onOrderModifiedRef.current({
			id: id,
			image: image,
			title: title,
			description: description,
			currency: currency,
			pricePerAdult: pricePerAdult,
			pricePerChild: pricePerAdult,
			location: location,
			noOfAdults: numberOfAdults,
			noOfChildren: numberOfChildren,
			totalPrice: price,
			date: date,
		});
	}, [
		currency,
		date,
		description,
		id,
		image,
		location,
		numberOfAdults,
		numberOfChildren,
		price,
		pricePerAdult,
		title,
	]);
	useEffect(() => {
		if (!cardExpired) {
			if (numberOfAdults === 0) {
				setDisableAdultsRemove(true);
			} else {
				if (disableAdultsRemove) {
					setDisableAdultsRemove(false);
				}
			}
			setPrice(
				numberOfChildren * pricePerChild +
					numberOfAdults * pricePerAdult,
			);
		}
	}, [
		cardExpired,
		disableAdultsRemove,
		numberOfAdults,
		numberOfChildren,
		pricePerAdult,
		pricePerChild,
		setDisableAdultsRemove,
	]);
	useEffect(() => {
		if (!cardExpired) {
			if (numberOfChildren === 0) {
				setDiableChildrenRemove(true);
			} else {
				if (diableChildrenRemove) {
					setDiableChildrenRemove(false);
				}
			}
			setPrice(
				numberOfChildren * pricePerChild +
					numberOfAdults * pricePerAdult,
			);
		}
	}, [
		cardExpired,
		diableChildrenRemove,
		numberOfAdults,
		numberOfChildren,
		pricePerAdult,
		pricePerChild,
		setDiableChildrenRemove,
	]);

	return (
		<Card sx={StylesOrderCartCard}>
			<Box sx={{ mr: 1 }}>
				{!cardExpired ? (
					<CustomizedCheckbox
						onClick={() => {
							onOrderSelect(id);
						}}
					/>
				) : (
					<Box sx={{ width: 40 }}></Box>
				)}
			</Box>

			<Box sx={{ width: '250px', height: '100%', pt: 1, pb: 0 }}>
				<CardMedia
					component="img"
					image={image}
					alt={title}
					sx={{
						borderRadius: '10px',
						width: '100%',
						height: '100%',
					}}
				/>
			</Box>

			<CardContent sx={StylesOrderCartContent}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Box sx={{ flex: '60%' }}>
						<StyledTypography24>{title}</StyledTypography24>
						<StyledCardDescription>
							{description}
						</StyledCardDescription>
						<StyledTypography18 sx={{ mt: 0.5 }}>
							{date}
						</StyledTypography18>
					</Box>
					<Box sx={{ margin: 3, alignItems: 'center' }}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								alignContent: 'center',
								mb: '16px',
							}}
						>
							<StyledTypography18
								sx={
									cardExpired
										? StylesDisabledCardContent
										: StylesCardContent
								}
							>
								Adult
							</StyledTypography18>
							<StyledOrderCustomizationIconButton
								sx={{
									mr: 2,
								}}
								disabled={disableAdultsRemove}
								onClick={() => {
									setNumberOfAdults(numberOfAdults - 1);
								}}
							>
								<RemoveIcon sx={StylesIcon}></RemoveIcon>
							</StyledOrderCustomizationIconButton>
							<StyledTypography18 sx={{ width: '30px' }}>
								{numberOfAdults}
							</StyledTypography18>
							<StyledOrderCustomizationIconButton
								disabled={disableAdultsAdd}
								onClick={() => {
									setNumberOfAdults(numberOfAdults + 1);
								}}
							>
								<AddIcon sx={StylesIcon}></AddIcon>
							</StyledOrderCustomizationIconButton>
						</Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								alignContent: 'center',
							}}
						>
							<StyledTypography18
								sx={
									cardExpired
										? StylesDisabledCardContent
										: StylesCardContent
								}
							>
								Child(4-12)
							</StyledTypography18>
							<StyledOrderCustomizationIconButton
								sx={{
									mr: 2,
								}}
								onClick={() => {
									setNumberOfChildren(numberOfChildren - 1);
								}}
								disabled={diableChildrenRemove}
							>
								<RemoveIcon sx={StylesIcon}></RemoveIcon>
							</StyledOrderCustomizationIconButton>
							<StyledTypography18 sx={{ width: '30px' }}>
								{numberOfChildren}
							</StyledTypography18>
							<StyledOrderCustomizationIconButton
								disabled={diableChildrenAdd}
								onClick={() => {
									setNumberOfChildren(numberOfChildren + 1);
								}}
							>
								<AddIcon sx={StylesIcon}></AddIcon>
							</StyledOrderCustomizationIconButton>
						</Box>
					</Box>
				</Box>
				<StyledPriceContainer>
					<Box sx={{ display: 'flex', gap: 2, paddingLeft: 1 }}>
						<StyledUnderLineContent>Manage</StyledUnderLineContent>
						<StyledUnderLineContent
							onClick={() =>
								onOrderRemove({
									id,
									cardExpired,
								})
							}
						>
							Remove
						</StyledUnderLineContent>
					</Box>
					{!cardExpired ? (
						<Typography
							sx={{
								fontWeight: 'bold',
								fontSize: '20px',
								paddingRight: 1,
							}}
						>
							{currency}
							{price}
						</Typography>
					) : (
						<Typography
							sx={{
								color: '#F44622',
								fontSize: {
									xl: '20px',
									lg: '20px',
									md: '18px',
									sm: '18px',
								},
								paddingRight: 1,
							}}
						>
							Your selected time has sold out
						</Typography>
					)}
				</StyledPriceContainer>
			</CardContent>
		</Card>
	);
};

export default OrderCartCard;
