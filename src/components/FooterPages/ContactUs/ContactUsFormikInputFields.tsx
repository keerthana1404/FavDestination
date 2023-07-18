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

interface ContactUsFormikInputFieldsProps {
	handleButtonDisabled: boolean;
}

const ContactUsFormikInputFields = ({
	handleButtonDisabled,
}: ContactUsFormikInputFieldsProps) => {
	return (
		<>
			<Form>
				<StyledFormFieldBoxWrapper maxWidth="800px" sx={{ mt: 1 }}>
					<StyledFormFieldBox>
						<StyledInputLabel>Name</StyledInputLabel>
						<FormikControl
							control="input"
							sx={{ ...textStyle }}
							fullWidth
							id="name"
							name="name"
							placeholder="Enter your name"
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
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
						/>
					</StyledFormFieldBox>
					<StyledFormFieldBox mt={2}>
						<StyledInputLabel>Reason</StyledInputLabel>
						<FormikControl
							control="input"
							sx={{ ...textStyle }}
							fullWidth
							id="reason"
							name="reason"
							placeholder="Your reason"
							variant="filled"
							InputProps={{
								disableUnderline: true,
							}}
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

export default ContactUsFormikInputFields;
