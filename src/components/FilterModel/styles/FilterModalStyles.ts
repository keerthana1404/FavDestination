import styled from '@emotion/styled';
import { Box } from '@mui/material';

const modalBoxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '100%', md: '70%', xl: '1300px' },
	height: { xs: '100%', md: '700px' },
	bgcolor: 'background.paper',
	overflow: 'hidden',
	boxShadow: 24,
	borderRadius: 2,
	boxSizing: 'border-box',
	py: 2,
	'&:focus': {
		outline: 'none',
	},
} as const;

const StylesFilterModalBoxContainer = styled(Box)(() => ({
	width: '100%',
	height: '100%',
	overflow: 'auto',
	position: 'relative',
}));

const FilterModalBoxFixedBar = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'white',
	alignItems: 'center',
	width: '100%',
	bgcolor: 'red',
	position: 'fixed',
	boxSizing: 'border-box',
	left: 0,
	zIndex: 2,
}));

export { StylesFilterModalBoxContainer, modalBoxStyle, FilterModalBoxFixedBar };
