import { Box, Stack, Typography } from '@mui/material';
import {
	TicketButtonText,
	TicketComboBoxContainer,
	TicketComboBoxTextStyle,
	TicketStudioButton,
	TicketStudioButtonFive,
	TicketStudioButtonFiveTextStyle,
	TicketStudioButtonFour,
	TicketStudioButtonFourTextStyle,
	TicketStudioButtonThree,
	TicketStudioButtonThreeTextStyle,
	TicketStudioButtonTwo,
	TicketStudioButtonTwoTextStyle,
} from '../../styles/TicketsStyle';

interface ComboOptionsProps {
	comboOptionsData: any;
	handleComboOptionsClick: any;
	selectedComboOptions: any;
	comboOptions: any;
}

const ComboOptions = ({
	comboOptionsData,
	// selectedComboOptions,
	// comboOptions,
	handleComboOptionsClick,
}: ComboOptionsProps) => {
	return (
		<Box sx={TicketComboBoxContainer}>
			<Typography sx={TicketComboBoxTextStyle}>Combo Options</Typography>
			<Stack
				display={'flex'}
				sx={{
					paddingLeft: '11px',
				}}
			>
				<Stack
					sx={TicketStudioButton}
					// style={{ background: '#4145EC' }}
					onClick={() =>
						handleComboOptionsClick(comboOptionsData[0].id)
					}
				>
					<Typography
						variant="body2"
						sx={TicketButtonText}
						// style={{ color: '#fff' }}
					>
						{comboOptionsData[0].option}
					</Typography>
				</Stack>
				<Stack sx={TicketStudioButtonTwo} component={'div'}>
					<Typography
						sx={TicketStudioButtonTwoTextStyle}
						component={'span'}
						variant="body2"
					>
						{comboOptionsData[1].option}
					</Typography>
				</Stack>
				<Stack sx={TicketStudioButtonThree} component={'div'}>
					<Typography
						sx={TicketStudioButtonThreeTextStyle}
						component={'span'}
						variant="body2"
					>
						{comboOptionsData[2].option}
					</Typography>
				</Stack>
				<Stack sx={TicketStudioButtonFour} component={'div'}>
					<Typography
						sx={TicketStudioButtonFourTextStyle}
						variant="body2"
					>
						{comboOptionsData[3].option}
					</Typography>
				</Stack>
				<Stack sx={TicketStudioButtonFive} component={'div'}>
					<Typography
						sx={TicketStudioButtonFiveTextStyle}
						variant="body2"
					>
						{comboOptionsData[4].option}
					</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};

export default ComboOptions;
