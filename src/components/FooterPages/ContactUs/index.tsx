import {
	StyledMainHeading,
	StyledMainHeadingComponentWrapper,
} from '@components/styles/ComponentsStyles';
import { Container } from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ContactUsFormikInputFields from './ContactUsFormikInputFields';

const ContactUs = () => {
	const initialValues = {
		name: '',
		email: '',
		reason: '',
		message: '',
	};

	const validationSchema = Yup.object({
		name: Yup.string().required('Required'),
		email: Yup.string().required('Required'),
		reason: Yup.string().required('Required'),
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
						Contact Us
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
								<ContactUsFormikInputFields
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

export default ContactUs;
