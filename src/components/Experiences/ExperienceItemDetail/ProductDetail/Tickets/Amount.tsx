import { Stack, Typography } from '@mui/material';
import {
	TicketAmountTextStyle,
	TicketUmegoCredits,
} from '../../styles/TicketsStyle';

interface AmountProps {
	tickectPrices: any;
	adultQuantity: any;
	childQuantity: any;
}

const Amount = ({
	tickectPrices,
	adultQuantity,
	childQuantity,
}: AmountProps) => {
	return (
		<Stack
			display={'flex'}
			direction={'row'}
			justifyContent={'space-between'}
			alignItems={'center'}
			marginTop="21px"
		>
			<Typography sx={TicketAmountTextStyle}>
				${' '}
				{tickectPrices.adult * adultQuantity +
					tickectPrices.child * childQuantity}
			</Typography>
			<Stack sx={TicketUmegoCredits}>
				<Typography variant="subtitle2">
					Fav Destination Credits +50
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Amount;
