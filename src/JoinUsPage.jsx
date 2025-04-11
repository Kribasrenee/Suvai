import React, { useState } from 'react';
import dosaImg from './assets/dosa.jpg';
import idliImg from './assets/idli.jpg';
import pooriImg from './assets/poori.jpg';
import comboImg from './assets/combo.jpg';
import vegThaliImg from './assets/vegthali.jpg';
import deluxeImg from './assets/deluxe.jpg';
import chappatiImg from './assets/chappati.jpg';
import parottaImg from './assets/parotta.jpg';

const mealsData = {
  Breakfast: [
    { name: 'Executive', price: 99, original: 109, img: dosaImg },
    { name: 'Classic', price: 109, original: 129, img: idliImg },
    { name: 'Exclusive', price: 129, original: 149, img: pooriImg },
    { name: 'Breakfast & Lunch', price: 209, original: 229, img: comboImg },
  ],
  Lunch: [
    { name: 'Veg Thali', price: 120, original: 140, img: vegThaliImg },
    { name: 'Deluxe Combo', price: 150, original: 170, img: deluxeImg },
  ],
  Dinner: [
    { name: 'Light Dinner', price: 80, original: 100, img: chappatiImg },
    { name: 'Heavy Dinner', price: 130, original: 150, img: parottaImg },
  ],
};

const JoinUsPage = () => {
  const [selectedMealTime, setSelectedMealTime] = useState('Breakfast');
  const [quantities, setQuantities] = useState({});
  const [hoveredButton, setHoveredButton] = useState(null);
  const green = '#1A9F29';

  const handleQuantityChange = (mealName, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [mealName]: Math.max(0, (prev[mealName] || 0) + delta),
    }));
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <h1 style={{ textAlign: 'center', color: green, fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
        SUBSCRIBE - EAT - REPEAT
      </h1>

      {/* Meal Time Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        {['Breakfast', 'Lunch', 'Dinner'].map((mealTime) => (
          <button
            key={mealTime}
            onClick={() => setSelectedMealTime(mealTime)}
            style={{
              padding: '10px 24px',
              borderRadius: '20px',
              fontWeight: '500',
              backgroundColor: selectedMealTime === mealTime ? green : 'white',
              color: selectedMealTime === mealTime ? 'white' : green,
              border: `1px solid ${green}`,
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {mealTime}
          </button>
        ))}
      </div>

      {/* Main Flex Layout */}
      <div style={{ display: 'flex', width: '100%', padding: '0 40px', boxSizing: 'border-box' }}>
        {/* Left: Meal Cards */}
        <div style={{ flex: 3, paddingRight: '20px' }}>
          {mealsData[selectedMealTime].map((meal) => (
            <div
              key={meal.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '15px',
                marginBottom: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                gap: '16px',
              }}
            >
              <img
                src={meal.img}
                alt={meal.name}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>{meal.name}</h3>
                <div style={{ fontSize: '14px', color: '#999', textDecoration: 'line-through' }}>
                  ₹{meal.original}/Meal
                </div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: green }}>₹{meal.price}/Meal</div>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: hoveredButton === meal.name ? '#128b1e' : green,
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredButton(meal.name)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handleQuantityChange(meal.name, 1)}
                >
                  Add Quantity +
                </button>
                {quantities[meal.name] > 0 && (
                  <div style={{ fontSize: '14px', marginTop: '6px', color: '#333' }}>
                    Selected: {quantities[meal.name]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Subscription Box */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minWidth: '300px',
            alignSelf: 'flex-start',
          }}
        >
          <h3 style={{ fontSize: '18px', color: green, marginBottom: '16px' }}>
            Your Subscription Details
          </h3>
          <p style={{ marginBottom: '10px' }}><strong>Food Category:</strong> Veg</p>
          <p style={{ marginBottom: '20px' }}><strong>Cuisine:</strong> South Indian</p>
          <button
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#d1d5db',
              color: '#111827',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Select Days
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
