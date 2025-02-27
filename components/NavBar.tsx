import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className="text-mechanical-900 flex items-center justify-between bg-transparent p-4">
			<div className="text-mechanical-300 text-lg font-bold">Evan Alvarez</div>
			<ul className="flex space-x-4">
				<li>
					<Link href="/" className="hover:underline">
						Home
					</Link>
				</li>
				<li>
					<Link href="/w" className="hover:underline">
						Writings
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
