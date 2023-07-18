import { StyledExpandMore } from '@components/FooterPages/styles/BlogsStyles';
import {
	StyledHelpQuestionCard,
	StyledHelpQuestionCardTitle,
	StyledHelpQuestionContentLayout,
	StyledHelpQuestionTextContentLayout,
} from '@components/FooterPages/styles/HelpStyles';
import { useToggle } from '@hooks/useToggle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse, Typography } from '@mui/material';

interface CardItemProps {
	title: string;
	content: string;
}

const HelpQuestionsCard = ({ title, content }: CardItemProps) => {
	const [expanded, setExpanded] = useToggle(false);

	const handleExpandClick = () => {
		setExpanded((pre) => !pre);
	};

	return (
		<StyledHelpQuestionCard onClick={handleExpandClick}>
			<StyledHelpQuestionContentLayout
				sx={{ boxShadow: '0.4px 0.4px 1px #D8D8D8' }}
			>
				<StyledHelpQuestionCardTitle variant="body1">
					{title}
				</StyledHelpQuestionCardTitle>
				<StyledExpandMore
					expand={expanded}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon
						sx={{
							color: 'secondary.main',
						}}
					/>
				</StyledExpandMore>
			</StyledHelpQuestionContentLayout>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<StyledHelpQuestionTextContentLayout>
					<Typography paragraph>{content}</Typography>
				</StyledHelpQuestionTextContentLayout>
			</Collapse>
		</StyledHelpQuestionCard>
	);
};

export default HelpQuestionsCard;
