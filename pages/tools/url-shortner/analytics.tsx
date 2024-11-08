import dynamic from "next/dynamic";
import { useToast } from "@/hooks/useToast";
import axiosWithoutAuth from "@/lib/axiosAPIwithoutAuth";
import { LinkData, LinkDetails } from "@/lib/types/ui";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaChartSimple } from "react-icons/fa6";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { RiShareBoxLine } from "react-icons/ri";
import { ThreeDots } from "react-loader-spinner";

const AnalyticsPage = dynamic(() => import('@/components/blocks/landing-page/marketing/tools/urlshortner/analytics-page'));

const Test = () => {
  const router = useRouter();
  const { linkId, token } = router.query;
  const [linkData, setLinkData] = useState<LinkData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof linkId === "string" && typeof token === "string") {
      const fetchData = async () => {
        try {
          setLoading(true);
          const { data } = await axiosWithoutAuth.post(
            `https://zig.is/details/${linkId}`,
            { password: token },
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          const linkDetails: LinkDetails = {
            longUrl: data.long_url,
            totalClicks: data.total_clicks,
            details: data.details,
          };

          setLinkData({
            ...linkDetails,
            shortUrl: `https://zig.is/${linkId}`,
          });
        } catch (error) {
          setError((error as Error).message);
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [linkId, token]);

  const { addToast } = useToast();

  const copyToClipboard = useCallback(() => {
    if (linkData?.shortUrl) {
      navigator.clipboard.writeText(linkData.shortUrl);
      addToast("info", "URL link copied");
    }
  }, [linkData?.shortUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const isEmpty = !linkData || linkData.details.length === 0;

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div
          className="w-full max-w-2xl"
          style={
            isEmpty
              ? {
                  boxSizing: "border-box",
                  display: "block",
                  fontFamily: "Proxima Nova, sans-serif",
                  lineHeight: "20.8px",
                  marginBottom: "48px",
                  marginLeft: "408px",
                  marginRight: "408px",
                  marginTop: "48px",
                  maxWidth: "720px",
                  textRendering: "optimizeLegibility",
                  textSizeAdjust: "100%",
                  unicodeBidi: "isolate",
                  width: "720px",
                  WebkitFontSmoothing: "antialiased",
                  scrollbarColor: "rgb(199, 201, 203) rgb(255, 255, 255)",
                }
              : {}
          }
        >
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center">
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-2 pb-2">
                  <BiWorld className="text-blue-300" />
                  <h2 className="text-gray-900 font-sans text-[20px] font-normal leading-[28px] overflow-hidden whitespace-nowrap">
                    {linkData?.shortUrl}
                  </h2>
                </div>
                <a
                  href={linkData?.longUrl}
                  className="hover:text-blue-300 text-sm font-normal leading-[21px] overflow-hidden text-ellipsis whitespace-nowrap w-[324.9px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkData?.longUrl}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href={linkData?.shortUrl} target="_blank">
                <RiShareBoxLine className="w-5 h-5" />
              </a>
              <button onClick={copyToClipboard} className="group" title="Copy URL">
                <LuCopy className="w-5 h-5 group-focus:hidden" />
                <LuCopyCheck className="w-5 h-5 hidden group-focus:block" />
              </button>
            </div>
          </div>

          {isEmpty ? (
            <>
              <div className="p-6 text-center justify-center items-center border rounded-lg w-full flex flex-col h-80 bg-gray-100">
                {loading ? (
                  <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="text-brand-orange-main"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  <FaChartSimple className="w-28 h-28 text-gray-300" />
                )}
              </div>
              <div className="flex flex-col p-8">
                <span className="box-border text-[#212732] inline font-[proxima-nova] text-[24px] font-normal leading-[31.2px] text-center antialiased p-5 text-fontFamily-poppins">
                  Share your link and start tracking clicks.
                </span>
                <a
                  className="bg-transparent box-border text-[#1F71AE] cursor-pointer inline font-[proxima-nova] text-[15px] font-semibold leading-[19.95px] p-0 relative text-center no-underline decoration-[#1F71AE] decoration-solid decoration-auto antialiased"
                  href={linkData?.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Be the first to click
                </a>
              </div>
            </>
          ) : (
            <AnalyticsPage linkData={linkData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Test;