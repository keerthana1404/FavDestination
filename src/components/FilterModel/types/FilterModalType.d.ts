import { Dayjs } from 'dayjs';

export interface DateFilterValueProps {
	to: Dayjs | null;
	from: Dayjs | null;
}
