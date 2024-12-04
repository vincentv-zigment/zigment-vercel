import PhoneNumberInput from "@/components/common/inputs/phone-number-input/number-input";
import { useWhatsappWidgetContext } from "@/pages/tools/whatspp-widget";

const WhatsAppWidgetForm = () => {
  const { errorState, widgetData, setWidgetData } = useWhatsappWidgetContext();

  return (
    <div className="p-4 md:p-8 bg-white gap-4 mb-4 rounded-lg">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Step 1 - Fill the WhatsApp Widget Form
      </h2>
      <div className="mb-4">
        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-700 mb-1 mr-4">
            WhatsApp
          </label>
        </div>
        <div className="relative w-full md:w-80 lg:w-96">
          {/* add country code selection */}

          <div className="flex items-center gap-2">
            <PhoneNumberInput
              className={`px-3 py-2 pr-10 border-2  ${
                errorState.phoneNumber
                  ? "border-red-500"
                  : "focus:border-brand-orange-main"
              }  outline-none focus:ring-0 p-2 rounded w-full`}
              setPhoneCode={(val) => {
                setWidgetData({
                  ...widgetData,
                  countryCode: val,
                });
              }}
              state={widgetData.phoneNumber}
              setState={(val) => {
                setWidgetData({
                  ...widgetData,
                  phoneNumber: val,
                });
              }}
            />
          </div>
        </div>

        {errorState && (
          <p className="text-red-500 text-sm mt-1">{errorState.phoneNumber}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          WhatsApp pre-filled message (optional)
        </label>
        <div className="relative w-full md:w-80 lg:w-96">
          <input
            type="text"
            value={widgetData.message}
            onChange={(e) => {
              setWidgetData({ ...widgetData, message: e.target.value });
            }}
            className="  px-3 py-2 pr-10  border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full sm:text-sm"
            placeholder="Hey there"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidgetForm;
