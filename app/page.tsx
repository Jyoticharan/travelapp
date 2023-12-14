'use client'
import Hero from "@/components/Hero"
import Camp from "@/components/Camp"
import GetApp from "@/components/GetApp"
import Guide from "@/components/Guide"
import Feature from "@/components/Features"
import Features from "@/components/Features"
// import { useRouter } from 'next/navigation';
import Image from "next/image";


 function Home(){
//   const router = useRouter();
  return(
     <>


      <Hero/> 
      <Camp/>
     <Guide/>
     <Features/>
     <GetApp/>
     </>
  );
}
export default Home;