import { useRouter } from 'next/router';
import { memo } from 'react';
import NavLink from './NavLink';
import { Links } from './types/NavBarType';

interface NavigationLinksLayoutProps {
	links: Links;
}

const NavigationLinksLayout = ({ links }: NavigationLinksLayoutProps) => {
	const router = useRouter();
	const activeLink =
		router.pathname === '/' ? 'experiences' : router.pathname.slice(1);

	return (
		<>
			{links.map((item) => {
				return (
					<NavLink
						item={item}
						activeLink={activeLink}
						key={`NavigationLink-${item.label}-${item.id}`}
					/>
				);
			})}
		</>
	);
};

export default memo(NavigationLinksLayout);
