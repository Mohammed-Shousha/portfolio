import Link from "next/link";
import { contacts } from "@/portfolioData";

const ContactSidebar = () => (
  <aside className="hidden md:block fixed top-0 bottom-0 left-10 w-16">
    <div className="flex flex-col justify-center justify-items-center mt-10 h-full">
      {contacts.map((contact) => (
        <Link
          key={contact.name}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3"
        >
          <contact.icon className="mb-5 w-8 fill-accent hover:fill-dark dark:hover:fill-light duration-500" />
        </Link>
      ))}
    </div>
  </aside>
);

export default ContactSidebar;
