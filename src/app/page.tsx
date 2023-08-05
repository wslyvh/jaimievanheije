import Image from "next/image";
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col container max-w-xl mx-auto mt-24 px-8 items-center">
      <div>
        <Image
          className="relative"
          src="/logo.png"
          alt="Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="mt-4">
        <p className="my-4">
          Nieuwe ideeën, een frisse wind en een blank canvas om alle
          creativiteit weer op los te laten! Na 11 jaar is het tijd om iets
          nieuws te gaan doen. Dat betekent ook dat we stoppen met Jaimie van
          Heije Restaurant in Ouderkerk aan de Amstel.
        </p>
        <p className="my-4">
          Op dit moment is het restaurant gesloten en is het niet mogelijk om te
          reserveren. Als je benieuwd bent naar de toekomstplannen, kun je mijn
          Instagram volgen voor nieuwe ontwikkelingen en updates.
        </p>
      </div>
      <div className="flex mt-4 gap-8">
        <a href="mailto:info@jaimievanheije.nl">
          <FaEnvelopeSquare size={24} />
        </a>
        <a href="https://www.facebook.com/JaimieVanHeijeRestaurant">
          <FaFacebookSquare size={24} />
        </a>
        <a href="https://www.instagram.com/jaimievanheije/">
          <FaInstagram size={24} />
        </a>
      </div>
    </main>
  );
}
