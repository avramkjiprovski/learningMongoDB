const mongoose = require('mongoose');


console.log("Index.js started...")

mongoose.connect('mongodb://localhost:27017/flashCards', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO ERROR!", err)
    })

const fcSchema = new mongoose.Schema({
    title: String,
    frontContent: String,
    backContent: String,
    frontSide: Boolean
})

const Cards = mongoose.model('Cards', fcSchema)

// Cards.insertMany([
//     {
//         title: 'Maths',
//         frontContent: 'front 0',
//         backContent: 'back 0',
//         frontSide: true
//     },
//     {
//         title: 'Maths',
//         frontContent: 'front 1',
//         backContent: 'back 1',
//         frontSide: true
//     },
//     {
//         title: 'Maths',
//         frontContent: 'front 2',
//         backContent: 'back 2',
//         frontSide: true
//     },
//     {
//         title: 'Biology',
//         frontContent: 'front 0',
//         backContent: 'back 0',
//         frontSide: true
//     },
//     {
//         title: 'Biology',
//         frontContent: 'front 1',
//         backContent: 'back 1',
//         frontSide: true
//     }
// ])
// .then(data => {
//     console.log("SHIT WORKED ", data)
// })