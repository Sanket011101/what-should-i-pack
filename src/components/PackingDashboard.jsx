import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Pencil, Trash2, Check, Package, CheckCheck, X, Eye, EyeOff } from 'lucide-react';
import Suitcase from './Suitcase';
import PackingList from './PackingList';
import PackingScore from './PackingScore';
import { calculateCapacity, getCapacityStatus, LUGGAGE_OPTIONS } from '../data/packingRules';

export default function PackingDashboard({
  trip, items, onToggleItem, onSelectAll, onDeselectAll,
  onDonePacking, onRepack, onEditTrip, onNewTrip,
  showToast, showScore,
}) {
  const suitcases = Array.isArray(trip.luggage) ? trip.luggage : [trip.luggage];
  const totalCapacity = suitcases.reduce((sum, id) => {
    const opt = LUGGAGE_OPTIONS.find(l => l.id === id);
    return sum + (opt ? opt.capacity : 0);
  }, 0);

  const selectedItems = useMemo(() => items.filter(i => i.selected), [items]);
  const packedCount = selectedItems.length;
  const totalCount = items.length;
  const recommendCount = items.filter(i => i.recommended).length;
  const selectedRecommended = selectedItems.filter(i => i.recommended).length;
  const pct = totalCapacity > 0 ? Math.round((packedCount / totalCapacity) * 100) : 0;
  const status = getCapacityStatus(pct);
  const overpacked = pct > 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto"
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl sm:text-3xl font-bold text-text"
          >
            Pick what goes in your suitcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary mt-1"
          >
            {trip.destination} · {trip.duration} days · Tap items to select them
          </motion.p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSelectAll}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary/5 text-primary text-xs font-semibold
                       hover:bg-primary/10 transition-colors cursor-pointer"
          >
            <CheckCheck size={14} />
            Select Recommended
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onDeselectAll}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-100 text-text-secondary text-xs font-semibold
                       hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X size={14} />
            Clear All
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* LEFT SIDEBAR */}
        <div className="lg:w-64 flex-shrink-0 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-5 shadow-sm border border-border-light"
          >
            <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-3">
              Your Selection
            </p>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-display text-3xl font-bold text-primary">{packedCount}</span>
              <span className="text-text-muted text-sm mb-1">/ {totalCount} items</span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${totalCount > 0 ? (packedCount / totalCount) * 100 : 0}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-text-muted mt-2">
              {selectedRecommended} of {recommendCount} recommended
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`rounded-3xl p-5 shadow-sm border ${
              overpacked ? 'bg-red-50 border-red-200' : 'bg-white border-border-light'
            }`}
          >
            <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-3">
              Suitcase Capacity
            </p>
            <div className="flex items-end gap-2 mb-2">
              <motion.span
                key={pct}
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`font-display text-3xl font-bold ${overpacked ? 'text-red-600' : 'text-text'}`}
              >
                {pct}%
              </motion.span>
              <span className="text-text-muted text-sm mb-1">full</span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${status.barColor}`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(pct, 100)}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
            <p className={`text-xs mt-2 font-medium ${status.color}`}>{status.label}</p>
            <div className="mt-2 text-[10px] text-text-muted">
              {suitcases.map(id => LUGGAGE_OPTIONS.find(l => l.id === id)?.label).join(' + ')} · {totalCapacity} capacity
            </div>
          </motion.div>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onRepack}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-border
                         text-text-secondary text-xs font-medium hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <RotateCcw size={12} />
              Start Over
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onEditTrip}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-border
                         text-text-secondary text-xs font-medium hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <Pencil size={12} />
              Edit Trip
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNewTrip}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs
                       text-text-muted hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
          >
            <Trash2 size={11} />
            Start a new trip
          </motion.button>
        </div>

        {/* CENTER - SUITCASE PREVIEW */}
        <div className="flex-1 flex flex-col items-center">
          {packedCount > 0 ? (
            <>
              <Suitcase
                items={selectedItems}
                luggageType={trip.luggage}
              />
              {overpacked && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-red-600 font-display font-bold text-sm mt-4"
                >
                  You've picked more items than your luggage can hold!
                </motion.p>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mb-4">
                <Package size={32} className="text-stone-300" />
              </div>
              <p className="text-text-muted font-medium text-sm">
                Tap items on the right to add them to your suitcase
              </p>
              <p className="text-text-muted text-xs mt-1">
                Or click "Select Recommended" to start with smart picks
              </p>
            </motion.div>
          )}

          {/* DONE PACKING BUTTON */}
          {packedCount > 0 && !showScore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onDonePacking}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-display font-semibold text-lg
                           shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow
                           cursor-pointer inline-flex items-center gap-3"
              >
                <Check size={20} />
                I'm Done Packing
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* RIGHT SIDEBAR - ITEM SELECTION */}
        <div className="lg:w-80 flex-shrink-0">
          <PackingList
            items={items}
            onToggle={onToggleItem}
          />
        </div>
      </div>

      {/* PACKING SCORE */}
      <AnimatePresence>
        {showScore && (
          <PackingScore
            trip={trip}
            items={items}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
