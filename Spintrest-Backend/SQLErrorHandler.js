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

module.exports = queryWrapper;