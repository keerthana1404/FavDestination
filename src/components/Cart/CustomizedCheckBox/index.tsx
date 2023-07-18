import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { BpCheckedIcon, BpIcon } from '../styles/CartStyles';

// Inspired by blueprintjs
function CustomizedCheckbox(props: CheckboxProps) {
	return (
		<Checkbox
			sx={{
				'&:hover': { bgcolor: 'transparent' },
			}}
			disableRipple
			color="default"
			checkedIcon={<BpCheckedIcon />}
			icon={<BpIcon />}
			inputProps={{ 'aria-label': 'Checkbox demo' }}
			{...props}
		/>
	);
}
export default CustomizedCheckbox;
