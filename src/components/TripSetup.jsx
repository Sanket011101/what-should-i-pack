import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';
import DestinationStep from './DestinationStep';
import TripDurationStep from './TripDurationStep';
import ActivitySelector from './ActivitySelector';
import LuggageSelector from './LuggageSelector';
import { DESTINATIONS } from '../data/packingRules';

const initialData = {
  destination: '',
  duration: 7,
  season: '',
  activities: [],
  luggage: [],
};

export default function TripSetup({ onComplete, existingTrip }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(
    existingTrip ? { ...initialData, ...existingTrip } : initialData
  );

  const updateData = (updates) => setData(prev => ({ ...prev, ...updates }));

  const canProceed = () => {
    switch (step) {
      case 0: return data.destination.length > 0;
      case 1: return data.duration > 0 && data.season;
      case 2: return data.activities.length > 0;
      case 3: return data.luggage && data.luggage.length > 0;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else onComplete(data);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSurprise = () => {
    const random = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
    updateData({ destination: random });
  };

  const variants = {
    enter: { x: 80, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -80, opacity: 0 },
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <DestinationStep
            destination={data.destination}
            onChange={(d) => updateData({ destination: d })}
          />
        );
      case 1:
        return (
          <TripDurationStep
            duration={data.duration}
            season={data.season}
            onDurationChange={(d) => updateData({ duration: d })}
            onSeasonChange={(s) => updateData({ season: s })}
          />
        );
      case 2:
        return (
          <ActivitySelector
            selected={data.activities}
            onChange={(a) => updateData({ activities: a })}
          />
        );
      case 3:
        return (
          <LuggageSelector
            selected={data.luggage}
            onChange={(l) => updateData({ luggage: l })}
            onReady={handleNext}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-2xl">
        <ProgressIndicator currentStep={step} />

        <div className="relative overflow-hidden min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {step < 3 && (
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBack}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-display font-medium text-sm transition-all cursor-pointer ${
                step > 0
                  ? 'text-text-secondary hover:text-text hover:bg-stone-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <ArrowLeft size={16} />
              Back
            </motion.button>

            {step === 0 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSurprise}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-display font-medium text-sm
                           text-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <Shuffle size={16} />
                Surprise me
              </motion.button>
            )}

            {step > 0 && <div />}

            <motion.button
              whileHover={{ scale: canProceed() ? 1.02 : 1 }}
              whileTap={{ scale: canProceed() ? 0.97 : 1 }}
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-sm transition-all cursor-pointer ${
                canProceed()
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl'
                  : 'bg-stone-100 text-text-muted cursor-not-allowed'
              }`}
            >
              Next
              <ArrowRight size={16} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
