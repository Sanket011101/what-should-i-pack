import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
    >
      <div className="bg-text text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-medium text-sm">
        <div className="w-2 h-2 bg-success-light rounded-full flex-shrink-0" />
        {message}
        <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <X size={14} />
        </button>
      </div>
    </motion.div>
  );
}
