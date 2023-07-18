import { ExperienceItemTypes } from '@components/types/experienceItemType';

const filterDataByValue = <T extends ExperienceItemTypes>(
	objKey: keyof T,
	itemValue: string,
	data: T[],
): T[] => {
	if (itemValue.length === 0) {
		return [];
	}
	const filterFunction = (item: any): T => {
		return item[objKey].toLowerCase().includes(itemValue.toLowerCase());
	};
	const filterData = () => {
		const result = data.filter(filterFunction);
		return result;
	};

	return filterData();
};

export { filterDataByValue };
