import { StyledExpandMore } from '@components/FooterPages/styles/BlogsStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import { useState } from 'react';

interface CardItemProps {
	image: string;
	title: string;
	content: string;
	date: string;
}

const BlogCard = ({ image, title, content, date }: CardItemProps) => {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<Grid item lg={4} md={6} xs={12}>
			<Card>
				<CardHeader
					avatar={
						<Avatar
							sx={{
								bgcolor: (theme) =>
									theme.palette.secondary.main,
							}}
							aria-label="recipe"
						>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Shrimp and Chorizo Paella"
					subheader={date}
				/>
				<CardMedia
					component="img"
					height="300"
					image={image}
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="h5">{title}</Typography>
					<Typography variant="body2" color="text.secondary" mt={1}>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
					<StyledExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</StyledExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>{content}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Grid>
	);
};

export default BlogCard;
