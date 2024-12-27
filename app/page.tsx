import SplashPageFirstTime from "@/components/pages/SplashPageFirstTime";
import VerificationPage from "@/components/pages/VerificationPage";
import { cookies } from "next/headers";

export default function Page() {
	const cookieStore = cookies();
	const accessToken = cookieStore.get("access_token");
	if (!accessToken) {
		return <SplashPageFirstTime />;
	} else {
		return <VerificationPage />;
	}
}
