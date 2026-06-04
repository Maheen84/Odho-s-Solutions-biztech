const fs = require('fs');

try {
  let s1 = fs.readFileSync('src/pages/Services.tsx', 'utf8');

  s1 = s1.replace(
    /className="py-24 bg-navy mx-6 rounded-\[40px\] text-white overflow-hidden"/g,
    'className="py-24 bg-navy w-full text-white overflow-hidden"'
  );

  s1 = s1.replace(
    /className="bg-\[#1a1035\] rounded-\[32px\] overflow-hidden shadow-\[0_0_50px_rgba\(0,0,0,0\.5\)\] max-w-5xl mx-auto border-\[12px\] border-white\/10 relative group flex items-center justify-center"/g,
    'className="bg-[#1a1035] rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full lg:w-[70%] max-w-4xl mx-auto border-[12px] border-white/10 relative group flex items-center justify-center aspect-video"'
  );

  s1 = s1.replace(
    /className="w-full h-full object-cover transition-transform duration-\[2s\] group-hover:scale-\[1\.03\]"/g,
    'className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"'
  );

  fs.writeFileSync('src/pages/Services.tsx', s1);
  console.log('Services.tsx updated');
} catch (e) {
  console.error(e);
}

try {
  let s2 = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');

  s2 = s2.replace(
    /className="py-24 bg-navy mx-6 rounded-\[40px\] text-white overflow-hidden my-12"/g,
    'className="py-24 bg-navy w-full text-white overflow-hidden my-12"'
  );

  s2 = s2.replace(
    /className="bg-white rounded-\[32px\] overflow-hidden text-secondary shadow-2xl max-w-5xl mx-auto border-8 border-white\/10"/g,
    'className="bg-white rounded-[32px] overflow-hidden text-secondary shadow-2xl w-full lg:w-[70%] max-w-4xl mx-auto border-8 border-white/10"'
  );

  fs.writeFileSync('src/pages/ServiceDetail.tsx', s2);
  console.log('ServiceDetail.tsx updated');
} catch (e) {
  console.error(e);
}
