import DemoAgentCard from "@/components/blocks/landing-page/marketing/demo/demo-agent-card";
import DemoForm from "@/components/blocks/landing-page/marketing/demo/demo-form";
import ChatBotV2 from "@/components/common/chatbot-v2";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export enum link_title {
  Whatsapp = "Whatsapp",
  Instagram = "Instagram",
  Messenger = "Messenger",
  SMS = "SMS",
  Webchat = "Webchat",
}

export const iconsurl = {
  [link_title.Whatsapp]: "https://cdn.zigment.ai/assets/WhatsApp.svg.webp",
  [link_title.Instagram]:
    "https://cdn.zigment.ai/assets/Instagram_logo_2016.svg",
  [link_title.Messenger]:
    "https://cdn.zigment.ai/assets/1708945988-Facebook_Messenger_logo_2020.svg",
  [link_title.SMS]: "/logos/pngwing.com.png",
  [link_title.Webchat]: "https://cdn.zigment.ai/assets/1710495117-web_chat.png",
};

export type demo_link = {
  title: link_title;
  url: string;
};

export type demoDataType = {
  title: string;
  description: string;
  note?: string;

  links: demo_link[];
};

const DemoAgentSection = () => {
  const [webchat_id, setWebchatId] = useState<string | null>(null);
  const [openWebchat, setOpenWebchat] = useState(false);
  const [chatBoxAlreadyOpen, setChatBoxAlreadyOpen] = useState(false);
  const router = useRouter();
  const [selectedChannel, setSelectedChannel] = useState<link_title | null>(
    null
  );
  const [selectedChannelLink, setSelectedChannelLink] = useState<string | null>(
    null
  );
  const [ignoreForm, setIgnoreForm] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleDemoFormOpenForSkip = (channel: string, url: string) => {
    if (channel === link_title.Webchat) {
      setWebchatId(process.env.NEXT_PUBLIC_APP_ENV==='STAGING' ? `zP9jqorUG3-${process.env.NEXT_PUBLIC_APP_ENV}` : url);
      setOpenWebchat(true);
      setChatBoxAlreadyOpen(true);
      setShowDemoForm(false);
    } else {
      if (url) {
        window.location.href = url;
      } else {
        alert("Invalid link");
      }
    }
    setShowDemoForm(false);
  };
  const handleDemoOpenAfterForm = () => {
    if (selectedChannel === link_title.Webchat) {
      setWebchatId(selectedChannelLink);

      setOpenWebchat(true);
      setChatBoxAlreadyOpen(true);
      setShowDemoForm(false);
    } else {
      if (selectedChannelLink) {
        window.location.href = selectedChannelLink;
      } else {
        alert("Invalid link");
      }
    }
    setShowDemoForm(false);
  };
  useEffect(() => {
    // check if skip_form is present as query param
    if (
      (router.query.skip_form && router.query.skip_form === "1") ||
      router.query.skip_form === "true" ||
      router.query.skip_form === "yes"
    ) {
      setIgnoreForm(true);
    }
  }, [router.query]);

  return (
    <>
      <section
        id="demo-agent-section"
        className="w-full max-w-7xl mx-auto px-1 sm:px-4 text-left"
      >
        <div className="w-full max-w-4xl mx-auto">
          <div className="space-y-6 mt-6 divide-y-2">
            {demoData.map((demo) => {
              return (
                <DemoAgentCard
                  key={`demo_card_${demo.title}`}
                  demo={demo}
                  chatBoxAlreadyOpen={chatBoxAlreadyOpen}
                  ignoreForm={ignoreForm}
                  setShowDemoForm={setShowDemoForm}
                  handleDemoFormOpenForSkip={handleDemoFormOpenForSkip}
                  setSelectedChannelLink={setSelectedChannelLink}
                  setSelectedChannel={setSelectedChannel}
                />
              );
            })}
          </div>
        </div>
      </section>
      {showDemoForm && selectedChannelLink && (
        <DemoForm
          selectedChannel={selectedChannel}
          selectedChannelLink={handleDemoOpenAfterForm}
          setShowDemoForm={setShowDemoForm}
          showDemoForm={showDemoForm}
        />
      )}
      {openWebchat && webchat_id && (
        <ChatBotV2
          widget_id={webchat_id}
          skip_cookie={false}
          init={true}
          absolute
        />
      )}
    </>
  );
};

export default DemoAgentSection;

export const demoData: demoDataType[] = [
  {
    title: `Zigment’s AI Agent`,
    description:
      "In this demo, you will be interacting with Zig, an AI agent, representing Zigment as a sales executive. He will try to engage you like a sales executive and pitch Zigment’s offerings.",
    note: "The meeting booked on the calendar with this demo is a real meeting. So we hope to talk with you in person soon :)",
    links: [
      {
        title: link_title.Webchat,
        url: `zP9jqorUG3-${process.env.NEXT_PUBLIC_APP_ENV}`,
      },
      {
        title: link_title.Whatsapp,
        url: "https://wa.me/14159808513?text=Hi%20I%20am%20interested.%20Please%20tell%20me%20more!",
      },
      {
        title: link_title.Instagram,
        url: "https://ig.me/m/zigment.ai",
      },
      {
        title: link_title.Messenger,
        url: "https://fb.me/zigment",
      },
      {
        title: link_title.SMS,
        url: "sms:+14159808513;?body=Hi%20I%20am%20interested.%20Please%20tell%20me%20more!",
      },
    ],
  },
  {
    title: `IVF & Fertility Clinic`,
    description:
      "In this demo, you will be interacting with Sara, an AI agent representing a company called Acme IVF (a dummy organization), as a sales executive. She will handle your enquiry and try to schedule an introductory consultation with the relevant expert.",
    note: "Acme operates in California. You will need to provide your address within this region to proceed with booking the consultation. The interested party must be over 18 years of age to avail any of the services.",
    links: [
      {
        title: link_title.Webchat,
        url: "6eoqfc",
      },
      {
        title: link_title.Instagram,
        url: "https://www.instagram.com/acmeivf/",
      },
    ],
  },
  {
    title: "HVAC & Plumbing Services",
    description:
      "In this demo, you will be interacting with Olivia, an AI agent representing Acme HVAC & Plumbing (a dummy organization), as a sales executive. She will handle your enquiry and try to schedule a home visit by one of the agents of the company.",
    note: "Acme operates in a 50-mile radius around Boston. So you will need to provide your address within this region to qualify for a home visit.",
    links: [
      {
        title: link_title.Webchat,
        url: "A84KIP",
      },
    ],
  },
  {
    title: "Yoga Coach & Wellness",
    description:
      "In this demo, you will be interacting with Rhea who is an AI agent, and will represent her own company called ZenVedic (a dummy organization)  as an owner and a certified Yoga coach. She will handle your enquiry and try to schedule an introductory consultation with herself.",
    note: "Acme operates in California. So you will need to provide your address within this region to proceed with booking the consultation. Also the interested party will need to be over 21 years of age to avail any of the services.",
    links: [
      {
        title: link_title.Webchat,
        url: "wuepjx",
      },
    ],
  },
  {
    title: "Hotel Concierge",
    description:
      "In this demo, you will be interacting with Charon, who is an AI agent and will represent as a concierge at The Continental, Marylebone (a dummy hotel). He will handle all of the inquiries of the guests and can help the customers book a room for them.",
    links: [
      {
        title: link_title.Webchat,
        url: "WbuNdO",
      },
    ],
  },
];
