interface ExperienceItemTypes {
	id: number;
	title: string;
	images: string[];
	rating: number;
	city: string;
	category: string[];
}

type ExperienceItemTypesWithoutCategory = Omit<ExperienceItemTypes, 'category'>;

type SelectedExperienceDetailProps = ExperienceItemTypesWithoutCategory & {
	AdultSingaporeResident: number;
	ChildSingaporeResident: number;
	Adult: number;
	Child: number;
	price: number;
	totalCount: number;
};

interface ExperienceProductDataTypes {
	category: string;
	data: ExperienceItemTypesWithoutCategory[];
}

export {
	ExperienceItemTypes,
	ExperienceItemTypesWithoutCategory,
	ExperienceProductDataTypes,
	SelectedExperienceDetailProps,
};
