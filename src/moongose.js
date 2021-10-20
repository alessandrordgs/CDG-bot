const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://alessandrordgs:root03082018@mongodb.qvobj.mongodb.net/primeiroTeste?retryWrites=true&w=majority')

async function mongodb(req, res){
  try {
    const schema = new mongoose.Schema({name: 'string', size: 'string'})
    const MyModel= mongoose.model('Teste', schema)

    MyModel.create({size :"smal"},(err, small)=>{
      if(err) return console.log(err)
      console.log(small)
    })

    return res.json({
      message:"passou"
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  mongodb
}

