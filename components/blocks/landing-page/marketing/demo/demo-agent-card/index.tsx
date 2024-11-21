import {
  demoDataType,
  link_title,
} from "@/components/sections/marketing/demo/demo-agent-section";
import React, { Dispatch, SetStateAction } from "react";
import DemoAgentLink from "../demo-agent-link";

type Props = {
  demo: demoDataType;
  chatBoxAlreadyOpen: boolean;
  ignoreForm: boolean;
  setShowDemoForm: Dispatch<SetStateAction<boolean>>;
  handleDemoFormOpenForSkip: (channel: string, url: string) => void;
  setSelectedChannelLink: Dispatch<SetStateAction<string | null>>;
  setSelectedChannel: Dispatch<SetStateAction<link_title | null>>;
};

const DemoAgentCard = ({
  demo,
  chatBoxAlreadyOpen,
  ignoreForm,
  setShowDemoForm,
  handleDemoFormOpenForSkip,
  setSelectedChannelLink,
  setSelectedChannel,
}: Props) => {
  return (
    <div
      className="demo-agent-card space-y-4  border rounded-xl md:rounded-3xl border-gray-100 bg-white drop-shadow p-6  md:p-8     "
      id={`demo_key_${demo.title}`}
    >
      <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl pb-2">
        {demo.title}
      </h3>
      <p id="description" className="text-gray-900 font-sans font-medium text-sm md:text-base">{demo.description}</p>
      {demo.note && (
        <p className="text-xs md:text-sm text-gray-600 font-sans">
          <strong className="">Note </strong> :{" "}
          <span className="italic demo-note " id="note">{demo.note}</span>
        </p>
      )}
      <div className="pt-6">
        <p className="font-semibold text-sm text-brand-orange-main uppercase">
          Try this demo on
        </p>
        <div id="demo-links" className="flex flex-wrap items-center gap-4 mt-4">
          {demo.links.map((link, i) => {
            return (
              <DemoAgentLink
                link={link}
                key={`link_key_${link.title}_${i}`}
                onClick={() => {
                  if (chatBoxAlreadyOpen) {
                    alert(
                      "To try another demo, We need to refresh the page. Please wait for a moment..."
                    );
                    window.location.reload();
                  }
                  if (ignoreForm) {
                    handleDemoFormOpenForSkip(link.title, link.url);
                  } else {
                    setSelectedChannelLink(link.url);
                    setShowDemoForm(true);
                    setSelectedChannel(link.title);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoAgentCard;
