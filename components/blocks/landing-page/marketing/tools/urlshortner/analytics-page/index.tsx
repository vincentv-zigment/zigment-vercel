import { LinkData } from "@/lib/types/ui";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { countryToAlpha2 } from "country-to-iso";


const WorldMap1 = dynamic(() => import("../world-map"), { ssr: false });

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const getPreviousHours = () => {
  const hours = [];
  const currentDate = new Date();
  currentDate.setMinutes(0, 0, 0); // Normalize minutes and seconds to zero
  for (let i = 0; i < 24; i++) {
    const d = new Date(currentDate.getTime() - i * 60 * 60 * 1000);
    hours.unshift(
      d
        .toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: true,
        })
        .replace(/:\d{2}\s/, ":00 ")
    );
  }
  return hours; // Returns from oldest to newest without reversing
};

const getPreviousDays = (days: number) => {
  const result = [];
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Normalize hours, minutes, and seconds to zero
  for (let i = 0; i < days; i++) {
    const d = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
    result.unshift(
      d.toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        timeZone: "Asia/Kolkata",
      })
    );
  }
  return result; // Returns from oldest to newest without reversing
};

const getPreviousMonths = () => {
  const months = [];
  const currentDate = new Date();
  currentDate.setDate(1); // Normalize to the first day of the month

  // Include the current month first, then go back from there
  for (let i = 0; i < 12; i++) {
    const d = new Date(currentDate); // Clone currentDate to avoid mutating it prematurely
    months.unshift(
      d.toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      })
    );
    currentDate.setMonth(currentDate.getMonth() - 1); // Now decrement the month
  }

  return months; // Returns from current month to the previous 11 months
};

const areDatesEqual = (
  labelTimeFram: string,
  dataDate: Date,
  timeFrame: "days" | "hours" | "months"
) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let labelDate;
  if (timeFrame === "hours") {
    labelDate = new Date(moment(labelTimeFram, "h:mm a").toString());
    dataDate.setMinutes(0, 0, 0);
  }

  if (timeFrame === "days") {
    const currentYear = new Date().getFullYear();

    // Parse the date string "9 MAY"

    const day = +labelTimeFram.split(" ")[0]; // Assuming the day is always correct
    const monthName = labelTimeFram.split(" ")[1];
    const month = monthNames.indexOf(monthName); // This will give 4 for MAY

    // Create a Date object for May 9th of the current year
    labelDate = new Date(currentYear, month, day);
    dataDate.setHours(0, 0, 0, 0);
  }

  if (timeFrame === "months") {
    const dateString = labelTimeFram;

    // Split the string into components
    const [monthName, year] = dateString.split(" ");

    // List of month names to convert month name to month number

    const monthIndex = monthNames.indexOf(monthName); // This will give 0 for Jan

    // Create a Date object for January 1st of 2024
    labelDate = new Date(parseInt(year, 10), monthIndex, 1);
    dataDate.setDate(1);
    dataDate.setHours(0, 0, 0);
  }

  return dataDate.toString() === labelDate?.toString();
};

interface ClicksData {
  hours: number[];
  days: number[];
  months: number[];
}

interface Props {
  linkData: LinkData;
}

const AnalyticsPage: React.FC<Props> = ({ linkData }) => {
  const [timeFrame, setTimeFrame] = useState<"hours" | "days" | "months">("months");
  const [clicks, setClicks] = useState<ClicksData>({ hours: [], days: [], months: [] });
  const [showMap, setShowMap] = useState(false);
  const [highlightedCountries1, setHighlightedCountries1] = useState<
    { country: string; value: number }[]
  >([]);

  useEffect(() => {
    const dateTimes = linkData.details;
    const countries2: { [key: string]: number } = {};

    linkData.details.forEach((detail) => {
      countries2[detail.country] = (countries2[detail.country] ?? 0) + 1;
    });

    const days = new Array(labels[timeFrame].length).fill(0).map((x, i) => {
      dateTimes.forEach((element) => {
        const dataDate = moment.unix(element.unix_timestamp).toDate();
        if (areDatesEqual(labels[timeFrame][i], dataDate, timeFrame)) x++;
      });
      return x;
    });

    setClicks({ ...clicks, [timeFrame]: days });
    setHighlightedCountries1(
      Object.entries(countries2).map(([country, value]: [string, number]) => {
        return {
          country: countryToAlpha2(country)?.toLowerCase() ?? "",
          value,
        };
      })
    );
  }, [linkData, timeFrame]);

  const labels = {
    hours: getPreviousHours(),
    days: getPreviousDays(30),
    months: getPreviousMonths(),
  };

  const chartData = {
    labels: labels[timeFrame],
    datasets: [
      {
        label: "Total Clicks",
        data: clicks[timeFrame],
        backgroundColor: "rgb(255, 101, 89)",
        borderColor: "#ADD8E6",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          callback: function (value: string | number) {
            return Number.isInteger(value) ? value : null;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Clicks Analytics",
      },
    },
  };

  return (
    <>
      <div className="p-6 text-center justify-center border rounded-lg shadow-sm w-full flex flex-col h-[360px] bg-[#f9f9fa]">
        <div className="flex justify-between items-center w-full mb-4">
          <div className="text-left">
            <p className="text-xs font-semibold text-gray-600">Total clicks</p>
            <p className="text-indigo-500 font-bold">{linkData.totalClicks}</p>
          </div>
          <div className="flex justify-end border rounded-full p-1 text-sm font-medium items-center">
            <button
              onClick={() => setTimeFrame("hours")}
              className={`${
                timeFrame === "hours"
                  ? "bg-brand-orange-main text-white"
                  : "hover:text-brand-orange-main"
              } btn px-4 py-1.5 rounded-full`}
            >
              Hours
            </button>
            <button
              onClick={() => setTimeFrame("days")}
              className={`${
                timeFrame === "days"
                  ? "bg-brand-orange-main text-white"
                  : "hover:text-brand-orange-main"
              } btn px-4 py-1.5 rounded-full`}
            >
              Days
            </button>
            <button
              onClick={() => setTimeFrame("months")}
              className={`${
                timeFrame === "months"
                  ? "bg-brand-orange-main text-white"
                  : "hover:text-brand-orange-main"
              } btn px-4 py-1.5 rounded-full`}
            >
              Months
            </button>
          </div>
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <Bar data={chartData} options={options} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <button
          type="button"
          className="inline-flex items-center justify-center appearance-button bg-transparent border border-solid border-blue-700 text-blue-700 cursor-pointer text-center font-sans font-semibold text-sm leading-none h-[35.6px] w-[159.575px] p-[7.5px_24px] rounded-full"
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? "Show more stats" : "Show more stats"}
        </button>
        {showMap && (
          <div className="w-full flex justify-center">
            <WorldMap1 data={highlightedCountries1} linkData={linkData} />
          </div>
        )}
      </div>
    </>
  );
};

export default AnalyticsPage;