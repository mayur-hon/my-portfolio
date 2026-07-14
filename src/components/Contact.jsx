import React, { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "ec7d64aa-1e41-4551-adb8-61499d6c4d0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      alert("Message sent successfully!");
      formRef.current.reset();
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-xl">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="text-gray-600">I am open to new opportunities.</p>
            <p className="font-bold">📧 mayurhon08@gmail.com</p>
          </div>
          <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
            <input name="name" required placeholder="Your Name" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
            <input name="email" required placeholder="Your Email" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none" />
            <textarea name="message" required placeholder="Your Message" className="w-full p-4 border rounded-lg h-32 focus:ring-2 focus:ring-blue-600 outline-none"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg font-bold hover:bg-blue-700 transition">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;