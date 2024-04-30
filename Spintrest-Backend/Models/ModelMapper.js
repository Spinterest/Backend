const ModelMapper = (objects, mappingFunction) => {
    if (objects){
        if (objects.length > 1) {
            const objectContainer = [];
            for (const object of objects) {
                objectContainer.push(mappingFunction(object));
            }
            return objectContainer;
        }
        if (objects.length === 1) {
            return mappingFunction(objects[0]);
        }
        if (!Array.isArray(objects)){
            return mappingFunction(objects);
        }
    }
    return null;
}

module.exports = ModelMapper;