export const DESTINATIONS = {
  'Dubai': { country: 'UAE', climate: 'hot', avgTemp: { summer: 42, winter: 24, spring: 32, autumn: 34 }, timezone: 'GMT+4', plugType: 'UK', currency: 'AED', notes: 'Modest dress in public areas, very hot summers' },
  'Tokyo': { country: 'Japan', climate: 'varies', avgTemp: { summer: 31, winter: 5, spring: 16, autumn: 18 }, timezone: 'GMT+9', plugType: 'US', currency: 'JPY', notes: 'Remove shoes indoors, carry cash' },
  'London': { country: 'UK', climate: 'mild', avgTemp: { summer: 23, winter: 5, spring: 13, autumn: 14 }, timezone: 'GMT+0', plugType: 'UK', currency: 'GBP', notes: 'Rain is always possible, layers are key' },
  'Paris': { country: 'France', climate: 'mild', avgTemp: { summer: 25, winter: 5, spring: 15, autumn: 13 }, timezone: 'GMT+1', plugType: 'EU', currency: 'EUR', notes: 'Smart casual for restaurants, walkable city' },
  'New York': { country: 'USA', climate: 'varies', avgTemp: { summer: 29, winter: 0, spring: 15, autumn: 14 }, timezone: 'GMT-5', plugType: 'US', currency: 'USD', notes: 'Four distinct seasons, walking-heavy city' },
  'Bangkok': { country: 'Thailand', climate: 'hot', avgTemp: { summer: 35, winter: 28, spring: 34, autumn: 30 }, timezone: 'GMT+7', plugType: 'US', currency: 'THB', notes: 'Cover shoulders at temples, humid year-round' },
  'Singapore': { country: 'Singapore', climate: 'hot', avgTemp: { summer: 31, winter: 27, spring: 31, autumn: 30 }, timezone: 'GMT+8', plugType: 'UK', currency: 'SGD', notes: 'Strict laws, strong AC indoors' },
  'Istanbul': { country: 'Turkey', climate: 'varies', avgTemp: { summer: 29, winter: 6, spring: 16, autumn: 17 }, timezone: 'GMT+3', plugType: 'EU', currency: 'TRY', notes: 'Cover head at mosques, bazaar culture' },
  'Sydney': { country: 'Australia', climate: 'varies', avgTemp: { summer: 26, winter: 8, spring: 19, autumn: 20 }, timezone: 'GMT+11', plugType: 'AU', currency: 'AUD', notes: 'Southern hemisphere seasons reversed, high UV' },
  'Kathmandu': { country: 'Nepal', climate: 'varies', avgTemp: { summer: 28, winter: 10, spring: 22, autumn: 20 }, timezone: 'GMT+5:45', plugType: 'EU', currency: 'NPR', notes: 'Altitude matters, temples require covered shoulders' },
  'Rome': { country: 'Italy', climate: 'warm', avgTemp: { summer: 32, winter: 8, spring: 18, autumn: 19 }, timezone: 'GMT+1', plugType: 'EU', currency: 'EUR', notes: 'Cover shoulders at Vatican, cobblestone streets' },
  'Seoul': { country: 'South Korea', climate: 'varies', avgTemp: { summer: 30, winter: -2, spring: 15, autumn: 16 }, timezone: 'GMT+9', plugType: 'EU', currency: 'KRW', notes: 'Extreme seasons, indoor floor sleeping common' },
  'Cancun': { country: 'Mexico', climate: 'hot', avgTemp: { summer: 33, winter: 26, spring: 32, autumn: 30 }, timezone: 'GMT-6', plugType: 'US', currency: 'MXN', notes: 'All-inclusive resorts, cenote swimming' },
  'Marrakech': { country: 'Morocco', climate: 'hot', avgTemp: { summer: 38, winter: 12, spring: 24, autumn: 24 }, timezone: 'GMT+1', plugType: 'EU', currency: 'MAD', notes: 'Cover up in medina, tannery visits need masks' },
  'Reykjavik': { country: 'Iceland', climate: 'cold', avgTemp: { summer: 13, winter: 0, spring: 6, autumn: 7 }, timezone: 'GMT+0', plugType: 'EU', currency: 'ISK', notes: 'Geothermal pools, windproof layers essential' },
  'Bali': { country: 'Indonesia', climate: 'hot', avgTemp: { summer: 29, winter: 27, spring: 28, autumn: 28 }, timezone: 'GMT+8', plugType: 'EU', currency: 'IDR', notes: 'Temple dress code, mosquito repellent essential' },
  'Barcelona': { country: 'Spain', climate: 'warm', avgTemp: { summer: 29, winter: 10, spring: 17, autumn: 19 }, timezone: 'GMT+1', plugType: 'EU', currency: 'EUR', notes: 'Beach + city combo, pickpocket awareness' },
  'Cape Town': { country: 'South Africa', climate: 'varies', avgTemp: { summer: 26, winter: 12, spring: 20, autumn: 19 }, timezone: 'GMT+2', plugType: 'SA', currency: 'ZAR', notes: 'UV extreme, wildlife safaris, variable weather' },
  'Amsterdam': { country: 'Netherlands', climate: 'mild', avgTemp: { summer: 22, winter: 3, spring: 12, autumn: 11 }, timezone: 'GMT+1', plugType: 'EU', currency: 'EUR', notes: 'Bike-friendly, rain gear essential, walkable' },
  'Rio de Janeiro': { country: 'Brazil', climate: 'hot', avgTemp: { summer: 32, winter: 20, spring: 26, autumn: 25 }, timezone: 'GMT-3', plugType: 'BR', currency: 'BRL', notes: 'Beach culture, safety awareness, Carnaval season' },
  'Lisbon': { country: 'Portugal', climate: 'warm', avgTemp: { summer: 28, winter: 12, spring: 18, autumn: 19 }, timezone: 'GMT+0', plugType: 'EU', currency: 'EUR', notes: 'Hilly terrain, tram rides, coastal breezes' },
  'Hanoi': { country: 'Vietnam', climate: 'varies', avgTemp: { summer: 33, winter: 16, spring: 24, autumn: 26 }, timezone: 'GMT+7', plugType: 'EU', currency: 'VND', notes: 'Motorbike traffic, street food culture, humid' },
  'Petra': { country: 'Jordan', climate: 'hot', avgTemp: { summer: 35, winter: 8, spring: 22, autumn: 24 }, timezone: 'GMT+2', plugType: 'EU', currency: 'JOD', notes: 'Desert climate, extensive walking, modest dress' },
  'Queenstown': { country: 'New Zealand', climate: 'varies', avgTemp: { summer: 22, winter: 2, spring: 12, autumn: 11 }, timezone: 'GMT+13', plugType: 'AU', currency: 'NZD', notes: 'Adventure capital, four seasons in one day' },
  'Maldives': { country: 'Maldives', climate: 'hot', avgTemp: { summer: 30, winter: 28, spring: 30, autumn: 29 }, timezone: 'GMT+5', plugType: 'UK', currency: 'MVR', notes: 'Resort wear, reef-safe sunscreen mandatory' },
  'Santorini': { country: 'Greece', climate: 'warm', avgTemp: { summer: 29, winter: 12, spring: 18, autumn: 20 }, timezone: 'GMT+2', plugType: 'EU', currency: 'EUR', notes: 'Wind can be strong, dress for photos' },
};

