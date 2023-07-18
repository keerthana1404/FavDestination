import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, CardMedia } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {
	ExperienceItemDetailAccordionBox,
	ExperienceItemDetailAccordionTextStyle,
} from '../styles/ExperienceItemDetailStyles';

export default function SimpleAccordion() {
	return (
		<>
			<Box sx={ExperienceItemDetailAccordionBox}>
				<Accordion defaultExpanded={true}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography
							variant="h6"
							sx={ExperienceItemDetailAccordionTextStyle}
						>
							Important Information
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography paragraph color="grey">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse malesuada lacus ex, sit amet
							blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded={true} sx={{ mt: 2 }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography
							variant="h6"
							sx={ExperienceItemDetailAccordionTextStyle}
						>
							Location
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<CardMedia
							component="img"
							height="471px"
							width="1100px"
							image={
								'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/image-1.png'
							}
							alt="Map"
						/>
					</AccordionDetails>
				</Accordion>
			</Box>
		</>
	);
}
