import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { MODAL_ANIMATION_VARIANT } from '@framerMotionanimationVarients/FilterModelAnimationVariants';
import CloseIcon from '@mui/icons-material/Close';
import {
	Box,
	Button,
	Container,
	IconButton,
	Modal,
	Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import AgeLimitFilter from './AgeLimitFilter';
import DateFilter from './DateFilter';
import MapFilter from './MapFilter';
import PriceRangeFilter from './PriceRangeFilter';
import RatingFilter from './RatingFilter';
import {
	FilterModalBoxFixedBar,
	modalBoxStyle,
	StylesFilterModalBoxContainer,
} from './styles/FilterModalStyles';
import { DateFilterValueProps } from './types/FilterModalType';

interface FilterModelProps {
	isFilterModalOpen: boolean;
	setIsFilterModalOpen: UseStateUpdationValueType<boolean>;
}

const FilterModel = ({
	isFilterModalOpen,
	setIsFilterModalOpen,
}: FilterModelProps) => {
	const [price, setPrice] = useState({
		startPrice: 2200,
		endPrice: 4534,
	});
	const [country, setCountry] = useState('Singapore');
	const [chooseRating, setChooseRating] = useState(4);
	const [dateValue, setDateValue] = useState<DateFilterValueProps>({
		to: dayjs('2014-08-18T21:11:54'),
		from: dayjs('2018-05-18T11:01:12'),
	});

	const handleClose = () => {
		setIsFilterModalOpen(false);
	};

	return (
		<>
			<Modal
				open={isFilterModalOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				{/* Main Model box */}
				<Container
					component={motion.div}
					variants={MODAL_ANIMATION_VARIANT}
					initial="before"
					animate="after"
					sx={modalBoxStyle}
					maxWidth="xl"
				>
					<StylesFilterModalBoxContainer>
						{/* Top fixed bar starts. */}
						<FilterModalBoxFixedBar
							sx={{
								py: 2,
								top: 0,
								borderBottom: '1px solid #CCC',
							}}
						>
							<Container
								maxWidth="xl"
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: '10px',
									}}
								>
									<ComponentHeadingTypography variant="h6">
										Filters &nbsp; |
									</ComponentHeadingTypography>
									<Typography
										variant="body2"
										color="secondary"
										pt={0.3}
									>
										Entertainment
									</Typography>
								</Box>
								<IconButton
									aria-label="delete"
									size="small"
									onClick={handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Container>
						</FilterModalBoxFixedBar>
						<Box sx={{ mt: 7 }} />
						{/* Top fixed bar ends. */}

						<PriceRangeFilter price={price} setPrice={setPrice} />
						<MapFilter country={country} setCountry={setCountry} />
						<AgeLimitFilter />
						<RatingFilter
							chooseRating={chooseRating}
							setChooseRating={setChooseRating}
						/>
						<DateFilter
							dateValue={dateValue}
							setDateValue={setDateValue}
						/>

						{/* Bottom fixed bar starts. */}
						<Box sx={{ height: '80px' }} />
						<FilterModalBoxFixedBar
							bottom={0}
							px={{ xs: 2, md: 4 }}
							py={2}
							borderTop="1px solid #CCC"
						>
							<Typography
								variant="body1"
								sx={{ textDecoration: 'underline' }}
							>
								Clear all
							</Typography>
							<Button color="secondary" variant="contained">
								Show 687 experiences
							</Button>
						</FilterModalBoxFixedBar>
						{/* Bottom fixed bar ends. */}
					</StylesFilterModalBoxContainer>
				</Container>
			</Modal>
		</>
	);
};

export default memo(FilterModel);
