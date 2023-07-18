type ExperienceCategorieLinkItemIconType = any;

interface ExperienceCategorieLinksTypeItem {
	id: number;
	icon: LinksTypeItemIcon;
	label: string;
}

type ExperienceCategorieLinksType = ExperienceCategorieLinksTypeItem[];

interface StyledCategoryLinkProp {
	isactivelink: boolean;
}

export {
	ExperienceCategorieLinksTypeItem,
	ExperienceCategorieLinksType,
	StyledCategoryLinkProp,
};
