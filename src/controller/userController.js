module.exports = class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getUsers(req, res) {
        const users = await this.userService.findUsers();
        return res.json(users);
    }
}