export const DESTINATION_LIST = Object.keys(DESTINATIONS);

export const SEASONS = [
  { id: 'summer', label: 'Summer', desc: 'Warm weather', temp: 'hot', icon: 'Sun' },
  { id: 'winter', label: 'Winter', desc: 'Cold weather', temp: 'cold', icon: 'Snowflake' },
  { id: 'spring', label: 'Spring', desc: 'Mild weather', temp: 'warm', icon: 'Flower2' },
  { id: 'autumn', label: 'Autumn', desc: 'Cool weather', temp: 'mild', icon: 'Leaf' },
];

export const ACTIVITIES = [
  { id: 'work', label: 'Work', desc: 'Professional attire', icon: 'Briefcase' },
  { id: 'beach', label: 'Beach', desc: 'Sun & sand essentials', icon: 'Waves' },
  { id: 'gym', label: 'Gym', desc: 'Workout gear', icon: 'Dumbbell' },
  { id: 'hiking', label: 'Hiking', desc: 'Outdoor adventure', icon: 'Mountain' },
  { id: 'dining', label: 'Fine Dining', desc: 'Restaurant outfits', icon: 'UtensilsCrossed' },
  { id: 'nightlife', label: 'Nightlife', desc: 'Going out looks', icon: 'Music' },
  { id: 'swimming', label: 'Swimming', desc: 'Pool & water gear', icon: 'Waves' },
  { id: 'sightseeing', label: 'Sightseeing', desc: 'All-day walking', icon: 'Camera' },
  { id: 'relaxing', label: 'Relaxing', desc: 'Comfort essentials', icon: 'Sofa' },
];

