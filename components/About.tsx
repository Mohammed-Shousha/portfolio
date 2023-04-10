import Image from "next/image";

const About = () => (
  <div id="about" className="mx-auto py-52 container fade-in">
    <div className="flex flex-row items-start">
      <div>
        <p className="mb-5 text-m sm:text-l md:text-xl lg:text-2xl font-normal text-accent">
          Hi, my name is
        </p>
        <h1 className="mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Mohammed Shousha.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          I'm a Software Engineer.
        </h2>
      </div>
      <Image
        src="/profile.jpg"
        alt="my profile picture"
        width={2000}
        height={2000}
        priority
        className="mx-auto my-auto rounded-full border-2 border-primary dark:border-secondary w-48 sm:w-52 md:w-80 lg:w-96"
      />
    </div>
  </div>
);

export default About;
