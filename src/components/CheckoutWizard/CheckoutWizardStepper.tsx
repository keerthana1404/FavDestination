import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import ColorlibStepIcon from './ColorlibStepIcon';
import { ColorlibConnector } from './styles/CheckoutWizardStyles';

interface CheckoutWizardStepperProps {
	activeStep: number;
}

const CheckoutWizardStepper = ({ activeStep }: CheckoutWizardStepperProps) => {
	return (
		<>
			<Stepper
				activeStep={activeStep}
				alternativeLabel
				connector={<ColorlibConnector />}
			>
				{['Details', 'Confirmation', 'Payment'].map((step) => (
					<Step key={`Checkout-${step}`}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>
							{step}
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</>
	);
};

export default CheckoutWizardStepper;
