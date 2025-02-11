import Image from "next/image";
import logo from '../images/logo.png';

export default function Logo() {
    return (

        <div className="mt-10 border-gray-300 flex justify-center">
            <Image src={logo} alt="logo" width={800} height={300} />
        </div>
    )
}
