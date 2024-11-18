import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { SignInForm } from "@/components/forms/sign-in";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export default function SignIn() {
	return (
		<section className="relative flex items-center justify-center flex-1 w-full h-full bg-card rounded-xl">
			<div className="absolute top-4 right-4">
				<ThemeToggle />
			</div>
			<Card className="max-w-md mx-auto border-none">
				<CardHeader>
					<div className="mb-4">
						<Link
							href={"/"}
							className={buttonVariants({ variant: "peak", size: "xs" })}
						>
							<Icons.TriangleLeftIcon />
							Back to Home
						</Link>
					</div>
					<CardTitle className="text-2xl">Sign in to Account</CardTitle>
					<CardDescription>
						Enter your email below to sign in to your account
					</CardDescription>
				</CardHeader>
				<SignInForm />
			</Card>
		</section>
	);
}
