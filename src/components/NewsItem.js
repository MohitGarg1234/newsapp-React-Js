// FUNCTION BASED COMPONENT
import React, { useState,useEffect } from 'react'
import { getAuth} from "firebase/auth";
import { getDatabase, push, set, ref,remove,onValue} from 'firebase/database';

const NewsItem =(props)=> {

  const routeChange = () =>{ 
    window.open(newsUrl, '_blank');
  }
  const [isClicked, setIsClicked] = useState(true);
  const auth = getAuth();
  const database = getDatabase();
  const user = auth.currentUser;
  // const data = props;
  const [label, setLabel] = useState('');
  const [data, setData] = useState(props);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const user = auth.currentUser;

    if (!user) {
      // User is not authenticated, handle accordingly
      return;
    }

    const userId = user.uid;
    const entriesRef = ref(database,`users/${userId}/entries`);

    // Listen for changes in the entries and update the state
    const unsubscribe = onValue(entriesRef, (snapshot) => {
      const entriesData = snapshot.val();
      const entriesArray = entriesData ? Object.entries(entriesData) : [];
      setEntries(entriesArray);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line 
  }, []);

  const favorite = async () => {
    if(user){
      setIsClicked(!isClicked);
      if(isClicked){
        const userId = auth.currentUser.uid;
        console.log(userId);
        const database = getDatabase();
        const entriesRef = ref(database,`users/${userId}/entries`);
        try {
          const newEntryRef = push(entriesRef);
          await set(newEntryRef, { label, data });
          console.log('Data saved successfully!');
        } catch (error) {
          console.error('Error saving data:', error.message);
        }
      }
      else{
        const userId = auth.currentUser.uid;
        const database = getDatabase();
        // const entriesRef = ref(database,`users/${userId}/entries`);
        const existingEntry = entries.find(([_, entryData]) => entryData.label === label);
        if (existingEntry) {
          // If it exists, delete the entry
          const [existingEntryKey] = existingEntry;
          const entryRef = ref(database,`users/${userId}/entries/${existingEntryKey}`);
          
          try {
            await remove(entryRef);
            console.log('Entry deleted successfully!');
          } catch (error) {
            console.error('Error deleting entry:', error.message);
          }
        } 
      }
    }
    else{
      alert("Login/SignUp First");
    }
  };

  const iconStyle = {
    color: isClicked ? 'black' : 'red', 
    cursor: 'pointer',
    marginLeft:"73%"
  };
  
    let {title,description,ImageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-1'>
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
            <span className='badge rounded-pill bg-danger' style={{left:'70%',zIndex:'1'}}>{source}</span>
          </div>
            <img onClick={routeChange} src={ImageUrl===null?"https://img.freepik.com/premium-photo/top-view-abstract-paper-texture-background_225709-2718.jpg?w=2000":ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body" >
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a onClick={routeChange} rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                <i id="saveIcon" onClick={favorite} className="fa-solid fa-star" style={iconStyle} ></i>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem


