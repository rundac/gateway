import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
	const cookieStore = cookies();
	const accessToken = cookieStore.get("access_token");

	if (!accessToken) {
		return NextResponse.json(
			{ error: "Unauthorized" },
			{ status: 401 },
		);
	}

	try {
		const ipAddress = (
			req.headers.get("x-forwarded-for") ?? "127.0.0.1"
		).split(",")[0];

		const userResponse = await fetch(
			"https://discord.com/api/users/@me",
			{
				headers: {
					Authorization: `Bearer ${accessToken.value}`,
				},
			},
		);

		if (!userResponse.ok) {
			throw new Error("Failed to fetch user data");
		}

		const userData = await userResponse.json();

		return NextResponse.json({
			id: userData.id,
			username: userData.username,
			globalName: userData.global_name,
			pfp: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`,
			banner: userData.banner
				? `https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}.png`
				: `/dominik-scythe-p1SjJPVZPCM-unsplash.jpg`,
			address: Buffer.from(ipAddress, "utf-8").toString("hex"),
		});
	} catch (error) {
		console.error("Error fetching user data:", error);
		return NextResponse.json(
			{ error: "Failed to fetch user data" },
			{ status: 500 },
		);
	}
}
