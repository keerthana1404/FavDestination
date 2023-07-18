import FormikControl from '@components/formik/FormikControl';
import {
	formFieldButtonStyle,
	StyledFormFieldBox,
	StyledFormFieldBoxWrapper,
	StyledInputLabel,
	textAreaStyle,
	textStyle,
} from '@components/styles/GeneralFormStyles';
import { Button } from '@mui/material';
import { Form } from 'formik';

interface BecomeAVendorFormikInputFieldsProps {
	handleButtonDisabled: boolean;
}

const BecomeAVendorFormikInputFields = ({
	handleButtonDisabled,
}: BecomeAVendorFormikInputFieldsProps) => {
	return (
		<>
			<Form>
				<StyledFormFieldBoxWrapper maxWidth="800px">
					<StyledFormFieldBox>
						<StyledInputLabel>Comapany Name</StyledInputLabel>
						<FormikControl
							control="input"
							sx={{ ...textStyle }}
							fullWidth
							id="company_name"
							name="company_name"
							placeholder="Enter your company name"
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
							autoFocus
						/>
					</StyledFormFieldBox>
					<StyledFormFieldBox mt={2}>
						<StyledInputLabel>Website Address</StyledInputLabel>
						<FormikControl
							control="input"
							sx={{ ...textStyle }}
							fullWidth
							id="website_address"
							name="website_address"
							placeholder="Enter your website address"
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
							autoFocus
						/>
					</StyledFormFieldBox>

					<StyledFormFieldBox mt={2}>
						<StyledInputLabel>Phone</StyledInputLabel>
						<FormikControl
							control="input"
							sx={{ ...textStyle }}
							fullWidth
							id="phone_number"
							name="phone_number"
							placeholder="Enter your phone number"
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
							type="number"
							autoFocus
						/>
					</StyledFormFieldBox>
					<StyledFormFieldBox mt={2}>
						<StyledInputLabel>Email Address</StyledInputLabel>
						<FormikControl
							control="input"
							sx={textStyle}
							required
							fullWidth
							id="email"
							name="email"
							type="email"
							placeholder="Enter your email	"
							autoComplete="email"
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
							autoFocus
						/>
					</StyledFormFieldBox>
					<StyledFormFieldBox mt={2}>
						<StyledInputLabel>Message</StyledInputLabel>
						<FormikControl
							control="input"
							id="message"
							name="message"
							placeholder="Write your message here...."
							multiline
							minRows={7}
							sx={{
								...textAreaStyle,
								resize: 'vertical',
								overflow: 'auto',
								width: '100%',
							}}
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
						/>
					</StyledFormFieldBox>
					<Button
						sx={formFieldButtonStyle}
						color="secondary"
						variant="contained"
						type="submit"
						disabled={handleButtonDisabled}
						fullWidth
					>
						Submit
					</Button>
				</StyledFormFieldBoxWrapper>
			</Form>
		</>
	);
};

export default BecomeAVendorFormikInputFields;
