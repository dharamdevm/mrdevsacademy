
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: data.messages
      })
    });

    const result = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
