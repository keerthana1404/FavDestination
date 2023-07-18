import { StepConnector, stepConnectorClasses, styled } from '@mui/material';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				'linear-gradient(to left, rgba(38,209,246,1) , rgba(63,73,236,1) )',
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage:
				'linear-gradient(to left, rgba(38,209,246,1) , rgba(63,73,236,1) )',
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor:
			theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled('div')<{
	ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
	zIndex: 1,
	color: '#fff',
	[theme.breakpoints.down('md')]: {
		width: 25,
		height: 25,
	},
	[theme.breakpoints.up('md')]: {
		width: 50,
		height: 50,
	},
	display: 'flex',
	borderRadius: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	...(ownerState.active && {
		backgroundImage:
			'linear-gradient( to left, rgba(38,209,246,1) , rgba(63,73,236,1) )',
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	}),
	...(ownerState.completed && {
		backgroundImage:
			'linear-gradient( to left, rgba(38,209,246,1) , rgba(63,73,236,1) )',
	}),
}));

export { ColorlibConnector, ColorlibStepIconRoot };
