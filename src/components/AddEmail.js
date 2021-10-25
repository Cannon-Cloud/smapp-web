import { useState } from "react";
import EmailForm from "./EmailForm";
import { toast } from "react-toastify";
import { register, newEmail } from "../actions/register";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddEmail = ({ history }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        email,
      });
      console.log("REGISTER USER ===> ", res);
      MySwal.fire({
        title: <p>Hello World</p>,
        footer: "Copyright 2018",
        didOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm();
        },
      }).then(() => {
        return MySwal.fire({
          title: <p>Welcome to Smapp, Look out for an email from us.</p>,
          icon: "success",
          footer: `${email} was added`,
        });
      });
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
        <br />
      </div>
    </>
  );
};

export default AddEmail;
