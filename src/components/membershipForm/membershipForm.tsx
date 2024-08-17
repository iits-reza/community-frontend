import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
interface FormData {
  name: string;
  last: string;
  email: string;
  phone: string;
}

const CREATE_MEMEBER_MUTATION = gql`
  mutation Createmember(
    $name: String!
    $last: String!
    $phone: String!
    $email: String!
  ) {
    createmember(
      data: { name: $name, last: $last, phone: $phone, email: $email }
    ) {
      id
      name
      last
      phone
      email
    }
  }
`;

const MembershipForm: React.FC = () => {
  const initialFormData: FormData = {
    name: "",
    last: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [createMember, { data = formData, loading, error }] = useMutation(
    CREATE_MEMEBER_MUTATION
  );

  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [emailMessage, setEmailMessage] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmailMessage(null);

    try {
      await createMember({ variables: { ...formData } });
      console.log("Mutation successful:", data);
      setFormData(initialFormData);
      setEmailMessage("");
      setFormMessage(
        "Form submitted successfully, you may close dialogue now ✓"
      );
    } catch (err: any) {
      // console.error("Error submitting the form:", err);
      // Check for unique constraint error
      if (err.message.includes("EMAIL_EXISTS")) {
        setEmailMessage(
          "Email is already in use. Please use a different email."
        );
        setFormMessage("");
      } else {
        setEmailMessage("An unexpected error occurred. Please try again.");
        setFormMessage("");
      }
      // setEmailMessage(null);
    }
  };
  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      {loading && <p>Loading...</p>}
      {formMessage && <p className="text-emerald-500 p-2 ">{formMessage}</p>}

      <div className="flex flex-row gap-4 w-full items-center">
        <label className="flex flex-col w-full">
          <span className=" text-rose-700 mb-2">
            <b className="text-black">First name:</b> *
          </span>
          <input
            className="border-2 p-2"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col w-full">
          <span className=" text-rose-700 mb-2">
            <b className="text-black">Last name:</b> *
          </span>
          <input
            className="border-2 p-2"
            type="text"
            name="last"
            id="last"
            value={formData.last}
            onChange={handleChange}
          />
        </label>
      </div>
      <label className="flex flex-col w-full">
        <span className=" text-rose-700 mb-2">
          <b className="text-black">Email:</b> *
        </span>
        <input
          className="border-2 p-2"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {emailMessage && <p className="text-red p-2">{emailMessage}</p>}
      </label>
      <label className="flex flex-col w-full">
        <span className=" text-rose-700 mb-2">
          <b className="text-black">Phone number:</b> *
        </span>
        <input
          className="border-2 p-2"
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <div className="flex flex-row gap-3 w-full">
        <button
          type="submit"
          onClick={handleSubmit}
          className="border-2 p-2 w-1/2 hover:bg-emerald-400 hover:text-white"
        >
          Submit
        </button>
        <button
          type="reset"
          className="border-2 p-2 w-1/2 hover:bg-rose-400 hover:text-white"
          onClick={handleReset}
        >
          Reset all
        </button>
      </div>
    </form>
  );
};
export default MembershipForm;
