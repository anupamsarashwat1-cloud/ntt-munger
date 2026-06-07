/* ═══════════════════════════════════════════════
   main.js  –  NTT Landing Page
   Dark/Light Mode + Hindi/English Toggles + All Interactions
   ═══════════════════════════════════════════════ */

/* ─── TRANSLATIONS ─── */
const T = {
  en: {
    /* Navbar */
    'nav.about':         'About',
    'nav.accreditation': 'Accreditation',
    'nav.curriculum':    'Curriculum',
    'nav.eligibility':   'Eligibility',
    'nav.contact':       'Contact',
    'nav.apply':         'Apply Now',
    'toggle.theme':      'Dark Mode',
    'toggle.lang':       'Switch to Hindi',

    /* Hero */
    'hero.badge':      'Admissions Open 2026–27',
    'hero.headline':   'Join <em class="hero-em">Nursery Teachers</em><br />Training (N.T.T) in <em class="hero-em">MUNGER</em>',
    'hero.subheadline':'Enroll in the <strong>NTT Certification</strong> at BRM College, Munger and become a nationally recognized, professionally trained Nursery Teacher.',
    'hero.pill1':      '🏛 AIECCE Sponsored',
    'hero.pill2':      '📜 Govt. of India Recognized',
    'hero.pill3':      '🌐 IAO Accredited',
    'hero.cta1':       'Apply Now',
    'hero.cta2':       'Download Prospectus',
    'hero.stat1':      'Graduates',
    'hero.stat2':      'Years of Excellence',
    'hero.stat3':      'Placement Rate',
    'hero.stat1Val':   'Hundreds of',
    'hero.stat3Val':   'High',
    'hero.badgeTitle': 'Top Rated Program',
    'hero.badgeSub':   'Trusted by Many Educators',

    /* Gallery */
    'gallery.title': 'Memories & Highlights',
    'gallery.desc':  'A glimpse into our campus life, events, and ceremonies.',

    /* Prospectus */
    'pros.tag': 'The Official Guide',
    'pros.title': 'Glimpses of AIECCE / N.T.T.',
    'pros.desc1': 'All India Early Childhood Care & Education (AIECCE) is a pioneer organization dedicated to providing high-quality pre-primary teacher training across India. Our comprehensive curriculum is crafted by seasoned educational experts.',
    'pros.desc2': 'In collaboration with the Indira Gandhi School of Education (ISO 9001:2015 Certified), we ensure our trainees receive both profound theoretical insights and practical classroom methodologies.',
    'pros.btn': 'View Full Details',

    /* Examination */
    'exam.tag': 'Assessment',
    'exam.title': 'Final Examination & Certification',
    'exam.desc1': 'Final examinations are held in May every year. Candidates must strictly follow the rules and regulations outlined in the Prospectus.',
    'exam.l1': 'The NTT certification is highly valued for pre-primary, private, and public schools.',
    'exam.l2': 'Our training develops self-confidence, making you fully equipped to open and run your own Nursery School.',
    'exam.l3': 'Successful students are issued an official Mark-Sheet and Certificate upon qualifying.',

    /* Trust */
    'trust.tag':      'Accreditation & Recognition',
    'trust.title':    'Nationally & Internationally Recognized',
    'trust.subtitle': 'Our program holds prestigious accreditations ensuring your certification is valued across India and globally.',
    'trust.b1.title': 'AIECCE',
    'trust.b1.org':   'All India Early Childhood<br/>Care &amp; Education',
    'trust.b1.meta':  'Regd. Govt. of NCT of Delhi',
    'trust.b1.reg':   'Reg No. S-43128',
    'trust.b2.title': 'Govt. of India',
    'trust.b2.org':   'Ministry of Human Resource<br/>Development',
    'trust.b2.meta':  'CR Registered (Secondary & Higher Education)',
    'trust.b2.reg':   'CR Reg No. L-25438/2005',
    'trust.b3.title': 'IAO',
    'trust.b3.org':   'International Accreditation<br/>Organization',
    'trust.b3.meta':  'Houston, U.S.A.',
    'trust.b3.reg':   'Globally Recognized Standard',
    'trust.b4.title': 'BRM College',
    'trust.b4.org':   'Study Centre – 6550<br/>Munger, Bihar',
    'trust.b4.meta':  'Organized by A-1 Udyamita',
    'trust.b4.reg':   'Vikas Kendra, Patna',
    'trust.b5.title': 'ISO Certified',
    'trust.b5.org':   'Indira Gandhi School<br/>of Education',
    'trust.b5.meta':  'ISO 9001:2015 Certified',
    'trust.b5.reg':   'Collaborator',

    /* About */
    'about.tag':      'Why Choose Us',
    'about.title':    'Why the NTT Program at BRM College?',
    'about.desc':     'A meticulously designed certification that equips you with both theoretical knowledge and practical classroom skills for early childhood education.',
    'about.c1.title': 'Comprehensive Curriculum',
    'about.c1.desc':  'Covering child psychology, Montessori methods, activity planning, health & nutrition — all aligned with NCF guidelines.',
    'about.c2.title': 'Expert Faculty',
    'about.c2.desc':  'Learn from experienced educators, child development specialists, and ECCE practitioners with decades of hands-on experience.',
    'about.c3.title': 'Nationally Valid Certificate',
    'about.c3.desc':  'Your NTT certificate is recognized by schools and preschools across India, opening doors to a fulfilling teaching career.',
    'about.c4.title': 'Flexible Learning',
    'about.c4.desc':  'Designed for working professionals and fresh graduates. Attend evening batches or weekend intensive sessions.',
    'about.c5.title': 'Placement Support',
    'about.c5.desc':  'Our dedicated placement cell connects graduates with top preschool chains and government Anganwadi centers.',
    'about.c6.title': 'Practical Training',
    'about.c6.desc':  'Mandatory internship at partner nursery schools gives you real classroom experience before you graduate.',

    /* Curriculum */
    'curr.tag':      'Program Structure',
    'curr.title':    'NTT Course Curriculum',
    'curr.desc':     'A structured one-year program designed to build complete competency in early childhood education.',
    'curr.c1.title': 'Child Growth & Development',
    'curr.c1.desc':  'Understanding developmental milestones, learning theories, and age-appropriate pedagogy for 0–6 years.',
    'curr.c2.title': 'Psychology of Early Learning',
    'curr.c2.desc':  'Cognitive, emotional, social development; Piaget, Vygotsky, and play-based learning frameworks.',
    'curr.c3.title': 'Activity & Lesson Planning',
    'curr.c3.desc':  'Designing theme-based lesson plans, craft activities, storytelling sessions, and daily classroom routines.',
    'curr.c4.title': 'Health, Nutrition & Safety',
    'curr.c4.desc':  'Child health basics, first aid, nutrition for toddlers, and creating safe learning environments.',
    'curr.c5.title': 'Language & Communication',
    'curr.c5.desc':  'Early literacy strategies, bilingual classrooms, storytelling, phonics, and parent communication.',
    'curr.c6.title': 'Practicum & Internship',
    'curr.c6.desc':  'Supervised teaching practice at affiliated preschools with mentored feedback and evaluation.',

    /* Eligibility */
    'elig.title':   'Eligibility Checker',
    'elig.desc':    'Answer 2 quick questions to see if you qualify for the NTT program.',
    'elig.q1':      'What is your highest educational qualification?',
    'elig.opt10':   '10th Pass',
    'elig.opt12':   '12th Pass',
    'elig.optGrad': 'Graduate or Above',
    'elig.next':    'Next Step →',
    'elig.q2':      'Do you have a passion for working with young children?',
    'elig.optYes':  'Yes, absolutely!',
    'elig.optLearn':"I'm eager to learn",
    'elig.back':    '← Back',
    'elig.check':   'Check Eligibility',
    'elig.restart': 'Start Over',
    'elig.eligTitle':  'You\'re Eligible! 🎉',
    'elig.eligMsg':    'Excellent! You meet the qualification criteria for the NTT program at BRM College (Lateral Entry for 2nd Year is also available). Apply today to secure your seat.',
    'elig.elig10Msg':  'Excellent! As a 10th pass student, you are eligible for our 1-Year NTT Diploma program. Apply today to secure your seat.',
    'elig.eligBtn':    'Apply Now →',
    'elig.notTitle':   'Almost There! 📖',
    'elig.notMsg':     'Contact our coordinator for special admission guidance regarding minimum qualifications.',
    'elig.notBtn':     '📞 Talk to Coordinator',

    /* Course Details */
    'fees.title':       'Fee Structure',
    'fees.desc':        'Transparent pricing for the complete certification program.',
    'fees.hiddenTitle': 'Fee Details Available on Request',
    'fees.hiddenDesc':  'Please contact our program coordinator to get the complete fee structure and available scholarship details.',
    'fees.hiddenBtn':   '📞 Call for Details',
    'fees.prospectus':  'Prospectus',
    'fees.admission':   'Admission Fee',
    'fees.tuition':     'Tuition Fee <small>(per year)</small>',
    'fees.exam':        'Examination Fee <small>(till 5 Dec)</small>',
    'fees.note':        '*Late fees apply after December 5th (₹1,300) and March 5th (₹1,400).',
    'books.title':      'Study Materials',
    'books.desc':       'Comprehensive resources provided by educational experts.',
    'books.manual':     'A.I.E.C.C.E NTT Manual',
    'books.manualDesc': 'The definitive guide covering all topics concerning Pre-Primary Education in India.',
    'books.lang1':      'Hindi',
    'books.lang2':      'English',
    'books.lang3':      'Punjabi',
    'books.lang4':      'Regional',

    /* Form */
    'form.title':       'Request Course Details',
    'form.desc':        'Fill in your details and our coordinator will contact you within 24 hours.',
    'form.fname':       'Full Name',
    'form.fnamePh':     'Your Full Name',
    'form.phone':       'Phone Number',
    'form.email':       'Email Address',
    'form.emailPh':     'your@email.com',
    'form.qual':        'Highest Qualification',
    'form.qualPh':      'Select your qualification',
    'form.q10':         '10th Pass',
    'form.q12':         '12th Pass / Intermediate',
    'form.qGrad':       'Graduate (B.A. / B.Sc. / B.Com)',
    'form.qPG':         'Post Graduate',
    'form.qOther':      'Other',
    'form.msg':         'Your Query (Optional)',
    'form.msgPh':       'Any specific questions about the program, fees, duration…',
    'form.submit':      'Send My Request',
    'form.privacy':     '🔒 Your information is safe with us. No spam, ever.',
    'form.successTitle':'Request Sent!',
    'form.successMsg':  'Thank you! Our coordinator <strong>Sangeeta Mishra</strong> will reach out to you within 24 hours.',
    'form.successCall': 'Call Us Now',
    'form.errName':     'Please enter your full name.',
    'form.errPhone':    'Please enter a valid 10-digit phone number.',
    'form.errQual':     'Please select your qualification.',
    'form.sending':     'Sending…',

    /* Testimonials */
    'test.tag':   'Student Stories',
    'test.title': 'What Our Graduates Say',
    'test.t1': '"The NTT program at BRM College completely transformed my confidence. I now lead a class of 25 toddlers at a reputed preschool in Munger. The faculty were incredibly supportive."',
    'test.n1': 'NTT Student',
    'test.r1': 'NTT Graduate, 2023 · Now teaching at Kidzee, Munger',
    'test.t2': '"I joined after my 12th and wasn\'t sure about my future. This program gave me a clear career path and a nationally recognized certificate that opened so many doors."',
    'test.n2': 'NTT Student',
    'test.r2': 'NTT Graduate, 2022 · Runs her own Playgroup in Bhagalpur',
    'test.t3': '"Coordinator Sangeeta Ma\'am was always there to guide us. The practical training and internship experience made me industry-ready from day one."',
    'test.n3': 'NTT Student',
    'test.r3': 'NTT Graduate, 2024 · Early Education Lead, Patna',

    /* Footer */
    'footer.bbbpTitle':   'बेटी है वरदान, इसका करो सम्मान',
    'footer.bbbpSub':     'Beti Bachao, Beti Padhao',
    'footer.tagline':     'Study Centre-6550 · Transforming Lives Through Quality Early Education',
    'footer.orgLabel':    'Organized by:',
    'footer.orgName':     'A-1 Udyamita Vikas Kendra, Patna',
    'footer.sponLabel':   'Sponsored by:',
    'footer.sponName':    'All India Early Childhood Care & Education (AIECCE)',
    'footer.contactTitle':'📍 Contact Us',
    'footer.coordRole':   'Program Co-Ordinator',
    'footer.coordNote':   'Available Mon–Sat · 10 AM – 5 PM',
    'footer.callBtn':     'Call Coordinator',
    'footer.waBtn':       'WhatsApp Us',
    'footer.copy':        '© 2025 BRM College, Munger. All Rights Reserved. · NTT Program by AIECCE',
    'footer.disclaimer':  'This page is for informational purposes. For official details, contact the coordinator directly.',

    /* Floating */
    'float.call': 'Call',
    'float.wa':   'WhatsApp',

    /* Newspaper */
    'newspaper.title': 'Newspaper Cuttings',
    'newspaper.desc':  'Read what the local press has to say about our recent events and graduations.',
  },

  hi: {
    /* Navbar */
    'nav.about':         'परिचय',
    'nav.accreditation': 'मान्यता',
    'nav.curriculum':    'पाठ्यक्रम',
    'nav.eligibility':   'पात्रता',
    'nav.contact':       'संपर्क',
    'nav.apply':         'अभी आवेदन करें',
    'toggle.theme':      'डार्क मोड',
    'toggle.lang':       'Switch to English',

    /* Hero */
    'hero.badge':      'प्रवेश खुले हैं 2026–27',
    'hero.headline':   '<em class="hero-em">नर्सरी टीचर ट्रेनिंग</em><br />(N.T.T) में शामिल हों',
    'hero.subheadline':'BRM कॉलेज, मुंगेर में <strong>NTT प्रमाणन</strong> में दाखिला लें और राष्ट्रीय स्तर पर मान्यता प्राप्त, प्रशिक्षित नर्सरी शिक्षक बनें।',
    'hero.pill1':      '🏛 AIECCE प्रायोजित',
    'hero.pill2':      '📜 भारत सरकार मान्यता प्राप्त',
    'hero.pill3':      '🌐 IAO मान्यता प्राप्त',
    'hero.cta1':       'अभी आवेदन करें',
    'hero.cta2':       'विवरणिका डाउनलोड करें',
    'hero.stat1':      'स्नातक',
    'hero.stat2':      'उत्कृष्टता के वर्ष',
    'hero.stat3':      'नियुक्ति दर',
    'hero.stat1Val':   'सैकड़ों',
    'hero.stat3Val':   'उच्च',
    'hero.badgeTitle': 'शीर्ष रेटेड कार्यक्रम',
    'hero.badgeSub':   'कई शिक्षकों का भरोसा',

    /* Gallery */
    'gallery.title': 'स्मृतियां और मुख्य अंश',
    'gallery.desc':  'हमारे परिसर के जीवन, घटनाओं और समारोहों की एक झलक।',

    /* Prospectus */
    'pros.tag': 'आधिकारिक मार्गदर्शिका',
    'pros.title': 'AIECCE / N.T.T. की झलकियाँ',
    'pros.desc1': 'अखिल भारतीय प्रारंभिक बाल्यावस्था देखभाल और शिक्षा (AIECCE) पूरे भारत में उच्च गुणवत्ता वाले पूर्व-प्राथमिक शिक्षक प्रशिक्षण प्रदान करने के लिए समर्पित एक अग्रणी संगठन है। हमारा व्यापक पाठ्यक्रम अनुभवी शिक्षा विशेषज्ञों द्वारा तैयार किया गया है।',
    'pros.desc2': 'इंदिरा गांधी स्कूल ऑफ एजुकेशन (ISO 9001:2015 प्रमाणित) के सहयोग से, हम सुनिश्चित करते हैं कि हमारे प्रशिक्षुओं को गहन सैद्धांतिक ज्ञान और व्यावहारिक कक्षा पद्धतियाँ दोनों प्राप्त हों।',
    'pros.btn': 'पूर्ण विवरण देखें',

    /* Examination */
    'exam.tag': 'मूल्यांकन',
    'exam.title': 'अंतिम परीक्षा और प्रमाणन',
    'exam.desc1': 'अंतिम परीक्षा हर साल मई में आयोजित की जाती है। उम्मीदवारों को विवरणिका में उल्लिखित नियमों और विनियमों का सख्ती से पालन करना चाहिए।',
    'exam.l1': 'NTT प्रमाणन पूर्व-प्राथमिक, निजी और पब्लिक स्कूलों के लिए अत्यधिक मूल्यवान है।',
    'exam.l2': 'हमारा प्रशिक्षण आत्मविश्वास विकसित करता है, जिससे आप अपना खुद का नर्सरी स्कूल खोलने और चलाने के लिए पूरी तरह सुसज्जित हो जाते हैं।',
    'exam.l3': 'सफल छात्रों को उत्तीर्ण होने पर आधिकारिक मार्क-शीट और प्रमाणपत्र जारी किया जाता है।',

    /* Trust */
    'trust.tag':      'मान्यता और पहचान',
    'trust.title':    'राष्ट्रीय और अंतर्राष्ट्रीय मान्यता प्राप्त',
    'trust.subtitle': 'हमारे कार्यक्रम में प्रतिष्ठित मान्यताएं हैं जो सुनिश्चित करती हैं कि आपका प्रमाणपत्र भारत और विश्व में मान्य है।',
    'trust.b1.title': 'AIECCE',
    'trust.b1.org':   'अखिल भारतीय प्रारंभिक<br/>बाल्यावस्था देखभाल और शिक्षा',
    'trust.b1.meta':  'दिल्ली NCT सरकार में पंजीकृत',
    'trust.b1.reg':   'रजि. क्र. S-43128',
    'trust.b2.title': 'भारत सरकार',
    'trust.b2.org':   'मानव संसाधन विकास<br/>मंत्रालय',
    'trust.b2.meta':  'CR पंजीकृत (माध्यमिक और उच्च शिक्षा)',
    'trust.b2.reg':   'CR रजि. क्र. L-25438/2005',
    'trust.b3.title': 'IAO',
    'trust.b3.org':   'अंतर्राष्ट्रीय मान्यता<br/>संगठन',
    'trust.b3.meta':  'ह्यूस्टन, यू.एस.ए.',
    'trust.b3.reg':   'वैश्विक मान्यता मानक',
    'trust.b4.title': 'BRM कॉलेज',
    'trust.b4.org':   'अध्ययन केंद्र – 6550<br/>मुंगेर, बिहार',
    'trust.b4.meta':  'आयोजक: A-1 उद्यमिता',
    'trust.b4.reg':   'विकास केंद्र, पटना',
    'trust.b5.title': 'ISO प्रमाणित',
    'trust.b5.org':   'इंदिरा गांधी स्कूल<br/>ऑफ एजुकेशन',
    'trust.b5.meta':  'ISO 9001:2015 प्रमाणित',
    'trust.b5.reg':   'सहयोगी',

    /* About */
    'about.tag':      'हमें क्यों चुनें',
    'about.title':    'BRM कॉलेज में NTT कार्यक्रम क्यों?',
    'about.desc':     'एक सुव्यवस्थित प्रमाणन जो आपको बाल्यावस्था शिक्षा के लिए सैद्धांतिक ज्ञान और व्यावहारिक कौशल दोनों से सशक्त बनाता है।',
    'about.c1.title': 'व्यापक पाठ्यक्रम',
    'about.c1.desc':  'बाल मनोविज्ञान, मोंटेसरी विधि, गतिविधि योजना, स्वास्थ्य और पोषण — सभी NCF दिशानिर्देशों के अनुसार।',
    'about.c2.title': 'विशेषज्ञ शिक्षक',
    'about.c2.desc':  'अनुभवी शिक्षकों, बाल विकास विशेषज्ञों और ECCE व्यवसायियों से सीखें।',
    'about.c3.title': 'राष्ट्रीय स्तर पर मान्य प्रमाणपत्र',
    'about.c3.desc':  'आपका NTT प्रमाणपत्र भारत भर के स्कूलों और प्री-स्कूलों में मान्य है।',
    'about.c4.title': 'लचीली शिक्षा',
    'about.c4.desc':  'कामकाजी पेशेवरों और नए स्नातकों के लिए बनाया गया। शाम के बैच या सप्ताहांत कक्षाओं में शामिल हों।',
    'about.c5.title': 'प्लेसमेंट सहायता',
    'about.c5.desc':  'हमारी प्लेसमेंट सेल स्नातकों को शीर्ष प्री-स्कूल और सरकारी आंगनवाड़ी केंद्रों से जोड़ती है।',
    'about.c6.title': 'व्यावहारिक प्रशिक्षण',
    'about.c6.desc':  'सहयोगी नर्सरी स्कूलों में अनिवार्य इंटर्नशिप से आपको वास्तविक कक्षा का अनुभव मिलता है।',

    /* Curriculum */
    'curr.tag':      'कार्यक्रम संरचना',
    'curr.title':    'NTT पाठ्यक्रम',
    'curr.desc':     'एक वर्षीय संरचित कार्यक्रम जो बाल्यावस्था शिक्षा में पूर्ण दक्षता विकसित करता है।',
    'curr.c1.title': 'बच्चे की वृद्धि और विकास',
    'curr.c1.desc':  '0–6 वर्ष के बच्चों के लिए विकासात्मक मील के पत्थर, सीखने के सिद्धांत और उम्र-उचित शिक्षाशास्त्र।',
    'curr.c2.title': 'प्रारंभिक शिक्षण का मनोविज्ञान',
    'curr.c2.desc':  'संज्ञानात्मक, भावनात्मक, सामाजिक विकास; पियाजे, वायगोत्स्की और खेल-आधारित शिक्षण।',
    'curr.c3.title': 'गतिविधि और पाठ योजना',
    'curr.c3.desc':  'थीम-आधारित पाठ योजनाएं, शिल्प गतिविधियां, कहानी सुनाना और दैनिक कक्षा दिनचर्या।',
    'curr.c4.title': 'स्वास्थ्य, पोषण और सुरक्षा',
    'curr.c4.desc':  'बाल स्वास्थ्य की मूल बातें, प्राथमिक चिकित्सा, शिशुओं का पोषण और सुरक्षित शिक्षण वातावरण।',
    'curr.c5.title': 'भाषा और संचार',
    'curr.c5.desc':  'प्रारंभिक साक्षरता रणनीतियां, द्विभाषी कक्षाएं, कहानी सुनाना, फोनिक्स और अभिभावक संचार।',
    'curr.c6.title': 'प्रैक्टिकम और इंटर्नशिप',
    'curr.c6.desc':  'संबद्ध प्री-स्कूलों में पर्यवेक्षित शिक्षण अभ्यास, मार्गदर्शन और मूल्यांकन।',

    /* Eligibility */
    'elig.title':   'पात्रता जांचें',
    'elig.desc':    'NTT कार्यक्रम के लिए अपनी पात्रता जानने के लिए 2 प्रश्नों का उत्तर दें।',
    'elig.q1':      'आपकी सर्वोच्च शैक्षणिक योग्यता क्या है?',
    'elig.opt10':   '10वीं पास',
    'elig.opt12':   '12वीं पास',
    'elig.optGrad': 'स्नातक या उससे ऊपर',
    'elig.next':    'अगला चरण →',
    'elig.q2':      'क्या आपको छोटे बच्चों के साथ काम करने का जुनून है?',
    'elig.optYes':  'हाँ, बिल्कुल!',
    'elig.optLearn':'मैं सीखने के लिए उत्सुक हूँ',
    'elig.back':    '← वापस',
    'elig.check':   'पात्रता जांचें',
    'elig.restart': 'फिर से शुरू करें',
    'elig.eligTitle':  'आप पात्र हैं! 🎉',
    'elig.eligMsg':    'बधाई! आप BRM कॉलेज के NTT कार्यक्रम के लिए योग्यता मानदंड पूरा करते हैं (द्वितीय वर्ष में सीधे प्रवेश भी उपलब्ध है)। आज ही आवेदन करें।',
    'elig.elig10Msg':  'बधाई! 10वीं पास होने के नाते, आप हमारे 1-वर्षीय NTT डिप्लोमा कार्यक्रम के लिए पूरी तरह से पात्र हैं। आज ही आवेदन करें।',
    'elig.eligBtn':    'अभी आवेदन करें →',
    'elig.notTitle':   'लगभग तैयार! 📖',
    'elig.notMsg':     'न्यूनतम योग्यता के संबंध में विशेष प्रवेश मार्गदर्शन के लिए हमारे समन्वयक से संपर्क करें।',
    'elig.notBtn':     '📞 समन्वयक से बात करें',

    /* Course Details */
    'fees.title':       'शुल्क संरचना',
    'fees.desc':        'संपूर्ण प्रमाणन कार्यक्रम के लिए पारदर्शी मूल्य निर्धारण।',
    'fees.hiddenTitle': 'शुल्क विवरण अनुरोध पर उपलब्ध है',
    'fees.hiddenDesc':  'संपूर्ण शुल्क संरचना और उपलब्ध छात्रवृत्ति विवरण प्राप्त करने के लिए कृपया हमारे कार्यक्रम समन्वयक से संपर्क करें।',
    'fees.hiddenBtn':   '📞 विवरण के लिए कॉल करें',
    'fees.prospectus':  'विवरणिका',
    'fees.admission':   'प्रवेश शुल्क',
    'fees.tuition':     'शिक्षण शुल्क <small>(प्रति वर्ष)</small>',
    'fees.exam':        'परीक्षा शुल्क <small>(5 दिसंबर तक)</small>',
    'fees.note':        '*5 दिसंबर के बाद (₹1,300) और 5 मार्च के बाद (₹1,400) विलंब शुल्क लागू।',
    'books.title':      'अध्ययन सामग्री',
    'books.desc':       'शिक्षा विशेषज्ञों द्वारा प्रदान किए गए व्यापक संसाधन।',
    'books.manual':     'A.I.E.C.C.E NTT मैनुअल',
    'books.manualDesc': 'भारत में पूर्व-प्राथमिक शिक्षा से संबंधित सभी विषयों को कवर करने वाली अंतिम मार्गदर्शिका।',
    'books.lang1':      'हिंदी',
    'books.lang2':      'अंग्रेज़ी',
    'books.lang3':      'पंजाबी',
    'books.lang4':      'क्षेत्रीय',

    /* Form */
    'form.title':       'कोर्स विवरण अनुरोध करें',
    'form.desc':        'अपना विवरण भरें और हमारे समन्वयक 24 घंटे के भीतर संपर्क करेंगे।',
    'form.fname':       'पूरा नाम',
    'form.fnamePh':     'आपका पूरा नाम',
    'form.phone':       'फोन नंबर',
    'form.email':       'ईमेल पता',
    'form.emailPh':     'your@email.com',
    'form.qual':        'सर्वोच्च योग्यता',
    'form.qualPh':      'अपनी योग्यता चुनें',
    'form.q10':         '10वीं पास',
    'form.q12':         '12वीं पास / इंटरमीडिएट',
    'form.qGrad':       'स्नातक (B.A. / B.Sc. / B.Com)',
    'form.qPG':         'स्नातकोत्तर',
    'form.qOther':      'अन्य',
    'form.msg':         'आपकी जिज्ञासा (वैकल्पिक)',
    'form.msgPh':       'कार्यक्रम, शुल्क, अवधि के बारे में कोई प्रश्न…',
    'form.submit':      'अनुरोध भेजें',
    'form.privacy':     '🔒 आपकी जानकारी हमारे साथ सुरक्षित है। कोई स्पैम नहीं।',
    'form.successTitle':'अनुरोध भेजा गया!',
    'form.successMsg':  'धन्यवाद! हमारी समन्वयक <strong>संगीता मिश्रा</strong> 24 घंटे के भीतर आपसे संपर्क करेंगी।',
    'form.successCall': 'अभी कॉल करें',
    'form.errName':     'कृपया अपना पूरा नाम दर्ज करें।',
    'form.errPhone':    'कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करें।',
    'form.errQual':     'कृपया अपनी योग्यता चुनें।',
    'form.sending':     'भेजा जा रहा है…',

    /* Testimonials */
    'test.tag':   'छात्रों की कहानियां',
    'test.title': 'हमारे स्नातक क्या कहते हैं',
    'test.t1': '"BRM कॉलेज के NTT कार्यक्रम ने मेरा आत्मविश्वास पूरी तरह बदल दिया। अब मैं मुंगेर के एक प्रतिष्ठित प्री-स्कूल में 25 बच्चों की कक्षा चलाती हूँ।"',
    'test.n1': 'NTT छात्रा',
    'test.r1': 'NTT स्नातक, 2023 · Kidzee, मुंगेर में अध्यापन',
    'test.t2': '"मैंने 12वीं के बाद ज्वॉइन किया और मुझे अपने भविष्य की चिंता थी। इस कार्यक्रम ने मुझे एक स्पष्ट करियर पथ और राष्ट्रीय प्रमाणपत्र दिया।"',
    'test.n2': 'NTT छात्रा',
    'test.r2': 'NTT स्नातक, 2022 · भागलपुर में अपना प्लेग्रुप',
    'test.t3': '"समन्वयक संगीता मैम हमेशा मार्गदर्शन के लिए उपलब्ध थीं। व्यावहारिक प्रशिक्षण और इंटर्नशिप ने मुझे पहले दिन से तैयार कर दिया।"',
    'test.n3': 'NTT छात्रा',
    'test.r3': 'NTT स्नातक, 2024 · अर्ली एजुकेशन लीड, पटना',

    /* Footer */
    'footer.bbbpTitle':   'बेटी है वरदान, इसका करो सम्मान',
    'footer.bbbpSub':     'Beti Bachao, Beti Padhao',
    'footer.tagline':     'अध्ययन केंद्र-6550 · गुणवत्तापूर्ण शिक्षा से जीवन बदलना',
    'footer.orgLabel':    'आयोजक:',
    'footer.orgName':     'A-1 उद्यमिता विकास केंद्र, पटना',
    'footer.sponLabel':   'प्रायोजक:',
    'footer.sponName':    'अखिल भारतीय प्रारंभिक बाल्यावस्था देखभाल और शिक्षा (AIECCE)',
    'footer.contactTitle':'📍 संपर्क करें',
    'footer.coordRole':   'कार्यक्रम समन्वयक',
    'footer.coordNote':   'उपलब्धता: सोम–शनि · सुबह 10 – शाम 5 बजे',
    'footer.callBtn':     'कॉल करें',
    'footer.waBtn':       'WhatsApp करें',
    'footer.copy':        '© 2025 BRM कॉलेज, मुंगेर। सर्वाधिकार सुरक्षित। · AIECCE द्वारा NTT कार्यक्रम',
    'footer.disclaimer':  'यह पृष्ठ सूचनात्मक उद्देश्यों के लिए है। आधिकारिक विवरण के लिए समन्वयक से संपर्क करें।',

    /* Floating */
    'float.call': 'कॉल',
    'float.wa':   'WhatsApp',

    /* Newspaper */
    'newspaper.title': 'समाचार पत्र कटिंग',
    'newspaper.desc':  'हमारे हालिया आयोजनों और दीक्षांत समारोहों के बारे में स्थानीय प्रेस की कवरेज पढ़ें।',
  }
};

