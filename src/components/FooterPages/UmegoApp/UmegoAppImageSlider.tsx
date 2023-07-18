import { Box } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import { umegoAppImages } from '../constants/UmegoAppImageData';
import { UmegoAppImageSliderSettings } from '../constants/UmegoAppImageSliderData';
import { umegoAppImageSliderContainerStyle } from '../styles/UmegoAppStyles';

const UmegoAppImageSlider = () => {
	const sliderRef = useRef<Slider>({} as Slider);

	return (
		<>
			<Box sx={umegoAppImageSliderContainerStyle}>
				<Slider {...UmegoAppImageSliderSettings} ref={sliderRef}>
					{umegoAppImages.map((data) => {
						return (
							<Box
								key={`TopModelImage-${data.id}`}
								sx={{
									overflow: 'hidden',
									borderRadius: 4,
									height: '100%',
								}}
							>
								<Image
									src={data.image}
									alt="Experience_Detail_Image"
									style={{
										height: '100%',
										width: '100%',
									}}
								/>
							</Box>
						);
					})}
				</Slider>
			</Box>
		</>
	);
};

export default UmegoAppImageSlider;
