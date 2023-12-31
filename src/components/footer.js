const Footer = () => {
  return (
    <div className="px-20 mt-28 py-10 flex border-t-4 border-neutral-400">
      <div className="w-1/12">
        <img src="/assets/small/logo-tree-counting.png" className="w-24 h-24" />
      </div>
      <div className="w-9/12 flex flex-col gap-6">
        <p>
          WebGIS merupakan aplikasi Geographic Information System (GIS) yang dapat diakses secara
          online melalui internet/web. Pada konfigurasi WebGIS ada server yang berfungsi sebagai
          MapServer yang bertugas memproses permintaan peta dari client dan kemudian mengirimkannya
          kembali ke client.
        </p>
        <p>
          WebGIS memiliki kemampuan untuk melakukan pengolahan data dan melakukan operasi-operasi
          tertentu dengan menampilkan dan menganalisa data. Sebagai contoh adalah adanya perhitungan
          pohon kelapa sawit secara otomatis dimana pengguna dapat dengan mudah menghitung jumlah
          pohon kelapa sawit yang diinginkan secara online melalui jaringan intranet/internet tanpa
          mengenal batas geografi penggunanya.
        </p>
      </div>
      <div className="w-2/12 flex flex-col gap-4 items-center">
        <p className="w-full text-center">Supported By :</p>
        <div className="flex gap-3">
          <img src="/assets/small/logo-wika.png" className="w-12 h-12" />
          <img src="/assets/small/logo-wika-white.png" className="w-12 h-12" />
          <img src="/assets/small/logo-wika-tect.png" className="w-14 h-12" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
