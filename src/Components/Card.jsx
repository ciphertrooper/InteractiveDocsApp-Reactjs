import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale: 1.2}}
      dragElastic={0.4}
      dragTransition={{bounceStiffness: 200, bounceDamping: 20}}
      className="container relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-100/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex item-center justify-between py-3 px-8 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="h-7 w-7 bg-neutral-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseOutline size="0.9em" color="#fff" />
            ) : (
              <IoCloudDownloadOutline size="0.9em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
