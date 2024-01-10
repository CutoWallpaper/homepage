"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./ResetForm.module.css";

type Props = {
  i18n: LocalizationString;
};

type LocalizationString = {
  resetInstructions: string;
  resetSuccess: string;
  resetPassword: string;
  setpassSuccess: string;
  setpassPlaceholder: string;
  setpassEmailPlaceholder: string;
  setpassHint: string;
};

export default function ResetForm({ i18n }: Props) {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const withToken = token !== null && token !== undefined;

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const resetPassword = async (event: any) => {
    event.preventDefault(); // don't redirect the page
    setLoading(true);
    const endpoint = withToken
      ? "https://api.cutowallpaper.com/api/v2/account/password/reset/confirm/"
      : "https://api.cutowallpaper.com/api/v2/account/password/reset/";
    const data = withToken
      ? {
          token: token,
          password: event.target.password.value,
        }
      : {
          email: event.target.email.value,
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
        setErrors(["We couldn't reset your password. Please try again."]);
      }
    } catch (err: any) {
      setErrors([err.toString()]);
    } finally {
      setLoading(false);
    }
  };

  var content;
  if (success) {
    const instruction = withToken ? null : (
      <p className="text-green-800 p-2">{i18n.resetInstructions}</p>
    );
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
          <p className="text-green-800 p-2">
            {withToken ? i18n.setpassSuccess : i18n.resetSuccess}
          </p>
          {instruction}
        </div>
      </div>
    );
  } else if (loading) {
    content = <div className=""></div>;
  } else {
    const input = withToken ? (
      <div className="flex flex-col items-center">
        <input
          className={styles.input}
          type="password"
          id="password"
          autoComplete="off"
          placeholder={i18n.setpassPlaceholder}
          required
        />
        <p className="text-gray-800 text-sm mt-5">{i18n.setpassHint}</p>
      </div>
    ) : (
      <input
        className={styles.input}
        type="email"
        id="email"
        autoComplete="off"
        placeholder={i18n.setpassEmailPlaceholder}
        required
      />
    );
    content = (
      <form
        onSubmit={resetPassword}
        className="flex flex-col justify-center items-center"
      >
        {input}
        <button className={styles.submit} type="submit">
          {i18n.resetPassword}
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
    // <Layout title={t("resetPassword")}>
    <div className="flex flex-col justify-center items-center">
      {content}
      {errorContent}
    </div>
    // </Layout>
  );
}
