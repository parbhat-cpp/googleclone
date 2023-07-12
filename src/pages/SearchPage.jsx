import { useContext } from "react"
import { DataContext } from "../DataProvider"
import './SearchPage.css'
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@mui/icons-material/Search'
import { Description, Image, LocalOffer, Room, MoreVert } from '@mui/icons-material';

function SearchPage() {

    const [term, setTerm] = useContext(DataContext);
    const { data } = useGoogleSearch(term);

    // const data = Response;

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to='/'>
                    <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage_option">
                                <Description />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="searchPage_option">
                                <Image />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOffer />
                                <Link to='/shopping'>shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <Room />
                                <Link to='/maps'>maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVert />
                                <Link to='/more'>more</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {
                        data?.items.map(item => (
                            <div key={item.id} className="searchPage_result">
                                <a href={item.link}>
                                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                        <img className="searchPage_resultImage" src={
                                            item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                        } />
                                    )}
                                    {item.displayLink}
                                </a>
                                <a className="searchPage_resultTitle" href={item.link}>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPage_resultSnippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default SearchPage