import React,{useState,useEffect} from 'react'
import { getAuth} from "firebase/auth";
import { getDatabase,ref,onValue} from 'firebase/database';
const Favorites = () => {
  const [newsList, setNewsList] = useState([]);
  const auth = getAuth();
  const database = getDatabase();
  useEffect(() => {
    const user = auth.currentUser;
    const userId = user.uid;
    const newsRef = ref(database,`users/${userId}/entries`);
    const onValueChange = (snapshot) => {
      const newsData = snapshot.val();
      if (newsData) {
        const newsArray = Object.keys(newsData).map((newsId) => ({
          newsId,
          ...newsData[newsId].data,
        }));
        console.log(newsData);
        if(newsData.ImageUrl){
          console.log(userId,newsData.ImageUrl);
        }
        setNewsList(newsArray);
      } else {
        setNewsList([]);
      }
    };

    const unsubscribe = onValue(newsRef, onValueChange);
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>News List</h1>
      {newsList.length > 0 ? (
        <ul>
          {newsList.map((news) => (
            <li key={news.newsId}>
              <h2>{news.title}</h2>
              <p>{news.description}</p>
              {news.ImageUrl!==undefined ? (
                <img src={news.ImageUrl} alt="News" />
              ) : (
                <p>
                </p>
                
              )}
              <p>{news.author}</p>
              <p>{news.date}</p>
              <p>{news.source}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available.</p>
      )}
    </div>
  )
}

export default Favorites
