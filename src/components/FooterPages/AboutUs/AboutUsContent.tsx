import { StyledMainHeading } from '@components/styles/ComponentsStyles';
import Image from 'next/image';
import {
	StyledAboutUsBoxParagraph,
	StyledAboutUsContainer,
	StyledAboutUsImage,
	StyledAboutUsImageContainer,
	StyledAboutUsImageGradiantBox,
	StyledAboutUsParagraphContainer,
} from '../styles/AboutUsStyles';

interface AboutUsContentProps {
	id: number;
	heading: string;
	content: string;
	image: any;
}

const AboutUsContent = ({
	id,
	heading,
	content,
	image,
}: AboutUsContentProps) => {
	const AboutUsContentIsEven = id % 2 === 0;

	return (
		<>
			<StyledAboutUsContainer
				sx={{
					backgroundColor: AboutUsContentIsEven
						? 'primary.main'
						: 'rgba(0,0,0,0.6)',
					pl: AboutUsContentIsEven ? 0 : { xs: 0, md: 5 },
					pr: AboutUsContentIsEven ? { xs: 0, md: 5 } : 0,
					flexDirection: AboutUsContentIsEven ? 'row-reverse' : 'row',
				}}
			>
				<StyledAboutUsParagraphContainer>
					<StyledMainHeading
						variant="h4"
						sx={{
							color: AboutUsContentIsEven
								? 'secondary.main'
								: 'primary.main',
						}}
					>
						{heading}
					</StyledMainHeading>
					<StyledAboutUsBoxParagraph
						color={AboutUsContentIsEven ? 'secondary' : 'primary'}
						sx={{ mt: 1 }}
					>
						{content}
					</StyledAboutUsBoxParagraph>
				</StyledAboutUsParagraphContainer>
				<StyledAboutUsImageContainer
					sx={{
						justifyContent: AboutUsContentIsEven
							? 'flex-start'
							: 'flex-end',
					}}
				>
					<StyledAboutUsImage>
						<Image
							src={image}
							alt="Theme Park"
							style={{
								width: '100%',
								height: '500px',
							}}
						/>
						<StyledAboutUsImageGradiantBox
							sx={{
								background: AboutUsContentIsEven
									? 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
									: 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(102,102,102,1) 100%)',
							}}
						/>
					</StyledAboutUsImage>
				</StyledAboutUsImageContainer>
			</StyledAboutUsContainer>
		</>
	);
};

export default AboutUsContent;
