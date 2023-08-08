import React from 'react'

export default function Profile () {
    return (
        <main className='min-h-screen pt-20'>
            {/* latar belakang */}
            <div className='px-20 py-20'>
                <p className='text-3xl font-semibold tracking-wide'>Latar Belakang</p>
                <div className='mt-20 flex flex-col gap-3'>
                    <p>Seperti yang kita ketahui bersama bahwa Indonesia merupakan salah satu penghasil minyak sawit terbesar di dunia dengan luasan tutupan lahan kelapa sawit sebesar 16,38 juta hektar.</p>
                    <p>Industri sawit masih tetap menjadi andalan kinerja neraca perdagangan Nasional. Hal ini tergambar dari kontribusinya yang mencapai 13,50% terhadap ekspor nonmigas dan menyumbang 3,50% terhadap PDB Indonesia.</p>
                    <p>Perkebunan sawit di Indonesia dengan lahan yang sangat luas merupakan sumber pendapatan negara yang potensial, namun proses perhitungan pohon sawit menjadi tantangan tersendiri jika dilakukan secara manual. oleh karena itu diperlukan inovasi agar proses perhitungan pohon sawit dapat dilakukan secara efisien namun tetap akurat dengan menggunakan metode convolutional neural network lahan sawit dapat di deteksi secara otomatis. Convolutional Neural Network merupakan salah satu metode deep learning dalam pengenalan citra digital teknologi ini dapat diterapkan sebagai solusi.</p>
                </div>
            </div>

            {/* pohon sawit */}
            <div className='px-20 py-20'>
                <p className='text-3xl font-semibold tracking-wide'>Pohon Sawit</p>
                <div className='mt-20 flex flex-col gap-3'>
                    <p>Kelapa sawit merupakan tumbuhan monkotil yang tidak memiliki akar tunggang. Pada akar pohon kelapap sawit bisa terus tumbuh kebawah mencapai 15 meter. Tanaman kelapa sawit umumnya memiliki batang yang tidak bercabang. Pada pertumbuhan awal setelah fase muda akan terjadi pembentukan batang yang melebar tanpa adanya proses pemanjangan ruas. Titik tumbuh pohon kelapa sawit terdapat pada bagian pucuk pohon. Tanaman kelapa sawit memiliki daun yang menyerupai bulu unggas. Pada bagian pangkal pelepah terbentuk dua baris duri yang sangat tajam dan keras di seluruh kedua sisinya.</p>
                    <p>Kelapa sawit tersebar di 26 provinsi di Indonesia. Provinsi Riau memiliki areal perkebunan kelapa sawit terluas dengan 2,89 juta hektar pada tahun 2021. Kelapa sawit dapat tumbuh di berbagai jenis kondisi tanah. Salah satunya yaitu pada tanah gembur, drainase baik, kaya dan akan humus.</p>
                </div>
            </div>
            
            {/* web gis */}
            <div className='px-20 pt-20'>
                <p className='text-3xl font-semibold tracking-wide'>WebGis</p>
                <div className='mt-20 flex flex-col gap-3'>
                    <p>WebGIS merupakan pengembangan dari aplikasi SIG berbasis web yang terintegrasi satu sama lain. WebGIS memiliki berbagai fitur yang bisa mendukung dalam menampilkan dan menganalisis data untuk bisa diakses secara bebas melalui laman internet</p>
                    <p>Dalam pengoperasiannya, WebGIS terdiri server dan client. Server berperan sebagai pusat penyedia yang saling terintegrasi melalui data, peta dan web. Kemudian pada client bertindak sebagai pengguna dalam mencari informasi yang diperlukan</p>
                    <p>Dalam pengembangan WebGIS, perlu adanya beberapa tahapan yang diperlukan berupa data input yang menjadi base data dalam pengolahan dan analisis yang akan berlangsung. Secara umum, beberapa informasi yang diperlukan terdiri dari berbagai laporan yang menunjang, data awal berupa informasi geografi yang kemudian diolah menjadi suatu informasi menjadi peta, tabel, laporan dan grafik.</p>
                    <p>WebGIS dapat menghubungkan beberapa perangkat yang menjadi satu-kesatuan (portal) untuk memudahkan para penggunanya dalam mencari informasi yang dibutuhkan. Saat ini, pengembangan WebGIS bisa digunakan dalam device android/ IOS dalam aplikasi smarthphone, menggunakan desktop/laptop dengan mengakses laman website. Konten-konten yang diterima bisa diperbarui secara berkala sehingga informasi yang diterima akan selalu terbaru.</p>
                </div>
            </div>
        </main>
    )
}
