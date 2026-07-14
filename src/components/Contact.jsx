import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Have a question or want to work together? Leave a message!</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                       <form action="https://api.web3forms.com/submit" method="POST">
  {/* ही महत्त्वाची लाईन खाली टाक: */}
  <input type="hidden" name="access_key" value="ec7d64aa-1e41-4551-adb8-61499d6c4d0f" />

  {/* खाली तुझे आधीचे इनपुट फील्ड्स तसेच राहू दे, पण त्यांना 'name' अ‍ॅट्रिब्यूट नक्की दे: */}
  <input type="text" name="name" required placeholder="Your Name" />
  <input type="email" name="email" required placeholder="Your Email" />
  <textarea name="message" required placeholder="Your Message"></textarea>
  
  <button type="submit">Send Message</button>
</form>
        </div>

      </div>
    </section>
  );
};

export default Contact;