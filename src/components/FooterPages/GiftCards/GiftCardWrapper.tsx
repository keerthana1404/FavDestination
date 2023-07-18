import GiftCard from './GiftCard';

interface GiftCardWrapperProps {
	giftCardsData: {
		id: number;
		time_period: string;
		price: string;
		currency: string;
		discount?: string;
		price_per_month?: string;
	}[];
}

const GiftCardWrapper = ({ giftCardsData }: GiftCardWrapperProps) => {
	return (
		<>
			{giftCardsData.map((card) => (
				<GiftCard key={`GiftCardWrapper-${card.id}`} {...card} />
			))}
		</>
	);
};

export default GiftCardWrapper;
