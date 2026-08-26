import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Sun, Snowflake, Flower2, Leaf, Pencil, Check } from 'lucide-react';
import { SEASONS, DURATION_PRESETS } from '../data/packingRules';

const seasonIcons = { Sun, Snowflake, Flower2, Leaf };

function formatDuration(days) {
  if (days >= 365) {
    const y = Math.floor(days / 365);
    const r = days % 365;
    if (r === 0) return `${y} year${y > 1 ? 's' : ''}`;
    return `${y}y ${r}d`;
  }
  if (days >= 30) {
    const m = Math.floor(days / 30);
    const r = days % 30;
    if (r === 0) return `${m} month${m > 1 ? 's' : ''}`;
    return `${m}mo ${r}d`;
  }
  if (days >= 7) {
    const w = Math.floor(days / 7);
    const r = days % 7;
    if (r === 0) return `${w} week${w > 1 ? 's' : ''}`;
    return `${w}w ${r}d`;
  }
  return `${days} day${days > 1 ? 's' : ''}`;
}

export default function TripDurationStep({ duration, season, onDurationChange, onSeasonChange }) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(String(duration));

  const handlePresetClick = (days) => {
    onDurationChange(days);
    setInputValue(String(days));
    setEditing(false);
  };

  const handleEditStart = () => {
    setInputValue(String(duration));
    setEditing(true);
  };

  const handleEditConfirm = () => {
    const num = parseInt(inputValue, 10);
    if (!isNaN(num) && num >= 1 && num <= 730) {
      onDurationChange(num);
    }
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleEditConfirm();
    if (e.key === 'Escape') setEditing(false);
  };

  return (
    <div className="text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2">
        Trip details
      </h2>
      <p className="text-text-secondary text-lg mb-10">
        How long and when are you going?
      </p>

      <div className="mb-10">
        <p className="text-sm text-text-muted font-medium uppercase tracking-wider mb-4">
          Trip duration
        </p>

        <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto mb-6">
          {DURATION_PRESETS.map((preset) => {
            const isActive = duration === preset.days;
            return (
              <motion.button
                key={preset.days}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handlePresetClick(preset.days)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white text-text-secondary border border-border hover:border-primary/30 hover:text-primary'
                }`}
              >
                {preset.label}
              </motion.button>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const newVal = Math.max(1, duration - 1);
              onDurationChange(newVal);
              setInputValue(String(newVal));
            }}
            className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center
                       text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm"
          >
            <Minus size={16} />
          </motion.button>

          <div className="relative">
            {editing ? (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="730"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={handleEditConfirm}
                  autoFocus
                  className="w-20 text-center font-display text-4xl font-bold text-primary bg-white
                             border-2 border-primary rounded-xl px-2 py-1 outline-none
                             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                             [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={handleEditConfirm}
                  className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center
                             hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  <Check size={14} />
                </button>
              </div>
            ) : (
              <motion.button
                onClick={handleEditStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 cursor-pointer"
                title="Click to type exact days"
              >
                <motion.span
                  key={duration}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-display text-5xl font-bold text-text"
                >
                  {duration}
                </motion.span>
                <Pencil size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const newVal = Math.min(730, duration + 1);
              onDurationChange(newVal);
              setInputValue(String(newVal));
            }}
            className="w-11 h-11 rounded-full bg-white border border-border flex items-center justify-center
                       text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm"
          >
            <Plus size={16} />
          </motion.button>
        </div>

        <p className="text-sm text-text-muted mt-3 font-medium">
          {formatDuration(duration)}
        </p>
      </div>

      <div>
        <p className="text-sm text-text-muted font-medium uppercase tracking-wider mb-4">
          What's the weather like?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
          {SEASONS.map((s) => {
            const Icon = seasonIcons[s.icon];
            const isSelected = season === s.id;
            return (
              <motion.button
                key={s.id}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSeasonChange(s.id)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-center ${
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-md shadow-primary/10'
                    : 'border-border bg-white hover:border-primary/30'
                }`}
              >
                <div className="flex justify-center mb-2">
                  <Icon size={24} className={isSelected ? 'text-primary' : 'text-text-secondary'} />
                </div>
                <div className={`font-display font-semibold text-sm ${isSelected ? 'text-primary' : 'text-text'}`}>
                  {s.label}
                </div>
                <div className="text-xs text-text-muted mt-0.5">{s.desc}</div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
