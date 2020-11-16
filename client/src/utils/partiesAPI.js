import axios from "axios";

export default {
  // GETS all parties
  getAllParties: function() {
    return axios.get("/api/parties/");
  },

  // POST a party to the database
  saveParty: function(partyData) {
    return axios.post("/api/parties/", partyData);
  }
};