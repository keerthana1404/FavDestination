import AppStoreLogo from '@assets/AppStoreLogo.png';
import PlayStoreIcon from '@assets/PlayStoreIcon.png';
import { StyledMainHeading } from '@components/styles/ComponentsStyles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { StylesUmegoAppContainer } from '../styles/UmegoAppStyles';

const UmegoAppHeading = () => {
	return (
		<>
			<StylesUmegoAppContainer>
				<Box sx={{ width: { xs: '100%', md: '70%' } }}>
					<StyledMainHeading variant="h4">
						Collect Experiences. Meet New People.
					</StyledMainHeading>
					<Typography
						variant="body1"
						sx={{ color: 'GrayText' }}
						mt={1}
					>
						Looking for a make friends app? What about a dating app?
						UMEGO is all of this rolled into one. Find new people to
						share dynamic experiences.
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<Box mt={1.7}>
						<Image src={AppStoreLogo} width={160} alt={'logo'} />
					</Box>
					<Box>
						<Image
							src={PlayStoreIcon}
							width={170}
							height={80}
							alt="playStoreIcon"
						/>
					</Box>
				</Box>
			</StylesUmegoAppContainer>
		</>
	);
};

export default UmegoAppHeading;
