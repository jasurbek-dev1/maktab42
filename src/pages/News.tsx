
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: '"Musiqa festivali " mavzusida tadbir oʻtkazildi',
      date: 'Sentayabr 17 , 2025',
      image: 'src/assets/tadbir.jpg',
      description: 'Toʻraqoʻrgʻon tumani 42-maktabning 3-4-sinf oʻquvchilari bilan "Musiqa festivali " mavzusida tadbir oʻtkazildi. Tadbirda oʻquvchilar faol qatnashdilar..',
      category: 'Tadbir'
    },
    {
      id: 2,
      title: 'Shaxmat mavzusi',
      date: 'Sentyabr 10 , 2025',
      image: 'src/assets/shaxnmat.jpg',
      description: "Hurmatli ota-onalar farzandingizni sportning shaxmat turi bo‘yicha shug‘ullanishini xoylaysizmi?  Unda sizda katta imkoniyat paydo bo‘ldi 42-maktabda SHAXMAT to‘garagi tashkil etildi. To‘garakni respublika miqiyosidagi sport murabbiysi va hakam olib boradi.",
      category: "e'lon"
    },
    {
      id: 3,
      title: 'Lochinlar',
      date: 'Iyul 1, 2025',
      image: 'src/assets/photo_2025-09-18_20-31-30.jpg',
      description: 'Жорий йилнинг  25-28 июнь кунлари мактабимизнинг "Лочинлар"гурухи "Шункорлар" харбий-спорт мусобакасининг финал,республика бокичида фаол катнашиб келдилар.',
      category: 'Musobaqa'
    }

  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Facilities: 'bg-blue-100 text-blue-800',
      Achievement: 'bg-green-100 text-green-800',
      Technology: 'bg-purple-100 text-purple-800',
      Arts: 'bg-pink-100 text-pink-800',
      Environment: 'bg-emerald-100 text-emerald-800',
      Partnership: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Maktab yangiliklari va yangilanishlar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          42-maktabdagi eng so'nggi voqealar, yutuqlar va taraqqiyotlar haqida xabardor bo'ling
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {news.date}
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {news.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {news.description}
                </p>
                
                <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors group">
                 Ko'rish
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Yana ko'proq yangiliklarni yuklash
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;