import axios from "axios";

const Comments = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        const commentArr = response.data.slice(0, 100).map(item => item.body);
        const randomCom = Math.floor(Math.random() * commentArr.length);
        return commentArr[randomCom];
    } catch(err) {
        alert("Ошибка", err);
        throw err; 
    }
}

export default Comments;