/* ─── STATE ─── */
let lang  = localStorage.getItem('ntt-lang')  || 'en';
let theme = localStorage.getItem('ntt-theme') || 'light';

/* ─── APPLY TRANSLATIONS ─── */
function applyLang(l) {
  const t = T[l];

  /* textContent nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* innerHTML nodes (may contain <em>, <strong>, <br/>) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* placeholder attributes */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* html lang attribute for accessibility */
  document.documentElement.lang = l;

  /* update toggle button labels */
  const langLabel    = document.getElementById('lang-label');
  const mobLangSpan  = document.querySelector('#lang-toggle-mob .mob-lang-icon');
  const mobThemeSpan = document.querySelector('#theme-toggle-mob .mob-theme-icon');

  if (langLabel)    langLabel.textContent = l === 'en' ? 'हिं' : 'EN';

  /* update mobile toggle text via data-i18n (already handled above) */

  /* update form validation error messages stored globally */
  window._errName  = t['form.errName'];
  window._errPhone = t['form.errPhone'];
  window._errQual  = t['form.errQual'];
  window._sending  = t['form.sending'];
}

/* ─── APPLY THEME ─── */
function applyTheme(th) {
  document.documentElement.setAttribute('data-theme', th);
  const icon    = document.getElementById('theme-icon');
  const mobIcons = document.querySelectorAll('.mob-theme-icon');
  if (icon) icon.textContent = th === 'dark' ? '☀️' : '🌙';
  mobIcons.forEach(i => i.textContent = th === 'dark' ? '☀️' : '🌙');
}

