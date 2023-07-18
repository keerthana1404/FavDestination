import { Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const TopSpacing = styled(Toolbar)(({ theme }) => ({
	marginTop: 15,
	[theme.breakpoints.down('md')]: {
		marginTop: 7,
	},
}));

const ComponentTopSpacing = styled(Box)(({ theme }) => ({
	marginTop: '5px',
	[theme.breakpoints.up('md')]: {
		marginTop: '16px',
	},
	[theme.breakpoints.up('lg')]: {
		marginTop: '32px',
	},
}));

const BottomSpacing = styled(Box)(({ theme }) => ({
	marginTop: '40px',
	[theme.breakpoints.up('xl')]: {
		marginTop: '40px',
	},
	[theme.breakpoints.down('xl')]: {
		marginTop: '40px',
	},
	[theme.breakpoints.down('md')]: {
		marginTop: '20px',
	},
	[theme.breakpoints.down('sm')]: {
		marginTop: '0px',
	},
}));

export { TopSpacing, ComponentTopSpacing, BottomSpacing };
