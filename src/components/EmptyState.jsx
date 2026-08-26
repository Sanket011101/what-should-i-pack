import { motion } from 'framer-motion';

export default function EmptyState({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4"
    >
      <div className="text-center max-w-md">
        <motion.div
          className="w-32 h-40 mx-auto mb-8 relative"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-200 to-stone-300 rounded-2xl border-2 border-stone-400/40" />
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-stone-400/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-3 bg-stone-400/50 rounded-full" />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-stone-400/40 rounded-t-lg" />
        </motion.div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text mb-3">
          Your suitcase is waiting.
        </h1>
        <p className="text-text-secondary text-lg mb-8 leading-relaxed">
          Tell us where you're headed, and we'll figure out exactly what deserves a spot in your bag.
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="px-8 py-4 bg-primary text-white rounded-2xl font-display font-semibold text-lg
                     shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow cursor-pointer"
        >
          Plan a Trip
        </motion.button>
      </div>
    </motion.div>
  );
}
