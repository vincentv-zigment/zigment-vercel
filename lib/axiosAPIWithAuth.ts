import axios from "axios";
import { CookieKeys } from "./static-common-data";
import Cookies from "js-cookie";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getToken = () => {
  return Cookies.get(CookieKeys.ACCESS_TOKEN);
};
const isSessionStorageAvailable = () => {
  try {
    const testKey = "__test__";
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch  {
    return false;
  }
};
export const getCurrentOrgId = () => {
  if (isSessionStorageAvailable()) {
    if (sessionStorage.getItem(CookieKeys.CURRENT_ORG_ID)) {
      return sessionStorage.getItem(CookieKeys.CURRENT_ORG_ID);
    } else {
      const currOrg = Cookies.get(CookieKeys.CURRENT_ORG_ID);
      sessionStorage.setItem(CookieKeys.CURRENT_ORG_ID, currOrg as string);
      return currOrg;
    }
  }
  return Cookies.get(CookieKeys.CURRENT_ORG_ID);
};
export const setCurrentOrgIdForEach = (orgId: string) => {
  if (isSessionStorageAvailable()) {
    sessionStorage.setItem(CookieKeys.CURRENT_ORG_ID, orgId);
  }
  Cookies.set(CookieKeys.CURRENT_ORG_ID, orgId);
};
const axiosAPIWithAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
    "x-org-id": `${getCurrentOrgId()}`,
  },
});

axiosAPIWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Log the user out here
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default axiosAPIWithAuth;
