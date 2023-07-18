type LinksTypeItemIcon = any;

interface LinksTypeItem {
	id: number;
	icon: LinksTypeItemIcon;
	label: string;
}

interface CountryDataType {
	id: number;
	label: string;
	img: string;
}

type Links = LinksTypeItem[];

interface DiscoverMoreSearchButtonType {
	id: number;
	name: string;
}

export {
	LinksTypeItemIcon,
	LinksTypeItem,
	CountryDataType,
	Links,
	DiscoverMoreSearchButtonType,
};
