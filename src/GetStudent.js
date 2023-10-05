import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetStudent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API bằng fetch
    fetch('https://localhost:7087/api/Student')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}--{item.age}--{item.className}-</div>
      ))}
    </div>
  );
}

export default GetStudent;