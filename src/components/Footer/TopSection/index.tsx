import AppStoreLogo from '@assets/AppStoreLogo.png';
import PlayStore from '@assets/PlayStore.png';
import Logo from '@assets/fav_destination_logo.png';
import logos_tiktok from '@assets/logos_tiktok.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import { FIRST_ROW, SECOND_ROW, THIRD_ROW } from '../constants/FooterLinksData';
import TopSectionLinkLayer from './TopSectionLinkLayer';

const TopSection = () => {
	return (
		<>
			<Container
				maxWidth="xl"
				sx={{
					py: 6,
					boxSizing: 'border-box',
				}}
			>
				<Grid container spacing={4}>
					<Grid
						item
						xs={12}
						sm={6}
						lg={3}
						justifyContent={{ xs: 'center', lg: 'flex-end' }}
						display="flex"
					>
						<Box
							sx={{
								cursor: 'pointer',
								pt: 2,
							}}
						>
							<Box>
								<Image src={Logo} width={140} alt={'logo'} />
							</Box>

							<Box
								sx={{
									color: 'white',
									display: 'flex',
									gap: '14px',
									mt: 2,
								}}
							>
								<FacebookIcon
									sx={{ color: 'black' }}
									fontSize="medium"
								/>
								<InstagramIcon
									sx={{ color: 'black' }}
									fontSize="medium"
								/>
								<LinkedInIcon
									sx={{ color: 'black' }}
									fontSize="medium"
								/>
								<TwitterIcon
									sx={{ color: 'black' }}
									fontSize="medium"
								/>
								<Box mt={0.2}>
									<Image
										alt="ticktok"
										src={logos_tiktok}
										width={60}
										height={20}
									/>
								</Box>
							</Box>

							<Box sx={{ display: 'flex', mt: 1 }}>
								<Box mt={1.5}>
									<Image
										src={AppStoreLogo}
										width={128}
										alt={'logo'}
									/>
								</Box>
								<Box mt={0.2}>
									<Image
										src={PlayStore}
										width={140}
										height={64}
										alt="playStoreLogo"
									/>
								</Box>
							</Box>
						</Box>
					</Grid>

					<Grid item xs={12} sm={6} lg={3}>
						<TopSectionLinkLayer linkData={FIRST_ROW} />
					</Grid>

					<Grid item xs={12} sm={6} lg={3}>
						<TopSectionLinkLayer linkData={SECOND_ROW} />
					</Grid>

					<Grid item xs={12} sm={6} lg={3}>
						<TopSectionLinkLayer linkData={THIRD_ROW} />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default TopSection;
