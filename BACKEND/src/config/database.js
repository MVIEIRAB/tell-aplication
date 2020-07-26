const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/telzir'

mongoose.connect(url, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});

module.exports = mongoose