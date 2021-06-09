const CoffeeMachine = require('../models/CoffeeMachine');

exports.getMachines = async(req, res, next) => {
    try {
        const machines = await CoffeeMachine.find(req.query);

        if (machines.length === 0)
            return res.status(404).send({ message: 'No matched results' });

        res.status(200).send({
            qty: machines.length,
            coffeeMachines: machines,
        });
    } catch (error) {

        return res.status(404).send({ message: 'not found' });
    }
};

exports.addMachine = async(req, res, next) => {
    // const machine = await CoffeeMachine.create({
    //     product_type: 'COFFEE_MACHINE_SMALL',
    //     model: 'base',
    //     sku: 'CM001',
    // });
    // const machine = await CoffeeMachine.create({
    //     product_type: 'COFFEE_MACHINE_SMALL',
    //     model: 'premium',
    //     sku: 'CM002',
    // });
    // const machine = await CoffeeMachine.create({
    //     product_type: 'COFFEE_MACHINE_SMALL',
    //     model: 'deluxe',
    //     sku: 'CM003',
    //     water_line_compatible: true,
    // });
    // const machine = await CoffeeMachine.create({
    //     product_type: 'COFFEE_MACHINE_LARGE',
    //     model: 'base',
    //     sku: 'CM101',
    // });
    // const machine = await CoffeeMachine.create({
    //     product_type: 'COFFEE_MACHINE_LARGE',
    //     model: 'deluxe',
    //     sku: 'CM103',
    //     water_line_compatible: true,
    // });
    // const machine = await CoffeeMachine.create({
    //     product_type: 'ESPRESSO_MACHINE',
    //     model: 'deluxe',
    //     sku: 'EM003',
    //     water_line_compatible: true,
    // });
    // const machine = await CoffeeMachine.create({
    //     product_type: 'ESPRESSO_MACHINE',
    //     model: 'base',
    //     sku: 'EM001',
    // });

    res.status(201).send('machine-created');
};