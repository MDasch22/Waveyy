import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { thunkSearchAllBeaches } from '../../store/searchbar';

import './searchbar.css'


export default function SearchBar() {
  const dispatch = useDispatch()

  const [filteredBeaches, setFilteredBeaches] = useState([])
  const [wordEntry, setWordEntry] = useState('');

  const beaches = useSelector(state => Object.values(state.search))

  useEffect(() => {
    dispatch(thunkSearchAllBeaches())
  }, [dispatch])

  useEffect(() => {
    const closeSeach = (e) => {
      console.log(e.path[0].tagName)
      if(e.path[0].tagName !== "INPUT"){
        setFilteredBeaches([])
        setWordEntry('')
      }
    }
    document.body.addEventListener("click", closeSeach)
    return () => document.body.removeEventListener("click", closeSeach)
  })

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntry(searchWord);
    const newFilter = beaches.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    });

    if (searchWord === "") {
        setFilteredBeaches([])
    } else {
        setFilteredBeaches(newFilter)
    }
  }

  const click = () => {
    setFilteredBeaches([])
    setWordEntry('')
  }

  return (
    <div>
      <form id='search-form' onSubmit={(e) => e.preventDefault()}>
        <input value={wordEntry} placeholder="Find Your Beach" className='search-input' onChange={handleFilter}/>
        <div className='search-icon'>
          {!wordEntry ?
            <svg aria-label="Search" class="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16">
            <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
          </svg>
          :
            <div onClick={click} className='x-search'><i className="fa-solid fa-circle-xmark"></i></div>
          }
        </div>
      </form>
      {filteredBeaches.length !== 0 && (
        <div className='searched-results-container'>
          {filteredBeaches.slice(0, 6).map(beach => {
            return (
              <div id='background-color'>
                <NavLink onClick={click} id="searched-beach" to={`/beaches/${beach.id}`}>
                    <p id="search-beach-title">{beach.title}</p>
                    <p id="search-city">{beach.city}</p>
                </NavLink>
              </div>
            )}
          )}
        </div>
      )}
    </div>
  )
}