/* ─── THEME TOGGLE ─── */
function handleThemeToggle() {
  theme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('ntt-theme', theme);
  applyTheme(theme);
}

/* ─── LANG TOGGLE ─── */
function handleLangToggle() {
  lang = lang === 'en' ? 'hi' : 'en';
  localStorage.setItem('ntt-lang', lang);
  applyLang(lang);
}

/* ─── INIT TOGGLES ─── */
(function initToggles() {
  /* Desktop */
  const themeBtn  = document.getElementById('theme-toggle');
  const langBtn   = document.getElementById('lang-toggle');
  /* Mobile */
  const themeBtnM = document.getElementById('theme-toggle-mob');
  const langBtnM  = document.getElementById('lang-toggle-mob');

  themeBtn  && themeBtn.addEventListener('click',  handleThemeToggle);
  langBtn   && langBtn.addEventListener('click',   handleLangToggle);
  themeBtnM && themeBtnM.addEventListener('click', handleThemeToggle);
  langBtnM  && langBtnM.addEventListener('click',  handleLangToggle);

  /* Apply saved state on load */
  applyTheme(theme);
  applyLang(lang);
})();

/* ─── 1. Navbar: scroll effect + hamburger ─── */
(function () {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    const floatingCta = document.getElementById('floating-cta');
    if (floatingCta) floatingCta.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });

  hamburger && hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    const bars = hamburger.querySelectorAll('span');
    if (isOpen) {
      bars[0].style.transform = 'translateY(7px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      if (!mobileMenu.contains(e.target) && (!hamburger || !hamburger.contains(e.target))) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        const bars = hamburger.querySelectorAll('span');
        bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      }
    }
  });

  mobileMenu && mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
      hamburger.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    });
  });
})();

