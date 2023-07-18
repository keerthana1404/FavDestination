import { StyledMainHeading } from '@components/styles/ComponentsStyles';
import { Container, Grid, Typography } from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import giftCardsData from '../constants/giftcard_data.json';
import {
	GiftCardContainerWrapper,
	giftCardParagraphStyle,
} from '../styles/GiftCardsStyles';
import GiftCardWrapper from './GiftCardWrapper';

const GiftCards = () => {
	return (
		<>
			<ComponentTopSpacing />
			<Container maxWidth="xl">
				<GiftCardContainerWrapper>
					<StyledMainHeading variant="h4">
						Gift Cards
					</StyledMainHeading>
					<Typography sx={giftCardParagraphStyle} mt={1}>
						Not sure what to get them? A gift card is the perfect
						flexible present that means {"you've"} got them
						something
						{" they'll"} love, and they get to choose how to spoil
						themselves.
					</Typography>
				</GiftCardContainerWrapper>
				<Grid
					container
					spacing="30px"
					sx={{
						justifyContent: 'center',
						mt: { xs: 2, md: 4 },
					}}
				>
					<GiftCardWrapper giftCardsData={giftCardsData} />
				</Grid>
			</Container>
		</>
	);
};

export default GiftCards;
