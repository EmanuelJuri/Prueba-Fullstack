import { useEffect, useState } from "react";
import { getUserById } from "../services/user";

export default function useUser(id) {
    const [user, setUser] = useState(null)

    const getDataUser = (id) => {
        getUserById(id).then(set => setUser(set))
    }

    useEffect(() => {
        getDataUser(id)
    }, [])

    return [user]
};
