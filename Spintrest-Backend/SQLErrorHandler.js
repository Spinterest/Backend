const queryWrapper = async (
    response,
    query,
    ...parameters
) => {
    try {
        return await query(...parameters);
    } catch (error) {
        console.error('Error executing query:', error);
        response.status(500).json({error: error});
    }
}

const throwAlert = (message) => {
    console.log(`Alert: ${message}`);
    return {alert: message};
}

const variableChecker = (
    response,
    ...parameters
) => {
    parameters.forEach(
        (parameter) => {
            if (response.statusCode !== 500 && (parameter === null || parameter === undefined)){
                console.error('Error, got undefined parameter:');
                response.status(500).json({error: 'undefined parameter'});
            }
        }
    );

    return response.statusCode !== 500;
}

const jsonChecker = (
    response,
    body,
    keys
) => {
    keys.forEach(
        (key) => {
            if (response.statusCode !== 500){
                if (!body.hasOwnProperty(key)){
                    console.error(`Error, expected key: ${key}`);
                    response.status(500).json({error: `expected key: ${key}`});
                    return;
                }
                if (!body[key]){
                    console.error(`Error, undefined value for key: ${key}`);
                    response.status(500).json({error: `undefined value for key: ${key}`});
                }
            }
        }
    );

    return response.statusCode !== 500;
}

module.exports = {
    queryWrapper,
    variableChecker,
    jsonChecker,
    throwAlert
};