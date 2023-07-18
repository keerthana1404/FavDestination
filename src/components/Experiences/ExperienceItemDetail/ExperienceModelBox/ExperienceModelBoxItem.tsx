import { ModelButtonWrapperStyle } from '@components/Experiences/styles/ExperienceModelBoxStyles';
import { ExperienceModelBoxData } from '@components/Experiences/types/ExperienceItemDetailModelTypes';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { useItemQuantity } from '@hooks/useItemQuantity';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

interface ExperienceModelBoxItemProps {
	setTicketQuantity: UseStateUpdationValueType<number[]>;
	ticketQuantity: number[];
	item: ExperienceModelBoxData;
}

const ExperienceModelBoxItem = ({
	setTicketQuantity,
	ticketQuantity,
	item,
}: ExperienceModelBoxItemProps) => {
	const [count, handleAdd, handleRemove] = useItemQuantity(0, 0, 5);
	const ticketQuantityRef = useRef([] as number[]);

	ticketQuantityRef.current = ticketQuantity;
	useEffect(() => {
		const newTicketQuantity = [...ticketQuantityRef.current];
		newTicketQuantity[item.id - 1] = count;
		setTicketQuantity(newTicketQuantity);
	}, [count, item.id, setTicketQuantity]);

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					mt: 3,
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: '10px',
				}}
			>
				<Typography
					variant="body1"
					sx={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
				>
					{item.label}
				</Typography>
				{/* increments */}
				<Box sx={ModelButtonWrapperStyle}>
					<RemoveIcon onClick={handleRemove} />
					<Typography variant="body1" color={'black'}>
						{count}
					</Typography>
					<AddIcon onClick={handleAdd} />
				</Box>
			</Box>
		</>
	);
};

export default ExperienceModelBoxItem;
