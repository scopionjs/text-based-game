import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
export default function About(){
    return(
        <>
        <Nav />
        <div className="about" >
            <h1>about the site</h1>
        <p1>movie-hub is a user-friendly and responsive website for streaming movies and TV series,developed by <span>joseph siame </span>AKA <span> scopion js</span>   ,movie-hub allows  users to search for their favorite movies either old or newly released.</p1>
        <p2> apart from that, users can check movies that are in box office ,latest ones and the ones that are about to be released. </p2>
        <h2>about the developer</h2>
<p3><span>joseph siame </span>also known as <span> scopion js</span> is an experienced fullstack web developer ,ui/ux designer and desktop app developer residing in mansa ,Zambia. You can contact him for remote work on faceBook by clicking <Link href="https://www.facebook.com/joseph.siame.378" ><a>here</a></Link> </p3>

        </div>
       <Footer ></Footer>
        </>
    )
}