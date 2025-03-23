import mongoose from 'mongoose'

new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number
})

export default mongoose.model('User', schema)