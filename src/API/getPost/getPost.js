import axios from "axios";

const getPost = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const postArr = response.data.slice(0, 100).map(item => item.body);
        const randomPost = Math.floor(Math.random() * postArr.length);
        return postArr[randomPost];
    } catch(err) {
        alert("Ошибка", err);
        throw err; 
    }
}

export default getPost;