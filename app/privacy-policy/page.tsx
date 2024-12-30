import Image from "next/image";

export default function PrivacyPolicyPage() {
	return (
		<div className="lg:flex dark:bg-black/20">
			<div className="hidden lg:block flex-1 h-screen">
				<div className="bg-zinc-900 h-full w-full p-16 flex items-center justify-center border-r border-zinc-800">
					<div className="relative max-w-md h-96 py-4">
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
			<div className="flex flex-1 bg-zinc-900 my-auto items-center justify-center h-screen overflow-auto">
				<div className="lg:max-w-xl px-8 sm:px-2 max-h-[100vh] py-10 overflow-y-auto">
					<div className="flex justify-center items-center lg:hidden select-none pointer-events-none">
						<Image
							className="flex items-center pb-6"
							src="/gateway_partner.png"
							alt="Rundac's Gateway"
							width={360}
							height={120}
						></Image>
					</div>
					<h1 className="text-2xl font-extrabold tracking-tight text-zinc-100 pb-4">
						Privacy Policy for Rundac Gateway
					</h1>
					<div className="pb-4 text-xl font-extrabold tracking-tight text-zinc-300">
						<h2>Introduction</h2>
						<p className="text-sm font-medium text-zinc-400 leading-relaxed">
							Welcome to Rundac Gateway! We respect
							your privacy and are committed to
							protecting the personal information
							you share with us. This Privacy Policy
							outlines how we collect, use, and
							safeguard your data when using our
							app.
						</p>
					</div>
					<div className="py-4 text-xl font-extrabold tracking-tight text-zinc-300">
						<h2>Information We Collect</h2>
						<p className="text-sm font-medium text-zinc-400 leading-relaxed">
							For the time being, Rundac Gateway
							accesses the following data.
							<ul className="list-disc font-normal px-4">
								<li>
									<span className="font-bold px-1">
										Username Handle
									</span>
									(e.g., @juandelacruz)
								</li>
								<li>
									<span className="font-bold px-1">
										Global Display Name
									</span>
									(e.g., Juan Dela Cruz)
								</li>
								<li>
									<span className="font-bold px-1">
										Profile Banner
									</span>
									(for the purpose of visual
									aesthetics)
								</li>
								<li>
									<span className="font-bold px-1">
										Profile Picture
									</span>
									(for the purpose of visual
									aesthetics)
								</li>
								<li>
									<span className="font-bold px-1">
										Public IP Address
									</span>
									(for the purpose of
									moderation, including
									identifying and preventing
									multi-accounting and
									disallowing the use of VPN
									for ban evasion.)
								</li>
							</ul>
						</p>
					</div>
					<div className="py-4 text-xl font-extrabold tracking-tight text-zinc-300">
						<h2>Data Usage</h2>
						<p className="text-sm font-medium text-zinc-400 leading-relaxed">
							The data collected is used solely for
							the following purposes
							<ul className="list-disc font-normal px-4">
								<li>
									Ensuring compliance with
									the community&apos;s
									standards and moderation
									policies.
								</li>
								<li>
									Maintaining the security,
									integrity, and purpose of
									the app.
								</li>
							</ul>
						</p>
					</div>
					<div className="py-4 text-xl font-extrabold tracking-tight text-zinc-300">
						<h2>Data Protection</h2>
						<p className="text-sm font-medium text-zinc-400 leading-relaxed">
							We implement robust security measures
							to protect your data from unauthorized
							access, alteration, or disclosure. Any
							data processed locally, such as
							profile picture moderation, will be
							securely deleted once the purpose is
							fulfilled.
						</p>
					</div>
					<div className="py-4 text-xl font-extrabold tracking-tight text-zinc-300">
						<h2>Changes to This Privacy Policy</h2>
						<p className="text-sm font-medium text-zinc-400 leading-relaxed">
							We may update this Privacy Policy from
							time to time to reflect changes in our
							practices or for other operational,
							legal, or regulatory reasons. Any
							updates will be communicated through
							the app or other appropriate channels.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
