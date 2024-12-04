import { login, getOneUser, deleteUser, createUser } from './user.controller.js';

const userRoutes = (app) => {
    app.post('/login', login)
    app.get('/user/:id', getOneUser)
    app.delete('/user/:id', deleteUser)
    app.post('/user', createUser)
}

export default userRoutes;

