"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./RedeemForm.module.css";

type Props = {
  i18n: LocalizationString;
};

type LocalizationString = {
  redeemInstructions: string;
  redeemSuccess: string;
  redeemSubmit: string;
  setpassPlaceholder: string;
  redeemEmailPlaceholder: string;
  redeemCouponPlaceholder: string;
  setpassHint: string;
};

export default function RedeemForm({ i18n }: Props) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const resetPassword = async (event: any) => {
    event.preventDefault(); // don't redirect the page
    setLoading(true);
    const endpoint = "https://api.cutowallpaper.com/api/v2/account/redeem/";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
      coupon: event.target.coupon.value,
    };
    try {
      const res = await fetch(endpoint, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if (res.status == 200) {
        setSuccess(true);
      } else {
        let json = await res.json();
        if (Array.isArray(json)) {
          setErrors(json);
        } else {
          var errs = [];
          for (const key in json) {
            errs.push(`${key}: ${json[key]}`);
          }
          setErrors(errs);
        }
      }
    } catch (err: any) {
      setErrors([err.toString()]);
    } finally {
      setLoading(false);
    }
  };

  var content;
  if (success) {
    content = (
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/assets/success.png"
          alt="Success"
          width={80}
          height={80}
          objectFit="contain"
        />
        <div className="flex flex-col justify-center items-center mt-10">
          <p className="text-green-800 p-2">{i18n.redeemSuccess}</p>
        </div>
      </div>
    );
  } else if (loading) {
    content = <div className="">Loading...</div>;
  } else {
    content = (
      <form
        onSubmit={resetPassword}
        className="flex flex-col justify-center items-center"
      >
        <p>{i18n.redeemInstructions}</p>
        <input
          className={styles.input}
          type="email"
          id="username"
          autoComplete="off"
          placeholder={i18n.redeemEmailPlaceholder}
          required
        />
        <input
          className={styles.input}
          type="password"
          id="password"
          autoComplete="off"
          placeholder={i18n.setpassPlaceholder}
          required
        />
        <p className="text-gray-400 text-sm mt-5">{i18n.setpassHint}</p>
        <input
          className={styles.input}
          type="text"
          id="coupon"
          autoComplete="off"
          placeholder={i18n.redeemCouponPlaceholder}
          required
        />
        <button className={styles.submit} type="submit">
          {i18n.redeemSubmit}
        </button>
      </form>
    );
    var errorContent;
    if (errors) {
      errorContent = (
        <ul className="text-red-600 mt-5">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      );
    } else {
      errorContent = null;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {content}
      {errorContent}
    </div>
  );
}
