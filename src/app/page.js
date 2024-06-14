/**  
* @author Vope <kkeea1020@gmail.com>
*/

'use client';
import Link from "next/link";
import Image from "next/image"
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle
} from "flowbite-react";
import CustomCard from './components/Card'
import { useEffect, useState} from "react";
export default function Home() {

  const [items, setItems] = useState([]);
  useEffect(() =>
  {
    async function fetchData()
    {
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);

      setItems(data.apiData);
    }
    fetchData();
  }, [])
  return (
    <>
      <div className="bg-cyan-800">
        <div className="container mx-auto">
          <Navbar fluid className="bg-cyan-800">
            <NavbarBrand as={Link} href="/">
              <Image loader={() => ("https://www.yuntech.edu.tw/images/website_png/Group_640.png")} src={"https://www.yuntech.edu.tw/images/website_png/Group_640.png"} width={500} height={500}/>
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Yuntech traverling</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">
                Traffic
                </span>
              </NavbarLink>
              <NavbarLink as={Link} href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">
                Attraction
                </span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">
                  Attraction
                </span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">
                  About Us
                </span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">
                  Contact Us 
                </span>
              </NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
          </Navbar>
        </div>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <Image loader={() => "/banner/rainbowEye.jpg"} src={"/banner/rainbowEye.jpg"} width={500} height={500}/>
          <Image loader={() => ("/banner/yuntech.jpg")} src={"https://www.yuntech.edu.tw/images/website_png/Group_640.png"} width={500} height={500}/>
          <Image loader={() => ("/banner/green.jpg")} src={"/banner/green.jpg"} width={500} height={500}/>
          <Image loader={() => ("/banner/mountain.jpg")} src={"/banner/mountain.jpg"} width={500} height={500}/>
          <Image loader={() => ("/banner/station.jpg")} src={"/banner/station.jpg"} width={500} height={500}/>
        </Carousel>
      </div>

      
      <div className="container mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          { items.map((item, index) => 
            <CustomCard item={item} key={index}/>   
          )}
        </div>
      </div>
      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </>
  );
}
