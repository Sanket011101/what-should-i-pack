import { motion, AnimatePresence } from 'framer-motion';
import {
  Shirt, Laptop, Briefcase, Footprints, Package, Glasses, Plug, Zap, ShirtIcon,
  Heart, Star, Umbrella
} from 'lucide-react';
import { LUGGAGE_SIZE_MAP, LUGGAGE_OPTIONS } from '../data/packingRules';

const ICON_MAP = {
  'T-Shirts': Shirt, 'Pants': Package, 'Underwear': ShirtIcon, 'Underwear (extras)': ShirtIcon,
  'Socks': Footprints, 'Socks (extras)': Footprints, 'Pajamas': Shirt, 'Shorts': Shirt,
  'Light Trousers': Package, 'Light Dress/Shirt': Shirt, 'Sandals': Footprints,
  'Breathable Sneakers': Footprints, 'Smart Casual Outfit': Shirt, 'Dress Shoes': Footprints,
  'Warm Trousers': Package, 'Thermal Underwear Set': Shirt, 'Heavy Winter Jacket': Shirt,
  'Fleece/Sweater': Shirt, 'Warm Hat': Shirt, 'Gloves': Shirt, 'Scarf': Shirt,
  'Warm Boots': Footprints, 'Thick Socks': Footprints, 'Light Jacket': Shirt,
  'Cardigan/Sweater': Shirt, 'Long Trousers': Package, 'Sneakers': Footprints,
  'Rain Jacket': Shirt, 'Jeans/Chinos': Package, 'Formal Suit/Blazer': Shirt,
  'Dress Shirts': Shirt, 'Formal Trousers': Package, 'Belt': Package,
  'Gym T-Shirts': Shirt, 'Gym Shorts': Shirt, 'Running Shoes': Footprints,
  'Swim Trunks/Swimsuit': Shirt, 'Beach Cover-Up': Shirt, 'Water Shoes': Footprints,
  'Hiking Pants': Package, 'Moisture-Wicking Shirts': Shirt, 'Hiking Boots': Footprints,
  'Hiking Socks': Footprints, 'Fleece Mid-Layer': Shirt, 'Going-Out Top': Shirt,
  'Going-Out Bottoms': Package, 'Going-Out Shoes': Footprints, 'Comfortable Walking Shoes': Footprints,
  'Loungewear/Hoodie': Shirt, 'Comfy Sweatpants': Package,
  'Toiletries Bag': Package, 'Sunscreen SPF50': Package, 'After-Sun/Aloe Vera': Package,
  'Insect Repellent': Package, 'Moisturizer': Package, 'Collapsible Hanger Set': Package,
  'Ziplock Bags': Package, 'Travel Laundry Detergent': Package, 'Packing Cubes': Package,
  'Daypack/Small Backpack': Package, 'Empty Water Bottle': Package,
  'Passport': Briefcase, 'Phone Charger': Plug, 'Medication': Heart,
  'Travel Adapter': Plug, 'Power Bank': Zap, 'Wallet & Cards': Briefcase,
  'Keys': Briefcase, 'Travel Insurance Docs': Briefcase,
  'Sunglasses': Glasses, 'Lip Balm with SPF': Heart, 'Hand Warmers': Shirt,
  'Lip Balm': Heart, 'Compact Umbrella': Umbrella, 'Sleep Mask': Shirt,
  'Earplugs': Shirt, 'Pen & Small Notebook': Package,
  'UK Plug Adapter': Plug, 'EU Plug Adapter': Plug, 'AU Plug Adapter': Plug,
  'BR Plug Adapter': Plug, 'Neck Pillow': Shirt,
  'Laptop + Charger': Laptop, 'Headphones/Earbuds': Zap, 'Phone + Cable': Plug,
  'Camera + Charger': Star, 'External Hard Drive': Laptop, 'Notebook/Laptop Sleeve': Laptop,
  'Reusable Water Bottle': Package,
};

