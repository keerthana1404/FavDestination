import { AGELIMIT_AND_TYPEDATA } from '@constants/filterData';
import { Fab } from '@mui/material';

const AgeLimitFilterItems = () => {
	return (
		<>
			{AGELIMIT_AND_TYPEDATA.map((item, index) => {
				return (
					<Fab
						variant="extended"
						key={`AgeLimitAndTypeData-${item}-${index}`}
						size="small"
						color="primary"
						sx={{
							fontSize: '12px',
							minWidth: '60px',
							color: index === 0 ? 'secondary' : 'grey',
							zIndex: 0,
						}}
					>
						{item}
					</Fab>
				);
			})}
		</>
	);
};

export default AgeLimitFilterItems;
