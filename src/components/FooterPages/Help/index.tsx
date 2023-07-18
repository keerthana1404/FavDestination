import {
	StyledMainHeading,
	StyledMainHeadingComponentWrapper,
} from '@components/styles/ComponentsStyles';
import { Box, Container } from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import { useState } from 'react';
import {
	StylesHelpQuestionsLayout,
	StylesTabsLayout,
} from '../styles/HelpStyles';
import HelpQuestionCardWrapper from './HelpQuestionCardWrapper';
import HelpTabs from './HelpTabs';

const Help = () => {
	const [value, setValue] = useState(0);

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<ComponentTopSpacing />
			<Container maxWidth="xl">
				<StyledMainHeadingComponentWrapper>
					<StyledMainHeading>Help</StyledMainHeading>
				</StyledMainHeadingComponentWrapper>
				<Box sx={StylesTabsLayout}>
					<HelpTabs value={value} handleChange={handleChange} />
				</Box>
				<Box sx={StylesHelpQuestionsLayout}>
					<HelpQuestionCardWrapper value={value} />
				</Box>
			</Container>
		</>
	);
};

export default Help;
