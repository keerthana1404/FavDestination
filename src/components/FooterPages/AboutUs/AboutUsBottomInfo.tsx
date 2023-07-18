import { StyledMainHeading } from '@components/styles/ComponentsStyles';
import { Button } from '@mui/material';
import {
	AboutUsButtonStyle,
	StyledAboutUsBoxParagraph,
	StyledAboutUsUmegoAppContainer,
} from '../styles/AboutUsStyles';

const AboutUsBottomInfo = () => {
	return (
		<>
			<StyledAboutUsUmegoAppContainer
				sx={{
					py: 4,
					px: 2,
				}}
			>
				<StyledMainHeading variant="h4" sx={{ color: 'primary.main' }}>
					Fav Destination
				</StyledMainHeading>
				<StyledAboutUsBoxParagraph
					color={'primary'}
					sx={{ mt: 1, textAlign: 'center' }}
				>
					Collect experiences. Not things. Meet new people, explore
					new <br />
					activities, go on min d-blowingly original dates. Download
					the <br />
					best social experience app available today!
				</StyledAboutUsBoxParagraph>
				<Button sx={AboutUsButtonStyle} variant="contained">
					Learn more about Fav Destination
				</Button>
			</StyledAboutUsUmegoAppContainer>
		</>
	);
};

export default AboutUsBottomInfo;
