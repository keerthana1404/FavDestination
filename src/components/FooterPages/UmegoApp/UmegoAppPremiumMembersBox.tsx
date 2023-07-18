import { StyledMainHeading } from '@components/styles/ComponentsStyles';
import { Box, List, ListItem, Typography } from '@mui/material';
import { StyledUmegoAppPremiumMembersBox } from '../styles/UmegoAppStyles';

const UmegoAppPremiumMembersBox = () => {
	return (
		<>
			<StyledUmegoAppPremiumMembersBox>
				<StyledMainHeading variant="h4">
					Premium members’ benefits:
				</StyledMainHeading>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flex: 1,
						}}
					>
						<List>
							<ListItem>
								<Typography
									sx={{
										fontWeight: 'bolder',
										flex: '50%',
										color: 'GrayText',
									}}
								>
									Access to vouchers which are from 50% off
									here and in our UMEGO app.
								</Typography>
							</ListItem>
							<ListItem>
								<Typography
									sx={{
										fontWeight: 'bolder',
									}}
									color={'GrayText'}
								>
									Choose one free voucher of your choice each
									month
								</Typography>
							</ListItem>
							<ListItem>
								<Typography
									// variant="h6"
									sx={{
										fontWeight: 'bolder',
										flex: '50%',
									}}
									color={'GrayText'}
								>
									Create multiple social and date ideas at the
									same time
								</Typography>
							</ListItem>
						</List>
					</Box>
					<Box sx={{ flex: 1 }}>
						<List>
							<ListItem sx={{ px: 0 }}>
								<Typography
									// variant="h6"
									sx={{
										fontWeight: 'bolder',
										flex: '50%',
									}}
									color={'GrayText'}
								>
									You can post your date anonymously (it won’t
									go public; you can
									<br /> browse and invite potential matches
									to join your experience).
								</Typography>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Typography
									// variant="h6"
									sx={{
										fontWeight: 'bolder',
										flex: '50%',
									}}
									color={'GrayText'}
								>
									You can hide your profile
								</Typography>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Typography
									// variant="h6"
									sx={{
										fontWeight: 'bolder',
										flex: '50%',
									}}
									color={'GrayText'}
								>
									Zero ads
								</Typography>
							</ListItem>
						</List>
					</Box>
				</Box>
			</StyledUmegoAppPremiumMembersBox>
		</>
	);
};

export default UmegoAppPremiumMembersBox;
