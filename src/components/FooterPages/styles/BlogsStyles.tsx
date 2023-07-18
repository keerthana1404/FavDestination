import { styled } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface StyledExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const StyledExpandMore = styled((props: StyledExpandMoreProps) => {
	const { ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }: any) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export { StyledExpandMore };
