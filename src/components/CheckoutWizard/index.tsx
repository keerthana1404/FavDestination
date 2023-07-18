import Box from '@mui/material/Box';
import CheckoutWizardStepper from './CheckoutWizardStepper';

interface CheckoutWizardProps {
	activeStep: number;
}

const CheckoutWizard = ({ activeStep = 0 }: CheckoutWizardProps) => {
	return (
		<Box sx={{ width: '100%' }}>
			<CheckoutWizardStepper activeStep={activeStep} />
		</Box>
	);
};

export default CheckoutWizard;
