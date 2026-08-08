import { useEffect } from "react";

import ContactHero from "../components/contacts/ContactHero";
import ContactInfo from "../components/contacts/ContactInfo";
import ContactForm from "../components/contacts/ContactForm";
import GoogleMap from "../components/contacts/GoogleMap";
import ContactFAQ from "../components/contacts/ContactFAQ";
import ContactCTA from "../components/contacts/ContactCTA";

const Contact = () => {

  useEffect(() => {
  
      if (window.location.hash === "#contact-form") {
  
        setTimeout(() => {
  
          const form = document.getElementById("contact-form");
  
          if (form) {
  
            form.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
  
          }
  
        }, 100);
  
      }
  
    }, []);

  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <GoogleMap />

      <ContactFAQ />

      <ContactCTA />
    </>
  );
};

export default Contact;