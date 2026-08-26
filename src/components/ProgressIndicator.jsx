import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const STEPS = [
  { num: '01', label: 'Destination' },
  { num: '02', label: 'Trip' },
  { num: '03', label: 'Activities' },
  { num: '04', label: 'Luggage' },
];

export default function ProgressIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12">
      {STEPS.map((step, i) => {
        const isComplete = i < currentStep;
        const isCurrent = i === currentStep;

        return (
          <div key={step.num} className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <motion.div
                layout
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-semibold transition-colors duration-300 ${
                  isComplete
                    ? 'bg-primary text-white'
                    : isCurrent
                    ? 'bg-primary/10 text-primary border-2 border-primary'
                    : 'bg-stone-100 text-text-muted'
                }`}
              >
                {isComplete ? <Check size={14} /> : step.num}
              </motion.div>
              <span className={`text-sm font-medium hidden sm:block transition-colors duration-300 ${
                isCurrent ? 'text-text' : 'text-text-muted'
              }`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="w-8 sm:w-12 h-[2px] bg-stone-200 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: isComplete ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