/* ─── 2. Scroll-driven animations ─── */
(function () {
  const els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
})();

/* ─── 3. Animated stat counters ─── */
(function () {
  const statNums = document.querySelectorAll('.stat-number[data-count]');
  if (!statNums.length) return;

  const animateCount = (el) => {
    const target   = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const startTime = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 4);
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      el.textContent = Math.floor(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  };

  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNums.forEach(animateCount);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(statsSection);
})();

/* ─── 4. Eligibility Checker ─── */
(function () {
  const step1   = document.getElementById('elig-step-1');
  const step2   = document.getElementById('elig-step-2');
  const result  = document.getElementById('elig-result');
  const content = document.getElementById('elig-result-content');
  const nextBtn  = document.getElementById('elig-next-btn');
  const backBtn  = document.getElementById('elig-back-btn');
  const checkBtn = document.getElementById('elig-check-btn');
  const restart  = document.getElementById('elig-restart-btn');
  if (!step1) return;

  step1.querySelectorAll('input[type="radio"]').forEach(r =>
    r.addEventListener('change', () => { nextBtn.disabled = false; }));

  step2 && step2.querySelectorAll('input[type="radio"]').forEach(r =>
    r.addEventListener('change', () => { checkBtn.disabled = false; }));

  nextBtn  && nextBtn.addEventListener('click',  () => { step1.classList.remove('active'); step2.classList.add('active'); });
  backBtn  && backBtn.addEventListener('click',  () => { step2.classList.remove('active'); step1.classList.add('active'); });

  checkBtn && checkBtn.addEventListener('click', () => {
    const qual = document.querySelector('input[name="qualification"]:checked')?.value;
    const t = T[lang];
    const eligible = qual === '10th' || qual === '12th' || qual === 'graduate';

    step2.classList.remove('active');
    result.classList.add('active');

    content.className = 'elig-result-content ' + (eligible ? 'result-eligible' : 'result-not-eligible');
    content.innerHTML = eligible
      ? `<div class="result-icon">🎉</div>
         <div class="result-title" style="color:#16a34a">${t['elig.eligTitle']}</div>
         <p class="result-text">${qual === '10th' ? t['elig.elig10Msg'] : t['elig.eligMsg']}</p>
         <a href="#apply" class="btn btn-primary" style="margin-top:1.25rem;display:inline-flex;">${t['elig.eligBtn']}</a>`
      : `<div class="result-icon">📖</div>
         <div class="result-title" style="color:#dc2626">${t['elig.notTitle']}</div>
         <p class="result-text">${t['elig.notMsg']}</p>
         <a href="tel:8409380779" class="btn btn-primary" style="margin-top:1.25rem;display:inline-flex;">${t['elig.notBtn']}</a>`;
  });

  restart && restart.addEventListener('click', () => {
    result.classList.remove('active');
    step1.classList.add('active');
    document.querySelectorAll('input[name="qualification"],input[name="passion"]').forEach(r => r.checked = false);
    nextBtn.disabled  = true;
    checkBtn.disabled = true;
  });
})();

