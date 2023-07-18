// Its a propotype page so no need to improve the code quality
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Button, TextField, Typography } from '@mui/material';
import {
	BookingCreditButtonStyle,
	CartPaymentContainerStyle,
	cartPriceStyle,
	containedButtonStyle,
	couponBoxContainerStyle,
	couponBoxHeadingStyle,
	couponBoxStyle,
	couponBtnStyle,
	infoIconStyle,
	PaymentDetailBoxStyle,
	SubTotalBoxStyle,
	textStyle,
} from '../styles/CartStyles';

interface CartPaymentProps {
	cartPrice: number;
	noOfCartItems: number;
}

const CartPayment = ({ cartPrice, noOfCartItems }: CartPaymentProps) => {
	return (
		<>
			<Box sx={CartPaymentContainerStyle}>
				<Box sx={PaymentDetailBoxStyle}>
					<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
						Payment Details
					</Typography>
				</Box>
				<Box sx={SubTotalBoxStyle}>
					<Typography
						variant="body1"
						sx={{
							color: 'rgba(0, 0, 0, 0.70)',
						}}
					>
						Sub Total ({noOfCartItems} Items)
					</Typography>
					<InfoOutlinedIcon
						sx={{
							width: '16px',
							height: '16px',
							color: 'rgba(0, 0, 0, 0.70)',
						}}
					/>
				</Box>
				<Typography sx={cartPriceStyle}>$ {cartPrice}</Typography>
				<Button
					variant="contained"
					color="secondary"
					sx={containedButtonStyle}
				>
					Book Now
				</Button>
				<Button sx={BookingCreditButtonStyle}>
					Get 0 credits for this booking
				</Button>
			</Box>
			<Box sx={couponBoxStyle}>
				<Box sx={couponBoxHeadingStyle}>
					<Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
						Enter a Coupon
					</Typography>
					<InfoOutlinedIcon sx={infoIconStyle} />
				</Box>
				<Box sx={couponBoxContainerStyle}>
					<TextField
						id="coupon_code"
						name="coupon_code"
						placeholder="Coupon Code"
						autoComplete="fullName"
						InputProps={{
							disableUnderline: true,
						}}
						variant="standard"
						sx={textStyle}
						autoFocus
					></TextField>
					<Button variant="contained" sx={couponBtnStyle}>
						Apply
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default CartPayment;
