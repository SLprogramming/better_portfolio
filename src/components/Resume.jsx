

import { motion } from "framer-motion";



const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Resume
      </motion.h1>

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
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="border-l-2 border-yellow-500  pl-4">
      
              <h3 className="font-bold relative">
                <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>
                BRANDON JOHNSON</h3>
              <p className="italic text-gray-600">
                Innovative and deadline-driven Graphic Designer with 3+ years of experience designing
                and developing user-centered digital/print marketing material from initial concept
                to final, polished deliverable.
              </p>
              <ul className="mt-2 text-gray-700">
                <li>📍 Portland par 127, Orlando, FL</li>
                <li>📞 (123) 456-7891</li>
                <li>✉️ alice.barkley@example.com</li>
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-2 border-yellow-500 pl-4">
              <div className="mb-6">
                <h3 className="font-bold relative"> <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>MASTER OF FINE ARTS & GRAPHIC DESIGN</h3>
                <p className="text-sm text-gray-600 font-semibold">2015 - 2016</p>
                <p className="text-gray-700 italic">Rochester Institute of Technology, Rochester, NY</p>
                <p className="text-gray-600">Qui deserunt veniam. Et sed aliquam labore tempore.</p>
              </div>
              <div>
                <h3 className="font-bold relative"><div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h3>
                <p className="text-sm text-gray-600 font-semibold">2010 - 2014</p>
                <p className="text-gray-700 italic">Rochester Institute of Technology, Rochester, NY</p>
                <p className="text-gray-600">Quia nobis sequi est occaecati aut...</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Experience */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <div className="border-l-2 border-yellow-500 pl-4">
            {/* Job 1 */}
            <div className="mb-6">
              <h3 className="font-bold relative"> <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>SENIOR GRAPHIC DESIGN SPECIALIST</h3>
              <p className="text-sm text-gray-600 font-semibold">2019 - Present</p>
              <p className="text-gray-700 italic">Experion, New York, NY</p>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div>
              <h3 className="font-bold relative"> <div className="p-[7px] bg-yellow-500 inline-block absolute left-[-18px] border-2 border-yellow-500 rounded-full -translate-x-2"></div>GRAPHIC DESIGN SPECIALIST</h3>
              <p className="text-sm text-gray-600 font-semibold">2017 - 2018</p>
              <p className="text-gray-700 italic">Stepping Stone Advertising, New York, NY</p>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;

