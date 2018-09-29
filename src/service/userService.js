module.exports = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async findUsers() {
        return this.userModel.find();
    }
}