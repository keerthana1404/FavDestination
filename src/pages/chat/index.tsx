import dynamic from 'next/dynamic';
const ComingSoon = dynamic(() => import('@components/ComingSoon'));

const ChatPage = () => {
	return <ComingSoon />;
};

export default ChatPage;

ChatPage.FullWidthLayout = (page: React.ReactElement) => {
	return page;
};
