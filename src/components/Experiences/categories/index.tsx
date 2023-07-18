import FilterModel from '@components/FilterModel';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { useToggle } from '@hooks/useToggle';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import { EXPERIENCE_CATEGORIE_LINK_DATA } from '../constants/ExperienceCategorieLinksData';
import {
	StyledExperienceCategoryLayoutWrapper,
	StyledFilterButtonLayoutWrapper,
	experiencesCategorieContainerStyle,
	filterButtonStyle,
} from '../styles/ExperiencesCategorieStyles';
import CategorieLinksLayout from './CategorieLinksLayout';

interface ExperiencesCategorieProps {
	categoryName: string;
	setCategoryName: UseStateUpdationValueType<string>;
}

const ExperiencesCategorie = ({
	categoryName,
	setCategoryName,
}: ExperiencesCategorieProps) => {
	const sliderRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const [isFilterModalOpen, setIsFilterModalOpen] = useToggle(false);

	const openFilterModal = () => {
		setIsFilterModalOpen(true);
	};

	useEffect(() => {
		const scrollSlider = () => {
			sliderRef.current.scrollBy(300, 0);

			setTimeout(() => {
				sliderRef.current.scrollBy(-300, 0);
			}, 500);
		};

		scrollSlider();
	}, []);

	return (
		<>
			<Box sx={experiencesCategorieContainerStyle}>
				<StyledExperienceCategoryLayoutWrapper
					ref={sliderRef}
					color="secondary"
				>
					<CategorieLinksLayout
						links={EXPERIENCE_CATEGORIE_LINK_DATA}
						categoryName={categoryName}
						setCategoryName={setCategoryName}
					/>
				</StyledExperienceCategoryLayoutWrapper>
				<StyledFilterButtonLayoutWrapper>
					<Button
						size={'medium'}
						variant="outlined"
						sx={filterButtonStyle}
						startIcon={<TuneIcon />}
						onClick={openFilterModal}
					>
						Filter
					</Button>
				</StyledFilterButtonLayoutWrapper>
				{isFilterModalOpen && (
					<FilterModel
						isFilterModalOpen={isFilterModalOpen}
						setIsFilterModalOpen={setIsFilterModalOpen}
					/>
				)}
			</Box>
		</>
	);
};

export default ExperiencesCategorie;
