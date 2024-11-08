/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import VCard from "vcard-creator";
import InputField from "../input-field";
 

interface FormData {
  firstName: string;
  lastName: string;
  organization: string;
  position: string;
  phoneWork: string;
  phonePrivate: string;
  phoneMobile: string;
  faxWork: string;
  faxPrivate: string;
  email: string;
  street: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
}

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

const VcardComponent = ({ setQrValue }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    organization: "",
    position: "",
    phoneWork: "",
    phonePrivate: "",
    phoneMobile: "",
    faxWork: "",
    faxPrivate: "",
    email: "",
    street: "",
    zipcode: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    const myVcard = new VCard();
    myVcard.addName(formData.lastName, formData.firstName);
    myVcard.addCompany(formData.organization);
    myVcard.addRole(formData.position);
    myVcard.addPhoneNumber(formData.phoneWork, "WORK");
    myVcard.addPhoneNumber(formData.phonePrivate, "HOME");
    myVcard.addPhoneNumber(formData.phoneMobile, "MOBILE");
    myVcard.addEmail(formData.email);
    myVcard.addAddress(
      "",
      formData.street,
      "",
      formData.city,
      formData.state,
      formData.zipcode,
      formData.country
    );
    setQrValue(myVcard.toString());
  }, [formData]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.keys(formData).map((key) => (
        <InputField
          key={key}
          label={key.replace(/([A-Z])/g, " $1").trim()} // Add space before capital letters
          value={formData[key as keyof FormData]}
          onChange={(e) =>
            handleInputChange(key as keyof FormData, e.target.value)
          }
        />
      ))}
    </div>
  );
};

export default VcardComponent;
