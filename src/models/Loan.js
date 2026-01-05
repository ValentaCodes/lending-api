import {pool} from '../config/connection.js'

const poolConn = pool ;

export const Loan = {

    //user
    createLoan: async (id) => {},

    //admin
    deleteLoan: async () => {},

    //reviewer/admin
    reviewLoan: async () => {},

    //admin (see all existing loans)
    getAllLoans: async ()=> {},

    //user (if any exist, only owned loans)
    getSelfLoans: async () => {},


}
