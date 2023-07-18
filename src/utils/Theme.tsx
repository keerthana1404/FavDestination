import { useToggle } from '@hooks/useToggle';
import { createTheme } from '@mui/material/styles';
import { useEffect } from 'react';

const useTheme = () => {
	const [isClient, setIsClient] = useToggle(false);

	useEffect(() => {
		setIsClient(true);
	}, [setIsClient]);

	const theme = createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#FBFBFB',
				contrastText: '#631D76',
			},
			secondary: {
				main: '#631D76',
				contrastText: '#FBFBFB',
			},
		},
		typography: {
			fontFamily: isClient ? 'Mukta' : 'Flow Rounded',
			h1: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
			h2: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
			h3: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
			h4: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
			h5: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
			h6: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
			body1: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
			body2: {
				fontFamily: isClient ? 'Circular Std' : 'Flow Rounded',
			},
		},
	});

	return { theme };
};

export { useTheme };
