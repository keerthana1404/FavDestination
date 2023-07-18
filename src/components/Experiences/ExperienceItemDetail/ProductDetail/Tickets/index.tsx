import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { TicketMainContainer } from '../../styles/TicketsStyle';
import Admission from './Admission';
import Amount from './Amount';
import BookNow from './BookNow';
import Calendar from './Calendar';
import ComboOptions from './ComboOptions';
import ExtraFeatures from './ExtraFeatures';
import Quantity from './Quantity';
import TicketBoxHeader from './TicketBoxHeader';

const timeData = [
	{
		id: 1,
		time: '09:00',
	},
	{
		id: 2,
		time: '10:00',
	},
	{
		id: 3,
		time: '11:00',
	},
	{
		id: 4,
		time: '12:00',
	},
	{
		id: 5,
		time: '01:00',
	},
	{
		id: 6,
		time: '02:00',
	},
	{
		id: 7,
		time: '03:00',
	},
	{
		id: 8,
		time: '04:00',
	},
];

const comboOptionsData = [
	{
		id: 0,
		option: 'Studio Tour only',
	},
	{
		id: 1,
		option: 'Studio Tour + Tokyo Subway Ticket (24 hours)',
	},
	{
		id: 2,
		option: 'Studio Tour + SEIBU Kawagoe Pass (Vouchers Validity 60 Days)',
	},
	{
		id: 3,
		option: 'One-Day Admission Ticket (Peak Visit Dates)',
	},
	{
		id: 4,
		option: '[Combo] Universal Studios Singapore + S.E.A. Aquarium	One Day Admission',
	},
];

const tickectPrices = {
	adult: 499,
	child: 199,
};

const featuresData = [
	{
		id: 1,
		feature: 'Free Cancellation (48 - hours notice)',
	},
	{
		id: 2,
		feature: 'Instant Confirmation',
	},
	{
		id: 3,
		feature: 'Book Now for Today',
	},
	{
		id: 4,
		feature: 'Fixed Date Booking',
	},
];
const Tickets = () => {
	const [adultQuantity, setAdultQuantity] = useState(2);
	const [childQuantity, setChildQuantity] = useState(1);
	const [admissionTime, setAdmissionTime] = useState(timeData[0].time);
	const [selectedAdmissionTime, setSelectedAdmissionTime] = useState(
		timeData[0].id,
	);
	const [comboOptions, setcomboOptions] = useState(0);
	const [selectedComboOptions, setSelectedComboOptions] = useState(0);

	const handleAdmissionClick = (id: number) => {
		setSelectedAdmissionTime(id);
		setAdmissionTime(timeData[id - 1].time);
	};
	const handleComboOptionsClick = (id: any) => {
		setSelectedComboOptions(id);
		setcomboOptions(id);
	};

	return (
		<>
			<Box sx={TicketMainContainer}>
				<TicketBoxHeader />
				<Calendar />
				<ComboOptions
					comboOptionsData={comboOptionsData}
					selectedComboOptions={selectedComboOptions}
					comboOptions={comboOptions}
					handleComboOptionsClick={handleComboOptionsClick}
				/>
				<Admission
					handleAdmissionClick={handleAdmissionClick}
					selectedAdmissionTime={selectedAdmissionTime}
					timeData={timeData}
					admissionTime={admissionTime}
				/>
				<Quantity
					adultQuantity={adultQuantity}
					setAdultQuantity={setAdultQuantity}
					childQuantity={childQuantity}
					setChildQuantity={setChildQuantity}
					tickectPrices={tickectPrices}
				/>
				<ExtraFeatures featuresData={featuresData} />
				<Amount
					tickectPrices={tickectPrices}
					adultQuantity={adultQuantity}
					childQuantity={childQuantity}
				/>

				<Typography
					component={'span'}
					sx={{
						color: 'rgba(0, 0, 0, 0.40)',
						textAlign: 'center',
						fontSize: '12px',
						fontWeight: '400',
					}}
				>
					Complete all required fields to continue
				</Typography>
				<BookNow />
			</Box>
		</>
	);
};

export default Tickets;
