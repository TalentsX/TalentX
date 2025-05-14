import React from 'react'

export const Footer = () => {
  return (
  <div className="w-full bg-[#6C27B3] h-auto text-white  font-inriaserif overflow-hidden">
  <div className="w-[90%] py-[80px] mx-auto flex flex-col justify-center">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex justify-center items-center'>
    {/* Left Section */}
    <div>
      <h2 className="text-2xl md:text-[48px] font-bold mb-4 text-left">Curious to learn more?</h2>
      <p className="my-6 text-[16px] leading-relaxed text-left">
        Schedule a demo with the TalentX Team to discover how our scientific assessments and feedback tools can transform your talent development strategy.
      </p>
      <p className="mb-4 text-[16px] leading-relaxed text-left">
        By leveraging cutting-edge technology, we help organizations cultivate high-performing individuals, effective leaders, and dynamic teams.
      </p>
      <p className="mt-10 mb-2 text-[20px]  font-bold text-left">Let’s keep in touch!</p>
      <p className="text-[30px] font-bold underline text-left">support@talentxtools.com</p>
    </div>

    {/* Right Section: Form */}
    <div className="bg-white p-8 rounded-lg shadow-lg text-black w-full max-w-md mx-auto ">
      <h2 className="text-3xl font-bold mb-6 text-left">Let’s talk!</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="First name"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          placeholder="Last name"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        
        <div className="text-sm text-gray-700 text-left">
          <input type="checkbox" className="mr-2" />
          I accept the <a href="#" className="text-red-700 underline text-left">Privacy Policy</a> , 
          <a href="#" className="text-red-700 underline ml-1 text-left">Terms of Use,</a>and agree to be occasionally contacted for marketing purposes.
        </div>
        {/* captcha functionality will be add here */}
        <button
          type="submit"
          className="w-full bg-[#6C27B3] text-white py-2 px-4 rounded hover:bg-[#6a3fd4] transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>

  {/* Footer */}
  <div className="text-white text-[16px] mt-12 text-left">
    Copyright © 2025 Talent X You Limited – All Rights Reserved.
  
  </div>
  </div>
</div>

  )
}
