module.exports = (req, res, next) => {
    console.log(req.query);

    let { product_type, water_line } = req.query;

    if (!product_type && !water_line) return next();

    if (water_line) {
        req.query.water_line_compatible = req.query.water_line;
        req.query.water_line = null;
    }

    product_type = product_type ? product_type.toLowerCase() : null;

    switch (product_type) {
        case 'small':
            req.query.product_type = 'COFFEE_MACHINE_SMALL';
            break;
        case 'large':
            req.query.product_type = 'COFFEE_MACHINE_LARGE';
            break;
        case 'espresso':
            req.query.product_type = 'ESPRESSO_MACHINE';
            break;
    }

    next();
};