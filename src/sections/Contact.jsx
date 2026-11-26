import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactInfo } from "./contactInfo";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: real visitors never fill this hidden field, bots usually do.
    if (e.currentTarget.elements.website?.value) return;

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS env vars missing: set VITE_EMAILJS_* on your host and rebuild.");
        throw new Error("CONFIG");
      }

      await emailjs.send(
        serviceId,
        templateId,
        { name: formData.name, email: formData.email, message: formData.message, title: "Website Contact Form" },
        publicKey,
      );

      setSubmitStatus({ type: "success", message: "Message sent successfully! I’ll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: `Sorry, the message couldn’t be sent right now. Please email me directly at ${contactInfo[0].value} and I’ll reply soon.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const update = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  return (
    <form className="studio-contact-form" onSubmit={handleSubmit} aria-label="Send me a message">
      <div className="cf-row">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" autoComplete="name" required value={formData.name} onChange={update("name")} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email" required value={formData.email} onChange={update("email")} placeholder="you@example.com" />
        </div>
      </div>

      <div aria-hidden="true" className="cf-honeypot">
        <label htmlFor="website">Leave this field empty</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea rows={5} id="message" required value={formData.message} onChange={update("message")} placeholder="Tell me about your idea or project..." />
      </div>

      <button type="submit" className="studio-contact-main" disabled={isLoading}>
        {isLoading ? "Sending…" : <>Send message <Send size={18} /></>}
      </button>

      {submitStatus.type && (
        <div role="status" aria-live="polite" className={`cf-status ${submitStatus.type}`}>
          {submitStatus.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <p>{submitStatus.message}</p>
        </div>
      )}
    </form>
  );
};
