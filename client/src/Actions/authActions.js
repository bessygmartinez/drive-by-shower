import axios from "axios";
import { toast } from "react-toastify";

import {
    GET_ERRORS,
} from "./types";

//Register Party
export const registerParty = (partyData, history) => dispatch => {
    axios
    .post("/api/parties/register", partyData)
    .then(res => {
        if (res) {
            history.push("/seeyou") //re-direct to login on successful register
            toast.success("You have successfully reserved your time!")
        }
    }
    ) 
    .catch(err =>
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};