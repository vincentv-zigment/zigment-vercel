/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface QRColors {
  singleColor: string;
  gradientColor: string;
  backgroundColor: string;
}

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const EventComponent = ({ setQrValue }: Props) => {
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  useEffect(() => {
    // Construct the VEVENT string with the event details
    const veventString = `
BEGIN:VEVENT
SUMMARY:${eventTitle}
LOCATION:${eventLocation}
DTSTART:${startTime
      .replace(":", "")
      .replace("-", "")
      .replace("T", "")} // Formatting to comply with VEVENT
DTEND:${endTime.replace(":", "").replace("-", "").replace("T", "")}
END:VEVENT
`.trim();

    setQrValue(veventString); // Set the QR code value with the constructed VEVENT string
  }, [eventTitle, eventLocation, startTime, endTime]); // Dependencies

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Event Title
      </label>
      <input
        type="text"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
        className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
      />
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Location
          </label>
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Time
          </label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border-2 p-2  focus:border-primary outline-none focus:ring-0  px-2 rounded w-full mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
