'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
	const pathname = usePathname();
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [mounted, setMounted] = useState(false);

	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Writings', href: '/writings' }
	];

	useEffect(() => {
		setMounted(true);

		const savedTheme = localStorage.getItem('theme');
		if (
			savedTheme === 'dark' ||
			(!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setIsDarkMode(true);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	};

	if (!mounted) {
		return (
			<nav className="bg-white shadow-md transition-colors duration-200">
				<div className="mx-auto max-w-6xl px-4">
					<div className="flex h-16 items-center justify-between">
						<div className="flex-shrink-0">
							<span className="text-mechanical-300 text-xl font-bold">YourBrand</span>
						</div>

						<div className="flex items-center space-x-4">
							{navLinks.map((link) => (
								<span
									key={link.href}
									className="text-mechanical-700 rounded-md px-3 py-2 text-sm font-medium"
								>
									{link.label}
								</span>
							))}

							<span className="text-mechanical-700 rounded-md p-2" aria-hidden="true">
								<Moon className="h-5 w-5" />
							</span>
						</div>
					</div>
				</div>
			</nav>
		);
	}

	return (
		<nav className="dark:bg-mechanical-900 bg-white shadow-md transition-colors duration-200">
			<div className="mx-auto max-w-6xl px-4">
				<div className="flex h-16 items-center justify-between">
					<div className="flex-shrink-0">
						<Link
							href="/"
							className="text-mechanical-300 dark:text-mechanical-100 text-xl font-bold"
						>
							YourBrand
						</Link>
					</div>

					<div className="flex items-center space-x-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`rounded-md px-3 py-2 text-sm font-medium ${
									pathname === link.href
										? 'bg-mechanical-100 text-mechanical-500 dark:bg-mechanical-700 dark:text-mechanical-100'
										: 'text-mechanical-700 hover:bg-mechanical-100 hover:text-mechanical-300 dark:text-mechanical-100 dark:hover:bg-mechanical-700 dark:hover:text-white'
								} transition-colors duration-200`}
							>
								{link.label}
							</Link>
						))}

						<button
							onClick={toggleDarkMode}
							className="text-mechanical-700 hover:bg-mechanical-100 dark:text-mechanical-100 dark:hover:bg-mechanical-700 focus:ring-mechanical-300 dark:focus:ring-offset-mechanical-900 rounded-md p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
							aria-label="Toggle dark mode"
						>
							{isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