export const LUGGAGE_OPTIONS = [
  { id: 'carryon', label: 'Carry-On', desc: 'Small cabin bag (7kg)', capacity: 25, icon: 'Briefcase' },
  { id: 'checked_small', label: 'Small Checked', desc: 'Medium suitcase (20kg)', capacity: 55, icon: 'Luggage' },
  { id: 'checked_large', label: 'Large Checked', desc: 'Big suitcase (30kg)', capacity: 85, icon: 'Luggage' },
];

export const LUGGAGE_SIZE_MAP = {
  carryon: { width: 280, height: 360, label: 'Carry-On' },
  checked_small: { width: 360, height: 460, label: 'Small Checked' },
  checked_large: { width: 420, height: 540, label: 'Large Checked' },
};

export const DURATION_PRESETS = [
  { label: '1 Week', days: 7 },
  { label: '2 Weeks', days: 14 },
  { label: '1 Month', days: 30 },
  { label: '3 Months', days: 90 },
  { label: '6 Months', days: 180 },
  { label: '1 Year', days: 365 },
];

const CATEGORIES = [
  { id: 'clothing', label: 'Clothing', color: 'bg-indigo-500' },
  { id: 'basic', label: 'Basic Items', color: 'bg-stone-400' },
  { id: 'essential', label: 'Essentials', color: 'bg-amber-500' },
  { id: 'might_need', label: 'Might Need', color: 'bg-sky-500' },
  { id: 'other', label: 'Other', color: 'bg-emerald-500' },
];

export { CATEGORIES };

function getClimateType(destination, season) {
  const dest = DESTINATIONS[destination];
  if (!dest) return 'mild';
  if (dest.climate === 'hot') return 'hot';
  if (dest.climate === 'cold') return 'cold';
  return SEASONS.find(s => s.id === season)?.temp || 'mild';
}

let itemCounter = 0;

function makeItem(name, category, assignedSuitcase, recommended = true, qty = 1, reason = '') {
  itemCounter++;
  return {
    id: `item-${itemCounter}-${Math.random().toString(36).slice(2, 6)}`,
    name,
    category,
    assignedSuitcase,
    recommended,
    selected: false,
    quantity: qty,
    reason,
  };
}

