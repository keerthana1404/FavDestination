import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import {
	GreyContent,
	GreyContentBold,
	StylesCardContent,
	StylesCardMedia,
	StylesExperienceCard,
	StylesPriceContainer,
	StylesRatingContainer,
	StylesTitleContainer,
} from './styles/ExperienceProductCardStyles';
interface CardItemProps {
	image: string;
	title: string;
	currency: string;
	price: string;
	location: string;
}

const ExperienceCard = ({
	image,
	currency,
	price,
	location,
	title,
}: CardItemProps) => {
	return (
		<Card elevation={0} sx={StylesExperienceCard}>
			<Box sx={{ position: 'relative' }}>
				<CardMedia
					component="img"
					sx={StylesCardMedia}
					image={image}
					alt={title}
				/>
			</Box>
			<CardContent sx={StylesCardContent}>
				<Box sx={StylesTitleContainer}>
					<Box sx={StylesRatingContainer}>
						<StarRoundedIcon sx={{ color: '#393939' }} />
						<GreyContent>4.87</GreyContent>
						<GreyContent>(3,729)</GreyContent>
						<GreyContent sx={{ pb: 1 }}>.</GreyContent>
						<Box
							sx={{
								overflow: 'hidden',
							}}
						>
							<GreyContent
								sx={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									textOverflow: 'ellipsis',
								}}
							>
								{location}
							</GreyContent>
						</Box>
					</Box>
				</Box>
				<GreyContentBold>{title}</GreyContentBold>
				<Box sx={StylesPriceContainer}>
					<GreyContent>
						From {currency}
						{price} / person
					</GreyContent>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ExperienceCard;
