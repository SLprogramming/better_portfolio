import React, { useState ,useRef} from "react";
import { motion, AnimatePresence,useInView } from "framer-motion";
import { Search ,Link } from "lucide-react";
import {portfolioData} from "../helper/portfolios";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(portfolioData.map((item) => item.category))];

  const filteredData = filter === "All" ? portfolioData : portfolioData.filter((item) => item.category === filter);
  const [hoverId, setHoverId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
      <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
    <div id="Portfolio" className="portfolio w-3/4 mx-auto py-12">
      <h2 className="text-center text-2xl font-bold">Portfolio</h2>
      <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
      <p className="text-center text-gray-500 mb-4">Check out my latest work</p>

      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
      {categories.map((category) => (
  <button
    key={category}
    className={`px-4 py-2 rounded-lg transition duration-300 ${
      filter === category 
        ? "bg-yellow-500 text-white shadow-md scale-105" 
        : "bg-gray-200 text-black hover:bg-gray-300"
    }`}
    onClick={() => setFilter(category)}
  >
    {category}
  </button>
))}
      </div>

      {/* Portfolio Grid with Animation */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="shadow-lg rounded-lg overflow-hidden"
              onMouseEnter={() => {
               setHoverId(item.id);
              }}
              onMouseLeave={() => {
                setHoverId(null)
              }}
            >
              <div className="relative">

              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="absolute bottom-4 left-0 w-full  ">
                <div className={`w-[80%] mx-auto p-3 rounded-md flex items-center justify-between backdrop-blur-sm bg-white/50 transition-all duration-200 ${hoverId === item.id ? "opacity-100 -translate-y-2" : "opacity-0"}`}>
                  <div className=" ">

                  <h4 className="text-slat-300">{item.category}</h4>
                  <p className="text-sm text-gray-700">{item.description.length > 30 ? item.description.slice(0,30) + '...':item.description}</p>
                  </div>
                  <div  className="flex gap-1 text-1xl">
                    
                    <Search size={20} strokeWidth={1.75} />
              
                    <Link size={20} strokeWidth={1.75} />
                  </div>
                </div>
              </div>
              </div>
              
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
    </motion.div>
  );
};

export default Portfolio;
