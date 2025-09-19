
import ImageSlider from '../components/ImageSlider';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';

const Home = () => {
 const events = [
  {
    id: 1,
    title: 'Lochinlar 2025',
    date: 'Mart 15, 2024',
    image: '/assets/IMG_2886.JPG',
    description: "42 - maktabning lochinlar jamoasi yutuqlari ko'rishingiz mumkin "
  },
  {
    id: 2,
    title: 'Sport musobaqasi Fudbol',
    date: '1 - oktyabr 2024',
    image: '/assets/IMG_2887.JPG',
    description: "42 - maktabda o'tkazilgan fudbol musobaqasidan lavha"
  },
  {
    id: 3,
    title: 'Madaniyat Festivali',
    date: 'May 10, 2024',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: "Turli madaniyatlarni bayram qilish, chiqishlar, ovqat va ko'rgazmalar bilan"
  },
  {
    id: 4,
    title: 'Bitiruv marosimi',
    date: 'May 25, 2025',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    description: 'Bitiruvchilarimizni va ularning akademik yutuqlarini sharaflash.'
  },
  {
    id: 5,
    title: "Tadbir marosimi",
    date: "May 1, 2025",
    image: '/assets/IMG_2888.JPG', // shu yerga haqiqiy fayl nomini qo'y
    description: "Bizda o'zgacha tadbirlar o'tikizlaybdi"
  },
  {
    id: 6,
    title: "Bizda shaxmat musobaqasi",
    date: "aprel 2, 2024",
    image: '/assets/IMG_2889.JPG', // shu yerga ham rasm bo'lsa qo'y
    description: "Shaxmat musobaqasidan lavha"
  }
];


  return (
    <div className="min-h-screen">
      {/* Hero Section - Image Slider */}
      <ImageSlider />

      {/* About School Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                42 - maktab haqida
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              42-maktabga xush kelibsiz, bu yerda ta'limda mukammallik yangilik bilan birlashadi. Bizning maktabimiz yigirma yildan ortiq vaqt davomida yosh insonlarni tarbiyalaydi va zamonaviy dunyoda muvaffaqiyatga erishish uchun keng qamrovli ta'lim beradi.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
           Zamonaviy inshootlar, tajribali o'qituvchilar va kompleks rivojlanishga sodiqlik bilan biz har bir talabaning akademik muvaffaqiyati, xarakter shakllanishi va ijodiy ifodasi orqali to'liq salohiyatga erishishini ta'minlaymiz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1,200+</div>
                  <div className="text-gray-600">O'quvchilar</div>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">O'qituvchilar</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Students learning"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <Award className="h-8 w-8 mb-2" />
                <div className="text-xl font-bold">Mukammallik</div>
                <div className="text-sm opacity-90">Ta'limda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kutilayotgan Tadbirlar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Engashish va esda qoladigan o‘qish tajribasini yaratadigan eng so‘nggi maktab faoliyatlarimiz, musobaqalarimiz va bayramlarimiz bilan yangilanib turing.  
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-sm">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Event
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-green-600 font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;