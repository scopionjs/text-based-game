import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import useRouter from "next/router";
export default function Nav() {
  let bar = React.useRef();
  let [value,setValue] = React.useState()
  let search=()=>{
    useRouter.push(`/search-movie/${value}`)
  }
  let sideBar = () => {
    // bar.current.style = " color:red;";
    // bar.current.classList.toggle("see");
    if (bar.current.classList.value == "see") {
      bar.current.style = " display:none;";
      bar.current.classList.toggle("see");
    } else {
      bar.current.style = "";
      bar.current.classList.toggle("see");
    }
    console.log(bar.current.classList);
  };
  return (
    <>
      <nav>
        <div>
          <div className="left">
            <h1>movie-</h1>{" "}
          </div>
          <div className="center">
            <div>
              <button onClick={search} >
                {" "}
                <SearchIcon />{" "}
              </button>
              <input placeholder="search for movies" onChange={(e)=>{setValue(e.target.value)}} type="text" />
            </div>
          </div>
          <div  className="right">
            <div onClick={sideBar}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Link href="/#intro">
              <a>
                <HomeIcon />
              </a>
            </Link>
            <Link href="/comingsoon">
              <a>coming soon</a>
            </Link>
            <Link href="/series">
              <a>series</a>
            </Link>
            <Link href="/about">
              <a>about</a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="" style={{ display: "none" }} ref={bar}>
        <div>
          <Link href="/#intro">
            <a>
              <HomeIcon />
            </a>
          </Link>
          <Link href="/comingsoon">
            <a>coming soon</a>
          </Link>
          <Link href="/series">
            <a>series</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
        </div>
      </div>
    </>
  );
}
