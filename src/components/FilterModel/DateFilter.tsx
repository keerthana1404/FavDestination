import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import { Box, TextField, Typography } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { memo, useCallback } from 'react';
import { DateFilterValueProps } from './types/FilterModalType';

interface DateFilterProps {
	dateValue: DateFilterValueProps;
	setDateValue: (
		_item:
			| DateFilterValueProps
			| ((_preVal: DateFilterValueProps) => DateFilterValueProps),
	) => void;
}

const DateFilter = ({ dateValue, setDateValue }: DateFilterProps) => {
	const dateToHandleChange = useCallback(
		(newValue: Dayjs | null) => {
			setDateValue((pre) => ({
				...pre,
				to: newValue,
			}));
		},
		[setDateValue],
	);

	const dateFromHandleChange = useCallback(
		(newValue: Dayjs | null) => {
			setDateValue((pre) => ({
				...pre,
				from: newValue,
			}));
		},
		[setDateValue],
	);

	return (
		<>
			<Box mt={4}>
				<ComponentHeadingTypography variant="h6">
					Date ( Duration )
				</ComponentHeadingTypography>
				<Typography variant="body2">
					Select your preferred date or time / Optional
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 4,
						mt: 2,
						justifyContent: 'flex-start',
						alignContent: 'center',
					}}
				>
					<Box sx={{ display: 'flex', mt: 1, gap: 4 }}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<MobileDatePicker
								label="To"
								inputFormat="MM/DD/YYYY"
								value={dateValue.to}
								onChange={dateToHandleChange}
								renderInput={(params) => (
									<TextField color="secondary" {...params} />
								)}
							/>
							<MobileDatePicker
								label="From"
								inputFormat="MM/DD/YYYY"
								value={dateValue.from}
								onChange={dateFromHandleChange}
								renderInput={(params) => (
									<TextField {...params} color="secondary" />
								)}
							/>
						</LocalizationProvider>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default memo(DateFilter);
