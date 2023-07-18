import {
	StyledMainHeading,
	StyledMainHeadingComponentWrapper,
} from '@components/styles/ComponentsStyles';
import { Container } from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BecomeAVendorFormikInputFields from './BecomeAVendorFormikInputFields';

const BecomeAVendor = () => {
	const initialValues = {
		company_name: '',
		website_address: '',
		contact_name: '',
		phone_number: '',
		email: '',
		message: '',
	};

	const validationSchema = Yup.object({
		company_name: Yup.string().required('Required'),
		website_address: Yup.string().required('Required'),
		contact_name: Yup.string()
			.matches(/^\+65[689]\d{7}$/, 'Phone number is not valid') // This is for singapore number
			.required('Required'),
		email: Yup.string().required('Required'),
		message: Yup.string().required('Required'),
	});

	const onSubmit = (values: any, { resetForm }: any) => {
		console.log('Form data', values);
		resetForm();
	};

	return (
		<>
			<ComponentTopSpacing />
			<Container maxWidth="xl">
				<StyledMainHeadingComponentWrapper>
					<StyledMainHeading variant="h4">
						Become a vendor
					</StyledMainHeading>
				</StyledMainHeadingComponentWrapper>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{(formik) => {
						return (
							<>
								<BecomeAVendorFormikInputFields
									handleButtonDisabled={!formik.isValid}
								/>
							</>
						);
					}}
				</Formik>
			</Container>
		</>
	);
};

export default BecomeAVendor;
