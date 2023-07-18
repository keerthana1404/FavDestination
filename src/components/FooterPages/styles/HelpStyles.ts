import { Box, Card, styled, Tabs, Typography } from '@mui/material';

const StyledHelpTabsLayout = styled(Tabs)(({ theme }) => ({
	'& .MuiTabs-indicator': {
		backgroundColor: 'primary',
		height: 0,
	},
	'& button:hover': {
		color: theme.palette.primary.main,
		background: theme.palette.secondary.main,
		borderRadius: '50px',
	},
	'& .MuiTab-root.Mui-selected': {
		backgroundColor: '#4245E4',
		borderRadius: '50px',
	},
	'& .MuiTabs-flexContainer': {
		flexWrap: 'wrap',
	},
	'& .MuiTab-root': {
		minHeight: '42px !important',
	},
}));

const StylesHelpQuestionsLayout = {
	mt: { xs: 2, md: 3 },
	ml: { md: 2, xl: 18 },
	mr: { md: 2, xl: 7 },
	maxWidth: '100%',
} as const;

const StylesTabsLayout = {
	display: 'flex',
	justifyContent: 'center',
	ml: { md: 2, xl: 15 },
	mr: { md: 2, xl: 7 },
} as const;

const StyledHelpQuestionCard = styled(Card)(() => ({
	borderRadius: '30px',
	marginBottom: '24px',
	boxShadow: '0 4px 30px #00000025',
	padding: 0,
	cursor: 'pointer',
}));

const StyledHelpQuestionContentLayout = styled(Card)(() => ({
	display: 'flex',
	alignItems: 'center',
	height: '100%',
	padding: '12px',
	paddingLeft: '21px',
	'& .MuiCardContent-root:last-child': {
		padding: 90,
	},
}));

const StyledHelpQuestionCardTitle = styled(Typography)(({ theme }) => ({
	fontWeight: 'bold',
	color: theme.palette.secondary.main,
}));

const StyledHelpQuestionTextContentLayout = styled(Box)(() => ({
	padding: '14px',
	paddingLeft: '24px',
}));

export {
	StyledHelpTabsLayout,
	StylesHelpQuestionsLayout,
	StylesTabsLayout,
	StyledHelpQuestionCard,
	StyledHelpQuestionContentLayout,
	StyledHelpQuestionCardTitle,
	StyledHelpQuestionTextContentLayout,
};
