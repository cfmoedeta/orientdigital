"use client";
import { motion } from "framer-motion";
import React from "react";

export default function FooterWrapper({ children }) {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.footer>
  );
}
