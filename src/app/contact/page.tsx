"use client";

import Button from "@/components/Button";
import Socials from "@/components/Socials";
import { FormEvent, useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent!");
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send email. Please try again");
      }
    } catch (e) {
      alert("Failed to send email. Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-12 flex gap-12 flex-1">
      <div className="flex-1 bg-white p-8 border-2 border-black flex flex-col gap-8 shadow-[3px_3px_0px_0px_#CCC]">
        <h1 className="font-bold text-lg">Support us!</h1>
        <p>Lorem ipsum yada yada</p>
      </div>
      <div className="flex flex-col flex-1 gap-12">
        <div className="bg-white p-8 border-2 border-black flex flex-col gap-8 shadow-[3px_3px_0px_0px_#CCC]">
          <h1 className="font-bold text-lg">Get involved!</h1>
          <Socials email={false} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-8 border-2 border-black flex flex-col gap-8 shadow-[3px_3px_0px_0px_#CCC]"
        >
          <h1 className="font-bold text-lg">Any inquiries? Ask here!</h1>
          <div>
            <h3>Full Name</h3>
            <input
              type="text"
              placeholder="Mr. Goose"
              className="border-2 border-black w-full p-2"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="text"
              placeholder="goose@uwaterloo.ca"
              className="border-2 border-black w-full p-2"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="flex-1">
            <h3>Message</h3>
            <textarea
              placeholder="HONK HONK HONK"
              className="border-2 border-black p-2 w-full h-full resize-none align-top"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting} variant="purple">
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
