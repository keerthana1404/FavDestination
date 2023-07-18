import FormikControl from '@components/formik/FormikControl';
import {
	formFieldButtonStyle,
	StyledFormFieldBox,
	StyledInputLabel,
	textStyle,
} from '@components/styles/GeneralFormStyles';
import { Button } from '@mui/material';
import { Form } from 'formik';

interface UserInfoFormikFieldsProps {
	handleButtonDisabled: boolean;
}

const UserInfoFormikFields = ({
	handleButtonDisabled,
}: UserInfoFormikFieldsProps) => {
	return (
		<>
			<Form>
				<StyledFormFieldBox>
					<StyledInputLabel>Full Name</StyledInputLabel>
					<FormikControl
						control="input"
						sx={textStyle}
						fullWidth
						id="fullName"
						name="fullName"
						type="fullName"
						placeholder="Enter your Full Name"
						autoComplete="fullName"
						variant="filled"
						InputProps={{
							disableUnderline: true,
						}}
						autoFocus
					/>
				</StyledFormFieldBox>
				<StyledFormFieldBox mt={2}>
					<StyledInputLabel>Email Address</StyledInputLabel>
					<FormikControl
						control="input"
						sx={textStyle}
						fullWidth
						id="address"
						name="address"
						type="address"
						placeholder="Enter your address"
						autoComplete="address"
						variant="filled"
						InputProps={{
							disableUnderline: true,
						}}
						autoFocus
					/>
				</StyledFormFieldBox>
				<StyledFormFieldBox mt={2}>
					<StyledInputLabel>City</StyledInputLabel>
					<FormikControl
						control="input"
						sx={{ ...textStyle }}
						fullWidth
						id="city"
						name="city"
						placeholder="Your city"
						variant="filled"
						InputProps={{
							disableUnderline: true,
						}}
						autoFocus
					/>
				</StyledFormFieldBox>

				<StyledFormFieldBox mt={2}>
					<StyledInputLabel>Postalcode</StyledInputLabel>
					<FormikControl
						control="input"
						sx={{ ...textStyle }}
						fullWidth
						id="postalcode"
						name="postalcode"
						placeholder="Your postalcode"
						variant="filled"
						type="number"
						InputProps={{
							disableUnderline: true,
						}}
						autoFocus
					/>
				</StyledFormFieldBox>

				<StyledFormFieldBox mt={2}>
					<StyledInputLabel>PhoneNumber</StyledInputLabel>
					<FormikControl
						control="input"
						sx={{ ...textStyle }}
						fullWidth
						id="phoneNumber"
						name="phoneNumber"
						placeholder="Your phoneNumber"
						variant="filled"
						InputProps={{
							disableUnderline: true,
						}}
						autoFocus
					/>
				</StyledFormFieldBox>

				<StyledFormFieldBox mt={2}>
					<StyledInputLabel>Landmark</StyledInputLabel>
					<FormikControl
						control="input"
						sx={{ ...textStyle }}
						fullWidth
						id="landmark"
						name="landmark"
						placeholder="Your landmark"
						variant="filled"
						InputProps={{
							disableUnderline: true,
						}}
						autoFocus
					/>
				</StyledFormFieldBox>

				<Button
					sx={formFieldButtonStyle}
					color="secondary"
					variant="contained"
					disabled={handleButtonDisabled}
					type="submit"
					fullWidth
				>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default UserInfoFormikFields;
