 <!-- HedamoAssign -->

React UI assignment implemented with Vite + React and Tailwind CSS.

 <!-- Requirements -->

- Node.js (recommended: 18+)
- npm (comes with Node.js)

 <!-- Tech Stack -->

- React
- Vite (dev server + build tool)
- Tailwind CSS (via `@tailwindcss/vite`)

<!-- Setup / Run Locally -->

From the repository root:

<!-- bash -->
npm install


Start the development server:

<!-- bash -->
npm run dev


Then open the local URL printed in the terminal (typically `http://localhost:5173`).

 <!-- Build / Preview -->

Create a production build:

<!-- bash -->
npm run build


Preview the production build locally:

<!-- bash -->
npm run preview


 <!-- Lint -->

```bash
npm run lint
```

 <!-- Project Structure (high-level) -->

- `src/App.jsx`
  - Main page with search/filter/sort and product grid
  - Detail navigation handled via local React state (`selected`)
- `src/components/*`
  - `ProductDetail.jsx`, `Skeleton.jsx`, `EmptyState.jsx`
- `src/data/products.js`
  - Static product dataset
- `src/index.css`
  - Tailwind entry + global background styling (light blue gradient)

 <!-- Implementation Notes / Assumptions -->

- Data is static: Products are loaded from a local JS module (`src/data/products.js`). No API calls.
- Product count = 5:
  - The UI caps displayed results to 5 items.
  - The bundled dataset is also trimmed to 5 items.
- Search/Filter/Sort behavior:
  - Search matches `product.name` (case-insensitive substring match).
  - Filter matches `product.status` when not set to `All`.
  - Sort options:
    - `date`: descending by `updatedAt`
    - `name`: ascending by `name`
- UI styling:
  - Uses a light blue gradient background and glass-style cards (`backdrop-blur`) for a cleaner, more “classy” look.
