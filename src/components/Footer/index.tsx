import { Box } from '@mui/material';
import BottomSection from './BottomSection';
import TopSection from './TopSection';

const Footer = () => {
	return (
		<>
			<Box
				sx={{
					boxShadow: '0px 4px 15px #00000020',
				}}
			>
				<TopSection />
			</Box>

			{/*  */}
			<BottomSection />
		</>
	);
};

export default Footer;
