import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Shirt, Laptop, Briefcase, Footprints, Package, Glasses, Plug, Zap, ShirtIcon,
  Heart, Star, Umbrella
} from 'lucide-react';

const ICON_MAP = {
  'T-Shirts': Shirt, 'Pants': Package, 'Underwear': ShirtIcon, 'Underwear (extras)': ShirtIcon,
  'Socks': Footprints, 'Socks (extras)': Footprints, 'Pajamas': Shirt, 'Shorts': Shirt,
  'Light Trousers': Package, 'Light Dress/Shirt': Shirt, 'Sandals': Footprints,
  'Breathable Sneakers': Footprints, 'Smart Casual Outfit': Shirt, 'Dress Shoes': Footprints,
  'Warm Trousers': Package, 'Thermal Underwear Set': Shirt, 'Heavy Winter Jacket': Shirt,
  'Fleece/Sweater': Shirt, 'Warm Hat': Shirt, 'Gloves': Shirt, 'Scarf': Shirt,
  'Warm Boots': Footprints, 'Thick Socks': Footprints, 'Smart Dark Trousers': Package,
  'Collared Shirt': Shirt, 'Dress Boots': Footprints, 'Light Jacket': Shirt,
  'Cardigan/Sweater': Shirt, 'Long Trousers': Package, 'Sneakers': Footprints,
  'Rain Jacket': Shirt, 'Jeans/Chinos': Package, 'Formal Suit/Blazer': Shirt,
  'Dress Shirts': Shirt, 'Formal Trousers': Package, 'Belt': Package,
  'Gym T-Shirts': Shirt, 'Gym Shorts': Shirt, 'Running Shoes': Footprints,
  'Swim Trunks/Swimsuit': Shirt, 'Beach Cover-Up': Shirt, 'Water Shoes': Footprints,
  'Hiking Pants': Package, 'Moisture-Wicking Shirts': Shirt, 'Hiking Boots': Footprints,
  'Hiking Socks': Footprints, 'Fleece Mid-Layer': Shirt, 'Going-Out Top': Shirt,
  'Going-Out Bottoms': Package, 'Going-Out Shoes': Footprints, 'Comfortable Walking Shoes': Footprints,
  'Loungewear/Hoodie': Shirt, 'Comfy Sweatpants': Package,
  'Passport': Briefcase, 'Phone Charger': Plug, 'Toiletries Bag': Package,
  'Medication': Heart, 'Travel Adapter': Plug, 'Power Bank': Zap,
  'Wallet & Cards': Briefcase, 'Keys': Briefcase, 'Travel Insurance Docs': Briefcase,
  'Sunscreen SPF50': Package, 'Sunglasses': Glasses, 'After-Sun/Aloe Vera': Package,
  'Lip Balm with SPF': Heart, 'Insect Repellent': Package, 'Hand Warmers': Shirt,
  'Lip Balm': Heart, 'Moisturizer': Package, 'Compact Umbrella': Umbrella,
  'Sleep Mask': Shirt, 'Earplugs': Shirt, 'Collapsible Hanger Set': Package,
  'Daypack/Small Backpack': Package, 'Ziplock Bags': Package, 'Pen & Small Notebook': Package,
  'UK Plug Adapter': Plug, 'EU Plug Adapter': Plug, 'AU Plug Adapter': Plug,
  'BR Plug Adapter': Plug, 'Laptop + Charger': Laptop, 'Headphones/Earbuds': Zap,
  'Phone + Cable': Plug, 'Camera + Charger': Star, 'External Hard Drive': Laptop,
  'Notebook/Laptop Sleeve': Laptop, 'Reusable Water Bottle': Package,
  'Travel Laundry Detergent': Package, 'Packing Cubes': Package,
  'Neck Pillow': Shirt, 'Empty Water Bottle': Package,
};

const CATEGORY_META = [
  { id: 'clothing', label: 'Clothing', color: 'bg-indigo-500' },
  { id: 'basic', label: 'Basic Items', color: 'bg-stone-400' },
  { id: 'essential', label: 'Essentials', color: 'bg-amber-500' },
  { id: 'might_need', label: 'Might Need', color: 'bg-sky-500' },
  { id: 'other', label: 'Other', color: 'bg-emerald-500' },
];

