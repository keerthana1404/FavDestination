import React from 'react';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { ExperienceCategorieLinksType } from '../types/ExperiencesCategorieTypes';
import CategorieLink from './CategorieLink';

interface CategorieLinksLayoutProps {
	links: ExperienceCategorieLinksType;
	categoryName: string;
	setCategoryName: UseStateUpdationValueType<string>;
}

const CategorieLinksLayout = ({
	links,
	categoryName,
	setCategoryName,
}: CategorieLinksLayoutProps) => {
	const handleSetCategoryName = (item: string) => {
		setCategoryName ? setCategoryName(item) : null;
	};

	return (
		<>
			{links.map((item) => {
				return (
					<CategorieLink
						item={item}
						categoryName={categoryName}
						handleCategorieChange={handleSetCategoryName}
						key={`${item.label}-CategorieLink-${item.id}`}
					/>
				);
			})}
		</>
	);
};

export default React.memo(CategorieLinksLayout);
