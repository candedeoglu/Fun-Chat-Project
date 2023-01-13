import openai_secret_manager

# Use the openai_secret_manager library to get the API key
secrets = openai_secret_manager.get_secrets("openai")
api_key = secrets["api_key"]

# Import the OpenAI library
import openai

# Set the API key
openai.api_key = api_key

# Define the question
question = "What is the capital of France?"

# Use the OpenAI API to generate an answer
response = openai.Completion.create(
    engine="text-davinci-002",
    prompt=question,
    max_tokens=2048,
    n = 1,
    stop=None,
    temperature=0.5
)

# Print the answer
answer = response["choices"][0]["text"]
print("Answer: ", answer)

