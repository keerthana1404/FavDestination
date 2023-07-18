// Its a propotype page so no need to improve the code quality
import Background from '@assets/Umego_web_tablet_background.png';
import Logo from '@assets/fav_destination_logo.png';
import { StyledMainHeading } from '@components/styles/ComponentsStyles';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

const buttonStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '18px',
	marginBottom: '10px',
	textTransform: 'none',
	border: '2px solid',
	width: '100%',
	height: '42px',
};

const ComingSoon = () => {
	const router = useRouter();
	const redirectToHome = () => {
		router.push('/');
	};
	return (
		<>
			<Box
				sx={{
					position: 'relative',
					overflow: 'hidden',
					height: '80vh',
				}}
			>
				<Image
					alt="bgImage"
					src={Background}
					style={{
						height: '100%',
						width: '100%',
						position: 'absolute',
						top: '0',
					}}
				/>
				<Container
					maxWidth="xl"
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
						height: '100%',
						position: 'relative',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							gap: { xs: 2, md: '' },
							textAlign: 'center',
							height: '100%',
						}}
					>
						<Image
							src={Logo}
							width={200}
							alt={'Logo'}
							style={{ alignSelf: 'center' }}
						/>

						<StyledMainHeading
							variant="h4"
							sx={{
								textAlign: 'center',
								color: 'primary.main',
							}}
						>
							Our New Product is Coming Soon
						</StyledMainHeading>
						<Typography
							// variant="h5"
							color="primary"
							sx={{
								textAlign: 'center',
								marginBottom: '1rem',
								fontWeight: 'bolder',
								maxWidth: '580px',
								margin: '0 auto',
							}}
						>
							Get ready for our groundbreaking new product that
							will revolutionize the way you experience here. Our
							team of experts has poured their hearts and souls
							into creating a product that will exceed your
							expectations. Stay tuned for more updates as our
							launch date approaches.
						</Typography>
						<Button
							sx={{
								...buttonStyle,
								fontWeight: 'bold',
								maxWidth: '400px',
								margin: '0 auto',
							}}
							onClick={redirectToHome}
							color="primary"
							variant="contained"
							type="submit"
						>
							Go to home
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default ComingSoon;
