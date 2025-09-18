import React from 'react';
import { MapPin, Phone, Mail, Clock, InspectionPanel as Directions } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Education Boulevard, Knowledge District, City 12345',
      color: 'text-green-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@42maktab.edu',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      label: 'School Hours',
      value: 'Monday - Friday: 8:00 AM - 4:00 PM',
      color: 'text-orange-600'
    }
  ];

  const departments = [
    { name: 'Main Office', phone: '+1 (555) 123-4567', email: 'admin@42maktab.edu' },
    { name: 'Admissions', phone: '+1 (555) 123-4568', email: 'admissions@42maktab.edu' },
    { name: 'Academic Affairs', phone: '+1 (555) 123-4569', email: 'academics@42maktab.edu' },
    { name: 'Student Services', phone: '+1 (555) 123-4570', email: 'students@42maktab.edu' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our Campus
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of the education district, our campus provides easy access 
            and a welcoming environment for students, parents, and visitors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 relative">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1645564756716!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="42-maktab Location"
                className="rounded-t-lg"
              ></iframe>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                <button className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                  <Directions className="h-5 w-5 mr-2" />
                  Get Directions
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Easily accessible by public transportation and with ample parking available for visitors.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <info.icon className={`h-6 w-6 mr-4 mt-1 ${info.color}`} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Transportation Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Transportation</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Metro Station: Education Plaza (5-minute walk)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Bus Routes: 15, 23, 45, 67</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Free parking available on campus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{dept.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-green-600" />
                    <a href={`tel:${dept.phone}`} className="hover:text-green-600 transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-green-600" />
                    <a href={`mailto:${dept.email}`} className="hover:text-green-600 transition-colors">
                      {dept.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Us CTA */}
        <div className="mt-16 text-center">
          <div className="bg-green-600 text-white py-12 px-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Schedule a Visit</h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              We'd love to show you around our campus! Schedule a guided tour to see our 
              facilities, meet our teachers, and experience the 42-maktab community firsthand.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule a Tour
              </button>
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
                Contact Admissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;