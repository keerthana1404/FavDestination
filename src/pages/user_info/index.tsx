import dynamic from 'next/dynamic';
const UserInfo = dynamic(() => import('@components/UserInfo'));

const UserInfoPage = () => {
	return (
		<>
			<UserInfo />
		</>
	);
};

export default UserInfoPage;