export function generateAllItems(trip) {
  const { duration, season, activities, luggage } = trip;
  const climate = getClimateType(trip.destination, season);
  const suitcases = Array.isArray(luggage) ? luggage : [luggage];
  const hasLarge = suitcases.some(s => s === 'checked_large' || s === 'checked_small');
  const largeBag = suitcases.includes('checked_large') ? 'checked_large'
    : suitcases.includes('checked_small') ? 'checked_small'
    : suitcases[suitcases.length - 1];
  const carryBag = suitcases.includes('carryon') ? 'carryon' : suitcases[0];

  const items = [];

  // ── CLOTHING ──
  if (climate === 'hot') {
    items.push(makeItem('T-Shirts', 'clothing', largeBag, true, Math.min(7, Math.ceil(duration / 2)), 'Light and breathable'));
    items.push(makeItem('Shorts', 'clothing', largeBag, true, Math.min(4, Math.ceil(duration / 3)), 'Perfect for hot weather'));
    items.push(makeItem('Light Trousers', 'clothing', largeBag, true, Math.min(3, Math.ceil(duration / 4)), 'For cooler evenings'));
    items.push(makeItem('Light Dress/Shirt', 'clothing', largeBag, false, Math.min(2, Math.ceil(duration / 5)), 'Dressier option'));
    items.push(makeItem('Sandals', 'clothing', largeBag, true, 1, 'Keep your feet cool'));
    items.push(makeItem('Breathable Sneakers', 'clothing', largeBag, true, 1, 'For walking around'));
    items.push(makeItem('Underwear', 'clothing', largeBag, true, Math.min(7, duration + 1), 'Pack extras'));
    items.push(makeItem('Socks', 'clothing', largeBag, true, Math.min(5, Math.ceil(duration / 2)), 'Breathable pairs'));
    items.push(makeItem('Pajamas', 'clothing', largeBag, false, duration > 5 ? 2 : 1, 'Comfortable sleep'));
    items.push(makeItem('Sun Hat', 'clothing', largeBag, true, 1, 'Essential sun protection'));
  } else if (climate === 'cold') {
    items.push(makeItem('Thermal Underwear Set', 'clothing', largeBag, true, Math.min(3, Math.ceil(duration / 4)), 'Base layer warmth'));
    items.push(makeItem('Warm Trousers', 'clothing', largeBag, true, Math.min(3, Math.ceil(duration / 4)), 'Insulated and comfortable'));
    items.push(makeItem('Heavy Winter Jacket', 'clothing', largeBag, true, 1, 'Your main warmth layer'));
    items.push(makeItem('Fleece/Sweater', 'clothing', largeBag, true, Math.min(3, Math.ceil(duration / 4)), 'Layering pieces'));
    items.push(makeItem('Warm Hat', 'clothing', largeBag, true, 1, 'Keep your head warm'));
    items.push(makeItem('Gloves', 'clothing', largeBag, true, 1, 'Fingers need love too'));
    items.push(makeItem('Scarf', 'clothing', largeBag, false, 1, 'Extra neck warmth'));
    items.push(makeItem('Warm Boots', 'clothing', largeBag, true, 1, 'Waterproof preferred'));
    items.push(makeItem('Thick Socks', 'clothing', largeBag, true, Math.min(5, Math.ceil(duration / 3)), 'Wool or thermal'));
    items.push(makeItem('Underwear', 'clothing', largeBag, true, Math.min(7, duration + 1), 'Pack extras'));
    items.push(makeItem('Pajamas', 'clothing', largeBag, false, duration > 5 ? 2 : 1, 'Warm and cozy'));
  } else if (climate === 'mild') {
    items.push(makeItem('T-Shirts', 'clothing', largeBag, true, Math.min(5, Math.ceil(duration / 2)), 'Layer-friendly tops'));
    items.push(makeItem('Long Trousers', 'clothing', largeBag, true, Math.min(3, Math.ceil(duration / 3)), 'Versatile bottoms'));
    items.push(makeItem('Light Jacket', 'clothing', largeBag, true, 1, 'For chilly mornings'));
    items.push(makeItem('Cardigan/Sweater', 'clothing', largeBag, false, Math.min(2, Math.ceil(duration / 5)), 'Extra warmth layer'));
    items.push(makeItem('Sneakers', 'clothing', largeBag, true, 1, 'All-day comfort'));
    items.push(makeItem('Rain Jacket', 'clothing', largeBag, false, 1, 'Just in case'));
    items.push(makeItem('Underwear', 'clothing', largeBag, true, Math.min(7, duration + 1), 'Pack extras'));
    items.push(makeItem('Socks', 'clothing', largeBag, true, Math.min(5, Math.ceil(duration / 2)), 'Comfortable pairs'));
    items.push(makeItem('Pajamas', 'clothing', largeBag, false, duration > 5 ? 2 : 1, 'Sleep well'));
  } else {
    items.push(makeItem('T-Shirts', 'clothing', largeBag, true, Math.min(5, Math.ceil(duration / 2)), 'Everyday basics'));
    items.push(makeItem('Jeans/Chinos', 'clothing', largeBag, true, Math.min(3, Math.ceil(duration / 3)), 'Classic bottoms'));
    items.push(makeItem('Light Jacket', 'clothing', largeBag, true, 1, 'For layering'));
    items.push(makeItem('Sneakers', 'clothing', largeBag, true, 1, 'Daily wear'));
    items.push(makeItem('Underwear', 'clothing', largeBag, true, Math.min(7, duration + 1), 'Pack extras'));
    items.push(makeItem('Socks', 'clothing', largeBag, true, Math.min(5, Math.ceil(duration / 2)), 'Comfortable pairs'));
    items.push(makeItem('Pajamas', 'clothing', largeBag, false, duration > 5 ? 2 : 1, 'Sleep comfort'));
  }

  // Activity clothing
  if (activities.includes('work')) {
    items.push(makeItem('Formal Suit/Blazer', 'clothing', largeBag, false, Math.min(2, Math.ceil(duration / 5)), 'Professional meetings'));
    items.push(makeItem('Dress Shirts', 'clothing', largeBag, false, Math.min(3, Math.ceil(duration / 3)), 'Crisp and professional'));
    items.push(makeItem('Formal Trousers', 'clothing', largeBag, false, Math.min(2, Math.ceil(duration / 5)), 'Pair with blazer'));
    items.push(makeItem('Formal Shoes', 'clothing', largeBag, false, 1, 'Polished look'));
    items.push(makeItem('Belt', 'clothing', largeBag, false, 1, 'Complete the outfit'));
  }
  if (activities.includes('gym')) {
    items.push(makeItem('Gym T-Shirts', 'clothing', largeBag, false, 2, 'Moisture-wicking'));
    items.push(makeItem('Gym Shorts', 'clothing', largeBag, false, 2, 'Lightweight'));
    items.push(makeItem('Running Shoes', 'clothing', carryBag, false, 1, 'Lightweight pair'));
  }
  if (activities.includes('beach') || activities.includes('swimming')) {
    items.push(makeItem('Swim Trunks/Swimsuit', 'clothing', largeBag, true, 2, 'Quick-dry fabric'));
    items.push(makeItem('Beach Cover-Up', 'clothing', largeBag, false, 1, 'For walks to the beach'));
    items.push(makeItem('Water Shoes', 'clothing', largeBag, false, 1, 'Protect your feet'));
  }
  if (activities.includes('hiking')) {
    items.push(makeItem('Hiking Pants', 'clothing', largeBag, false, Math.min(2, Math.ceil(duration / 5)), 'Durable and flexible'));
    items.push(makeItem('Moisture-Wicking Shirts', 'clothing', largeBag, false, 2, 'Stay dry on trails'));
    items.push(makeItem('Hiking Boots', 'clothing', largeBag, false, 1, 'Ankle support essential'));
    items.push(makeItem('Hiking Socks', 'clothing', largeBag, false, 3, 'Prevent blisters'));
    items.push(makeItem('Fleece Mid-Layer', 'clothing', largeBag, false, 1, 'Temperature regulation'));
  }
  if (activities.includes('nightlife')) {
    items.push(makeItem('Going-Out Top', 'clothing', largeBag, false, Math.min(2, Math.ceil(duration / 5)), 'Look sharp'));
    items.push(makeItem('Going-Out Bottoms', 'clothing', largeBag, false, 1, 'Dressier option'));
    items.push(makeItem('Going-Out Shoes', 'clothing', largeBag, false, 1, 'Statement footwear'));
  }
  if (activities.includes('sightseeing')) {
    items.push(makeItem('Comfortable Walking Shoes', 'clothing', largeBag, true, 1, 'Your feet will thank you'));
  }
  if (activities.includes('relaxing')) {
    items.push(makeItem('Loungewear/Hoodie', 'clothing', largeBag, false, 1, 'Cozy vibes'));
    items.push(makeItem('Comfy Sweatpants', 'clothing', largeBag, false, 1, 'Maximum comfort'));
  }

  // Smart clothing adds
  if (climate === 'hot' && (activities.includes('dining') || activities.includes('nightlife'))) {
    items.push(makeItem('Smart Casual Outfit', 'clothing', largeBag, false, 1, 'Dinner-ready look'));
    items.push(makeItem('Dress Shoes', 'clothing', largeBag, false, 1, 'Elevate the outfit'));
  }

  // ── BASIC ITEMS ──
  items.push(makeItem('Underwear (extras)', 'basic', largeBag, true, Math.min(3, Math.ceil(duration / 5)), 'Always pack backups'));
  items.push(makeItem('Socks (extras)', 'basic', largeBag, true, Math.min(2, Math.ceil(duration / 5)), 'In case you lose one'));
  if (duration > 5) items.push(makeItem('Travel Laundry Detergent', 'basic', largeBag, false, 1, 'Refresh your clothes'));
  if (duration > 7) items.push(makeItem('Packing Cubes', 'basic', largeBag, false, 1, 'Stay organized'));

  // ── ESSENTIALS (small items → carry-on) ──
  items.push(makeItem('Passport', 'essential', carryBag, true, 1, 'The most important item'));
  items.push(makeItem('Phone Charger', 'essential', carryBag, true, 1, 'Keep connected'));
  items.push(makeItem('Toiletries Bag', 'essential', largeBag, true, 1, 'Travel-size preferred'));
  items.push(makeItem('Medication', 'essential', carryBag, true, 1, 'Don\'t forget your essentials'));
  items.push(makeItem('Travel Adapter', 'essential', carryBag, true, 1, 'Check your destination\'s plug type'));
  items.push(makeItem('Power Bank', 'essential', carryBag, true, 1, 'Never run out of battery'));
  items.push(makeItem('Wallet & Cards', 'essential', carryBag, true, 1, 'Cash + backup card'));
  items.push(makeItem('Keys', 'essential', carryBag, true, 1, 'Don\'t get locked out when you return'));
  items.push(makeItem('Travel Insurance Docs', 'essential', carryBag, false, 1, 'Print or digital copy'));

  // ── MIGHT NEED (smart picks) ──
  if (climate === 'hot') {
    items.push(makeItem('Sunscreen SPF50', 'might_need', largeBag, true, 1, 'Non-negotiable in the sun'));
    items.push(makeItem('Sunglasses', 'might_need', carryBag, true, 1, 'UV protection'));
    items.push(makeItem('After-Sun/Aloe Vera', 'might_need', largeBag, false, 1, 'Soothe sunburn'));
    items.push(makeItem('Lip Balm with SPF', 'might_need', carryBag, false, 1, 'Prevent chapped lips'));
    items.push(makeItem('Insect Repellent', 'might_need', largeBag, false, 1, 'Bug season protection'));
  } else if (climate === 'cold') {
    items.push(makeItem('Hand Warmers', 'might_need', carryBag, false, 1, 'Pocket warmth'));
    items.push(makeItem('Lip Balm', 'might_need', carryBag, false, 1, 'Fight the dry cold'));
    items.push(makeItem('Moisturizer', 'might_need', largeBag, false, 1, 'Winter skin rescue'));
  } else {
    items.push(makeItem('Compact Umbrella', 'might_need', carryBag, false, 1, 'Rain happens'));
    items.push(makeItem('Sunglasses', 'might_need', carryBag, false, 1, 'UV protection'));
  }

  if (duration > 5) items.push(makeItem('Sleep Mask', 'might_need', carryBag, false, 1, 'Block out light'));
  if (duration > 7) items.push(makeItem('Earplugs', 'might_need', carryBag, false, 1, 'Silence is golden'));
  if (duration > 14) items.push(makeItem('Collapsible Hanger Set', 'might_need', largeBag, false, 1, 'Dry your hand-washed clothes'));

  items.push(makeItem('Daypack/Small Backpack', 'might_need', carryBag, false, 1, 'For daily excursions'));
  items.push(makeItem('Ziplock Bags', 'might_need', largeBag, false, 1, 'Multi-purpose storage'));
  items.push(makeItem('Pen & Small Notebook', 'might_need', carryBag, false, 1, 'Jot down memories'));

  const destData = DESTINATIONS[trip.destination];
  if (destData) {
    if (destData.plugType === 'UK') items.push(makeItem('UK Plug Adapter', 'might_need', carryBag, true, 1, `${trip.destination} uses UK plugs`));
    else if (destData.plugType === 'AU') items.push(makeItem('AU Plug Adapter', 'might_need', carryBag, true, 1, `${trip.destination} uses AU plugs`));
    else if (destData.plugType === 'BR') items.push(makeItem('BR Plug Adapter', 'might_need', carryBag, true, 1, `${trip.destination} uses BR plugs`));
    else items.push(makeItem('EU Plug Adapter', 'might_need', carryBag, true, 1, `${trip.destination} uses EU plugs`));
  }

  // ── OTHER (tech & misc → carry-on) ──
  items.push(makeItem('Laptop + Charger', 'other', carryBag, false, 1, 'Work or entertainment'));
  items.push(makeItem('Headphones/Earbuds', 'other', carryBag, true, 1, 'Music, podcasts, flights'));
  items.push(makeItem('Phone + Cable', 'other', carryBag, true, 1, 'Your lifeline'));
  if (activities.includes('sightseeing')) items.push(makeItem('Camera + Charger', 'other', carryBag, false, 1, 'Capture the memories'));
  if (duration > 14) items.push(makeItem('External Hard Drive', 'other', carryBag, false, 1, 'Back up your photos'));
  if (activities.includes('work')) items.push(makeItem('Notebook/Laptop Sleeve', 'other', carryBag, false, 1, 'Protect your device'));
  items.push(makeItem('Reusable Water Bottle', 'other', carryBag, false, 1, 'Stay hydrated'));
  items.push(makeItem('Neck Pillow', 'other', carryBag, false, 1, 'Comfortable travel'));
  items.push(makeItem('Empty Water Bottle', 'other', carryBag, false, 1, 'Fill after security'));

  return items;
}

