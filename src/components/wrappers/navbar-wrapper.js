"use client";
import { motion } from "framer-motion";
import React from "react";

export default function NavbarWrapper({ children }) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.nav>
  );
}
