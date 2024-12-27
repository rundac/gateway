import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
	const cookieStore = cookies();
	const clientId = process.env.DISCORD_CLIENT_ID;
	const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/callback`;
	const accessToken = cookieStore.get("access_token");

	if (!accessToken) {
		if (!clientId) {
			return NextResponse.json(
				{ error: "Discord client ID not configured" },
				{ status: 500 },
			);
		}

		const params = new URLSearchParams({
			client_id: clientId,
			redirect_uri: redirectUri,
			response_type: "code",
			scope: "guilds identify",
		});

		const discordAuthUrl = `https://discord.com/api/oauth2/authorize?${params.toString()}`;
		return NextResponse.redirect(discordAuthUrl);
	}

	const redir_url = req.nextUrl.clone();
	redir_url.pathname = "/";
	return NextResponse.redirect(redir_url);
}
