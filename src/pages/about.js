import React from "react";
import hack from "../assets/InShot_20260204_144524301.png";

const About = () => {
  return (
    <section className="bg-black text-white px-4 py-8 lg:px-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <img src={hack} alt="hack" className="w-full max-w-3xl rounded-lg" />

        <h1 className="text-2xl font-bold text-center lg:text-4xl">
          ABOUT YUKTI 1.0
        </h1>

        <hr className="w-full border-gray-400" />

        <p className="text-sm text-center lg:text-base lg:text-left">
          YUKTI 1.0 (hackathon) is designed to evaluate real-world problem
          solving, technical execution, and collaborative development under time
          constraints. Participants work on theme-based problem statements and
          progress through three structured evaluation rounds over two days. The
          focus is on originality, live development, and practical
          implementation.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">
          ABOUT BBS College of Engineering and Technology
        </h2>

        <hr className="w-full border-gray-400" />

        <p className="text-sm text-center lg:text-base lg:text-left">
          BBS College of Engineering and Technology, Phaphamau, Prayagraj,
          India, is a premier engineering college that offers a range of
          programs in various disciplines. The college is known for its
          high-quality education, state-of-the-art infrastructure, and
          industry-relevant curriculum. It has a vibrant community of students
          who are passionate about learning and growing in their respective
          fields.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center lg:text-4xl mb-4">
          ABOUT CSI(Computer Society of India)
        </h2>

        <hr className="border-gray-400 mb-8" />

        <p className="text-sm text-center lg:text-base lg:text-left">
          CSI (Computer Society of India) is a leading organization that
          promotes computer literacy and technology in the country. It was
          founded in 1968 and has since then been a major player in the
          development of computer science and information technology. CSI works
          towards the advancement of technology by organizing various events,
          workshops, and conferences. It also provides a platform for students
          to learn and grow in the field of computer science.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center lg:text-4xl mb-4">
          ABOUT CodeVirus Security
        </h2>

        <hr className="border-gray-400 mb-8" />

        <p className="text-sm text-center lg:text-base lg:text-left">
          CodeVirus Security is a leading organization that specializes in
          providing cybersecurity solutions to businesses and individuals. It
          offers a range of services, including penetration testing, malware
          analysis, and risk assessment. The organization also provides training
          and awareness programs to its clients to help them stay protected
          against cyber threats.
        </p>
      </div>
    </section>
  );
};

export default About;
