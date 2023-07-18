import { ExperienceItemTypesWithoutCategory } from '@components/types/experienceItemType';
import { Grid } from '@mui/material';
import ExperiencesProductCard from '../../ExperiencesProductCard';

interface ServerExperienceProductsListProps {
	experienceDataItems: ExperienceItemTypesWithoutCategory[];
}

const ExperiencesGridDataWrapper = ({
	experienceDataItems,
}: ServerExperienceProductsListProps) => {
	return (
		<>
			{experienceDataItems.map((experienceDataItem, index) => {
				return (
					<Grid item xs={12} sm={4} md={3} lg={2.4} key={index}>
						<ExperiencesProductCard
							experienceData={experienceDataItem}
						/>
					</Grid>
				);
			})}
		</>
	);
};

export default ExperiencesGridDataWrapper;
