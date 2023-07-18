import Logo from '@assets/fav_destination_logo.png';
import NavigationLinksLayout from '@components/Layout/NavigationLinksLayout';
import { WEB_TEXT_FIELD_VARIATIONS } from '@framerMotionanimationVarients/NavBarAnimationVariants';
import { useToggle } from '@hooks/useToggle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import AnimatedSeachBar from '../AnimatedSeachBar';
import SearchBarModel from '../SearchBarModel';
import { TOP_BAR_LINKS } from '../constants/NavigationLinksData';
import {
	StyledChip,
	StyledDesktopAppbar,
	desktopBarImageContainerStyle,
	desktopBarNavLinksContainerStyle,
	desktopBarSearchAndFilterContainerStyle,
	iconStyle,
} from '../styles/DesktopLayoutStyles';
import { StyledToolbar } from '../styles/LayoutStyles';
import DropdownMapButton from './DropdownMapButton';

const DesktopLayout = () => {
	const router = useRouter();

	const [searchState, setSearchState] = useState({
		isSearchFieldFocus: false,
		isFirstRender: false,
		searchValue: '',
	});

	const [isDropdownMapButtonModalOpen, setIsDropdownMapButtonModalOpen] =
		useToggle(false);

	const handleSearchChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setSearchState((prevState) => ({
				...prevState,
				searchValue: event.target.value,
			}));
		},
		[],
	);

	const handleSearchFocus = useCallback(() => {
		setSearchState((prevState) => ({
			...prevState,
			isSearchFieldFocus: true,
			isFirstRender: true,
		}));
	}, []);

	const handleSearchBlur = useCallback(() => {
		setTimeout(() => {
			setSearchState((prevState) => ({
				...prevState,
				isSearchFieldFocus: false,
			}));
		}, 200);
	}, []);

	const handleNavigateHome = () => {
		router.push('/');
	};

	const { isSearchFieldFocus, isFirstRender, searchValue } = searchState;

	const animatedSearchBarProps = useMemo(() => {
		return {
			InputProps: {
				endAdornment: (
					<InputAdornment position="end">
						<SearchIcon
							sx={{
								color: 'white',
								background: '#631D76',
								p: 1,
								borderRadius: '50%',
								position: 'relative',
								left: '12px',
							}}
						/>
					</InputAdornment>
				),
			},
			animate: isSearchFieldFocus ? 'open' : 'close',
			initial: { width: '50%' },
			variants: isFirstRender ? WEB_TEXT_FIELD_VARIATIONS : {},
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.5,
			},
			autoFocus: isSearchFieldFocus,
			autoComplete: 'off',
			type: 'text',
			value: searchValue,
			onFocus: handleSearchFocus,
			onBlur: handleSearchBlur,
			onChange: handleSearchChange,
		};
	}, [
		handleSearchBlur,
		handleSearchChange,
		handleSearchFocus,
		isFirstRender,
		isSearchFieldFocus,
		searchValue,
	]);

	return (
		<>
			<StyledDesktopAppbar>
				<Container maxWidth="xl">
					<StyledToolbar>
						<Box sx={desktopBarImageContainerStyle}>
							<Image
								src={Logo}
								width={140}
								style={{ cursor: 'pointer' }}
								onClick={handleNavigateHome}
								alt={'Logo'}
							></Image>
						</Box>

						<Box sx={desktopBarSearchAndFilterContainerStyle}>
							<AnimatedSeachBar {...animatedSearchBarProps} />
							{isSearchFieldFocus && (
								<SearchBarModel
									searchValue={searchValue}
									openBox={isSearchFieldFocus}
								/>
							)}

							<Box
								sx={{
									display: isSearchFieldFocus
										? 'none'
										: 'block',
									width: { md: '34%', lg: '25%' },
								}}
							>
								<DropdownMapButton
									isModalOpen={isDropdownMapButtonModalOpen}
									setIsModalOpen={
										setIsDropdownMapButtonModalOpen
									}
								/>
							</Box>
						</Box>

						<Box sx={desktopBarNavLinksContainerStyle}>
							<NavigationLinksLayout links={TOP_BAR_LINKS} />

							{/* Menu Link Icon. */}
							<StyledChip>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<MenuIcon sx={iconStyle} />
									<AccountCircleIcon sx={iconStyle} />
								</Box>
							</StyledChip>
						</Box>
					</StyledToolbar>
				</Container>
			</StyledDesktopAppbar>
		</>
	);
};

export default DesktopLayout;
