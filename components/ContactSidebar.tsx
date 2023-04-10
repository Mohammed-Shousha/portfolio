import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/portfolioData";

const ContactSidebar = () => (
  <div className="hidden md:block fixed top-0 bottom-0 left-10 w-16">
    <div className="flex flex-col justify-center justify-items-center mt-10 h-full">
      {contacts.map((contact) => (
        <Link
          key={contact.name}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3"
        >
          <Image
            src={contact.icon}
            alt={contact.name}
            width={28}
            height={28}
            className="mb-5 h-8 w-8"
          />
        </Link>
      ))}
    </div>
  </div>
);

export default ContactSidebar;
