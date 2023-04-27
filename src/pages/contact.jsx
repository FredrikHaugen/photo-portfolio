import React, { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);

  let submittedText = '';

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
  
    submittedText = "Thank you for your message about " + subject;
    setSubmitted(true);
    await delay(2000);

    handleClear();
  };
  

  const handleClear = () => {
    setEmail('');
    setSubject('');
    setContent('');
    submittedText = '';
    setSubmitted(false);
    setEmailError(false);
  };

  if (submitted) {
    submittedText = "Thank you for your message about " + subject;
  }

  return (
    <div className="p-12 py-24 h-auto bg-slate-100" id="contact">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-slate-900 pb-4 mb-16">
        Contact Me
      </div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-1/2 lg:w-3/4">
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailError ? 'border-red-500' : ''}`} id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }} />
            {emailError && <div className="text-red-500 text-xs ">Please enter a valid email address.</div>} 
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
              Subject:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Enter the subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
              Content:
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" rows="6" placeholder="Enter your message" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className=" bg-slate-600 hover:bg-slate-800 ease-out duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
            <p className=''>{submittedText}</p>
            <button className="bg-slate-500 hover:bg-slate-400 ease-out duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
