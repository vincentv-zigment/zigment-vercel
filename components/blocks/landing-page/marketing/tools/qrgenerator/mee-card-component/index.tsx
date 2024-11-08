/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import VCard from "vcard-creator";
import InputField from "../input-field";

export interface QRColors {
  singleColor: string;
  gradientColor: string;
  backgroundColor: string;
}

type Props = {
  setQrValue: Dispatch<SetStateAction<string>>;
};

interface FormData {
  firstName: string;
  lastName: string;
  nickName: string;
  phone1: string;
  phone2: string;
  phone3: string;
  email: string;
  website: string;
  birthday: string;
  street: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
  notes: string;
}

const MeeCardComponent = ({ setQrValue }: Props) => {
  // Other code remains the same

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    nickName: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
    website: "",
    birthday: "",
    street: "",
    zipcode: "",
    city: "",
    state: "",
    country: "",
    notes: "",
  });

  useEffect(() => {
    const myVcard = new VCard();
    myVcard.addName(formData.firstName, formData.lastName, formData.nickName);
    myVcard.addPhoneNumber(formData.phone1, "WORK");
    myVcard.addPhoneNumber(formData.phone2, "HOME");
    myVcard.addPhoneNumber(formData.phone3, "MOBILE");
    myVcard.addEmail(formData.email);
    myVcard.addURL(formData.website);
    myVcard.addBirthday(formData.birthday);
    myVcard.addNote(formData.notes);
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
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
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

export default MeeCardComponent;
