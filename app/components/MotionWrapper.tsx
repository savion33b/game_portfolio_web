'use client'

import { motion } from 'framer-motion'

export default function MotionWrapper({ children, ...props }: any) {
  return <motion.div {...props}>{children}</motion.div>
} 