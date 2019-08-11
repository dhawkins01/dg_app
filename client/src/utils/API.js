import axios from "axios";

export default {
    getCourses: function(query) {
        return axios.get("/api/courses", {params: { q: query } });
    }
}