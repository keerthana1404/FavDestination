import { ExperienceItemTypesWithoutCategory } from '@components/types/experienceItemType';
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import {
	shareButtonsStyle,
	TopModelExperienceBreadcrumbsTextStyle,
	TopModelExperienceHeadingReviewStyle,
	TopModelExperienceHeadingStyle,
	TopModelExperienceHeadingWrapperStyle,
	TopModelExperienceSubHeadingReviewLinkStyle,
	TopModelExperienceSubHeadingReviewStyle,
	TopModelImageComponentContainerStyle,
} from '../styles/TopModelImageComponentStyles';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

interface TopModelComponentTitleProps {
	experienceItem: ExperienceItemTypesWithoutCategory;
}
const TopModelComponentTitle = ({
	experienceItem,
}: TopModelComponentTitleProps) => {
	const router = useRouter();

	function handleClick(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) {
		event.preventDefault();
		router.push('/');
	}

	const breadcrumbs = [
		<Link
			underline="hover"
			key="1"
			color="inherit"
			href="/"
			onClick={handleClick}
		>
			Home
		</Link>,

		<Typography key="3" color="text.primary">
			Art & Crafts
		</Typography>,
	];

	return (
		<>
			<Box sx={TopModelImageComponentContainerStyle}>
				{/* Breadcrumbs */}
				<Breadcrumbs
					sx={TopModelExperienceBreadcrumbsTextStyle}
					separator="›"
					aria-label="breadcrumb"
				>
					{breadcrumbs}
				</Breadcrumbs>

				{/* Experience Heading */}
				<Box sx={TopModelExperienceHeadingWrapperStyle}>
					<Box>
						<Typography
							variant="h4"
							sx={TopModelExperienceHeadingStyle}
						>
							{experienceItem.title}
						</Typography>
						<Stack sx={{ marginTop: '10px', marginBottom: '25px' }}>
							<Box
								component="div"
								sx={TopModelExperienceHeadingReviewStyle}
							>
								<StarIcon sx={{ color: 'gold' }} />
								<Box
									component="span"
									sx={TopModelExperienceSubHeadingReviewStyle}
								>
									{experienceItem.rating} -
									<Box
										component="span"
										sx={
											TopModelExperienceSubHeadingReviewLinkStyle
										}
									>
										53 reviews
									</Box>
								</Box>
								<Box
									component="span"
									sx={TopModelExperienceSubHeadingReviewStyle}
								>
									- {experienceItem.city}
								</Box>
							</Box>
						</Stack>
					</Box>
					<Stack
						sx={{
							flexDirection: 'row',
							gap: '10px',
							flexWrap: 'nowrap',
						}}
					>
						<Stack sx={shareButtonsStyle}>
							<ShareIcon />
							<Typography>Share</Typography>
						</Stack>
						<Stack sx={shareButtonsStyle}>
							<FavoriteBorderIcon />
							<Typography>Save</Typography>
						</Stack>
					</Stack>
				</Box>
			</Box>
		</>
	);
};

export default TopModelComponentTitle;
