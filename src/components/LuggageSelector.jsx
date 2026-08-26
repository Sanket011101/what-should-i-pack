import { motion } from 'framer-motion';
import { Check, ArrowRight, Briefcase, Luggage } from 'lucide-react';
import { LUGGAGE_OPTIONS } from '../data/packingRules';

const iconMap = { Briefcase, Luggage };

export default function LuggageSelector({ selected, onChange, onReady }) {
  const selectedArr = Array.isArray(selected) ? selected : selected ? [selected] : [];

  const toggle = (id) => {
    if (selectedArr.includes(id)) {
      const next = selectedArr.filter(s => s !== id);
      onChange(next);
    } else {
      onChange([...selectedArr, id]);
    }
  };

  const totalCapacity = selectedArr.reduce((sum, id) => {
    const opt = LUGGAGE_OPTIONS.find(l => l.id === id);
    return sum + (opt ? opt.capacity : 0);
  }, 0);

  const totalItems = selectedArr.length;

  return (
    <div className="text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2">
        How much space are we working with?
      </h2>
      <p className="text-text-secondary text-lg mb-8">
        Select one or more bags. Tap to toggle.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
        {LUGGAGE_OPTIONS.map((option) => {
          const Icon = option.icon === 'Luggage' ? Luggage : Briefcase;
          const isSelected = selectedArr.includes(option.id);
          return (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggle(option.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer text-center ${
                isSelected
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-border bg-white hover:border-primary/30'
              }`}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                >
                  <Check size={14} className="text-white" />
                </motion.div>
              )}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-stone-50 flex items-center justify-center">
                <Icon size={32} className={isSelected ? 'text-primary' : 'text-text-secondary'} />
              </div>
              <div className={`font-display font-bold text-base ${isSelected ? 'text-primary' : 'text-text'}`}>
                {option.label}
              </div>
              <div className="text-sm text-text-muted mt-1">{option.desc}</div>
              <div className="text-xs text-text-muted mt-2 font-medium">
                ~{option.capacity} items capacity
              </div>
            </motion.button>
          );
        })}
      </div>

      {selectedArr.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
            <span className="font-medium">{totalItems} bag{totalItems > 1 ? 's' : ''}</span>
            <span className="text-text-muted">·</span>
            <span>~{totalCapacity} items capacity</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onReady}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-display font-semibold text-lg
                       shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow cursor-pointer
                       inline-flex items-center gap-3"
          >
            Pack My Suitcase{totalItems > 1 ? 's' : ''}
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
