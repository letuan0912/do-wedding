import ContactHero from "@/components/contact/Hero/ContactHero";
import ContactInfo from "@/components/contact/Info/ContactInfo";
import ContactForm from "@/components/contact/Form/ContactForm";
import BookingProcess from "@/components/contact/Process/BookingProcess";
import ContactFAQ from "@/components/contact/FAQ/ContactFAQ";
import ContactMap from "@/components/contact/Map/ContactMap";
import ContactCTA from "@/components/contact/CTA/ContactCTA";

export default function LienHePage() {
  return (
    <main className="bg-[#faf8f5]">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <BookingProcess />
      <ContactFAQ />
      <ContactMap />
      <ContactCTA />
    </main>
  );
}