import React from 'react';
import { Trophy, Medal, Star, Calendar, Award, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'National Science Fair Champions',
      year: '2024',
      category: 'Academic Excellence',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Our students secured first place in the National Science Fair with their innovative renewable energy project.',
      icon: Trophy,
      color: 'text-yellow-600'
    },
    {
      id: 2,
      title: 'Mathematics Olympiad Gold Medal',
      year: '2023',
      category: 'Mathematics',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Three students won gold medals at the International Mathematics Olympiad representing our country.',
      icon: Medal,
      color: 'text-yellow-500'
    },
    {
      id: 3,
      title: 'Best STEM School Award',
      year: '2023',
      category: 'Institutional',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Recognized as the leading STEM education institution in the region for innovative teaching methods.',
      icon: Star,
      color: 'text-green-600'
    },
    {
      id: 4,
      title: 'Robotics Competition Winners',
      year: '2023',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Our robotics team won the regional championship with their autonomous robot design.',
      icon: Trophy,
      color: 'text-blue-600'
    },
    {
      id: 5,
      title: 'Environmental Conservation Award',
      year: '2022',
      category: 'Environmental',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Awarded for outstanding contribution to environmental conservation and sustainability initiatives.',
      icon: Award,
      color: 'text-green-500'
    },
    {
      id: 6,
      title: 'Literary Excellence Recognition',
      year: '2022',
      category: 'Literature',
      image: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      description: 'Students published in national literary magazines and won several poetry competitions.',
      icon: Star,
      color: 'text-purple-600'
    }
  ];

  const stats = [
    { label: 'National Awards', value: '25+', icon: Trophy },
    { label: 'Regional Medals', value: '50+', icon: Medal },
    { label: 'Years of Excellence', value: '20+', icon: Calendar },
    { label: 'Award-Winning Students', value: '500+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence and recognizing the outstanding accomplishments of our students, 
            teachers, and institution in various fields of education and competition
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-200"></div>
          
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="relative mb-12">
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                          {achievement.category}
                        </span>
                        <span className="text-gray-500 text-sm">{achievement.year}</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <achievement.icon className={`h-6 w-6 mr-3 ${achievement.color}`} />
                        <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-8 rounded-lg">
            <Trophy className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Strive for Excellence</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              At 42-maktab, we believe every student has the potential to achieve greatness. 
              Join us in our journey of academic excellence and personal growth.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Learn More About Our Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;