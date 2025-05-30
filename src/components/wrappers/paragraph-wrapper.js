"use client";
import { motion } from "framer-motion";
import React from "react";

export default function HeaderWrapper({ children }) {
  return (
    <motion.p
      className="sec-text"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}
