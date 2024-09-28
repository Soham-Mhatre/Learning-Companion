import React from 'react';

const RoadmapBlock = ({ week, topic, learningObjectives, resources, practiceExercises, onAddToChecklist }) => {
  const handleAddToChecklist = () => {
    const blockContent = {
      week,
      topic,
      learningObjectives,
      resources,
      practiceExercises
    };
    onAddToChecklist(blockContent);
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="font-bold text-lg mb-2">Week {week}: {topic}</h3>
      {learningObjectives.length > 0 && (
        <div className="mb-2">
          <h4 className="font-bold">Learning Objectives:</h4>
          <ul className="list-disc pl-5">
            {learningObjectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      )}
      {resources.length > 0 && (
        <div className="mb-2">
          <h4 className="font-bold">Resources:</h4>
          <ul className="list-disc pl-5">
            {resources.map((resource, index) => (
              <li key={index}>
                <a href={resource} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {practiceExercises.length > 0 && (
        <div className="mb-2">
          <h4 className="font-bold">Practice Exercises:</h4>
          <ul className="list-disc pl-5">
            {practiceExercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
      )}
      <button 
        onClick={handleAddToChecklist}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Add to Checklist
      </button>
    </div>
  );
};

export default RoadmapBlock;