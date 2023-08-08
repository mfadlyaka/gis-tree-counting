import axios from 'axios';
import './globals.css'
import Link from 'next/link'

export default function Home() {
  const RoboFlow = () => {
    const [formData, setFormData] = useState({
      image: '',
    });

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.image]: event.target.value,
      });
      return (
        console.log(event)
      )
    };

    const loadImageBase64 = (event) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(event);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    
    const handleSubmit = async (event) => {
        const image = await loadImageBase64(fileData);
        event.preventDefault();
        axios({
            method: "POST",
            url: "https://detect.roboflow.com/pohonsawit2/7",
            params: {
                api_key: "2PNqpkPLTX6glZUiAPGu"
            },
            data: image,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error.message);
        });
    };
  };
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className='Hero w-full h-screen flex justify-center items-center'>
        <div>
          <p className='text-5xl font-bold text-white tracking-wide'>WEB GIS FOR TREE COUNTING  PALM TREE</p>
        </div>
      </div>

      {/* Deskripsi */}
      <div className='px-20 py-28'>
        <p className='text-xl text-start'>Menurut Prahasta (2007), WebGIS adalah aplikasi GIS atau pemetaan digital yang memanfaatkan jaringan internet sebagai media komunikasi yang berfungsi mendistribusikan, mempublikasikan, mengintegrasikan, mengkomunikasikan dan menyediakan informasi dalam bentuk teks, peta dijital serta menjalankan fungsi–fungsi analisis dan query yang terkait dengan GIS melalui jaringan internet.</p>
      </div>

      {/* Latar Belakang */}
      <div className='px-20 py-10 bg-[#A6927B7D] '>
        <div className='flex items-center'>
          <div className='w-1/2'>
            <p className='text-3xl font-semibold tracking-wide'>Latar Belakang</p>
            <div className='mt-14 flex flex-col gap-6'>
              <p className='text-base'>Seperti yang kita ketahui bersama bahwa Indonesia merupakan salah satu penghasil minyak sawit terbesar di dunia dengan luasan tutupan lahan kelapa sawit sebesar 16,38 juta hektar.</p>
              <p className='text-base'>Industri sawit masih tetap menjadi andalan kinerja neraca perdagangan Nasional. Hal ini tergambar dari kontribusinya yang mencapai 13,50% terhadap ekspor nonmigas dan menyumbang 3,50% terhadap PDB Indonesia.</p>
            </div>
          </div>

          <div className='w-1/2 flex justify-end'>
            <img src='/assets/medium/img-about.png' className='w-96 h-64'/>
          </div>
        </div>

        <div className='flex justify-center mt-16'>
          <Link href="/profile" className='bg-[#282A1F] text-white px-5 py-3 rounded-lg'>Lanjut membaca</Link>
        </div>
        <form onSubmit={RoboFlow.handleSubmit}>
              <div>
                <label>Gambar :</label>
                <input type="file" name="image" onChange={RoboFlow.handleChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
      </div>
    </main>
  )
}