/* ─── 5. Lead Capture Form ─── */
(function () {
  const form    = document.getElementById('lead-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  const showError = (id, errId, msg) => {
    const el = document.getElementById(id);
    const er = document.getElementById(errId);
    if (el) el.classList.add('invalid');
    if (er) er.textContent = msg;
  };
  const clearError = (id, errId) => {
    const el = document.getElementById(id);
    const er = document.getElementById(errId);
    if (el) el.classList.remove('invalid');
    if (er) er.textContent = '';
  };

  ['fname', 'phone'].forEach(id =>
    document.getElementById(id)?.addEventListener('input', () => clearError(id, `${id}-error`)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const fname = document.getElementById('fname')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const qual  = document.getElementById('qualification-select')?.value;
    const t = T[lang];

    clearError('fname', 'fname-error');
    clearError('phone', 'phone-error');
    clearError('qualification-select', 'qual-error');

    if (!fname || fname.length < 2)               { showError('fname', 'fname-error', t['form.errName']  || 'Please enter your name.'); valid = false; }
    if (!phone || phone.replace(/\D/g,'').length < 10){ showError('phone', 'phone-error', t['form.errPhone'] || 'Enter valid phone number.'); valid = false; }
    if (!qual)                                     { showError('qualification-select', 'qual-error', t['form.errQual'] || 'Select qualification.'); valid = false; }

    if (!valid) return;

    const btn = document.getElementById('form-submit-btn');
    const btnText = btn.querySelector('[data-i18n="form.submit"]');
    if (btnText) btnText.textContent = t['form.sending'] || 'Sending…';
    btn.disabled = true;

    // Build form data
    const formData = new FormData(form);
    formData.append("access_key", "65160043-a426-44ca-9ec5-ce0ceb7aea09");
    formData.append("subject", "New Lead from NTT Munger Website!");
    formData.append("from_name", "NTT Munger Website");

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        form.hidden = true;
        if (success) success.hidden = false;
      } else {
        console.log(response);
        alert(json.message || "Something went wrong! Please try again.");
        btn.disabled = false;
        if (btnText) btnText.textContent = t['form.submit'] || 'Submit Application';
      }
    })
    .catch(error => {
      console.error(error);
      alert("Something went wrong! Please try again.");
      btn.disabled = false;
      if (btnText) btnText.textContent = t['form.submit'] || 'Submit Application';
    });
  });
})();

/* ─── 6. Smooth scroll ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (document.getElementById('navbar')?.offsetHeight || 72) - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ─── 7. Slideshow Gallery ─── */
window.slideIndex = 1;
window.slideInterval = null;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (!slides.length) return;
  if (n > slides.length) {window.slideIndex = 1}    
  if (n < 1) {window.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[window.slideIndex-1].style.display = "block";  

}

window.changeSlide = function(n) {
  showSlides(window.slideIndex += n);
  resetInterval();
}



function resetInterval() {
  clearInterval(window.slideInterval);
  window.slideInterval = setInterval(() => { window.changeSlide(1) }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(window.slideIndex);
  window.slideInterval = setInterval(() => { window.changeSlide(1) }, 4000);
});

/* ==========================================================================
   Image Modal Logic
   ========================================================================== */
function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
  
  // Pause any background animations if necessary
  clearInterval(window.slideInterval);
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  
  // Resume background animations
  window.slideInterval = setInterval(() => { window.changeSlide(1) }, 4000);
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("imageModal");
    if (modal && modal.style.display === "block") {
      closeModal();
    }
  }
});
