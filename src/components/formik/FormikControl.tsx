import { TextFieldProps } from '@mui/material';
import Input from './Input';
import { InputPropsWithRest } from './types/formikTypes';

type FormikControlProps = {
	control: string;
} & TextFieldProps;

const FormikControl = ({ control, ...rest }: FormikControlProps) => {
	switch (control) {
		case 'input':
			return <Input {...(rest as InputPropsWithRest)} />;
		default:
			return null;
	}
};

export default FormikControl;
