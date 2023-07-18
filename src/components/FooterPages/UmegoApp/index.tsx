import { Container, Grid } from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import umegoAppCardsData from '../constants/umego_app_card_data.json';
import GiftCardWrapper from '../GiftCards/GiftCardWrapper';
import UmegoAppHeading from './UmegoAppHeading';
import UmegoAppImageSlider from './UmegoAppImageSlider';
import UmegoAppPremiumMembersBox from './UmegoAppPremiumMembersBox';

const UmegoApp = () => {
	return (
		<>
			<ComponentTopSpacing />
			<Container maxWidth="xl">
				{/*  */}
				<UmegoAppHeading />
				{/*  */}
				<UmegoAppImageSlider />
				{/*  */}
				<UmegoAppPremiumMembersBox />
				{/*  */}
				<Grid
					spacing="30px"
					container
					sx={{ mt: { xs: 2, md: 4 }, justifyContent: 'center' }}
				>
					<GiftCardWrapper giftCardsData={umegoAppCardsData} />
				</Grid>
			</Container>
		</>
	);
};

export default UmegoApp;
