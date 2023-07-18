import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { EXPERIENCE_MODEL_BOX_DATA } from '../../constants/ExperienceItemDetailModelData';
import ExperienceModelBoxItem from './ExperienceModelBoxItem';

interface ExperienceModelBoxItemsProps {
	ticketQuantity: number[];
	setTicketQuantity: UseStateUpdationValueType<number[]>;
}

const ExperienceModelBoxItems = ({
	ticketQuantity,
	setTicketQuantity,
}: ExperienceModelBoxItemsProps) => {
	return (
		<>
			{EXPERIENCE_MODEL_BOX_DATA.map((item) => {
				return (
					<ExperienceModelBoxItem
						key={`HomeExperienceModelBoxData-${item.label}-${item.id}`}
						ticketQuantity={ticketQuantity}
						setTicketQuantity={setTicketQuantity}
						item={item}
					/>
				);
			})}
		</>
	);
};

export default ExperienceModelBoxItems;
