import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Footer from "../components/footer";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useRouter from "next/router";
import Nav from "../components/nav";
export async function getServerSideProps(ctx) {
    let data = await axios.get(
      `https://imdb-api.com/en/API/ComingSoon/k_s7yib37b`
    );
    return {
      props: {
        data: data.data,
      },
    };
  }
export default function ComingSoon({ data }) {
  
  return (
    <> 
    <Nav />
      <div className="coming-soon-items-wrapper" >
        {data.items.map((item, index) => (
          <div key={index} className="coming-soon-item">
            <div>
              <Image alt={item.title} src={item.image} layout="fill" />
            </div>
              <h4>{item.title}</h4>
              <h5>to be released on {item.releaseState} {item.year}</h5>
              <h6> {item.starList[0].name},{item.starList[1].name},{item.starList[2].name}</h6>

          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
