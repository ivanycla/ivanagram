import axios from "axios";

const Photo = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
        const photoArr = response.data.slice(0, 100).map(item => item.thumbnailUrl);
        const randomPhoto = Math.floor(Math.random() * photoArr.length);
        return  `https://randomuser.me/api/portraits/men/${randomPhoto}.jpg`;
      
    } catch(err) {
        console.error("ошибка",err)
        throw err; 
    }
}

export default Photo;