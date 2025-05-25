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
    <div className="min-h-[calc(100vh-var(--header-height))] overflow-y-auto px-4 py-6 md:p-12 flex flex-col lg:flex-row gap-6 md:gap-12">
      <div className="flex flex-col flex-1 gap-6 md:gap-10">
        <div className="bg-white p-6 border-2 border-black flex flex-col gap-4 md:gap-4 shadow-[3px_3px_0px_0px_#CCC]">
          <h1 className="font-bold text-lg font-mono">Get involved!</h1>
          <Socials email={false} variant="contact" />
        </div>
        <div className="flex-1 bg-white p-6 border-2 border-black flex flex-col gap-4 md:gap-4 shadow-[3px_3px_0px_0px_#CCC] h-fit min-h-0">
          <h1 className="font-bold text-lg font-mono">Support us!</h1>
          <p>
            We are always on the lookout for funding! Help us bring the next
            art-tech project to life. Please reach out to{" "}
            <b>uwprism@gmail.com </b>to support the most creative engineers and
            researchers in Waterloo!
          </p>
        </div>

        <div className="flex-1 bg-white p-6 border-2 border-black flex flex-col gap-4 md:gap-4 shadow-[3px_3px_0px_0px_#CCC] h-fit min-h-0">
        <h1 className="font-bold text-lg font-mono">
            Subscribe to our Newsletter!
          </h1>
          <p>
            Hear about the latest Art tech projects, what PRISM is up to,
            workshops and get inspired by our curated Art-tech resources !
          </p>
          <div className="w-full max-w-full overflow-hidden">
    <iframe
      src="https://embeds.beehiiv.com/7da7aceb-9d28-4837-8a25-b953c661b0bf?slim=true"
      className="w-full h-20 border-none"
      title="Newsletter Subscription"
    ></iframe>
  </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-white p-6 border-2 border-black flex flex-col gap-8 shadow-[3px_3px_0px_0px_#CCC]"
      >
        <h1 className="font-bold text-lg font-mono">
          Any inquiries? Ask here!
        </h1>

        <div>
          <h3 className="font-bold ">Full Name</h3>
          <input
            type="text"
            placeholder="Mr. Goose"
            className="border-2 border-black w-full p-2 font-mono"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            required
          />
        </div>

        <div>
          <h3 className="font-bold ">Email</h3>
          <input
            type="email"
            placeholder="goose@uwaterloo.ca"
            className="border-2 border-black w-full p-2 font-mono"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="flex-1 min-h-0">
          <h3 className="font-bold ">Message</h3>
          <textarea
            placeholder="HONK HONK HONK"
            className="border-2 border-black p-2 w-full h-full resize-none font-mono"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contact-purple"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}
