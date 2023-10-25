import styles from './Hero.module.css';
import {AiOutlineSearch} from 'react-icons/ai'

function handleClick(){
  alert('Congratulations from Jezreelfasa, submitted successfully!')
}
const Hero = () => {
  
  return (
    <div className={styles.hero}>
     <form>
        <div className={styles.text}>
            <label>Where</label>
            <input className={styles.text_input}type="text" placeholder = "search Location" />
        </div>
        <div className={styles.from}>
            <span className={styles.border}></span>
            <label>From</label>
            <input type="date" />
        </div>
        <div className={styles.until}>
        <span className={styles.border}></span>
            <label>Unitl</label>
            <input type="date" />
        </div>
        <div className={styles.search_btn}>
            <AiOutlineSearch className={styles.icon} />
            <button onClick={handleClick} className={styles.btn}>Search for cars</button>
            
        </div>
     </form>
    </div>
  )
}


export default Hero;


/*import { useState } from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Store the search results

  const handleSearch = async () => {
    try {
      const response = await fetch(`YOUR_API_ENDPOINT?query=${searchValue}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data); // Update search results state
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error while making the API request:', error);
    }
  };

  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input
            className={styles.text_input}
            type="text"
            placeholder="Search Location"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch className={styles.icon} />
          <button className={styles.btn} onClick={handleSearch}>
            Search for cars
          </button>
        </div>
      </form>

      {/* Display search results *//*}*/
      /*
      <div>
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results</h2>
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>{result.name}</li> // Replace with your API response structure
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero; 

*/