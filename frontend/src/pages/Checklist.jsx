import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Checklist = () => {
  const [checklist, setChecklist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/checklist', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch checklist');
        }
        const data = await response.json();
        console.log('Fetched checklist data:', data); // Log the fetched data
        setChecklist(data.checklist);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChecklist();
  }, []);

  if (isLoading) return <div>Loading checklist...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log('Checklist state:', checklist); // Log the checklist state

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Home</Link>
      <h1 className="text-3xl font-bold mb-6">Checklist</h1>
      {checklist.length === 0 ? (
        <p>No items in the checklist.</p>
      ) : (
        <div className="space-y-4">
          {checklist.map((item) => (
            <div key={item._id} className="bg-white shadow-md rounded p-4">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleCompleted(item._id)}
                  className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                />
                <h3 className={`font-bold text-lg ${item.completed ? 'line-through' : ''}`}>
                  Week {item.content?.week || 'N/A'}: {item.content?.topic || 'N/A'}
                </h3>
              </div>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(item, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Checklist;