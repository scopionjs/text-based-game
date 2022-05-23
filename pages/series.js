import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Footer from "../components/footer";
import Nav from "../components/nav";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useRouter from "next/router";
export async function getStaticProps() {
    //series
    let data = await axios.get(
      "https://imdb-api.com/en/API/MostPopularTVs/k_s7yib37b"
    );
    return {
      props: {
        data: data.data,
      },
      revalidate: 120,
    };
  }
  
export default function Series({ data }) {
    return (
      <> 
       <Nav />
        <div className="series" >
        <div className="trends" id="trends">
          {data.items.map((data, index) => (
            <div key={index}>
              <div>
                <Image alt={data.title} src={data.image} layout="fill" />
              </div>
              <section>
                <h3>{data.title}</h3>
                <div>
                  <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                  <StarIcon />
                </div>
                <p>{data.year}</p>
                <Link href={`/view-movie/${data.id}`}>
                  <a>
                    <VisibilityIcon />
                    <p>watch</p>
                  </a>
                </Link>
              </section>
            </div>
          ))}
        </div>
        </div>
        <Footer />
      </>
    );
  }
  