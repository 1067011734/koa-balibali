const {createApi} = require('../config/axios')
const login =createApi('/login')
module.exports={
  login
}