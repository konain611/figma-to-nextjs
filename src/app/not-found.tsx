import Image from "next/image";
import Link from "next/link";

import errorpicture from './/images/errorpicture.jpg';

export default function NotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={errorpicture} alt="404" width={1000} height={1000} />
            <Link href="/">
                <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-blue-600">
                    Return to Homepage
                </button>
            </Link>
        </div>
    )
}
