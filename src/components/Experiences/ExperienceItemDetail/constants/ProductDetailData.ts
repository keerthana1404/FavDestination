const relatedProductsData = [
	{
		id: 4,
		title: 'Adventure Cove Waterpark™',
		images: [
			'https://images.unsplash.com/photo-1559956144-ee11501d5459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			'https://images.unsplash.com/photo-1626313680130-d18000ed7303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		],
		rating: 4.6,
		city: 'Singapore',
	},
	{
		id: 6,
		title: 'Airzone Singapore at City Square Mall',
		images: [
			'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80',
			'https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
		],
		rating: 4.3,
		city: 'Singapore',
	},
	{
		id: 11,
		title: 'Axe Factor X',
		images: [
			'https://images.unsplash.com/photo-1649910812129-6cf7e194d21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
			'https://images.unsplash.com/photo-1663832375125-6b012811a4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		],
		rating: 4.7,
		city: 'Singapore',
	},
	{
		id: 26,
		title: 'Fun Empire',
		images: [
			'https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80',
			'https://images.unsplash.com/photo-1498196645145-687fd3bfe912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		],
		rating: 4.6,
		city: 'Singapore',
	},
	{
		id: 31,
		title: 'HeadRock VR',
		images: [
			'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
			'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		],
		rating: 3.6,
		city: 'Singapore',
	},
	{
		id: 43,
		title: 'Kiztopia @ Marina Square',
		images: [
			'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_777/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ud7zg2j5xmnvkdu4ppr5/KiztopiaTicketinSingapore(MarinaSquare).jpg',
			'https://1.bp.blogspot.com/-sTpQWCNO0Ww/XPkwQb-NH2I/AAAAAAABj3Y/bmQLJ1U4cgIp4hYy-GaLw3KBZmihwjBVACLcBGAs/s640/Kiztopia%2BMarina%2BSquare%2BSingapore%2Breview%2B%25288%2529.jpg',
		],
		rating: 4.6,
		city: 'Singapore',
	},
	{
		id: 44,
		title: 'Kiztopia Club Jurong Point',
		images: [
			'https://www.littledayout.com/wp-content/uploads/01-kiztopia-jurong-point.jpg',
			'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nlbnzxuqwr38jzretxzn/KiztopiaTicketinSingapore(Jurong).webp',
		],
		rating: 4.6,
		city: 'Singapore',
	},
	{
		id: 45,
		title: 'Kiztopia Club Punggol',
		images: [
			'https://image.kkday.com/v2/image/get/s1.kkday.com/product_129037/20220503072748_LOGGj/jpg',
			'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_728/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/isaqwphvkbuvw0qqjwwz/KiztopiaTicketinSingapore(MarinaSquare).webp',
		],
		rating: 4.6,
		city: 'Singapore',
	},
	{
		id: 49,
		title: 'Laser Quest Bukit Batok',
		images: [
			'https://sg.kidlander.com/wp-content/uploads/2013/10/LQ_low-res.jpg',
			'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_2674,h_1783,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gzgn6lubcmb3lugtwwbu/LaserQuestHomeTeamNSSingapore-KlookSingapore.jpg',
		],
		rating: 4.7,
		city: 'Singapore',
	},
];

const reviews = [
	{
		_id: 1,
		name: 'Olivia',
		createdAt: '27/02/2022',
		rating: 5,
		comment:
			'I have done a lot of research for my itinerary over the last 6 months and I already have a lot of information ble to give me information that I couldnt find elsewhere!',
	},
	{
		_id: 2,
		name: 'Emma',
		createdAt: '07/02/2022',
		rating: 3,
		comment:
			'Jae had a very detailed and informative layout for any type of traveler. Definitely appreciated this kind of guidance as he gives useful tips and advice on what’s currently popular.',
	},
	{
		_id: 3,
		name: 'Amelia',
		createdAt: '01/01/2022',
		rating: 1,
		comment:
			'We truly advice this experience. Jae is very helpful, and willing to provide you any tips, or answer any questions about Korea. After the meeting,',
	},
	{
		_id: 4,
		name: 'Elijah',
		createdAt: '22/02/2021',
		rating: 4,
		comment:
			'Thank you Jae for your help with our trip planning. Jae is a very kind and accommodating host, he gave us a lot of good recommendations based on our requirements/',
	},
	{
		_id: 5,
		name: 'Jason',
		createdAt: '30/03/2022',
		rating: 5,
		comment:
			'Thank you Jae for your help with our trip planning. Jae is a very kind and accommodating host, he gave us a lot of good recommendations based on our requirements',
	},
	{
		_id: 6,
		name: 'Oliver',
		createdAt: '20/2/2023',
		rating: 3,
		comment:
			'If you’re planning a trip to Korea, you MUST meet with Jae! He takes time to ask you questions and then provides you with the best ideas/advice for your trip! ',
	},
];

export { relatedProductsData, reviews };
