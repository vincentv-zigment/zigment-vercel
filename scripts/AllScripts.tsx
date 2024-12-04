import MicrosoftClarity from "./Clarity";
import FacebookScript from "./FacebookScript";
import GoogleAnalytics from "./GoogleAnalyticsScript";

const AllScripts = () => {
  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <FacebookScript />
    </>
  );
};

export default AllScripts;
