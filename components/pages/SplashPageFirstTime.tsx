import Image from "next/image";
import Link from "next/link";

export default function SplashPageFirstTime() {
	return (
		<div className="lg:flex dark:bg-black/20">
			<div className="hidden lg:block flex-1 h-screen">
				<div className="bg-zinc-900 h-full w-full p-16 flex items-center justify-center border-r border-zinc-800">
					<div className="relative max-w-md h-96">
						<div className="select-none pointer-events-none">
							<Image
								draggable="false"
								src="/gateway.svg"
								alt="Rundac's Gateway"
								width={240}
								height={120}
							></Image>
						</div>
						<h2 className="font-bold text-[28px] lg:text-3xl leading-[1.2] tracking-tight text-zinc-100 dark:text-zinc-100 mb-6">
							A verification system you can trust.
						</h2>
						<p className="text-zinc-500 text-sm md:text-base !leading-loose flex-grow mb-6">
							Save yourself frustration, hassle, and
							time setting up bots to tell users
							apart. Rundac&apos;s Gateway brings
							you a beautiful and powerful
							verification system out of the box.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-zinc-900 flex-1 my-auto flex items-center justify-center h-screen">
				<div className="lg:max-w-md px-8 sm:px-2 h-96 mb-24 lg:mb-0">
					<div className="flex justify-center items-center pt-12 lg:hidden select-none pointer-events-none">
						<Image
							className="flex items-center pb-6"
							src="/gateway_partner.png"
							alt="Rundac's Gateway"
							width={360}
							height={120}
						></Image>
					</div>
					<h1 className="text-2xl font-bold tracking-tight text-zinc-100">
						Welcome!
					</h1>
					<p className="mt-2 text-sm text-zinc-200 leading-relaxed">
						Got a verification hash?{" "}
						<Link href="/hash">
							<span className="transition-colors font-bold text-violet-400 hover:text-violet-300/80 dark:text-violet-500/80 dark:hover:text-violet-500/60">
								Verify with your hash
							</span>
							.
						</Link>
					</p>
					<Link
						href="/api/auth/discord"
						className="transition-all duration-300 bg-violet-600 dark:bg-violet-600/60 h-12 flex justify-center items-center text-white dark:text-neutral-100 dark:border-2 dark:border-violet-600 w-full rounded-md hover:bg-violet-500 dark:hover:bg-violet-500/80 text-md h-10 mt-4 hover:rounded-3xl"
					>
						<div className="flex items-center space-x-2">
							<span>Sign in with Discord</span>
						</div>
					</Link>
					<div className="mt-8 w-full h-px bg-zinc-600"></div>
					<div className="mt-8 text-sm text-zinc-400 leading-relaxed">
						By signing in, you agree to us{" "}
						<span className="border-b border-zinc-500">
							collecting your IP address for
							preventive and safety measures
						</span>
						.
					</div>
				</div>
			</div>
		</div>
	);
}
