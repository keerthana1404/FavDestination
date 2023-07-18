const CareerPage = () => {
	return null;
};
export default CareerPage;

export async function getServerSideProps() {
	return {
		redirect: {
			permanent: true,
			destination: 'https://meetlandia.io/careers-at-meetlandia/',
		},
	};
}
