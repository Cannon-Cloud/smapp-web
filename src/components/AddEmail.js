import { useState } from "react";
import EmailForm from "./EmailForm";
import { toast } from "react-toastify";
import { register, newEmail } from "../actions/register";

const AddEmail = ({ history }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        email,
      });
      console.log("REGISTER USER ===> ", res);
      toast.success("Register success. Please check your email.");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
    try {
      const next = await newEmail({
        contacts: [
          {
            email: email,
          },
        ],
      });
      console.log("ADD TO LIST USER ===> ", next);
    } catch (err) {
      console.log(err);
    }
    setEmail("");
  };

  return (
    <>
      <br />
      <div className="new12-block">
        <div>Join our mailing list for Smapp Promotions</div>

        <EmailForm
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
        />
      </div>
    </>
  );
};

export default AddEmail;
