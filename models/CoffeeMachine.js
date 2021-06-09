const mongoose = require('mongoose');

const coffeeMachineSchema = mongoose.Schema({
    product_type: {
        type: String,
        enum: [
            'COFFEE_MACHINE_LARGE',
            'COFFEE_MACHINE_SMALL',
            'ESPRESSO_MACHINE',
        ],
    },
    water_line_compatible: {
        type: Boolean,
        default: false,
    },
    model: {
        type: String,
    },
    sku: {
        type: String,
    },
});

module.exports = mongoose.model('CoffeeMachine', coffeeMachineSchema);