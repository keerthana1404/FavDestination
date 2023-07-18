// This component iis the layout of the all product by category name
import experienceProductData from '@constants/experience-data.json';
import { Box, Button, Grid, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import ExperiencesGridDataWrapper from './ExperiencesGridDataWrapper';
import { GreyLine } from './styles/ExperiencesProductStyles';

const buttonStyle = {
	borderRadius: '30px',
	marginBottom: '10px',
	textTransform: 'uppercase',
	border: '2px solid',
	width: '220px',
	height: '56px',
	fontSize: { xl: '20px', lg: '18px' },
} as const;

const ExperienceProducts = () => {
	const [noOfItemsToBeShown, setNoOfItemsToBeShown] = useState(5);
	const [experiences, setExperiences]: any = useState([]);

	useEffect(() => {
		let experiences: any[] = [];
		experienceProductData.forEach((experienceProduct) => {
			experiences = [...experiences, ...experienceProduct.data];
		});
		setExperiences(experiences);
	}, []);

	return (
		<>
			<Box mt={4}>
				<Typography variant="h6" sx={{ fontWeight: '500' }}>
					Trending now
				</Typography>
				<GreyLine sx={{ marginBottom: '20px' }} />
				{/* <Grid container spacing={2}>
					<ExperiencesGridDataWrapper
						experienceDataItems={experiences.slice(0, 6)}
					></ExperiencesGridDataWrapper>
				</Grid> */}
				{/* Ad */}
				{/* <Box>
					<BannerAds />
					<GreyLine sx={{ marginBottom: '20px' }} />
				</Box> */}
				{/*  */}
				<Grid container spacing={2}>
					<ExperiencesGridDataWrapper
						experienceDataItems={experiences.slice(
							0,
							noOfItemsToBeShown,
						)}
					></ExperiencesGridDataWrapper>
				</Grid>
				{noOfItemsToBeShown <= experiences.length ? (
					<Box
						sx={{
							justifyContent: 'center',
							display: 'flex',
							mt: 5,
						}}
					>
						<Button
							sx={buttonStyle}
							onClick={() => {
								setNoOfItemsToBeShown(noOfItemsToBeShown + 10);
							}}
							variant="outlined"
							color="secondary"
						>
							Load More
						</Button>
					</Box>
				) : (
					<></>
				)}
			</Box>
		</>
	);
};

export default memo(ExperienceProducts);
