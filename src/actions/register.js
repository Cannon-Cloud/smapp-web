import axios from "axios";

export const register = async (email) =>
  await axios.post(`${process.env.REACT_APP_API}/promo`, email);

export const newEmail = async (email) =>
  await axios.put(`https://api.sendgrid.com/v3/marketing/contacts`, email, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
  });
