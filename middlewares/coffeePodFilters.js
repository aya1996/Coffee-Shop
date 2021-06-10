module.exports = (req, res, next) => {
    let { product_type, coffee_flavor, pack_size } = req.query;

    if (!product_type && !coffee_flavor && !pack_size) return next();



    coffee_flavor = coffee_flavor ? coffee_flavor.toLowerCase() : null


    switch (coffee_flavor) {
        case 'vanilla':
            req.query.coffee_flavor = 'COFFEE_FLAVOR_VANILLA';
            break;
        case 'caramel':
            req.query.coffee_flavor = 'COFFEE_FLAVOR_CARAMEL';
            break;
        case 'psl':
            req.query.coffee_flavor = 'COFFEE_FLAVOR_PSL';
            break;
        case 'mocha':
            req.query.coffee_flavor = 'COFFEE_FLAVOR_MOCHA';
            break;
        case 'hazelnut':
            req.query.coffee_flavor = 'COFFEE_FLAVOR_HAZELNUT';
            break;
    }

    product_type = product_type ? product_type.toLowerCase() : null;
    switch (product_type) {
        case 'small':
            req.query.product_type = 'COFFEE_POD_SMALL';
            break;
        case 'large':
            req.query.product_type = 'COFFEE_POD_LARGE';
            break;
        case 'espresso':
            req.query.product_type = 'ESPRESSO_POD';
            break;
    }

    next();
};