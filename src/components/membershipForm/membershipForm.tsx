import React, { useState } from "react";
interface FormData {
  name: string;
  last: string;
  email: string;
  phone: string;
}
const MembershipForm: React.FC = () => {
  const initialFormData: FormData = {
    name: "",
    last: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Perform further actions, such as sending data to a server
  };
  const hanldeReset = () => {
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
          className="border-2 p-2 w-1/2 hover:bg-emerald-400 hover:text-white"
        >
          Submit
        </button>
        <button
          type="reset"
          className="border-2 p-2 w-1/2 hover:bg-rose-400 hover:text-white"
          onClick={hanldeReset}
        >
          Reset all
        </button>
      </div>
    </form>
  );
};
export default MembershipForm;
