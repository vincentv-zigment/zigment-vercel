import LoadingAnimationWithZigLogo from "@/components/common/loaders/loading-animation-with-zig-logo";
import { OrgLevelData } from "@/components/contexts/AuthContext";
import { setCurrentOrgIdForEach } from "@/lib/axiosAPIWithAuth";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { CookieKeys } from "@/lib/static-common-data";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
export interface jwtPayload {
  email: string;
  current_org: OrgLevelData;
}

export default function LoginSuccess() {
  const router = useRouter();

  useEffect(() => {
    const { jwt, integration_redirect, app_path } = router.query;

    const exchangeToken = async (token: string | string[]) => {
      try {
        const response = await axiosWithoutAuth.post(`/users/exchange-token`, {
          token: token,
        });
        if (response.data) {
          const app_jwt_token = response.data as string;
          const jwt_token = app_jwt_token;
          const payload = JSON.parse(
            Buffer.from(jwt_token.split(".")[1], "base64").toString()
          ) as jwtPayload;

          const current_org = payload.current_org;
          if (!current_org) {
            throw new Error("No orgs found for the user");
          }

          Cookies.set(CookieKeys.ACCESS_TOKEN, app_jwt_token as string);
          Cookies.set(CookieKeys.PAYLOAD_DATA, JSON.stringify(payload));
          setCurrentOrgIdForEach(current_org.org_id);

          if (integration_redirect === "true") {
            window.location.href = "/app/setting/integrations";
          } else {
            // check if next query is valid url for http or https
            let temp_path = "/app";

            if (
              app_path &&
              app_path.length > 0 &&
              (app_path as string).startsWith("/")
            ) {
              temp_path = app_path as string;
            }
            window.location.href = temp_path;
          }
        } else {
          throw new Error("Error in exchange token");
        }
      } catch (err) {
        console.log(err);
        // window.location.href = "/signin";
      }
    };
    if (jwt) {
      exchangeToken(jwt);
    }
  }, [router]);

  // Render a loading spinner or some other placeholder content here
  return <LoadingAnimationWithZigLogo />;
}
