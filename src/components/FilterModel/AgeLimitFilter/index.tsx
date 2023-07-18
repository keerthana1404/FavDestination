import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import AgeLimitFilterItems from './AgeLimitFilterItems';

const AgeLimitFilter = () => {
	return (
		<>
			<Box mt={4}>
				<ComponentHeadingTypography variant="h6">
					Age limit & type
				</ComponentHeadingTypography>
				<Typography variant="body2">
					Select your age limit & type / Optional
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: { xs: 1, md: 4 },
						mt: 2,
						justifyContent: 'flex-start',
						alignContent: 'center',
					}}
				>
					<AgeLimitFilterItems />
				</Box>
			</Box>
		</>
	);
};

export default memo(AgeLimitFilter);
