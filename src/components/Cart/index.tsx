import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CardOrders from '../Cart/constants/card_orders.json';
import ExpiredCartOrders from '../Cart/constants/expired_card_orders.json';
import CartItemsWrapper from './CartItemsWrapper';
import CartPayment from './CartPayment';
import { StyledCartTitle, buttonStyle } from './styles/CartStyles';

const Cart = () => {
	const [cartItems, setCartItems] = useState(CardOrders);
	const [expiredCartItems, setExpiredCartItems] = useState(ExpiredCartOrders);

	const [selectedCartItemIds, setSelectedCartItemIds] = useState<number[]>(
		[],
	);
	const [cartPrice, setCartPrice] = useState(0);

	useEffect(() => {
		let price = 0;
		cartItems.map((item) => {
			price = price + item.totalPrice;
		});
		setCartPrice(price);
	}, [cartItems]);

	const onOrderModified = (cartItem: any) => {
		const updatedArray = cartItems.map((item) => {
			if (item.id === cartItem.id) {
				return cartItem;
			}
			return item;
		});
		setCartItems(updatedArray);
	};

	const onOrderRemoved = (cartItem: any) => {
		if (cartItem.cardExpired) {
			const updatedArray = expiredCartItems.filter(
				(obj) => obj.id !== cartItem.id,
			);
			setExpiredCartItems(updatedArray);
		} else {
			const updatedArray = cartItems.filter(
				(obj) => obj.id !== cartItem.id,
			);
			setCartItems(updatedArray);
		}
	};

	const onClearCart = () => {
		const updatedArray = cartItems.filter(
			(obj) => !selectedCartItemIds.includes(obj.id),
		);
		setCartItems(updatedArray);
	};

	const onOrderSelect = (cartItemId: any) => {
		setSelectedCartItemIds([...selectedCartItemIds, cartItemId]);
	};

	return (
		<>
			<Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
				<Box sx={{ flex: '80%' }}>
					<StyledCartTitle
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							Cart
						</Typography>
						<Button
							variant="outlined"
							color="secondary"
							sx={buttonStyle}
							onClick={() => {
								onClearCart();
							}}
						>
							Clear Cart
						</Button>
					</StyledCartTitle>
					{cartItems.length > 0 ? (
						<CartItemsWrapper
							expired={false}
							cartItems={cartItems}
							onOrderModified={onOrderModified}
							onOrderRemoved={onOrderRemoved}
							onOrderSelect={onOrderSelect}
						/>
					) : (
						<>
							<Typography align="center">
								No items present in cart!
							</Typography>
						</>
					)}
					{expiredCartItems.length > 0 && (
						<>
							<StyledCartTitle>
								<Typography variant="h6">Expired</Typography>
							</StyledCartTitle>
							<CartItemsWrapper
								expired={true}
								cartItems={expiredCartItems}
								onOrderModified={onOrderModified}
								onOrderRemoved={onOrderRemoved}
								onOrderSelect={onOrderSelect}
							/>
						</>
					)}
				</Box>
				<Box
					sx={{
						flex: '20%',
					}}
				>
					<CartPayment
						cartPrice={cartPrice}
						noOfCartItems={cartItems.length}
					/>
				</Box>
			</Box>
		</>
	);
};

export default Cart;
