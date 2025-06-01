import Wrapper from "../UI/Wrapper";

const AboutForm = () => {
  return (
    <Wrapper className="">
      <h1 className="text-center text-4xl md:text-5xl ">
        Bana Ulaşın
      </h1>
      <form className="md:p-16  md:text-2xl">
        <div className="flex gap-5 ">
          <div className="w-full">
            <label>Adın</label>
            <div>
              <input
                type="text"
                className=" w-full mt-2 p-2 border border-gray-300 outline-none "
              />
            </div>
          </div>
          <div className="w-full">
            <label>Soyadın</label>
            <div>
              <input
                className="w-full mt-2 p-2 border border-gray-300 outline-none"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <label>Email</label>
          <input
            className="w-full mt-2 p-2 border border-gray-300 outline-none"
            type="email"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label>Mesajın</label>
          <textarea
            className="resize-none mt-2 p-2 border  border-gray-300 outline-none h-full min-h-[200px]"
            type="email"
          />
        </div>
        <button
          type="button"
          className="w-full mx-auto border bg-red-600 text-white p-2.5 mt-5 rounded-lg hover:bg-red-500 transition duration-300"
        >
          Gönder
        </button>
      </form>
    </Wrapper>
  );
};

export default AboutForm;
