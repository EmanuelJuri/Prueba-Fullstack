import { useEffect, useState } from "react";
import { getAllBills } from "../services/bill";

export default function useBill() {
    const [bill, setBill] = useState(null)

    const getDataBill = () => {
        getAllBills().then(set => setBill(set))
    }

    useEffect(() => {
        getDataBill()
    }, [])

    return bill
};
