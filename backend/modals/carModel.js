const mongoose = require('mongoose');

const carShcema = new mongoose.Schema({

    Name: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: String, required: true },
    feulType: { type: String, required: true },
    bookedTimeSlot: [
        {

        day: { type: String, required: true },
        from: { type: String, required: true },
        to: { type: String, required: true },

    },
],

rentperHour:{ type: String, required: true },
},{timestamps:true}
)

module.exports = mongoose.model('Cars', carShcema)


