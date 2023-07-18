import {
	Box,
	Container,
	Divider,
	Fab,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import DescriptionMapDetails from './ProductDetail/DescriptionMapDetails';
import ExploreCards from './ProductDetail/ExploreCards';
import Tickets from './ProductDetail/Tickets';
import Reviews from './Reviews';
import TopModelComponentTitle from './TopModelComponentTitle';
import {
	ExperienceItemDetailDescriptionBoxContainer,
	ExperienceItemDetailModelBoxContainerNew,
} from './styles/ExperienceItemDetailStyles';
import {
	ExploreMoreText,
	ExploreMoreTextStyle,
	NavigationBoxStyle,
	NavigationContainerStyle,
} from './styles/ExploreCardStyle';
import TopModelMainImage from './TopModelImageComponent';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRef } from 'react';
import Slider from 'react-slick';

const experienceDetailDataNew = {
	id: 1,
	title: 'Woodnest GOA with Hydro-Tub',
	images: [
		'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/polygon-2.svg',
		'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/top-most-visited-attractions-in-singapore-2.png',
		'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/image-3@2x.png',
		'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/image-5@2x.png',
		'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/image-7@2x.png',
		'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/singapore-botanica-gardens-1@2x.png',
	],
	rating: 4.96,
	city: ' Siolim, Goa, India',
};

const ExperienceItemDetail = () => {
	const sliderRef = useRef<Slider>({} as Slider);

	const slickNext = () => {
		sliderRef.current.slickNext();
	};

	const slickPrev = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<>
			<ComponentTopSpacing
				sx={{ display: { xl: 'block', xs: 'none' } }}
			/>

			<Box sx={ExperienceItemDetailModelBoxContainerNew}>
				<Container
					maxWidth="xl"
					sx={{
						padding: {
							xs: '0px!important',
							lg: '0px!important',
							xl: '0 25px!important',
						},
					}}
				>
					{/* Product Title and Image */}
					<Box>
						<TopModelComponentTitle
							experienceItem={experienceDetailDataNew}
						/>
						<Divider />

						<TopModelMainImage
							experienceItem={experienceDetailDataNew}
						/>
					</Box>

					{/* description and experience box. */}
					<Box>
						<Grid
							container
							spacing={3}
							flexDirection={{ xs: 'column', md: 'row' }}
							sx={ExperienceItemDetailDescriptionBoxContainer}
						>
							<Grid item xs={12} md={8}>
								<DescriptionMapDetails />
								<Box mt={4}>
									<Reviews />
								</Box>
							</Grid>

							<Grid item xs={12} md={4}>
								<Tickets />
							</Grid>
						</Grid>
					</Box>
					{/* Relative Products */}
					<Box mt={4} px={1}>
						<Stack sx={ExploreMoreTextStyle}>
							<Typography variant="h6" sx={ExploreMoreText}>
								Also be sure to explore...
							</Typography>
							<Box sx={NavigationContainerStyle}>
								<Fab
									size="small"
									color="primary"
									aria-label="add"
									sx={NavigationBoxStyle}
									onClick={() => slickPrev()}
								>
									<WestIcon />
								</Fab>
								<Fab
									size="small"
									color="primary"
									aria-label="add"
									sx={NavigationBoxStyle}
									onClick={() => slickNext()}
								>
									<EastIcon />
								</Fab>
							</Box>
						</Stack>

						<Box mt={2}>
							<ExploreCards ref={sliderRef} />
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default ExperienceItemDetail;
