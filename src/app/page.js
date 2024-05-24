/**  
* @author Vope <kkeea1020@gmail.com>
*/
import Link from "next/link";
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

export default function Home() {
  const items = 
  [
    {
      cover:"/banner/rainbowEye.jpg",
      name:"彩虹眼",
      description: "雲林雨後的彩虹與農田相互輝映",
    },
    {
      cover:"/banner/yuntech.jpg",
      name:"雲林科技大學",
      description: "位於斗六的雲科大",
    },
    {
      cover:"/banner/mountain.jpg",
      name:"華山",
      description: "雲林華山",
    },
    {
      cover:"/banner/green.jpg",
      name:"綠色隧道",
      description: "雲林綠色隧道，假日有攤販",
    },
    {
      cover:"/banner/station.jpg",
      name:"雲林斗六車站",
      description: "雲林火車站",
    },
  ]
  return (
    <>
      <div className="bg-cyan-800">
        <div className="container mx-auto">
          <Navbar fluid className="bg-cyan-800">
            <NavbarBrand as={Link} href="/">
              <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
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
          <img src="/banner/rainbowEye.jpg" alt="彩虹眼 由 蔡佩書拍攝" />
          <img src="/banner/yuntech.jpg" alt="由 Zhuang kuonan - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=65669091"/>
          <img src="/banner/green.jpg" alt="..." />
          <img src="/banner/mountain.jpg" alt="..." />
          <img src="/banner/station.jpg" alt="..." />
        </Carousel>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          { items.map(item =>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={item.cover}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
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
