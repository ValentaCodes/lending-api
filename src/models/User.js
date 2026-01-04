import {pool} from '../config/connection.js';

const poolConn = pool ;

export const User = {

    findAll: async () => {
        const [users] = await poolConn.query('SELECT * FROM users');
        return users;
    },

    findUser: async (id) => {
        const [user] = await poolConn.query('SELECT * from users where id=?', [id])
        return user;
    }
};

