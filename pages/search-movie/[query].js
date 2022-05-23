import useRouter from "next/router";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import axios from "axios";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter as router} from 'next' ;
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export async function getServerSideProps(ctx) {
    let data = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_s7yib37b/${ctx.params.query}`
    );
    return {
      props: {
        data: data.data,
      },
    };
  } 
export default function Searched({data}){
    return(
    <div>
      <Nav />
      {
          data.results.length==0?(<p>not founs</p>):(
          <div className="searched-results" >{
         data.results.map((item,index)=>(
         <div className="found-item" key={index} >
         <div >
            <div>
            <Image alt={item.title} src={item.image} layout="fill" />
          </div>
        </div>
        <section>
         <p>{item.title}</p>
         <Link href={`/view-movie/${item.id}`} ><a>watch now</a></Link>
        </section>

         </div>
    ))
    }
          </div>
          )
      }
     
      <Footer />
    </div>
    )
}