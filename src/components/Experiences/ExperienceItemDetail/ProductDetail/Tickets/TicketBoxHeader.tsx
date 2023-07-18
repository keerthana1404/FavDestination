import { Box, Button, Typography } from '@mui/material';
import {
	TicketClearButton,
	TicketSelectTextStyle,
} from '../../styles/TicketsStyle';

const TicketBoxHeader = () => {
	return (
		<Box display={'flex'} justifyContent={'space-between'}>
			<Typography sx={TicketSelectTextStyle}>Select options</Typography>
			<Button sx={TicketClearButton}>clear</Button>
		</Box>
	);
};

export default TicketBoxHeader;
