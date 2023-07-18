import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { TicketCartBox, TicketCartTextStyle } from '../../styles/TicketsStyle';

const BookNow = () => {
	const router = useRouter();
	const handleNavigateCart = () => {
		router.push('/cart');
	};
	return (
		<Stack sx={TicketCartBox} direction={'row'}>
			<Stack
				width="50%"
				bgcolor="#631D76"
				borderRadius=" 0px 0px 0px 15px"
				justifyContent="center"
			>
				<Button
					sx={TicketCartTextStyle}
					onClick={() => handleNavigateCart()}
				>
					Add to Cart
				</Button>
			</Stack>
			<Stack
				width="50%"
				bgcolor="#3F2E3E"
				borderRadius="0px 0px 15px 0px"
				justifyContent="center"
			>
				<Button
					sx={TicketCartTextStyle}
					onClick={() => handleNavigateCart()}
				>
					Book Now
				</Button>
			</Stack>
		</Stack>
	);
};

export default BookNow;
