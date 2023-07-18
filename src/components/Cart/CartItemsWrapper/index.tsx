// Its a propotype page so no need to improve the code quality
import { Box } from '@mui/material';
import OrderCartCard from '../OrderCartCard';

interface CartItemsWrapperProps {
	cartItems: any[];
	onOrderModified: any;
	onOrderRemoved: any;
	onOrderSelect: any;
	expired: boolean;
}

const CartItemsWrapper = ({
	expired,
	cartItems,
	onOrderModified,
	onOrderRemoved,
	onOrderSelect,
}: CartItemsWrapperProps) => {
	return (
		<>
			<Box mt={1.5}>
				{cartItems.map((cardOrder, index) => {
					return (
						<Box
							key={index}
							sx={{
								height: {
									xl: '190px',
									lg: '200px',
									md: '190px',
									sm: '220px',
								},
								mb: 7,
							}}
						>
							<OrderCartCard
								expired={expired}
								{...cardOrder}
								onOrderModified={onOrderModified}
								onOrderRemove={onOrderRemoved}
								onOrderSelect={onOrderSelect}
							/>
						</Box>
					);
				})}
			</Box>
		</>
	);
};

export default CartItemsWrapper;
