import { useState, useEffect } from 'react';
import Photo from '../../API/Photo/Photo';
import getPost from '../../API/getPost/getPost';
import getUser from '../../API/User/getUser';
const UseUserPostPhoto = () => {
  const [photo, setPhoto] = useState('');
  const [postText, setPostText] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        
        const [photoRes, postRes, userRes] = await Promise.all([
          Photo(),
          getPost(),
          getUser()
        ]);

        setPhoto(photoRes);
        setPostText(postRes);
        setUser(userRes);
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return { photo, postText, user, loading, error };
};

export default UseUserPostPhoto;