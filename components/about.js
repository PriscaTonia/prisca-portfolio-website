import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] p-2 lg:p-0 m-auto md:grid grid-cols-3 gap-16 ">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#a3320b]">
            About
          </p>
          <h2 className="py-4">Get To Know Me Better</h2>
          <p className="py-2 text-gray-600">
            Greetings, Mortals. I am the one and only &quot;{" "}
            <b> Natural Tech Babe</b>
            &quot;, and let me make one thing clear -{" "}
            <b>I am no ordinary Front-End Developer 😎 </b>.
          </p>
          <p className="py-2 text-gray-600">
            Alright. I&apos;ll be serious now 😂. I&apos;m Prisca Onwudebelu - a
            self-proclaimed tech nerd with a love for all things software
            development. I studied Electronic and Computer Engineering, but my
            heart would always belongs to computer engineering. I mean, who
            doesn&apos;t love a good coding challenge, right?
          </p>
          <p className="py-2 text-gray-600">
            For the past two years, I&apos;ve been working towards my dream as
            being an amaizing frontend web developer. I&apos;m all about
            creating software solutions that not only look great, but actually
            solve real-life problems. You know, the kind that makes your life
            just a little bit easier. As a finalist of the HNG Internship,
            Cohort 9, I know the value of hard work and the importance of
            perseverance. It hasn&apos;t been an easy journey, but it&apos;s
            definitely been worth it.
          </p>
          <p className="py-2 text-gray-600">
            My goal is to make the world a better place, one software solution
            at a time. I&apos;m constantly learning and building on my skills
            because I want to explore other fields in software development. What
            motivates me every day is the desire to create a better life for
            myself and for the world around me. I&apos;m excited to see where
            this tech journey takes me, and I&apos;m just getting started!
          </p>
        </div>
        <div className="col-span-1 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center px-4 pt-16 pb-4 hover:scale-105 ease-in duration-300 ">
          <Image
            className="rounded-xl w-full"
            src="/assets/others/about.jpg"
            alt=""
            width="400"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
