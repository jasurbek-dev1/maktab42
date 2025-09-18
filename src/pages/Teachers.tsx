import React from 'react';
import { Mail, BookOpen, Award, Calendar } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      experience: '15 years',
      education: 'PhD in Mathematics',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'sarah.johnson@42maktab.edu',
      achievements: ['Outstanding Teacher Award 2023', 'Mathematics Department Head'],
      description: 'Specializes in advanced calculus and mathematical modeling with innovative teaching methods.'
    },
    {
      id: 2,
      name: 'Mr. David Chen',
      subject: 'Physics',
      experience: '12 years',
      education: 'MSc in Physics',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'david.chen@42maktab.edu',
      achievements: ['Science Fair Coordinator', 'Research Publication Award'],
      description: 'Expert in quantum mechanics and modern physics with extensive research background.'
    },
    {
      id: 3,
      name: 'Ms. Emily Rodriguez',
      subject: 'English Literature',
      experience: '10 years',
      education: 'MA in English Literature',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'emily.rodriguez@42maktab.edu',
      achievements: ['Literary Society Founder', 'Best Creative Writing Mentor'],
      description: 'Passionate about fostering critical thinking and creative expression through literature.'
    },
    {
      id: 4,
      name: 'Prof. Michael Thompson',
      subject: 'Chemistry',
      experience: '18 years',
      education: 'PhD in Organic Chemistry',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'michael.thompson@42maktab.edu',
      achievements: ['Chemistry Olympiad Coach', 'Innovation in Teaching Award'],
      description: 'Leading expert in organic synthesis with focus on practical laboratory education.'
    },
    {
      id: 5,
      name: 'Ms. Lisa Wang',
      subject: 'Computer Science',
      experience: '8 years',
      education: 'MSc in Computer Science',
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'lisa.wang@42maktab.edu',
      achievements: ['Coding Club Advisor', 'Tech Innovation Award'],
      description: 'Specializes in artificial intelligence and machine learning with industry experience.'
    },
    {
      id: 6,
      name: 'Mr. Robert Brown',
      subject: 'History',
      experience: '14 years',
      education: 'MA in World History',
      image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'robert.brown@42maktab.edu',
      achievements: ['History Club Coordinator', 'Educational Excellence Award'],
      description: 'Expert in world civilizations with engaging storytelling approach to historical education.'
    },
    {
      id: 7,
      name: 'Ms. Anna Petrov',
      subject: 'Biology',
      experience: '11 years',
      education: 'MSc in Biology',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'anna.petrov@42maktab.edu',
      achievements: ['Environmental Club Leader', 'Research Excellence Award'],
      description: 'Focuses on ecology and environmental science with hands-on field research approach.'
    },
    {
      id: 8,
      name: 'Mr. James Wilson',
      subject: 'Physical Education',
      experience: '9 years',
      education: 'BSc in Sports Science',
      image: 'https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'james.wilson@42maktab.edu',
      achievements: ['Athletic Department Coordinator', 'Coach of the Year 2023'],
      description: 'Former professional athlete dedicated to promoting health and wellness among students.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Dedicated Teachers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our exceptional faculty members who are committed to providing quality education 
            and nurturing the next generation of leaders
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                {/* Name and Subject */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                  <p className="text-green-600 font-medium">{teacher.subject}</p>
                </div>

                {/* Experience and Education */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    <span>{teacher.experience} experience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>{teacher.education}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-green-600" />
                    <a href={`mailto:${teacher.email}`} className="hover:text-green-600 transition-colors">
                      Contact
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {teacher.description}
                </p>

                {/* Achievements */}
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <Award className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-gray-900">Achievements</span>
                  </div>
                  <ul className="space-y-1">
                    {teacher.achievements.map((achievement, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-600 text-white py-12 px-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Join Our Teaching Team</h2>
            <p className="text-lg opacity-90 mb-6">
              Are you passionate about education? We're always looking for dedicated teachers 
              to join our mission of excellence in education.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;