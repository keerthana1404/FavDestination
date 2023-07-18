import { Box, Divider, Stack, Typography } from '@mui/material';
import {
	ExperienceItemDetailDescriptionText1,
	ExperienceItemDetailDescriptionText2,
	ExperienceItemDetailDescriptionText3,
} from '../styles/ExperienceItemDetailStyles';
import SimpleAccordion from './Accordion';

const DescriptionMapDetails = () => {
	return (
		<Box>
			<Typography
				variant="body1"
				paragraph
				sx={ExperienceItemDetailDescriptionText1}
			>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
				<br />
				Lorem Ipsum has been the industry&#39;s standard dummy text ever
				since the 1500s,
				<br />
				when an unknown printer took a galley of type and scrambled it
				to make a type specimen book.
				<br />
				It has survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged.
			</Typography>
			<Divider />
			<Typography variant="h6" sx={ExperienceItemDetailDescriptionText2}>
				What to expect
			</Typography>
			<Stack
				sx={{
					marginY: '10px',
				}}
			>
				<Typography sx={ExperienceItemDetailDescriptionText3}>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source.Contrary to popular belief, Lorem
					Ipsum is not simply random text. It has roots in a piece of
					classical Latin literature from 45 BC, making it over 2000
					years old. Richard
					<Typography
						component="span"
						sx={{
							color: '#444bee',
							textDecoration: 'underline',
							display: 'inline',
							marginLeft: '2px',
						}}
					>
						Read More
					</Typography>
				</Typography>
			</Stack>
			<SimpleAccordion />
		</Box>
	);
};

export default DescriptionMapDetails;
