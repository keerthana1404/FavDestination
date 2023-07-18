import dynamic from 'next/dynamic';

const Cart = dynamic(() => import('@components/Cart'));

const index = () => {
	return (
		<>
			<Cart />
		</>
	);
};

export default index;
