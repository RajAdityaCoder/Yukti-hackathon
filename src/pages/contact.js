import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import adarsh from "../assets/teams/Adarsh.jpeg";
import aman from "../assets/teams/Aman.jpg";
import shubham from "../assets/teams/Shubham.png";
import hardik from "../assets/teams/Hardik.jpg";
import akarshit from "../assets/teams/Akarshit.jpeg";
import anu from "../assets/teams/Anu.jpg";
import diksha from "../assets/teams/Diksha.jpg";
import sakshiM from "../assets/teams/SakshiM.jpg";
import sakshiP from "../assets/teams/SakshiP.jpg";
import kartikey from "../assets/teams/Kartikey.jpg";
import raj from "../assets/teams/Raj.jpg";
import adi from "../assets/teams/Adi.jpeg";
import shariq from "../assets/teams/shariq.jpeg";

const volunteerImages = [
  adi,
  adarsh,
  raj,
  shariq,
  hardik,
  akarshit,
  anu,
  diksha,
  sakshiM,
  sakshiP,
  kartikey,
  "",
  aman,
  shubham,
];
const Contact = () => {
  const contacts = [
    {
      name: "Aditya Raj Chaudhary",
      phone: "+91-7457918908",
      linkedin: "https://www.linkedin.com/in/aditya-raj-chaudhary-3628132a4/",
      instagram: "https://www.instagram.com/im_avraj?igsh=dWYzOTh1cjVqbGwx",
    },
    {
      name: "Adarsh Pandey",
      phone: "+91-8188885128",
      linkedin: "https://www.linkedin.com/in/adarsh-pandey-41b92126b/",
    },
    {
      name: "Raj Upadhyay",
      phone: "+91-7380892206",
      linkedin:
        "https://www.linkedin.com/in/raj-upadhyay-18b662383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/raj_upadhyay_2206?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "Md. Shariq Irshad",
      phone: "+91-8299762329",
      linkedin:
        "https://www.linkedin.com/in/mohd-shariq-irshad-972828383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/pablopeanutbar?igsh=NjQzdjJpaGR5YzJw",
    },
    {
      name: "Hardik Gupta",
      phone: "+91-8765126049",
      instagram:
        "https://www.instagram.com/awkwardlyperfect756?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    { name: "Akarshit Singh", phone: "+91-7081169191" },
    {
      name: "Anu Tiwari",
      linkedin:
        "https://www.linkedin.com/in/anu-tiwari-25a059286?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Diksha Tiwari",
      linkedin: "https://www.linkedin.com/in/diksha-tiwari-5491412b6",
      instagram:
        "https://www.instagram.com/diksha_tiwari_17?igsh=eGdmM21pNWpiNDN3",
    },
    {
      name: "Sakshi Mishra",
      linkedin: "https://www.linkedin.com/in/sakshi-mishra-44269b2b6/",
    },
    {
      name: "Sakshi Pandey",
      linkedin: "https://www.linkedin.com/in/sakshi-pandey-2050452b6/",
    },
    {
      name: "Kartikey Singh",
      phone: "+91-9532120799",
      linkedin: "https://www.linkedin.com/in/kartikeya-singh-a58005293/",
    },
    {
      name: "Yash Tiwari",
      phone: "+91-9335656501",
      linkedin: "https://www.linkedin.com/in/yash-tiwari-915a69327/",
      instagram:
        "https://www.instagram.com/yash_tiwari2324?igsh=MWlzOGUza3c5em9jNg==",
    },
    {
      name: "Aman Maurya",
      phone: "+91-7317488740",
      linkedin:
        "https://www.linkedin.com/in/aman-maurya-535546270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/official_amanmaurya?igsh=MjcxZXAzZnU3bnJn",
    },
    {
      name: "Shubham Krishna Yadav",
      phone: "+91-8470922204",
      linkedin: "https://www.linkedin.com/in/shubhamkrishna359/",
    },
  ];
  return (
    <section className="bg-black text-white px-4 py-10 min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl font-bold lg:text-4xl">
          <span className="text-[#8c52ff]">WANT TO KNOW </span>MORE?
        </h1>

        <hr className="my-4 border-gray-400" />

        <p className="text-sm lg:text-base">
          We would love to hear from you! Just ask us any questions you have.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((person, index) => (
          <ContactCard
            key={index}
            name={person.name}
            phone={person.phone}
            linkedin={person.linkedin}
            instagram={person.instagram}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const ContactCard = ({ name, phone, index, linkedin, instagram }) => (
  <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
    <img
      className="w-20 h-20 rounded-full object-cover object-top lg:w-24 lg:h-24"
      src={volunteerImages[index % volunteerImages.length]}
      alt={name}
    />

    <div>
      <p className="flex items-center gap-2 font-semibold text-white text-lg">
        {name}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            className="text-blue-400 hover:text-blue-500 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
        )}

        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} Instagram`}
            className="text-pink-400 hover:text-pink-500 transition"
          >
            <FaInstagram className="text-xl" />
          </a>
        )}
      </p>

      <p className="text-sm text-gray-300">{phone}</p>
    </div>
  </div>
);

export default Contact;
