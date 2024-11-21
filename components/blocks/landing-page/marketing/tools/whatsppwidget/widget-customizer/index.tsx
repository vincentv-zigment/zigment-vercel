import { useWhatsappWidgetContext, widget_position_values, widget_size_values } from "@/pages/tools/whatspp-widget";

 

const WidgetCustomizer  = () => { 

  const { setWidgetData, widgetData} = useWhatsappWidgetContext();
 

  return (
    <div className="p-4 md:p-8 bg-white gap-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Step 2 - Customize your widget</h2>
      <div className="mb-4">
      <div className="flex items-center">
        <label className="block text-sm font-medium mb-1">Company logo</label>
        </div>
        <input
          type="text"
          className="    px-3 py-2 pr-10 border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full sm:text-sm md:w-80 lg:w-96"
          placeholder="Insert your logo url (size 48px x 48px)"
          value={widgetData.logo}
          onChange={(e) => {
            setWidgetData({ ...widgetData, logo: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">User Name</label>
        <input
          type="text"
          className=" px-3 py-2 pr-10 border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full sm:text-sm md:w-80 lg:w-96"
          placeholder="UserName"
          value={widgetData.userName}
          onChange={(e) => {
            setWidgetData({ ...widgetData, userName: e.target.value });
          }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Greeting message</label>
        <textarea
          className=" md:w-80 lg:w-96 border-2 rounded px-3 py-2 pr-10  focus:border-brand-orange-main outline-none focus:ring-0 p-2   w-full sm:text-sm"
          placeholder="Hey, There"
          value={widgetData.greetingMessage}
          onChange={(e)=>{
            setWidgetData({ ...widgetData, greetingMessage: e.target.value });
          }}
          style={{ height: '100px' }}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Background color</label>
        <div className="relative w-full md:w-80 lg:w-96 b-1">
          <input
            type="text"
            name='backgroundColor'
            className="rounded px-3 py-2 pr-10 border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2   w-full sm:text-sm"
            placeholder="#000"
            value={widgetData.backgroundColor}
            onChange={(e)=>setWidgetData({ ...widgetData, backgroundColor: e.target.value })}
          />
          <input
            type="color"
            className="absolute inset-y-0 right-0 w-10 h-full opacity-0 cursor-pointer"
            value={widgetData.backgroundColor}
            onChange={(e)=>setWidgetData({ ...widgetData, backgroundColor: e.target.value })}
          />
          <div className="absolute inset-y-0 right-0 w-10 h-full flex items-center justify-center pointer-events-none">
            <div className="w-6 h-6 border" style={{ backgroundColor: widgetData.backgroundColor }}></div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Position</label>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label1"
                type="radio"
                name="position"
                id="left"
                className="appearance-none w-full h-full border rounded-full border-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange-main checked:border-none"
              
                checked={widgetData.position === "left"}
                onChange={() => { setWidgetData({ ...widgetData, position: widget_position_values.left }); }}
                style={{
                  borderColor: widgetData.position === "left" ? "#ff7f50" : "gray",
                  backgroundColor: widgetData.position === "left" ? "#ff7f50" : "white"
                }}
              />
            </div>
            <label htmlFor="left" className="ml-2 text-sm leading-4 font-normal text-gray-800">Left</label>
          </div>
          <div className="flex items-center">
            <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label2"
                type="radio"
                name="position"
                id="right"
                className="appearance-none w-full h-full border rounded-full border-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange-main checked:border-none"
                checked={widgetData.position === "right"}
                onChange={() => { setWidgetData({ ...widgetData, position: widget_position_values.right }); }}
                style={{
                  borderColor: widgetData.position === "right" ? "#ff7f50" : "gray",
                  backgroundColor: widgetData.position === "right" ? "#ff7f50" : "white"
                }}
              />
            </div>
            <label htmlFor="right" className="ml-2 text-sm leading-4 font-normal text-gray-800">Right</label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Chat bubble size</label>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label3"
                type="radio"
                name="size"
                id="normal"
                className="appearance-none w-full h-full border rounded-full border-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange-main checked:border-none"
                checked={widgetData.size === "normal"}
                onChange={() => { setWidgetData({ ...widgetData, size: widget_size_values.normal }); }}
                style={{
                  borderColor: widgetData.size === "normal" ? "#ff7f50" : "gray",
                  backgroundColor: widgetData.size === "normal" ? "#ff7f50" : "white"
                }}
              />
            </div>
            <label htmlFor="normal" className="ml-2 text-sm leading-4 font-normal text-gray-800">Normal</label>
          </div>
          <div className="flex items-center mr-4">
            <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label4"
                type="radio"
                name="size"
                id="small"
                className="appearance-none w-full h-full border rounded-full border-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange-main checked:border-none"
                checked={widgetData.size === "small"}
                onChange={() => { 
                  setWidgetData({ ...widgetData, size: widget_size_values.small}); 
                }}
                style={{
                  borderColor: widgetData.size === "small" ? "#ff7f50" : "gray",
                  backgroundColor: widgetData.size === "small" ? "#ff7f50" : "white"
                }}
              />
            </div>
            <label htmlFor="small" className="ml-2 text-sm leading-4 font-normal text-gray-800">Small</label>
          </div>
          <div className="flex items-center">
            <div className="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                aria-labelledby="label5"
                type="radio"
                name="size"
                id="big"
                className="appearance-none w-full h-full border rounded-full border-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange-main checked:border-none"
                checked={widgetData.size === "big"}
                onChange={() => { 
                  setWidgetData({ ...widgetData, size: widget_size_values.big });
                 }}
                style={{
                  borderColor: widgetData.size === "big" ? "#ff7f50" : "gray",
                  backgroundColor: widgetData.size === "big" ? "#ff7f50" : "white"
                }}
              />
            </div>
            <label htmlFor="big" className="ml-2 text-sm leading-4 font-normal text-gray-800">Big</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCustomizer;
