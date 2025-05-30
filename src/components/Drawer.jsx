import { useState, useEffect, useRef } from 'react';
import { X, ChevronUp, ChevronDown, Check } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SERVICES = [
  { id: 'A', name: 'Software Development' },
  { id: 'B', name: 'Web Development' },
  { id: 'C', name: 'AI Bot Development' },
  { id: 'D', name: 'Software Testing' },
  { id: 'E', name: 'SaaS Solutions' },
  { id: 'F', name: 'DevOps & Cloud Solutions' },
  { id: 'G', name: 'Digital Marketing' },
  { id: 'H', name: 'Product ENgineering' },
  {id: 'I', name: 'Other'}
];

const MEETING_OPTIONS = [
  { id: 'yes', name: 'Yes' },
  { id: 'no', name: 'No' }
];

const CONTACT_METHODS = [
  { id: 'mobile', name: 'Mobile' },
  { id: 'email', name: 'Email' }
];

const Drawer = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    otherService: '',
    wantsMeeting: null,
    meetingDate: null,
    contactMethod: ''
  });
  const [errors, setErrors] = useState({});

  const scrollLock = useRef(false);
  const startY = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field if it exists
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };

  const handleServiceSelect = (service) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    
    setFormData({
      ...formData,
      services: newServices
    });
    
    // Clear error if any services are selected
    if (newServices.length > 0 && errors.services) {
      setErrors({
        ...errors,
        services: null
      });
    }
  };

  const handleMeetingOption = (option) => {
    setFormData({
      ...formData,
      wantsMeeting: option
    });
    
    // Clear error if an option is selected
    if (errors.wantsMeeting) {
      setErrors({
        ...errors,
        wantsMeeting: null
      });
    }
  };

  const handleContactMethod = (method) => {
    setFormData({
      ...formData,
      contactMethod: method
    });
    
    // Clear error if a method is selected
    if (errors.contactMethod) {
      setErrors({
        ...errors,
        contactMethod: null
      });
    }
  };

  const validateCurrentStep = () => {
    let isValid = true;
    const newErrors = {};

    switch (step) {
      case 1:
        // if (!formData.name.trim()) {
        //   newErrors.name = 'Name is required';
        //   isValid = false;
        // }
        break;
      case 2:
        // if (!formData.email.trim()) {
        //   newErrors.email = 'Email is required';
        //   isValid = false;
        // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        //   newErrors.email = 'Email is invalid';
        //   isValid = false;
        // }
        break;
      case 3:
        // if (!formData.phone.trim()) {
        //   newErrors.phone = 'Phone number is required';
        //   isValid = false;
        // }
        break;
      case 4:
        // if (formData.services.length === 0) {
        //   newErrors.services = 'Please select at least one service';
        //   isValid = false;
        // }
        break;
      case 5:
        if (formData.wantsMeeting === null) {
          newErrors.wantsMeeting = 'Please select an option';
          isValid = false;
        }
        break;
      case 6:
        if (formData.wantsMeeting === 'yes' && !formData.meetingDate) {
          newErrors.meetingDate = 'Please select a date and time';
          isValid = false;
        }
        break;
      case 7:
        if (!formData.contactMethod) {
          newErrors.contactMethod = 'Please select a contact method';
          isValid = false;
        }
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    if (step === 5 && formData.wantsMeeting === 'no') {
      setStep(7);
    } else {
      setStep((prev) => Math.min(prev + 1, 7));
    }
  };

  const handlePrevious = () => {
    if (step === 7 && formData.wantsMeeting === 'no') {
      setStep(5);
    } else {
      setStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;
    
    onSubmit(formData);
    setStep(1);
    setFormData({
      name: '', email: '', phone: '', services: [], otherService: '', wantsMeeting: null, meetingDate: null, contactMethod: ''
    });
    setErrors({});
    onClose();
  };

  const isSunday = (date) => date.getDay() === 0;
  const isPast = (date) => date < new Date().setHours(0,0,0,0);

  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e) => {
      if (scrollLock.current || step > 5) return;
      scrollLock.current = true;

      if (e.deltaY > 20) {
        if (validateCurrentStep()) {
          if (step === 5 && formData.wantsMeeting === 'no') {
            setStep(7);
          } else {
            setStep((prev) => Math.min(prev + 1, 5));
          }
        }
      } else if (e.deltaY < -20) {
        setStep((prev) => Math.max(prev - 1, 1));
      }

      setTimeout(() => (scrollLock.current = false), 800);
    };

    const handleTouchStart = (e) => { if (step <= 5) startY.current = e.touches[0].clientY; };

  const handleTouchEnd = (e) => {
    if (step > 5) return;
    const endY = e.changedTouches[0].clientY;
    const diff = startY.current - endY;

    if (diff > 50) {
      if (validateCurrentStep()) {
        if (step === 5 && formData.wantsMeeting === 'no') {
          setStep(7);
        } else {
          setStep((prev) => Math.min(prev + 1, 5));
        }
      }
    } else if (diff < -50) {
      setStep((prev) => Math.max(prev - 1, 1));
    }

    scrollLock.current = true;
    setTimeout(() => (scrollLock.current = false), 800);
  };

  window.addEventListener('wheel', handleWheel);
  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchend', handleTouchEnd);

  return () => {
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchend', handleTouchEnd);
  };
}, [isOpen, step, formData]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [step]);

  if (!isOpen) return null;

  return (
    // <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
    // <div className="fixed inset-0 bg-black/90 bg-[radial-gradient(#ffffff20_0px,transparent_0px)] [background-size:50px_50px] flex justify-end z-50">
    <div className="fixed inset-0 bg-black/80 flex justify-end z-50">
 <button
        onClick={onClose}
        className="absolute top-4 right-[65%] md:right-[66%] text-white z-50"
        aria-label="Close"
      >
        <X size={36} />
      </button>

      <div className="bg-white w-[65%] h-full overflow-y-auto shadow-xl animate-slide-in transition-all relative">
      <div className="absolute top-4 left-4 z-50 p-4 bg-white/40 backdrop-blur-sm">
      <div className="text-2xl font-bold">Tekvian</div>
    </div>

        <div className="relative bg-white rounded-lg shadow-lg p-8 min-h-screen flex flex-col p-4 md:p-16 pt-5 md:pt-12">
          <div className="text-lg text-gray-500 mb-2">{step} →</div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {step === 1 && 'Name?'}
            {step === 2 && 'E-mail?'}
            {step === 3 && 'Mobile Number?'}
            {step === 4 && 'What services are you looking for?*'}
            {step === 5 && 'Would you like to set up an online meeting?'}
            {step === 6 && 'Select a date and time'}
            {step === 7 && 'How would you like to connect with us?'}
          </h2>

          {step === 4 && (
            <p className="text-gray-600 text-lg mb-8">
              Please specify what type of services are you looking from the option below
            </p>
          )}

          {step === 4 && (
            <p className="text-gray-600 mb-6">Choose as many as you like</p>
          )}

          <form onSubmit={(e) => {
            e.preventDefault();
            if (validateCurrentStep()) {
              if (step < 7) {
                if (step === 5 && formData.wantsMeeting === 'no') {
                  setStep(7);
                } else {
                  setStep((prev) => Math.min(prev + 1, 7));
                }
              } else {
                handleSubmit(e);
              }
            }
          }}>
            <div className="mb-12 w-full">
              {step <= 3 && (
                <div>
                  <input
                    type={step === 2 ? 'email' : step === 3 ? 'tel' : 'text'}
                    name={step === 1 ? 'name' : step === 2 ? 'email' : 'phone'}
                    value={step === 1 ? formData.name : step === 2 ? formData.email : formData.phone}
                    onChange={handleChange}
                    placeholder="Type your answer here..."
                    className="w-full text-xl md:text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-black py-2 bg-transparent placeholder-gray-400"
                    autoFocus
                  />
                  {errors[step === 1 ? 'name' : step === 2 ? 'email' : 'phone'] && (
                    <p className="text-red-500 mt-2">{errors[step === 1 ? 'name' : step === 2 ? 'email' : 'phone']}</p>
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-3 pt-2 max-h-96 overflow-y-auto pb-4">
                  {SERVICES.map((service) => (
                    <div 
                      key={service.id}
                      className={`flex items-center border rounded-md p-3 mb-2 cursor-pointer ${
                        formData.services.includes(service.name) ? 'border-black' : 'border-gray-300'
                      }`}
                      onClick={() => handleServiceSelect(service.name)}
                    >
                      <div className={`w-8 h-8 rounded-md flex items-center justify-center mr-3 ${
                        formData.services.includes(service.name) ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {service.id}
                      </div>
                      <span className="text-lg">{service.name}</span>
                      {formData.services.includes(service.name) && (
                        <Check className="ml-auto" size={20} />
                      )}
                    </div>
                  ))}
                  {formData.services.includes('Other') && (
                    <input
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleChange}
                      placeholder="Please specify"
                      className="w-full text-xl border-b-2 border-gray-300 py-2 bg-transparent"
                      required
                    />
                  )}
                  {errors.services && (
                    <p className="text-red-500 mt-2">{errors.services}</p>
                  )}
                </div>
              )}

              {step === 5 && (
                <div className="space-y-3 pt-2">
                  {MEETING_OPTIONS.map((option) => (
                    <div 
                      key={option.id}
                      className={`flex items-center border rounded-md p-4 mb-2 cursor-pointer ${
                        formData.wantsMeeting === option.id ? 'border-black' : 'border-gray-300'
                      }`}
                      onClick={() => handleMeetingOption(option.id)}
                    >
                      <span className="text-lg">{option.name}</span>
                      {formData.wantsMeeting === option.id && (
                        <Check className="ml-auto" size={20} />
                      )}
                    </div>
                  ))}
                  {errors.wantsMeeting && (
                    <p className="text-red-500 mt-2">{errors.wantsMeeting}</p>
                  )}
                </div>
              )}

{step === 6 && formData.wantsMeeting === 'yes' && (
  <div className="flex flex-col space-y-6">
    <div className="relative">
      <DatePicker
        selected={formData.meetingDate}
        onChange={(date) => {
          setFormData({ ...formData, meetingDate: date });
          if (errors.meetingDate) {
            setErrors({ ...errors, meetingDate: null });
          }
        }}
        showTimeSelect
        filterDate={(date) => !isPast(date) && !isSunday(date)}
        minDate={new Date()}
        placeholderText="Select a date and time"
        dateFormat="MMMM d, yyyy h:mm aa"
        className="w-full text-xl md:text-2xl border-b-2 border-gray-300 focus:border-black focus:outline-none py-3 px-4 bg-transparent placeholder-gray-400 rounded-lg transition duration-200 ease-in-out"
        calendarClassName="!bg-white !rounded-2xl !shadow-2xl !p-6 !border !border-gray-200 text-gray-800 z-50"
        dayClassName={(date) =>
          "w-10 h-10 flex items-center justify-center rounded-full transition duration-150 hover:bg-gray-100 " +
          (date.toDateString() === new Date().toDateString()
            ? "border border-black font-semibold"
            : "") +
          (formData.meetingDate?.toDateString() === date.toDateString()
            ? " bg-black text-white"
            : "")
        }
        popperPlacement="bottom-start"
      />
    </div>

    {errors.meetingDate && (
      <p className="text-red-500 text-sm md:text-base font-medium">{errors.meetingDate}</p>
    )}
  </div>
)}

              {step === 7 && (
                <div className="space-y-3 pt-2">
                  {CONTACT_METHODS.map((method) => (
                    <div 
                      key={method.id}
                      className={`flex items-center border rounded-md p-4 mb-2 cursor-pointer ${
                        formData.contactMethod === method.id ? 'border-black' : 'border-gray-300'
                      }`}
                      onClick={() => handleContactMethod(method.id)}
                    >
                      <span className="text-lg">{method.name}</span>
                      {formData.contactMethod === method.id && (
                        <Check className="ml-auto" size={20} />
                      )}
                    </div>
                  ))}
                  {errors.contactMethod && (
                    <p className="text-red-500 mt-2">{errors.contactMethod}</p>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="px-12 py-3 bg-black text-white rounded-md text-lg hover:bg-gray-800"
              >
                OK
              </button>
              <span className="text-sm text-gray-500">press <b>Enter ↵</b></span>
            </div>
          </form>
        </div>

        <div className="fixed bottom-4 right-4 flex space-x-1 z-50">
        <button
          onClick={handlePrevious}
          className="bg-black p-2 rounded-md disabled:opacity-50"
          disabled={step === 1}
        >
          <ChevronUp className="text-white" size={16} />
        </button>
        <button
          onClick={() => {
            if (step <= 5) {
              if (validateCurrentStep()) {
                if (step === 5 && formData.wantsMeeting === 'no') {
                  setStep(7);
                } else {
                  setStep((prev) => Math.min(prev + 1, 5));
                }
              }
            }
          }}
          className="bg-black p-2 rounded-md disabled:opacity-50"
          disabled={step === 5 || step >= 7}
        >
          <ChevronDown className="text-white" size={16} />
        </button>
      </div>

        <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
      </div>
    </div>
  );
};

export default Drawer;