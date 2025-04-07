import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div id="Resume" className="max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Resume
      </motion.h1>
      <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section - Summary & Education */}
        <div>
          {/* Summary */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-2 pb-6 border-yellow-500  pl-4">
              <h3 className="font-bold relative">
                <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>
                Yangon University of Distance Education
              </h3>
              <p className="italic text-gray-600">
                Bachelor of Arts (B.A), Geography
                <br/>
                 2011-2013
              </p>
              {/* <ul className="mt-2 text-gray-700">
                <li>📍 Portland par 127, Orlando, FL</li>
                <li>📞 (123) 456-7891</li>
                <li>✉️ alice.barkley@example.com</li>
              </ul> */}
            </div>
            <div className="border-l-2 pb-6  border-yellow-500  pl-4">
              <h3 className="font-bold relative">
                <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>
                NCC Education
              </h3>
              <p className="italic text-gray-600">
                Level 4 Diploma in Computing 
                <br/>
                2022-2023
              </p>
              {/* <ul className="mt-2 text-gray-700">
                <li>📍 Portland par 127, Orlando, FL</li>
                <li>📞 (123) 456-7891</li>
                <li>✉️ alice.barkley@example.com</li>
              </ul> */}
            </div>
            <div className="border-l-2 pb-6 border-yellow-500  pl-4">
              <h3 className="font-bold relative">
                <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>
                IT Computer
              </h3>
              <p className="italic text-gray-600">
                Graphic Design <br/> Jun 2015 – Aug 2015
              </p>
              {/* <ul className="mt-2 text-gray-700">
                <li>📍 Portland par 127, Orlando, FL</li>
                <li>📞 (123) 456-7891</li>
                <li>✉️ alice.barkley@example.com</li>
              </ul> */}
            </div>
          </motion.div>
        </div>

        {/* Right Section - Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="border-l-2 border-yellow-500 pl-4">
            {/* Job 1 */}
            <div className="mb-6">
              <h3 className="font-bold relative">
                {" "}
                <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>
                Imedia International (Myanmar) Co., Ltd
              </h3>
              <p className="text-sm text-gray-600 font-semibold">
                Web Designer <br/>
                Feb 2016 – Jan 2019 <br/>
                 Yangon, Myanmar
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold relative">
                {" "}
                <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>
                Frontend Developer


              </h3>
              <p className="text-sm text-gray-600 font-semibold">
              Feb 2019 – Jan 2023 <br/>
              Yangon, Myanmar
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold relative">
                {" "}
                <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>
                Oversee development Co.ltd




              </h3>
              <p className="text-sm text-gray-600 font-semibold">
              Graphic Designer <br/>
May 2014 – May 2015<br/>
Yangon, Myanmar
              </p>
            </div>

         
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
