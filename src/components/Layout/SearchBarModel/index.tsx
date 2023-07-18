import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import { ExperienceItemTypes } from '@components/types/experienceItemType';
import debounceExperienceData from '@constants/debounce-experience-data.json';
import { useDebounce } from '@hooks/useDebounce';
import { Box, Stack, Typography } from '@mui/material';
import { filterDataByValue } from '@utils/filterDataByValue';
import { memo, useMemo } from 'react';
import { DISCOVER_MORE_SEARCH_BUTTON } from '../constants/SearchBoxDiscoverMoreData';
import { searchBarModelContainerStyle } from '../styles/LayoutStyles';
import DiscoverMoreSearchButtonItems from './DiscoverMoreSearchButtonItems';
import SearchItems from './SearchItems';

interface SearchBarModelProps {
	openBox: boolean;
	searchValue: string;
	setOpenBox?: (_item: boolean | ((_preVal: boolean) => boolean)) => void;
}

const SearchBarModel = ({
	searchValue,
	openBox,
	setOpenBox,
}: SearchBarModelProps) => {
	const [searchDebounceItem] = useDebounce<string>(searchValue, 600);

	const filteredData = useMemo(
		() =>
			filterDataByValue<ExperienceItemTypes>(
				'title',
				searchDebounceItem,
				debounceExperienceData as ExperienceItemTypes[],
			),
		[searchDebounceItem],
	);

	const MINIMUM_INPUT_SEARCH_VALUE = 1;
	const isSearchBarModelAllowed =
		searchDebounceItem.length > MINIMUM_INPUT_SEARCH_VALUE;

	return (
		<>
			{isSearchBarModelAllowed && openBox && (
				<Box sx={searchBarModelContainerStyle}>
					<ComponentHeadingTypography>
						Discover More :
					</ComponentHeadingTypography>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'flex-start',
							gap: '10px',
							mt: 1,
						}}
					>
						<DiscoverMoreSearchButtonItems
							DISCOVER_MORE_SEARCH_BUTTON={
								DISCOVER_MORE_SEARCH_BUTTON
							}
						/>
					</Box>

					<ComponentHeadingTypography mt={3}>
						Suggestions :
					</ComponentHeadingTypography>
					{searchDebounceItem.length < 2 && (
						<Typography variant="body2" mt={2}>
							Search Items.
						</Typography>
					)}
					{filteredData.length == 0 &&
						searchDebounceItem.length > 1 && (
							<Typography variant="body2" mt={2}>
								No item found.
							</Typography>
						)}
					<Stack
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							gap: '10px',
							mt: 1,
							overflow: 'auto',
							height: '380px',
						}}
					>
						<SearchItems
							searchItemData={filteredData}
							setOpenBox={setOpenBox}
						/>
					</Stack>
				</Box>
			)}
		</>
	);
};

export default memo(SearchBarModel);
