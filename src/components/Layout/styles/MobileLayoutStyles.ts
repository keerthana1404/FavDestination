import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMobileLayoutSearchContainer = styled(Box)(() => ({
	width: '96%',
	boxSizing: 'border-box',
	position: 'fixed',
	display: 'flex',
	zIndex: 3,
	top: '12px',
}));

const StyledMobileAppBar = styled(AppBar)(({ theme }) => ({
	background: theme.palette.primary.main,
	position: 'fixed',
	top: 'auto',
	bottom: 0,
	zIndex: 3,
	padding: '4px 0px',
}));

export { StyledMobileLayoutSearchContainer, StyledMobileAppBar };
