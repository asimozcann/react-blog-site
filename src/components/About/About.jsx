import Wrapper from "../UI/Wrapper";
import AboutForm from "./AboutForm";

const About = () => {
  return (
    <Wrapper className="">
      <h1 className="text-center text-4xl md:text-5xl my-8">Hakkımda</h1>
      <div className="text-center text-[16px] md:text-xl md:p-12 text-balance leading-relaxed">
        <p className="mb-5">
          Merhaba, ben Asım. Bu blogda hem öğreniyor hem de öğrendiklerimi
          paylaşıyorum. Yazmaya olan ilgim, merakla araştırdığım konuları derli
          toplu bir şekilde ifade etme ihtiyacından doğdu. İlgi alanlarım
          arasında React, JS ve HTML yer alıyor. Gündelik hayatımdan kesitler,
          deneyimlerim ve faydalı bulduğum içerikleri bu sayfada seninle
          buluşturuyorum. Amacım, benzer ilgi alanlarına sahip insanlarla bir
          araya gelmek ve birlikte gelişmek. Sen de burada kendinden bir parça
          bulursan, ne mutlu bana. Keyifli okumalar!
        </p>

        <span>asm_ozcnn@outlook.com</span>
        <div className="flex justify-center text-2xl items-center gap-5 my-5">
          <a href="https://github.com/asimozcann" target="_blank">
            <i className="fa-brands fa-github transition-all duration-30000  hover:text-red-600"></i>
          </a>
          |
          <a
            href="https://www.linkedin.com/in/as%C4%B1m-%C3%B6zcan-a859b9290/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin transition-all duration-300  hover:text-red-600"></i>
          </a>
        </div>
      </div>
      <AboutForm />
    </Wrapper>
  );
};

export default About;
