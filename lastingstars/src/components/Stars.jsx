import { useState, useEffect } from "react";
import Star from "./Star";

// StarRating Component (Updated)
export default function StarRating({
  totalStars = 5,
  storageKey = "user-star-rating",
}) {
  const createArray = (length) => [...Array(length)];

  // Initialize state from localStorage if available, otherwise default to 3
  const [selectedStars, setSelectedStars] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved !== null ? parseInt(saved, 10) : 3;
  });

  // Save to localStorage whenever selectedStars changes
  useEffect(() => {
    localStorage.setItem(storageKey, selectedStars.toString());
  }, [selectedStars, storageKey]);

  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
