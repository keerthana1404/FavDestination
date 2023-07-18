import { Stack, Typography } from '@mui/material';
import { TicketQuantityFeatures } from '../../styles/TicketsStyle';

interface ExtraFeaturesProps {
	featuresData: any;
}

const ExtraFeatures = ({ featuresData }: ExtraFeaturesProps) => {
	return (
		<>
			<Stack>
				{featuresData.map((data: any) => (
					<Stack
						key={data.id}
						sx={TicketQuantityFeatures}
						component={'div'}
					>
						<Typography
							variant="body2"
							sx={{ wordWrap: 'break-word !important' }}
						>
							{data.feature}
						</Typography>
					</Stack>
				))}
			</Stack>
		</>
	);
};

export default ExtraFeatures;
