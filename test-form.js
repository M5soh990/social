fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    access_key: '81e4a0eb-ac26-4e55-956f-1a44943ee750',
    name: 'Antigravity AI',
    email: 'test@antigravity.ai',
    message: 'Hello MohammedSohail! This is a test message from your AI assistant. Your Web3Forms integration is 100% successful and ready for recruiters!'
  })
})
.then(res => res.json())
.then(data => console.log('Response:', data))
.catch(err => console.error('Error:', err));
