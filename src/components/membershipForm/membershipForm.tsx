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

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  // const [emailMessage, setEmailMessage] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clearing the error message for the field being edited
    setErrors({ ...errors, [name]: null });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormMessage(null);

    try {
      await createMember({ variables: { ...formData } });
      console.log("Mutation successful:", data);
      setFormData(initialFormData);
      // setEmailMessage("");
      setFormMessage(
        "Form submitted successfully, you may close dialogue now ✓"
      );
    } catch (err: any) {
      // Process and display error messages
      const fieldErrors: { [key: string]: string } = {};
      if (!/^[a-zA-Z]+$/.test(formData.name)) {
        fieldErrors.name = "First name must contain only letters.";
      }
      if (!/^[a-zA-Z]+$/.test(formData.last)) {
        fieldErrors.last = "Last name must contain only letters.";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        fieldErrors.email = "Please enter a valid email.";
      }
      if (!/^[0-9]+$/.test(formData.phone)) {
        fieldErrors.phone = "Please enter only numbers";
      }

      if (Object.keys(fieldErrors).length > 0) {
        setErrors(fieldErrors);
        return; // Stop form submission if there are front-end validation errors
      }
      if (err.graphQLErrors) {
        err.graphQLErrors.forEach((error: any) => {
          const message = error.message;
          if (message.includes("EMAIL_EXISTS")) {
            fieldErrors.email =
              "Email is already in use. Please use a different email.";
          } else if (message.includes("name must contain only letters")) {
            fieldErrors.name = "First name must contain only letters.";
          } else if (message.includes("last must contain only letters")) {
            fieldErrors.last = "Last name must contain only letters.";
          } else {
            // Generic error message for other fields
            fieldErrors.form =
              "An unexpected error occurred. Please try again.";
          }
        });
      } else {
        fieldErrors.form = "An unexpected error occurred. Please try again.";
      }

      setErrors(fieldErrors);
    }
  };
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setFormMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      {loading && <p>Loading...</p>}
      {formMessage && <p className="text-emerald-500 p-2 ">{formMessage}</p>}
      {errors.form && <p className="text-red-500 p-2">{errors.form}</p>}

      <div className="flex lg:flex-row gap-4 w-full items-center flex-col">
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
          {errors.name && <p className="text-rose-500">{errors.name}</p>}
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
          {errors.last && <p className="text-rose-500">{errors.last}</p>}
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
        {errors.email && <p className="text-rose-500">{errors.email}</p>}
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
        {errors.phone && <p className="text-rose-500">{errors.phone}</p>}
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
