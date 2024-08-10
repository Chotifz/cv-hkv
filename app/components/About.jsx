const About = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full py-4">
      <div className="w-full">sss</div>
      <div className="flex flex-col gap-3 w-full">
        <h1 className="font-semibold  font-serif">TENTANG KAMI</h1>
        <h2 className="font-bold text-[24px] tracking-wide">
          Profil Perusahaan Hadar Karya Utama
        </h2>
        <span>
          <div className="inline-block py-[1.5px] px-12 bg-green-500"></div>
        </span>
        <p className="text-[15px] font-mono">
          Hadar Karya Utama adalah agensi terpercaya dalam menyediakan komponen
          penting untuk industri dan kendaraan. Kami hadir dengan layanan
          berkualitas tinggi.
        </p>
      </div>
    </div>
  );
};

export default About;
