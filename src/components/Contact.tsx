import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black py-32">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="text-amber-400 uppercase tracking-[4px] text-sm mb-6">PRIVATE SALON</div>
        <h1 className="text-7xl font-light tracking-tighter mb-12">Speak with Julian</h1>
        
        <div className="max-w-md mx-auto">
          <p className="text-xl text-white/80 leading-relaxed mb-12">
            Discretion is absolute. For qualified principals only. Receive quarterly intelligence and discuss legacy estates in confidence.
          </p>
          
          <div className="space-y-8 mb-16 text-left max-w-sm mx-auto">
            <div>
              <div className="uppercase text-xs tracking-widest text-white/60 mb-2">MONACO OFFICE</div>
              <div>14 Avenue de la Concorde</div>
              <div>MC 98000, Principality of Monaco</div>
            </div>
            <div>
              <div className="uppercase text-xs tracking-widest text-white/60 mb-2">CONTACT</div>
              <a href="mailto:office@julianvoss.legacy" className="hover:underline block">office@julianvoss.legacy</a>
              <div>+377 00 00 00 00</div>
            </div>
          </div>

          <button className="btn-luxury w-full py-7 text-lg tracking-widest border border-white hover:bg-white hover:text-black">
            REQUEST PRIVATE CONSULTATION
          </button>

          <p className="text-xs text-white/50 mt-8">Your information will never be shared. Absolute confidentiality assured.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
