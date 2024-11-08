import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const EmailComponent = ({ setQrValue }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const qrLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    setQrValue(qrLink);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, subject, message]);

  return (
    <div>
      <label className="block font-bold text-sm mb-2 cursor-default text-gray-500">
        Your Email
      </label>
      <input
        className="border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full "
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full  mt-4"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="border-2 focus:border-brand-orange-main outline-none focus:ring-0 p-2 rounded w-full  mt-4"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />
    </div>
  );
};

export default EmailComponent;
