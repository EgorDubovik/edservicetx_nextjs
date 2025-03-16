import Bosh from "../../public/logos/BOSCH.png";
import Electrolux from "../../public/logos/Electrolux.png";
import Frigidaire from "../../public/logos/Frigidaire.png";
import GE from "../../public/logos/GE_Applaince.png";
import Whirlpool from "../../public/logos/Whirlpool.png";
import Samsung from "../../public/logos/Samsung.png";
import LG from "../../public/logos/LG.png";
import Thermador from "../../public/logos/Thermador.png";
import Mytag from "../../public/logos/MAYTAG.png";
import KitchenAid from "../../public/logos/KitchenAid.png";
import Janair from "../../public/logos/Jenn-Air.png";
import Hotpoint from "../../public/logos/Hotpoint.png";
import Image from "next/image";
export default function Brands() {
   return (
      <div className="my-10 hidden md:block">
         <div className="flex items-center justify-center gap-x-8 opacity-40">
            <Image src={Bosh} alt="Bosh" height={50} />
            <Image src={Electrolux} alt="Electrolux" height={50} />
            <Image src={Frigidaire} alt="Frigidaire" height={50} />
            <Image src={GE} alt="GE" height={50} />
            <Image src={Whirlpool} alt="Whirlpool" height={40} />
            <Image src={KitchenAid} alt="KitchenAid" height={50} />
            <Image src={Samsung} alt="Samsung" height={50} />
            <Image src={LG} alt="LG" height={30} />
            <Image src={Thermador} alt="Thermador" height={50} />
            <Image src={Hotpoint} alt="Hotpoint" height={50} />
            <Image src={Janair} alt="Janair" height={50} />
            <Image src={Mytag} alt="Mytag" height={30} />
         </div>
      </div>
   );
}
