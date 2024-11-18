import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { SignInForm } from "@/components/forms/sign-in";
import { SignUpForm } from "@/components/forms/sign-up";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export default function SignUp() {
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
					<CardTitle className="text-2xl">Sign up an Account</CardTitle>
					<CardDescription>
						Enter your credentials to create your account
					</CardDescription>
				</CardHeader>
				<SignUpForm />
			</Card>
		</section>
	);
}
