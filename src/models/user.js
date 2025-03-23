import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number
})

export default mongoose.models.User || mongoose.model('User', schema)