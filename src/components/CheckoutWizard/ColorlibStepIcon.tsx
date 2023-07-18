import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';
import { StepIconProps } from '@mui/material';
import { ColorlibStepIconRoot } from './styles/CheckoutWizardStyles';

const ColorlibStepIcon = (props: StepIconProps) => {
	const { active, completed, className } = props;

	const icons: { [index: string]: React.ReactElement } = {
		1: <InfoIcon />,
		2: <PaymentIcon />,
		3: <CheckIcon />,
	};

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}
		>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
};

export default ColorlibStepIcon;
