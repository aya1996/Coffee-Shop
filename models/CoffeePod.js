const mongoose = require('mongoose');

const coffeePodSchema = mongoose.Schema({
    product_type: {
        type: String,
        enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'],
    },
    coffee_flavor: {
        type: String,
        enum: [
            'COFFEE_FLAVOR_VANILLA',
            'COFFEE_FLAVOR_CARAMEL',
            'COFFEE_FLAVOR_PSL',
            'COFFEE_FLAVOR_MOCHA',
            'COFFEE_FLAVOR_HAZELNUT',
        ],
    },
    pack_size: {
        type: Number,
        enum: [1, 3, 5, 7],
    },
    sku: {
        type: String,
    },
});

module.exports = mongoose.model('CoffeePod', coffeePodSchema);