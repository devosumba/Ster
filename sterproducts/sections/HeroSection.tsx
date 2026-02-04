'use client'
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "@/components/TiltImage";
import Hero3DBackground from "@/components/Hero3DBackground";
import { motion } from "motion/react";

export default function HeroSection() {
    const specialFeatures = [
        "Free consultation",
        "No obligation",
        "Expert guidance",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-gray-900">
            <Hero3DBackground />
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-[var(--color-primary)] blur-[300px]"></div>
            <motion.a href="#!" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-[var(--color-primary-100)] bg-[rgba(157,205,90,0.15)]"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-[var(--color-primary-active)] text-white text-xs px-3.5 py-1 rounded-full">
                    Kenya's
                </span>
                <p className="flex items-center gap-1">
                    <span>Expert Cosmetic Formulation Consultants </span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>
            <motion.h1 className="text-5xl/17 md:text-6xl/21 font-medium max-w-none text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                <span className="inline-flex flex-col items-center justify-center gap-3">
                    <span className="block whitespace-nowrap">Crafting Beauty With Expert</span>
                    <span className="move-gradient block px-3 rounded-xl whitespace-nowrap">Cosmetic Formulations!</span>
                </span>
            </motion.h1>
            <motion.p className="text-base text-center text-slate-200 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                We help startups and established brands create safe, effective, and innovative skincare and haircare products tailored to unique visions.</motion.p>
            <motion.div className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full px-7 h-11">
                    Book Your Free Initial Consultation
                </button>
                <button className="flex items-center gap-2 border border-[var(--color-primary-active)] hover:bg-[rgba(157,205,90,0.5)] transition rounded-full px-6 h-11">
                    <VideoIcon strokeWidth={1} />
                    <span>Explore Our Services</span>
                </button>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p className="flex items-center gap-2" key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="size-5 text-[var(--color-primary)]" />
                        <span className="text-slate-400">{feature}</span>
                    </motion.p>
                ))}
            </div>
            <TiltedImage />
        </div>
    );
}