import ErrorBoundary from "@/components/common/error-boundary";
import Footer from "@/components/common/layout/footer";
import Header from "@/components/common/layout/header";
import LandingPageLayout from "@/components/common/layout/landing-page-layout";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ScrollTop from "@/components/tools/scroll-top";
import ToastContainer from "@/hooks/ToastContainer";
import { TooltipProvider } from "@/hooks/TooltipContext";
import { ToastProvider } from "@/hooks/useToast";
import AllScripts from "@/scripts/AllScripts";
import "@/styles/globals.css";
import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
    mutations: {
      onError: (error) => {
        console.log(error);
      },
    },
  },
});

declare global {
  interface Window {
    dataLayer: any;
    gtag: any;
  }
}

// Function to send page views to Google Analytics
const trackPageView = (url: string, title: string) => {
  if (window && window.gtag) {
    window.gtag("config", `${process.env.NEXT_PUBLIC_G_TAG_ID}`, {
      page_path: url,
      // Optionally set page_title if a title argument is provided
      ...(title && { page_title: title }),
    });
  }
};
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noAuthRoutes = [
    "/terms-of-service",
    "/privacy-policy",
    "/refund-policy",
  ];

  useEffect(() => {
    // Track initial page load
    // Track initial page load
    trackPageView(router.asPath, document.title ?? `Zigment AI - Page`);

    // Track subsequent page views
    const handleRouteChange = () => {
      trackPageView(router.asPath, document.title ?? `Zigment AI - Page`);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, router.asPath]);

  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <style jsx global>
          {`
            :root {
              --font-montserrat: ${montserrat.style.fontFamily};
            }
          `}
        </style>
        <ToastProvider>
          {process.env.NEXT_PUBLIC_APP_ENV === "PROD" && <AllScripts />}
          <ErrorBoundary>
            <LandingPageLayout>
              <Component {...pageProps} />
            </LandingPageLayout>
              
          </ErrorBoundary>
          <ToastContainer />
        </ToastProvider>
      </QueryClientProvider>
    </TooltipProvider>
  );
}
