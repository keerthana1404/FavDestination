import { helpQuestions } from './constants/helpConstants';
import HelpQuestionsCard from './HelpQuestionCard';

interface HelpQuestionCardWrapperProps {
	value: number;
}

const HelpQuestionCardWrapper = ({ value }: HelpQuestionCardWrapperProps) => {
	return (
		<>
			{helpQuestions[value].map((card) => {
				return (
					<HelpQuestionsCard
						key={`helpQuestions-${card.id}`}
						{...card}
					/>
				);
			})}
		</>
	);
};

export default HelpQuestionCardWrapper;
