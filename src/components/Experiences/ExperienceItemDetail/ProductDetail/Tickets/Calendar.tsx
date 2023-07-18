import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button, Stack } from '@mui/material';
import { TicketCalendarButton } from '../../styles/TicketsStyle';
const Calendar = () => {
	// const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	// const [openCalendar, setOpenCalendar] = useState<boolean>(false);
	return (
		<>
			<Stack
				sx={{ width: { sm: '50%', md: '90%', lg: '70%', xl: '50%' } }}
			>
				<Button
					variant="text"
					startIcon={<CalendarMonthIcon />}
					sx={TicketCalendarButton}
				>
					Check Availability
				</Button>
			</Stack>

			{/* <Stack width="180px" justifyContent={'start'} alignItems={'center'}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						// InputAdornmentProps={{ position: 'start' }}
						label="Check Availability"
						renderInput={(params) => <TextField {...params} />}
						value={selectedDate}
						onChange={(newValue) => {
							setSelectedDate(newValue);
						}}
						components={{
							OpenPickerIcon: CalendarMonthIcon,
						}}
						// InputProps={{ sx: TicketCalendarButton }}
					/>
				</LocalizationProvider>
			</Stack> */}
		</>
	);
};

export default Calendar;
