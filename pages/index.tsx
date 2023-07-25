import { motion } from "framer-motion";
import { Links } from "../components/Links";
import Link from "next/link";

import { Button } from "../components/Button";

export default function Home() {
  return (
    <div className="lg:mt-0 z-20 flex flex-col items-center justify-between">
      <div className="hero min-h-screen bg-local md:bg-fixed bg-cover bg-[url(/bg-2.jpg)]">
        <div className="hero-overlay bg-opacity-40" />
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col justify-center items-center max-w-[740px]">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="lg:h-[380px] lg:w-[500px] md:h-[300px] md:w-[380px] h-[240px] w-[300px]"
            >
              <img alt="logo" src="/tb.png" />
            </motion.div>

            <div className="w-full mx-auto text-center flex flex-col justify-center items-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-white mb-2"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg max-w-[300px] p-2">
                Господу Богу твоему поклоняйся и Ему одному служи
              </p>
              <p className="text-white mt-2 text-sm font-bold">Матфея 4:10</p>
            </div>

            {/* <Link href="/register">
              <Button>Регистрация </Button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="sm:py-[100px] py-0 pt-10">
        <Links />
      </div>
    </div>
  );
}
