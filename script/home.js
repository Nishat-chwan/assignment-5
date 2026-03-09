const loadLessons = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  lessons.forEach((issue) => {
    const card = document.createElement("div");
    card.className = "card bg-white border border-gray-300 p-4 mb-4 rounded-lg shadow-sm";
    

    card.innerHTML = `
        <h3 class="text-lg font-bold">${issue.title}</h3>
        <p class="text-gray-600 mb-2">${issue.description}</p>
        
        <div class="text-sm text-gray-500">
          <p>Author: ${issue.author}</p>
        </div>
    `;

    levelContainer.append(card);
  });
};

loadLessons();