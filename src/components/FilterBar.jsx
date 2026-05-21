const PRICE_OPTIONS = ["$", "$$", "$$$", "$$$$"];

const CATEGORY_OPTIONS = [
  "Thai", "Seafood", "Japanese", "Italian",
  "American", "Mexican", "Steakhouses",
];

export default function FilterBar({ filters, onFilterChange, onClearAll }) {
  return (
    <div className="filter-bar">
      <span className="filter-label">Filter By:</span>

      <label className="filter-item">
        <input
          type="radio"
          checked={filters.openNow}
          onClick={() => onFilterChange("openNow", !filters.openNow)}
          readOnly
        />
        <span className="radio-custom" />
        Open Now
      </label>

      <div className="filter-item">
        <select
          value={filters.price}
          onChange={(e) => onFilterChange("price", e.target.value)}
          className="filter-select"
        >
          <option value="">Price</option>
          {PRICE_OPTIONS.map((price) => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <select
          value={filters.category}
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="filter-select"
        >
          <option value="">Categories</option>
          {CATEGORY_OPTIONS.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <button className="clear-btn" onClick={onClearAll}>
        CLEAR ALL
      </button>
    </div>
  );
}