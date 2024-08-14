import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
interface FormData {
  name: string;
  last: string;
  email: string;
  phone: string;
}

const CREATE_MEMEBER_MUTATION = gql`
  mutation createMember(
    $name: string!
    $last: string!
    $email: string!
    $phone: string!
  ) {
    createMember(data: { name: name, last: last, email: email, phone: phone }) {
      id
      name
      last
      email
      phone
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
  const [createMember, { data, loading, error }] = useMutation(
    CREATE_MEMEBER_MUTATION
  );

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createMember({ variables: { name, last, email, phone } });
    } catch (err) {
      console.log(err);
    }
  };
  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
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