const CATEGORY_STYLES = {
  clothing: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
  basic: { bg: 'bg-stone-100', border: 'border-stone-300', text: 'text-stone-600' },
  essential: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
  might_need: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-600' },
  other: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
};

function SuitcaseItem({ item, index }) {
  const Icon = ICON_MAP[item.name] || Package;
  const style = CATEGORY_STYLES[item.category] || CATEGORY_STYLES.clothing;
  const itemsPerRow = 4;
  const row = Math.floor(index / itemsPerRow);
  const col = index % itemsPerRow;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.3, y: -30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.3, y: 30 }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 25,
        delay: index * 0.03,
      }}
      className={`absolute rounded-lg border p-1 flex flex-col items-center justify-center
        ${style.bg} ${style.border} shadow-sm z-10`}
      style={{
        left: `${5 + col * 24}%`,
        top: `${5 + row * 18}%`,
        width: '21%',
        height: '15%',
      }}
    >
      <Icon size={9} className={style.text} />
      <span className={`text-[5px] font-medium ${style.text} leading-none truncate max-w-full text-center`}>
        {item.quantity > 1 ? `${item.quantity}×` : ''} {item.name.length > 8 ? item.name.slice(0, 6) + '..' : item.name}
      </span>
    </motion.div>
  );
}

function SingleSuitcase({ suitcaseId, items, title }) {
  const dims = LUGGAGE_SIZE_MAP[suitcaseId] || LUGGAGE_SIZE_MAP.carryon;
  const opt = LUGGAGE_OPTIONS.find(l => l.id === suitcaseId);

  return (
    <div className="flex flex-col items-center">
      {title && (
        <p className="text-xs font-display font-semibold text-text-muted uppercase tracking-wider mb-2">
          {title}
        </p>
      )}
      <div className="relative" style={{ width: dims.width, height: dims.height, maxWidth: '85vw' }}>
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-stone-300 to-stone-400 rounded-t-lg"
          style={{ width: '30%', height: '12px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-white
                        rounded-[24px] border-2 border-stone-300/60 shadow-xl shadow-stone-300/20" />
        <div className="absolute left-2 right-2 top-[48%] h-[2px] bg-stone-300/80 rounded-full z-30" />
        <div className="absolute left-1/2 -translate-x-1/2 top-[47%] w-3 h-3 bg-stone-400 rounded-full z-30
                        flex items-center justify-center">
          <div className="w-1 h-1 bg-stone-200 rounded-full" />
        </div>
        <div className="absolute inset-[5px] top-[6px] bg-gradient-to-b from-stone-50 to-white
                        rounded-[18px] border border-stone-200/80 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
               style={{
                 backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                 backgroundSize: '16px 16px',
               }}
          />
          <div className="absolute inset-0 p-2">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <SuitcaseItem key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </div>
          {items.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-text-muted text-xs font-medium">Empty</p>
            </div>
          )}
        </div>
        <div className="absolute -bottom-3 left-[10%] right-[10%] h-5 bg-stone-300/20 rounded-[50%] blur-md" />
      </div>
      {opt && (
        <p className="text-xs text-text-muted mt-2">
          {opt.label} · {items.length} items · {opt.capacity} capacity
        </p>
      )}
    </div>
  );
}

export default function Suitcase({ items, luggageType }) {
  const suitcases = Array.isArray(luggageType) ? luggageType : [luggageType];
  const multi = suitcases.length > 1;

  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className={`flex ${multi ? 'gap-6 flex-wrap justify-center' : 'justify-center'}`}
    >
      {suitcases.map((sid) => {
        const suitcaseItems = items.filter(i => i.assignedSuitcase === sid);
        return (
          <SingleSuitcase
            key={sid}
            suitcaseId={sid}
            items={suitcaseItems}
            title={multi ? LUGGAGE_OPTIONS.find(l => l.id === sid)?.label : null}
          />
        );
      })}
    </motion.div>
  );
}
