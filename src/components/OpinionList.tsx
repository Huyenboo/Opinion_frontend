import { useState, useEffect } from 'react';
import { fetchOpinions } from '../api/opinion'; 

const OpinionList = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpinions()
      .then(data => {
        setOpinions(data);
        setLoading(false); 
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div >

    </div>
  );
};

export default OpinionList;