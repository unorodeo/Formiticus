import "@/styles/globals.css";

import { geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: {
		template: "%s | The simple form builder.",
		default:
			"Formiticus | Build forms for collecting information that matters.",
	},
	description: "Build forms for collecting information that matters",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={cn(
					"font-geist-sans antialiased scroll-smooth",
					"flex flex-col justify-between min-h-screen",
					geistSans.variable,
					geistMono.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

