import { motion } from 'framer-motion';
import { Check, MapPin } from 'lucide-react';
import { DESTINATION_LIST, DESTINATIONS } from '../data/packingRules';

const popular = ['Dubai', 'Tokyo', 'London', 'Paris', 'New York', 'Bangkok', 'Bali', 'Rome'];

export default function DestinationStep({ destination, onChange }) {
  return (
    <div className="text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2">
        Where are you going?
      </h2>
      <p className="text-text-secondary text-lg mb-8">
        We'll figure out the weather and what you need.
      </p>

      <div className="relative max-w-md mx-auto mb-3">
        <MapPin size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          value={destination}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type any city..."
          className="w-full pl-12 pr-6 py-4 text-lg font-display bg-white rounded-2xl border-2 border-border
                     focus:border-primary focus:ring-0 focus:outline-none transition-colors
                     placeholder:text-text-muted shadow-sm"
        />
      </div>

      {destination && !DESTINATIONS[destination] && destination.length > 2 && (
        <p className="text-xs text-text-muted mb-6">
          We'll use weather data for "{destination}" based on the season you pick
        </p>
      )}
      {DESTINATIONS[destination] && (
        <p className="text-xs text-primary font-medium mb-6">
          {DESTINATIONS[destination].country} · {DESTINATIONS[destination].notes}
        </p>
      )}

      <p className="text-sm text-text-muted mb-4 font-medium uppercase tracking-wider">
        Popular destinations
      </p>
      <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
        {popular.map((dest) => {
          const isSelected = destination === dest;
          const info = DESTINATIONS[dest];
          return (
            <motion.button
              key={dest}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChange(isSelected ? '' : dest)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-white text-text-secondary border border-border hover:border-primary/30 hover:text-primary'
              }`}
            >
              {isSelected && <Check size={14} />}
              {dest}
              <span className={`text-xs ${isSelected ? 'text-white/70' : 'text-text-muted'}`}>
                {info?.country}
              </span>
            </motion.button>
          );
        })}
      </div>

      {DESTINATION_LIST.length > popular.length && (
        <details className="mt-4 max-w-lg mx-auto">
          <summary className="text-xs text-text-muted cursor-pointer hover:text-primary transition-colors">
            +{DESTINATION_LIST.length - popular.length} more destinations
          </summary>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {DESTINATION_LIST.filter(d => !popular.includes(d)).map((dest) => {
              const isSelected = destination === dest;
              const info = DESTINATIONS[dest];
              return (
                <motion.button
                  key={dest}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onChange(isSelected ? '' : dest)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-white text-text-secondary border border-border hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {dest}
                </motion.button>
              );
            })}
          </div>
        </details>
      )}
    </div>
  );
}
