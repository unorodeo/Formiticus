import { Brand } from "@/components/ui/brand";
import { HeaderNavs } from "@/components/header.nav";

export function Header() {
	return (
		<header className="sticky inset-x-0 top-0 z-50 border-b bg-background">
			<nav className="flex flex-row items-center justify-between px-4 mx-auto max-w-7xl h-14 lg:px-8">
				<Brand />
				<HeaderNavs />
			</nav>
		</header>
	);
}
