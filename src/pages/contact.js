import React from "react";

const Contact = () => {
  return (
    <section className="bg-black text-white px-4 py-10 min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl font-bold lg:text-4xl">WANT TO KNOW MORE?</h1>

        <hr className="my-4 border-gray-400" />

        <p className="text-sm lg:text-base">
          We would love to hear from you! Just ask us any questions you have.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContactCard name="Adarsh Pandey" phone="+91-8188885128" />
        <ContactCard name="Aditya Raj Chaudhary" phone="+91-7457918908" />
        <ContactCard name="Raj Upadhyay" phone="+91-7380892206" />
        <ContactCard name="Md. Shariq Irshad" phone="+91-8299762329" />
        <ContactCard name="Hardik Gupta" phone="+91-8765126049" />
      </div>
    </section>
  );
};

const ContactCard = ({ name, phone }) => (
  <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
    <img
      className="w-20 h-20 rounded-full object-cover lg:w-24 lg:h-24"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
      alt={name}
    />

    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-300">{phone}</p>
    </div>
  </div>
);

export default Contact;
