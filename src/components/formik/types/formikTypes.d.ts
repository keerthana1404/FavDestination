import { TextFieldProps } from '@mui/material';

type InputProps = {
	name: string;
	label: string;
	type: string;
} & TextFieldProps;

type InputPropsWithRest = InputProps & React.HTMLProps<HTMLInputElement>;

export { InputProps, InputPropsWithRest };
