"use client";

import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useMediaQuery } from "@/hooks/use-media-query";

export function HeaderNavs() {
	const matches = useMediaQuery("(max-width: 760px)");

	return (
		<>
			{matches ? (
				<Button
					type="button"
					variant={"secondary"}
					size={"icon-sm"}
				>
					<MenuIcon />
					<span className="sr-only">Toggle menu</span>
				</Button>
			) : (
				<NavList />
			)}
		</>
	);
}

const NAV_ITEMS = [
	{
		href: "/pricing",
		label: "Pricing",
	},
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

function NavList() {
	return (
		<div className="flex items-center gap-2">
			{NAV_ITEMS.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={buttonVariants({
						variant: "peak",
						size: "sm",
						className: "text-base",
					})}
				>
					{item.label}
				</Link>
			))}
			<ThemeToggle />
			<Link
				href={"/sign-in"}
				className={buttonVariants({
					variant: "primary",
					className: "text-base font-geist-mono",
				})}
			>
				SIGN IN
			</Link>
		</div>
	);
}
