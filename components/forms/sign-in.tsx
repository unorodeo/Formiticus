import { Button, buttonVariants } from "@/components/ui/button";

import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignInForm() {
	return (
		<>
			<CardContent>
				<form className="grid gap-4">
					<div className="grid gap-2">
						<Label
							htmlFor="email"
							className="sr-only"
						>
							Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Email address"
							required
							variant={"secondary"}
							sizes={"lg"}
						/>
					</div>
					<div className="grid gap-2">
						<Label
							htmlFor="password"
							className="sr-only"
						>
							Password
						</Label>
						<Input
							id="password"
							type="password"
							placeholder="Password"
							required
							variant={"secondary"}
							sizes={"lg"}
						/>
						<div className="flex justify-end">
							<Link
								href="#"
								className={buttonVariants({ variant: "subtle", size: "xs" })}
							>
								Forgot your password?
							</Link>
						</div>
					</div>
					<Button
						type="submit"
						className="w-full"
					>
						Sign in
					</Button>
				</form>
				<div className="mt-4 text-sm text-center">
					Don&apos;t have an account?
					<Link
						href="/sign-up"
						className={buttonVariants({ variant: "peak", size: "xs" })}
					>
						Sign up
					</Link>
				</div>
			</CardContent>
		</>
	);
}
