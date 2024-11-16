import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface Props extends ComponentPropsWithoutRef<"section"> {
	full?: boolean;
}

export function Section({ children, className, full, ...props }: Props) {
	return (
		<section
			className={cn(
				"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
				{
					"max-w-full": full,
				},
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
}
