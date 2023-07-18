import {
	StyledMainHeading,
	StyledMainHeadingComponentWrapper,
} from '@components/styles/ComponentsStyles';
import { Container, Grid } from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import BlogCardWrapper from './BlogCardWrapper';

const Blogs = () => {
	return (
		<>
			<ComponentTopSpacing />
			<Container maxWidth="xl">
				<StyledMainHeadingComponentWrapper>
					<StyledMainHeading variant="h4">
						Our Blogs
					</StyledMainHeading>
				</StyledMainHeadingComponentWrapper>
				<Grid
					container
					spacing="30px"
					sx={{ justifyContent: 'center' }}
				>
					<BlogCardWrapper />
				</Grid>
			</Container>
		</>
	);
};

export default Blogs;
