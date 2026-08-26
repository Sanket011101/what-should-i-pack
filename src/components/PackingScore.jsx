import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { calculateScore, LUGGAGE_OPTIONS } from '../data/packingRules';

export default function PackingScore({ trip, items }) {
  const score = calculateScore(trip, items);
  const suitcases = Array.isArray(trip.luggage) ? trip.luggage : [trip.luggage];
  const luggageNames = suitcases.map(id => LUGGAGE_OPTIONS.find(l => l.id === id)?.label).join(' + ');
  const selectedItems = items.filter(i => i.selected);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-12 mb-8"
    >
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-border-light max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center"
          >
            <Trophy size={28} className="text-primary" />
          </motion.div>
          <h3 className="font-display text-lg font-bold text-text uppercase tracking-wider mb-1">
            Packing Score
          </h3>
          <div className="flex items-center justify-center gap-1">
            <motion.span
              key={score.total}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-display text-5xl font-bold text-primary"
            >
              {score.total}
            </motion.span>
            <span className="text-2xl text-text-muted font-display">/100</span>
          </div>
          <p className="text-text-secondary text-sm mt-3">{score.verdict}</p>
        </div>

        <div className="space-y-4">
          {score.categories.map((cat, i) => (
            <div key={cat.label} className="flex items-center gap-4">
              <span className="text-sm text-text-secondary w-28 text-right">{cat.label}</span>
              <div className="flex-1 h-2.5 bg-stone-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.score}%` }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                  className={`h-full rounded-full ${
                    cat.score >= 90 ? 'bg-green-500' : cat.score >= 70 ? 'bg-primary' : 'bg-amber-500'
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-text w-10">{cat.score}%</span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-stone-50 rounded-2xl text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-text-muted text-xs mb-1">Destination</p>
              <p className="font-medium text-text">{trip.destination}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs mb-1">Duration</p>
              <p className="font-medium text-text">{trip.duration} days</p>
            </div>
            <div>
              <p className="text-text-muted text-xs mb-1">Luggage</p>
              <p className="font-medium text-text">{luggageNames}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs mb-1">Items Packed</p>
              <p className="font-medium text-primary">{score.totalSelected}/{score.totalItems}</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-lg font-display font-bold text-text">
            YOU'RE READY TO GO
          </p>
        </div>
      </div>
    </motion.div>
  );
}
