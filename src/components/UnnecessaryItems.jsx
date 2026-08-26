import { motion } from 'framer-motion';
import { X, ChevronUp } from 'lucide-react';

export default function UnnecessaryItems({ items, packedNames, onPack, onDismiss }) {
  const unpacked = items.filter(i => !packedNames.includes(i.name));

  if (unpacked.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, height: 0 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-border-light overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-bold text-sm text-text uppercase tracking-wider">
            You don't need this shit
          </h3>
          <p className="text-xs text-text-muted mt-0.5">Seriously. Leave it at home.</p>
        </div>
        <button
          onClick={onDismiss}
          className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center
                     hover:bg-stone-200 transition-colors cursor-pointer"
        >
          <ChevronUp size={12} className="text-text-muted" />
        </button>
      </div>

      <div className="space-y-2">
        {unpacked.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 p-3 rounded-xl bg-red-50/50"
          >
            <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text">{item.name}</p>
              <p className="text-xs text-text-muted mt-0.5">{item.reason}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPack(item.name)}
              className="text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-lg
                         hover:bg-primary/10 transition-colors cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              Pack anyway
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
