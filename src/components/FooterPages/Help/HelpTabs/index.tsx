import { StyledHelpTabsLayout } from '@components/FooterPages/styles/HelpStyles';
import { Tab } from '@mui/material';
import { HELP_LIST } from '../constants/helpConstants';

interface HelpTabsProps {
	value: number;
	handleChange: (_event: React.SyntheticEvent, _newValue: number) => void;
}

const HelpTabs = ({ value, handleChange }: HelpTabsProps) => {
	return (
		<>
			<StyledHelpTabsLayout
				value={value}
				onChange={handleChange}
				aria-label="basic tabs example"
				indicatorColor="secondary"
			>
				{HELP_LIST.map((help) => {
					return <Tab key={help.id} label={help.name} />;
				})}
			</StyledHelpTabsLayout>
		</>
	);
};

export default HelpTabs;