export function calculateCapacity(items) {
  return items.filter(i => i.selected).reduce((total, item) => total + item.quantity, 0);
}

export function getCapacityStatus(pct) {
  if (pct <= 60) return { label: 'Plenty of room.', color: 'text-green-600', barColor: 'bg-green-500' };
  if (pct <= 80) return { label: 'Looking good.', color: 'text-primary', barColor: 'bg-primary' };
  if (pct <= 95) return { label: 'Getting tight.', color: 'text-amber-600', barColor: 'bg-amber-500' };
  if (pct <= 100) return { label: "That's going to be a struggle.", color: 'text-orange-600', barColor: 'bg-orange-500' };
  return { label: "Physics says no.", color: 'text-red-600', barColor: 'bg-red-500' };
}

export function calculateScore(trip, items) {
  const selected = items.filter(i => i.selected);
  const totalSelected = selected.length;
  const totalItems = items.length;

  const essentials = items.filter(i => i.category === 'essential');
  const essentialsSelected = essentials.filter(i => i.selected).length;
  const essentialsScore = essentials.length > 0 ? Math.min(100, (essentialsSelected / essentials.length) * 100) : 100;

  const recommended = items.filter(i => i.recommended);
  const recommendedSelected = recommended.filter(i => i.selected).length;
  const selectionScore = recommended.length > 0 ? Math.min(100, (recommendedSelected / recommended.length) * 100) : 100;

  const overpackingPenalty = selected.filter(i => !i.recommended).length * 5;
  const diversityBonus = new Set(selected.map(i => i.category)).size * 5;
  const extrasScore = Math.max(0, Math.min(100, 80 + diversityBonus - overpackingPenalty));

  const total = Math.round(essentialsScore * 0.3 + selectionScore * 0.4 + extrasScore * 0.3);

  let verdict;
  if (total >= 90) verdict = "You're a packing genius. Everything you need, nothing you don't.";
  else if (total >= 75) verdict = "Solid choices. You'll travel smart and light.";
  else if (total >= 50) verdict = "Decent selection, but you might be missing a few essentials.";
  else verdict = "Let's rethink this. You're either overpacking or underpacking.";

  return {
    total: Math.min(100, total),
    essentials: Math.round(essentialsScore),
    selection: Math.round(selectionScore),
    extras: Math.round(extrasScore),
    verdict,
    totalSelected,
    totalItems,
    categories: [
      { label: 'Essentials', score: Math.round(essentialsScore) },
      { label: 'Selection', score: Math.round(selectionScore) },
      { label: 'Balance', score: Math.round(extrasScore) },
    ],
  };
}
