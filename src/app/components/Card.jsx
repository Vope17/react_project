/**  
* @author Vope <kkeea1020@gmail.com>
*/
import Image from "next/image";
export default function CustomCard({item}) {
    return (
        <div className="container mx-auto border-4 border-gray-300">
            <Image loader={() => item.Picture.PictureUrl1} src={item.Picture.PictureUrl1} width={500} height={500}/>
            <div className="text-2xl font-bold tracking-tight ttext-gray-900 dark:text-white">{item.ScenicSpotName}</div>
            <div>{item.DescriptionDetail}</div>
        </div>
    )
}