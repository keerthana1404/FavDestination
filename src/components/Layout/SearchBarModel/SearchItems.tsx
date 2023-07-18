import { ExperienceItemTypes } from '@components/types/experienceItemType';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';

interface SearchItems {
	searchItemData: ExperienceItemTypes[];
	setOpenBox?: UseStateUpdationValueType<boolean>;
}
const SearchItems = ({ searchItemData, setOpenBox }: SearchItems) => {
	const router = useRouter();
	const handleItemClick = (item: ExperienceItemTypes) => {
		router.push(`/experiences/${item.id}`);
		setOpenBox && setOpenBox(false);
	};
	return (
		<>
			{searchItemData.map((item) => {
				return (
					<Box
						key={`SearchItem-${item.id}`}
						sx={{
							display: 'flex',
							boxShadow: '1px 1px 2px #CCC',
							cursor: 'pointer',
							p: 1,
						}}
						onClick={() => handleItemClick(item)}
					>
						<Image
							src={item.images[0]}
							height={50}
							width={50}
							style={{ borderRadius: '4px' }}
							alt={item.title}
						></Image>
						<Box px={1} py={0.5}>
							<Typography
								variant="body1"
								color="black"
								fontWeight={'bold'}
								borderRadius={1}
							>
								{item.title}
							</Typography>
							<Typography variant="body2" color="grey">
								{item.city}
							</Typography>
						</Box>
					</Box>
				);
			})}
		</>
	);
};

export default memo(SearchItems); // memo is important for debouncing thing
