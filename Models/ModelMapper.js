const ModelMapper = (objects, mappingFunction) => {
    if (objects.length > 1) {
        const objectContainer = [];
        for (const object of objects) {
            objectContainer.push(mappingFunction(object));
        }
        return objectContainer;
    }
    if (objects.length == 1) {
        return mappingFunction(objects[0]);
    }
    return null;
}

module.exports = ModelMapper;