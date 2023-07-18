import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import {
	TicketAdmissionBox,
	TicketAdmissionHeadingText,
	TicketTimeButton,
	TicketTimeButtonNotSelected,
} from '../../styles/TicketsStyle';

interface AdmissionProps {
	handleAdmissionClick: any;
	selectedAdmissionTime: any;
	timeData: any;
	admissionTime: any;
}

const Admission = ({
	handleAdmissionClick,
	selectedAdmissionTime,
	timeData,
}: AdmissionProps) => {
	return (
		<Box sx={TicketAdmissionBox}>
			<Stack sx={{ height: '34px' }}>
				<Typography sx={TicketAdmissionHeadingText}>
					Admission Time
				</Typography>
			</Stack>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1}>
					<Grid item lg={12}>
						{timeData.map((time: any) => (
							<Button
								key={time.id}
								sx={
									selectedAdmissionTime === time.id
										? TicketTimeButton
										: TicketTimeButtonNotSelected
								}
								onClick={() => handleAdmissionClick(time.id)}
							>
								{time.time}
							</Button>
						))}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Admission;
