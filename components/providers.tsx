import { ReactNode } from "react";
import { TailwindIndicator } from "@/components/ui/tailwindcss-indicator";
import { ThemeProvider } from "./themes";

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute={"class"}
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<TailwindIndicator position="left" />
		</ThemeProvider>
	);
}
