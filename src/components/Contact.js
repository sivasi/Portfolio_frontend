import React from 'react';
import { useState } from "react"
import photo from './Photo.jpg'
const Contact = () => {
  const [firstName, setFname] = useState('')
  const [lastName, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  const [Sending,setSending]= useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const contact = {firstName, lastName, email, message}

    const response = await fetch('http://13.201.29.87:4001/api/contact',{
      method: 'POST',
      body: JSON.stringify(contact),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setSending(false)
    }
    else{
      setEmail('')
      setFname('')
      setLname('')
      setMessage('')
      setError(null)
      setSending(false)
    }
  }
  return (
    <section id="contact" className="bg-gray-50 relative overflow-hidden dark:bg-gray-900 font-poppins">
      <div className="absolute bottom-0 left-0 hidden w-full h-full lg:block lg:w-4/12">
        <img className="object-cover w-full h-full" src={photo} alt="" />
      </div>
      <div className="container relative px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse py-20 -mx-4 lg:flex-row 2xl:py-40">
            <div className="w-full px-4 lg:w-3/5">
              <div className="w-full px-8 py-8 bg-white border rounded-md shadow-md dark:border-gray-800 dark:bg-gray-800 lg:ml-20 lg:max-w-md">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-00 dark:text-gray-400">
                      Please send a message for further information!
                    </h2>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-2">
                    <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                      <input
                        onChange={(e) => setFname(e.target.value)} value={firstName}
                        className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                        type="text" placeholder="First Name.." required
                      />
                    </div>
                    <div className="w-full px-2 lg:w-1/2">
                      <input
                        onChange={(e) => setLname(e.target.value)} value={lastName}
                        className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                        type="text" placeholder="Last Name.." required
                      />
                    </div>
                  </div>
                  <input
                    onChange={(e) => setEmail(e.target.value)} value={email}
                    className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
                    type="email" placeholder="abc@gmail.com" required
                  />
                  <textarea
                    onChange={(e) => setMessage(e.target.value)} value={message}
                    rows="4"
                    type="message"
                    placeholder="Write a message..."
                    required
                    className="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-400 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-700"
                  ></textarea>
                  <button disabled={Sending}
                    className="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-700" 
                  >
                    {Sending ? 'Sending..' : 'Send message'}
                  </button>
                  {error && <div className="w-full py-4 text-sm font-bold leading-normal  :bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-700">{error}</div>}
                </form>
              </div>
            </div>
            <div className="w-full px-4 mb-8 lg:w-2/5 lg:mb-0">
              <span className="text-lg font-bold text-blue-500 dark:text-blue-400">Connect with me </span>
              <h2 className="mt-6 mb-8 text-4xl font-bold md:mb-10 dark:text-gray-400">Let's get connected</h2>
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-lg dark:text-gray-400 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-600 dark:text-gray-400 bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    ></path>
                  </svg>
                </span>
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">+91-7976862536</p>
              </div>
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-100 rounded-lg dark:text-gray-400 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-600 dark:text-gray-400 bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                    ></path>
                  </svg>
                </span>
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">adityasivasi@gmail.com</p>
              </div>
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-blue-100 rounded-lg dark:text-gray-400 dark:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-600 dark:text-gray-400 bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                    ></path>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                  </svg>
                </span>
                <div>
                  <p className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">Samastipur, Bihar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
