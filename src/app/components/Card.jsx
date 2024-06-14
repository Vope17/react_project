/**  
* @author Vope <kkeea1020@gmail.com>
*/
import Image from "next/image";
export default function CustomCard({item}) {
    return (
        <div className="border">
            <Image loader={() => item.Picture.PictureUrl1} src={item.Picture.PictureUrl1} width={500} height={500}/>
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}