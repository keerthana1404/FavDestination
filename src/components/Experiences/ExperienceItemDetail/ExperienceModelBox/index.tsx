import {
	ExperienceModelBoxStyle,
	ExperienceModelBoxTitleStyle,
} from '@components/Experiences/styles/ExperienceModelBoxStyles';
import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import {
	ExperienceItemTypesWithoutCategory,
	SelectedExperienceDetailProps,
} from '@components/types/experienceItemType';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';
import ExperienceModelBoxItems from './ExperienceModelBoxItems';

const price = Math.ceil(Math.random() * 100 + 50);

interface HomeExperienceModelBoxProps {
	experienceItem: ExperienceItemTypesWithoutCategory;
	stickyTopDistance: number;
}

const HomeExperienceModelBox = ({
	experienceItem,
	stickyTopDistance,
}: HomeExperienceModelBoxProps) => {
	const [ticketQuantity, setTicketQuantity] = useState([0, 0, 0, 0]);
	const [isClient, setIsClient] = useState(false);
	const totalCount = ticketQuantity.reduce((a, b) => a + b, 0);
	const totalAmount = price * totalCount;
	const router = useRouter();

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleBuyExperience = () => {
		const selectedExperienceDetail: SelectedExperienceDetailProps =
			experienceItem as SelectedExperienceDetailProps;
		if (totalCount < 1) {
			alert('Atleast choose one ticket.');
			return;
		}
		selectedExperienceDetail.AdultSingaporeResident = ticketQuantity[0];
		selectedExperienceDetail.ChildSingaporeResident = ticketQuantity[1];
		selectedExperienceDetail.Adult = ticketQuantity[2];
		selectedExperienceDetail.Child = ticketQuantity[3];
		selectedExperienceDetail.price = totalAmount;
		selectedExperienceDetail.totalCount = totalCount;
		router.push('/shipping');
	};

	return (
		<>
			<Box
				sx={{
					...ExperienceModelBoxStyle,
					top: stickyTopDistance,
				}}
			>
				<ComponentHeadingTypography
					variant="h6"
					sx={ExperienceModelBoxTitleStyle}
				>
					{experienceItem.title}
				</ComponentHeadingTypography>
				{/*  */}
				<ExperienceModelBoxItems
					ticketQuantity={ticketQuantity}
					setTicketQuantity={setTicketQuantity}
				/>

				<Typography variant="body1" mt={2} color="grey">
					Adult day ticket 1x.
				</Typography>
				<Button
					sx={{ mt: 2 }}
					color="secondary"
					fullWidth
					variant="contained"
					onClick={handleBuyExperience}
				>
					{totalCount > 0
						? 'Total: $' + totalAmount
						: 'Amount: $' + (isClient ? price : 0)}
				</Button>
			</Box>
		</>
	);
};

export default memo(HomeExperienceModelBox);
