# PackSmart

> Never overpack again. Tell us where you're going — we'll figure out what deserves a spot in your suitcase.

## What is PackSmart?

PackSmart is an interactive packing assistant that visually packs a suitcase for you based on your trip details. Instead of a boring checklist, it animates items flying into a suitcase one by one, calculates capacity, scores your packing, and tells you what you don't need.

## Features

- **Multi-step trip setup** — Destination, duration, season, activities, and luggage size
- **Intelligent packing algorithm** — Generates a packing list based on trip details
- **Animated suitcase visualization** — Items fly into the suitcase with spring physics
- **Capacity tracking** — Real-time fill level with color-coded warnings
- **"You don't need this shit"** — Unnecessary items with funny reasons to leave them at home
- **"Pack anyway"** — Force-pack items you insist on bringing
- **Overpacking warnings** — When physics says no
- **Smart suggestions** — Things you might have forgotten
- **Packing score** — Rates your packing with categories and verdicts
- **Repack button** — Replay the satisfying packing animation
- **localStorage persistence** — Your trip survives page refreshes
- **Responsive design** — Works on desktop, tablet, and mobile

## Tech Stack

- **React 19** — UI framework
- **Tailwind CSS 4** — Styling via utility classes and CSS custom properties
- **Framer Motion** — Animations and transitions
- **Lucide React** — Icons
- **Vite** — Build tool and dev server

## How the Packing Algorithm Works

The packing engine is entirely client-side with no AI or API calls. It uses rule-based logic:

1. **Base clothing** is determined by trip duration (1-3 days, 4-7, 8-14, 15+)
2. **Activity modifiers** add items based on selected activities (gym adds workout gear, beach adds swimwear, work adds formal attire, etc.)
3. **Season adjustments** add/remove layers (cold adds jacket + thermals, hot adds shorts + sunscreen)
4. **Essentials** are always included (toiletries, charger, passport, laptop)
5. **Unnecessary items** are generated based on what doesn't make sense for the trip

Each item has a size value that contributes to suitcase capacity. The total load is compared against the selected luggage type's capacity to calculate fill percentage.

## Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other Commands

```bash
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

## Project Structure

```
src/
  components/
    TripSetup.jsx           # Multi-step trip configuration flow
    ProgressIndicator.jsx   # Step progress bar
    DestinationStep.jsx     # Step 1: Where are you going?
    TripDurationStep.jsx    # Step 2: How long and when?
    ActivitySelector.jsx    # Step 3: What are you doing?
    LuggageSelector.jsx     # Step 4: How much space?
    PackingDashboard.jsx    # Main packing screen
    Suitcase.jsx            # CSS suitcase visualization
    PackingList.jsx         # Grouped item checklist
    UnnecessaryItems.jsx    # "You don't need this" section
    SmartSuggestions.jsx    # "We almost forgot" section
    PackingScore.jsx        # Final packing score
    EmptyState.jsx          # Empty suitcase landing
    Toast.jsx               # Toast notifications
  data/
    packingRules.js         # Packing algorithm and all data
  hooks/
    useLocalStorage.js      # localStorage persistence hook
  App.jsx                   # Root component with state management
  main.jsx                  # Entry point
  index.css                 # Tailwind imports and custom styles
```

## Screenshots

<!-- Add screenshots here -->

## Future Ideas

- Undo/redo for packing actions
- Custom item addition
- Multi-suitcase support
- Share packing list
- Packing templates for common trip types
- Weather API integration for real forecasts
- Offline support with service worker

---

Built with React, Tailwind CSS, and Framer Motion.
