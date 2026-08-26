import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import TripSetup from './components/TripSetup';
import PackingDashboard from './components/PackingDashboard';
import EmptyState from './components/EmptyState';
import Toast from './components/Toast';
import { useLocalStorage } from './hooks/useLocalStorage';
import { generateAllItems } from './data/packingRules';

export default function App() {
  const [trip, setTrip] = useLocalStorage('packsmart-trip-v2', null);
  const [allItems, setAllItems] = useLocalStorage('packsmart-items-v2', null);
  const [phase, setPhase] = useState(trip ? 'packing' : 'empty');
  const [toast, setToast] = useState(null);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (trip && !allItems) {
      setAllItems(generateAllItems(trip));
    }
  }, []);

  const showToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const handleTripComplete = useCallback((tripData) => {
    const normalizedTrip = {
      ...tripData,
      luggage: Array.isArray(tripData.luggage) ? tripData.luggage : tripData.luggage ? [tripData.luggage] : ['carryon'],
    };
    setTrip(normalizedTrip);
    const items = generateAllItems(normalizedTrip);
    setAllItems(items);
    setShowScore(false);
    setPhase('packing');
    showToast('Pick the items you want to pack!');
  }, [showToast]);

  const handleToggleItem = useCallback((itemId) => {
    setAllItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );
  }, []);

  const handleSelectAllRecommended = useCallback(() => {
    setAllItems(prev =>
      prev.map(item => item.recommended ? { ...item, selected: true } : item)
    );
    showToast('All recommended items selected!');
  }, [showToast]);

  const handleDeselectAll = useCallback(() => {
    setAllItems(prev => prev.map(item => ({ ...item, selected: false })));
    showToast('All items deselected.');
  }, [showToast]);

  const handleDonePacking = useCallback(() => {
    setShowScore(true);
    showToast('Packing complete! Check your score.');
  }, [showToast]);

  const handleBack = useCallback(() => {
    if (phase === 'setup') {
      if (trip) setPhase('packing');
      else setPhase('empty');
    } else if (phase === 'packing') {
      setPhase('empty');
      setShowScore(false);
    }
  }, [phase, trip]);

  const handleStartTrip = useCallback(() => {
    setPhase('setup');
  }, []);

  const handleRepack = useCallback(() => {
    const items = generateAllItems(trip);
    setAllItems(items);
    setShowScore(false);
    showToast('Fresh start! Pick your items again.');
  }, [trip, showToast]);

  const handleEditTrip = useCallback(() => {
    setPhase('setup');
  }, []);

  const handleNewTrip = useCallback(() => {
    setTrip(null);
    setAllItems(null);
    setShowScore(false);
    setPhase('empty');
  }, []);

  return (
    <div className="min-h-screen font-body">
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {phase !== 'empty' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center
                           hover:bg-stone-200 transition-colors cursor-pointer mr-1"
              >
                <ArrowLeft size={16} className="text-text-secondary" />
              </motion.button>
            )}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => { setPhase('empty'); setShowScore(false); }}
            >
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white text-sm font-bold font-display">P</span>
              </div>
              <span className="font-display font-bold text-lg text-text">PackSmart</span>
            </div>
          </div>
          {trip && phase === 'packing' && (
            <div className="text-sm text-text-secondary font-medium">
              {trip.destination} · {trip.duration} days
            </div>
          )}
        </div>
      </header>

      <main className="pt-16 min-h-screen">
        <AnimatePresence mode="wait">
          {phase === 'empty' && (
            <EmptyState key="empty" onStart={handleStartTrip} />
          )}
          {phase === 'setup' && (
            <TripSetup key="setup" onComplete={handleTripComplete} existingTrip={trip} />
          )}
          {phase === 'packing' && trip && allItems && (
            <PackingDashboard
              key="dashboard"
              trip={trip}
              items={allItems}
              onToggleItem={handleToggleItem}
              onSelectAll={handleSelectAllRecommended}
              onDeselectAll={handleDeselectAll}
              onDonePacking={handleDonePacking}
              onRepack={handleRepack}
              onEditTrip={handleEditTrip}
              onNewTrip={handleNewTrip}
              showToast={showToast}
              showScore={showScore}
            />
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {toast && <Toast key="toast" message={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </div>
  );
}