export default function PackingList({ items, onToggle }) {
  const [collapsed, setCollapsed] = useState({});
  const [filter, setFilter] = useState('all');

  const grouped = useMemo(() => {
    const g = {};
    items.forEach(item => {
      const cat = item.category || 'other';
      if (!g[cat]) g[cat] = [];
      g[cat].push(item);
    });
    return g;
  }, [items]);

  const toggleCategory = (cat) => {
    setCollapsed(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const selectedCount = items.filter(i => i.selected).length;
  const displayCategories = filter === 'all' ? CATEGORY_META : CATEGORY_META.filter(c => c.id === filter);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-3xl p-5 shadow-sm border border-border-light"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-bold text-sm text-text uppercase tracking-wider">
          Available Items
        </h3>
        <span className="text-xs font-semibold text-primary">{selectedCount}/{items.length} selected</span>
      </div>

      <div className="flex gap-1 mb-3 overflow-x-auto pb-1">
        <button
          onClick={() => setFilter('all')}
          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
            filter === 'all' ? 'bg-text text-white' : 'bg-stone-100 text-text-muted hover:bg-stone-200'
          }`}
        >
          All
        </button>
        {CATEGORY_META.map(cat => {
          const catItems = grouped[cat.id] || [];
          const catSelected = catItems.filter(i => i.selected).length;
          if (catItems.length === 0) return null;
          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                filter === cat.id ? 'bg-text text-white' : 'bg-stone-100 text-text-muted hover:bg-stone-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cat.color}`} />
              {cat.label}
              {catSelected > 0 && <span className="opacity-60">{catSelected}/{catItems.length}</span>}
            </button>
          );
        })}
      </div>

      <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
        {displayCategories.map(cat => {
          const catItems = grouped[cat.id];
          if (!catItems || catItems.length === 0) return null;
          const isCollapsed = collapsed[cat.id];
          const catSelected = catItems.filter(i => i.selected).length;

          return (
            <div key={cat.id}>
              <button
                onClick={() => toggleCategory(cat.id)}
                className="flex items-center justify-between w-full mb-1.5 cursor-pointer group"
              >
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${cat.color}`} />
                  <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
                    {cat.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-text-muted">{catSelected}/{catItems.length}</span>
                  {isCollapsed
                    ? <ChevronDown size={11} className="text-text-muted" />
                    : <ChevronUp size={11} className="text-text-muted" />
                  }
                </div>
              </button>

              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-0.5 overflow-hidden"
                  >
                    {catItems.map(item => {
                      const Icon = ICON_MAP[item.name] || Package;
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          whileHover={{ x: 2 }}
                          onClick={() => onToggle(item.id)}
                          className={`flex items-center gap-2.5 p-2 rounded-xl cursor-pointer group transition-colors ${
                            item.selected ? 'bg-primary/5' : 'hover:bg-stone-50'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                            item.selected
                              ? 'bg-primary border-primary'
                              : item.recommended
                                ? 'border-primary/40 group-hover:border-primary'
                                : 'border-stone-300 group-hover:border-stone-400'
                          }`}>
                            {item.selected && <Check size={11} className="text-white" />}
                          </div>
                          <Icon size={14} className={`flex-shrink-0 transition-colors ${
                            item.selected ? 'text-primary' : 'text-text-secondary'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm block truncate transition-colors ${
                              item.selected ? 'text-primary font-medium' : 'text-text'
                            }`}>
                              {item.name}
                            </span>
                            {item.reason && (
                              <span className="text-[10px] text-text-muted block truncate">{item.reason}</span>
                            )}
                          </div>
                          {item.recommended && !item.selected && (
                            <span className="text-[9px] font-bold text-primary/60 uppercase whitespace-nowrap flex-shrink-0">
                              Suggested
                            </span>
                          )}
                          {item.quantity > 1 && (
                            <span className="text-[10px] text-text-muted font-medium flex-shrink-0">×{item.quantity}</span>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
