import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

interface Props {
	href?: string;
	as?: "link" | "logo";
}

export function Brand({ as = "link", href }: Props) {
	if (as === "link") {
		return (
			<Link
				href={href ?? "/"}
				className={cn("font-geist-mono text-3xl font-semibold rounded-md", focusRing)}
			>
				Formiticus
			</Link>
		);
	}

	if (as === "logo") {
		return (
			<div className="text-3xl font-bold font-geist-mono">
				Formiticus
			</div>
		);
	}
	return null;
}