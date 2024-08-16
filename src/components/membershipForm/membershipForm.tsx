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
  const [emailError, setEmailError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmailError(null); // Clear previous error
    setFormMessage(null); // Clear any previous form message
    try {
      await createMember({ variables: { ...formData } });
      console.log("Mutation successful:", data);
      setFormData(initialFormData);
      setFormMessage(
        "Form submitted successfully! You may close the modal now."
      );
    } catch (err: any) {
      console.error("Error submitting the form:", err);
      // Check for unique constraint error
      if (
        err.graphQLErrors &&
        err.graphQLErrors[0] &&
        err.graphQLErrors[0].extensions &&
        err.graphQLErrors[0].extensions.code === "P2002"
      ) {
        const field = err.graphQLErrors[0].extensions.meta.target;
        // const field = err.graphQLErrors[0].extensions.meta.target;
        if (field.includes("email")) {
          setEmailError(
            "This email is already registered. Please use a different email."
          );
        } else {
          setFormMessage(
            `Error: The ${field} is already in use. Please use a different ${field}.`
          );
        }
      } else {
        setFormMessage("Something went wrong. Please try again.");
      }
    }
  };
  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      {loading && <p>Loading...</p>}
      {/* {error && <p style={{ color: "red" }}>Error: {error.message}</p>} */}
      {formMessage ? (
        <p className="p-5">
          {formMessage.includes("successfully") && (
            <span className="rounded-full text-emerald-400 ml-2 h-[20px] w-[20px] text-[25px]">
              ✓
            </span>
          )}
        </p>
      ) : (
        <>
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
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
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
        </>
      )}
    </form>
  );
};
export default MembershipForm;
