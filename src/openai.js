import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export async function generateStatusExplanation(apiName) {
  const prompt = `Write a short, witty, slightly sarcastic status message explaining that the API called "${apiName}" is currently down or dead.`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 40,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const message = response.data.choices[0].message.content.trim();
    return message;
  } catch (error) {
    console.error('OpenAI API error:', error);
    return 'Status message unavailable.';
  }
}
