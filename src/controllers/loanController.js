import {Loan} from "../models/Loan.js";

export const getSelfLoans = async (req, res) => {
    try {
        const loans = await Loan.getSelfLoans();

        if (!loans || loans.length === 0) {
            return res.status(404).json({error: "You have no loans"})
        }

        res.status(200).json({
            success: true,
            loans: loans
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            error: e.message
        });
    }
};