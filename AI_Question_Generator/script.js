document.getElementById("questionForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    subject: form.subject.value,
    country: form.country.value,
    grade: form.grade.value,
    topic: form.topic.value,
    number: form.number.value,
    type: form.type.value,
    prompt: form.prompt.value.trim(),
  };

  const userPrompt = `Generate a question paper for:\nSubject: ${data.subject}\nCountry: ${data.country}\nLevel: ${data.grade}\nTopic: ${data.topic}\nQuestion Type: ${data.type}\nNumber of Questions: ${data.number}` + (data.prompt ? `\nAdditional Instructions: ${data.prompt}` : "");

  const output = document.getElementById("output");
  output.textContent = "⏳ Generating questions...";

  try {
    const response = await fetch("/.netlify/functions/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are an expert in creating academic question papers." },
          { role: "user", content: userPrompt }
        ]
      })
    });

    const result = await response.json();
    output.textContent = result.choices?.[0]?.message?.content || "⚠️ Error generating paper.";
  } catch (error) {
    console.error(error);
    output.textContent = "❌ An error occurred while generating questions.";
  }
});
