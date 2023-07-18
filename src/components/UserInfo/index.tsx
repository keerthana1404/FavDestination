import CheckoutWizard from '@components/CheckoutWizard';
import { StyledFormFieldBoxWrapper } from '@components/styles/GeneralFormStyles';
import { Box, Container } from '@mui/material';
import { ComponentTopSpacing } from '@styles/globalMuiStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { InitialValuesUserInfoFormType } from './types/userInfoFormTypes';
import UserInfoFormikFields from './UserInfoFormikFields';

const UserInfo = () => {
	const initialValues: InitialValuesUserInfoFormType = {
		fullName: '',
		address: '',
		city: '',
		postalcode: '',
		phoneNumber: '+65',
		landmark: '',
	};

	const validationSchema = Yup.object({
		fullName: Yup.string().required('Required'),
		address: Yup.string().required('Required'),
		city: Yup.string().required('Required'),
		postalcode: Yup.number().required('Required'),
		phoneNumber: Yup.string()
			.matches(/^\+65[689]\d{7}$/, 'Phone number is not valid') // This is for singapore number
			.required('Required'),
		landmark: Yup.string().required('Required'),
	});

	const onSubmit = (
		values: InitialValuesUserInfoFormType,
		{ resetForm }: any,
	) => {
		console.log('Form data', values);
		resetForm();
	};

	return (
		<>
			<ComponentTopSpacing />
			<Container maxWidth="xl">
				<Box mt={2}>
					<CheckoutWizard activeStep={0} />
				</Box>
				<StyledFormFieldBoxWrapper
					sx={{ mt: { xs: 3, md: 4 } }}
					maxWidth="1050px"
				>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{(formik) => {
							return (
								<UserInfoFormikFields
									handleButtonDisabled={!formik.isValid}
								/>
							);
						}}
					</Formik>
				</StyledFormFieldBoxWrapper>
			</Container>
		</>
	);
};

export default UserInfo;
