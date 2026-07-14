import { useRef } from 'react'; // हे सर्वात वर ऍड कर

const Contact = () => {
  const formRef = useRef(null); // फॉर्मला रेफरेन्स देण्यासाठी

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // सबमिशन कोड...
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("मेसेज यशस्वीरित्या पाठवला गेला आहे!"); // मेसेज गेल्याची खात्री
      formRef.current.reset(); // हे कमांड फॉर्ममधला डेटा पुसून टाकेल
    } else {
      alert("काहीतरी चूक झाली, पुन्हा प्रयत्न करा.");
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="access_key" value="ec7d64aa-1e41-4551-adb8-61499d6c4d0f" />
      
      <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
      <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
      <textarea name="message" required placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
      
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
        Send Message
      </button>
    </form>
  );
};

export default Contact;