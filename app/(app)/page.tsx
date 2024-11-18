import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function Home() {
	return (
		<>
			<section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="block text-4xl font-bold text-foreground/90 md:text-5xl lg:text-6xl">
						Let&apos;s Build Forms, Surveys, Quizzes Blazingly Fast
					</h1>
				</div>

				<div className="max-w-3xl mx-auto mt-5 text-center">
					<p className="lead">
						Formiticus, beautiful forms, Structured data, Amazing insights,
						Open-source.
					</p>
				</div>

				<div className="flex flex-col justify-center gap-3 mt-8 sm:flex-row">
					<Link
						href={"/sign-up"}
						className={cn(
							buttonVariants({ size: "lg", className: "text-base" })
						)}
					>
						Get Started &mdash; <i>Free</i>
					</Link>
					<Link
						href={"#"}
						className={cn(
							buttonVariants({ variant: "secondary", className: "text-base" })
						)}
					>
						Learn more about forms
					</Link>
				</div>
			</section>
		</>
	);
}

{
	/* <a
	className="inline-flex items-center p-1 text-sm transition border rounded-full gap-x-2 bg-background text-muted-foreground ps-3 hover:border-primary"
	href="#"
>
	Release - Join to waitlist
	<span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted font-semibold text-sm text-muted-foreground">
		<Icons.TriangleRightIcon />
	</span>
</a>; */
}
