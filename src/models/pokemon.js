import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    pokedexNum: Number,
    name: String,
    type1: String,
    type2: String,
    total: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    spAtk: Number,
    spDef: Number,
    speed: Number,
    generation: Number,
    legendary: Boolean
})

export default mongoose.models.Pokemon || mongoose.model('Pokemon', schema)