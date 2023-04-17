import Link from "next/link";
import { contacts } from "@/portfolioData";

const Contact = () => (
  <aside className="absolute bottom-0 md:fixed md:top-0 md:left-10 w-screen md:w-16">
    <div className="flex md:flex-col justify-center justify-items-center mt-10 md:h-full">
      {contacts.map((contact) => (
        <Link
          key={contact.name}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3"
        >
          <contact.icon className="mb-5 w-7 md:w-8 fill-accent hover:fill-dark dark:hover:fill-light duration-500" />
        </Link>
      ))}
    </div>
  </aside>
);

export default Contact;
