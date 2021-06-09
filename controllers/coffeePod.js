const CoffeePod = require('../models/CoffeePod');

exports.getPods = async (req, res, next) => {
    try {
        const pods = await CoffeePod.find(req.query);
        if (pods.length === 0)
            return res.status(404).send({ message: 'No matched results' });

        res.status(200).send({ qty: pods.length, CoffeePods: pods });
    } catch (error) {
        return res.status(404).send({ message: 'No matched results' });
    }
};

exports.addPod = async (req, res, next) => {
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
    //     pack_size: 1,
    //     sku: 'CP001',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
    //     pack_size: 3,
    //     sku: 'CP003',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
    //     pack_size: 1,
    //     sku: 'CP011',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
    //     pack_size: 3,
    //     sku: 'CP013',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_PSL',
    //     pack_size: 1,
    //     sku: 'CP021',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
    //     pack_size: 1,
    //     sku: 'CP031',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
    //     pack_size: 3,
    //     sku: 'CP043',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'COFFEE_POD_SMALL',
    //     coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
    //     pack_size: 1,
    //     sku: 'CP041',
    // });
    // const pod = await CoffeePod.create({
    //     product_type: 'ESPRESSO_POD',
    //     coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
    //     pack_size: 3,
    //     sku: 'EP013',
    // });

    res.status(201).send('pod');
};
