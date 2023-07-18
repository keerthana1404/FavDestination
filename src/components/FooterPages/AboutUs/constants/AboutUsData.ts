import CookingClass from '@assets/CookingClass.jpg';
import ThemePark from '@assets/ThemePark.jpg';

const AboutUsData = [
	{
		id: 1,
		heading: 'A Push for Boundless Experiences & Happiness',
		content:
			'Looking for the best social experience website? You’ve found it. At Fav Destination, our mission is to transform online social experiences and help reconnect people again in real life. We know that you already have enough stuff and things. It’s time to start collecting experiences. We offer the opportunity to indulge in spectacular experiences that make memories. You don’t need to be a member to collect one of our experience vouchers, but our Premium Members enjoy hefty discounts, unique features, and are eligible to get free vouchers as well.',
		image: ThemePark,
	},
	{
		id: 2,
		heading: 'Fav Destination Experiences',
		content:
			'We offer a curated collection of dynamic experiences, no matter your budget. All of the vouchers in Fav Destination are vetted by our adventurous team of experts who know how to make fun happen. Whether you are looking to try something outrageous or just something new, we have experiences for every level of enjoyment. Tired of trying to come up with new things to do? We dare you to not find something amazing on Fav Destination. We have everything from dining, to events, concerts and more. And even better? We’ll help you meet someone new to take on your adventure. You may be looking to meet new people, or to meet someone who tickles your fancy. Our Fav Destination app connects you to both.',
		image: CookingClass,
	},
] as const;

export { AboutUsData };
