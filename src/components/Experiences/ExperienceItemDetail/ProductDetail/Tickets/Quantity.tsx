import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import {
	TicketQuantityBox,
	TicketQuantityButton,
	TicketQuantityHeadingText,
} from '../../styles/TicketsStyle';

interface QuantityProps {
	setAdultQuantity: any;
	adultQuantity: any;
	setChildQuantity: any;
	childQuantity: any;
	tickectPrices: any;
}

const Quantity = ({
	setAdultQuantity,
	adultQuantity,
	setChildQuantity,
	childQuantity,
	tickectPrices,
}: QuantityProps) => {
	return (
		<Box sx={TicketQuantityBox} display={'flexbox'}>
			<Typography sx={TicketQuantityHeadingText}>
				Select quantity
			</Typography>
			<Stack
				display={'flex'}
				direction={'row'}
				justifyContent={'space-evenly'}
				mt={1}
			>
				<Typography
					variant="body2"
					sx={{ flexGrow: 1, marginLeft: '10px' }}
				>
					Adult
				</Typography>
				<Typography
					variant="body2"
					sx={{
						marginRight: '7px',
						justifyContent: 'center',
						alignSelf: 'center',
					}}
				>
					$ {tickectPrices.adult}
				</Typography>
				<IconButton
					sx={TicketQuantityButton}
					onClick={() => setAdultQuantity((prev: number) => prev - 1)}
					disabled={adultQuantity === 0}
				>
					<RemoveIcon />
				</IconButton>
				<Typography
					variant="body2"
					sx={{
						justifyContent: 'center',
						alignSelf: 'center',
					}}
				>
					{adultQuantity}
				</Typography>
				<IconButton
					sx={TicketQuantityButton}
					onClick={() => setAdultQuantity((prev: number) => prev + 1)}
				>
					<AddIcon />
				</IconButton>
			</Stack>
			<Divider
				sx={{
					margin: '10px',
				}}
			/>
			<Stack
				display={'flex'}
				direction={'row'}
				justifyContent={'space-evenly'}
			>
				<Typography
					variant="body2"
					sx={{ flexGrow: 1, marginLeft: '10px' }}
				>
					Child(4-12)
				</Typography>
				<Typography
					variant="body2"
					sx={{
						marginRight: '7px',
						justifyContent: 'center',
						alignSelf: 'center',
					}}
				>
					$ {tickectPrices.child}
				</Typography>
				<IconButton
					sx={TicketQuantityButton}
					onClick={() => setChildQuantity((prev: number) => prev - 1)}
					disabled={childQuantity === 0}
				>
					<RemoveIcon />
				</IconButton>
				<Typography
					variant="body2"
					sx={{
						justifyContent: 'center',
						alignSelf: 'center',
					}}
				>
					{childQuantity}
				</Typography>
				<IconButton
					sx={TicketQuantityButton}
					onClick={() => setChildQuantity((prev: number) => prev + 1)}
				>
					<AddIcon />
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Quantity;
