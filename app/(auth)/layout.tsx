import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return <main className="relative grid flex-1 p-2 bg-surface place-items-center">{children}</main>;
}
