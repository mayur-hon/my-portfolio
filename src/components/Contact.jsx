<form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
  
  {/* Access Key */}
  <input type="hidden" name="access_key" value="ec7d64aa-1e41-4551-adb8-61499d6c4d0f" />

  {/* इनपुट बॉक्स (इथे तुझे जुने className किंवा स्टाईल्स परत वापर) */}
  <input 
    type="text" 
    name="name" 
    required 
    placeholder="Your Name" 
    className="w-full p-3 border border-gray-300 rounded-lg" 
  />

  <input 
    type="email" 
    name="email" 
    required 
    placeholder="Your Email" 
    className="w-full p-3 border border-gray-300 rounded-lg" 
  />

  <textarea 
    name="message" 
    required 
    placeholder="Your Message" 
    className="w-full p-3 border border-gray-300 rounded-lg"
  ></textarea>
  
  {/* बटण */}
  <button 
    type="submit" 
    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
  >
    Send Message
  </button>
</form>