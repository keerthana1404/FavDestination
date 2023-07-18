import {
	StyledDropdownBox,
	StyledDropdownBoxWrapper,
} from '@components/Layout/styles/DesktopLayoutStyles';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { COUNTRY_DATA } from '@constants/filterData';
import { Box, Typography } from '@mui/material';
import MapItems from './MapItems';

interface DropdownBoxProps {
	country: string;
	ismodalopen: boolean;
	setCountry: UseStateUpdationValueType<string>;
}

const DropdownBox = ({
	country,
	ismodalopen,
	setCountry,
}: DropdownBoxProps) => {
	return (
		<>
			<StyledDropdownBoxWrapper ismodalopen={ismodalopen}>
				<StyledDropdownBox ismodalopen={ismodalopen}>
					<Box width={'100%'} pl={2.5} pb={1}>
						<Typography variant="h6" color="grey">
							Search by region :
						</Typography>
					</Box>

					<MapItems
						country={country}
						setCountry={setCountry}
						countryData={COUNTRY_DATA}
					/>
				</StyledDropdownBox>
			</StyledDropdownBoxWrapper>
		</>
	);
};

export default DropdownBox;
