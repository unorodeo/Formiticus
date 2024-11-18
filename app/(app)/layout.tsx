import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main className="relative flex-1">{children}</main>
			<Footer />
		</>
	);
}
