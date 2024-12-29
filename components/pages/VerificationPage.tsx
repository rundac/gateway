"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerificationPage() {
	const [user, setUser] = useState<{
		username: string;
		id: string | null;
		globalName: string | null;
		pfp: string | null;
		ip: string | null;
	} | null>(null);
	const router = useRouter();
	const [isVerifying, setIsVerifying] = useState(false);

	useEffect(() => {
		fetchUserInfo();
	}, []);

	const fetchUserInfo = async () => {
		try {
			const response = await fetch("/api/auth/user");
			if (response.ok) {
				const data = await response.json();
				setUser(data);
			} else {
				console.error("Failed to fetch user info");
			}
		} catch (error) {
			console.error("Error fetching user info:", error);
		}
	};

	const handleLogout = async () => {
		try {
			const response = await fetch("/api/auth/logout", {
				method: "POST",
			});
			if (response.ok) {
				router.push("/");
			} else {
				console.error("Failed to logout");
			}
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	const handleVerify = async () => {
		setIsVerifying(true);
	};

	if (!user) {
		return (
			<section className="flex justify-center items-center h-screen bg-zinc-900"></section>
		);
	}

	return (
		<section className="flex justify-center items-center h-screen bg-zinc-900">
			<div className="max-w-lg mx-auto bg-zinc-800 rounded-2xl shadow-xl overflow-hidden">
				<div className="pb-6 relative">
					{/* Banner Image */}
					<div className="pb-4 select-none pointer-events-none">
						<Image
							id="banner"
							className="h-32 w-full object-cover lg:h-48 rounded-t-lg rounded-b-2xl"
							src={user.banner}
							alt=""
							width={240}
							height={140}
						/>
					</div>

					{/* Logout Button */}
					<button
						onClick={handleLogout}
						className="transition-all duration-300 absolute top-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded-md text-sm hover:bg-zinc-700 hover:rounded-3xl"
					>
						Logout
					</button>

					{/* User Profile Image */}
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
							<div className="flex select-none pointer-events-none">
								<Image
									draggable="false"
									className="h-24 w-24 rounded-full ring-8 ring-zinc-800 sm:h-32 sm:w-32"
									src={user.pfp}
									alt=""
									width={240}
									height={140}
								/>
							</div>
							<div className="mt-2 px-2 sm:px-0 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
								<div className="sm:hidden text-white md:block min-w-0 flex-1">
									<h1
										id="global_name"
										className="text-2xl font-bold truncate"
									>
										{user.globalName}
									</h1>
									<p
										id="username"
										className="text-md font-medium truncate"
									>
										{user.username}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Verification Section */}
				<div className="px-6 pb-6 bg-zinc-900/5 space-y-2 dark:bg-zinc-800">
					<h1 className="text-2xl font-bold tracking-tight text-zinc-100">
						Verify
					</h1>
					<p className="pb-2 text-sm text-zinc-400 leading-relaxed">
						Thank you for trusting our services, you can
						kindly click the button below to verify!
						Enjoy your stay, much love from the
						community!
					</p>
					<button
						onClick={handleVerify}
						className={
							!isVerifying
								? "transition-all duration-300 bg-violet-600 dark:bg-violet-600/60 h-12 flex justify-center items-center text-white dark:text-neutral-100 dark:border-2 dark:border-violet-600 w-full rounded-md hover:bg-violet-500 dark:hover:bg-violet-500/80 text-md h-10 mt-4 hover:rounded-3xl"
								: "disabled cursor-not-allowed transition-all duration-[2s] bg-violet-600 dark:bg-violet-600/60 h-12 flex justify-center items-center text-white dark:text-neutral-100 dark:border-2 dark:border-violet-600 w-full rounded-md hover:bg-violet-500 dark:hover:bg-violet-500/80 text-md h-10 mt-4 hover:rounded-3xl animate-pulse"
						}
					>
						<div className="flex items-center space-x-2">
							<span>
								{isVerifying
									? "Verifying..."
									: `Verify`}
							</span>
						</div>
					</button>
					<div className="pt-4 text-sm text-zinc-400 leading-relaxed">
						By signing in, you agree to us{" "}
						<span className="border-b border-zinc-500">
							collecting your IP address for
							preventive and safety measures
						</span>
						.
					</div>
				</div>
			</div>
		</section>
	);
}
