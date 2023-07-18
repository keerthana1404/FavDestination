import { Box, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { InputProps } from './types/formikTypes';

const Input = ({ name, label, type, ...rest }: InputProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Field name={name}>
				{({ field }: FieldProps) => {
					const { name, value, onChange, onBlur } = field;
					return (
						<>
							<TextField
								id="outlined-basic"
								name={name}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
								label={label}
								type={type}
								{...rest}
							/>
						</>
					);
				}}
			</Field>
			<ErrorMessage
				name={name}
				component={({ children }: any) => (
					<>
						<Box
							sx={{
								background:
									'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(204, 204, 204, 0.5))',
								borderRadius: 2,
								alignSelf: 'flex-start',
							}}
						>
							<Typography
								variant="body2"
								sx={{ color: 'red', margin: '0px', p: 0.5 }}
							>
								{children}
							</Typography>
						</Box>
					</>
				)}
			/>
		</Box>
	);
};

export default Input;
