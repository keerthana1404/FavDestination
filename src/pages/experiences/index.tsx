const ExperiencesPage = () => {
	return null;
};

export default ExperiencesPage;

export async function getServerSideProps() {
	return {
		redirect: {
			permanent: true,
			destination: '/',
		},
	};
}
