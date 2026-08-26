import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import {
  Briefcase, Waves, Dumbbell, Mountain, UtensilsCrossed,
  Music, Camera, Sofa
} from 'lucide-react';
import { ACTIVITIES } from '../data/packingRules';

const iconMap = {
  Briefcase, Waves, Dumbbell, Mountain, UtensilsCrossed,
  Music, Camera, Sofa,
};

export default function ActivitySelector({ selected, onChange }) {
  const toggle = (id) => {
    if (selected.includes(id)) {
      onChange(selected.filter(a => a !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2">
        What are you actually doing there?
      </h2>
      <p className="text-text-secondary text-lg mb-8">
        Your activities change what goes in the suitcase.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
        {ACTIVITIES.map((activity) => {
          const Icon = iconMap[activity.icon] || Briefcase;
          const isSelected = selected.includes(activity.id);
          return (
            <motion.button
              key={activity.id}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggle(activity.id)}
              className={`relative p-4 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                isSelected
                  ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                  : 'border-border bg-white hover:border-primary/30'
              }`}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                >
                  <Check size={12} className="text-white" />
                </motion.div>
              )}
              <Icon size={22} className={`mb-2 ${isSelected ? 'text-primary' : 'text-text-secondary'}`} />
              <div className={`font-display font-semibold text-sm ${isSelected ? 'text-primary' : 'text-text'}`}>
                {activity.label}
              </div>
              <div className="text-xs text-text-muted mt-0.5">{activity.desc}</div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
