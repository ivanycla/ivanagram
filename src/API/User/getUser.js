import axios from "axios";

const getUser = async () => {
    try {
        const response = await axios.get("https://randomuser.me/api/?results=70");
        const users = response.data.results;

        

        const randomIndex = Math.floor(Math.random() *56);
        const userData = users[randomIndex];

        return {
            name: `${userData.name.first} ${userData.name.last}`,
            avatar: userData.picture.thumbnail
        };
    } catch (err) {
        console.error("Ошибка:", err.message);
        
        
    }
};

export default getUser;