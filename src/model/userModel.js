class MongoModelSimulate {
    async find() {
        return [{
            "user": "Denis"
        }, {
            "user": "Jose"
        }]
    }
}

module.exports = new MongoModelSimulate();