import FilterModel from '@components/FilterModel';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { useToggle } from '@hooks/useToggle';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { InputAdornment } from '@mui/material';
import { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import AnimatedSeachBar from '../AnimatedSeachBar';
import SearchBarModel from '../SearchBarModel';
import { StyledMobileLayoutSearchContainer } from '../styles/MobileLayoutStyles';
import SearchFilterIconButtonWrapper from './SearchFilterIconButtonWrapper';

interface MobileLayoutSearchProps {
	isSearchFocus: boolean;
	setIsSearchFocus: UseStateUpdationValueType<boolean>;
	searchValue: string;
	setSearchValue: UseStateUpdationValueType<string>;
}

const MobileLayoutSearch = ({
	isSearchFocus,
	setIsSearchFocus,
	searchValue,
	setSearchValue,
}: MobileLayoutSearchProps) => {
	const [isFilterModalOpen, setIsFilterModalOpen] = useToggle(false);
	const [openBox, setOpenBox] = useToggle(false);

	const openFiltermodal = useCallback(() => {
		setIsFilterModalOpen(true);
	}, [setIsFilterModalOpen]);

	useEffect(() => {
		if (isSearchFocus) {
			setOpenBox(true);
		}
	}, [isSearchFocus, setOpenBox]);

	const MINIMUM_INPUT_SEARCH_VALUE = 1;
	const isSearchBarModelAllowed =
		searchValue.length > MINIMUM_INPUT_SEARCH_VALUE;

	const animatedSearchBarProps = useMemo(() => {
		return {
			InputProps: {
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon sx={{ color: '#631D76' }} />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position="end">
						{openBox && isSearchBarModelAllowed ? (
							<SearchFilterIconButtonWrapper
								handleClick={() => setOpenBox(false)}
							>
								<ClearIcon sx={{ color: '#631D76' }} />
							</SearchFilterIconButtonWrapper>
						) : (
							<SearchFilterIconButtonWrapper
								handleClick={() => openFiltermodal()}
							>
								<TuneIcon sx={{ color: '#631D76' }} />
							</SearchFilterIconButtonWrapper>
						)}
					</InputAdornment>
				),
				autoComplete: 'off',
				onFocus: () => setIsSearchFocus(true),
				onBlur: () => setIsSearchFocus(false),
				onChange: (event: ChangeEvent<HTMLInputElement>) => {
					setSearchValue(event.target.value);
				},
			},
		};
	}, [
		openBox,
		isSearchBarModelAllowed,
		setOpenBox,
		openFiltermodal,
		setIsSearchFocus,
		setSearchValue,
	]);

	return (
		<>
			<StyledMobileLayoutSearchContainer>
				<AnimatedSeachBar fullWidth {...animatedSearchBarProps} />
			</StyledMobileLayoutSearchContainer>

			{openBox && (
				<SearchBarModel
					searchValue={searchValue}
					openBox={openBox}
					setOpenBox={setOpenBox}
				/>
			)}
			{isFilterModalOpen && (
				<FilterModel
					isFilterModalOpen={isFilterModalOpen}
					setIsFilterModalOpen={setIsFilterModalOpen}
				/>
			)}
		</>
	);
};

export default MobileLayoutSearch;
