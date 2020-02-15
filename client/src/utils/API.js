import axios from "axios";
export default {
    getAllPrograms: function (id) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/programs/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        });
    },
    getAllEvents: function (id) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/events/" + id,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
           
        })
    },
    getUserInformationFromDb: function () {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/users/information",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }, 
    getAllConversations: function() {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "GET",
            url: "/api/conversations/all",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    },
    createConversation: function(conversation) {
        const token = JSON.parse(localStorage.getItem("okta-token-storage")).idToken.idToken

        return axios({
            method: "POST", 
            url: "/api/conversations/create", 
            data: {
                "conversation": conversation
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
    }
}