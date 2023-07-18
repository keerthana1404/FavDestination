import MapItems from '@components/Layout/DesktopLayout/DropdownMapButton/MapItems';
import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { Box, Typography } from '@mui/material';
import { COUNTRY_DATA } from '../../constants/filterData';

interface MapFilter {
	country: string;
	setCountry: UseStateUpdationValueType<string>;
}

const MapFilter = ({ country, setCountry }: MapFilter) => {
	return (
		<>
			<Box mt={4}>
				<ComponentHeadingTypography variant="h6">
					Location
				</ComponentHeadingTypography>
				<Typography variant="body2">
					Select your preferred city or country / Optional
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 4,
						mt: 2,
						justifyContent: {
							xs: 'center',
							md: 'flex-start',
						},
						alignContent: 'center',
					}}
				>
					<MapItems
						country={country}
						setCountry={setCountry}
						countryData={COUNTRY_DATA}
					/>
				</Box>
			</Box>
		</>
	);
};

export default MapFilter;
