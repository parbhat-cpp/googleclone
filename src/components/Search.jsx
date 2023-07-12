import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useStateValue } from '../StateProvider';
// import { actionTypes } from '../reducer';
import { DataContext } from '../DataProvider';

function Search({ hideButtons = false }) {

    const [term, setTerm] = useContext(DataContext);

    const [input, setInput] = useState("");

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        console.log('hit', input);

        // dispatch({
        //     type: actionTypes.SET_SEARCH_TERM,
        //     term: input
        // })

        setTerm(input);

        navigate('/search');
    }

    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {
                !hideButtons ? (
                    <div className='search_buttons'>
                        <Button variant='outlined' onClick={search} type='submit'>
                            Google Search
                        </Button>
                        <Button variant='outlined'>
                            {`I'm Feeling Lucky`}
                        </Button>
                    </div>
                ) : (
                    <div className='search_buttons'>
                        <Button className='search_buttonHidden' variant='outlined' onClick={search} type='submit'>
                            Google Search
                        </Button>
                        <Button className='search_buttonHidden' variant='outlined'>
                            {`I'm Feeling Lucky`}
                        </Button>
                    </div>
                )
            }

        </form>
    )
}

export default Search