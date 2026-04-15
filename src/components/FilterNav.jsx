function FilterNav({ filters, setFilters, categories, onClearAll }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px 0',
      borderTop: '1px solid #e0e0e0',
      borderBottom: '1px solid #e0e0e0',
      marginBottom: '24px',
      gap: '16px'
    }}>
      <span style={{ fontWeight: 'bold', fontSize: '13px' }}>Filter By:</span>

      {/* Open Now */}
      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={filters.openNow}
          onChange={(e) => setFilters({ ...filters, openNow: e.target.checked })}
        />
        Open Now
      </label>

      {/* Price */}
      <select
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        style={{ padding: '4px 8px', fontSize: '13px', border: '1px solid #ccc', cursor: 'pointer' }}
      >
        <option value="">Price</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
      </select>

      {/* Categories */}
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        style={{ padding: '4px 8px', fontSize: '13px', border: '1px solid #ccc', cursor: 'pointer' }}
      >
        <option value="">Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Clear All */}
      <button
        onClick={onClearAll}
        style={{
          marginLeft: 'auto',
          background: 'none',
          border: 'none',
          fontSize: '13px',
          color: '#666',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}
      >
        CLEAR ALL
      </button>
    </div>
  )
}

export default FilterNav