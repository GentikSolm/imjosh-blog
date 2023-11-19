"use client";
import clsx from "clsx";
import { useState } from "react";
import { toast } from "sonner";
import { env } from "~/env.mjs";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const sub = async (e: string) => {
    setIsloading(true);
    await fetch("https://api.useplunk.com/v1/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.NEXT_PUBLIC_PLUNK_PUBLIC_KEY}`,
      },
      body: JSON.stringify({
        event: "subscribed",
        email: e,
        subscribed: false,
      }),
    });
    toast.success(`Subscription link sent to ${e}`);
    setIsloading(false);
    setEmail("");
  };

  return (
    <>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        onKeyDown={(e) => e.key === "Enter" && void sub(email)}
        className="-mt-2 border-2 border-gray-600 px-2 py-2 outline-none transition-colors focus:border-orange-600 focus:ring-0 focus-visible:ring-0 disabled:opacity-50 dark:bg-neutral-800 dark:focus:border-orange-500"
        placeholder="jdoe@email.com"
      />
      <button
      onClick={() => void sub(email)}
        className={clsx(
          email.includes('.') ? "opacity-100" : "opacity-0",
          "bg-orange-600 ml-5 px-2 py-1.5 rounded-md text-neutral-800 transition-all hover:bg-orange-700 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600",
        )}
      >
        Subscribe
      </button>
    </>
  );
}
