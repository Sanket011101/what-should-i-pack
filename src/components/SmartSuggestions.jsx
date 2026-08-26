import { motion } from 'framer-motion';
import { Lightbulb, X } from 'lucide-react';

export default function SmartSuggestions({ suggestions, packedItems, onDismiss }) {
  const packedNames = packedItems.map(i => i.name.toLowerCase());
  const forgotten = suggestions.filter(s => !packedNames.some(p => p.includes(s.toLowerCase())));

  if (forgotten.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, height: 0 }}
      className="bg-amber-50/50 rounded-3xl p-6 border border-amber-200/50 overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Lightbulb size={14} className="text-amber-500" />
          <h3 className="font-display font-bold text-sm text-text uppercase tracking-wider">
            We almost forgot
          </h3>
        </div>
        <button
          onClick={onDismiss}
          className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center
                     hover:bg-amber-200 transition-colors cursor-pointer"
        >
          <X size={12} className="text-amber-600" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {forgotten.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className="px-3 py-1.5 bg-amber-100/60 text-amber-800 text-xs font-medium rounded-lg"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
