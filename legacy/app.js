/* ===================== DATA ===================== */
// Loaded from a separate, cacheable file (seed-members-data.js) instead of being
// embedded directly here — lets browsers cache this large, rarely-changing dataset
// between visits, instead of re-downloading it every time this file itself changes.
const RAW_MEMBERS = window.SEED_MEMBERS_DATA || [];
const RAW_SEVA_SAMITI = [{"samiti_name": "સભા સંચાલન", "main": [{"name": "ભજન ધનશ્યામભાઈ ભાદાણી", "mobile": "99252 77837"}], "assist": [{"name": "પૂર્ણિક રાજેશભાઈ ગાબાણી", "mobile": "93135 49496"}, {"name": "દેવત અંકુરેશભાઈ કળથીયા", "mobile": "96012 99855"}, {"name": "વેદ અલ્પેશભાઈ ગાબાણી", "mobile": "96648 04319"}], "idx": 0}, {"samiti_name": "સિકયુરિટી વિભાગ", "main": [{"name": "ધીરુભાઈ માંગુકિયા", "mobile": "81601 33364"}], "assist": [{"name": "ગંગેશ નરેશભાઈ વિઠાણી", "mobile": "87996 17202"}], "idx": 1}, {"samiti_name": "ભોજન વિભાગ", "main": [{"name": "ગૌરવ ઋતુભાઈ માણિયા", "mobile": "92651 61324"}], "assist": [{"name": "ગૌરવ નીતિનભાઈ પામભર", "mobile": "96012 91060"}], "idx": 2}, {"samiti_name": "ફોટો વિડિયો વિભાગ", "main": [{"name": "પ્રેમ મનીષભાઈ પટેલ", "mobile": "93164 69963"}], "assist": [{"name": "સર્વેશ સંદીપભાઈ વિઠાણી", "mobile": "79909 47427"}], "idx": 3}, {"samiti_name": "સાઉન્ડ વિભાગ", "main": [{"name": "ઓમ પ્રવીણભાઈ કળથીયા", "mobile": "88667 61901"}], "assist": [{"name": "અલર્ક કિશોરભાઈ ચૌહાણ", "mobile": "88496 71391"}], "idx": 4}, {"samiti_name": "સંગીત વિભાગ", "main": [{"name": "સર્ગ પરેશભાઈ ડાવરા", "mobile": "96012 91355"}], "assist": [{"name": "સ્વનિત રાકેશભાઈ કાસોદરિયા", "mobile": "90816 90908"}, {"name": "નંદકિશોર દિનેશભાઈ સાંગા", "mobile": "94083 46717"}, {"name": "દક્ષ હિતેશભાઈ કેવડિયા", "mobile": "90999 74800"}, {"name": "દેવ જગમનેશભાઈ દોરા", "mobile": "78028 90630"}, {"name": "પ્રિતેશ રમેશભાઈ જેતાણી", "mobile": "72850 51375"}], "idx": 5}, {"samiti_name": "સફાઈ સમિતિ વિભાગ", "main": [{"name": "આશીલ ઘનજીભાઈ મિયાણી", "mobile": "77779 46978"}], "assist": [{"name": "પ્રીતમ પરેશભાઈ સલિયા", "mobile": "99798 77406"}, {"name": "સહજ અશોકભાઈ માણિયા", "mobile": "93289 71635"}], "idx": 6}, {"samiti_name": "બુટ-ચંપલ વિભાગ", "main": [{"name": "મહર્ષિ આશીષભાઈ વાઘાણી", "mobile": "96012 91191"}], "assist": [{"name": "ધ્રુમિલ પરેશભાઈ (પ્રભુભાઈ) કેવડિયા", "mobile": "83206 38148"}], "idx": 7}, {"samiti_name": "બેઠક વ્યવસ્થા", "main": [{"name": "પ્રિન્સ ધનશ્યામભાઈ ગાબાણી", "mobile": "92655 77543"}], "assist": [{"name": "જયદીપ ચેતનભાઈ કેવડિયા", "mobile": "70469 22907"}, {"name": "કૃણાલ ભરતભાઈ કળથીયા", "mobile": "77779 53593"}], "idx": 8}, {"samiti_name": "LED + ઇન્ટરનેટ વિભાગ", "main": [{"name": "હેમાંગ મહેશભાઈ અણઘણ", "mobile": "81607 00206"}], "assist": [{"name": "અક્ષર જીતેન્દ્રભાઈ મિયાણી", "mobile": "96012 98688"}, {"name": "જિમિષ અંકુરેશભાઈ માંગુકિયા", "mobile": "92659 09202"}], "idx": 9}, {"samiti_name": "રિપોર્ટિંગ", "main": [{"name": "હરિકૃષ્ણ પરેશભાઈ સલિયા", "mobile": "93282 83704"}], "assist": [{"name": "રોમિલ સુરેશભાઈ જીવાણી", "mobile": "63514 10851"}, {"name": "ભૂમન ધનશ્યામભાઈ અણઘણ", "mobile": "81408 15720"}], "idx": 10}, {"samiti_name": "રસોડા વિભાગ / પીરસણ વિભાગ", "main": [{"name": "સાહિલ મુકેશભાઈ કેવડિયા", "mobile": "90239 96069"}], "assist": [{"name": "હરિકૃષ્ણ વિનોદભાઈ ભીંગરાડિયા", "mobile": "87806 26391"}, {"name": "યજ્ઞેશ ભાવેશભાઈ અણઘણ", "mobile": "98794 36134"}, {"name": "દક્ષિત હરેશભાઈ નાવડિયા", "mobile": "92652 21751"}, {"name": "પ્રીતમ ધર્મેશભાઈ કેવડિયા", "mobile": "90814 90170"}], "idx": 11}, {"samiti_name": "હાજરી વિભાગ", "main": [{"name": "વૈદિક રમેશભાઈ જેતાણી", "mobile": "81603 47704"}], "assist": [{"name": "દક્ષેશ ભરતભાઈ અણઘણ", "mobile": "74052 92668"}, {"name": "ગૌરવ ઋતુભાઈ માણિયા", "mobile": "92651 61324"}], "idx": 12}, {"samiti_name": "રમત-ગમત (ગેમ) વિભાગ", "main": [{"name": "દક્ષેશ ભરતભાઈ અણઘણ", "mobile": "74052 92668"}], "assist": [{"name": "ઓમ અશોકભાઈ અવૈયા", "mobile": "99043 66131"}, {"name": "ઋષ વિપુલભાઈ પડસાળા", "mobile": "81607 73309"}], "idx": 13}, {"samiti_name": "વિડિયો હાઇલાઇટિંગ એન્ડ એડિટિંગ", "main": [{"name": "કેતુલ જયસુખભાઈ કળથીયા", "mobile": "82007 69264"}], "assist": [{"name": "ઓમ ધનશ્યામભાઈ જીવાણી", "mobile": "99257 67727"}, {"name": "સર્વેશ સંદીપભાઈ વિઠાણી", "mobile": "79909 47427"}], "idx": 14}, {"samiti_name": "સંચાલન", "main": [{"name": "હેમાંગ મહેશભાઈ અણઘણ", "mobile": "81607 00206"}], "assist": [{"name": "હરિકૃષ્ણ પરેશભાઈ સલિયા", "mobile": "93282 83704"}, {"name": "રોમિલ સુરેશભાઈ જીવાણી", "mobile": "63514 10851"}, {"name": "ઓમ પ્રવીણભાઈ કળથીયા", "mobile": "88667 61901"}, {"name": "પૂર્ણિક રાજેશભાઈ ગાબાણી", "mobile": "93135 49496"}], "idx": 15}];
// Seva Samiti's volunteer dropdowns used to pull from a hardcoded, disconnected list
// of names typed in once. Now Members is the single source of truth: this derives the
// list live, every time it's called, from active Members whose role is 'યુવા સભ્ય'
// (Yuva Member), using each member's Full Name (Gujarati) — so adding a new Yuva
// Member or fixing their name in Members automatically shows up here too, with no
// separate list to maintain.
function getSevaVolunteersDirectory(){
  const members = (MODULES.members && MODULES.members.data) || [];
  return members
    .filter(m => m.role === 'યુવા સભ્ય' && m.active_status !== 'inactive')
    .map(m => ({ name: m.full_name || m.name || '', mobile: m.mobile || '' }))
    .filter(v => v.name);
}
const SEVA_VOLUNTEERS_DIRECTORY = []; // kept for backward compatibility; use getSevaVolunteersDirectory() instead
const SEVA_FOOTER_DATA = [{"name": "દિવ્યેશભાઈ ડુંગરાણી", "mobile": "96012 91484", "role": "મુખ્ય જવાબદાર"}, {"name": "શૈલેષભાઈ સોનાણી", "mobile": "79841 96047", "role": "સહાયક"}, {"name": "વિરલભાઈ સુતરીયા", "mobile": "98796 12899", "role": "સહાયક"}];
let sevaSamitiData = null;

/* Sections config for Members: title, icon, color(tailwind text class), fields [[key,label,type]], special (optional) */
const ROLE_OPTIONS = ['યુવા સભ્ય','પોષક લીડર','સંચાલક','સહસંચાલક','ઝોન પ્રેસિડન્ટ','રીજીયન હેડ','બાળ યુવા મુખ્ય'];
const BLOOD_OPTIONS = ['A+','A-','B+','B-','AB+','AB-','O+','O-','ખબર નથી'];
const VEHICLE_OPTIONS = ['હા, બંને ચલાવું છું','હા, બાઇક ચલાવું છું','હા, કાર ચલાવું છું','હા, ઇલેક્ટ્રિક બાઇક ચાલવું છું (18 વર્ષથી નીચે)','ના, નથી ચલાવતો'];
const LICENSE_OPTIONS = ['ના, લાઇસન્સ નથી','હા, ટુ વ્હીલ/ફોર વ્હીલનું ડ્રાઇવિંગ લાઇસન્સ છે','માત્ર ટુ વ્હીલનું લાઈસન્સ છે','ટુ વ્હીલનું લર્નિંગ લાઇસન્સ છે','લાગુ પડતું નથી'];
const HELMET_SEATBELT_OPTIONS = ['હા, હંમેશા','લાગુ પડતું નથી','ક્યારેક ક્યારેક','ના, નથી પહેરતો'];
const SABHA_TRANSPORT_OPTIONS = ['બાઇક પર (પોતે ચલાવીને)','બાઇક પર (કોઈની સાથે)','સાયકલ લઈને આવું છું','માતા સાથે','પિતા સાથે','ભાઈ / બહેન સાથે','મિત્ર સાથે','ચાલીને','રિક્ષા / ઓટો','બસ','Other'];
const SANT_OPTIONS = ["પૂ.શ્રી ગુરુજી", "પૂ.શ્રી નારાયણ મુનિદાસજી સ્વામી (મુનિ બાપા)", "પૂ.શ્રી ધર્મ સ્વરૂપદાસજી સ્વામી (ભાવિલા સ્વામી)", "પૂ.શ્રી નિર્મળદાસજી સ્વામી", "પૂ.શ્રી શ્યામચરણદાસજી સ્વામી", "પૂ.શ્રી ઈશ્વરચરણદાસજી સ્વામી (દયાળુ સ્વામી)", "પૂ.શ્રી નંદકિશોરદાસજી સ્વામી", "પૂ.શ્રી ઘનશ્યામજીવનદાસજી સ્વામી (વાલા સ્વામી)", "પૂ.શ્રી અક્ષરજીવનદાસજી સ્વામી", "પૂ.શ્રી અચ્યુતદાસજી સ્વામી (સ્નેહાળુ સ્વામી)", "પૂ.શ્રી સરજુદાસજી સ્વામી", "પૂ.શ્રી માધવપ્રિયદાસજી સ્વામી (હેતાળુ સ્વામી)", "પૂ.શ્રી નિરંજનદાસજી સ્વામી", "પૂ.શ્રી વિવેકસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી કૃષ્ણપ્રિયદાસજી સ્વામી (કૃપાળુ સ્વામી)", "પૂ.શ્રી શ્રીરંગદાસજી સ્વામી", "પૂ.શ્રી પવિત્રજીવનદાસજી સ્વામી", "પૂ.શ્રી ત્યાગવલ્લભદાસજી સ્વામી", "પૂ.શ્રી સાધુજીવનદાસજી સ્વામી", "પૂ.શ્રી અખિલજીવનદાસજી સ્વામી", "પૂ.શ્રી ભજનપ્રકાશદાસજી સ્વામી", "પૂ.શ્રી સનાતનદાસજી સ્વામી", "પૂ.શ્રી સંતદાસજી સ્વામી", "પૂ.શ્રી ન્યાલકરણદાસજી સ્વામી", "પૂ.શ્રી વિદેહસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી મંગળસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી અચલસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી પુરાતનદાસજી સ્વામી", "પૂ.શ્રી રામદાસજી સ્વામી", "પૂ.શ્રી ઉત્તમચરણદાસજી સ્વામી", "પૂ.શ્રી શ્રીજીસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી સાકારસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી આનંદ સ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી સદ્રુચિદાસજી સ્વામી", "પૂ.શ્રી અનુવૃત્તિદાસજી સ્વામી", "પૂ.શ્રી વર્ણીવેશદાસજી સ્વામી", "પૂ.શ્રી અનાદિસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી કારણસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી આદર્શજીવનદાસજી સ્વામી", "પૂ.શ્રી સદગુણસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી પ્રસન્નવદનદાસજી સ્વામી (જોગી સ્વામી)", "પૂ.શ્રી ચિન્મયસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી પ્રત્યક્ષસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી પરસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી સંકીર્તનદાસજી સ્વામી", "પૂ.શ્રી અન્વયસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી હૃદયપ્રકાશદાસજી સ્વામી", "પૂ.શ્રી ઐશ્વર્યપ્રકાશદાસજી સ્વામી", "પૂ.શ્રી હરિગુણદાસજી સ્વામી", "પૂ.શ્રી આત્મીયસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી મૂર્તિસ્વરૂપદાસજી સ્વામી", "પૂ.શ્રી સહનપ્રિયદાસજી સ્વામી", "પા.શ્રી ચતુર ભગત", "પા.શ્રી ગિરીશ ભગત", "પા.શ્રી જયંતી ભગત", "પા.શ્રી ધરમ ભગત", "પા.શ્રી વિનય ભગત", "પા.શ્રી પ્રફુલ ભગત", "પા.શ્રી ઘનશ્યામ ભગત", "પા.શ્રી ધનજી ભગત", "પા.શ્રી રાધેશ ભગત", "મને કોઈ સંતો પર્સનલી ઓળખતા નથી."];
const YES_NO_OPTIONS = ['હા','ના'];
const MEMBER_TYPE_FORM_OPTIONS = [
  {value:'Aatmiya Member', label:'Aatmiya Member (આત્મીય સભ્ય)'},
  {value:'Group Member', label:'Group Member (ગ્રુપ સભ્ય)'},
  {value:'Yuva Member', label:'Yuva Member (યુવા સભ્ય)'},
  {value:'Unknown', label:'Unknown (ખબર નથી)'}
];
const SATSANG_YRS_OPTIONS = ['જન્મથી / પેઢીઓથી','૧ વર્ષ કરતા ઓછો','૧ – ૫ વર્ષ','૫ – ૧૦ વર્ષ','૧૦ – ૨૦ વર્ષ','૨૦ વર્ષ કરતા વધુ'];
const WANTS_SEVA_OPTIONS = ['No, I already have local Seva ongoing','Yes, I want to join Seva','No, I don\'t want to join Seva right now'];
const LOCAL_SEVA_WHAT_OPTIONS = [
  'IT','Sound','Projector','Sometimes Presiding','Management','Kirtan','Bhajan','Tabla','Mridang',
  'Harmonium','Instrument','Buttermilk Distribution','Dish Cleaning','Prasad Distribution',
  'Photography','Videography','Register','Attendance Seva','Cleaning Seva','Stage Decoration',
  'Not Joined in Any Seva','Seva Not Assigned'
];
const LOCAL_SEVA_DURATION_OPTIONS = ['Less than 1 Month','3 to 6 Months','6 Months to 1 Year','1 to 3 Years','More than 3 Years','Not Applicable'];
// Satsang in Home is a multi-select — atomic individual relations rather than combo
// options like "Father-Mother" (a multi-select already lets someone pick Father AND
// Mother together), matching the individual-relation values already used in the data.
const SATSANG_IN_HOME_OPTIONS = [
  'Full Family','Only Me at Home','Father','Mother','Paternal Grandfather','Paternal Grandmother',
  'Maternal Grandfather','Maternal Grandmother','Older Brother','Younger Brother',
  'Older Sister','Younger Sister','Uncle','Aunty'
];
const SABHA_OBSTACLE_OPTIONS = ['ના, ઘરેથી પૂરો સહકાર છે','હા કોઈ વાંધો ઉઠાવે છે','ક્યારેક મુશ્કેલી પડે છે'];
const KUNDAL_SEVA_OPTIONS = ['Yes, doing Seva from home','Yes, I go to Kundaldham','No, I don\'t have any Seva'];
const KUNDAL_SEVA_WHAT_OPTIONS = [
  'AI','3D','Internet','IT / Audio-Visual / Sound / Video Editing','Library Management',
  'History Department','General Seva','Cultural','Kirtan Mandal','Gaushala','Graphics Design',
  'Tabla / Mridang Group','Prasad / Kitchen Seva','Katha Research','Photography / Videography',
  'Food / Cooking Seva','Not Joined in Any Seva'
];
const AVAIL_DAYS_OPTIONS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Any Day'];
const AVAIL_TIME_OPTIONS = [
  '5:00 AM to 6:00 AM','6:00 AM to 7:00 AM','7:00 AM to 8:00 AM','8:00 AM to 9:00 AM',
  '9:00 AM to 10:00 AM','10:00 AM to 11:00 AM','11:00 AM to 12:00 PM','12:00 PM to 1:00 PM',
  '1:00 PM to 2:00 PM','2:00 PM to 3:00 PM','3:00 PM to 4:00 PM','4:00 PM to 5:00 PM',
  '5:00 PM to 6:00 PM','6:00 PM to 7:00 PM','7:00 PM to 8:00 PM','8:00 PM to 9:00 PM',
  '9:00 PM to 10:00 PM','10:00 PM to 11:00 PM','11:00 PM to 12:00 AM','Any Time','Not Applicable'
];
// Study Status now replaces the separate Class + Stream fields — those three fields
// were all saying the same thing, so this single dropdown covers all of them.
const STUDY_STATUS_OPTIONS = [
  'ધોરણ 8','ધોરણ 9','ધોરણ 10','ધોરણ 11 કોમર્સ','ધોરણ 11 સાયન્સ','ધોરણ 12 કોમર્સ','ધોરણ 12 સાયન્સ',
  'આર્ટ્સ','BCA','કોમ્પ્યુટર એન્જિનિયરિંગ','External Collage + Online','Online Course','IELTS',
  'કોલેજ / ગ્રેજ્યુએશન (BA / BCOM / BSC / BBA / BCA / BTECH / અન્ય) (ધોરણ 12 પછી)',
  'ડિપ્લોમા કરું છું (ધોરણ 10 પછી)','પોસ્ટ ગ્રેજ્યુએશન','પ્રોફેશનલ કોર્સ (CA / CS / MBBS / LLB / અન્ય)',
  'અભ્યાસ પૂર્ણ કરી લીધો છે'
];
// Sanchalak Name has exactly one valid value right now — Divyeshbhai Dungarani is the
// single Sanchalak — so this is a single-option dropdown rather than free text.
const SANCHALAK_NAME_OPTIONS = ['દિવ્યેશભાઈ ડુંગરાણી'];
const GUJARAT_CITY_OPTIONS = [
  'સુરત','અમદાવાદ','વડોદરા','રાજકોટ','ભાવનગર','જામનગર','જુનાગઢ','ગાંધીનગર','આણંદ','નડિયાદ',
  'મોરબી','સુરેન્દ્રનગર','ભરૂચ','મહેસાણા','ભુજ','પોરબંદર','પાટણ','દાહોદ','બોટાદ','અમરેલી',
  'નવસારી','વલસાડ','વાપી','પાલનપુર','ગોધરા','હિંમતનગર','ધોરાજી','વેરાવળ','ઉપલેટા','જેતપુર',
  'ગોંડલ','ધ્રાંગધ્રા','દ્વારકા','કલોલ','વિરમગામ','ડીસા','થરાદ','બારડોલી','ડભોઈ','આંકલાવ','Other'
];
const BOARD_OPTIONS = ['CBSE (Delhi Board)','GSEB (Gujarat Board)','GTU University','MKBU','University','Not Applicable'];
const MEDIUM_OPTIONS = ['English Medium','Gujarati Medium','Semi English','Not Applicable'];
const DEGREE_OPTIONS = ['BTech','BTech IT','BBA','BCA','BSC','CE','Diploma','Diploma Computer','MSC IT','Other','Not Applicable'];
const WORK_STATUS_OPTIONS = ['Private Job','Only Student','Freelance','Self-Employed / Business','Not Working Currently'];
const WORK_FIELD_OPTIONS = [
  'Architect','Chemical','Civil Engineering','Fabrication','IT','Online Teaching','Part Time Teacher',
  'Textile','Video Editing','Graphics','Video Editing and Social Media Management Agency',
  'Video Editor','Embroidery or Textile','E-Commerce','Other','Not Applicable'
];
const FATHER_JOB_OPTIONS = ['Diamond','Business','Farmer','Teaching','Retired','Job','Diamond Broker','Diamond Job','Other','Not Applicable'];
const OWN_JOB_DETAIL_OPTIONS = [
  'Advocate','Air Jet','Businessmen','Diamond','E-Commerce','Electrician','Embroidery','Farmer',
  'Fabrication','Freelancing','Garments Manufacturer','Import-Export Business','Zari Work',
  'Zari Work/E-Commerce','Jewellers','Jewellery','Junior Software Developer','Liquid','Online Printing',
  'R.O. Chemical','Live bakery','Shop','Textile','Torrent Power','Water Jet','Contracter',
  'Lokhand Cement','Nivrut','Other'
];
// Rules for disabling (not fully hiding) a dependent field based on another field's
// current value — the field stays visible but grayed out/read-only, e.g. once someone
// says their studies are complete, Result/School/City/Board/Medium no longer apply.
// Degree is the one exception: it's deliberately NOT in study_status's disableFields,
// because even someone who's finished studying still needs to pick their degree, and
// it stays a required field.
const CONDITIONAL_HIDE_RULES = [
  { controller: 'study_status', hideWhen: v => v === 'અભ્યાસ પૂર્ણ કરી લીધો છે',
    hideFields: ['result_pct','school_name','school_city','board','medium'] },
  { controller: 'work_status', hideWhen: v => v === 'Only Student' || v === 'Not Working Currently',
    hideFields: ['work_field'] },
  { controller: 'father_job', hideWhen: v => v === 'Not Applicable',
    hideFields: ['own_job_detail'] }
];
function isFieldConditionallyHidden(key, getVal){
  return CONDITIONAL_HIDE_RULES.some(rule => rule.hideFields.includes(key) && rule.hideWhen(getVal(rule.controller)));
}
// Poshak Leader is a dropdown built fresh from the CURRENT Poshak Leader records every
// time it's opened — so if a leader's own name is later edited, this list (and every
// other member's selection display) automatically reflects the update instead of a
// frozen copy going stale.
function getPoshakLeaderOptions(){
  const members = (typeof MODULES !== 'undefined' && MODULES.members && MODULES.members.data) ? MODULES.members.data : [];
  return members.filter(m => m.role === 'પોષક લીડર').map(m => m.poshak_leader).filter(Boolean);
}
const LANGUAGES_OPTIONS = ['ગુજરાતી','હિન્દી','અંગ્રેજી'];
const SKILLS_OPTIONS = [
  'Ai / Prompting / Image Video Generation','એકાઉન્ટિંગ / ફાઇનાન્સ / ટૅલી','બિઝનેસ / માર્કેટિંગ',
  'કળા / ચિત્ર / પેઇન્ટિંગ','ભાષા / લેખન','Sound','ગ્રાફિક ડિઝાઇન / વિડિઓ એડિટિંગ',
  'ફોટોગ્રાફી / વિડિઓગ્રાફી','સોશ્યલ મીડિયા / કન્ટેન્ટ ક્રિએશન','કાનૂની / લૉ','સંગીત / વાદ્યયંત્ર',
  '3D Simulation','શિક્ષણ / ટ્યૂટોરિંગ','આર્કિટેક્ટ','Dance','Yoga',
  'ઇલેક્ટ્રિકલ / કારપેન્ટ્રી / પ્લમ્બિંગ','એન્જિનિયરિંગ / ટેકનિકલ','કમ્પ્યૂટર / IT / કોડિંગ',
  'ખેતી / કૃષિ','Jewelry sell in foreign country','Master in drawings',
  'એન્કરિંગ એન્ડ પબ્લિક સ્પીકિંગ','મેડિકલ / હેલ્થકેર','Management','Gaushala'
];
// ===================== Masters (admin-editable dropdown option lists) =====================
// These 10 fields' options can be added to / removed from live, without a code change —
// everything else stays a fixed, hardcoded list. Each entry's `list` is the SAME array
// object used by the field's own dropdown definition — mutating it in place (push/splice)
// means every place that reads the option list picks up the change immediately, with no
// need to touch any field-definition code.
const MASTER_FIELD_REGISTRY = [
  { key:'role', label:'તમારો કયા પ્રકારનો રોલ છે?', tab:'વ્યક્તિગત માહિતી', list: ROLE_OPTIONS },
  { key:'sanchalak_name', label:'સંચાલકનું નામ', tab:'સત્સંગ', list: SANCHALAK_NAME_OPTIONS },
  { key:'study_status', label:'હાલ અભ્યાસ/ભણતરની સ્થિતિ', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: STUDY_STATUS_OPTIONS },
  { key:'school_city', label:'શાળા / કૉલેજ કયા શહેરમાં છે?', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: GUJARAT_CITY_OPTIONS },
  { key:'board', label:'કયું બોર્ડ પસંદ કરેલું છે?', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: BOARD_OPTIONS },
  { key:'medium', label:'અભ્યાસનું માધ્યમ', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: MEDIUM_OPTIONS },
  { key:'degree', label:'પ્રોફેશનલ ડિગ્રી', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: DEGREE_OPTIONS },
  { key:'skills', label:'તમને કયા ક્ષેત્રની આવડત છે?', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: SKILLS_OPTIONS },
  { key:'work_status', label:'હાલ તમારી નોકરી / ધંધો / વ્યવસાયની સ્થિતિ', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: WORK_STATUS_OPTIONS },
  { key:'work_field', label:'કયા ફિલ્ડ માં કરો છો?', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: WORK_FIELD_OPTIONS },
  { key:'father_job', label:'પિતાનો વ્યવસાય / ધંધો', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: FATHER_JOB_OPTIONS },
  { key:'own_job_detail', label:'પિતાના વ્યવસાય અથવા નોકરીની વિગત', tab:'અભ્યાસ/ભણતર વિશેની માહિતી', list: OWN_JOB_DETAIL_OPTIONS },
  { key:'local_seva_what', label:'કઈ સ્થાનિક સેવા (મૂર્તિબાગ ખાતે)?', tab:'સેવા', list: LOCAL_SEVA_WHAT_OPTIONS },
  { key:'local_seva_duration', label:'આ સેવા કેટલા સમયથી કરી રહ્યા છો?', tab:'સેવા', list: LOCAL_SEVA_DURATION_OPTIONS },
  { key:'kundal_seva_what', label:'કઈ સેવા (કુંડળધામ તરફથી)?', tab:'સેવા', list: KUNDAL_SEVA_WHAT_OPTIONS }
];
// ===================== Custom Fields (admin-created new fields / new tabs) =====================
const CUSTOM_FIELD_TYPE_LABELS = {
  text:'Text', alnum:'Text & Digits', digits:'Digits Only', mobile:'Mobile Number Only',
  email:'Email', date:'Date / Calendar', video:'Video (Link)', dropdown:'Dropdown (Single-Select)',
  multiselect:'Multi-Select Dropdown', radio:'Radio Button', textarea:'Long Text (Paragraph)'
};
let CUSTOM_FIELD_DEFS = [];
(function loadCustomFieldDefsCache(){
  try {
    const saved = localStorage.getItem('customFieldDefs');
    if(saved){ const arr = JSON.parse(saved); if(Array.isArray(arr)) CUSTOM_FIELD_DEFS = arr; }
  } catch(e){ /* ignore corrupt cache */ }
})();
function customFieldRenderTuple(def){
  if(def.field_type === 'dropdown') return [def.id, def.label, 'select', def.options || []];
  if(def.field_type === 'multiselect') return [def.id, def.label, 'multiselect-dropdown', def.options || []];
  if(def.field_type === 'radio') return [def.id, def.label, 'cf-radio', def.options || []];
  if(def.field_type === 'mobile') return [def.id, def.label, 'cf-validated-text', 'mobile'];
  if(def.field_type === 'digits') return [def.id, def.label, 'cf-validated-text', 'digits'];
  if(def.field_type === 'email') return [def.id, def.label, 'cf-validated-text', 'email'];
  if(def.field_type === 'video') return [def.id, def.label, 'cf-validated-text', 'video'];
  if(def.field_type === 'date') return [def.id, def.label, 'date'];
  if(def.field_type === 'textarea') return [def.id, def.label, 'textarea'];
  return [def.id, def.label]; // text / alnum both render as a plain text input
}
// Injects every custom field definition into the actual form structure. Fields added to
// an EXISTING tab go straight into that tab's own last section — no separate header,
// blending in exactly like a built-in field. A brand-new tab still needs one section to
// hold its fields, with its own header suppressed too. Mutates MEMBER_SECTIONS /
// MEMBER_TAB_GROUPS in place (not replaced), so cfg().sections / cfg().tabGroups — which
// hold the SAME array references — automatically reflect the change everywhere.
function applyCustomFieldDefs(){
  CUSTOM_FIELD_DEFS.forEach(def => {
    let tabGroup, section;
    if(def.is_new_tab){
      tabGroup = MEMBER_TAB_GROUPS.find(t => t.key === 'custom_' + def.target_tab);
      if(!tabGroup){
        tabGroup = { key: 'custom_' + def.target_tab, label: def.target_tab, icon: 'fa-layer-group', sections: [] };
        MEMBER_TAB_GROUPS.push(tabGroup);
      }
      const sectionTitle = tabGroup.key + '__fields';
      section = MEMBER_SECTIONS.find(s => s.title === sectionTitle);
      if(!section){
        section = { title: sectionTitle, displayTitle: '', icon: 'fa-layer-group', color: 'text-indigo-500', fields: [] };
        MEMBER_SECTIONS.push(section);
      }
      if(!tabGroup.sections.includes(sectionTitle)) tabGroup.sections.push(sectionTitle);
    } else {
      tabGroup = MEMBER_TAB_GROUPS.find(t => t.key === def.target_tab);
      if(!tabGroup) return; // target tab no longer exists — skip silently
      const lastSectionTitle = tabGroup.sections[tabGroup.sections.length - 1];
      section = MEMBER_SECTIONS.find(s => s.title === lastSectionTitle);
      if(!section) return;
    }
    const tuple = customFieldRenderTuple(def);
    const existingIdx = section.fields.findIndex(f => f[0] === def.id);
    if(existingIdx === -1) section.fields.push(tuple);
    else section.fields[existingIdx] = tuple;
  });
}
function fetchCustomFieldDefsFromBackend(){
  if(typeof useBackend !== 'undefined' && !useBackend) return;
  cachedFetch(`${API_BASE}/custom_fields.php?_ts=${Date.now()}`, { cache: 'no-store' })
    .then(res => res.json())
    .then(data => {
      if(!Array.isArray(data)) return;
      CUSTOM_FIELD_DEFS = data;
      localStorage.setItem('customFieldDefs', JSON.stringify(data));
      applyCustomFieldDefs();
      renderRecTabsNav();
      if(currentModule === 'members' && document.getElementById('mastersView') && !document.getElementById('mastersView').classList.contains('hidden')){
        renderMastersView();
      }
    })
    .catch(e => console.warn('Custom fields: backend unreachable, using local cache only:', e));
}
function removeFieldTuplesFromSections(id){
  MEMBER_SECTIONS.forEach(sec => {
    const idx = sec.fields.findIndex(f => f[0] === id);
    if(idx !== -1) sec.fields.splice(idx, 1);
  });
  MEMBER_SECTIONS.splice(0, MEMBER_SECTIONS.length, ...MEMBER_SECTIONS.filter(s => !(s.title.endsWith('__fields') && s.fields.length === 0)));
  MEMBER_TAB_GROUPS.forEach(t => { t.sections = t.sections.filter(st => MEMBER_SECTIONS.some(s => s.title === st)); });
  MEMBER_TAB_GROUPS.splice(0, MEMBER_TAB_GROUPS.length, ...MEMBER_TAB_GROUPS.filter(t => !t.key.startsWith('custom_') || t.sections.length));
}
function populateCfTargetDropdown(){
  const sel = document.getElementById('cfNewTarget');
  if(!sel) return;
  const existingTabOpts = MEMBER_TAB_GROUPS.filter(t => !t.key.startsWith('custom_')).map(t => `<option value="${esc(t.key)}">${esc(t.label)}</option>`).join('');
  sel.innerHTML = existingTabOpts + `<option value="__new_tab__">+ Create a New Tab…</option>`;
}
const CF_TYPES_NEEDING_OPTIONS = ['dropdown','multiselect','radio'];
function onCfTypeChange(){
  const type = document.getElementById('cfNewType').value;
  const needsOptions = CF_TYPES_NEEDING_OPTIONS.includes(type);
  document.getElementById('cfNewOptionsWrap').classList.toggle('hidden', !needsOptions);
  document.getElementById('cfNewOptionsLabel').textContent = (CUSTOM_FIELD_TYPE_LABELS[type] || 'Dropdown') + ' Options';
  cfPendingOptions = [];
  renderCfPendingOptionsChips();
}
function onCfTargetChange(){
  const isNewTab = document.getElementById('cfNewTarget').value === '__new_tab__';
  document.getElementById('cfNewTabNameWrap').classList.toggle('hidden', !isNewTab);
}
let cfPendingOptions = [];
function addPendingCfOption(){
  const input = document.getElementById('cfNewOptionInput');
  const val = input.value.trim();
  if(!val) return;
  if(cfPendingOptions.includes(val)){ input.value = ''; return; }
  cfPendingOptions.push(val);
  input.value = '';
  renderCfPendingOptionsChips();
}
function removePendingCfOption(val){
  cfPendingOptions = cfPendingOptions.filter(o => o !== val);
  renderCfPendingOptionsChips();
}
function renderCfPendingOptionsChips(){
  const wrap = document.getElementById('cfPendingOptionsChips');
  if(!wrap) return;
  wrap.innerHTML = cfPendingOptions.map(v => `
    <span style="display:inline-flex;align-items:center;gap:6px;background:#f6e7ea;color:#5a0616;border-radius:8px;padding:4px 8px 4px 10px;font-size:12px;font-weight:500">
      ${esc(v)}
      <button type="button" onclick="removePendingCfOption(${esc(JSON.stringify(v))})"
        style="border:none;background:rgba(90,6,22,.08);color:#8c2138;cursor:pointer;font-size:10px;line-height:1;width:15px;height:15px;border-radius:50%;display:flex;align-items:center;justify-content:center">×</button>
    </span>
  `).join('') || '<span class="text-xs text-crm-textMuted italic">No options added yet</span>';
}
function saveCustomFieldDefs(){
  localStorage.setItem('customFieldDefs', JSON.stringify(CUSTOM_FIELD_DEFS));
}
function createCustomField(){
  const btn = document.getElementById('cfCreateBtn');
  if(btn && btn.disabled) return;
  const label = document.getElementById('cfNewLabel').value.trim();
  const fieldType = document.getElementById('cfNewType').value;
  const targetSel = document.getElementById('cfNewTarget').value;
  const isNewTab = targetSel === '__new_tab__';
  const tabName = document.getElementById('cfNewTabName').value.trim();
  if(!label){ showToast('Please enter a field title.'); return; }
  if(isNewTab && !tabName){ showToast('Please enter a name for the new tab.'); return; }
  if(CF_TYPES_NEEDING_OPTIONS.includes(fieldType) && !cfPendingOptions.length){ showToast('Please add at least one option.'); return; }
  if(CUSTOM_FIELD_DEFS.some(d => d.label.toLowerCase() === label.toLowerCase())){
    showToast(`A field named "${label}" already exists.`);
    return;
  }
  if(btn) btn.disabled = true;
  const payload = {
    label, field_type: fieldType, options: CF_TYPES_NEEDING_OPTIONS.includes(fieldType) ? [...cfPendingOptions] : [],
    target_tab: isNewTab ? tabName : targetSel, is_new_tab: isNewTab
  };
  const finishCreate = (id) => {
    CUSTOM_FIELD_DEFS.push({ id, ...payload });
    saveCustomFieldDefs();
    applyCustomFieldDefs();
    renderRecTabsNav();
    document.getElementById('cfNewLabel').value = '';
    document.getElementById('cfNewType').value = 'text';
    onCfTypeChange();
    document.getElementById('cfNewTabName').value = '';
    populateCfTargetDropdown();
    renderMastersView();
    if(btn) btn.disabled = false;
    clearFormDirty();
    showToast(`✔ "${label}" field created.`);
  };
  if(typeof useBackend !== 'undefined' && useBackend){
    fetch(`${API_BASE}/custom_fields.php`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    }).then(res => res.json()).then(res => finishCreate(res.id || ('cf_' + Date.now())))
      .catch(e => { console.warn('Custom field: backend save failed, applying locally only:', e); finishCreate('cf_' + Date.now()); if(btn) btn.disabled = false; });
  } else {
    finishCreate('cf_' + Date.now());
  }
}
// Field-title renames are purely cosmetic (what's shown on screen) — never touches the
// underlying key the rest of the app relies on, so it's safe. Stored in localStorage
// since these are just 10 fixed fields' display labels, not data that needs perfect
// cross-device sync the way option lists (which affect saved member data) do.
function loadMasterLabelOverrides(){
  MASTER_FIELD_REGISTRY.forEach(entry => {
    const saved = localStorage.getItem('master_label_' + entry.key);
    if(saved) entry.label = saved;
  });
}
loadMasterLabelOverrides();
function loadMasterOverrides(){
  // Instant-display cache from localStorage — shows immediately while the real
  // source of truth (the database, via fetchMastersFromBackend below) loads.
  MASTER_FIELD_REGISTRY.forEach(({key, list}) => {
    try {
      const saved = localStorage.getItem('master_' + key);
      if(saved){
        const arr = JSON.parse(saved);
        if(Array.isArray(arr) && arr.length){
          list.splice(0, list.length, ...arr); // mutate in place — keeps every reference in sync
        }
      }
    } catch(e){ /* ignore corrupt saved value, keep hardcoded defaults */ }
  });
}
loadMasterOverrides();
function fetchMastersFromBackend(){
  if(typeof useBackend !== 'undefined' && !useBackend) return;
  cachedFetch(`${API_BASE}/masters.php?_ts=${Date.now()}`, { cache: 'no-store' })
    .then(res => res.json())
    .then(data => {
      if(!data || typeof data !== 'object') return;
      MASTER_FIELD_REGISTRY.forEach(entry => {
        const server = data[entry.key];
        if(!server) return;
        const serverList = Array.isArray(server) ? server : server.options; // supports both old (array) and new ({options,label}) response shapes
        if(Array.isArray(serverList) && serverList.length){
          entry.list.splice(0, entry.list.length, ...serverList); // database is the source of truth
          localStorage.setItem('master_' + entry.key, JSON.stringify(entry.list)); // refresh the local cache too
        }
        const serverLabel = !Array.isArray(server) ? server.label : null;
        if(serverLabel){
          entry.label = serverLabel;
          localStorage.setItem('master_label_' + entry.key, serverLabel);
          MEMBER_SECTIONS.forEach(sec => {
            const tuple = sec.fields.find(f => f[0] === entry.key);
            if(tuple) tuple[1] = serverLabel;
          });
        }
      });
      if(currentModule === 'members' && document.getElementById('mastersView') && !document.getElementById('mastersView').classList.contains('hidden')){
        renderMastersView(); // re-render if the Masters screen happens to be open right now
      }
    })
    .catch(e => console.warn('Masters: backend unreachable, using local cache only:', e));
}
function getAllEditableOptionFields(){
  const customEntries = CUSTOM_FIELD_DEFS.map(d => ({
    key: d.id, label: d.label, list: CF_TYPES_NEEDING_OPTIONS.includes(d.field_type) ? d.options : [], isCustom: true, fieldType: d.field_type,
    tab: d.is_new_tab ? d.target_tab : ((MEMBER_TAB_GROUPS.find(t=>t.key===d.target_tab)||{}).label || d.target_tab)
  }));
  return [...MASTER_FIELD_REGISTRY, ...customEntries];
}
function saveMasterOverride(key){
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry) return;
  clearFormDirty();
  if(entry.isCustom){
    saveCustomFieldDefs(); // entry.list IS the same array as the CUSTOM_FIELD_DEFS entry's .options — already up to date
    if(typeof useBackend !== 'undefined' && useBackend){
      fetch(`${API_BASE}/custom_fields.php?id=${encodeURIComponent(key)}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ options: entry.list })
      }).catch(e => console.warn('Custom field: options saved locally but backend sync failed:', e));
    }
    return;
  }
  localStorage.setItem('master_' + key, JSON.stringify(entry.list));
  if(typeof useBackend !== 'undefined' && !useBackend) return;
  fetch(`${API_BASE}/masters.php?key=${encodeURIComponent(key)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ options: entry.list })
  }).catch(e => console.warn('Masters: change saved locally but backend sync failed:', e));
}
function addMasterOption(key, inputEl){
  const value = (inputEl.value || '').trim();
  if(!value) return;
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry) return;
  if(entry.list.includes(value)){
    inputEl.value = '';
    showToast(`"${value}" is already in the list.`);
    return;
  }
  entry.list.push(value);
  saveMasterOverride(key);
  inputEl.value = '';
  renderMastersView();
  showToast(`✔ "${value}" added to ${entry.label}.`);
}
function removeMasterOption(key, value){
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry) return;
  const idx = entry.list.indexOf(value);
  if(idx === -1) return;
  openConfirmModal(
    `Remove "${value}"?`,
    `This will remove it from the ${entry.label} dropdown options.`,
    () => {
      const i = entry.list.indexOf(value);
      if(i === -1) return;
      entry.list.splice(i, 1);
      saveMasterOverride(key);
      renderMastersView();
      showToast(`✔ "${value}" removed from ${entry.label}.`);
    }
  );
}
// ============================================================
// MEMBER REPORTS — a generic, filterable report builder driven
// entirely by MEMBER_SECTIONS metadata, so every field (across
// every tab) is automatically filterable/selectable as a column
// with no per-field code needed.
// ============================================================
let mrFieldIndexCache = null;
function getMrFieldIndex(){
  // Flatten MEMBER_SECTIONS into a lookup: key -> {label, type, options, section}
  if(mrFieldIndexCache) return mrFieldIndexCache;
  const idx = {};
  MEMBER_SECTIONS.forEach(sec => {
    sec.fields.forEach(f => {
      const [key, label, type, options] = f;
      idx[key] = { key, label, type: type||'text', options, section: sec.title };
    });
  });
  mrFieldIndexCache = idx;
  return idx;
}
function getMrFilterableFields(){
  // Only fields with a fixed (or dynamically resolvable) set of options make sense as
  // multi-select filter chips — free-text fields (names, addresses, mobiles) aren't
  // filterable this way and are left out of the filter panel, though they can still be
  // added as report COLUMNS.
  // 'role' is excluded because the All/Yuva Member/Poshak Leader scope tabs already
  // cover it more directly. 'sanchalak_name' is excluded because it's the same single
  // value for every member in this Sabha, so filtering by it is never useful.
  const EXCLUDED_FILTER_KEYS = new Set(['role','sanchalak_name']);
  const idx = getMrFieldIndex();
  return Object.values(idx).filter(f => !EXCLUDED_FILTER_KEYS.has(f.key) && ['select','multiselect','multiselect-dropdown','radio'].includes(f.type) && f.options);
}
function mrResolveOptions(f){
  if(typeof f.options === 'function'){ try{ return f.options() || []; }catch(e){ return []; } }
  return Array.isArray(f.options) ? f.options : [];
}
let mrFilters = {};      // { fieldKey: Set(selectedValues) }
let mrColumns = null;    // ordered array of field keys shown as table columns
let mrRoleScope = 'all'; // 'all' | 'yuva' | 'poshak'
let mrCurrentPage = 1;
const MR_PER_PAGE = 50;
const MR_DEFAULT_COLUMNS = ['full_name','mobile','role','poshak_leader'];

function initMemberReportBuilder(){
  if(!mrColumns){
    try{ mrColumns = JSON.parse(localStorage.getItem('yuvaSabhaMrColumns') || 'null'); }catch(e){}
    if(!Array.isArray(mrColumns) || !mrColumns.length) mrColumns = MR_DEFAULT_COLUMNS.slice();
  }
  renderMrFiltersPanel();
  renderMrColumnPicker();
  updateMrScopeTabsUI();
  mrCurrentPage = 1;
  renderMrTable();
}
function updateMrScopeTabsUI(){
  document.querySelectorAll('.mr-scope-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.scope===mrRoleScope));
}
function setMrRoleScope(scope){
  mrRoleScope = scope;
  mrCurrentPage = 1;
  updateMrScopeTabsUI();
  renderMrTable();
}
function computeAge(dob){
  if(!dob) return null;
  const d = new Date(dob);
  if(isNaN(d)) return null;
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const monthDiff = now.getMonth() - d.getMonth();
  if(monthDiff < 0 || (monthDiff===0 && now.getDate() < d.getDate())) age--;
  return age;
}
function getMrAvailableAges(){
  const ages = new Set();
  (MODULES.members.data||[]).forEach(m => { const a = computeAge(m.dob); if(a!==null && a>0 && a<100) ages.add(a); });
  return [...ages].sort((a,b)=>a-b);
}
const MR_MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function getMrAvailableMonths(){
  const months = new Set();
  (MODULES.members.data||[]).forEach(m => { const d = new Date(m.dob); if(!isNaN(d)) months.add(d.getMonth()); });
  return [...months].sort((a,b)=>a-b);
}
function getMrAvailableYears(){
  const years = new Set();
  (MODULES.members.data||[]).forEach(m => { const d = new Date(m.dob); if(!isNaN(d)) years.add(d.getFullYear()); });
  return [...years].sort((a,b)=>a-b);
}
function mrPseudoFieldsFor(sectionTitle){
  // Age and Birthday Month/Year aren't real MEMBER_SECTIONS fields (they're derived
  // from dob) but belong naturally alongside Date of Birth in Basic Information rather
  // than as their own separate top-level section.
  if(sectionTitle !== 'Basic Information') return '';
  return `
    <div class="mb-2">
      <div class="text-[11px] font-medium text-crm-textMuted mb-1">Age (years)</div>
      <div>${getMrAvailableAges().map(age => `
        <span class="mr-chip ${mrFilters['__age'] && mrFilters['__age'].has(age) ? 'active' : ''}" onclick="toggleMrFilterValue('__age', ${age})">${age}</span>
      `).join('')}</div>
    </div>
    <div class="mb-2">
      <div class="text-[11px] font-medium text-crm-textMuted mb-1">Birthday Month</div>
      <div>${getMrAvailableMonths().map(mi => `
        <span class="mr-chip ${mrFilters['__dob_month'] && mrFilters['__dob_month'].has(mi) ? 'active' : ''}" onclick="toggleMrFilterValue('__dob_month', ${mi})">${MR_MONTH_NAMES[mi]}</span>
      `).join('')}</div>
    </div>
    <div class="mb-2">
      <div class="text-[11px] font-medium text-crm-textMuted mb-1">Birthday Year</div>
      <div>${getMrAvailableYears().map(y => `
        <span class="mr-chip ${mrFilters['__dob_year'] && mrFilters['__dob_year'].has(y) ? 'active' : ''}" onclick="toggleMrFilterValue('__dob_year', ${y})">${y}</span>
      `).join('')}</div>
    </div>
    <div class="mb-2">
      <div class="text-[11px] font-medium text-crm-textMuted mb-1">Signup Date</div>
      <div class="flex items-center gap-2">
        <input type="date" id="mrSignupDateFilter" value="${esc(mrSignupDateFilter||'')}" onchange="setMrSignupDateFilter(this.value)" class="text-xs border border-crm-border rounded-lg px-2 py-1.5">
        ${mrSignupDateFilter ? `<button type="button" onclick="setMrSignupDateFilter('')" class="text-xs text-crm-textMuted hover:text-crm-primary"><i class="fas fa-xmark"></i></button>` : ''}
      </div>
    </div>`;
}
let mrSignupDateFilter = ''; // 'YYYY-MM-DD' or '' — who signed up on exactly this day
function setMrSignupDateFilter(dateStr){
  mrSignupDateFilter = dateStr || '';
  if(mrSignupDateFilter && !mrColumns.includes('signup_date')){
    mrColumns.push('signup_date');
    mrAutoAddedColumns.add('signup_date');
    try{ localStorage.setItem('yuvaSabhaMrColumns', JSON.stringify(mrColumns)); }catch(e){}
  } else if(!mrSignupDateFilter && mrAutoAddedColumns.has('signup_date')){
    const ci = mrColumns.indexOf('signup_date');
    if(ci>-1) mrColumns.splice(ci,1);
    mrAutoAddedColumns.delete('signup_date');
    try{ localStorage.setItem('yuvaSabhaMrColumns', JSON.stringify(mrColumns)); }catch(e){}
  }
  mrCurrentPage = 1;
  renderMrFiltersPanel();
  renderMrColumnPicker();
  renderMrTable();
}
let mrExpandedSections = new Set(); // section titles currently expanded — persists across re-renders
function renderMrFiltersPanel(){
  const panel = document.getElementById('mrFiltersPanel');
  const fields = getMrFilterableFields();
  // Group by section, preserving MEMBER_SECTIONS order
  const bySection = {};
  fields.forEach(f => { (bySection[f.section] = bySection[f.section]||[]).push(f); });
  if(!bySection['Basic Information']) bySection['Basic Information'] = []; // ensure it exists so Age/Birthday still show even if no other Basic Information field happens to be filterable
  panel.innerHTML = Object.keys(bySection).map((secTitle, si) => {
    const secFields = bySection[secTitle];
    const isOpen = mrExpandedSections.has(secTitle);
    return `
    <div>
      <div class="mr-filter-section-head" onclick="toggleMrFilterSection(${esc(JSON.stringify(secTitle))})">
        <span>${esc(secTitle)}</span>
        <i class="fas ${isOpen?'fa-chevron-up':'fa-chevron-down'} text-[10px] text-crm-textMuted"></i>
      </div>
      <div class="mr-filter-section-body ${isOpen?'':'hidden'}">
        ${mrPseudoFieldsFor(secTitle)}
        ${secFields.map(f => `
          <div class="mb-2">
            <div class="text-[11px] font-medium text-crm-textMuted mb-1">${esc(f.label)}</div>
            <div>${mrResolveOptions(f).map(opt => `
              <span class="mr-chip ${mrFilters[f.key] && mrFilters[f.key].has(opt) ? 'active' : ''}" onclick="toggleMrFilterValue('${f.key}', ${esc(JSON.stringify(opt))})">${esc(opt)}</span>
            `).join('')}</div>
          </div>
        `).join('')}
      </div>
    </div>`;
  }).join('');
}
function toggleMrFilterSection(secTitle){
  if(mrExpandedSections.has(secTitle)) mrExpandedSections.delete(secTitle); else mrExpandedSections.add(secTitle);
  renderMrFiltersPanel();
}
let mrAutoAddedColumns = new Set(); // columns that were auto-checked BECAUSE a filter was applied — removed again once that filter clears
function mrColKeyForFilter(key){
  // Age/Birthday Month/Birthday Year all derive from dob — show the actual birth
  // date, which is more informative than repeating just the age/month/year alone.
  return ['__age','__dob_month','__dob_year'].includes(key) ? 'dob' : key;
}
function toggleMrFilterValue(key, value){
  if(!mrFilters[key]) mrFilters[key] = new Set();
  const turningOn = !mrFilters[key].has(value);
  if(mrFilters[key].has(value)) mrFilters[key].delete(value); else mrFilters[key].add(value);
  const noValuesLeft = mrFilters[key].size===0;
  if(noValuesLeft) delete mrFilters[key];
  const colKey = mrColKeyForFilter(key);
  if(turningOn){
    if(!mrColumns.includes(colKey)){
      mrColumns.push(colKey);
      mrAutoAddedColumns.add(colKey);
      try{ localStorage.setItem('yuvaSabhaMrColumns', JSON.stringify(mrColumns)); }catch(e){}
    }
  } else if(noValuesLeft && mrAutoAddedColumns.has(colKey)){
    // The filter that auto-added this column has now been fully turned off — remove
    // the column too, but only because WE added it automatically; a column the person
    // picked manually is left alone even if a same-named filter happens to clear.
    const ci = mrColumns.indexOf(colKey);
    if(ci>-1) mrColumns.splice(ci,1);
    mrAutoAddedColumns.delete(colKey);
    try{ localStorage.setItem('yuvaSabhaMrColumns', JSON.stringify(mrColumns)); }catch(e){}
  }
  mrCurrentPage = 1;
  renderMrFiltersPanel();
  renderMrColumnPicker(); // reflect the auto-checked/auto-removed column
  renderMrTable();
}
function clearMrFilters(){
  // Any column that was auto-added because of one of these filters should disappear
  // along with the filter itself — a manually-picked column stays untouched.
  Object.keys(mrFilters).forEach(key => {
    const colKey = mrColKeyForFilter(key);
    if(mrAutoAddedColumns.has(colKey)){
      const ci = mrColumns.indexOf(colKey);
      if(ci>-1) mrColumns.splice(ci,1);
      mrAutoAddedColumns.delete(colKey);
    }
  });
  if(mrSignupDateFilter && mrAutoAddedColumns.has('signup_date')){
    const ci = mrColumns.indexOf('signup_date');
    if(ci>-1) mrColumns.splice(ci,1);
    mrAutoAddedColumns.delete('signup_date');
  }
  mrSignupDateFilter = '';
  try{ localStorage.setItem('yuvaSabhaMrColumns', JSON.stringify(mrColumns)); }catch(e){}
  mrFilters = {};
  mrCurrentPage = 1;
  renderMrFiltersPanel();
  renderMrColumnPicker();
  updateMrScopeTabsUI(); // keep the active tab visually consistent with mrRoleScope
  renderMrTable();
}
function toggleMrColumnPicker(){
  document.getElementById('mrColumnPicker').classList.toggle('hidden');
  document.getElementById('mrColPickerChevron').classList.toggle('fa-chevron-down');
  document.getElementById('mrColPickerChevron').classList.toggle('fa-chevron-up');
}
function mrFieldLabel(key){
  if(key === '__age') return 'Age';
  if(key === '__dob_month') return 'Birthday Month';
  if(key === '__dob_year') return 'Birthday Year';
  if(key === 'full_name') return 'Full Name (Gujarati)'; // shorter heading for reports — the long form label (with the Gujarati repeated after a slash) is meant for the actual Member form
  if(key === 'signup_date') return 'Signup Date'; // report-only pseudo-field — not on the actual Member form (system-recorded, not admin-entered)
  const idx = getMrFieldIndex();
  return (idx[key]||{label:key}).label;
}
function renderMrColumnPicker(){
  const wrap = document.getElementById('mrColumnPicker');
  const idx = getMrFieldIndex();
  // Name/Mobile/Role/Poshak Leader are the sensible "always useful" starter fields —
  // include them at the top even though they live in different MEMBER_SECTIONS tabs.
  const allKeys = ['__age', '__dob_month', '__dob_year', 'signup_date', ...Object.keys(idx)];
  wrap.innerHTML = allKeys.map(key => `
    <label class="mr-col-row">
      <input type="checkbox" ${mrColumns.includes(key) ? 'checked' : ''} onchange="toggleMrColumn('${key}')">
      <span>${esc(mrFieldLabel(key))}</span>
      <span class="text-[10px] text-crm-textMuted ml-auto">${(key.startsWith('__') || key==='signup_date') ? 'Basic Information' : esc(idx[key].section)}</span>
    </label>
  `).join('');
}
function toggleMrColumn(key){
  const i = mrColumns.indexOf(key);
  if(i>-1){ mrColumns.splice(i,1); mrAutoAddedColumns.delete(key); } else { mrColumns.push(key); }
  try{ localStorage.setItem('yuvaSabhaMrColumns', JSON.stringify(mrColumns)); }catch(e){}
  renderMrTable();
}
function mrFieldMatchesFilter(member, key, selectedSet){
  if(key === '__age'){
    const age = computeAge(member.dob);
    return age!==null && selectedSet.has(age);
  }
  if(key === '__dob_month' || key === '__dob_year'){
    const d = new Date(member.dob);
    if(isNaN(d)) return false;
    return selectedSet.has(key==='__dob_month' ? d.getMonth() : d.getFullYear());
  }
  const f = getMrFieldIndex()[key];
  const raw = member[key];
  if(['multiselect','multiselect-dropdown'].includes(f.type)){
    const vals = (raw||'').split(',').map(s=>s.trim()).filter(Boolean);
    return vals.some(v => selectedSet.has(v));
  }
  return selectedSet.has(raw);
}
function getMrFilteredMembers(){
  let list = MODULES.members.data || [];
  if(mrRoleScope==='yuva') list = list.filter(m => m.role === 'યુવા સભ્ય');
  else if(mrRoleScope==='poshak') list = list.filter(m => m.role === 'પોષક લીડર');
  Object.keys(mrFilters).forEach(key => {
    const selectedSet = mrFilters[key];
    if(selectedSet.size===0) return;
    list = list.filter(m => mrFieldMatchesFilter(m, key, selectedSet));
  });
  if(mrSignupDateFilter){
    list = list.filter(m => {
      if(!m.signup_date) return false;
      const d = new Date(m.signup_date);
      if(isNaN(d)) return false;
      // Compare just the date portion (YYYY-MM-DD), ignoring whatever time it was recorded at.
      const ymd = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
      return ymd === mrSignupDateFilter;
    });
  }
  return list;
}
function mrDisplayValue(member, key){
  if(key === '__age'){ const a = computeAge(member.dob); return a===null ? '—' : String(a); }
  if(key === '__dob_month' || key === '__dob_year'){
    const d = new Date(member.dob);
    if(isNaN(d)) return '—';
    return key==='__dob_month' ? MR_MONTH_NAMES[d.getMonth()] : String(d.getFullYear());
  }
  if(key === 'signup_date'){
    if(!member.signup_date) return '—';
    try{ return formatDateOnly(member.signup_date); }catch(e){ return member.signup_date; }
  }
  const f = getMrFieldIndex()[key];
  const raw = member[key];
  if(raw===undefined || raw===null || raw==='') return '—';
  if(f && f.type==='date'){ try{ return formatDateOnly(raw); }catch(e){ return raw; } }
  return String(raw);
}
function renderMrTable(){
  const filtered = getMrFilteredMembers();
  document.getElementById('mrResultCount').textContent = `${filtered.length} member${filtered.length===1?'':'s'} found`;

  const thead = document.getElementById('mrTableHead');
  thead.innerHTML = `<tr><th style="width:44px">#</th>${mrColumns.map(k => `<th>${esc(mrFieldLabel(k))}</th>`).join('')}</tr>`;

  const start = (mrCurrentPage-1)*MR_PER_PAGE;
  const pageItems = filtered.slice(start, start+MR_PER_PAGE);
  const tbody = document.getElementById('mrTableBody');
  tbody.innerHTML = pageItems.length ? pageItems.map((m,i) => `
    <tr class="fade-in">
      <td class="text-crm-textMuted text-xs">${start+i+1}</td>
      ${mrColumns.map(k => `<td class="text-sm">${esc(mrDisplayValue(m,k))}</td>`).join('')}
    </tr>
  `).join('') : `<tr><td colspan="${mrColumns.length+1}" class="text-center py-10 text-crm-textMuted">No members match these filters.</td></tr>`;

  const totalPages = Math.max(1, Math.ceil(filtered.length / MR_PER_PAGE));
  if(mrCurrentPage > totalPages) mrCurrentPage = totalPages;
  const pagWrap = document.getElementById('mrPaginationWrap');
  let pageNumbersHtml = '';
  for(let p=1; p<=totalPages; p++){
    const isActive = p===mrCurrentPage;
    pageNumbersHtml += `<button onclick="changeMrPage(${p})" class="min-w-[38px] h-[38px] px-2 rounded-full text-sm font-semibold transition-all ${
      isActive
        ? 'bg-crm-primary text-white shadow-crm'
        : 'bg-white text-crm-textDark border border-crm-border hover:bg-red-50'
    }">${p}</button>`;
  }
  pagWrap.innerHTML = `
    <div class="flex items-center gap-2 flex-wrap justify-center">
      <button onclick="changeMrPage(${mrCurrentPage-1})" ${mrCurrentPage<=1?'disabled':''} class="h-[38px] px-4 rounded-full text-sm font-semibold bg-white border border-crm-border text-crm-textDark hover:bg-red-50 disabled:opacity-40 disabled:hover:bg-white flex items-center gap-1.5">
        <i class="fas fa-chevron-left text-[10px]"></i> Prev
      </button>
      ${pageNumbersHtml}
      <button onclick="changeMrPage(${mrCurrentPage+1})" ${mrCurrentPage>=totalPages?'disabled':''} class="h-[38px] px-4 rounded-full text-sm font-semibold bg-white border border-crm-border text-crm-textDark hover:bg-red-50 disabled:opacity-40 disabled:hover:bg-white flex items-center gap-1.5">
        Next <i class="fas fa-chevron-right text-[10px]"></i>
      </button>
    </div>
    <div class="text-crm-textMuted">Page ${mrCurrentPage} of ${totalPages} · ${filtered.length} member${filtered.length===1?'':'s'} total</div>`;
}
function changeMrPage(p){
  const totalPages = Math.max(1, Math.ceil(getMrFilteredMembers().length / MR_PER_PAGE));
  if(p<1 || p>totalPages) return;
  mrCurrentPage = p;
  renderMrTable();
}
function toggleMrExportMenu(){ document.getElementById('mrExportMenu').classList.toggle('hidden'); }
function mrExportRows(){
  const filtered = getMrFilteredMembers();
  const header = mrColumns.map(k => mrFieldLabel(k));
  const rows = filtered.map(m => mrColumns.map(k => mrDisplayValue(m,k)));
  return { header, rows };
}
function exportMrCSV(){
  toggleMrExportMenu();
  const { header, rows } = mrExportRows();
  const esc2 = v => `"${String(v).replace(/"/g,'""')}"`;
  const csv = [header.map(esc2).join(','), ...rows.map(r => r.map(esc2).join(','))].join('\n');
  const blob = new Blob(['\uFEFF'+csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Member_Report_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}
function exportMrExcel(){
  toggleMrExportMenu();
  if(typeof XLSX === 'undefined'){ showToast('Excel export is still loading — try again in a moment.'); return; }
  const { header, rows } = mrExportRows();
  const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Member Report');
  XLSX.writeFile(wb, `Member_Report_${new Date().toISOString().slice(0,10)}.xlsx`);
}
function exportMrPDF(){
  toggleMrExportMenu();
  const { header, rows } = mrExportRows();
  const win = window.open('', '_blank');
  win.document.write(`
    <html><head><title>Member Report</title>
    <style>
      body{font-family:Arial,sans-serif;padding:20px;}
      table{width:100%;border-collapse:collapse;font-size:11px;}
      th,td{border:1px solid #ccc;padding:5px 7px;text-align:left;}
      th{background:#5a0616;color:#fff;}
      h2{color:#5a0616;}
    </style></head><body>
    <h2>Member Report — ${esc(new Date().toLocaleDateString())}</h2>
    <p>${rows.length} member(s)</p>
    <table><thead><tr>${header.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>
    </body></html>`);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 400);
}
function shareMrReport(){
  toggleMrExportMenu();
  const { header, rows } = mrExportRows();
  const text = `Member Report (${rows.length} members)\n\n` +
    rows.slice(0,20).map(r => header.map((h,i)=>`${h}: ${r[i]}`).join(', ')).join('\n') +
    (rows.length>20 ? `\n…and ${rows.length-20} more.` : '');
  if(navigator.share){
    navigator.share({ title: 'Member Report', text }).catch(()=>{});
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('Report summary copied to clipboard.'));
  }
}

function renderMastersView(){
  const tbody = document.getElementById('mastersTableBody');
  if(!tbody) return;
  const fields = getAllEditableOptionFields();
  tbody.innerHTML = fields.map(({key, label, list, tab, isCustom, fieldType}, i) => `
    <tr class="border-b border-crm-border last:border-0 hover:bg-slate-50">
      <td class="px-5 py-2.5 text-crm-textMuted text-xs">${i + 1}</td>
      <td class="px-5 py-2.5 font-medium text-crm-textDark text-sm">${esc(label)} ${tab ? `<span class="text-xs text-crm-textMuted font-normal">(${esc(tab)})</span>` : ''} <span class="text-xs text-crm-textMuted font-normal">· ${(isCustom && !CF_TYPES_NEEDING_OPTIONS.includes(fieldType)) ? esc(CUSTOM_FIELD_TYPE_LABELS[fieldType] || fieldType) : `${list.length} option${list.length===1?'':'s'}`}</span></td>
      <td class="py-2.5">
        <div class="flex items-center justify-start gap-1.5">
          <button type="button" onclick="openMasterDetail('${key}', false, 'view')" title="View" class="w-7 h-7 rounded bg-slate-50 text-slate-500 hover:bg-slate-100 flex justify-center items-center shadow-sm"><i class="fas fa-eye text-[10px]"></i></button>
          <button type="button" onclick="openMasterDetail('${key}', false, 'edit')" title="Edit" class="w-7 h-7 rounded bg-red-50 text-crm-primary hover:bg-crm-primary hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-pen text-[10px]"></i></button>
          ${isCustom ? `<button type="button" onclick="deleteMasterField('${key}')" title="Delete" class="w-7 h-7 rounded bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-trash text-[10px]"></i></button>` : ''}
        </div>
      </td>
    </tr>
  `).join('');
  // If a detail panel is currently open, refresh it too (e.g. after an add/remove).
  if(_openMasterDetailKey) openMasterDetail(_openMasterDetailKey, true, _openMasterDetailMode);
}
let _openMasterDetailKey = null;
let _openMasterDetailMode = 'view';
function openMasterDetail(key, isRefresh, mode){
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry) return;
  _openMasterDetailKey = key;
  _openMasterDetailMode = mode || _openMasterDetailMode || 'view';
  const isEdit = _openMasterDetailMode === 'edit';
  document.getElementById('mastersTableWrap').classList.add('hidden');
  const detail = document.getElementById('masterDetailWrap');
  detail.classList.remove('hidden');
  detail.dataset.key = key;

  document.getElementById('masterDetailTitle').innerHTML = isEdit ? `
    <div class="flex items-center gap-2">
      <input type="text" id="masterDetailTitleInput" value="${esc(entry.label)}" class="border border-crm-border rounded-lg px-3 py-1.5 text-sm font-semibold flex-1 max-w-xs">
      <button type="button" onclick="saveMasterFieldTitle()" class="text-xs font-medium px-3 py-1.5 rounded-lg text-white bg-crm-primary hover:opacity-90">Save Title</button>
    </div>
  ` : esc(entry.label);

  const list = document.getElementById('masterDetailOptionsList');
  const isDropdownType = !entry.isCustom || CF_TYPES_NEEDING_OPTIONS.includes(entry.fieldType);
  if(!isDropdownType){
    list.innerHTML = `<div class="text-xs text-crm-textMuted">Field type: <strong class="text-crm-textDark">${esc(CUSTOM_FIELD_TYPE_LABELS[entry.fieldType] || entry.fieldType)}</strong> — this field doesn't have a dropdown option list.</div>`;
    document.getElementById('masterDetailAddRow').classList.add('hidden');
  } else {
    list.innerHTML = entry.list.map((v, idx) => `
      <div class="flex items-center gap-2 border border-crm-border rounded-lg px-3 py-2" id="masterOptRow_${idx}">
        <span class="text-xs text-crm-textMuted w-5">${idx + 1}</span>
        <span class="flex-1 text-sm text-crm-textDark" id="masterOptText_${idx}">${esc(v)}</span>
        ${isEdit ? `<button type="button" onclick="startRenameOption('${key}', ${idx}, ${esc(JSON.stringify(v))})"
          class="w-6 h-6 rounded-full flex items-center justify-center text-crm-textMuted hover:bg-slate-100" title="Rename this option">
          <i class="fas fa-pen text-[11px]"></i>
        </button>
        <button type="button" onclick="removeMasterOption('${key}', ${esc(JSON.stringify(v))})"
          class="w-6 h-6 rounded-full flex items-center justify-center text-crm-primary hover:bg-rose-50" title="Remove this option">
          <i class="fas fa-minus text-xs"></i>
        </button>` : ''}
      </div>
    `).join('') || '<div class="text-xs text-crm-textMuted italic">No options yet' + (isEdit ? ' — add one below.' : '.') + '</div>';
    document.getElementById('masterDetailAddRow').classList.toggle('hidden', !isEdit);
  }

  if(!isRefresh){
    document.getElementById('masterDetailWrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
function saveMasterFieldTitle(){
  const key = document.getElementById('masterDetailWrap').dataset.key;
  const newLabel = document.getElementById('masterDetailTitleInput').value.trim();
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry || !newLabel) return;
  entry.label = newLabel;
  // The Masters page's own `label` (above) is a SEPARATE copy from what the actual
  // Member form displays — MEMBER_SECTIONS holds the real field tuple the form reads
  // from. Renaming only the Masters copy left the live form's label unchanged, which
  // is exactly the bug being fixed here: find and update that same tuple too.
  MEMBER_SECTIONS.forEach(sec => {
    const tuple = sec.fields.find(f => f[0] === key);
    if(tuple) tuple[1] = newLabel;
  });
  if(entry.isCustom){
    const def = CUSTOM_FIELD_DEFS.find(d => d.id === key);
    if(def) def.label = newLabel;
    saveCustomFieldDefs();
    if(typeof useBackend !== 'undefined' && useBackend){
      fetch(`${API_BASE}/custom_fields.php?id=${encodeURIComponent(key)}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ label: newLabel })
      }).catch(e => console.warn('Custom field: rename saved locally but backend sync failed:', e));
    }
  } else {
    localStorage.setItem('master_label_' + key, newLabel);
    if(typeof useBackend !== 'undefined' && useBackend){
      fetch(`${API_BASE}/masters.php?key=${encodeURIComponent(key)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ options: entry.list, label: newLabel })
      }).catch(e => console.warn('Title rename saved locally but backend sync failed:', e));
    }
  }
  renderMastersView();
  openMasterDetail(key, true, 'edit');
  clearFormDirty();
  showToast(`✔ Renamed to "${newLabel}".`);
}
function deleteMasterField(key){
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry) return;
  if(entry.isCustom){
    openConfirmModal(
      `Delete "${entry.label}"?`,
      'This removes the field from the form entirely. Any values already saved for it will stay in the database but won\'t be shown anywhere.',
      () => {
        CUSTOM_FIELD_DEFS = CUSTOM_FIELD_DEFS.filter(d => d.id !== key);
        saveCustomFieldDefs();
        removeFieldTuplesFromSections(key);
        if(typeof useBackend !== 'undefined' && useBackend){
          fetch(`${API_BASE}/custom_fields.php?id=${encodeURIComponent(key)}`, { method: 'DELETE' })
            .catch(e => console.warn('Custom field: delete failed on backend:', e));
        }
        renderRecTabsNav();
        if(_openMasterDetailKey === key) closeMasterDetail();
        renderMastersView();
        showToast(`✔ "${entry.label}" deleted.`);
      }
    );
    return;
  }
  openConfirmModal(
    `Remove "${entry.label}" from Masters?`,
    'This only stops managing this field\'s options here in Masters — the field and its current options keep working exactly as-is in the actual member form.',
    () => {
      const idx = MASTER_FIELD_REGISTRY.findIndex(m => m.key === key);
      if(idx !== -1) MASTER_FIELD_REGISTRY.splice(idx, 1);
      if(_openMasterDetailKey === key) closeMasterDetail();
      renderMastersView();
      showToast(`✔ "${entry.label}" removed from Masters.`);
    }
  );
}
function startRenameOption(key, idx, oldValue){
  const textSpan = document.getElementById('masterOptText_' + idx);
  textSpan.innerHTML = `<div class="flex items-center gap-1.5 w-full">
    <input type="text" id="masterOptEditInput_${idx}" value="${esc(oldValue)}" class="flex-1 border border-crm-border rounded px-2 py-1 text-sm"
      onkeydown="if(event.key==='Enter'){ event.preventDefault(); saveRenamedOption('${key}', ${esc(JSON.stringify(oldValue))}, ${idx}); } else if(event.key==='Escape'){ event.preventDefault(); openMasterDetail('${key}', true, 'edit'); }">
    <button type="button" onclick="saveRenamedOption('${key}', ${esc(JSON.stringify(oldValue))}, ${idx})" title="Save" class="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-white bg-emerald-600 hover:bg-emerald-700"><i class="fas fa-check text-xs"></i></button>
    <button type="button" onclick="openMasterDetail('${key}', true, 'edit')" title="Cancel" class="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-crm-textMuted bg-slate-100 hover:bg-slate-200"><i class="fas fa-xmark text-xs"></i></button>
  </div>`;
  document.getElementById('masterOptEditInput_' + idx).focus();
}
function saveRenamedOption(key, oldValue, idx){
  const input = document.getElementById('masterOptEditInput_' + idx);
  const newValue = input.value.trim();
  if(!newValue || newValue === oldValue){ openMasterDetail(key, true, 'edit'); return; }
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry) return;
  const i = entry.list.indexOf(oldValue);
  if(i === -1) return;
  const doRename = () => {
    entry.list[i] = newValue;
    saveMasterOverride(key);
    openMasterDetail(key, true, 'edit');
    showToast(`✔ "${oldValue}" renamed to "${newValue}".`);
  };
  if(!entry.isCustom){
    // Built-in fields (like Role) may already be saved on many existing member
    // records with the OLD text — renaming the option here does NOT change what's
    // already stored, so flag that clearly rather than letting it look seamless.
    openConfirmModal(
      `Rename "${oldValue}" to "${newValue}"?`,
      'Members who already have the old value saved will keep showing it as-is (their data isn\'t changed) — only NEW selections will use the new name.',
      doRename,
      { confirmLabel: 'Rename', confirmClass: 'bg-crm-primary hover:opacity-90', iconClass: 'fas fa-pen', iconWrapClass: 'bg-red-50 text-crm-primary' }
    );
  } else {
    doRename();
  }
}
function closeMasterDetail(){
  _openMasterDetailKey = null;
  document.getElementById('masterDetailWrap').classList.add('hidden');
  document.getElementById('mastersTableWrap').classList.remove('hidden');
}
// Fields that MUST be filled before a Member record can be saved — shown with a red
// asterisk next to the label, and checked at Save time (see validateRequiredMemberFields).
const REQUIRED_MEMBER_FIELDS = new Set([
  // Basic Information
  'first_name','father_name','surname','role','sanchalak_name','dob',
  'mool_gaon','hal_gaon','house_type','address','own_photo_data',
  // Transport
  'sabha_transport','drives_vehicle','has_license','wears_helmet','wears_seatbelt',
  // Education
  'study_status','result_pct','school_name','school_city','board','medium','degree',
  // Work & Skills
  'skills','work_status','work_field','hobby','father_job','own_job_detail','languages',
  // Sadhana
  'puja','mangla_aarti','katha','sandhya_aarti','chesta','shibir',
  // Satsang & Family
  'satsang_in_home','family_in_sabha','family_member_in_grp','member_type',
  'family_member_name','satsang_yrs','granth','sabha_yrs','witness_haribhakt_name',
  // Spiritual Guidance
  'sant_known','haribhakt_known','sant_report','witness_sant_name','sabha_obstacle',
  // Group
  'poshak_leader',
  // Seva
  'local_seva_assigned','local_seva_what','local_seva_duration','wants_seva','kundal_seva','kundal_seva_what',
  // Contact Details
  'mobile','email','father_mob','has_own_mobile',
  // Availability
  'avail_days','avail_time','school_time','meet_time','call_time',
  // Friends
  'friend1_name','friend1_mob','friend2_name','friend2_mob','friend3_name','friend3_mob'
]);
const MEMBER_SECTIONS = [
  { title:'સંપૂર્ણ વ્યક્તિગત માહિતી', icon:'fa-id-card', color:'text-blue-500', fields:[
    ['first_name','ફક્ત નામ'], ['father_name','પિતાનું નામ'], ['surname','અટક'],
    ['full_name','પૂરું નામ ગુજરાતીમાં'], ['role','તમારો કયા પ્રકારનો રોલ છે?','select', ROLE_OPTIONS],
    ['sanchalak_name','સંચાલકનું નામ','select', SANCHALAK_NAME_OPTIONS],
    ['dob','જન્મ તારીખ','date'], ['satsang_since','સત્સંગ ડે (Satsang Since)','date'],
    ['blood','Blood Group','select', BLOOD_OPTIONS], ['smk','SMK નંબર'],
    ['mool_gaon','મૂળ ગામ'], ['hal_gaon','હાલ ગામ'],
    ['house_type','ઘર - પોતાનું છે કે ભાડાનું?','select',['પોતાનું ઘર','ભાડાનું ઘર','અન્ય (મામા/માસીના ઘરે/કે અલગથી રૂમ રાખીને, વગેરે)']],
    ['address','સંપૂર્ણ સરનામું (ઘર નંબર, એપાર્ટ/સોસાયટી, લેન્ડમાર્ક, પિનકોડ)','textarea'],
    ['own_photo_data','ફોટો']
  ]},
  { title:'સભામાં આવવાની રીત', icon:'fa-motorcycle', color:'text-orange-500', fields:[
    ['sabha_transport','સભામાં આવો ત્યારે કઈ રીતે આવો છો?(એક કરતા વધુ પસંદ કરી શકો છો)','multiselect-dropdown', SABHA_TRANSPORT_OPTIONS],
    ['drives_vehicle','શું તમે બાઇક અથવા કાર ચલાવો છો?','select', VEHICLE_OPTIONS],
    ['has_license','શું તમારી પાસે ડ્રાયવીંગ લાયસન્સ છે?','select', LICENSE_OPTIONS],
    ['wears_helmet','શું બાઇક ચલાવતી વખતે હેલ્મેટ પહેરો છો?','select', HELMET_SEATBELT_OPTIONS],
    ['wears_seatbelt','શું કાર ચલાવતી વખતે સીટ બેલ્ટ બાંધો છો?','select', HELMET_SEATBELT_OPTIONS]
  ]},
  { title:'અભ્યાસ/ભણતર', icon:'fa-graduation-cap', color:'text-emerald-500', fields:[
    ['study_status','હાલ અભ્યાસ/ભણતરની સ્થિતિ','select', STUDY_STATUS_OPTIONS],
    ['result_pct','તમારા છેલ્લા ધોરણની ટકાવારી'], ['school_name','શાળા / કૉલેજ / સંસ્થાનું નામ'],
    ['school_city','શાળા / કૉલેજ કયા શહેરમાં છે?','select', GUJARAT_CITY_OPTIONS],
    ['board','કયું બોર્ડ પસંદ કરેલું છે?','select', BOARD_OPTIONS], ['medium','અભ્યાસનું માધ્યમ','select', MEDIUM_OPTIONS],
    ['degree','પ્રોફેશનલ ડિગ્રી','select', DEGREE_OPTIONS]
  ]},
  { title:'આવડત, શોખ અને કારકિર્દી', icon:'fa-briefcase', color:'text-teal-500', fields:[
    ['skills','તમને કયા ક્ષેત્રની આવડત છે? (એક કરતા વધુ પસંદ કરી શકો)','multiselect-dropdown', SKILLS_OPTIONS],
    ['work_status','હાલ તમારી નોકરી / ધંધો / વ્યવસાયની સ્થિતિ','select', WORK_STATUS_OPTIONS],
    ['work_field','જો નોકરી કે ધંધો કરતા હોવ તો કયા ફિલ્ડ માં કરો છો?','select', WORK_FIELD_OPTIONS],
    ['hobby','તમારો શોખ'],
    ['father_job','પિતાનો વ્યવસાય / ધંધો','select', FATHER_JOB_OPTIONS],
    ['own_job_detail','તમારા પિતાના વ્યવસાય અથવા નોકરીની વિગત','multiselect-dropdown', OWN_JOB_DETAIL_OPTIONS],
    ['languages','તમે કઈ કઈ ભાષા બોલી શકો છો?','multiselect-dropdown', LANGUAGES_OPTIONS]
  ]},
  { title:'ભજન-ભક્તિ', icon:'fa-fire', color:'text-red-500', special:'sadhana', fields:[
    ['puja','પૂજા','select',['દરરોજ','ક્યારેક','નથી કરતો']],
    ['mangla_aarti','મંગળા આરતી','select',['દરરોજ','ક્યારેક','નથી કરતો']],
    ['katha','સવારની કથા','select',['લાઈવ','ડીલે લાઈવ','ક્યારેક','મોટા ભાગે','નથી સાંભળતો']],
    ['sandhya_aarti','સંધ્યા આરતી','select',['દરરોજ','ક્યારેક','નથી કરતો']],
    ['chesta','ચેષ્ટા','select',['દરરોજ','ક્યારેક','નથી કરતો']],
    ['shibir','શિબિર','select',['હા','ના']]
  ]},
  { title:'ફેમેલીના સત્સંગ વિશેની માહિતી', icon:'fa-house', color:'text-indigo-500', fields:[
    ['satsang_in_home','ઘરમાં સત્સંગ કોને કોને છે? (એક કરતા વધુ પસંદ કરી શકો)','multiselect-dropdown', SATSANG_IN_HOME_OPTIONS], ['family_in_sabha','ઘરના કોઈ સભ્યો સભામાં આવે છે?','select', YES_NO_OPTIONS],
    ['family_member_in_grp','તમારા ઘરમાં કોઈ આત્મીય સભ્ય, ગ્રૂપ સભ્ય અથવા યુવા સભ્ય છે?','select', YES_NO_OPTIONS],
    ['member_type','જો હા હોય તો કયા પ્રકારના સભ્ય છે?','select', MEMBER_TYPE_FORM_OPTIONS],
    ['family_member_name','જો તમારા ઘરમાં કોઈ આત્મીય સભ્ય, ગ્રૂપ સભ્ય અથવા યુવા સભ્ય તો તેનું નામ લખો'], ['satsang_yrs','તમને કેટલા વર્ષથી સત્સંગ છે?','select', SATSANG_YRS_OPTIONS],
    ['granth','તમે સદગ્રંથ/શાસ્ત્ર વાંચન કરો છો?','select',['હા, રોજ','ક્યારેક','અઠવાડિક','ના, નથી કરતો']],
    ['sabha_yrs','તમે સભામાં કેટલા વર્ષથી આવો છો?','select',['૬ મહિના કરતા ઓછો','૬ મહિના – ૧ વર્ષ','૧ – ૩ વર્ષ','૩ – ૫ વર્ષ','૫ વર્ષ કરતા વધુ']]
  ]},
  { title:'આધ્યાત્મિક માર્ગદર્શન', icon:'fa-hands-praying', color:'text-amber-500', fields:[
    ['sant_known','તમને ઓળખતા હોય તેવા એક પૂ. સંતનું નામ','select', SANT_OPTIONS], ['haribhakt_known','તમને ઓળખતા હોય તેવા એક હરિભક્તનું નામ'],
    ['sant_report','તમે તમારો નિયમિત રિપોર્ટ આપતા હોવ તેવા એક પૂ. સંતનું નામ','select', SANT_OPTIONS], ['witness_sant_name','તમારા સાક્ષી સંતનું નામ','select', SANT_OPTIONS],
    ['sabha_obstacle','ઘરેથી સત્સંગમાં આવવા માટે કોઈ વાંધો કે અડચણ છે?','select', SABHA_OBSTACLE_OPTIONS]
  ]},
  { title:'તમારા પોષક લીડરનું નામ', icon:'fa-users', color:'text-cyan-600', fields:[
    ['poshak_leader','પોષક લીડર','select', getPoshakLeaderOptions]
  ]},
  { title:'મૂર્તિબાગ સ્થાનિક સેવા બાબતની વિગત', icon:'fa-hand-holding-heart', color:'text-pink-500', fields:[
    ['local_seva_assigned','મૂર્તિ બાગ ખાતે કોઈ સેવા તમને ફાળવવામાં આવી છે?','select', YES_NO_OPTIONS], ['local_seva_what','જો હા - કઈ સ્થાનિક સેવા (મૂર્તિબાગ ખાતે)? (એક કરતા વધુ પસંદ કરી શકો)','multiselect-dropdown', LOCAL_SEVA_WHAT_OPTIONS],
    ['local_seva_duration','આ સેવા કેટલા સમયથી કરી રહ્યા છો?','select', LOCAL_SEVA_DURATION_OPTIONS], ['wants_seva','જો તમારે કોઈ સ્થાનિક સેવા નથી તો જોડાવા માંગો છો?','select', WANTS_SEVA_OPTIONS],
    ['kundal_seva','કુંડળધામની કોઈ સેવા (ઘેર બેઠા) તમે કરી રહ્યા છો અથવા સેવા કરવા તમે જાવ છો?','select', KUNDAL_SEVA_OPTIONS], ['kundal_seva_what','જો હા - કઈ સેવા (કુંડળધામ તરફથી)? (એક કરતા વધુ પસંદ કરી શકો)','multiselect-dropdown', KUNDAL_SEVA_WHAT_OPTIONS]
  ]},
  { title:'સંપર્ક માહિતી', icon:'fa-address-book', color:'text-rose-500', fields:[
    ['mobile','તમારો પર્સનલ મોબાઈલ નંબર(જો ના હોય તો ઘરમાં જે WhatsApp વાળો ફોન હોય તે નંબર લખવો (1.મમ્મી, 2.પપ્પા)'], ['email','તમરું Email Id'], ['mother_mob','તમારા માતાનો મોબાઈલ નંબર'], ['father_mob','પિતાનો મોબાઈલ નંબર'],
    ['has_own_mobile','શું તમારી પાસે પોતાનો મોબાઈલ ફોન છે?','select', YES_NO_OPTIONS]
  ]},
  { title:'મળવા / વાત કરવાનો ઉપલબ્ધ સમય', icon:'fa-clock', color:'text-amber-600', fields:[
    ['avail_days','તમે કયા દિવસોમાં વાત કરવા માટે ઉપલબ્ધ હોવ છો?(એક કરતા વધુ પસંદ કરી શકો)','multiselect-dropdown', AVAIL_DAYS_OPTIONS], ['avail_time','તમે દિવસના કયા સમયે વાત કરવા માટે ઉપલબ્ધ હોવ છો? (એક કરતા વધુ પસંદ કરી શકો)','multiselect-dropdown', AVAIL_TIME_OPTIONS],
    ['school_time','તમારી સ્કૂલ, ટ્યુશન, કે ધંધાનો સમય જણાવો','multiselect-dropdown', AVAIL_TIME_OPTIONS], ['meet_time','તમને રૂબરૂ મળવા માટેનો સૌથી સારો સમય','multiselect-dropdown', AVAIL_TIME_OPTIONS], ['call_time','ફોન પર વાત કરવાનો સૌથી સારો સમય','multiselect-dropdown', AVAIL_TIME_OPTIONS]
  ]},
  { title:'સત્સંગી મિત્રોની માહિતી', icon:'fa-user-group', color:'text-lime-600', fields:[
    ['friend1_name','મિત્ર ૧ - નામ'], ['friend1_mob','મિત્ર ૧ - મોબાઈલ નંબર'],
    ['friend2_name','મિત્ર ૨ - નામ'], ['friend2_mob','મિત્ર ૨ - મોબાઈલ નંબર'],
    ['friend3_name','મિત્ર ૩ - નામ'], ['friend3_mob','મિત્ર ૩ - મોબાઈલ નંબર']
  ]}
];
// Applies any already-loaded Master field title renames (from localStorage, set by
// loadMasterLabelOverrides() above, which ran before MEMBER_SECTIONS existed) onto the
// real field tuples the Member form reads its labels from — so a page reload shows a
// renamed title correctly in the actual form, not just on the Masters page.
MASTER_FIELD_REGISTRY.forEach(entry => {
  MEMBER_SECTIONS.forEach(sec => {
    const tuple = sec.fields.find(f => f[0] === entry.key);
    if(tuple) tuple[1] = entry.label;
  });
});

const MEMBER_TAB_GROUPS = [
  { key:'personal', label:'વ્યક્તિગત માહિતી', icon:'fa-user', sections:['સંપૂર્ણ વ્યક્તિગત માહિતી'] },
  { key:'study', label:'અભ્યાસ/ભણતર વિશેની માહિતી', icon:'fa-book', sections:['અભ્યાસ/ભણતર','આવડત, શોખ અને કારકિર્દી'] },
  { key:'sadhana', label:'ભજન-ભક્તિ', icon:'fa-fire', sections:['ભજન-ભક્તિ'] },
  { key:'satsang', label:'સત્સંગ', icon:'fa-house', sections:['ફેમેલીના સત્સંગ વિશેની માહિતી','આધ્યાત્મિક માર્ગદર્શન','તમારા પોષક લીડરનું નામ'] },
  { key:'seva', label:'સેવા', icon:'fa-hand-holding-heart', sections:['મૂર્તિબાગ સ્થાનિક સેવા બાબતની વિગત'] },
  { key:'contact', label:'સંપર્ક', icon:'fa-phone', sections:['સંપર્ક માહિતી','મળવા / વાત કરવાનો ઉપલબ્ધ સમય'] },
  { key:'friends', label:'સત્સંગી મિત્રો', icon:'fa-user-group', sections:['સત્સંગી મિત્રોની માહિતી'] },
  { key:'transport', label:'સભા / વાહન', icon:'fa-motorcycle', sections:['સભામાં આવવાની રીત'] }
];
applyCustomFieldDefs(); // must run AFTER MEMBER_TAB_GROUPS exists — calling it earlier
// (before this const was initialized) threw "Cannot access before initialization"
// as soon as any real custom field existed in the localStorage cache.

const MEMBER_TYPE_OPTIONS = ['આત્મીય સભ્ય','ગ્રુપ સભ્ય','યુવા સભ્ય'];
const INDIAN_STATES = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry'];
const COUNTRY_OPTIONS = ['India','United States','United Kingdom','Canada','Australia','United Arab Emirates','Other'];

/* ===================== MODULES ===================== */
const MODULES = window.MODULES = {
  members: {
    label:'Member', addLabel:'Add Member', moduleTitle:'Members',
    sections: MEMBER_SECTIONS, tabGroups: MEMBER_TAB_GROUPS,
    data: [], storageKey:'yuvaSabhaMembers', rawData: RAW_MEMBERS,
    nameField:'name',
    searchFields:['name','mobile','group','mool_gaon','hal_gaon'],
    columns: [
      { header:'#', render: (m,idx,displayIdx)=>`<span class="text-crm-textMuted font-medium text-xs">${(displayIdx!==undefined?displayIdx:idx)+1}</span>` },
      { header:'', render: m=>avatarHtml(m, 'w-8 h-8') },
      { header:'Name', render: m=>`<div class="font-medium text-crm-textDark flex items-center gap-1.5">${esc(m.name||'')}${m.active_status==='inactive' ? '<span class="badge bg-red-50 text-crm-primary" style="font-size:9px;padding:1px 6px;font-weight:700;opacity:2.3">● DEACTIVATED</span>' : ''}</div><div class="text-[11px] text-crm-textMuted">${esc(m.full_name||'')}</div>` },
      { header:'Mobile', render: m=>esc(m.mobile||'—') },
      { header:'Leader', render: m=>{
          const groupName = (m.group||'').replace(/\(.*\)/,'').trim();
          const leaderName = groupName || m.poshak_leader || '—';
          // Only show a second, smaller line when it's genuinely DIFFERENT extra detail
          // (the poshak_leader value, when it differs from the group name shown above) —
          // otherwise every entry's main leader name renders at the same normal size,
          // instead of some falling back to the small muted line when group was empty.
          const extraLine = (groupName && m.poshak_leader && m.poshak_leader !== groupName) ? `<div class="text-[11px] text-crm-textMuted">${esc(m.poshak_leader)}</div>` : '';
          return `<div>${esc(leaderName)}</div>${extraLine}`;
        } },
      { header:'Role', render: m=>`<span class="badge bg-cyan-50 text-cyan-700">${esc(m.role||'યુવા સભ્ય')}</span>` },
      { header:'Member Type', render: m=>`<span class="badge bg-red-50 text-crm-primary">${esc(m.member_type||'Unknown')}</span>` },
      { header:'Local Seva', render: m=>`<div class="truncate" style="max-width:150px" title="${esc(m.local_seva_what||'')}">${esc(m.local_seva_what||'—')}</div>` },
      { header:'Sant Report', render: m=>`<div class="truncate" style="max-width:170px" title="${esc(m.sant_report||'')}">${esc(m.sant_report||'—')}</div>` },
      { header:'Haribhakt Known', render: m=>`<div class="truncate" style="max-width:150px" title="${esc(m.haribhakt_known||'')}">${esc(m.haribhakt_known||'—')}</div>` },
      { header:'Actions', className:'text-right', render:(m,idx)=>getActionsHTML(idx) }
    ],
    newRecordDefaults: ()=>({ idx:0, initials:'', score:0, level:'medium', flags:[], role:'યુવા સભ્ય', degree:'Not Applicable' }),
    computeName: r => [r.first_name, r.surname].filter(Boolean).join(' ') || r.full_name || 'New Member',
    describe: r => `${r.name}\nMobile: ${r.mobile}\nGroup: ${r.group}\nVillage: ${r.mool_gaon}\nScore: ${r.score}/5`
  }
};

/* ===================== STATE ===================== */
let currentModule = 'members';
let currentIdx = null;    // index into current module's data being viewed/edited
let currentMode = 'add';  // 'add' | 'edit' | 'view'
let activeRecTab = 'personal';
let recDraft = {};        // holds edited field values across tab switches while form is open
let keepRecordOpenAfterSave = false; // when true, saveRecord() skips its closeRecord() call — used by per-tab Save so a brand-new record's first tab-save (which must use the full save flow) doesn't kick the person back out to the list
let pendingUnsavedTabs = new Set(); // tab keys with typed-but-not-yet-saved changes from earlier in this same editing session — folded into the next Save so nothing typed is ever silently lost
let deleteTargetIdx = null;
let currentPage = 1;
let PER_PAGE = parseInt(localStorage.getItem('yuvaSabhaPageSize')) || 20;

function cfg(){ return MODULES[currentModule]; }
function getPoshakLeaders(){ return MODULES.members.data.filter(m => m.role === 'પોષક લીડર'); }
function data(){ return MODULES[currentModule].data; }

const DATA_VERSION = 'v11-leadership-smk-fix';
let membersLiveFetchedAt = 0;       // set when real data arrives from the server this session
let apiCachePrimeDone = false;      // true once the instant load from the saved (IndexedDB) copy has been tried
let membersLiveDataConfirmed = false; // true once the live members fetch has resolved (success or failure) at least once — the Dashboard waits for this instead of showing possibly-stale cached numbers
// Hard safety net: whatever the reason (a slow connection, an unexpected code path,
// a future bug in this same area) — the Dashboard's "Loading live data…" state can
// NEVER be stuck for more than this long. After it, force-confirm and show whatever
// data is actually available rather than spinning forever.
setTimeout(() => {
  if(!membersLiveDataConfirmed){
    console.warn('Dashboard safety-net: live data still unconfirmed after 6s — forcing display of best-available data instead of waiting further.');
    membersLiveDataConfirmed = true;
    if(currentModule==='dashboard' && document.getElementById('dashboardView') && !document.getElementById('dashboardView').classList.contains('hidden')){
      renderDashboard();
    }
    if(typeof renderSidebarStats==='function') renderSidebarStats();
  }
}, 6000);
function showDbStatus(status){
  // status: true = live/synced, false = still syncing (in progress), 'offline' = the fetch genuinely failed
  console.log(status===true ? '✅ Connected to live database.' : status==='offline' ? '⚠️ Database unreachable — using local backup data.' : '… Syncing with live database.');
}
function seedLocalDataInstant(){
  // Synchronously fills every module with SOMETHING to show — the browser's own cached
  // copy if present, or the data embedded directly in this file — with zero network
  // wait. This is what lets the very first paint show real content instead of an empty
  // screen while the live database is still being reached in the background.
  let storedVersion = null;
  try{ storedVersion = localStorage.getItem('yuvaSabhaDataVersion'); }catch(e){}
  const versionMismatch = storedVersion !== DATA_VERSION;
  showDbStatus(false);
  Object.keys(MODULES).forEach(key => {
    const m = MODULES[key];
    if(!versionMismatch){
      try{
        const stored = localStorage.getItem(m.storageKey);
        if(stored){
          m.data = key==='members' ? sortPoshakFirst(JSON.parse(stored)) : JSON.parse(stored);
          if(key==='members') m.data.forEach(r => { if(r.poshak_leader && isFullNameGujarati(r.poshak_leader) && r.group && !isFullNameGujarati(r.group)) r.poshak_leader = r.group; if((!r.poshak_leader_gujarati || !isFullNameGujarati(r.poshak_leader_gujarati)) && r.poshak_leader) r.poshak_leader_gujarati = transliterateGujaratiWord(r.poshak_leader); r.sanchalak_name = 'દિવ્યેશભાઈ ડુંગરાણી'; if(r.father_job) r.father_job = normalizeFatherJob(r.father_job); if(r.own_job_detail) r.own_job_detail = normalizeOwnJobDetail(r.own_job_detail); if(r.board) r.board = normalizeBoard(r.board); if(r.medium) r.medium = normalizeMedium(r.medium); if(r.degree) r.degree = normalizeDegree(r.degree); if(r.work_status) r.work_status = normalizeWorkStatus(r.work_status); if(r.work_field) r.work_field = normalizeWorkField(r.work_field); if(r.satsang_in_home) r.satsang_in_home = normalizeSatsangInHome(r.satsang_in_home); if(r.local_seva_what) r.local_seva_what = normalizeLocalSevaWhat(r.local_seva_what); if(r.local_seva_duration) r.local_seva_duration = normalizeLocalSevaDuration(r.local_seva_duration); if(r.wants_seva) r.wants_seva = normalizeWantsSeva(r.wants_seva); if(r.kundal_seva) r.kundal_seva = normalizeKundalSeva(r.kundal_seva); if(r.kundal_seva_what) r.kundal_seva_what = normalizeKundalSevaWhat(r.kundal_seva_what); if(r.avail_days) r.avail_days = normalizeAvailDays(r.avail_days); if(r.avail_time) r.avail_time = normalizeAvailTime(r.avail_time); if(r.school_time) r.school_time = normalizeSchoolTime(r.school_time); if(r.meet_time) r.meet_time = normalizeMeetTime(r.meet_time); if(r.call_time) r.call_time = normalizeCallTime(r.call_time); capitalizeRecordTextFields(r); });
          return;
        }
      }catch(e){}
    }
    // Fresh load: either first time ever, or the underlying seed data changed since last visit
    m.data = m.rawData.map(r => ({...r}));
    if(key==='members') m.data.forEach(r => { if(r.poshak_leader && isFullNameGujarati(r.poshak_leader) && r.group && !isFullNameGujarati(r.group)) r.poshak_leader = r.group; if((!r.poshak_leader_gujarati || !isFullNameGujarati(r.poshak_leader_gujarati)) && r.poshak_leader) r.poshak_leader_gujarati = transliterateGujaratiWord(r.poshak_leader); r.sanchalak_name = 'દિવ્યેશભાઈ ડુંગરાણી'; if(r.father_job) r.father_job = normalizeFatherJob(r.father_job); if(r.own_job_detail) r.own_job_detail = normalizeOwnJobDetail(r.own_job_detail); if(r.board) r.board = normalizeBoard(r.board); if(r.medium) r.medium = normalizeMedium(r.medium); if(r.degree) r.degree = normalizeDegree(r.degree); if(r.work_status) r.work_status = normalizeWorkStatus(r.work_status); if(r.work_field) r.work_field = normalizeWorkField(r.work_field); if(r.satsang_in_home) r.satsang_in_home = normalizeSatsangInHome(r.satsang_in_home); if(r.local_seva_what) r.local_seva_what = normalizeLocalSevaWhat(r.local_seva_what); if(r.local_seva_duration) r.local_seva_duration = normalizeLocalSevaDuration(r.local_seva_duration); if(r.wants_seva) r.wants_seva = normalizeWantsSeva(r.wants_seva); if(r.kundal_seva) r.kundal_seva = normalizeKundalSeva(r.kundal_seva); if(r.kundal_seva_what) r.kundal_seva_what = normalizeKundalSevaWhat(r.kundal_seva_what); if(r.avail_days) r.avail_days = normalizeAvailDays(r.avail_days); if(r.avail_time) r.avail_time = normalizeAvailTime(r.avail_time); if(r.school_time) r.school_time = normalizeSchoolTime(r.school_time); if(r.meet_time) r.meet_time = normalizeMeetTime(r.meet_time); if(r.call_time) r.call_time = normalizeCallTime(r.call_time); capitalizeRecordTextFields(r); });
    if(key==='members') m.data = sortPoshakFirst(m.data);
    saveData(key);
  });
  if(versionMismatch){
    try{ localStorage.setItem('yuvaSabhaDataVersion', DATA_VERSION); }catch(e){}
  }
  applyActiveStatusOverrides(MODULES.members.data);
  reconcileSignupEmails();
}
async function loadData(){
  let storedVersion = null;
  try{ storedVersion = localStorage.getItem('yuvaSabhaDataVersion'); }catch(e){}
  const versionMismatch = storedVersion !== DATA_VERSION;

  if(useBackend){
    try{
      const membersRes = await cachedFetch(`${API_BASE}/members.php?_ts=${Date.now()}`, { cache: 'no-store' });
      if(membersRes.ok){
        const membersData = await membersRes.json();
        if(Array.isArray(membersData)){
          // Defensive: if the backend's response is missing active_status OR
          // own_photo_data for a member (e.g. the database table doesn't have those
          // columns yet), keep whatever this browser already knew locally instead of
          // silently losing it — this is exactly what was making a Deactivate "undo
          // itself" and an uploaded photo disappear whenever fresh data came from the
          // server.
          const knownStatus = {}, knownPhoto = {};
          (MODULES.members.data || []).forEach(r => {
            if(!r.smk) return;
            knownStatus[r.smk] = r.active_status;
            knownPhoto[r.smk] = r.own_photo_data;
          });
          membersData.forEach(r => {
            if(!r.smk) return;
            if((r.active_status === undefined || r.active_status === null || r.active_status === '') && knownStatus[r.smk] !== undefined){
              r.active_status = knownStatus[r.smk];
            }
            if((r.own_photo_data === undefined || r.own_photo_data === null || r.own_photo_data === '') && knownPhoto[r.smk]){
              r.own_photo_data = knownPhoto[r.smk];
            }
          });
          MODULES.members.data = sortPoshakFirst(membersData.map(normalizeDbRecord));
          applyActiveStatusOverrides(MODULES.members.data); // local Activate/Deactivate always wins over the server
          if(currentUserRole && currentUserRole!=='admin' && currentUserRecord && currentUserRecord.smk){
            const fresh = MODULES.members.data.find(r => String(r.smk||'').toUpperCase() === String(currentUserRecord.smk).toUpperCase());
            if(fresh) currentUserRecord = fresh;
          }
          console.log('Loaded live data from database:', membersData.length, 'members.');
          showDbStatus(true);
          membersLiveDataConfirmed = true;
          membersLiveFetchedAt = Date.now();
          if(currentModule==='dashboard' && document.getElementById('dashboardView') && !document.getElementById('dashboardView').classList.contains('hidden')){
            renderDashboard(); // show the CONFIRMED real numbers now, instead of whatever cached numbers were showing (if any were shown at all)
          }
          if(typeof renderSidebarStats==='function') renderSidebarStats();
          return;
        }
      }
    }catch(e){
      console.warn('Backend unreachable, using local data instead:', e);
      showDbStatus('offline');
    }
  }

  // ---- Fallback: browser's local storage (used if backend is unreachable) ----
  if(useBackend) showDbStatus('offline'); // we tried and failed above — genuinely offline
  // (if useBackend is false entirely, leave the badge alone — nothing was ever attempted)
  // Either way, the live attempt is now resolved (succeeded or not) — stop waiting and
  // show the best data we actually have, rather than hanging on a loading state forever.
  membersLiveDataConfirmed = true;
  Object.keys(MODULES).forEach(key => {
    const m = MODULES[key];
    if(!versionMismatch){
      try{
        const stored = localStorage.getItem(m.storageKey);
        if(stored){
          m.data = key==='members' ? sortPoshakFirst(JSON.parse(stored)) : JSON.parse(stored);
          // Apply the full_name-Gujarati fix here too — this branch loads data
          // that was cached in the browser from a PREVIOUS visit (before this fix
          // existed), so without this line anyone who'd used the app before would
          // keep seeing the old English full_name forever, since this branch
          // returns immediately without going through the "fresh load" code below.
          if(key==='members') m.data.forEach(r => { if(r.poshak_leader && isFullNameGujarati(r.poshak_leader) && r.group && !isFullNameGujarati(r.group)) r.poshak_leader = r.group; if((!r.poshak_leader_gujarati || !isFullNameGujarati(r.poshak_leader_gujarati)) && r.poshak_leader) r.poshak_leader_gujarati = transliterateGujaratiWord(r.poshak_leader); r.sanchalak_name = 'દિવ્યેશભાઈ ડુંગરાણી'; if(r.father_job) r.father_job = normalizeFatherJob(r.father_job); if(r.own_job_detail) r.own_job_detail = normalizeOwnJobDetail(r.own_job_detail); if(r.board) r.board = normalizeBoard(r.board); if(r.medium) r.medium = normalizeMedium(r.medium); if(r.degree) r.degree = normalizeDegree(r.degree); if(r.work_status) r.work_status = normalizeWorkStatus(r.work_status); if(r.work_field) r.work_field = normalizeWorkField(r.work_field); if(r.satsang_in_home) r.satsang_in_home = normalizeSatsangInHome(r.satsang_in_home); if(r.local_seva_what) r.local_seva_what = normalizeLocalSevaWhat(r.local_seva_what); if(r.local_seva_duration) r.local_seva_duration = normalizeLocalSevaDuration(r.local_seva_duration); if(r.wants_seva) r.wants_seva = normalizeWantsSeva(r.wants_seva); if(r.kundal_seva) r.kundal_seva = normalizeKundalSeva(r.kundal_seva); if(r.kundal_seva_what) r.kundal_seva_what = normalizeKundalSevaWhat(r.kundal_seva_what); if(r.avail_days) r.avail_days = normalizeAvailDays(r.avail_days); if(r.avail_time) r.avail_time = normalizeAvailTime(r.avail_time); if(r.school_time) r.school_time = normalizeSchoolTime(r.school_time); if(r.meet_time) r.meet_time = normalizeMeetTime(r.meet_time); if(r.call_time) r.call_time = normalizeCallTime(r.call_time); capitalizeRecordTextFields(r); });
          return;
        }
      }catch(e){}
    }
    // Fresh load: either first time ever, or the underlying seed data changed since last visit
    m.data = m.rawData.map(r => ({...r}));
    if(key==='members') m.data.forEach(r => { if(r.poshak_leader && isFullNameGujarati(r.poshak_leader) && r.group && !isFullNameGujarati(r.group)) r.poshak_leader = r.group; if((!r.poshak_leader_gujarati || !isFullNameGujarati(r.poshak_leader_gujarati)) && r.poshak_leader) r.poshak_leader_gujarati = transliterateGujaratiWord(r.poshak_leader); r.sanchalak_name = 'દિવ્યેશભાઈ ડુંગરાણી'; if(r.father_job) r.father_job = normalizeFatherJob(r.father_job); if(r.own_job_detail) r.own_job_detail = normalizeOwnJobDetail(r.own_job_detail); if(r.board) r.board = normalizeBoard(r.board); if(r.medium) r.medium = normalizeMedium(r.medium); if(r.degree) r.degree = normalizeDegree(r.degree); if(r.work_status) r.work_status = normalizeWorkStatus(r.work_status); if(r.work_field) r.work_field = normalizeWorkField(r.work_field); if(r.satsang_in_home) r.satsang_in_home = normalizeSatsangInHome(r.satsang_in_home); if(r.local_seva_what) r.local_seva_what = normalizeLocalSevaWhat(r.local_seva_what); if(r.local_seva_duration) r.local_seva_duration = normalizeLocalSevaDuration(r.local_seva_duration); if(r.wants_seva) r.wants_seva = normalizeWantsSeva(r.wants_seva); if(r.kundal_seva) r.kundal_seva = normalizeKundalSeva(r.kundal_seva); if(r.kundal_seva_what) r.kundal_seva_what = normalizeKundalSevaWhat(r.kundal_seva_what); if(r.avail_days) r.avail_days = normalizeAvailDays(r.avail_days); if(r.avail_time) r.avail_time = normalizeAvailTime(r.avail_time); if(r.school_time) r.school_time = normalizeSchoolTime(r.school_time); if(r.meet_time) r.meet_time = normalizeMeetTime(r.meet_time); if(r.call_time) r.call_time = normalizeCallTime(r.call_time); capitalizeRecordTextFields(r); });
    if(key==='members') m.data = sortPoshakFirst(m.data);
    saveData(key);
  });

  if(versionMismatch){
    try{ localStorage.setItem('yuvaSabhaDataVersion', DATA_VERSION); }catch(e){}
  }
  applyActiveStatusOverrides(MODULES.members.data);
  reconcileSignupEmails();
  if(currentModule==='dashboard' && document.getElementById('dashboardView') && !document.getElementById('dashboardView').classList.contains('hidden')){
    renderDashboard();
  }
  if(typeof renderSidebarStats==='function') renderSidebarStats();
}
function reconcileSignupEmails(){
  // If member data was refreshed from seed, signed-up emails live only in the
  // credentials list — copy them back onto the matching member records (by SMK).
  try{
    const creds = loadSignupCredentials();
    if(!creds.length) return;
    let changed = false;
    (MODULES.members.data||[]).forEach(rec => {
      if(rec.email) return;
      const cred = creds.find(c => c.smk && rec.smk && String(c.smk).trim().toUpperCase()===String(rec.smk).trim().toUpperCase());
      if(cred && cred.email){ rec.email = cred.email; changed = true; }
    });
    if(changed) saveData('members');
  }catch(e){}
}
const TOP_ORDER_ROLES = ['ઝોન પ્રેસિડન્ટ', 'બાળ યુવા મુખ્ય', 'રીજીયન હેડ', 'સંચાલક'];
function sortPoshakFirst(list){
  // Fixed sequence at the very top: the 4 leadership roles (in this exact order),
  // then Poshak Leaders, then everyone else — this order must hold even after new
  // members get added, so we rank by role rather than by any manual sort.
  const rankOf = r => {
    const topIdx = TOP_ORDER_ROLES.indexOf(r.role);
    if(topIdx !== -1) return topIdx; // 0..3, in the fixed sequence
    if(r.role === 'પોષક લીડર') return 10;
    return 20;
  };
  return list.slice().sort((a,b) => rankOf(a) - rankOf(b)); // stable sort: keeps existing relative order within each rank
}
function saveData(moduleKey){
  const m = MODULES[moduleKey || currentModule];
  try{ localStorage.setItem(m.storageKey, JSON.stringify(m.data)); }catch(e){}
}

/* ===================== TOAST ===================== */
let _toastHideTimer = null;
function showToast(msg, duration){
  document.getElementById('toastMsg').textContent = msg;
  const t = document.getElementById('toast');
  if(_toastHideTimer){ clearTimeout(_toastHideTimer); _toastHideTimer = null; }
  t.className='show';
  _toastHideTimer = setTimeout(()=>{ t.className=''; _toastHideTimer = null; }, duration || 3000);
}

/* ===================== HELPERS ===================== */
function esc(s){ return (s===undefined||s===null) ? '' : String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function driveImgUrl(url, size){
  if(!url) return '';
  const m = String(url).match(/[-\w]{25,}/); // Google Drive file IDs are long alphanumeric strings
  if(!m) return url;
  return `https://lh3.googleusercontent.com/d/${m[0]}=s${size || 2000}`; // large by default — only pass a small size explicitly for tiny circle avatars
}
function avatarHtml(m, sizeClass, clickable){
  // A photo the member uploaded themselves always takes priority over the old
  // Drive-link photo from the original form. Own uploads serve the same file both
  // small and large; Drive photos need a SMALL thumbnail for the little circle but
  // the FULL/large version when opened in the lightbox — using the small one for both
  // was exactly what made the enlarged view look torn/pixelated.
  const ownPhoto = m.own_photo_data || '';
  const thumbImg = ownPhoto || driveImgUrl(m.photo_url, 160);
  const fullImg = ownPhoto || driveImgUrl(m.photo_url, 2000);
  const initials = esc(m.initials||'');
  const clickAttr = (clickable && fullImg) ? ` onclick="openPhotoLightbox('${esc(fullImg).replace(/'/g,"\\'")}')" style="cursor:pointer"` : '';
  if(!thumbImg) return `<div class="${sizeClass} rounded-full bg-crm-primary/10 text-crm-primary flex items-center justify-center text-[11px] font-semibold shrink-0">${initials}</div>`;
  return `<div class="${sizeClass} rounded-full overflow-hidden shrink-0 relative bg-crm-primary/10"${clickAttr}>
      <img src="${esc(thumbImg)}" alt="${initials}" class="w-full h-full object-cover" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
      <div class="w-full h-full absolute inset-0 items-center justify-center text-crm-primary text-[11px] font-semibold" style="display:none">${initials}</div>
    </div>`;
}
/* ---- Member photo upload (compressed + stored as base64 on the record) ---- */
function handleOwnPhotoUpload(event){
  const file = event.target.files && event.target.files[0];
  const statusEl = document.getElementById('ownPhotoUploadStatus');
  if(!file) return;
  if(!file.type.startsWith('image/')){
    if(statusEl) statusEl.textContent = 'Please choose an image file.';
    return;
  }
  if(statusEl) statusEl.textContent = 'Uploading…';
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      // Resize down to a size appropriate for a profile photo. Earlier this allowed
      // up to 2400px at 95% quality — that can produce a 1-2MB+ base64 string, which
      // is large enough to overflow the database column storing this record and
      // silently truncate/corrupt the row's data (this is exactly what was making
      // first_name/father_name/surname disappear on refresh after a photo upload —
      // only the fields stored BEFORE the truncation point survived). A profile
      // circle + lightbox view never needs more than ~600px.
      const MAX = 600;
      let w = img.width, h = img.height;
      if(w > MAX || h > MAX){
        if(w > h){ h = Math.round(h * MAX / w); w = MAX; }
        else { w = Math.round(w * MAX / h); h = MAX; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.75);

      const hidden = document.getElementById('ownPhotoDataField');
      if(hidden) hidden.value = dataUrl;
      recDraft['own_photo_data'] = dataUrl;

      const previewWrap = document.getElementById('ownPhotoPreviewWrap');
      const preview = document.getElementById('ownPhotoPreview');
      const removeBtn = document.getElementById('ownPhotoRemoveBtn');
      if(preview){ preview.src = dataUrl; preview.dataset.full = dataUrl; }
      if(previewWrap) previewWrap.classList.remove('hidden');
      if(removeBtn) removeBtn.classList.remove('hidden'); // now a real upload exists, so it can be removed
      if(statusEl){
        statusEl.textContent = (dataUrl.length > 300000)
          ? '⚠️ Photo ready, but still large — if Save fails, try a smaller/simpler photo.'
          : 'Photo ready — click Save Details to keep it.';
      }
    };
    img.onerror = () => { if(statusEl) statusEl.textContent = 'Could not read that image.'; };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function confirmRemoveOwnPhoto(){
  openConfirmModal(
    'Remove this photo?',
    'You can upload a new one afterwards. This takes effect once you click Save Details.',
    () => {
      const hidden = document.getElementById('ownPhotoDataField');
      if(hidden) hidden.value = '';
      recDraft['own_photo_data'] = '';
      const previewWrap = document.getElementById('ownPhotoPreviewWrap');
      if(previewWrap) previewWrap.classList.add('hidden');
      const statusEl = document.getElementById('ownPhotoUploadStatus');
      if(statusEl) statusEl.textContent = 'Photo removed — click Save Details to confirm.';
    },
    { confirmLabel: 'Remove', confirmClass: 'bg-red-600 hover:bg-red-700' }
  );
}
function openPhotoLightbox(url){
  if(!url) return;
  document.getElementById('photoLightboxImg').src = url;
  document.getElementById('photoLightbox').style.display = 'flex';
}
function closePhotoLightbox(){
  document.getElementById('photoLightbox').style.display = 'none';
  document.getElementById('photoLightboxImg').src = '';
}
// Standard behavior: Escape closes the lightbox from anywhere, no need to click a
// specific spot.
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    const lb = document.getElementById('photoLightbox');
    if(lb && lb.style.display === 'flex') closePhotoLightbox();
  }
});
async function downloadLightboxImage(){
  const url = document.getElementById('photoLightboxImg').src;
  if(!url) return;
  // A member's own upload is already a same-origin data: URL — the download attribute
  // works natively for that, no fetch needed.
  if(url.startsWith('data:')){
    const a = document.createElement('a');
    a.href = url; a.download = 'photo.jpg';
    document.body.appendChild(a); a.click(); a.remove();
    return;
  }
  // A Drive-hosted photo is cross-origin — a plain <a download> gets ignored by
  // browsers for cross-origin links (that's why it was opening a Google page instead
  // of downloading). Fetching the bytes ourselves and downloading the resulting blob
  // forces a real, single-click download regardless of origin.
  try{
    const res = await fetch(url, { mode: 'cors' });
    if(!res.ok) throw new Error('fetch failed');
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl; a.download = 'photo.jpg';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 4000);
  }catch(e){
    showToast('ડાયરેક્ટ ડાઉનલોડ ના થયું — ફોટો નવા ટેબમાં ખૂલે છે, ત્યાંથી "Save Image As" કરી શકશો.');
    window.open(url, '_blank');
  }
}
function formatDateTime(input){
  const d = new Date(input);
  if(isNaN(d)) return '';
  const pad = n => String(n).padStart(2,'0');
  let h = d.getHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if(h===0) h = 12;
  return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}, ${pad(h)}:${pad(d.getMinutes())} ${ampm}`;
}
function formatDateOnly(input){
  const d = new Date(input);
  if(isNaN(d)) return '';
  const pad = n => String(n).padStart(2,'0');
  return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;
}
function isoToDDMMYYYY(iso){
  if(!iso) return '';
  const trimmed = String(iso).trim();
  // MySQL's legacy zero-date default ('0000-00-00', sometimes with a time part
  // like '0000-00-00 00:00:00') is not a real date — it means "never set". Treat
  // it as empty so the field shows the blank __/__/____ mask instead of the
  // meaningless '00/00/0000', and so the calendar picker doesn't choke on it.
  if(/^0000-00-00/.test(trimmed)) return '';
  // handle clean YYYY-MM-DD directly (avoids timezone shift issues from Date parsing)
  const cleanMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if(cleanMatch) return `${cleanMatch[3]}/${cleanMatch[2]}/${cleanMatch[1]}`;
  // fallback: try parsing as a general date (handles odd stored formats)
  const d = new Date(iso);
  if(isNaN(d)) return '';
  const pad = n => String(n).padStart(2,'0');
  return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;
}
const DDMY_MASK = '__/__/____';
const DDMY_DIGIT_POS = [0,1,3,4,6,7,8,9]; // index positions in "DD/MM/YYYY" that hold digits
function ddmyDisplayValue(isoValue){
  const ddmy = isoToDDMMYYYY(isoValue);
  return ddmy || DDMY_MASK;
}
// ===================== Multi-entry time-typing widget (Meet Time / Call Time) =====================
// Mirrors the date field's typing convenience — digits auto-advance between segments,
// and 'a'/'p' sets AM/PM — but supports multiple time entries, since a person's real
// availability (e.g. "8-11 AM and 6-10 PM") often doesn't fit into a single slot.
function parseTimeEntriesFromRaw(raw){
  if(!raw) return [];
  const re = /(\d{1,2})(?::?(\d{2}))?\s*([ap]\.?m\.?)?/gi;
  const out = [];
  let m;
  while((m = re.exec(raw)) !== null){
    let hh = parseInt(m[1], 10);
    if(hh < 1 || hh > 12) continue; // skip stray numbers that aren't plausible hours
    const mm = m[2] || '00';
    let ampm = m[3] ? (m[3][0].toLowerCase() === 'a' ? 'AM' : 'PM') : (hh < 8 ? 'AM' : 'PM');
    out.push({ hh: String(hh).padStart(2,'0'), mm, ampm });
  }
  return out;
}
function serializeTimeEntries(fieldKey){
  const wrap = document.querySelector(`.time-multi-wrap[data-field-key="${fieldKey}"]`);
  if(!wrap) return;
  const entries = [...wrap.querySelectorAll('.time-entry')].map(row => {
    const hh = row.querySelector('.time-hh').value.trim() || '12';
    const mm = row.querySelector('.time-mm').value.trim() || '00';
    const ampm = row.querySelector('.time-ampm').value.trim().toUpperCase() || 'AM';
    return `${hh}:${mm} ${ampm}`;
  });
  const hidden = wrap.querySelector('input[type="hidden"]');
  hidden.value = entries.join(', ');
  hidden.dispatchEvent(new Event('change', { bubbles: true }));
}
function timeSegInput(e, input, nextSelector, fieldKey){
  const wrap = input.closest('.time-entry');
  input.value = input.value.replace(/[^0-9]/g, '').slice(0, 2);
  if(input.value.length === 2 && nextSelector){
    wrap.querySelector(nextSelector).focus();
    wrap.querySelector(nextSelector).select();
  }
  serializeTimeEntries(fieldKey);
}
function timeAmPmInput(e, input, fieldKey){
  const v = input.value.toLowerCase();
  if(v.includes('a')) input.value = 'AM';
  else if(v.includes('p')) input.value = 'PM';
  else input.value = '';
  serializeTimeEntries(fieldKey);
}
function addTimeEntry(fieldKey){
  const wrap = document.querySelector(`.time-multi-wrap[data-field-key="${fieldKey}"]`);
  const list = wrap.querySelector('.time-entry-list');
  const div = document.createElement('div');
  div.innerHTML = timeEntryRowHtml(fieldKey, { hh:'12', mm:'00', ampm:'PM' }, true);
  list.appendChild(div.firstElementChild);
  serializeTimeEntries(fieldKey);
}
function removeTimeEntry(fieldKey, btn){
  const row = btn.closest('.time-entry');
  row.remove();
  serializeTimeEntries(fieldKey);
}
function timeEntryRowHtml(fieldKey, entry, removable){
  return `<div class="time-entry" style="display:inline-flex;align-items:center;gap:2px;border:1px solid var(--border-color,#ecdfe1);border-radius:8px;padding:4px 6px;margin:2px 6px 2px 0;background:#fff">
    <input type="text" class="time-hh" value="${esc(entry.hh)}" maxlength="2" inputmode="numeric" style="width:22px;text-align:center;border:none;outline:none;font-family:inherit"
      oninput="timeSegInput(event, this, '.time-mm', '${fieldKey}')">
    <span style="color:#7a5a5f">:</span>
    <input type="text" class="time-mm" value="${esc(entry.mm)}" maxlength="2" inputmode="numeric" style="width:22px;text-align:center;border:none;outline:none;font-family:inherit"
      oninput="timeSegInput(event, this, '.time-ampm', '${fieldKey}')">
    <input type="text" class="time-ampm" value="${esc(entry.ampm)}" maxlength="2" style="width:30px;text-align:center;border:none;outline:none;font-family:inherit;text-transform:uppercase"
      oninput="timeAmPmInput(event, this, '${fieldKey}')">
    ${removable ? `<button type="button" onclick="removeTimeEntry('${fieldKey}', this)" style="color:#b0808a;border:none;background:none;cursor:pointer;font-size:14px;padding:0 2px">×</button>` : ''}
  </div>`;
}
function timeMultiFieldHtml(fieldKey, rawValue, disabledAttr){
  const entries = parseTimeEntriesFromRaw(rawValue);
  const rows = entries.length ? entries : [{ hh:'12', mm:'00', ampm:'PM' }];
  const rowsHtml = rows.map((en, i) => timeEntryRowHtml(fieldKey, en, i > 0 || rows.length > 1)).join('');
  const serialized = entries.length ? entries.map(en => `${en.hh}:${en.mm} ${en.ampm}`).join(', ') : (rawValue || '');
  return `<div class="time-multi-wrap" data-field-key="${fieldKey}" ${disabledAttr ? 'style="opacity:.6;pointer-events:none"' : ''}>
    <input type="hidden" data-field="${fieldKey}" value="${esc(serialized)}">
    <div class="time-entry-list" style="display:flex;flex-wrap:wrap;align-items:center">${rowsHtml}</div>
    ${disabledAttr ? '' : `<button type="button" onclick="addTimeEntry('${fieldKey}')" style="font-size:12px;color:#5a0616;border:1px dashed #c9b7ba;border-radius:6px;padding:3px 8px;background:none;cursor:pointer;margin-top:2px"><i class="fas fa-plus" style="font-size:9px;margin-right:3px"></i>Add Time</button>`}
  </div>`;
}
function datePickerFieldHtml(fieldKey, isoValue, disabledAttr, onChangeCall){
  return `<div class="ddmy-wrap">
    <input type="hidden" data-field="${fieldKey}" value="${esc(isoValue||'')}">
    <input type="text" class="ddmy-display" value="${esc(ddmyDisplayValue(isoValue))}"
      inputmode="numeric" maxlength="10" autocomplete="off"
      onkeydown="ddmyKeydown(event, this${onChangeCall ? `, '${onChangeCall}'` : ''})"
      onfocus="ddmyFocus(this)"
      onblur="ddmyBlurReset(this)"
      ${disabledAttr} onclick="${disabledAttr ? '' : `openDatePicker(this${onChangeCall ? `, '${onChangeCall}'` : ''})`}">
    <i class="fas fa-calendar-alt ddmy-icon"></i>
  </div>`;
}
function ddmyFocus(displayInput){
  // Land the cursor on the first empty digit slot so typing continues naturally
  if(!displayInput.value) displayInput.value = DDMY_MASK;
  const firstBlank = DDMY_DIGIT_POS.find(p => displayInput.value[p] === '_');
  const pos = firstBlank !== undefined ? firstBlank : 0;
  setTimeout(() => { try{ displayInput.setSelectionRange(pos, pos); }catch(e){} }, 0);
}
function ddmyPrevDigitPos(pos){
  const before = DDMY_DIGIT_POS.filter(p => p < pos);
  return before.length ? before[before.length-1] : DDMY_DIGIT_POS[0];
}
function ddmyNextDigitPos(pos){
  const after = DDMY_DIGIT_POS.filter(p => p > pos);
  return after.length ? after[0] : null;
}
function ddmyKeydown(e, displayInput, onChangeCall){
  const key = e.key;
  const navKeys = ['ArrowLeft','ArrowRight','Tab','Home','End'];
  if(navKeys.includes(key)) return; // let the browser handle cursor movement normally

  if(key === 'Backspace'){
    e.preventDefault();
    const pos = displayInput.selectionStart;
    const target = DDMY_DIGIT_POS.includes(pos - 1) ? pos - 1 : ddmyPrevDigitPos(pos);
    const chars = (displayInput.value || DDMY_MASK).padEnd(10,'_').split('');
    chars[2] = '/'; chars[5] = '/';
    chars[target] = '_';
    displayInput.value = chars.join('');
    displayInput.setSelectionRange(target, target);
    const hidden = displayInput.previousElementSibling;
    hidden.value = ''; // any edit invalidates the previously committed date
    return;
  }

  if(key === 'Delete'){
    e.preventDefault();
    return; // keep it simple — Backspace is the supported way to clear a digit
  }

  if(key === 'Enter'){
    displayInput.blur();
    return;
  }

  if(!/^[0-9]$/.test(key)){
    e.preventDefault();
    return; // block all non-digit characters — slashes are automatic, never typed
  }

  e.preventDefault();
  let pos = displayInput.selectionStart;
  if(!DDMY_DIGIT_POS.includes(pos)){
    // cursor is sitting on a slash or off the mask — snap forward to the next digit slot
    const next = DDMY_DIGIT_POS.find(p => p >= pos);
    pos = next !== undefined ? next : DDMY_DIGIT_POS[DDMY_DIGIT_POS.length - 1];
  }
  const chars = (displayInput.value || DDMY_MASK).padEnd(10,'_').split('');
  chars[2] = '/'; chars[5] = '/';
  chars[pos] = key;
  displayInput.value = chars.join('');

  const nextPos = ddmyNextDigitPos(pos);
  displayInput.setSelectionRange(nextPos !== null ? nextPos : pos + 1, nextPos !== null ? nextPos : pos + 1);

  ddmyMaybeCommit(displayInput, onChangeCall);
}
function ddmyMaybeCommit(displayInput, onChangeCall){
  const val = displayInput.value;
  if(val.includes('_')) return; // still mid-entry — nothing to commit yet
  const m = val.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  const hidden = displayInput.previousElementSibling;
  if(!m){ hidden.value = ''; return; }
  const dd = Number(m[1]), mm = Number(m[2]), yyyy = Number(m[3]);
  const d = new Date(yyyy, mm-1, dd);
  const isValid = d.getFullYear()===yyyy && d.getMonth()===mm-1 && d.getDate()===dd;
  if(!isValid){ hidden.value = ''; return; }
  const pad = n => String(n).padStart(2,'0');
  const iso = `${yyyy}-${pad(mm)}-${pad(dd)}`;
  hidden.value = iso;
  // Keep an already-open calendar picker for this same field in sync
  if(dpTargetHidden === hidden){
    dpViewYear = yyyy; dpViewMonth = mm-1;
    renderDatePickerCalendar();
  }
  if(onChangeCall) window[onChangeCall]();
}
function ddmyBlurReset(displayInput){
  // Leaving the field with an incomplete/invalid entry — fall back to whatever is
  // actually saved (or the blank mask), so a half-typed date never lingers on screen.
  const hidden = displayInput.previousElementSibling;
  displayInput.value = ddmyDisplayValue(hidden.value);
}
let dpTargetDisplay = null, dpTargetHidden = null, dpViewYear = null, dpViewMonth = null, dpOnChangeCall = null;
// ===================== Custom dropdown for every <select> in the app =====================
// A native <select>'s popup is drawn by the OS/browser, not the page — there is no
// cross-browser way to force it to always open below the field, auto-scroll the page
// to fit, or match the dashboard's own colors. So instead, every select's native popup
// is intercepted and replaced with a small themed panel that behaves exactly like the
// date picker already does: always below the field, auto-scrolling the page (never the
// panel itself) when there isn't room, closing on an outside click or Escape.
let customSelectTarget = null;
document.addEventListener('mousedown', function(e){
  const sel = e.target.closest && e.target.closest('select');
  if(sel && !sel.disabled && !sel.classList.contains('no-custom-dropdown')){
    e.preventDefault();
    openCustomSelectPanel(sel);
    return;
  }
  const msField = e.target.closest && e.target.closest('.ms-dropdown-field');
  if(msField && !msField.dataset.disabled){
    e.preventDefault();
    openMsDropdownPanel(msField);
    return;
  }
  const panel = document.getElementById('customSelectPanel');
  if(panel && !panel.classList.contains('hidden') && !panel.contains(e.target) && !(msField)){
    closeCustomSelectPanel();
  }
});
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeCustomSelectPanel();
});
// Positions a dropdown-style floating panel below a trigger element, scrolling the
// page first if needed (never scrolling inside the panel itself for THIS step), then
// shrinking the panel to whatever space is actually left so its bottom edge is always
// fully on-screen with a visible margin — the list itself scrolls internally
// (overflow-y:auto) for anything that doesn't fit. This is what "the calendar already
// does this" refers to, extended to also clamp panel height instead of assuming the
// scroll always creates enough room.
// Caps the panel to a FIXED height of exactly 7 rows (measured from the real first-7
// rendered rows, not guessed) — the panel is always this same small, predictable size.
// Anything beyond 7 options scrolls INSIDE the panel (overflow-y:auto) instead of
// growing the panel itself. Page-level auto-scroll (positionDropdownPanel) still
// applies on top of this when the field is near the bottom of the page.
const DROPDOWN_MAX_ROWS = 7;
function applyFixedRowCap(panel){
  const allItems = panel.querySelectorAll('.custom-select-opt');
  const realItems = panel.querySelectorAll('.custom-select-opt:not(.custom-select-placeholder)');
  if(realItems.length <= DROPDOWN_MAX_ROWS){
    panel.style.maxHeight = '';
    panel.style.overflowY = '';
    return;
  }
  // Cap height = the placeholder row (if present) + 7 real rows, measured from the
  // actual rendered rows so it always matches the true row height exactly.
  const rowsToMeasure = Math.min(allItems.length, DROPDOWN_MAX_ROWS + (allItems.length - realItems.length));
  let sumH = 0;
  for(let i = 0; i < rowsToMeasure; i++) sumH += allItems[i].getBoundingClientRect().height;
  const containerPadding = 12; // matches the panel's own padding:6px top+bottom
  panel.style.maxHeight = (sumH + containerPadding) + 'px';
  panel.style.overflowY = 'auto';
}
// Measures the panel's true VISIBLE height (after applyFixedRowCap) — clientHeight is
// used deliberately instead of scrollHeight, because scrollHeight always reports the
// full, uncapped content height even when max-height + overflow-y:auto is clamping what's
// actually shown. Using scrollHeight here was the bug: it made a 26-item list (scrollHeight
// ~900px) scroll the page as if the whole 900px needed to fit, when the panel was really
// only ~250px tall on screen (7 rows) — causing massive over-scroll that threw the panel to
// the top of the page, nowhere near the field.
function measurePanelNaturalHeight(panel){
  return panel.clientHeight;
}
// Positions a dropdown panel exactly the way the calendar (openDatePicker) already
// does: always opens below the field, and if there isn't room, scrolls the whole page
// down by however much is needed.
let activeScrollRoomParent = null; // tracks any temporary scroll-room padding so it can be cleaned up on close
let scrollRoomBasePad = 0; // the container's ORIGINAL padding-bottom (computed once, not re-read while active)
let scrollRoomOrigInline = ''; // the container's original inline paddingBottom style, for exact restore
function ensureScrollRoom(scrollParent, neededExtra){
  // Adds temporary bottom padding to the scroll CONTAINER itself (never touching the
  // trigger field's own row/cell) so there's genuinely enough room to scroll into, even
  // when the current tab's content doesn't already overflow that far. This intentionally
  // does NOT insert anything into the visual flow near the field — that was tried and
  // caused the field's own row/grid-cell (or a small fixed-size modal like Sign In) to
  // stretch and distort, pushing sibling fields or the modal's own later content far down.
  // The base padding is measured ONCE per open (not re-read via getComputedStyle on every
  // call), avoiding any dependency on a freshly-set style being reflected in time.
  if(activeScrollRoomParent !== scrollParent){
    restoreScrollRoom();
    scrollRoomOrigInline = scrollParent.style.paddingBottom || '';
    scrollRoomBasePad = parseFloat(getComputedStyle(scrollParent).paddingBottom) || 0;
    activeScrollRoomParent = scrollParent;
  }
  scrollParent.style.paddingBottom = (scrollRoomBasePad + neededExtra) + 'px';
}
function restoreScrollRoom(){
  if(activeScrollRoomParent){
    activeScrollRoomParent.style.paddingBottom = scrollRoomOrigInline;
  }
  activeScrollRoomParent = null;
  scrollRoomBasePad = 0;
  scrollRoomOrigInline = '';
}
function positionDropdownPanel(panel, triggerEl){
  const BOTTOM_MARGIN = 16; // keeps a visible gap below the panel, per feedback
  const rect = triggerEl.getBoundingClientRect();
  const panelW = Math.max(rect.width, 180);
  panel.style.width = panelW + 'px'; // set width FIRST — text wrapping (and therefore
  // true height) depends on it, so measuring height before this would use the wrong width.
  let left = rect.left;
  if(left + panelW > window.innerWidth) left = Math.max(4, window.innerWidth - panelW - 4);
  panel.style.left = left + 'px';

  applyFixedRowCap(panel); // cap to 7 rows (with internal scroll for the rest) BEFORE measuring
  const desiredH = measurePanelNaturalHeight(panel); // clientHeight — the true VISIBLE height after the cap

  // Scroll by exactly the amount needed to reveal the panel — never more. Scrolling all
  // the way to the top of the viewport was tried and was too aggressive: it jumped the
  // whole page to y=0 for every dropdown that needed any scroll at all, even a small one.
  const rect0 = triggerEl.getBoundingClientRect();
  const spaceBelow0 = window.innerHeight - rect0.bottom;
  if(spaceBelow0 < desiredH + BOTTOM_MARGIN){
    const SAFETY_BUFFER = 20; // small extra margin against any tiny measurement discrepancy
    const deficit = desiredH + BOTTOM_MARGIN - spaceBelow0 + SAFETY_BUFFER;
    const scrollParent = getDpScrollParent(triggerEl);
    const isWindowScroll = scrollParent === document.scrollingElement || scrollParent === document.documentElement;
    const target = isWindowScroll ? document.body : scrollParent;
    ensureScrollRoom(target, deficit);
    if(isWindowScroll){
      window.scrollBy({ top: deficit, behavior: 'auto' });
    } else {
      scrollParent.scrollTop += deficit;
    }
  }

  const rectFinal = triggerEl.getBoundingClientRect();
  panel.style.top = (rectFinal.bottom + 4) + 'px';

  // Final safety check: verify the panel's ACTUAL rendered bottom edge against the real
  // viewport, and correct with one more small scroll if it's still overflowing by any
  // amount — this only ever adds the exact remaining shortfall, never a full jump to top.
  const panelRect = panel.getBoundingClientRect();
  const overflow = panelRect.bottom - (window.innerHeight - BOTTOM_MARGIN);
  if(overflow > 0){
    const scrollParent = getDpScrollParent(triggerEl);
    if(scrollParent === document.scrollingElement || scrollParent === document.documentElement){
      ensureScrollRoom(document.body, overflow);
      window.scrollBy({ top: overflow, behavior: 'auto' });
    } else {
      ensureScrollRoom(scrollParent, overflow);
      scrollParent.scrollTop += overflow;
    }
    const rectAfter = triggerEl.getBoundingClientRect();
    panel.style.top = (rectAfter.bottom + 4) + 'px';
  }
}
function openCustomSelectPanel(selectEl){
  customSelectTarget = selectEl;
  const panel = document.getElementById('customSelectPanel');
  const key = selectEl.dataset.field;
  const isMasterLinked = key && currentModule==='members' && currentUserRole==='admin' && getAllEditableOptionFields().some(m => m.key === key);
  panel.dataset.searchMode = isMasterLinked ? 'master' : 'plain';
  const searchBarHtml = `<div style="display:flex;gap:6px;padding:2px 2px 6px 2px;border-bottom:1px solid #f0e4e6;margin-bottom:4px">
      <input type="search" id="customSelectSearchInput" placeholder="Search…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" style="flex:1;border:1px solid #ecdfe1;border-radius:6px;padding:5px 8px;font-size:12px;-webkit-appearance:none;appearance:none"
        oninput="filterCustomSelectOptions()" onkeydown="if(event.key==='Enter'){ event.preventDefault(); addCustomSelectOptionIfNoMatch(); }">
      ${isMasterLinked ? `<button type="button" onclick="addCustomSelectOptionIfNoMatch()" title="Add as new option" style="padding:5px 10px;border-radius:6px;background:var(--maroon,#5a0616);color:#fff;font-size:12px;border:none;cursor:pointer;shrink:0"><i class="fas fa-plus"></i></button>` : ''}
    </div>`;
  panel.innerHTML = searchBarHtml + `<div id="customSelectOptList"></div>`;
  renderCustomSelectOptList('');
  panel.style.minWidth = '';

  panel.classList.remove('hidden');
  positionDropdownPanel(panel, selectEl);
  const searchInput = document.getElementById('customSelectSearchInput');
  if(searchInput) searchInput.focus();
}
function renderCustomSelectOptList(searchText){
  const selectEl = customSelectTarget;
  if(!selectEl) return;
  const list = document.getElementById('customSelectOptList');
  if(!list) return;
  const q = (searchText||'').trim().toLowerCase();
  const opts = [...selectEl.options].filter(o => !q || o.textContent.toLowerCase().includes(q));
  list.innerHTML = opts.map((o) => {
    const i = [...selectEl.options].indexOf(o);
    return `<div class="custom-select-opt${o.value===selectEl.value ? ' custom-select-opt-active' : ''}${o.value==='' ? ' custom-select-placeholder' : ''}" data-i="${i}"
      style="padding:8px 10px;border-radius:8px;font-size:13px;cursor:pointer;color:${o.value===selectEl.value ? '#5a0616' : '#2a1013'};font-weight:${o.value===selectEl.value ? '600':'400'};background:${o.value===selectEl.value ? '#f7eef0':'transparent'}"
      onmouseover="this.style.background='#f7eef0'" onmouseout="this.style.background='${o.value===selectEl.value ? '#f7eef0':'transparent'}'"
      onclick="chooseCustomSelectOption(${i})">${esc(o.textContent)}</div>`;
  }).join('') || '<div style="padding:8px 10px;font-size:12px;color:#7a5a5f">No matching options</div>';
}
function filterCustomSelectOptions(){
  const input = document.getElementById('customSelectSearchInput');
  renderCustomSelectOptList(input ? input.value : '');
}
function addCustomSelectOptionIfNoMatch(){
  const panel = document.getElementById('customSelectPanel');
  if(!panel || panel.dataset.searchMode !== 'master') return;
  const input = document.getElementById('customSelectSearchInput');
  const value = (input.value || '').trim();
  const selectEl = customSelectTarget;
  if(!value || !selectEl) return;
  const key = selectEl.dataset.field;
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(!entry) return;
  if(entry.list.includes(value)){
    // Already exists — just select it instead of trying to add a duplicate.
    const idx = [...selectEl.options].findIndex(o => o.value === value);
    if(idx !== -1) chooseCustomSelectOption(idx);
    return;
  }
  panel.classList.add('hidden'); // hide the panel the instant the confirm dialog opens — never show both stacked together
  openConfirmModal(
    `Add "${value}"?`,
    `This will add it as a new option for ${entry.label} — available to select right away, everywhere this field appears.`,
    () => {
      entry.list.push(value);
      saveMasterOverride(key);
      // Rebuild the underlying <select>'s options so the new one exists to pick, then select it.
      selectEl.innerHTML = `<option value="">Select…</option>` + entry.list.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('');
      selectEl.value = value;
      selectEl.dispatchEvent(new Event('change', { bubbles: true }));
      closeCustomSelectPanel();
      showToast(`✔ "${value}" added to ${entry.label} and selected.`);
    },
    { confirmLabel: 'Add', confirmClass: 'bg-crm-primary hover:opacity-90', iconClass: 'fas fa-plus', iconWrapClass: 'bg-red-50 text-crm-primary' }
  );
}
function closeCustomSelectPanel(){
  const panel = document.getElementById('customSelectPanel');
  if(panel) panel.classList.add('hidden');
  customSelectTarget = null;
  customMsField = null;
  restoreScrollRoom();
}
function chooseCustomSelectOption(idx){
  if(!customSelectTarget) return;
  customSelectTarget.selectedIndex = idx;
  customSelectTarget.dispatchEvent(new Event('change', { bubbles: true }));
  closeCustomSelectPanel();
}
let customMsField = null;
function openMsDropdownPanel(fieldEl){
  customMsField = fieldEl;
  const key = fieldEl.dataset.msKey;
  const isMasterLinked = key && currentModule==='members' && currentUserRole==='admin' && getAllEditableOptionFields().some(m => m.key === key);
  const opts = JSON.parse(fieldEl.dataset.msOptions || '[]');
  const hasOther = opts.includes('Other');
  const panel = document.getElementById('customSelectPanel');
  panel.dataset.searchMode = (isMasterLinked || hasOther) ? 'master' : 'plain';
  const showAddBtn = isMasterLinked || hasOther;
  const searchBarHtml = `<div style="display:flex;gap:6px;padding:2px 2px 6px 2px;border-bottom:1px solid #f0e4e6;margin-bottom:4px">
      <input type="search" id="msSearchInput" placeholder="Search…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-lpignore="true" data-1p-ignore="true" data-bwignore="true" style="flex:1;border:1px solid #ecdfe1;border-radius:6px;padding:5px 8px;font-size:12px;-webkit-appearance:none;appearance:none"
        oninput="filterMsOptions()" onkeydown="if(event.key==='Enter'){ event.preventDefault(); addMsOptionIfNoMatch(); }">
      ${showAddBtn ? `<button type="button" onclick="addMsOptionIfNoMatch()" title="Add as new option" style="padding:5px 10px;border-radius:6px;background:var(--maroon,#5a0616);color:#fff;font-size:12px;border:none;cursor:pointer;shrink:0"><i class="fas fa-plus"></i></button>` : ''}
    </div>`;
  panel.innerHTML = searchBarHtml + `<div id="msOptList"></div>`;
  renderMsOptList('');
  panel.style.minWidth = '';

  panel.classList.remove('hidden');
  positionDropdownPanel(panel, fieldEl);
  const searchInput = document.getElementById('msSearchInput');
  if(searchInput) searchInput.focus();
}
function renderMsOptList(searchText){
  const fieldEl = customMsField;
  if(!fieldEl) return;
  const list = document.getElementById('msOptList');
  if(!list) return;
  const opts = JSON.parse(fieldEl.dataset.msOptions || '[]');
  const hidden = fieldEl.nextElementSibling;
  const selected = (hidden.value || '').split(',').map(s=>s.trim()).filter(Boolean);
  // Anything already selected that ISN'T one of the standard options (a custom value
  // typed in earlier, or older free-text data now migrated in) still needs its own
  // checked row — otherwise it would silently vanish from view even though it's saved.
  const customSelected = selected.filter(s => !opts.includes(s) && s !== 'Other');
  const allRows = [...opts.filter(o => o !== 'Other'), ...customSelected];
  const q = (searchText||'').trim().toLowerCase();
  const filtered = allRows.filter(o => !q || o.toLowerCase().includes(q));
  list.innerHTML = filtered.map((o) => {
    const isSel = selected.includes(o);
    const isCustomRow = customSelected.includes(o);
    return `<div class="custom-select-opt" data-val="${esc(o)}"
      style="padding:8px 10px;border-radius:8px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:8px;color:${isSel?'#5a0616':'#2a1013'};font-weight:${isSel?'600':'400'};background:${isSel?'#f7eef0':'transparent'}"
      onmouseover="this.style.background='#f7eef0'" onmouseout="this.style.background='${isSel?'#f7eef0':'transparent'}'"
      onclick="toggleMsOptionByValue(&quot;${esc(o).replace(/&quot;/g,'&amp;quot;')}&quot;)"><i class="fas ${isSel?'fa-square-check':'fa-square'}" style="font-size:13px;color:${isSel?'#5a0616':'#c9b7ba'}"></i> ${esc(o)}${isCustomRow?' <span style="font-size:10px;color:#a98a8f">(custom)</span>':''}</div>`;
  }).join('') || '<div style="padding:8px 10px;font-size:12px;color:#7a5a5f">No matching options</div>';
}
function filterMsOptions(){
  const input = document.getElementById('msSearchInput');
  renderMsOptList(input ? input.value : '');
}
function addMsOptionIfNoMatch(){
  const input = document.getElementById('msSearchInput');
  const value = (input && input.value || '').trim();
  const fieldEl = customMsField;
  if(!value || !fieldEl) return;
  const key = fieldEl.dataset.msKey;
  const entry = getAllEditableOptionFields().find(m => m.key === key);
  if(entry){
    // Master-linked: add straight into the shared master list, with confirmation.
    if(entry.list.includes(value)){ toggleMsOptionByValue(value); closeCustomSelectPanel(); return; }
    document.getElementById('customSelectPanel').classList.add('hidden'); // hide immediately — never show the panel stacked behind the confirm dialog
    openConfirmModal(
      `Add "${value}"?`,
      `This will add it as a new option for ${entry.label} — available to select right away, everywhere this field appears.`,
      () => {
        entry.list.push(value);
        saveMasterOverride(key);
        fieldEl.dataset.msOptions = JSON.stringify(entry.list); // the field's dropdown reads from THIS snapshot, not entry.list directly — must refresh it or the new option silently wouldn't show
        toggleMsOptionByValue(value); // selects it
        closeCustomSelectPanel(); // done — no need to leave the search/no-match state showing
        showToast(`✔ "${value}" added to ${entry.label} and selected.`);
      },
      { confirmLabel: 'Add', confirmClass: 'bg-crm-primary hover:opacity-90', iconClass: 'fas fa-plus', iconWrapClass: 'bg-red-50 text-crm-primary' }
    );
    return; // the search box is left as-is until the person actually confirms or cancels
  } else {
    // Not master-linked (e.g. sabha_transport's "Other") — just a one-off custom value for this member, no master sync.
    toggleMsOptionByValue(value);
    closeCustomSelectPanel();
  }
  if(input) input.value = '';
}
function toggleMsOptionByValue(value){
  if(!customMsField || value === 'Other') return; // "Other" itself is just the trigger row's label, not a selectable value
  const hidden = customMsField.nextElementSibling;
  let selected = (hidden.value || '').split(',').map(s=>s.trim()).filter(Boolean);
  if(selected.includes(value)) selected = selected.filter(x => x !== value);
  else selected.push(value);
  hidden.value = selected.join(', ');
  hidden.dispatchEvent(new Event('change', { bubbles: true }));
  const summarySpan = customMsField.querySelector('span');
  if(summarySpan){
    summarySpan.textContent = selected.length ? selected.join(', ') : 'Select…';
    customMsField.style.color = selected.length ? '#2a1013' : '#7a5a5f';
  }
  const searchVal = document.getElementById('msSearchInput') ? document.getElementById('msSearchInput').value : '';
  renderMsOptList(searchVal); // re-render just the list so the checkmark updates, without losing search text or focus
}
function getDpScrollParent(el){
  // The app's <body> is overflow:hidden with a fixed height:100vh layout — scrolling
  // window/body is ALWAYS a dead end here (window.scrollBy does nothing, and padding
  // added to an overflow:hidden body can't create scroll capability). The one true
  // scrollable container is always the nearest CSS overflow-y:auto/scroll ancestor
  // (normally <main>) — selected here regardless of whether it currently overflows,
  // since ensureScrollRoom() can make room on demand exactly when a dropdown needs it.
  // Requiring pre-existing overflow was the actual bug: a short tab (e.g. Seva, only
  // 6 fields) doesn't overflow <main> BEFORE the dropdown opens, so the old check
  // skipped straight past main to the broken body/window fallback and never scrolled.
  let node = el.parentElement;
  while(node && node !== document.body){
    const style = getComputedStyle(node);
    if(/(auto|scroll)/.test(style.overflowY)){
      return node;
    }
    node = node.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}
function openDatePicker(displayInput, onChangeCall){
  dpTargetDisplay = displayInput;
  dpTargetHidden = displayInput.previousElementSibling;
  dpOnChangeCall = onChangeCall || null;
  const iso = dpTargetHidden.value;
  // A stored value that isn't a real date (MySQL's '0000-00-00' zero-date, or
  // anything else JS can't parse) must not reach `new Date()` as-is — that
  // produces an Invalid Date, whose getFullYear()/getMonth() are NaN, which is
  // exactly what left the calendar grid rendering with no day numbers at all.
  // Fall back to today's month/year for the view in that case.
  const parsed = iso ? new Date(iso) : null;
  const d = (parsed && !isNaN(parsed)) ? parsed : new Date();
  dpViewYear = d.getFullYear();
  dpViewMonth = d.getMonth();

  const dp = document.getElementById('globalDatePicker');
  dp.style.maxHeight = '';
  dp.style.overflowY = '';
  // Unhide BEFORE building the grid — building the day-grid while the container is
  // still display:none is what left it blank on the very first open (mobile Safari
  // in particular won't lay out freshly-injected CSS Grid content inside a hidden
  // ancestor). Reselecting month/year afterward re-triggered the render while the
  // picker was already visible, which is why it only ever "fixed itself" then.
  dp.classList.remove('hidden');
  renderDatePickerCalendar();

  // Position exactly like the dropdown panel system (positionDropdownPanel): measure
  // the picker's TRUE rendered height (not a guessed constant), use ensureScrollRoom()
  // to actually create scrollable space in the container — never assuming the tab's
  // existing content already overflows that far — then scroll by only the deficit,
  // and finally re-check the picker's real rendered bottom edge once more. A field
  // sitting at the very end of a short tab has NO natural scroll room to begin with,
  // so skipping ensureScrollRoom() (as this used to) left nowhere to scroll into and
  // the calendar was cut off by the viewport edge exactly like this.
  const BOTTOM_MARGIN = 16;
  const rect0 = displayInput.getBoundingClientRect();
  const pickerW = 260;
  const desiredH = dp.offsetHeight;
  const spaceBelow0 = window.innerHeight - rect0.bottom;
  if(spaceBelow0 < desiredH + BOTTOM_MARGIN){
    const SAFETY_BUFFER = 20;
    const deficit = desiredH + BOTTOM_MARGIN - spaceBelow0 + SAFETY_BUFFER;
    const scrollParent = getDpScrollParent(displayInput);
    const isWindowScroll = scrollParent === document.scrollingElement || scrollParent === document.documentElement;
    const target = isWindowScroll ? document.body : scrollParent;
    ensureScrollRoom(target, deficit);
    if(isWindowScroll){
      window.scrollBy({ top: deficit, behavior: 'auto' });
    } else {
      scrollParent.scrollTop += deficit;
    }
  }

  const rect = displayInput.getBoundingClientRect();
  let left = rect.left;
  if(left + pickerW > window.innerWidth) left = Math.max(4, window.innerWidth - pickerW - 4);
  dp.style.left = left + 'px';
  dp.style.top = (rect.bottom + 4) + 'px';

  // Final safety check: verify the picker's ACTUAL rendered bottom edge against the
  // real viewport, and correct with one more small scroll if it's still overflowing —
  // this only ever adds the exact remaining shortfall, never a full jump to top.
  const dpRect = dp.getBoundingClientRect();
  const overflow = dpRect.bottom - (window.innerHeight - BOTTOM_MARGIN);
  if(overflow > 0){
    const scrollParent = getDpScrollParent(displayInput);
    if(scrollParent === document.scrollingElement || scrollParent === document.documentElement){
      ensureScrollRoom(document.body, overflow);
      window.scrollBy({ top: overflow, behavior: 'auto' });
    } else {
      ensureScrollRoom(scrollParent, overflow);
      scrollParent.scrollTop += overflow;
    }
    const rectAfter = displayInput.getBoundingClientRect();
    dp.style.top = (rectAfter.bottom + 4) + 'px';
  }
}
function dpChangeMonth(delta){
  dpViewMonth += delta;
  if(dpViewMonth < 0){ dpViewMonth = 11; dpViewYear--; }
  if(dpViewMonth > 11){ dpViewMonth = 0; dpViewYear++; }
  renderDatePickerCalendar();
}
function dpSelectMonth(monthIdx){
  dpViewMonth = Number(monthIdx);
  renderDatePickerCalendar();
}
function dpSelectYear(year){
  dpViewYear = Number(year);
  renderDatePickerCalendar();
}
function renderDatePickerCalendar(){
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  // Month dropdown
  const monthSel = document.getElementById('dpMonthSelect');
  monthSel.innerHTML = monthNames.map((m,i)=>`<option value="${i}" ${i===dpViewMonth?'selected':''}>${m}</option>`).join('');
  // Year dropdown — typeable range covering birth years through the present, plus a
  // little headroom. Native <select> supports jump-to-typed-year out of the box.
  const yearSel = document.getElementById('dpYearSelect');
  const nowYear = new Date().getFullYear();
  const minYear = 1950, maxYear = nowYear + 1;
  let yearOpts = '';
  for(let y=maxYear; y>=minYear; y--){ yearOpts += `<option value="${y}" ${y===dpViewYear?'selected':''}>${y}</option>`; }
  yearSel.innerHTML = yearOpts;
  const firstDay = new Date(dpViewYear, dpViewMonth, 1).getDay();
  const daysInMonth = new Date(dpViewYear, dpViewMonth+1, 0).getDate();
  const selectedIso = dpTargetHidden ? dpTargetHidden.value : '';
  const pad = n => String(n).padStart(2,'0');
  let html = ['Su','Mo','Tu','We','Th','Fr','Sa'].map(d=>`<div class="dp-day-header">${d}</div>`).join('');
  for(let i=0;i<firstDay;i++) html += '<div></div>';
  for(let day=1; day<=daysInMonth; day++){
    const iso = `${dpViewYear}-${pad(dpViewMonth+1)}-${pad(day)}`;
    html += `<div class="dp-day ${iso===selectedIso?'dp-day-selected':''}" onclick="selectDatePickerDay(${day})">${day}</div>`;
  }
  document.getElementById('dpGrid').innerHTML = html;
}
function selectDatePickerDay(day){
  const pad = n => String(n).padStart(2,'0');
  const iso = `${dpViewYear}-${pad(dpViewMonth+1)}-${pad(day)}`;
  dpTargetHidden.value = iso;
  dpTargetDisplay.value = isoToDDMMYYYY(iso);
  if(dpOnChangeCall) window[dpOnChangeCall]();
  closeDatePicker();
}
function clearDatePicker(){
  if(dpTargetHidden){ dpTargetHidden.value = ''; dpTargetDisplay.value = DDMY_MASK; if(dpOnChangeCall) window[dpOnChangeCall](); }
  closeDatePicker();
}
function closeDatePicker(){
  document.getElementById('globalDatePicker').classList.add('hidden');
  dpTargetDisplay = null; dpTargetHidden = null; dpOnChangeCall = null;
}
document.addEventListener('click', function(e){
  const dp = document.getElementById('globalDatePicker');
  if(dp && !dp.classList.contains('hidden') && !dp.contains(e.target) && !e.target.classList.contains('ddmy-display')){
    closeDatePicker();
  }
});
function levelClass(level){
  if(level==='strong') return 'lvl-strong';
  if(level==='weak') return 'lvl-weak';
  return 'lvl-medium';
}

/* ===================== SIDEBAR TOGGLE ===================== */
function toggleSidebar(){
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebarBtn');
  const isClosed = sidebar.classList.contains('w-0');
  if(isClosed){
    sidebar.classList.remove('w-0');
    sidebar.classList.add('w-64');
    openBtn.classList.add('hidden');
    openBtn.classList.remove('flex');
  } else {
    sidebar.classList.remove('w-64');
    sidebar.classList.add('w-0');
    openBtn.classList.remove('hidden');
    openBtn.classList.add('flex');
  }
}

/* ===================== MODULE SWITCH ===================== */
let switchModuleNavToken = 0;
/* ==================================================================================
   UNSAVED CHANGES GUARD — applies to every editable form in the app (Reporting editor,
   Seva Samiti form, and any future one added the same way). Typing/uploading/changing
   anything inside one of the watched containers marks the form "dirty"; trying to
   switch to a different tab while dirty is intercepted and the person must explicitly
   choose to leave without saving (or cancel and go back to save first) — so accidental
   taps never silently lose their work.
   ================================================================================== */
let isFormDirty = false;
const DIRTY_GUARD_CONTAINER_IDS = ['reportingEditorView', 'sevaSamitiView', 'yscView', 'mastersView'];
function markFormDirty(){ isFormDirty = true; }
function clearFormDirty(){ isFormDirty = false; }
document.addEventListener('input', (e) => {
  if(DIRTY_GUARD_CONTAINER_IDS.some(id => {
    const el = document.getElementById(id);
    return el && !el.classList.contains('hidden') && el.contains(e.target);
  })) markFormDirty();
});
document.addEventListener('change', (e) => {
  if(DIRTY_GUARD_CONTAINER_IDS.some(id => {
    const el = document.getElementById(id);
    return el && !el.classList.contains('hidden') && el.contains(e.target);
  })) markFormDirty();
});
// Manual entry fields should always start with a capital letter as the person types —
// and the SMK Code specifically (letters + digits) should force ALL its letters to
// uppercase, not just the first one, since it's a formatted code (e.g. "HPS956").
const NO_AUTOCAP_FIELDS = new Set([
  'email','mobile','mobile_raw','mother_mob','father_mob','friend1_mob','friend2_mob','friend3_mob',
  'postal_code','dob','satsang_since','photo_url','own_photo_data','age','score','days_to_bday','result_pct'
]);
document.addEventListener('input', function(e){
  const el = e.target;
  if(!el.matches || !el.closest('#recBody')) return;
  if(!el.matches('input[type="text"], textarea')) return;
  const key = el.dataset.field;
  if(key === 'smk'){
    const pos = el.selectionStart, endPos = el.selectionEnd;
    el.value = el.value.toUpperCase();
    el.setSelectionRange(pos, endPos);
    return;
  }
  if(NO_AUTOCAP_FIELDS.has(key)) return;
  if(el.value.length > 0 && /[a-z]/.test(el.value[0])){
    el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1);
  }
});
window.addEventListener('beforeunload', (e) => {
  if(isFormDirty){ e.preventDefault(); e.returnValue = ''; }
});
function toggleMembersSubmenu(forceOpen){
  const wrap = document.getElementById('membersSubmenuWrap');
  const chevron = document.getElementById('membersSubmenuChevron');
  if(!wrap) return;
  const shouldOpen = forceOpen !== undefined ? forceOpen : wrap.classList.contains('hidden');
  wrap.classList.toggle('hidden', !shouldOpen);
  if(chevron) chevron.style.transform = shouldOpen ? 'rotate(180deg)' : '';
}
function switchModule(key){
  if(isFormDirty){
    const reportingVisible = document.getElementById('reportingEditorView') && !document.getElementById('reportingEditorView').classList.contains('hidden');
    const sevaVisible = document.getElementById('sevaSamitiView') && !document.getElementById('sevaSamitiView').classList.contains('hidden');
    if(reportingVisible || sevaVisible){
      openConfirmModal(
        'Unsaved Changes',
        'You have unsaved changes. Save before leaving to keep your work.',
        async () => {
          if(reportingVisible){
            const ok = await saveCurrentReport();
            if(ok && key !== 'reporting') switchModuleReal(key);
          } else {
            saveSevaSamiti();
            switchModuleReal(key);
          }
        },
        { confirmLabel: 'Save', confirmClass: 'bg-emerald-600 hover:bg-emerald-700',
          cancelLabel: 'Leave Unsaved', onLeave: () => { switchModuleReal(key); } }
      );
    } else {
      // No single "save everything" action exists here (Yuva Sabha-C content and
      // Masters/Custom Fields are each saved individually, per card/field, via their
      // own Save buttons) — so rather than a misleading "Save" button that wouldn't
      // actually persist anything, this simply offers to stay (so the person can find
      // and press the right Save button themselves) or leave and discard the typing.
      openConfirmModal(
        'Unsaved Changes',
        'You have unsaved changes on this page. Go back and save them, or leave without saving?',
        () => {}, // "Cancel" — just closes the popup, stays exactly where they are
        { confirmLabel: 'Cancel', confirmClass: 'bg-slate-600 hover:bg-slate-700',
          cancelLabel: 'Leave Unsaved', onLeave: () => { switchModuleReal(key); } }
      );
    }
    return;
  }
  switchModuleReal(key);
}

async function switchModuleReal(key){
  // Guards against a race where switching away (e.g. exiting a Member View preview,
  // or clicking another nav item quickly) leaves a PREVIOUS switchModule() call's
  // "await loadXFromBackend()" still pending in the background. When that older call
  // finally resolves, it would otherwise blindly re-render as if it were still the
  // active view — even after currentModule/the visible panel has moved on — which is
  // exactly what threw "Cannot read properties of undefined (reading 'columns')"
  // (a stale members-view render firing after the person had already navigated to
  // Dashboard). Each call captures its own token; a stale call's post-await code
  // checks the token and quietly bails out if a newer navigation has since happened.
  const myNavToken = ++switchModuleNavToken;
  currentPage = 1;
  clearReportPrintState();
  // Reset EVERY nav item's active highlight here, once, up front — this makes the many
  // per-case "remove active from every other nav item" lines below fully redundant
  // (harmless no-ops) rather than a maintenance trap. That per-case pattern is exactly
  // why newly added nav items (like Reporting) kept staying visually "stuck active"
  // after navigating elsewhere: each case's hardcoded reset list needed updating by
  // hand and several were missed. A future nav item added without touching any of
  // those lists will still highlight/un-highlight correctly, automatically.
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  document.getElementById('topSaveAccessBtn').classList.add('hidden');
  document.getElementById('topSaveAccessBtn').classList.remove('flex');
  renderSidebarStats();

  if(key==='masters'){
    currentModule = 'members';
    document.getElementById('navMembers').classList.add('active');
    document.getElementById('navMasters').classList.add('active');
    toggleMembersSubmenu(true);
    document.getElementById('pageTitle').textContent = 'Masters';
    document.getElementById('headerSub').textContent = 'Manage dropdown option lists';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('mastersView');
    populateCfTargetDropdown();
    renderMastersView();
    return;
  }

  if(key==='memberReports'){
    currentModule = 'members';
    document.getElementById('navMembers').classList.add('active');
    document.getElementById('navMemberReports').classList.add('active');
    toggleMembersSubmenu(true);
    document.getElementById('pageTitle').textContent = 'Member Reports';
    document.getElementById('headerSub').textContent = 'Build a custom, filterable report from any member field';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('memberReportsView');
    initMemberReportBuilder();
    return;
  }

  if(key==='users'){
    currentModule = 'members'; // keep cfg() sane; users has its own renderer
    document.getElementById('navDashboard').classList.remove('active');
    document.getElementById('navMembers').classList.remove('active');
    document.getElementById('navUsers').classList.add('active');
    document.getElementById('navApprovals').classList.remove('active');
    document.getElementById('navActivity').classList.remove('active');
    document.getElementById('navNotifications').classList.remove('active');
    document.getElementById('navSevaSamiti').classList.remove('active');
    document.getElementById('navChangePassword').classList.remove('active');
    document.getElementById('navTree').classList.remove('active');
    document.getElementById('navYSC').classList.remove('active');
    document.getElementById('pageTitle').textContent = 'Users';
    document.getElementById('headerSub').textContent = 'Poshak Leaders & signed-up accounts';
    document.getElementById('addBtnWrap').classList.add('hidden');
    document.getElementById('topSaveAccessBtn').classList.remove('hidden');
    document.getElementById('topSaveAccessBtn').classList.add('flex');
    showPanel('usersView');
    renderAllPoshakAccessGrid(); // show cached data immediately
    await loadPermissionsFromBackend(); // then refresh with latest from database
    if(myNavToken !== switchModuleNavToken) return;
    permGridDraft = null; // reset draft so refreshed data isn't overridden
    renderAllPoshakAccessGrid();
    return;
  }

  if(key==='approvals'){
    currentModule = 'members';
    document.getElementById('navDashboard').classList.remove('active');
    document.getElementById('navMembers').classList.remove('active');
    document.getElementById('navUsers').classList.remove('active');
    document.getElementById('navApprovals').classList.add('active');
    document.getElementById('navActivity').classList.remove('active');
    document.getElementById('navNotifications').classList.remove('active');
    document.getElementById('navSevaSamiti').classList.remove('active');
    document.getElementById('navChangePassword').classList.remove('active');
    document.getElementById('navTree').classList.remove('active');
    document.getElementById('navYSC').classList.remove('active');
    document.getElementById('pageTitle').textContent = 'Request Approvals';
    document.getElementById('headerSub').textContent = 'Review and approve pending profile changes';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('approvalsView');
    renderApprovalsTable(); // show cached data immediately
    await loadPendingChangesFromBackend(); // then refresh with latest from database
    if(myNavToken !== switchModuleNavToken) return;
    renderApprovalsTable();
    updateApprovalsBadge();
    return;
  }

  if(key==='activity'){
    currentModule = 'members';
    document.getElementById('navDashboard').classList.remove('active');
    document.getElementById('navMembers').classList.remove('active');
    document.getElementById('navUsers').classList.remove('active');
    document.getElementById('navApprovals').classList.remove('active');
    document.getElementById('navActivity').classList.add('active');
    document.getElementById('navNotifications').classList.remove('active');
    document.getElementById('navSevaSamiti').classList.remove('active');
    document.getElementById('navChangePassword').classList.remove('active');
    document.getElementById('navTree').classList.remove('active');
    document.getElementById('navYSC').classList.remove('active');
    document.getElementById('pageTitle').textContent = 'Activity Log';
    document.getElementById('headerSub').textContent = currentUserRole==='admin' ? 'Login, logout, and edit activity for every user'
      : isPoshakLeader() ? 'Your activity and your group members activity'
      : 'Your own activity';
    document.getElementById('addBtnWrap').classList.add('hidden');
    document.getElementById('clearActivityLogWrap').classList.toggle('hidden', currentUserRole!=='admin');
    showPanel('activityView');
    renderActivityLog(); // show cached data immediately
    await loadActivityLogFromBackend(); // then refresh with latest from database
    if(myNavToken !== switchModuleNavToken) return;
    renderActivityLog();
    return;
  }

  if(key==='notifications'){
    currentModule = 'members';
    document.getElementById('navDashboard').classList.remove('active');
    document.getElementById('navMembers').classList.remove('active');
    document.getElementById('navUsers').classList.remove('active');
    document.getElementById('navApprovals').classList.remove('active');
    document.getElementById('navActivity').classList.remove('active');
    document.getElementById('navNotifications').classList.add('active');
    document.getElementById('navSevaSamiti').classList.remove('active');
    document.getElementById('navChangePassword').classList.remove('active');
    document.getElementById('navTree').classList.remove('active');
    document.getElementById('navYSC').classList.remove('active');
    document.getElementById('pageTitle').textContent = 'Notifications';
    document.getElementById('headerSub').textContent = currentUserRole==='admin' ? 'Send announcements to Yuva Sabhya and Poshak Leaders' : 'Messages from admin';
    document.getElementById('addBtnWrap').classList.add('hidden');
    document.getElementById('notifComposer').classList.toggle('hidden', currentUserRole!=='admin');
    if(currentUserRole==='admin'){ renderNotifRecipientTable(); initNotifDateTime(); }
    showPanel('notificationsView');
    renderNotifications(); // show cached data immediately
    await loadNotificationsFromBackend(); // then refresh with latest from database
    if(myNavToken !== switchModuleNavToken) return;
    renderNotifications();
    updateNotifBadge();
    return;
  }

  if(key==='reporting'){
    currentModule = 'members';
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    document.getElementById('navReporting').classList.add('active');
    document.getElementById('pageTitle').textContent = 'Reporting';
    document.getElementById('headerSub').textContent = 'સભા અહેવાલ — Meeting reports';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('reportingListView');
    if(reportsHasSyncedOnce){
      renderReportsList();
    } else {
      // First time opening Reporting this session — the local cache may be empty even
      // though reports genuinely exist on the server (never fetched to this device
      // yet). Showing "No reports yet" at this point was misleading; show a neutral
      // loading state instead until the very first server sync actually completes.
      document.getElementById('reportsTableBody').innerHTML = `<tr><td colspan="5" class="text-center py-10 text-crm-textMuted"><i class="fas fa-spinner fa-spin mr-2"></i>Loading reports…</td></tr>`;
    }
    syncReportsFromServer().then(() => {
      reportsHasSyncedOnce = true;
      // Always re-render here, regardless of whether syncReportsFromServer() itself
      // found a reason to render internally — if the fetch failed, was skipped
      // (useBackend off), or returned a non-ok response, its own internal render call
      // never runs, and without this, "Loading reports…" would stay on screen forever
      // even though we're done trying and should now show whatever we actually have.
      if(currentModule === 'members' && !document.getElementById('reportingListView').classList.contains('hidden')){
        renderReportsList();
      }
    });
    return;
  }

  if(key==='ysc'){
    currentModule = 'members';
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    document.getElementById('navYSC').classList.add('active');
    document.getElementById('pageTitle').textContent = 'Yuva Sabha-C';
    document.getElementById('headerSub').textContent = 'નિયમો અને સભા લેનાર યાદી';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('yscListView');
    document.getElementById('yscAddNewWrap').classList.toggle('hidden', !canEditYsc());
    renderYscTitlesList();
    fetchYscDataFromBackend(); // pick up anything added from another device since we last loaded
    return;
  }

  if(key==='tree'){
    currentModule = 'members';
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    document.getElementById('navTree').classList.add('active');
    document.getElementById('pageTitle').textContent = 'Organization Tree';
    document.getElementById('headerSub').textContent = 'Leader → Poshak Leaders → Yuva Sabhya members';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('treeView');
    renderTree(); // show cached data immediately
    await loadData(); // then refresh with latest from database
    if(myNavToken !== switchModuleNavToken) return;
    renderTree();
    return;
  }

  if(key==='sevasamiti'){
    yscForceReadOnly = false;
    currentModule = 'members';
    document.getElementById('navDashboard').classList.remove('active');
    document.getElementById('navMembers').classList.remove('active');
    document.getElementById('navUsers').classList.remove('active');
    document.getElementById('navApprovals').classList.remove('active');
    document.getElementById('navActivity').classList.remove('active');
    document.getElementById('navNotifications').classList.remove('active');
    document.getElementById('navSevaSamiti').classList.add('active');
    document.getElementById('navChangePassword').classList.remove('active');
    document.getElementById('navTree').classList.remove('active');
    document.getElementById('navYSC').classList.remove('active');
    document.getElementById('pageTitle').textContent = 'Seva Samiti';
    document.getElementById('headerSub').textContent = 'C Seva Samiti — committee and volunteer list';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('sevaSamitiListView');
    renderSevaFormsList(); // show cached data immediately
    await loadSevaFormsListFromBackend(); // then refresh with latest from database
    if(myNavToken !== switchModuleNavToken) return;
    renderSevaFormsList();
    return;
  }

  if(key==='changepassword'){
    currentModule = 'members';
    document.getElementById('navDashboard').classList.remove('active');
    document.getElementById('navMembers').classList.remove('active');
    document.getElementById('navUsers').classList.remove('active');
    document.getElementById('navApprovals').classList.remove('active');
    document.getElementById('navActivity').classList.remove('active');
    document.getElementById('navNotifications').classList.remove('active');
    document.getElementById('navSevaSamiti').classList.remove('active');
    document.getElementById('navChangePassword').classList.remove('active');
    document.getElementById('navTree').classList.remove('active');
    document.getElementById('navYSC').classList.remove('active');
    document.getElementById('navChangePassword').classList.add('active');
    document.getElementById('pageTitle').textContent = 'Change Password';
    document.getElementById('headerSub').textContent = 'Update your login password';
    document.getElementById('addBtnWrap').classList.add('hidden');
    showPanel('changePasswordView');
    resetChangePasswordForm();
    return;
  }

  currentModule = key;
  document.getElementById('searchInput').value = '';
  document.getElementById('navDashboard').classList.toggle('active', key==='dashboard');
  document.getElementById('navMembers').classList.toggle('active', key==='members');
  document.getElementById('navUsers').classList.remove('active');
  document.getElementById('navApprovals').classList.remove('active');
  document.getElementById('navActivity').classList.remove('active');
  document.getElementById('navNotifications').classList.remove('active');
  document.getElementById('navSevaSamiti').classList.remove('active');
    document.getElementById('navChangePassword').classList.remove('active');
    document.getElementById('navTree').classList.remove('active');
    document.getElementById('navYSC').classList.remove('active');

  if(key==='dashboard'){
    document.getElementById('pageTitle').textContent = 'Dashboard';
    document.getElementById('headerSub').textContent = 'Overview of your Yuva Sabha registry';
    showPanel('dashboardView');
    renderDashboard();
    await loadData();
    if(myNavToken !== switchModuleNavToken) return;
    renderDashboard();
    return;
  }

  document.getElementById('pageTitle').textContent = cfg().label + ' Registry';
  document.getElementById('addBtnLabel').textContent = cfg().addLabel;
  document.getElementById('searchInput').placeholder = 'Search ' + cfg().label.toLowerCase() + '…';
  document.getElementById('addBtnWrap').classList.toggle('hidden', !canAddInCurrentModule());
  showPanel('tableView');
  renderTable(); // show cached data immediately
  await loadData(); // then refresh with latest from database
  if(myNavToken !== switchModuleNavToken) return;
  renderTable();
}

function renderUsersTable(){
  const tbody = document.getElementById('usersTableBody');
  const users = loadAuthUsers();
  if(!users.length){
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-10 text-crm-textMuted">No users signed up yet.</td></tr>`;
    return;
  }
  tbody.innerHTML = users.map((u,i)=>`<tr class="fade-in">
    <td>${i+1}</td><td>${esc(u.firstName)}</td><td>${esc(u.lastName)}</td><td>${esc(u.mobile)}</td><td>${esc(u.village)}</td>
    <td>${esc(formatDateTime(u.createdAt))}</td>
  </tr>`).join('');
}

const YSC_CONTENT = {"aadarsh_karyakar": {"title": "આદર્શ કાર્યકરે આટલું અવશ્ય કરવું જોઈએ", "subtitle": "શ્રીસ્વામિનારાયણ મંદિર કુંડળધામ તથા કારેલીબાગ વડોદરા", "points": ["ભગવદ્‌નિષ્ઠા તથા ગુરુનિષ્ઠા દૃઢ રાખી સત્સંગની સેવા ઘરધણી બનીને કેવળ રાજીપા માટે શ્રધ્ધાએ સહીત કરવી. દેહ તથા દેહના સંબંધી કરતા સત્સંગ મુખ્ય રાખવો.", "મહારાજ અને સદ્‌ગુરુના સંબંધે સંતો-ભક્તોનો પક્ષ, મહિમા રાખવો. તેમના ગુણ જ જોવા, ગાવા અને સાંભળવા. અવગુણ તો માત્ર પોતાના જ જોવા અને ટાળવા.", "સવારની કથા (ઝૂમમાં કે યુટ્યુબ પર લાઇવ) દરરોજ પરિવાર સહિત બેસીને નિયમિતપણે ધ્યાનપૂર્વક સાંભળવી. તેમજ મંતવ્યોની આપ-લે કરવી.", "રનવસભા, ગ્રુપ સભા, યુવાસભા વગેરે સભાઓ અનિવાર્ય સંજોગો સિવાય અવશ્ય ભરવી. વળી, દર વર્ષે યોજાતા દિવાળી નિબંબર, યુવા નિબંબર તથા ઉત્સવ–સમૈયા વગેરેનો મહત્તમ લાભ લેવો.", "આપણી દરેક ક્ષણ બહુ કિંમતી છે તેથી અનિવાર્ય કાર્ય સિવાયનો સમય પોતાના મોક્ષ માટે જ વાપરવો; મોબાઇલ, ટીવી, ઇન્ટરનેટ વગેરેનો દુરુપયોગ કરી વ્યર્થ સમય બગાડવો નહિ.", "દરરોજ પર્સનલ પૂજા, માનસી પૂજા, મંગળા આરતી દર્શન, ચેષ્ટા દર્શન ખૂબ ભાવપૂર્વક કરવું. તેમજ વચનામૃત, સ્વામીની વાતો વગેરે સત્શાસ્ત્રોનું વાંચન ખટકો રાખીને નિયમિતપણે કરવું.", "ઘરસભા કરી ઘરનું વાતાવરણ આધ્યાત્મિક અને દિવ્ય રાખવું. બાળકોને સંસ્કાર આપવા. પરિવારમાં સંપીને રહેવું. માતા-પિતા, પત્ની, બાળકોને સમય આપવો.", "મહારાજ, પૂ.ગુરુજી કે પૂ.દયાળુ સ્વામીને ન ગમે એવું વાણી, વર્તન કે કાર્ય કરવું નહી. આપણું જીવન જોઈને સૌને સત્સંગનો ગુણ આવે એવા મીઠા વ્યવહારો રાખવા.", "પોતાના સાક્ષી સંત-ભક્તિને નિષ્કપટપણે રેગ્યુલર રિપોર્ટ આપવો, વડીલ ભક્તોનો સ્વીકાર રાખવો. સારા મિત્રો રાખવા, કુસંગથી દૂર રહેવું.", "કોઈ સંતો-ભક્તો વઢે-ટોકે કે કાંઈક ભૂલ ઓળખાવે તો સવળું જ લેવું અને પોતાની જ ભૂલ જોવી. હુંમેશા બીજાના ગુણ અને મહિમા લઈને રાજીપાના તાનસાથે જવાબદારીપૂર્વક સેવા કરીને ખરા અર્થમાં આધ્યાત્મિક કાર્યકર્તા-લીડર બનવું.", "મીઠ્ઠી વાણીથી રાજીપો મળતા અંતઃકરણ ભીનું બને છે અને કઠોર વાણીથી બીજાનું અંતર દુ:ખાતા દુ:ખ આવે છે. માટે નાના-મોટા સૌ સાથે હુંમેશા મીઠ્ઠી વાણી જ બોલવી."]}, "dinacharya": {"title": "આદર્શ દિનચર્યા અને સંસ્કાર નિયમો (સંપૂર્ણ લિસ્ટ)", "sections": [{"heading": "વિભાગ A: વ્યક્તિગત શિસ્ત અને દિનચર્યા (Personal Discipline)", "groups": [{"sub": "૧. દિવસની શરૂઆત – જાગતા પછી", "points": ["બાળકે સવારે વહેલા જાગવાનો પ્રયત્ન કરવો.", "સવારે ઉઠવામાં જરા પણ આળસ ન કરવી.", "આંખ ખોલતાં જ \"જય સ્વામિનારાયણ\" કહેવું અને ભગવાન તથા ગુરુજીને યાદ કરવા.", "પોતાની પથારી (બેડ) જાતે જ વાળવી અને વ્યવસ્થિત મૂકવી.", "ભગવાને વહેલી સવારે આપેલો સારો સદવિચાર લખવાનો પ્રયત્ન કરવો.", "દિવસની શરૂઆત હકારાત્મક (Positive) વિચારોથી કરવી."]}, {"sub": "૨. સ્વચ્છતા અને આરોગ્ય", "points": ["ભગવાનના સ્મરણ સાથે રોજ સવારે બ્રશ કરવું.", "ભગવાનના સ્મરણ સાથે રોજ સ્નાન કરવું.", "કપડાં હંમેશા સાફ અને ધોયેલા જ પહેરવા.", "ટોઇલેટ ગયા પછી સાબુથી ૧૭ વાર હાથ ધોવા.", "કચરો હંમેશા કચરાપેટીમાં જ નાખવો, જમીન પર નહીં.", "ઘરમાં ક્યાંય પણ કચરો દેખાય તો તે ઊચકીને કચરાપેટીમાં નાખી દેવો.", "સ્વચ્છતાને ભગવાનની આજ્ઞા માનવી."]}, {"sub": "૩. ખાવા-પીવાના નિયમ", "points": ["જમવા બેસતાં પહેલાં ચોખ્ખા પાણીથી હાથ ધોવા.", "ભગવાનને પ્રાર્થના કરીને અને થાળ ધરાવીને જ જમવું (માનસી કર્યા વગર જમવું નહીં).", "જમતી વખતે ભગવાનને સંભારવા (યાદ કરવા).", "શાંતિથી અને ધ્યાનપૂર્વક જમવું; અન્નનો જરા પણ બગાડ ન કરવો.", "એંઠવાડાવાળા (બગડેલા) હાથે કઈ અડવું નહીં.", "જરૂર પડે તો જેમના હાથ બગડેલા ન હોય તેમની પાસે વસ્તુ માંગવી.", "જમ્યા પછી ભગવાનનો અને રસોઈ કરનારનો આભાર માનવો.", "ભોજનને પ્રસાદ માનીને જમવું."]}, {"sub": "૪. દિવસનો અંત – શયન (સૂતા પહેલા)", "points": ["સૂતા પહેલા ભગવાન અને ગુરુજીને યાદ કરવા.", "આજે થયેલી ભૂલ માટે ક્ષમા માંગવી.", "આવતીકાલે સારું કરવાની પ્રાર્થના કરવી.", "ભગવાનની માનસી પૂજા કર્યા પછી જ સૂવું."]}]}, {"heading": "વિભાગ B: ભક્તિ અને સત્સંગ (Spiritual Life)", "groups": [{"sub": "૫. ભક્તિ, પૂજા અને નિયમ", "points": ["સવારે ભગવાનને ભાવથી જગાડવા.", "નાહીને સાફ કપડાં પહેરીને ભગવાનની પૂજા કરવી.", "પૂજા કરતી વખતે મન શાંત રાખવું અને ભગવાનમાં જોડવું.", "સવારે અને સાંજે નિયમિત કુંડળ ધામની આરતી કરવી.", "અમુક સમયે ઘર મંદિરમાં પણ આરતી કરવી.", "ભગવાનને ભાવપૂર્વક થાળ ધરાવવો.", "સાંજે ભગવાનને સુવડાવવાનો (પોઢાડવાનો) અભ્યાસ કરવો.", "દિવસમાં ભગવાનની ૫ માનસી કરવી."]}, {"sub": "૬. કથા, શ્રવણ, મનન અને મંતવ્ય", "points": ["કુંડળ ધામથી આવતી સવારની કથા નિયમિત સાંભળવી.", "કથામાં બેસીએ ત્યારે ડાયરી અને પેન સાથે રાખવી.", "કથામાંથી એક સારો વિચાર યાદ રાખવો અને ડાયરીમાં લખી લેવો.", "કથા પૂરી થયા પછી એ વિચાર પર મનન (ચિંતન) કરવું.", "ઘરના સભ્યો સાથે પોતાની ગમેલી વાત 'મંતવ્ય' સ્વરૂપે શેર કરવી.", "બીજાની વાત પણ શાંતિથી સાંભળવી અને કથા જીવનમાં ઉતારવી."]}, {"sub": "૭. કથા સાંભળવાના વિશેષ નિયમો", "points": ["કથામાં ટટ્ટાર અને સીધા બેસવું.", "કથા એકદમ ધ્યાનથી સાંભળવી અને વચ્ચે આડીઅવળી વાતો ન કરવી.", "કંઈ સમજ ન પડે તો કથા પૂરી થયા પછી પૂછવું.", "કથાની વાતોને જીવનમાં ઉતારવાનો સતત પ્રયાસ કરવો."]}, {"sub": "૮. મંદિર અને સભા મર્યાદા", "points": ["મંદિર કે સભામાં સંપૂર્ણ શાંતિ જાળવવી.", "સીધા બેસવું અને ધ્યાન રાખવું; વાતો કે રમકડાંથી દૂર રહેવું.", "કથા એકાગ્રતાથી સાંભળવી.", "સંતો અને સંચાલકની આજ્ઞાનું પાલન કરવું.", "મંદિરને ભગવાનનું ઘર માનવું (ભગવાનનું ઘર એ જ આપણું ઘર).", "મંદિરે જઈએ ત્યારે ખાલી હાથે ન જવું; ભગવાન માટે કંઈક ને કંઈક લઈ જવું."]}, {"sub": "૯. આત્મ-નિરીક્ષણ (આધ્યાત્મિક હિસાબ)", "points": ["દરરોજ વિચારવું કે \"આજે મેં શું સારું કામ કર્યું?\".", "કઈ ભૂલ થઈ તેની નોંધ કરવી અથવા બોલવી.", "કઈ ભૂલ થઈ હોય તો તરત સંતો-ભક્તોને મળીને સુધારી લેવી.", "આવતીકાલે શું સુધારવું છે તે નક્કી કરવું.", "પોતાને સુધારવાનો ભાવ રાખી ધીમે-ધીમે આગળ વધવું."]}]}, {"heading": "વિભાગ C: પરિવાર અને ઘર (Family & Home)", "groups": [{"sub": "૧૦. પરિવાર સાથે વર્તન (Home Sanskar)", "points": ["મમ્મી-પપ્પા સાથે હમેશા ધીમા અવાજે બોલવું.", "માતા-પિતાની આજ્ઞાનું તરત જ પાલન કરવું.", "દાદા-દાદીને ખૂબ આદર અને માન આપવું.", "ભાઈ-બહેન સાથે પ્રેમથી રહેવું, ઝઘડો ન કરવો.", "ઘરમાં પ્રેમ અને સહકારનું વાતાવરણ રાખવું.", "પરિવારને ભગવાન અને વ્હાલા ગુરુજીની ભેટ સમજીને વર્તવું."]}, {"sub": "૧૧. ઘરમાં રહેવાની રીત", "points": ["બહારથી આવીએ ત્યારે મોટેથી \"જય સ્વામિનારાયણ\" બોલવું.", "હાથ-પગ ધોઈને જ ઘરમાં ફરવું.", "ઘરને હંમેશા સ્વચ્છ રાખવાનો પ્રયત્ન કરવો.", "સોફા, દીવાલ કે ઘરનો સામાન બગાડવો નહીં.", "પોતાનું કામ જાતે કરવાની ટેવ પાડવી.", "ઘરમાં શાંતિ જાળવવી અને ખોટો અવાજ ન કરવો."]}, {"sub": "૧૨. ઘરસભા", "points": ["ઘરસભા એ ગુરુજીની આજ્ઞા છે તેમ માની બધા સભ્યોએ સાથે પ્રેમથી બેસવું.", "ઘરસભાને એકબીજાની આત્મીયતા વધારતી પાઠશાળા માનવી.", "દરેકને બોલવાની તક આપવી અને ધ્યાનથી સાંભળવું.", "મોબાઈલ વગર બેસવું.", "સભામાંથી એક સારો વિચાર યાદ રાખવો.", "પોતાના સુખ-દુઃખની વાતો શેર કરવી.", "એકબીજાને કંઈ કહેવું હોય તો પ્રેમ અને આદર સાથે કહેવું.", "કોઈ પર્સનલ વાત હોય તો અલગથી મળી લેવું."]}]}, {"heading": "વિભાગ D: સમાજ અને વ્યવહાર (Society & Behavior)", "groups": [{"sub": "૧૩. સ્કૂલ અને ભણતર", "points": ["સ્કૂલ જતાં પહેલાં બધી વસ્તુ સંભારીને બેગમાં મૂકવી.", "સ્કૂલ જતાં પહેલાં ઘર મંદિરમાં ભગવાનને પગે લાગવું.", "ટીચરને પ્રેમથી આદર આપવો.", "હંમેશા સાચું બોલવું અને પરીક્ષામાં ચોરી ન કરવી.", "મિત્રો સાથે ઝઘડો ન કરવો.", "હોમવર્ક સમયસર પૂરું કરવું અને ભણવામાં પૂરો પ્રયત્ન કરવો."]}, {"sub": "૧૪. મિત્રો અને લોકો સાથે વર્તન", "points": ["સારા અને સંસ્કારી મિત્રો પસંદ કરવા.", "કોઈ ખોટી વાત શીખવાડે તો તેનાથી દૂર રહેવું અને સ્પષ્ટ 'ના' પાડવી.", "મિત્રોને ક્યારેય ગાળો ન આપવી.", "બીજાને મદદરૂપ અને સહાયક બનવું.", "હરિભક્ત મળે ત્યારે ખૂબ જ ભાવથી \"જય સ્વામિનારાયણ\" કહેવું.", "આપણી આસપાસના સહુને સ્માઇલ આપવી."]}, {"sub": "૧૫. ઘરની બહાર અને ફરવા જઈએ ત્યારે", "points": ["માબાપની મંજૂરી લઈને જ બહાર જવું.", "અજાણ્યા માણસોથી દૂર રહેવું.", "બહાર પણ પોતાના સંસ્કાર ન છોડવા.", "જાહેર જગ્યાએ શિસ્ત (Discipline) રાખવી અને ઘરની ઈજ્જત વધે તેવું વર્તન કરવું.", "બહાર જઈએ ત્યારે જે પરિસ્થિતિમાં ભગવાન રાખે તેનાથી સંતોષ માનવો.", "ખાવાની કે રહેવાની બાબતમાં જે મળે તેનાથી સંતોષ પામવો."]}, {"sub": "૧૬. ફોન અને વાતચીત", "points": ["ફોન ઉપાડીએ ત્યારે સહુ પ્રથમ \"જય સ્વામિનારાયણ\" કહેવું.", "બીજાનો ફોન આવે તો તેમનું નામ પહેલા પૂછવું.", "આપણે ફોન કરીએ ત્યારે સહુ પ્રથમ આપણું નામ અને ગામ કહેવું.", "ફોન પર ધીમા અવાજે અને નમ્ર ભાષામાં વાત કરવી.", "જરૂર વગર ફોન હાથમાં ન લેવો.", "ફોન પર કોઈ ખોટી વાત ન કરવી.", "માબાપ કહે ત્યારે તરત જ ફોન બંધ કરી દેવો.", "ફોનનો વિવેક અને સંયમ રાખવો.", "ફોન મૂકીએ ત્યારે અંતમાં \"જય સ્વામિનારાયણ\" કહેવાનું ભૂલવું નહીં."]}]}]}, "poshak_leader_duty": {"title": "૧૪. પોષક લીડરની જવાબદારી", "points": ["આપણા વાણી-વર્તન એવા રાખવા કે આપણો બધાને ગુણ આવે, આપણને મળવાનું મન થાય.", "સભ્યો નવા નવા હોય ત્યારે તરત જ ડુંગળી-લસણ, ટી.વી., ઇન્ટરનેટ, મોબાઇલ વગેરે બંધ કરાવવાનો આગ્રહ ન રાખવો, કોઈપણ નિયમ પાળવા બાબતે ફોર્સ ન કરવો તથા એક સાથે બધા ધર્મ-નિયમ કહીને બીવડાવવા નહીં.", "કોઇ આપણી આગળ નિખાલસ થાય તો વધુ વઢવું નહીં પરંતુ હૂંફ-બળ-પ્રેમ આપી તેની ભૂલ સુધરી જાય તેવા પ્રયત્ન કરવા, વળી તેની વાત બીજા કોઈને કહેવી નહી અને તેની પ્રત્યે ન્યૂનભાવ થવા દેવો નહીં, પરંતુ આપણી સાથે તેને ગમે તેવું વર્તન રાખવું. (જો સ્ત્રી સંબંધિત પ્રશ્ન હોય તો ડાયરેક્ટ ઝોન પ્રેસિડેન્ટનો કોન્ટેક્ટ કરાવવો પરંતુ પોતે તેમાં પડવું નહીં.)", "સભ્યની કેપેસિટી મુજબ તેને સેવા સોંપવી તથા આધ્યાત્મિક ઘડતર કરવું.", "સભ્યોનું આખું નામ, જન્મ તારીખ, એનિવર્સરી, મોબાઈલ નંબર, ઉંમર વગેરે જાણી રાખવા અને જે તે દિવસે ફોન કરી પ્રોત્સાહન/રાજીપો આપવો.", "વારંવાર નિર્ણય ફેરવવા ન પડે તે માટે સભ્યને કોઈપણ સલાહ કે માર્ગદર્શન આપતા પહેલા તેની કૌટુંબિક માહિતી રાખવી જેમ કે ઘરમાં સભ્યો કેટલા છે? શું ધંધો કરે છે? શું ભણે છે કે ભણેલા છે? વ્યવહાર કેવો છે? ઘરમાં કોને કોને સત્સંગ છે? વગેરે.", "સભ્ય સંતોની નજીક થાય, આજ્ઞા પાળે, સેવામાં જાય અને તેમાં તેને મજા આવે એવા બીજા સભ્યોના પ્રસંગ કહેવા તથા જરૂરી વિવેક શીખવવા તથા તેના પોતાના સારા પ્રસંગે સંતો/ભક્તોનો રાજીપો અપાવવો.", "પરીક્ષા, નોકરીનું ઇન્ટરવ્યૂ તથા નબળી પરિસ્થિતિમાં સંતોનો કોન્ટેક્ટ કરાવી આશીર્વાદ અપાવવા.", "જો આપણે સભ્યને જે તે બાબતનો નિર્ણય આપવાનો હોય અને તેમાં આપણને ખબર ન પડતી હોય તો તે તે ફિલ્ડમાં હોંશિયાર હોય એવા ભક્તોનો કોન્ટેક્ટ કરાવી આપવો અથવા તેમને પૂછી પછી નિર્ણય આપવો."]}, "vali_margdarshika": {"title": "વાલી માર્ગદર્શિકા: ૭ સુવર્ણ નિયમો (Parent's Guide)", "points": ["આચરણ ત્યાં જ અસર (Be a Role Model): બાળકને કહેતા પહેલા આપણે તે કરવું પડશે. જો તમે ઈચ્છો કે બાળક મોબાઈલ ઓછો વાપરે, તો તેની હાજરીમાં તમારે પણ ફોનનો વિવેક રાખવો પડશે.", "ટોકવાને બદલે વખાણ કરો (Appreciate Effort): બાળક કદાચ પહેલા દિવસે બધા નિયમો નહીં પાળી શકે. જો તે ૧૦ માંથી ૨ નિયમ પણ પાળે તો તેને વધાવો.", "ડેઈલી ટ્રેકરની તપાસ (Check the Diary): રોજ રાત્રે સૂતા પહેલા બાળકની બુકલેટ તપાસો. તેની પાસે બેસીને પૂછો.", "ઘર સભા અનિવાર્ય (Conduct Ghar Sabha): ગુરુજીની આજ્ઞા મુજબ, મહિને ૨ થી ૪ વાર (ખાસ કરીને રાત્રે જમ્યા પછી) ૩૦ મિનિટ ટીવી/મોબાઈલ બંધ કરી પરિવાર સાથે બેસો.", "ક્રોધ નહીં, પ્રેમ (Patience & Love): બાળક ભૂલ કરે તો ગુસ્સે થવાને બદલે તેને સમજાવો. પ્રેમથી કહેલી વાત સીધી હૃદયમાં ઉતરે છે.", "સરખામણી ન કરો (Do Not Compare): તમારા બાળકની સરખામણી બીજા બાળક સાથે ક્યારેય ન કરો. દરેક બાળકનું ફૂલ ખીલવાનો સમય અલગ હોય છે.", "સકારાત્મક વાતાવરણ (Spiritual Atmosphere): ઘરમાં સવાર-સાંજ કીર્તન કે ધૂન વગાડતી રાખો. જમતી વખતે કોઈ ધાર્મિક વાત કરો."]}};
let yscContentData = null;
function loadYscContentData(){
  if(yscContentData) return yscContentData;
  try{
    const stored = localStorage.getItem('yuvaSabhaYscContent');
    yscContentData = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(YSC_CONTENT));
  }catch(e){
    yscContentData = JSON.parse(JSON.stringify(YSC_CONTENT));
  }
  return yscContentData;
}
function saveYscContentToStorage(){
  try{ localStorage.setItem('yuvaSabhaYscContent', JSON.stringify(yscContentData)); }catch(e){}
  if(typeof useBackend !== 'undefined' && !useBackend) return;
  fetch(`${API_BASE}/ysc_data.php?key=content`, {
    method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value: yscContentData })
  }).catch(e => console.warn('Yuva Sabha-C content: saved locally but backend sync failed:', e));
}
let yscSectionReadOnly = false;
let currentYscCustomKey = null; // key of the custom (user-added) YSC title currently open, if any
function yscContentCanEdit(){ return canEditYsc() && !yscSectionReadOnly; }
function yscActionButtonsHtml(key, groupPath, i, count){
  const gp = groupPath === null ? 'null' : `'${groupPath}'`;
  return `<div class="flex items-center gap-1 justify-center flex-wrap">
      <button onclick="copyYscContentPoint('${key}',${gp},${i})" title="Copy" class="w-7 h-7 rounded bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-copy text-[10px]"></i></button>
      <button onclick="confirmRemoveYscContentPoint('${key}',${gp},${i})" title="Delete" class="w-7 h-7 rounded bg-red-50 text-red-400 hover:bg-red-500 hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-trash text-[10px]"></i></button>
    </div>`;
}
function yscPointInputId(key, groupPath, i){
  return `yscPt_${key}_${groupPath===null?'x':groupPath}_${i}`;
}
function getYscContentPointText(key, groupPath, i){
  const data = loadYscContentData();
  return groupPath === null
    ? data[key].points[i]
    : (() => { const [secIdx, groupIdx] = groupPath.split('_').map(Number); return data.dinacharya.sections[secIdx].groups[groupIdx].points[i]; })();
}
function confirmRemoveYscContentPoint(key, groupPath, i){
  openConfirmModal('Delete this point?', 'This action cannot be undone.', () => {
    removeYscContentPoint(key, groupPath, i);
  });
}
function updateYscContentMeta(key, field, val){
  loadYscContentData()[key][field] = val;
}
function yscSimpleListCardHtml(key){
  const canEdit = yscContentCanEdit();
  const data = loadYscContentData()[key];
  const rows = data.points.map((p,i) => `
    <tr>
      <td style="width:50px" class="text-center">${i+1}</td>
      <td class="ysc-point-cell">
        ${canEdit ? `<input type="text" id="${yscPointInputId(key,null,i)}" value="${esc(p)}" onchange="updateYscContentPoint('${key}',null,${i},this.value)" class="screen-only border border-crm-border rounded-lg px-2 py-1.5 text-sm outline-none focus:border-crm-primary w-full">` : ''}
        <span class="${canEdit ? 'print-only' : ''} text-sm leading-relaxed">${esc(p)}</span>
      </td>
      <td style="width:90px" class="text-center screen-only">${canEdit ? yscActionButtonsHtml(key, null, i, data.points.length) : ''}</td>
    </tr>`).join('');
  const tablesHtml = data.points.length
    ? `<div class="table-responsive-wrapper overflow-x-auto">
        <table class="w-full crm-table ysc-print-table">
          <thead><tr><th style="width:50px">Sr.</th><th>Point</th><th style="width:90px" class="screen-only">Actions</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`
    : `<p class="text-sm text-crm-textMuted px-6 py-4">No points yet.</p>`;
  const titleHtml = canEdit
    ? `<input type="text" value="${esc(data.title)}" onchange="updateYscContentMeta('${key}','title',this.value)" class="screen-only border border-crm-border rounded-lg px-2 py-1.5 text-base font-bold text-crm-textDark outline-none focus:border-crm-primary w-full mb-1">
       <h2 class="print-only text-base font-bold text-crm-textDark mb-1">${esc(data.title)}</h2>`
    : `<h2 class="text-base font-bold text-crm-textDark mb-1">${esc(data.title)}</h2>`;
  const subtitleHtml = (data.subtitle !== undefined) ? (canEdit
    ? `<input type="text" value="${esc(data.subtitle||'')}" placeholder="Subtitle" onchange="updateYscContentMeta('${key}','subtitle',this.value)" class="screen-only border border-crm-border rounded-lg px-2 py-1.5 text-xs text-crm-textMuted outline-none focus:border-crm-primary w-full">
       ${data.subtitle ? `<p class="print-only text-xs text-crm-textMuted">${esc(data.subtitle)}</p>` : ''}`
    : (data.subtitle ? `<p class="text-xs text-crm-textMuted">${esc(data.subtitle)}</p>` : '')) : '';
  return `<div class="bg-white rounded-2xl shadow-crm border border-crm-border overflow-hidden mb-4 ysc-print-card">
    <div class="p-6 pb-4">
      ${titleHtml}
      ${subtitleHtml}
    </div>
    ${tablesHtml}
    ${canEdit ? `<div class="screen-only flex justify-between items-center px-6 py-4 border-t border-crm-border">
      <button onclick="addYscContentPoint('${key}',null)" class="px-3 py-2 rounded-lg text-xs font-medium text-crm-primary bg-red-50 hover:bg-crm-primary hover:text-white transition flex items-center gap-1.5"><i class="fas fa-plus text-[10px]"></i> Add Point</button>
      <button onclick="saveYscContent('${key}')" class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-crm-primary hover:bg-crm-primaryHover shadow-crm flex items-center gap-2"><i class="fas fa-check-circle text-xs"></i> Save</button>
    </div>` : ''}
  </div>`;
}
function renderYscRules(){
  document.getElementById('yscPageKaryakar').innerHTML = yscSimpleListCardHtml('aadarsh_karyakar');

  const canEdit = yscContentCanEdit();
  const dData = loadYscContentData().dinacharya;
  let dinacharyaHtml = canEdit
    ? `<input type="text" value="${esc(dData.title)}" onchange="updateYscContentMeta('dinacharya','title',this.value)" class="screen-only border border-crm-border rounded-lg px-2 py-1.5 text-base font-bold text-crm-textDark outline-none focus:border-crm-primary w-full mb-3">
       <h2 class="print-only text-base font-bold text-crm-textDark mb-3 px-1">${esc(dData.title)}</h2>`
    : `<h2 class="text-base font-bold text-crm-textDark mb-3 px-1">${esc(dData.title)}</h2>`;

  // Build the plain, single-column, one-point-per-row print view (same pattern as karyakar/poshak/vali) —
  // grid boxes render unreliably across print page-breaks, so print always uses this flat, bordered-row layout.
  let printFlatHtml = '';
  dData.sections.forEach(sec => {
    printFlatHtml += `<h3 class="text-sm font-bold text-crm-primary mt-4 mb-2 px-1">${esc(sec.heading)}</h3>`;
    sec.groups.forEach(g => {
      printFlatHtml += `<h4 class="text-sm font-semibold text-crm-textDark mb-1 px-1">${esc(g.sub)}</h4>
        <table class="w-full crm-table ysc-print-table mb-3">
          <thead><tr><th style="width:50px">Sr.</th><th>Point</th></tr></thead>
          <tbody>${g.points.map((p,i) => `<tr><td style="width:50px" class="text-center">${i+1}</td><td class="ysc-point-cell"><span class="text-sm leading-relaxed">${esc(p)}</span></td></tr>`).join('')}</tbody>
        </table>`;
    });
  });

  dinacharyaHtml += `<div class="print-only">${printFlatHtml}</div><div class="screen-only">`;
  dData.sections.forEach((sec, secIdx) => {
    dinacharyaHtml += `<div class="bg-white rounded-2xl shadow-crm border border-crm-border p-6 mb-4">
      ${canEdit
        ? `<input type="text" value="${esc(sec.heading)}" onchange="updateYscSectionHeading(${secIdx},this.value)" class="border border-crm-border rounded-lg px-2 py-1.5 text-sm font-bold text-crm-primary outline-none focus:border-crm-primary w-full mb-3">`
        : `<h3 class="text-sm font-bold text-crm-primary mb-3">${esc(sec.heading)}</h3>`}
      <div class="ysc-group-grid">`;
    sec.groups.forEach((g, groupIdx) => {
      const flatIdx = `${secIdx}_${groupIdx}`;
      const rows = g.points.map((p,i) => `
        <div class="flex items-start gap-2 mb-1.5 flex-wrap">
          <span class="text-xs text-crm-textMuted pt-2 w-5 shrink-0 text-right">${i+1}.</span>
          ${canEdit ? `<input type="text" id="${yscPointInputId('dinacharya',flatIdx,i)}" value="${esc(p)}" onchange="updateYscContentPoint('dinacharya','${flatIdx}',${i},this.value)" class="border border-crm-border rounded-lg px-2 py-1.5 text-sm outline-none focus:border-crm-primary flex-1 min-w-[160px]">
               <div class="shrink-0">${yscActionButtonsHtml('dinacharya', flatIdx, i, g.points.length)}</div>` : `<span class="text-sm leading-relaxed pt-1">${esc(p)}</span>`}
        </div>`).join('');
      dinacharyaHtml += `<div class="ysc-group-box">
        ${canEdit
          ? `<input type="text" value="${esc(g.sub)}" onchange="updateYscGroupSub(${secIdx},${groupIdx},this.value)" class="border border-crm-border rounded-lg px-2 py-1.5 text-sm font-semibold text-crm-textDark outline-none focus:border-crm-primary w-full mb-2">`
          : `<h4 class="text-sm font-semibold text-crm-textDark mb-2">${esc(g.sub)}</h4>`}
        <div class="pl-2">${rows}</div>
        ${canEdit ? `<button onclick="addYscContentPoint('dinacharya','${flatIdx}')" class="mt-1 px-3 py-1.5 rounded-lg text-xs font-medium text-crm-primary bg-red-50 hover:bg-crm-primary hover:text-white transition flex items-center gap-1.5"><i class="fas fa-plus text-[10px]"></i> Add Point</button>` : ''}
      </div>`;
    });
    dinacharyaHtml += `</div></div>`;
  });
  dinacharyaHtml += `</div>`;
  if(canEdit){
    dinacharyaHtml += `<div class="screen-only flex justify-end mb-4">
      <button onclick="saveYscContent('dinacharya')" class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-crm-primary hover:bg-crm-primaryHover shadow-crm flex items-center gap-2"><i class="fas fa-check-circle text-xs"></i> Save</button>
    </div>`;
  }
  document.getElementById('yscPageDinacharya').innerHTML = dinacharyaHtml;

  document.getElementById('yscPagePoshak').innerHTML = yscSimpleListCardHtml('poshak_leader_duty');

  document.getElementById('yscPageVali').innerHTML = yscSimpleListCardHtml('vali_margdarshika');

  if(currentYscCustomKey){
    document.getElementById('yscPageCustom').innerHTML = yscSimpleListCardHtml(currentYscCustomKey);
  }
}
function updateYscSectionHeading(secIdx, val){
  loadYscContentData().dinacharya.sections[secIdx].heading = val;
}
function updateYscGroupSub(secIdx, groupIdx, val){
  loadYscContentData().dinacharya.sections[secIdx].groups[groupIdx].sub = val;
}
function copyYscContentPoint(key, groupPath, i){
  const data = loadYscContentData();
  const text = groupPath === null
    ? data[key].points[i]
    : (() => { const [secIdx, groupIdx] = groupPath.split('_').map(Number); return data.dinacharya.sections[secIdx].groups[groupIdx].points[i]; })();
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=> showToast('Point copied to clipboard!'));
  } else { showToast('Copy not supported in this browser'); }
}
function updateYscContentPoint(key, groupPath, i, val){
  const data = loadYscContentData();
  if(groupPath === null){
    data[key].points[i] = val;
  } else {
    const [secIdx, groupIdx] = groupPath.split('_').map(Number);
    data.dinacharya.sections[secIdx].groups[groupIdx].points[i] = val;
  }
}
function addYscContentPoint(key, groupPath){
  const data = loadYscContentData();
  if(groupPath === null){
    data[key].points.push('');
  } else {
    const [secIdx, groupIdx] = groupPath.split('_').map(Number);
    data.dinacharya.sections[secIdx].groups[groupIdx].points.push('');
  }
  renderYscRules();
}
function removeYscContentPoint(key, groupPath, i){
  const data = loadYscContentData();
  if(groupPath === null){
    data[key].points.splice(i,1);
  } else {
    const [secIdx, groupIdx] = groupPath.split('_').map(Number);
    data.dinacharya.sections[secIdx].groups[groupIdx].points.splice(i,1);
  }
  renderYscRules();
}
function saveYscContent(key){
  saveYscContentToStorage();
  clearFormDirty();
  showToast('Updated successfully!');
  logActivity(currentUserRole||'admin', currentUserRole==='admin'?'admin':'', currentUserRole==='admin'?'Admin':'', `Updated Yuva Sabha-C content: ${key}`);
}
const YSC_TITLES = [
  { key:'karyakar', label:'આદર્શ કાર્યકરે આટલું અવશ્ય કરવું જોઈએ' },
  { key:'dinacharya', label:'આદર્શ દિનચર્યા અને સંસ્કાર નિયમો' },
  { key:'poshak', label:'પોષક લીડરની જવાબદારી' },
  { key:'vali', label:'વાલી માર્ગદર્શિકા' },
  { key:'list', label:'સભા લેનાર યાદી' }
];
// Maps each YSC_TITLES list entry to the actual content key its editable title input
// writes to (they don't match 1:1 — e.g. 'karyakar' in the list is 'aadarsh_karyakar'
// in the content store) — 'list' (સભા લેનાર યાદી) has no editable title, it's a
// different kind of page entirely.
const YSC_TITLE_CONTENT_KEY = { karyakar:'aadarsh_karyakar', dinacharya:'dinacharya', poshak:'poshak_leader_duty', vali:'vali_margdarshika' };

// Any title the user adds via "+ Add New" is a plain {title, points:[]} card — same
// shape as Karyakar/Poshak/Vali — stored directly under its own generated key, so it
// maps to itself here rather than needing a separate translation like the built-ins.
(function loadCustomYscTitles(){
  try{
    const saved = localStorage.getItem('yuvaSabhaYscCustomTitles');
    const customTitles = saved ? JSON.parse(saved) : [];
    if(Array.isArray(customTitles)){
      customTitles.forEach(t => {
        YSC_TITLES.push({ key:t.key, label:t.label, isCustom:true });
        YSC_TITLE_CONTENT_KEY[t.key] = t.key;
      });
    }
  }catch(e){}
})();
function fetchYscDataFromBackend(){
  if(typeof useBackend !== 'undefined' && !useBackend) return;
  cachedFetch(`${API_BASE}/ysc_data.php?_ts=${Date.now()}`, { cache: 'no-store' })
    .then(res => res.json())
    .then(data => {
      if(!data || typeof data !== 'object') return;
      if(data.content && typeof data.content === 'object'){
        yscContentData = data.content; // database is the source of truth
        localStorage.setItem('yuvaSabhaYscContent', JSON.stringify(yscContentData));
      }
      if(data.list && typeof data.list === 'object'){
        yscListData = data.list;
        localStorage.setItem('yuvaSabhaYscList', JSON.stringify(yscListData));
      }
      if(Array.isArray(data.custom_titles)){
        // Drop any custom titles this browser already knew about, then re-add exactly
        // what the server has — keeps everyone's "+ Add New" titles in sync, including
        // ones added from a completely different device.
        for(let i = YSC_TITLES.length - 1; i >= 0; i--){
          if(YSC_TITLES[i].isCustom){
            delete YSC_TITLE_CONTENT_KEY[YSC_TITLES[i].key];
            YSC_TITLES.splice(i, 1);
          }
        }
        data.custom_titles.forEach(t => {
          YSC_TITLES.push({ key:t.key, label:t.label, isCustom:true });
          YSC_TITLE_CONTENT_KEY[t.key] = t.key;
        });
        localStorage.setItem('yuvaSabhaYscCustomTitles', JSON.stringify(data.custom_titles));
      }
      if(currentModule === 'members' && document.getElementById('yscListView') && !document.getElementById('yscListView').classList.contains('hidden')){
        renderYscTitlesList();
      }
      if(currentModule === 'members' && document.getElementById('yscView') && !document.getElementById('yscView').classList.contains('hidden') && !isFormDirty){
        renderYscRules();
        renderYscList();
      }
    })
    .catch(e => console.warn('Yuva Sabha-C: backend unreachable, using local cache only:', e));
}
function saveCustomYscTitlesToStorage(){
  const customTitles = YSC_TITLES.filter(t => t.isCustom).map(t => ({ key:t.key, label:t.label }));
  try{ localStorage.setItem('yuvaSabhaYscCustomTitles', JSON.stringify(customTitles)); }catch(e){}
  if(typeof useBackend !== 'undefined' && !useBackend) return;
  fetch(`${API_BASE}/ysc_data.php?key=custom_titles`, {
    method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value: customTitles })
  }).catch(e => console.warn('Yuva Sabha-C custom titles: saved locally but backend sync failed:', e));
}
function promptAddYscTitle(){
  openTextPromptModal('New Yuva Sabha-C title', 'e.g. "ઉત્સવ સેવા માર્ગદર્શિકા"', (title) => {
    const trimmed = title.trim();
    if(!trimmed) return;
    const newKey = 'custom_' + Date.now();
    YSC_TITLES.push({ key:newKey, label:trimmed, isCustom:true });
    YSC_TITLE_CONTENT_KEY[newKey] = newKey;
    loadYscContentData()[newKey] = { title: trimmed, points: [] };
    saveCustomYscTitlesToStorage();
    saveYscContentToStorage();
    renderYscTitlesList();
    showToast('✔ New title added.');
    logActivity(currentUserRole||'admin', currentUserRole==='admin'?'admin':'', currentUserRole==='admin'?'Admin':'', `Added new Yuva Sabha-C title: ${trimmed}`);
    // Open it immediately in edit mode so the whole form (title + points) can be filled in right away.
    openYscSection(newKey, false);
  }, { validate: v => v.trim() ? null : 'Please enter a title.' });
}
function yscEffectiveTitle(t){
  const contentKey = YSC_TITLE_CONTENT_KEY[t.key];
  if(!contentKey) return t.label;
  const d = loadYscContentData()[contentKey];
  return (d && d.title) ? d.title : t.label;
}
function renderYscTitlesList(){
  const tbody = document.getElementById('yscTitlesTableBody');
  tbody.innerHTML = YSC_TITLES.map((t,idx) => `
    <tr class="cursor-pointer hover:bg-slate-50" onclick="openYscSection('${t.key}', true)">
      <td class="py-4"><span class="text-crm-textMuted font-medium text-xs">${idx+1}</span></td>
      <td class="font-medium py-4" style="white-space:normal">${esc(yscEffectiveTitle(t))}</td>
      <td class="py-4" onclick="event.stopPropagation()">
        <div class="flex items-center justify-start gap-1.5">
          <button onclick="openYscSection('${t.key}', true)" title="View" class="w-7 h-7 rounded bg-slate-50 text-slate-500 hover:bg-slate-100 flex justify-center items-center shadow-sm"><i class="fas fa-eye text-[10px]"></i></button>
          ${canEditYsc() ? `<button onclick="openYscSection('${t.key}', false)" title="Edit" class="w-7 h-7 rounded bg-red-50 text-crm-primary hover:bg-crm-primary hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-pen text-[10px]"></i></button>` : ''}
          <button onclick="downloadYscTitle('${t.key}')" title="Download / Print PDF" class="w-7 h-7 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-download text-[10px]"></i></button>
          <button onclick="toggleYscTitleDropdown(event, this, ${idx})" title="More Actions" class="dd-toggle-btn w-7 h-7 rounded bg-slate-50 text-slate-600 hover:bg-slate-200 flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-ellipsis-v text-[10px]"></i></button>
        </div>
      </td>
    </tr>`).join('');
}
function toggleYscTitleDropdown(e, btn, idx){
  e.stopPropagation();
  const menu = document.getElementById('globalDropdown');
  const isOpenForThis = !menu.classList.contains('hidden') && menu.dataset.idx === String(idx) && menu.dataset.ctx === 'ysc';
  hideGlobalDropdown();
  if(isOpenForThis) return;

  const key = YSC_TITLES[idx].key;
  menu.innerHTML = `
    <div class="dd-item" onclick="copyYscTitleContent('${key}')"><i class="fas fa-copy text-blue-500 w-4"></i> Copy</div>
    <div class="dd-item" onclick="shareYscTitleContent('${key}')"><i class="fas fa-share-alt text-emerald-500 w-4"></i> Share</div>
    ${(currentUserRole==='admin' || (isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'ysc','access') && hasExtraPermission(currentUserRecord.mobile,'ysc','delete'))) ? `<div class="dd-item danger" onclick="confirmDeleteYscTitleContent('${key}')"><i class="fas fa-trash w-4"></i> Delete</div>` : ''}`;
  menu.dataset.idx = String(idx);
  menu.dataset.ctx = 'ysc';

  const rect = btn.getBoundingClientRect();
  const menuWidth = 140;
  let left = rect.right - menuWidth;
  if(left < 8) left = 8;
  let top = rect.bottom + 4;
  if(top + 120 > window.innerHeight) top = rect.top - 124;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
  menu.classList.remove('hidden');
}
function getYscTitleContentAsText(key){
  if(key === 'list'){
    const data = loadYscListData();
    return 'સભા લેનાર યાદી:\n' + data.main.map((r,i)=>`${i+1}. ${r.name} — ${r.pravachan}`).join('\n');
  }
  const map = { karyakar:'aadarsh_karyakar', poshak:'poshak_leader_duty', vali:'vali_margdarshika' };
  if(map[key]){
    const d = loadYscContentData()[map[key]];
    return d.title + '\n\n' + d.points.map((p,i)=>`${i+1}. ${p}`).join('\n');
  }
  if(key === 'dinacharya'){
    const d = loadYscContentData().dinacharya;
    let out = d.title + '\n\n';
    d.sections.forEach(sec => {
      out += sec.heading + '\n';
      sec.groups.forEach(g => {
        out += '  ' + g.sub + '\n';
        g.points.forEach((p,i) => out += `    ${i+1}. ${p}\n`);
      });
    });
    return out;
  }
  const customData = loadYscContentData()[key];
  if(customData && Array.isArray(customData.points)){
    return customData.title + '\n\n' + customData.points.map((p,i)=>`${i+1}. ${p}`).join('\n');
  }
  return '';
}
function copyYscTitleContent(key){
  hideGlobalDropdown();
  const text = getYscTitleContentAsText(key);
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=> showToast('Copied to clipboard!'));
  } else { showToast('Copy not supported in this browser'); }
}
function shareYscTitleContent(key){
  hideGlobalDropdown();
  const text = getYscTitleContentAsText(key);
  const title = YSC_TITLES.find(t=>t.key===key).label;
  if(navigator.share){
    navigator.share({ title, text }).catch(()=>{});
  } else {
    copyYscTitleContent(key);
    showToast('Sharing not supported — copied instead');
  }
}
function confirmDeleteYscTitleContent(key){
  hideGlobalDropdown();
  const entry = YSC_TITLES.find(t=>t.key===key);
  const title = entry.label;
  if(entry.isCustom){
    openConfirmModal(`Delete "${title}"?`, 'This will remove this title entirely from the list. This action cannot be undone.', () => {
      YSC_TITLES.splice(YSC_TITLES.findIndex(t=>t.key===key), 1);
      delete YSC_TITLE_CONTENT_KEY[key];
      delete loadYscContentData()[key];
      saveCustomYscTitlesToStorage();
      saveYscContentToStorage();
      renderYscTitlesList();
      showToast('Title deleted.');
      logActivity(currentUserRole||'admin', currentUserRole==='admin'?'admin':'', currentUserRole==='admin'?'Admin':'', `Deleted Yuva Sabha-C title: ${title}`);
    });
    return;
  }
  openConfirmModal(`Clear all content in "${title}"?`, 'This will remove all points. This action cannot be undone.', () => {
    if(key === 'list'){
      const data = loadYscListData();
      data.main = []; data.short = [];
      saveYscListToStorage();
      renderYscList();
    } else if(key === 'dinacharya'){
      const d = loadYscContentData().dinacharya;
      d.sections.forEach(sec => sec.groups.forEach(g => g.points = []));
      saveYscContentToStorage();
      renderYscRules();
    } else {
      const map = { karyakar:'aadarsh_karyakar', poshak:'poshak_leader_duty', vali:'vali_margdarshika' };
      loadYscContentData()[map[key]].points = [];
      saveYscContentToStorage();
      renderYscRules();
    }
    showToast('Content cleared.');
    logActivity(currentUserRole||'admin', currentUserRole==='admin'?'admin':'', currentUserRole==='admin'?'Admin':'', `Cleared Yuva Sabha-C content: ${title}`);
  });
}
function openYscSection(section, readOnly){
  yscSectionReadOnly = !!readOnly;
  currentModule = 'members';
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  document.getElementById('navYSC').classList.add('active');
  document.getElementById('pageTitle').textContent = 'Yuva Sabha-C';
  document.getElementById('headerSub').textContent = 'નિયમો અને સભા લેનાર યાદી';
  document.getElementById('addBtnWrap').classList.add('hidden');
  showPanel('yscView');
  const pages = { karyakar:'yscPageKaryakar', dinacharya:'yscPageDinacharya', poshak:'yscPagePoshak', vali:'yscPageVali', list:'yscListTab' };
  currentYscCustomKey = pages[section] ? null : section; // custom (user-added) title, not one of the fixed pages
  renderYscRules();
  renderYscList();
  Object.values(pages).forEach(id => document.getElementById(id).classList.add('hidden'));
  document.getElementById('yscPageCustom').classList.toggle('hidden', !currentYscCustomKey);
  if(pages[section]) document.getElementById(pages[section]).classList.remove('hidden');
  document.getElementById('yscPrintPdfBtn').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function printYscContent(){
  clearReportPrintState();
  renderYscRules();
  window.print();
}
function downloadYscTitle(key){
  openYscSection(key, true);
  setTimeout(() => {
    printYscContent();
    switchModule('ysc'); // return to the list after the print/save dialog closes
  }, 200);
}
let yscListData = null;
function loadYscListData(){
  if(yscListData) return yscListData;
  try{
    const stored = localStorage.getItem('yuvaSabhaYscList');
    yscListData = stored ? JSON.parse(stored) : {
      main: [
        {name:'ડૉ.રાકેશભાઈ રમેશભાઈ કળથિયા', pravachan:'રાજુભાઈ નાનજીભાઈ ગોયાણી ગઢડા', marked:false},
        {name:'ડૉ.રાહુલભાઈ રમેશભાઈ કળથિયા', pravachan:'હાર્દિકભાઈ દેવરાજભાઈ બોદરા', marked:false},
        {name:'ઋતુલભાઈ અરજણભાઈ કાકડીયા', pravachan:'વિરલભાઈ તળશીભાઈ સુતરિયા', marked:false},
        {name:'હિરેનભાઈ ભગવાનભાઈ જીવાણી', pravachan:'શૈલેષભાઈ કરશનભાઈ ડોબરીયા મેઘપર', marked:false},
        {name:'વીકેશભાઈ ઘનશ્યામભાઈ સવાણી', pravachan:'ભરતભાઈ ઝવેરભાઈ મંડલી', marked:false},
        {name:'દિવ્યેશભાઈ જસમતભાઈ ડુંગરાણી', pravachan:'અલ્પેશભાઈ ગુણવંતભાઈ પ્રજાપતિ', marked:true},
        {name:'સંજયભાઈ શાંતિલાલ જીવાણી', pravachan:'', marked:false}
      ],
      short: [
        {name:'વિશાલભાઈ બાબુભાઈ ગાબાણી'},
        {name:'દર્શન હિંમતભાઈ મોરડિયા'}
      ]
    };
  }catch(e){
    yscListData = { main: [], short: [] };
  }
  return yscListData;
}
function saveYscListToStorage(){
  try{ localStorage.setItem('yuvaSabhaYscList', JSON.stringify(yscListData)); }catch(e){}
  if(typeof useBackend !== 'undefined' && !useBackend) return;
  fetch(`${API_BASE}/ysc_data.php?key=list`, {
    method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value: yscListData })
  }).catch(e => console.warn('Yuva Sabha-C Sabha Lenar list: saved locally but backend sync failed:', e));
}
function renderYscList(){
  const data = loadYscListData();
  const canEdit = canEditYsc() && !yscSectionReadOnly;
  document.querySelectorAll('#yscListTab button').forEach(b => { if(b.textContent.includes('Add') || b.textContent.includes('Save')) b.classList.toggle('hidden', !canEdit); });

  document.getElementById('yscMainTableBody').innerHTML = data.main.map((r,i) => `
    <tr>
      <td>${i+1}</td>
      <td>
        <div class="flex items-center gap-2">
          ${canEdit ? `<input type="text" value="${esc(r.name)}" onchange="updateYscField('main',${i},'name',this.value)" class="screen-only border border-crm-border rounded-lg px-2 py-1.5 text-sm outline-none focus:border-crm-primary w-full">` : ''}
          <span class="${canEdit ? 'print-only' : ''} text-sm">${esc(r.name)}</span>
          <span class="print-only">${r.marked ? ' ●' : ''}</span>
          ${canEdit ? `<button onclick="toggleYscMark(${i})" title="Mark (extra sabha)" class="screen-only w-6 h-6 rounded-full flex items-center justify-center ${r.marked ? 'bg-crm-primary text-white' : 'bg-slate-100 text-slate-300'}">●</button>` : (r.marked ? `<span class="text-crm-primary">●</span>` : '')}
          ${canEdit ? `<button onclick="removeYscRow('main',${i})" class="screen-only text-red-400 hover:text-red-600 text-xs ml-1">✕</button>` : ''}
        </div>
      </td>
      <td>
        ${canEdit ? `<input type="text" value="${esc(r.pravachan)}" onchange="updateYscField('main',${i},'pravachan',this.value)" class="screen-only border border-crm-border rounded-lg px-2 py-1.5 text-sm outline-none focus:border-crm-primary w-full">` : ''}
        <span class="${canEdit ? 'print-only' : ''} text-sm">${esc(r.pravachan)}</span>
      </td>
    </tr>`).join('');

  document.getElementById('yscShortTableBody').innerHTML = data.short.map((r,i) => `
    <tr>
      <td>${i+1}</td>
      <td>
        ${canEdit ? `<input type="text" value="${esc(r.name)}" onchange="updateYscField('short',${i},'name',this.value)" class="screen-only border border-crm-border rounded-lg px-2 py-1.5 text-sm outline-none focus:border-crm-primary w-full">` : ''}
        <span class="${canEdit ? 'print-only' : ''} text-sm">${esc(r.name)}</span>
      </td>
      <td class="screen-only">${canEdit ? `<button onclick="removeYscRow('short',${i})" class="text-red-400 hover:text-red-600 text-xs">✕</button>` : ''}</td>
    </tr>`).join('');
}
function updateYscField(group, i, field, val){
  loadYscListData()[group][i][field] = val;
}
function toggleYscMark(i){
  const data = loadYscListData();
  data.main[i].marked = !data.main[i].marked;
  renderYscList();
}
function addYscRow(group){
  const data = loadYscListData();
  if(group==='main') data.main.push({name:'', pravachan:'', marked:false});
  else data.short.push({name:''});
  renderYscList();
}
function removeYscRow(group, i){
  const data = loadYscListData();
  data[group].splice(i,1);
  renderYscList();
}
function saveYscList(){
  saveYscListToStorage();
  clearFormDirty();
  showToast('Sabha Lenar list saved!');
  logActivity(currentUserRole||'admin', currentUserRole==='admin'?'admin':'', currentUserRole==='admin'?'Admin':'', 'Updated Yuva Sabha-C Sabha Lenar list');
}
// Master-table driven leadership chain: instead of hardcoded names/photos, we look up
// whichever member currently has each role (and is active) in the Members module. This
// way, deactivating a member and assigning their role to someone else automatically
// updates the tree — no manual editing needed here.
const LEADERSHIP_ROLES = ['ઝોન પ્રેસિડન્ટ', 'બાળ યુવા મુખ્ય', 'રીજીયન હેડ'];
const SANCHALAK_ROLE = 'સંચાલક';
function getSanchalakFromMembers(){
  const members = (MODULES.members && MODULES.members.data) || [];
  const m = members.find(x => x.role === SANCHALAK_ROLE && x.active_status !== 'inactive');
  if(!m) return { name:'', role: SANCHALAK_ROLE, photo:'', mobile:'' };
  // Prefer the member's own uploaded photo (own_photo_data) over the legacy Drive
  // link (photo_url) — same priority avatarHtml() uses. Previously this only ever
  // read photo_url, so a freshly uploaded photo never showed here even though it
  // was correctly saved on the Members record.
  return { name: m.full_name || m.name || '', role: SANCHALAK_ROLE, photo: m.own_photo_data || driveImgUrl(m.photo_url) || '', mobile: m.mobile || '' };
}
function getLeadershipChain(){
  const members = (MODULES.members && MODULES.members.data) || [];
  return LEADERSHIP_ROLES.map(role => {
    const m = members.find(x => x.role === role && x.active_status !== 'inactive');
    if(!m) return { name:'', role, photo:'' };
    return { name: m.full_name || m.name || '', role, photo: m.own_photo_data || driveImgUrl(m.photo_url) || '' };
  });
}
const _UNUSED_LEADERSHIP_CHAIN_LEGACY = [
  { name:'હરેશભાઈ ગાબાણી', role:'ઝોન પ્રેસિડન્ટ', photo:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAHCAcIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD4kf4neILmGO21B2uIY7cW7JHPLEGTJPO0j5uevXGPSqtp41uLCKdbKwtl89twlbLyIu3GwFs4HU47k5NYssO1gQ2crwd3G7rj9RU0UWl3dhPLuMFzb7GMbzAebkkYUYOenPNc/s4diueXcSXXLyfU/wC0rgqk7Enc+M8nOVCgYHGPYDHSvRPA97FqN9EZ7G4W8igaXYsgFrccOc5znDYK7e/Jx8pxwel6dNJcQF4mWHfwWyIpGBGRuHO3BUHnoG9K6Ka0Oo/2hL4ehs4bSQTQrFHbh2lSJQ5+VgWAIwTjAyPUVnOCeiNIVHHdnrNh4qlk1Sz0670IwmbTlurG4by/s8rynIwwxkYPYnIwcY21e1rULBrRrDXLyIx/L5tvErbtxZsMpDF9uUwCUx8uMYFeFXPi66D2M9kA6WUh+zlh/orR7ixGw8NyTkkE5zVu41WWfTW1i3jjisv7SDPaRyEqHMbuCqE5UKVJyuAd+O1cc8Jd3udCrHsl38VdFtGSx0zSZVSBBPEk2CksTMAAGfC4J3/KwXdyByDVKXxZ4X8a6fdWqXSpAbu3lm2l4wWdTubacYB2sGyNpZQSrbct4A03mTiTIdkICNMxfeqnIUhsgAenfvmuj8HxL9tW1u4bsxzzQmApMqLHufHmbSeehUfdVTjkHaV6I4aMFdmEqrvuZutebYaq9pbRLaNZSkI8RK7xuJDg55yCOep6HPJMEmt3b2IsJb26khTAEckrNEF4GCpOOMceh6V0PxC03TrPW2bTUeaGaFLj5AnEWMKMr6KFGSSTjOcEAc3bW0O6KNt2x2XdhwTtPr9K3fKloiLyetz13wD4yub+wfS5Hdlt0dF3x5kSB9pIBZlRcshAbJYb/QVes9J8WkRJp3iyaO2W2d5r1omVn2MSSR/GCpwCOm7HUVzvgTTlivVstXgFxbo3mWzgRmRw2QBnIPRWC5ODuYGtj4vXGo6BpMcNhNdWkE4OWYLGJJ0GJQDGSx3Ha5bdjMZUADIPBUXPOxvCThG5XufijaaRHNbaZGZStwWMyKc7EVhuznzFGQWIbC7Qec4x0EnjzR9XskGsa/eWkbReVud5GV2SXeVAUYXCuCdoaM7T0y2fn+O/vY4pEtr2YebmORjg7mYAbie+Qp5rq/htdafDqzxXzQx21yjQzLMhZJEc7c8HJZDtKr0YkD1rojh4R1Zn7eUlZEfhTU9Y1eKK1FnDNHpl2mr3V202JWAO2QAtw2Q3AyT8nBHQR3Ettp/iV/EHhu+OqQSzGeJDvMhjYkKkhPy427hgnPGfQ1b1PSPEOpXP2JrK5eW/eOWRrh9gJwxjKMcAIUZj6j5snCcZ+l2Ws6PfzeFdL09LvUrydo5YZLJXbzISwUo57jDEg8fMM5wRWnLHoQ2+p7N4U+KnhttHeSbT7nVLiJmkGlTTx20sM29mQROM+ZG3mSowJzg4A+6Dz+vTaf4WmW+toNQ0m6K3BsjG6/IZSN8cyAP5mwKCmOfnBDbiDXn/AIViOq6xZ6Y8Md2Lq42zQyKQZUUoWSJcZLct8uQMFs8ivRta8C+JdT8IXVnoOiINS03UW3t5DQ3At03bB5hDEbcM2FJJCoSM4NYVHFStc0gpWOV8U/E6+8S21zaa5o1vHd3Nz5s/2R2ijjYRiNQIm64AznuSD1ArK8N6jfXnijSPt0vzaRCg+0yK7iOKNi4PLfux0UAfL8x+Xk5yte8Iav4Yci4UXEUbPCZo2YpvVtmMkBjgjuB24xirek6HrZjl1ay0Ka4gANtIYx88ZOMtsI5B2tg8/dboQAejmgoozSlfY7HWNT8CG8WGXQ7qC2upBcFGnVLy2lCSEmDYRlDlFGRglMY654TxPp+h213Bd+G5rlrKdtgM0QEsLY/1Z3FSxCYIcA9euS1d1qfwv1bxD4sOheD7uNJTp6XsyvcymP7QjCIoTjcx3FWGcEq2SBtwDw98F/GMdpqrap4elNpa+ZAZ5HREjlUZjky5QiNyNoZSchGCgZBpXg1uKSknsTeDfFkPipH8Iavcq8GsNHamZgVzGrRiCQr5mFK4kZ9oyEUdgSvnVneXnhnV5rMxRy+TKYLiB9kg4ds4zn8wc4xyRgnW0Pw5rlz4qsbGwsNQtr64ZbmxMwWJhGdzB3yCu0iMqQOG5Hdce26f8Cda8RwSa94htdHuL2BGuJrlNSkYybWZyrkR+Wu4kqSOnBAGcmlKCD2dR6nh+h+NNR0LXp/E2nxQGZVPlQzjdGDnb09w2045wxHQ16JoXx38WanqaR6/a2V3Y3twsCNCvlPCzSqU54JUhDwx6AZ+VNp68fAJ4IZ9OupdJ02927JIXuo7mSByx2kMrAMzhTjan3SpHzDDcVqHwsi8M+JDHqbXmq+F9St1hbUrFN6I7KHLSZB2KHRmL/dxsx8uVOFSUGylSn2LWr/EIAzWes6eqzG8t7q1eBgEXHMUjSMCUbCg7+QQ3RfmI9i+HJ1e3swt3p7xiVYJJomJkdnkLgNxn1jGSoyQSSCcHm/DGheFL+JPBuo6ZcTavowjnkuL2MxiWRly8iTR4cqXQkCNuisTnkjrtUsNbdYbTTJjplpe4mMoSNWimiCSKZcnALBSqEAgliGOACeSbj0OylGVkmWDqU2sai4n0qeKWGGaODdwHxKq7ScgDvgNtwckAEkUy9jaHw7qNukc0d7YxGS5t2njQi6VDI7jK4GR8/QHCNwQMNeuIXtNq29xcRxuAEhkkBMGWZm5BOGIJJ5IUDPPy5NHsYNbspRd2yQLcTyTD5GbzJ0YQqgydvKfKd2RnJHY1mayVjK0jxFZStb6X4l0t9NhuWlks7y4QEROpZRDKwztlBj3Ac5JQ8bMnvtCvb3xB4Wjg+zmHUNLkbVtOuLuACQzAliQFTO0Ap0CnCbGBA5n1DTNH+HEl5Z+J/DEgsLuFobtbOAvLJZMrI4PJBkTIyB95W74NZ2uab4h8Ha/eai2sW8s5tIpdPdVYGS2mVSeBxhgeFGCAQvBORRiPtdX1+Tz31hRPHZ3Ss9hFw73CXDws0km0BkUBSNwYnc3NZ+s3mhxaZNA2pR26Q26eY8ce3z7UPta3YHJRiAcYPXbk8riXXItT1DUovLlmtrjUbiJS4+W3uY3UpczIy4MZdoyDt2n5kIxmsLUPDHiDUtX0aw1RLG3iinu99ypzHIRMHXdH/GrqmVxz86nqAQxxWp0Gk6Nc6/p8brp2n3c7eTJaoWkivDLK/lz3K/ME2bVBUcFN5Pdq8q+ImnaP8PnGkzxS6VcwmG4vZ47zJ85JP3jokgYsNyEfLtDAFTk5J9xtLtPDWg6hNr93sumzLZPFb7zLESYljKMGAVpEB3nIBfGOWNee/EfSYfiOH8da1qNvOBbW1zdWz28ibJPIjka3uCG3hE8yFwclSZSzKc4WWD3OXmtvDni3StWszeOmp2sjwSk6Y0z37TzMAzyLgAmMwEFXyMHghgrYtj/AGd4Vh3SadcR3zqlyLO0VPs8pcueu8yxhZVO4A7XEeCW3JWvaWXhjQvELzeHZtQ0/V7KSOBG8xPKt7SARJHdttdcQvGd3XaS2CoAOGePl0yLRl1nwrb6jc3Gpybor+ctNK0SmNWSVHzkl5ARgr80WCB1DIZD4Y0vUtEuLM2NvHFqBUR3DPu8mSWaQyRkrlF8t92Nq8/ujuyCc3NX13U7K4s3t7e5tLnbMqsY9yRI6eSwIJxhARJyCCOuSoxl6Z9nWO4t9O04pPM8a2rwZfYMMC4dGxkJGDnrlz0zW7HoyX9/r8lwwWSzsJJ44PsoZpYdomWPc3zbgHVj94kkKQQSCxHJ6VFLPLq8OnslpE0Lac9xNIXYoWLGHLZ+YvIW3Y4yQCBkVZs5bHw/pkcU4j+0jbEz2ccsTQsG81omZCMt5hRw3TJPG0SMuRBYiG6lt4YLqee/ET/aUcrGXSQsI+HRkDKxY5UEEr2NdM+rLLpcun6cx1ZPODSPEyCRIhKZWlk2kHzPkKbd2OpIwtAFjTb2w8kT6NJZyRSuCRcW6+SkmOQ8RU+UdmB8oGEQDtXfeD9a8HLoVqPGd9ujUsmnO7mMIvmpKjRsmCq74/mIKsN/3goG3yvV76XTtCu5tKvIhc3nkxuwhkkkO+RCZWVSFXh0U78nLTAn5RixfaVfasdMHh/VEvbf7QYkswXVZpPLMjgrnzNm6IMAuf4SeDQFke1654b8Papa3OsT3tyt88cEx1Hyw0ZRmUAMhXcBseZgAeAO24ivL9SS0N3drcTXd1bRuIZPNgMihCoZW+9kgtwD2B29Biuq0/xn4jtfDEuiajLHcaQyJGIRBKroVJWSBZF24+YBVIYqFVuPvEZljf3OhSXpli0JIpzGgMg8qZX3ZAR3QgpIwDBeQqsvzEuWouBD4F1u+luv7ZRpbSaS28wLFAwXY+CV2kFWBGAFI3Erj5gSK27nTrN7OOFIwXZ3gileFSY4w7RqWH8KliQM7vvdiflzlaG+0eHWdTtoLRraVo4g9zkzz4dFj2jIMAOAyHOG24PXfx8FxqPivX57lLGwtkgnS1Q25eEZfzI3dWBUCPdkorgEAgElsRlAd7F4Q0NvDt08mnK9xqVu9xCZMyRJGjA/IzOBIWJ6Dk+YAFGVI5m4+Ct1LptnC+oG2M8axlpna1KDzSxjAY4cAiMZYcAgjbxu4qLVNN1XxN9qjTX7Jo38m7SC3/fyyLcuhHLRsdymNWwV+cFeMhZOv+KOs6Tp1hpba7qgZQIrryIZJwAzBUaUyqxWZiu07umCGJXOAAVfEPwv1TwJYx3R8Qz6jHxIYbDZJhmfoZCu3bhVLK5QbnLZzv2+f6jY+LtA0hmW8sY7q6lR2SJQJ4pPNAXOQoIDYb5SAW3cbTisrQfEGnQXU8uoi61ZlgL2yf2iZY1dcbmigGxnYsAMoUACjqMkq15pcdjJqkeoRWs80UTSQIwSQvGp/dRsq5CgBMqhDZAGSCxDitQMfxB8QvFOviym1XXdalYKbV5wJgzRoFlKYj2q2Nuc5OMDnIqHU7uC8sJ/smtzTyxkmNLmSXZGjNwqZUn7208k/eOKqahqH9oaRb6eknn2qW5UL5aFBuicSNyNysN4yMnkHkjFcz5P2uA+ZNulhIf7PuARI8DaSvAIBwfQHqV6naMNTOU9bG5b2kqmVrWOO4jDJIl3KphibOQHJl/u5DFuCQTk8KC6TVLAQWttruu2ogEro9pZ+U7IxhzuUElRnC5IZWyGBVe+bf2lvDb5W+aKOW4gVbmF3IUZOAyADcu0sPvD7/IIwTefSrez06A6dIjw/aEhfzYo2mmdtwZlILfL6HP8WOwra1jJvUl8/wANL8qaxcFRwC0bFse/yHn8TRV2LRtOESArqDnaMsLiQBuOvDUUwuzlopdRsdVlsbdLIr5uXTYsiKWxuKk5PAI796saZ4P1fU7qd7WGRraJyyZUosp34AzngYySR2U16vpngezvrd1dVF1NCR9oMJXdyARg9DtTk9c5rqdJ8KWzKzxG3hjBby3kuMYY7QAQwJwCqAYOD5jcdaz+u+R0KhGx5tqOhXEHgeO2ntYbH7JBHJDG0mPPZmKhi46HDHcvfd1HAMNjpF9Hr50mwthZ3lrHJLDkODKVRFMfnZIClGfqud2N3IZa9ibwZZ6x9j+2Q3rbkAhKK+/92xxzu2qQ3mEEjoeK0rDwVd+HtQN1DfpO6naj2iQrNvYk5ZmxgAOp2tkbkU9cEaKbkuYzlFRdj5Z8QaDfpLfedbNpyWt0IPIkG4xAlucjA7c4yfbubsPhWe90DVde0y3mujp16LRikgAkXA+RV4kVlJDFjgENjHBz9YWHh7QJbe702/t7bUg6Kl15agCRCOPmyW4yec1z0ngTTfD14LVbEwukc0rt5Q23chGIwSvK4D7eQU+ctjK5qZ1JIUUrnzfq3hWVNZm0TS7S61CBrgRi8ES7pCEDMyhcbflcE5/ue5rpbHwJ4w8UeJLPTb+0XSgtlcGFI5Pljhjd1ZTzwW81UL55B7EDd7rH4a8MNKrWwAaNkRlkjeKSZQu1myVXO5cDK4HykdQauz6dp88pYQmNk3yJtZkERJILgA4AKt2+vUA1zzxMmrHRGjFnkuqeAIb+5m00WuoyX16u+ae4DAtMyqcqxbBjVQEYkDHy4CturoYfg7ol2bVZbZY5UsokeaHaoaQKAZcMuMnDDHqPpXdzWuly6hFqCSPLNNCY02ckiNiRtHVvfO4EBcgAA05r5NVs4dON5M1tZ+W6SEM33eDHuU/P253N9485GBmqkmtxuCi7I4/wv8PdI0K/OjXF3JPGkZlScuqLtYsApIBLEHadu0AZ4bkij4oeAoNahstMtYm2RyASyqAkPkhZJNu4Fiknm7Dg4DBiCOTnt4dThu5pLOC6uLayVJQ7xRtuaRVQoCc52gbXx32kfxVbWOeUCa63W7ytHazyyTlkK+WzhDj5c7iy8rgEgjBNLm5HzXD2d0fGuseFtQ8EaknhbxQ1uhu3tpmmtnDhU3OPlx3GHDDj7nTmqr2thY3TtZXL3CxSI9tdRIVDqkmVfdnOcEYxyGORjBr2H9oH4WTRalb+MNLbzJL+WCxuYIrVhyVJ84MMjgqVZgAPmTuTng7SwuNB1fSJpNDMMEDKl4tyrPGdrMXAOw7cgZVl6KxO3qw7Y1ozinfU5nT5JNo9s+Guq6LqFnOfEssUst+q3WnRXm9rgLAHVYoyWCGRZAh2jGcluSVK8b4a+F2tTeKpfEXhvVBZW1s81yb67ijKmP5ljSFm3Hd5eVYFVGc84OBk60dF8Vz6VpOseJ0eHS9QlmW0XY3+ibWlZgqljjy1IjJc/LkgHeK9B+HWoa1pPjjUdF8X6pbzWslubhC1zsmO8xpDkBBGrnYu9iScup+VSRWM5NbFxSe5niwv9O+JusaBpUbadaQQx2WlawbYB4SER7r5XG2QMTMN+19u7OTyB6fpvh+40DQYLHUNVn+3bYm1KS2RllabG8PGrAFkZiV8r7uJAABkbeO0TxfqOoS6hqd94jspf+Jf9p0tGhggQSvG8T3D5Yl2zEQu852kdSxFJ4n1fxJo8Gm6Zf63a3b204uLmBI1idvmCtGrsxkf5gAznDbXJ+YkZ5Z3ep100lodhZ+H9NsLSRItHtJdNmC3ssJTG92/5aZHKkhI8j5V6nuav6RJ4b8QLZ3GmSxw2kN0syNC+JVkjwwcsfuYMzHglcEjpkV5hPq+vatY3tsblDeXEigXa7SGXC5b5WO0qJNxAYcspyQQBd0/ULlLyBLnSJ90Nr5jGJ/N86XeUTbnI3gbN2APTtWLnLa5soR7HdHw5aR6vcXGl+XJLeWsKyai8ADshjaNZDMQVJKlGG1Qw3EDjCnT1OX+yJYrmG9uJBEu22TALvG8gACbUwrcIqYPAUkDAycXwz4yge8a1vZoo4Y4w2nRCJmYrsHzNk/MRypBICg56cqXfiDwv4vvtLsdXke6t1kkhZvtD26LcwzeYj7xtIkcZXIwcHbgcitoydtzOVNXLDI+qQTw6nphtdW0eZYJZ1hYPKFUN58W75niZyCPQxkYxVp9YTUJbaGWRZrXT5SzpOjRRW1yq7mjZkHzBgF+UHHHSt3TB/bMDzncmoRQotvcPKgnfGOX4GRviwT3UsTzXIa1cXmp6bHGNBKm41BNrvnZDLt2RNKp4AYyMxbB/wBW3pUOUr7lpWViY3UQRxLeSadJNFHHPJNEJSzBEZvlZc7SvCnsUOTjFL4ekh8w6QkhMFrbLF5bjIacONq4bPlu5fl25OxTnpWhDpcFnqMdzpulPdCFwmJJ/lMLsqsGds5yQ5J64faMYXEtvfR2viO6u49Ns2GoSQyXSySFfN2AK5diTvCgowcYGcgDAos2OMlexDBJqdvqNrp+r2FvJGS5a+HDQnaAV3HlsYIUDGMgHKkKGw6jPe27afqRmYoyRkwOyspRnfKyEjPzoU3DDndnJyDSDWYEtI57uzMHmSy28McbmaJgrAD5zls4dSQ2R8gPXNRWdtaXWp2FreyQ3FrMokjMB3GSaNgSWd8sxKBgXJwBGoGCRVeQ5W6Gu+kx/Ybe5tFL28toESVg6LEG3sV+XIViQshPUlVJrMTT4bfTiV1O4u5bdJG8n5AJAyYjCqqqBhjBtAGTtIBwGFakqro2syafqE7fZ75omihmtApQTExgDC42kAkZ+YKQCykg0usRT2t9b6rbWtubG0CtNvgaJ9oUl/mzz5QaQqRj7smOqmmZ7nZ2Gr6z8QtHv9NngNprCeTeW0+GaG6Kpsb5EwVx5arIAVI8w44cYqazDrUXgm+0638nUbt7z/QYkTzlNs6My/vmGUVnLLuI+6a5S7W3t9Nub+G6KarBbRT3E6R77aWCdpAcKPmZXWF02nLBXTvzWt4JvNFl068/s+ae0uEYXn2i6IVYkm3Oo3EbGXYEOSCU8xQWUAldFscsvdk2Wfhj4SsdQ1J/Dl/4haSCySG/hQvJMGkwzOBJ1kXIJIUjJC8cGqfiLS7PQNbTXLK/Z7FrMXumNPGRGIwVleRRISTIhZBtBAZSw/55ivQdVTUNR0nb4R0a6h07R4ftGnJavMLubblgiqTkO0C7huJBKsvHmYGakNlf/DKxY20upSW88WowQTxoJbSHYh8tj1ByueMkfdwAoFN7EqepyVz8R20GW5sNZ0poJEVreIQoH8wRvE6kBASgCT8uynKuxP8AEK4rUNN0yy+H/iKLU57i51LVNVuGWCzwFt7sOiooYkZIc4JAUncxPK89F4Yuo2kuYtatIzdXk15bxG52eVbWnkw+Xywzk7CuSM+XDIp6pVLwfPoPhHxNqMvjHXIwLy62xRvqBkhmE8Ynefuj7WQYKhSTjcCRmoOhWauU2j03w3fPDa6bo2op9mnSOMSq5kE00b5mxyRv2opXPKq2Fri9GuNf8aXltr3iTUrVZbuAzwRo6BZIHmdWQOo/cAjyiDuPG7GCWzP4zvbbX77VtZs9GW80qS8NtAJSUxEyOkc2ODvRoS3UgmRTt3AGt74fWNv4btYoNTiEouvsphjvY/KU3MYxJExH3BE8jE7lHyNkgqqlKRlLcqs39j6I9jqq+UTbsIr2AKYDJ5kTmRHwoJwoZhnpI2Bkg10uj6ro3hrXJls5leXUBftNIyo5kVshIXYryoVUdApGVIOSMiqd5e+IPEF0tjd2zLa+RZQuFEX7iZWJk2hUA5EURPmMMPGYyTwrclrMyS3V9p0l5p9s99JPhIFVTGjysBuYMGCKiBfmUMkfBKZOa5bkmV4t8NTP4Zu9Y0LVUguist1cSyK262geR3GT90YZWAAOcGPHykCs5t2n3VvFdWqyRXl9PC4UJHGZsjYjDezblBlQsQdxJB756/xR4PgtvC+iQeItV022sbzVZ1umd4lmSFUaWKFUdMbVkfJ44XYASoFc3qTz6vp0Vzo9i8V4biaTTbya4XYxzJvmGcJkhyxJ5wilVPzsjtYDb8P2FrPokOna/ew3el6fCjysyyRvIjFGIYbQXHz+ZkkthmZWGwg9J4S0F77w3No9rcpPbygGPy53JuVwCCyqN2QqKRwAFyODkVy2h6dYmxkvJ7BRp1m0gnBjJeSKQhVMIb5SAGU7SGAD56ZA0NNN7oeqnSvDkk8SsheC5iQvBcyGHDAZ6SlmfJPB2tuyWqWBa1F9S03WIdZ1iP7RHaFrVbpbFFmuSDgpOqY3DHXILZReAGO7S8TWJuPB76TY+HNQuJbotNNe25K3bSjIz5Z+c4wcg7fuydCwJvX2nG8nab/hIVVIQk93cReXHBcSShGfexUlVxuZduGIZOdwJrP0W8uNOtbzVLbUtRtWXfBewXaBopIkH3YpTjG7YCxzlgPmDYIYAqeG7fU/DOmxzhbqG3jla4gsmUNFGwMiR/MQSoPASTHzJIuRu4NbWfElp4g8XX2s6/H9iilQB0sINk1qWBWMBVVpIztSYkszJhnYcsDWBrmt65psUun2Ukt7Nr1rNE9zHceSIfMVpJBMpXG08HaSfmVskl6ltNKufFB0601m4lLanC0P2KOxkmCSiTL7QqOM8M4DLkLjqFIAA+Iap4l0HUrnwxd/Ytd0qCU2cVxbPHc3MQMiuPMUcvJ80pyDyxBXPJ8fTSliupZr2V9YZZY7dLuWd/LhKBmbfGxyNisx2soySWxllNdLcefFquoWN/pmrajpumXAmazvAR5krM6sZIzIHjBVZBtJILMCQ3DHOstQS1ht/tGjPZi8u8Rm4jHkoiHaqgL8zjIj2gYP3MtggGgBY1sbG+1LT/D9tcmJUju472wD2sUaKxCblwXd2ZArfeJjbJI4rBudCvZbc3CsZLu5eQxWdlEUjttzDbChIKg85bPyjgkfLWmup6rCby2ur651G7juBNbW0Ns8Pkzq5wFhUNuUKSFZwwG8AqCuBLFa6t4h1Oe503SxMkMB+zW8NwpRLckmR2AKeYxViMkKuHJJJXFUkBx2u+Htc8OWrajczWbRywLcrDbTsVjZ3K+WBIM9JCWyepJzyoMdrYwxWWnajqMM095dL5lpFHagLOpG7c+0b8q5K4GPuj5RiTGq72kH2Sy1aB9TvJY5IxYjesfmcoCzDYzPkY5UECMgMwwxtW9hJO8Vvp1/LbajEJEvHETBbFRhWESKu7auPlOCMAsSfmB2jsc8/iZUs9I0x1/s46mrXSMoeKQII7fG0lip4GSCAQPmKHBIPO/Z6Bd6bJb30FhJpklrgtdXiExR24cgRpG4OGLoONuSD8u5nxWFqeo6Ppkd3pOsvdrNcPE5iAzLM7HjeoYqQOG5AIyRjjnKspdNvXGta7dvZ207mF4/tKTXIiIYE+UzhpC2dhLBhtJHqKdmyTobYzC3iFpFetAEXyiRE2Uxwc+YM8Y5wKK59fHPhCFRDLocm9BtbfHCWyOuSYySfqSfc0UcrA9PPiS8ttNhey860aQRuzXFu0sKhiEzlGyoLMOOSGkHXa5HS+GPEy6jdIzyNHE6sUglt9zhBIQi7QQCyg4JyQSMjIwa4Dwr4M8SDzbfVruzSNkW6cFo2MatKSfNcKWVy0jFQxIZ9zbWZTnR0+xsNL+IM2neJNWLNagn7KY3TyEJQxsR8wPAbOCTnIOMYGc8PKk7WN4141Nbns0f2WJ5p5jK8ryF4gE+fzBnA2jsByU54zgZORkajrlnZIItc1JQ823KW4aNZ+SuMEjceR1YnIG3qpNq6srq80qOZ7u384SHyZMKolyx27flzkfKcAZyF5yRjm/HejXGhXtpNeajDBNF/pLvA7rKwwxBBO7cMKx+VQf3atlRhhpSw9SoroU69ODszo9C1LSm1YQWUl1dPtw7Wz7lMRLqWBKsz7dobgEdOccDt9UtL7VtMK3kcMsxwBHLFH+7TaWzuGc5VQM8E/MCMZz5ppvjbTfCmm2lx5HkJdTRx6fKBsa8cuFMcW5sx8hlyWKlRn5lA3YHijx341t9KbQrbwbr+k3dpF50MzaXKsc6LF+9dsrlVKF3VfmIZsMeCa6VQlKFrHNOslPQ9C1G0ubKEIrRIzAJH0yrqrMzMo6sw8wZOeoPUZqdYY4T5Vzp4jDIgijhZQN4GdhPsioPmzn65rxDTfih46gtTdvoqXMxyjSm0k2LN/EPM3MuSpYAFjtDAnnGKF78X9V1C3guZL21hWWYfaYkhZpC4Yn/AFYOWGSCGBHIIxtwK4Xhaqd7HUsRC1up7w+nYEf2ucPbzeYX8yKPYw3BGATbkEFkYeo3VJYatpBtyqx3tlnZEUjzJGEaPcWQ9cE4CquSCykjmvnn/he/jhrmSC1htsmcFQY3LDaw2g4JO4EDPbaDnPNel+Bvixc6lbtZ61p0mkzWkE8jI0crO4Q4ZiBGXXcW3YxtAjO37m2onRlGzZUailoj0rTNH1fSx9qmQRy6qyhpHiHyoAHyrHgMq7+CoLBUxyCaW4bTbe88+fUVZYIfKUzhduZGVXUsFXGGMRAYsQu7gckyXPiW91u2Gi39rGNQt7hXsfnEUBj/AHjIu/bsJVRImAAcKWHLqx8U+IHxa1vQPEsul6XFJBcWyz21xA99CJYb1W2PG+1WcHaFBbADDPcUSwzkuZFKrZ2PYtQ1WBpBqC2/70JJbvFHM1qUZZl/cPKvBYqqjansdxY7Tzuv+EYvEulRWK6nHHHKEiuLu8iWWd7oOGVvL7iM+Zt+bYoYtg45zvA3imz8eaRHMuh6hoyWrCC6hkIZXdV3F8nqxKKChUnJLbfnJPUN9paS002CKScyENIrxqsbSEq3zxjncX24YoFBPIBxuxjCUHY1fJJXPJLv4T6tb3OmazNe2OpssgLNFERLKhkcLKyrjJVfLG4crsIB3EsdOWz8U2slmviWw02C7sL2UWl9HA8kbxzIhuM7mJ3N5p2gfLmMgAAYr1a30rUJrW2jaP7DbR7YBNJEAPKyu2NHRmUsQrEKpIyEIbnAx77QrW3urtb6aAR2qGOBVO8NKhI2hABtJR0IznA6HrVyU1qyY8j0R5RceBk+2atfx+UsdszSwRwiWBjGWWRYYlJOAQJZHKA4MoHyqK6a88P214llEt/dCKe3tfMeWGOFXkjGMhwMybyq9WJAzk5ZhXZ3mkxahGhuo2luY15UnqighgccEENjA7ZHQ1Hqcv2K2gtJJDcJdgw2sMse8ys5+c4PQByijd0ycYrmlJtmyVtjj9F8E2i6RFLpeo3LWhke2uLZrVJIIpwWYqwxuG4vnJJBKg9a0tPtls9Ws7H+1o1tLuZ3lR9sFwjHcCgcZP3icvjoF5rufDunySi88P6No1pdSsA0q+a6ZTcMQbY8sGLn5XAI4bIPzEZXiDwvPplpZahod9FLYRyMRqMMolilmiJR4hsBJUAAMH+8TkAgKxr2EqnvItVoQ0ZkQ+ErPXALzfqEE1luRtySR+ZufLFVIXzAojZ/bIYcEALZaY1xD9tkljlhu0SZTInmohC/IyopUkhgF3Hn5cdq7m1im/4RB9R1GSOe6huXSZHd8P5abkYueCTtjXgcIcZGCV4meVtT1WKdJYz9ifZcwoqCST5AEdlfnAAToByzZGRSqpwSHB810jXln8QeG4bBrLTLXVkuVWCUDezrGQglO4ksmwtuxnq5ADbvllj+IekNEbHXbOezufOdoobsDIZcBuFzkcFgOXH7xc5Kqd3Tr1EsLkGOCKykTy5YiuZI4powC6uDlchXc5OMZAHY8z49v9NhEElpqFibiSZ/spnt4DHPIyIfLfagaJ0RoyMFm7BWHFKK52hXsmmei+IvCFjDov8AwkJkvdNMKuqB3bMm4bUkdgxVSCQRhckxg5IxVeW304tbLfReRZTIJZLmKJA0S/ID5mFJIyygscDAUZzhX+d/BH7QPi7UNSs/A+s39vq+imL7AkslvFDcSrtZIg0rYdivzrklDkKSCdwr3ZrGGBJ4opLrY0mJdtyHXyhghD0YFy2/5hkL8vQrXXOHs7GVN3uzN1mO01RLu70KO7stMuoiSI50ScFTJsk35AXcz/Mg+UHOSoAAydPFzZW0Nzp0H2kKG2W0dujTRQCdJFwM5ctuUk5AZVYYPDV09olrL9qIuGimne3MzQq4yEjVQoGQSzJnnqMgk7sms3xL4bt3uIddW9uJ9LsRF5seGti5BYHceuSGdeOCMjuaylG7ui1LQsXFtq+u+I2g8OXsurRpfRQxWcdxNGyMHRmlM+7IVAyud2cBNwwN7J6ff/DNrWxHh6112DWNc+z/AGq7sHGwmMyN5rKqgbiCwyp5IKc4GDyfwwht/DnimLWv7Q3x3G6xvblwVa3hdAyq4VsFiQQBtAc4BOThut8UtqnhvX7fxzoVxLeWOoaa8kd/FcpOkyZZlRpd5ZW8qONZGUlSUViykrhWsc86lpM888RWk2kzW91FavYajqIZNNjlT5rzDJnCqpZSgYSKxXBVgRncwHa+BfhprXi7TbfxJfrc2Juo3tHis5kaaDKSMu2N2KtC3nRu3yjKOhIJC7LPjuf7dpkPjPWNIW7tNPt7i6lie7kL2u8zPHcLIQshbcg2LuJUbRk78nkotSvtO8O2l7o93qTw6PcyJApm8qK8acfIyRSsE2bJSVLkleARycslu5veCm8UfCPQm8N6xf8AiHU9M0OaVY7gzssctu8SMq5lYFYgoUE8LHibJCq5POaZ4pPhX4rJrGn6bdzaJ40Vne0Cr5dpcsXd7dnbdvPmxXCsOpL5Xjaa73Rr+98JQv4e8VslvGumCYpB+/uQ7BRJDIGB3qkaRhCdzHcuGOQp8l+C+sXesX2u2PjdN1jZyW1zpdwQ0P2KfaBFtEbDbHIq4XGcFCF5cB3LYVkdTrMFtrvxBvtVk0+O1XSEis7Wye4hgFuwjZmG4ptcs8jDKtkbo9y4Xnj9f0z4feMvB+lGG4ay0W1nV5ZDEqP5jFVbKg5Xlg7O4DfKyjCgVveOdP0u/wBXvxBo8sVjqFvZ6vp0MTb8zZmWZGcbtzt8gZDlSyt1GK4vxhaSeKpIzcbdN0+G28q4iVvIN2EMbLGwIwyjzGy3HzFhUrYtMt6Z4deH4QhNQtZkkspxC7W8xkMrNKJ4kkHIHJRNz7gM9MZz0FteaYPF11LBdnTY7ix8oXcVssrRXEUkn74kKTufzOWCgBYuSOCOhtrmwttGtNI+0WlppmuRS329J1UXRSOBPKLtwp2h2LABiEADZauM0y81bRbLV2vbO4EutztDbeaqOsUEzCFy29ifMVo7dnxgEu2ByK0iS9ybw74gi0vX2vrLwrPEt7I9xYwbYnZYpYz5Kow+ck+YGZSR5YMWMqMtiS+EtIuNVtLwwwXmjyWTx3KW28+cY+J9zNyCHkkcYxlMg5xWraNP4PsdKn8QF7K01G8kvEvpUich1RHZRGpySRHKSAAu6ReuQDR1rUJ/FWsXGv8Ah7VYv7EubozNbWs8yGAkBXLkopZWY465xwQORVszbdzE8VeFNJ1Sx0rV49TtU3XUlzHatbJLCXldvMkAEZJwu1evzfu16sCOUttXm0e1j0+OJLVtJnWSyF3CZpWSRfNWHYseCpVVUgjBLEjAQCtmSe3uNDv9OsLZlvIpwlqzakjeREsUtwq4U/daVCN3B+YL0VaxtL16ex8Z6t4lgVWsLKRD9pLma4aRImeNflJDQqkbBt2T8oP3mBpCuyPSb7WHXzza3Nze3nnzRQXVuQkCyqzxnzF2pJvDsFUAZVQMxhMHuPBWtXc/hmQ313aTzWU8N1B9ocxSpIVdpI1IXaRkltpGDu38KpY+feFmuNU8Uy2t7cyQWGqxSxzvBIEt4pyis8yxgbBkg9AASQcdK6zwnr0cjarrd9bvJLpUD2tlJNEBJdPkAMy4xvbCKSFJYbepwDLLWx3ekaVHfTf2bbtp8LiaNVFlNvimeJI2JkbanlgbB8rKSnzjrmruqT6VHJfymS7jgSWGFTaLHOzvGSSytgcHpkggOQcdSdLSPDFoIVmlezW+toROtzKFt2lBUMMISRu2bBj0A5INc/47t9JutPjh1K5sLG2jjT960580kKZGO6PhSoySBlyWUHKkCgZ5t8R/DmsavftcaPeXNxYNIpngtsqjKPvsGcYYsqKAc8bUBGOvMa54j8TWOjtfeGtfmjk1EBrq5t7uZEiuWAaWOSNl270ChS+0rwj/ADMcjsrXT9Gmvb/w9DrXk3ctti0vBK0bTGQLGIm3SAjflstxynAGMmp8RPFNn4YSewtzcQXVxCqzypbFYyyoiAmR9rMeCRtyoLDnkilzJEpNs8xufHXjGf7TDq3iK2IuEM84lsLcM1xtG0qUUSBmzjcuBgbhgjiyJrGHw/NqFx4w1W+m+yNHaSt5jSKwKuqO0vzoFyAdvfaM9RWO93DcX804v7YyIst1KYnWR2kb5VCqvHUk8HoenXI1sl2Jri4sSI5ERZ/3buHlT+8SMKehKr7E54oTuypRdiutvfXsUrafcxTxRXSRR7Y2iRLj7OWZi7hgpwUQ7SOSD0UYu6Zr3iqa0bVPD+bPT7izFi1woSMFt4EcUYJJ2rkSrt2MNrknjmJPFOnXGj3mjzXSLb4DyP5TDyXOVZw8Me8Ajau04HLHccnGXNJd6jbHXdc1JrixiiMVpbQxGLzTuJJYcApu4JOS23kkYA3iZ3aK0VxHqEzBdSmstKhkW1YWuI5b0gRp5r56cxoxxyf3h4V9tR6jqg05bjT9Psn3SqZrRbidozHCzAxyTbSgBaMqSm4jOPl4Bpt7eRx6fHbS3Jnn+a4SNUjCRSOxLH7uWPvnvXNatqWrQ3sV6bhmmZzmQjuVUZwcgnCqM9cAeldKhdGUtzoNd+waTKbnRrtJrpcmSR7YJGoIwUQEYwOcEevtXKw3EFxKlxPE/nCbccKNufUfmf09BTFuH2TRynzDM5ldm5ZmPcnqTx3qJHQNuY7T1wWIHtV2sI3wbdQFWyhIAwC0ak/iSMmisMSahji4FFAH6DtqvhnwlZanpXiqPznvrdhd3cl5Ez2vzNJG5eXyVMXmgfOTGPMwuwKQa5nxRpPg/wAQ3+l63oPhjTIY9P09INKE8xkkmghWR5mnZQscZHnDBLOCFBReapxG70zWtVstU0aKW61Ul9IiF7FcwtcyMgMMk7IBh2hVXh3v/AG3CSoPEOnaTbeHb++ELtpbxOwWztiI7K5iSRYjGscpZQJLj5uA3zjkFdx9Kukm20edh09Gek6Np1tbXen3Wp6DAumT2WbTVYW8qW2lCM7boygXcZNu0g/KI1Y7iyquhrWjaNceH9GOr2iW0s7LZLPkrcObg7YmSfylYKqu+47AQI1DKy5z4DbeNdHaW7tjJqdpaxaYhtkvLp7cSb/9c0qNxukUqW+UgPGAd3NfTXww8PXfiXwbHLbzyrZX6RyNM88ksrbnLmOJsK0YjBkXKnAeWQ/dBWtcFJMjFc3MWtE8GeHBd2Sae6NFFarcTWBhie2kBRS0salEaNiH84BTGN5LNjIrat9X8LXEmjnTdXa8utbyITbyeZHNHbyDzvNfaMmNVcNvG5sMjcnaH+I/BOr6s+nx6Z4hm0htNJmVhCk0VzLvDKksRIJiWTbkf6zapUPuYmnQLJ4c1B7Dwhfact3vjh+z3kBMVpDMA3lnyQNhcsrAfM2XXJAwBtNJSdiYNvczviH4J8K+JNDls/EFsQkUkSWMtzOwd7hgNipMwOVklAjIfO4t8vUEfPPiD9nzUdcTTbWw0WGSCJ1jivrh5SJXQALGGxtjO5I0+YAAyOmCwC1734r1vwdr/heDxzd+KYZNEtrWOBobqzM0JmV/NeDacPKWUQhogx2/Z+Nwd0rivDWty+C/E174VXSprD/hLkuNYEGuTTz2UU5lZYizqjtJI6rJm3LMxe3GMM2aqFRRTTQqlNyldM4dv2FYNR1HTdS/tePTLOK5ghvbCOJ1d4wqlnRmxh2+cDt1DAMGUe56X+zT8JNA0uSe408JLa2vmXGozXex90YiZpnKkL8ojViSCo2v0yc9/ol/pdzf6hbTPfyS2Eiwu9xEmWUSS+XtZcrsRU6g8FgD824VzfiX4teAIv8AhGXeObUbfxLYXd755id7E2EFtO8quR8jMjRoHVhuXzMrnc4PJVhGWrR1Rk4rRnwv8XNc8IeEPiTPY/CzX9R1TSU/cTFzEptfO2AJaynZh0WNCgCbdpfYCEZh4/4xlt7vxTeXJu7y6WaUSNcXLGS4lfAJd2bO4ltxwSQM4yep2Pij8Q/EPxK8Xah4p1e5ldb2aPy7cosa+XEuyHeiKis6pkbiucl8HDEVy92txOk968DMXZm8w5C72I75xnJYkccnOea45QV7I3jNrVnp/wAP/iuPCKLDrNhqVzK+5rVzNvmmdyoBIHLKCvQ9SRjjdn6I8F6lq15eSaiulw2en/Y45JhGpJuZGkKyLkgkbQyHB4ABbBBUD4ot/wC07Z4Llbxo8fPHKmUMexm/izgY5wecZODXdaF4/wDFNtF/ZMOq3MjXWSZGIcpwCWExB5VQMHOAAACM4bP2LTvY09tGStc+nrf42afqOvzWUmkzy3HlkLEu93kcIGRiPlJGRL77VjKkEhTk+PfiZ4fsLqLXr7TvEJsoYvs82oX0e0XF1552oiouxAUMrhd+AuzjufEPDPxK8RW2qWqX2j6fqKX6pAWYK0rAyMQuIiBuxNKnQH5eQCTU3xKnvrU2+jeJNM1TSj9mhlSA7jHKjZ2zjcTty6MNq+rZAzyPCzqq9tCVXhSaV9T3nTdRiutLi8Q6I1neaeLdbiAhyuRg7tzHODujf7vHygVbgsUuma9W4kv1kgF1HhQkzKcEtwMEcMcKD15AABrl/hvN4c8F+AtMMEu9NRtWubqccQQ5k2uitI3CB3jGNvBZ8Z3ZrW1TxZo2k3WjhI3kOpyLZwfZ4t6FWD/M+D8qgJJk/eAU4JCsw8qrhZxk2jthXuW7q21BYodQstWNosLII33CN0dACWAA5HTPzFcryVrsNItPB/ie1SJpW0zUZJ7hrqG2QeRdTnavmSGXKR5ZS+VC+3ByeQNr4+8RXq2XgaCJ72CF3mgvrgqsSthYpDwyur7pIy5YBSSy5VBnt7f4G+MNQ0q3mN7btcxxSC7guopbeCbKBldyqgGTeIyy7RtG9RzyerBYOrLV7GGJxVO9upxXiy8h+F82if2pc73uNUkiEsLEqIw6l5GRCBsUBVY4yMowDb3I85n+Inh3StXZY0fTdUWcST2moymCSaNQyIySoCrs6qrKDhT79T798VfBXhqx0WDXvH2q6XC+mW8UT7o0HnReYAm8HYrFSIiWI6qSMk8fMN7ot9fad4i8JeE431ybTboQzM8wK3Nq7rMpllyCjrIjgozAgydW3crFYflfK0aYetfVM6TxNb66ZhrXi7xAY2vbItcQxbH3RbVaKEfMFDBwSSNhyUKN8jgO1rwTrviHz9KvDbz3UyO9neW+olvPf5ERzEB5UJaNoVPAwCqgfdIPBctnp+ot4V1HToIdU0yRdPu5hNtt5GS2cRAFiNoH7w5BHXBB8wlvXLPStZtILPTNZ0uzRRIZLRrOONFWCJgEAUKvImdVwGbGTkcMTwOM6btFHfFwmuZvc81+H3we03wRr0PiW50y7u7u3sVmzcuvD+aS8qJFu2khVTLHKgSAhhivV72ysRf6N4hmtxcwSLgFJGE6LsfaZPMHLlm3IDkMvzEZAxzuoeLNO8D6ddatqdhqL7d0tx9liRWfzNygDBDL5S4xlgV3jjGSerguXW3Om39zcy6e6+csiQ/8tMksUOMkYAIySw3uFIxW8eaove3OeclTb5dh9/bi6lu3llF1HbIY47kTRZDHBONxDE5Tgj5QSc9TWC8J0W5N/qWoXcyXluttBBtQkiLIjBXJK5Yvhi3zknGMZrp3i0ZLG5cblbSrZmnYhJE/elyoIY4ALDeMA/LtBzzWfraT6drkOpvp0N7PdQsPstvxtii2u2wg7QwVF+8MsFxg9Rq6NkYqpdlbwL/a9+hvrm1uFkW6LlbcJGTIUZWDu2AZMMd21QcLGrIpBWtfw98O4fEujeJPBeoa5q11HcXNxcaRPHqLNNDKkrzNF5S7EDSKd7hsKzFz8jlWeho/hu/8Mwa2lvpMtykzW10RNPH9pZXiaMHO7btUJGoI44GCVArQ8AW02n3kHiJNPliM0ySW0yzxTBYdkZjym8gsVVpTuUld55AyRhKFjWyep0nwws/Eet+EbnQrycILTT5NHSxuIVkeS8hlYNch+RKDKp6qv3BxwCcTxNbH4ZeBVi8cQ2t3rt5JJJaaZFEtytw3kw2w3cExqNiNk5GVJOa6W78RxX0mn+I3uW0jXbi7aC/t7eOVfOj3yqh3PGRgLGq4yMBegryP4v3viqbTZ28Qt9uS+nltLOKaWLZa7nxkKQduVaNsrtJEb85Gay1Q4w1F13XWiTT9L1ayjlutSnlsra5Lu0iPuISMOCX+5vA80clEA+TG3X8D3GmW3iTzP7dn0JNU0C8wblBich4wkjQF8Nsw21hnATduHDHzXxnp3izSr7w3qOo29zFfrehvMKgRTyo67RG8haQgeTGQGYkAFgcZB6HwdfS+OvH02oXGnyaVcaLYmTUbov8AvleXKeYgJb5cPIXDMAu0ckDAouSSO+1fXdE8VaroTWzwyTabObXU/shVGt7ooksqozBmcAh8AbQGkPJ3A1ga74WvV0B4dM0V9V0+/huYGlhi/ewo8gDuc5XnaCGOGXABwW3VlQ6XP4m8aeILi2t47rwxfadc3Rs7SdXtruTdiR3JByQ4R9q9PkPXNS/D7UJ7LwpN4UupJNTtdQ09Ny3SkLZiSWRirNH84V4ULMGAHyuAcHFPlZk9jKTVvHGkajZaZe6RGgsLG20zTPJlUwyXUhZo3G4jcyeVtI2lXMfYsK9H8Y+HHhL6z4o1q50+y1RfslmbmOYQW7PDLsleQJuQiQodzEjgD70e6vP9cU6ct14durGO6sbmS4uFkEQZ7dTGZ1kCrudVdjbLjsynJVTg+kPfeIpbNtEe+mv47OCzluUADLIZo4y6gOD5gLsxIwu1ZRgr8pa0rIxk3Y8+8eT2PjjS4W8OvczWujJBp15dqGzcyxZeWZYWKsgVZo3bBAAI28ArWFpUosoFurmG5jsdU0yIu+8PPAY5FuJZNxyUxC0K5VScYH3kIf07V799E0G/0Hw/cWyyTXV0LhF8tLZpdscaEZZwUxB93c5y7jHJRfP/ABPbXRbS9DbVLq1fUbiCP7ZJM0tw9jIyYuUYkmOKESRPjjezMOCCKZcdUcTdahcwXV6YNc/sjUNZv7W0tbDeROkKTyhxhkXfh40JeRdwUsp5Bp2jeJRHe3N7b2cc8mo/bNMhuIYkKLJKYlR5EAHz/uowdq7cSk9VOdK78N6Fdzanq/h/RZ7VLe8ktWkuEj85UDbGPnBlGSAZAccjahIyzjo47c6R4aVy6WlpYmS1F0tzGHUiEmMmJRyXKjcWx0RhtbgJlWRy3hbQzBYzWkEGzUbaO6LzTuYoLkMYSrRAoF4XC8LjaGYYxir/AIf8O6rD4jjtdUkeSWOOTUFFzbFntiWjVnhIZmIGWGCpB8uQc7a2zrVvYDStbtYL1tJvp2niLDzJIhsdSpCtuH71PMBJIIZc56Vb0u908I72EEl1HcQwShYrqUiMOCkscrAFVcYO1gg/iAwzBqQFjTvEdxp1oiaHdXESqJkaO4aRvNiJRCHXafnAZRjAOSQfVaGr63r2n+GJprjw8LdLq5kt3a6YxlHUhUkTewjlUqEyOEIwSDgk0pl1OfxZeQ2llBawxXO66mgmQmRwW/dqAx2f69txOGJlZWIVsG/rF5dRxvLLoyXsjWqbY7GBYDZrIVRUQldzqVSQKDlQCeoINAFPQ/Bvh5tQudTis4rS1tCo1CazmW4E2wggh/MHllR+8CFv4WLEgsK8d+Jepf8ACU+I5YdC1eW6t0kdEu0ti6eWqqqlRGCFDbAwwW4IySenZeKtY1A65rtvfak+nOLCCW2h84qbxi0yoqsgBRWZlY5IJVz1ViK43Qb3wppFnNYwLcXMrx+cbiFvMYnzDgBmxlQxIZ26Ac8YqHuWjkbie+W2WawupfPROY5bSNEiAJGQCmepPHuMdDTri5kKxNr0tzqFvYqTFFOVMScLk7ejNyfm77eOMVb0e4tfFd/dW9sb+S5VB5kiWybMkDJ+QZ4AkIYDb1ydpO3I8aa1odyRo/h6KaSCCQia5l+UvIFKGNFOTsUcc4Oc8Diqp+87EyZxes6quEtpJRKqvkQlRsGCRvA6Ak56eg9BVme6nuIYUa6mMWANhkJB/A1ia7HLHPCsp+cNt+7j6Vf0ydJAY5RkpzXoKCUUYk24qSqk4Bxg1n6lGkse04BQ5XAxWlMDJIwRtpzkHHaqd1H+7beccctVrYze5kyIY5Yyz/KYxk++TT3hS5jMUqx+Wf4gTmmpuluNhLPGkDyN8vAwQB/6F+lTW6LuYDGDymRjrz09gQPwoEOFsVAVZlwBgUVZ2xf88WooA/UXw34c8FR6/Jd6NfeZaOHkfSJSPLVi6uJY1IBCgdcfdDptxk1reL/BYHhG907whpkVqq280MFuSohjWQ7pUYOTti5YFVXA2rjoMed/Cq18C6f42FpBqMRvLTT7uW2ubK686GcxJGssY8zd+8QSHjOxwjghSiNXv1rJqF1Yw210bWQzQLiURssMuY9pco5bcCcnHBwRkkjNexVimmmcFGVkj5W034TXHis6la20KRtbzpdOLjzXhS4RFBkZFXfNj5toUHGYx34998DX9roXh9PCmi6Ze/YNEwsUxtm8iRSZS4TcwfzPMLs25U5YHb0rmpNKTwR4tjkuLOVoGLDUZQhS3SFoyRI5VSChzNhH4XYSzBSorptK8TeDZrrV7XQbvTbu5kZQLYBkN7Pvdkbc3EqeYHZ5ADjCgEhuOfDp0vdKqe/qdjDdSXtxbx2zWs1lcwtIJIgHO3IA3DKkc7sKccjgjJzht4i0rV7C/sYtWWOZI7W8mukUTWw8xgY2L52uq4HJwduGHl9Vr6nNe6Pp+m6ogmt9RW5ea42n93dBRsMTD7rKyIV2MCVOxi425bzzWdce5vfs/h/WNU0u0lknsntIrBHintpFjkUurRsy7h5bE5UE4GME567SOa6vdnb/ABF8I+Htf0PUItXuLm6i0hP7SGlR2sNzcNcQtlQqSEcyf6vYRtYkg4cfNynibxh8MNc060sbvVIJtVlFpY29raRy3GqW8DT222KaFR5iLvysjsRtZtoYOxIztJ+ITaHquozxa/Hf2sELNfK0UjvdwyEfddZSoJURsOAUXIUAYFP0PxBJ48uNSvdJ0jRp9diuSzPLZGMRrGIS0Q2xrI7B7YfLOyElWOGUJWii2tQdWL0Rla5qHxJm8YR+L/hdrI1DRrzw6LKS1JDyqz+Y0F19n8p3TypLq3dgxbKyBdjhNq5Y+CXjXXvgB4K0I/YH/siz1LVpoJI/IkupHM32eGLchRQqyjBl+ZmlOdpJA9u0aytVkkg062kb7HdbhI88tw8TGTJcmQls/ul+crmNwDsddxEN98f/AAFpF9pmi3N5exXNyIXku5I9qWcbZBMjk8YbYCRwWYHoMDOS1LTdj4E8Tfs1fENLSG+8MeBPF9y0aL9qF1pbxy/fKptABVyECiTbnswP39vS/DD9lbxTYX8GufE/QrnTtCjujFNDcyBE3xNlTeblKxQOFdQ5JUuyAHDqT+kdxE6iO5KxmS4+YAIyuC7KMMWG44JJYdM7gelV2huRDYGO/trOVZIy8TSkP5QAJVADnPONx4QGlGnGLvYJXnFq9jxi0i0Xw14en8EDQbOKxEzmPTLe1iS3uAVUzLCJNsTbThcsWG7K5LYWuaPwz+GfiXVtTtvD9ymh20shiDaOzWCrqjxJ+6ESYRjHGImxiTcZdrqMFR69408N2XiC48hkvruCX7Ml1Lo05P2tv34gKz5QEW8gklYKOroQMKQ1HRm8OeH21HQtA0K6mY3x1C/f7LIEt5b1pJ0XeAofb5sbER5ZUy7KhIZ921y/Cc1ODX2j55k/Zzbw34h0K+1yfTv7StpLe60KG3tYIXu71HjeczxIXkdVdUDkFQm5ztCKxT2b4gfD7wb4x8F3L+LtMe/tdLWTc8UCmUgHyriSJl2uUDByfLADhGCjATHfaXaaVqtzpupaTZNE9qkKXupanHLBfQwNFHIjLcS/OQ/lhJY1OCzg7sht+54b1e0vbSO01FrUT2scMFzAkhZUutgchDICRGF8tlkJyVYAqCCKFUUUU6EpvmR8wXPwhstcuf8AhA49Ujvb3wncyaZBZXCeXHqWyGB0a5njRCJVtTOowNmQm58qFPq3in9n74cfEDSotEurXUIZrW2kjt9Qgm8v7EI8IIpduFRTHMQEZN21uMEszej3lpouoQwfZoYLhhNbzwuQq/vot3luhxvOH285GSTxUtpprWL3Wo6SHS7nliZpLgyCJyI4o0KIG2ghFj6DHy/WuaqoT2R1w50r3PEvh78NR4P8eTPLqHnXltpFxaLbpcb96NcQyB0jBG3lZCxwQFZQMYwPU4ZY/DmnahrN7HDLbbRJDbvEI7nzmQb0i5XKs5D/AHQBuJBJ4Et94c1JYrabTYYpJIZnlKm4cSZZhmOIq3ybtoz2+XJGWJNHWoLTVBeWDQCxtLi3eJrworR3siqqqWyNzeXlwFfO4ozdhlQl7NWRjOHNK7OJ8X+HvCvxd0LTbXxfpsAS6h+121mkrebBuwGMcuEZJWCopAJyDt6Nxz3w/wDhB4XvJzYwaVaz6TDuFnbnzojh4gW2lVQyREqSHwc7sggqcaz3Y0+3vpr2yhsi1nFEL6SUoYj5ksbOjrwv7uRfkBVhtIBJA3bejWdndPe61p3ijUbS0geKS7jWzSCZYtwfcZI8B8GNwxQn92WQMTms5qNR3aubQ5qasnuU9H/Zp+GXhvx1feONH0eeaXVFkjmtmxJb+ZINzFAehwsgIHAZsqAAuOn/AOFb+D7C4hv5/DtnPcp5khEzFwqkDzDL5mcL0JxjJJPUkl2jeJ7k6baXcviW3vZ/mQvbxZlklV5WZhAADGAqgFgGXc+CEUAl3xGuvEmkeEI9QjWO7uLudluS0pVVVAzNgqo3Iw3DuuRH1G7KlGm1flRUZT+FM5PUtH0KXWZrZTbLLaadBA6H5x5sk7SMgAA4Pl7iM4KEjGW58703wxqGoeIdPs9KbUJpLjQr6XY93EsQmjkt5LSeX5RtJV5Y325xu3Y613rTT3LS3l9bvawH7PNaTCQlZJGkMpG0qcsAIRzyASgxwKTwjbaZoGpaPa3ltMPshmSaRbgv+6LmFkmLAKIhswV5GASBya5HCHPojoXPyas9A0zwB4d0+9t4r2yTzZb6Jw0pP+kJGqkSOoGyPoyt8gOFHA6nY8VW/gb7FfahrsNsFFxCJw1mvmvIpjboVLEhxC2BuBXBOK47xk+mah4t06yutXvIzYak8E03lxfunCI5i3hmCrKkjKRncSVbKc1S8b3Gjz6ZZWtpdQRXUd00tosEitFM0cigbkYfMrMq7T3AVSSSWronyJWsZQjPuc94w0iLStAj8a6Pp11YfatJSMaXMhKPbRsZBuI3MHEbODtLY3BWABG3krHUrc6fZroZW1Fs6qkhijaSQB0DttzsOVU8gnB+XOVrs9d8Q/2hFc2Wq65PbC8naVbqXDBgpDKnljlzksPk2goGyDkCvK9Vi1nwPr0j2FvJqFldXsvlWX2rasK+UkrGA/6twDGTgqFCsBlR18nG2WqPQw6l1NHULma/lsIb6wFte2cqkELFIkxjgPnSHHC7iwXZxjGRgmobmxtfEmoaRa3N8bk3ASC4JtiLecRozIHQ5KZdSoxyS2OQ21mXeobBYX+qLeNYz2zWrxJGjTGXE0ih+QWDCPKgfLuj7hjne0q9s7OO3t7qCaO7vYYpYUlZUjhKtOdpKBlJw8mBj7vlk/NzXnHXHRFL4iS+HJdH0jR/7DGqy6bIlyxCLtgshxI/mORuARjtUMWJKEdjWZBo2i+HL/xTololtatrlle3H2eMkqrW6BraCPYAh3+ZOQnO4bVJOCKZ4yUX+ianq+jaDPqtxcaRJFDDZmYStiQMIw2MoyyI4DIMkAA7RyY9O8J2txpb3Pgx/Ett51ik99DNNFPPazsPklKB3ZD5U28OrEDYzAAq6taM6jZU8W2F/wCGbWLVNWgOkT2mnSalBFG/kLexPB5XmmZWV+Nyb4vmcDa3UA1j+DDaeG9Na21+wvNT0q7ge2lv4DC0k032jyo4ghxmSMgYkfl1Z+COvpEl1qPxU+Fej+JY9HS1u9M2w3DpcSTzmGIIJI2RwpZiFLNypZcAE5K1w3ijSoILLSPEUl5Hbai8EbR7o1Uy3FtdItwjJjhl2xbFOELbyBhwH0WxmtjpdE8NtBp+l3U8d1cJrklxLHLdxlZVjjgfYJSvO4h2yckgxgLnaAvVac0NxaadcSme2l1W9hf7PblGMUMbCKMxkndtZVj+X1bGUZ8jlG8USeKtH/s/SZBA2lxRIfMBikvGuopEQ4Ug5QKGfpnY24ZyK1PB92/h/SrR/FWpraR6CDK08hVcQIVt2mYY2b45YRgNjAbIycYsh7k3xO0oX+q2FjfaWmtTXN4lhFDIrrFAZYnXfuAUgLKqZKhXKpuUyBlSvnvQde1exi1LxXOLTX9X1uzGklJpTLcR7jEFjEaMAVRIY9wwE3qVLDPH1ff2UXjuxvPEGj3Edxaare2ryefaG1NxbDe8TSRZEiR/vBncCzpuJYL9341vPOsNRjZ5xOjST2MCJK/mkLmBLghcOMMrsSAGwrBlBYlm46XJi3ex7B4U0qLUPDekaXZ3F3GL2xilmEVuRPEGffcZD/KpWFbZVIzuywzzkW9U1DRL62t5fsUI0lpYImaRCUlupNiny5TkZEjxqflALEnG1WFZ+hRahpekWPhu70yGe7vRcTTajGRI15PcgygqsWdjBZtrnkbfugkNsua9Fr+tSmzSLT49Padr9IIY3ilt7mPmMTCA7izGaQbBj725iQQDkdC2INT0O1try8vYrKwtrizu7CD7NFMvnXAl8rDc4R2G1cfcA2k5bcVp+kWkZh1LWpYbeV7q3na2k88M8Y3qQJmZQwbzF64HyqzKfkWp59E1JzJqGpQxnULpLEyRR4lSG2QtsDTnkoAksT5AYGEtgdDzuranqdxfnwfpLy399Y2jNctCyj/RFklbySSOVkK42NkgNkEBTuBMsW95ay6cjWa3D3q6l5iyXASLykChzA2WVGy3lyB/77kgAZFN1DxtBpGn3F5NqqxRXEywN9pEg2bow4jVjwSwYjIcAADphmGq+nQ+F7o3ET3kt9cBUaK3jiaCSTzHWQAty0jbJFCtzkEMxJyeQ8Q6VZ+JdBaTUrCSPSZIjc2jRSSNO++MiNmkJBdFEbfJ/CzsDkjcQR5brfxQ1zxjqF7pWleG7KS41Ni940jS/vXRQPmDLgKNiqqDKr2weA1NE1LVdJfUvHmrz2OlorLIyab5SXSZ+ZQzJ8xYhMqoACjncMAdH4c03SpZ1jsvDttpwlUvIJbQJJHCHwuC+7Yxx6cjO0M2AY/EOrar4lvl0HTLXUP7GjZ7eKaxkYxOEyfMQkkAhtoBCsNpbGSdpyk7uyNopWOX1vxDc28MemeDNLittGEJIvJNpnMYDful4IVfmQgZwQyEjGRXA3EY/tAafDMRFap5Ue8jbheDnAHOc9eQMDtXa3fiK18Ewf2L4edri4hSW38x4YvskAY/P5agYl6YDkHI455J8/l1CS8mku5mZpZ5Xldtoy7MxLMR2JJPFdFKKSRnLcw9YtoUXzvI2NG7YbJwzHoar2EzrfBiNyToAPY9/wBa2NdtPP01nSRlEJWQKR985rnraSVGKA4cfdH+1kcfrXoQ1jqcsnqbtykkbckjgAYHU5pSEIl3nlQAfrWjaqkyNbyriT7re2DUN5brA22M+bGw5OOntWCnZ2Dlb1OftXuYriZImDJJ8hQ8cVIpcs0c3LeYWGB0J9/6VaS1jY+ZDnzX4xjipAlzDmN7cMvG48Ak+lbLUq1hB4dvSMiRsH3orTXxBeKoUaXkAY+9RQOyP0e8MaxokWp2+qa/JBb3kd/NBe39ypRoHW0SGSYmP5Q7T3BQtt+6WfIMeBX/AGe/Fd34NGo/Dz4iXlhY366kzWcy3iSpctLgiFQoCg7DCxAIO6d2KAnJ+d7nx7pPhTxhKWnkvtJu5Jode0u6DSWVxcGVJpxG8rttZmeJXQhlASbnJAGtoHijVbQaDeafpUVldatcOdn2qSOOO4kjnaNWkLL/AK4RqUkCu25WDH5OfYqStJnkQj7qPtXxTo99e2dvHp8cME1rcifBCsNiq6lCGXkFWYYI5zXKaH4T8KReNotZs/D8aX0D7CYYd32dHiB84BUZgMq0Z2DI83oM5qx8OvHFp438GadPandq8cFlHdQBW3GTAWeVC+GcKD5gJB3q8e0ZcAUvFutWugfELTdLvrfUZvKszPcx6exJWNtyxgogPmjc+WGRs2ocvg1G8kzR6I6S8t7zXhLGRMlvbzF/OkhGAjY2oucOCuDuUhSBngALWRpHwc0p7v7XqmsXWoyzs8rRFyltKSTtmkQ8mT7uWJIJT5ge+P8AC7V9RHioeGruTcgW4u5vMgVFlVWMKOgBflSu1juRpMqVVhuFenyA6FoqSXsUssGmQkzXLnLbUBRpG4UByT8wC5yOAPlB6HJmLinujyiH4IWul6wHuNdhv7CIxJp8F9YlliaVZd9vJGrrHIhMkZBjVeE2ngYroBpWi+Ezd2OhOr3FtEtrcTz2/mFZGaRlZih+RF2MFQNu5fJ+bK9FdahCur6RrMWp3M1hq9i9xbWmyJUli8oMHTzFWZJdu04YABWkOMqAvlWteIviHb6bYaPoPi7QZhaWriXULiSYTXWpymdFMSwReW8Ko0eDsHlumSS6sSrsShFbI1f+FgT67rs2lSaXqWm2sEdwFvzb+TLNcQIpuGAIYhRCdzFo8OXUfewB1c2paZrm+xsobbVrjMTGG/hhSC4Eu/zXdQmJm/dSsAcbgQzYXk874JtPirPavHrmkaBNczyXcQvbmV5pVt5EwFI4OEZUIXcBtCZDHqnjnXPiXoHhK71HS77w7Hd2FuWFrb27SwvDGUlMbs7bmJhilT5V2oPcJSNklY9E1F9WHhi9fwde6fZ60kiSsdUVvKEhmEtyJSo2jzFWUq6HHzqVByprxW/8b+OklvL/AF6xOp+MNNMirYeHjAQLRbho13iZZRIHa3nz5WZAYkRo0Lbjg+AfiT8T7rVNNg1zxl4YktoNaN7G0VupWB1ieOSxlkgDrEJEaZfMLMCTOQxYEr32sfBPwt8Z55vECWenQyWWvedZzz6cqt5T+VmSTYAxYx5ePa3lYK8H7xpSSJnHmVkaXwxF78S4/wDhLGtJYrDUoJbSa3kvzMohlKM6u0anyZf9HiUpvcqpxtjZ2FdR4b+HV/4Zl13RU8darqkupSSXMVt5sIktbmQyMCWVNyNwpUYAyrkAMykdl4H8HaV4NtZrewjQGSRpZrxpg13PclirmSQ4LthIQWLlspzzyZNQ0271LVdJuWnaO3gmZ5YETZ5kiRyCNSPu7QZHYdV3ImORw+cxVLkKGlaZ9nS+0yCzuEtrHUAYDPKswffBHIuHORsMkjDGBt5GAqADO1YS2CahJo9ikt6ghnaLUJDb2js+AZXlUE5G11ICs3yc7SQ1LqHgXV7eyGqx6pdaleR3VzdPYLd/Z7e48+RdsSHG2MII1jQEbX3yZGXLVqzTtDpMk+qalLia1Z7uaOZD9nYpufayhQ4DGTDKuW8rOMkGspO7OiL00Mnw/wD2mPFF3BfTQ3mmyCGeymQI0qyII1kWQLgAlTGTycMTgr8q102qXH2ESW0GnqfJjUQs2EDSEhTGgYEkgfVueEyCBgadreiXfiBLiwnku4Fkniku1g3bZQobcTjdKcRHhAx+XJUA5PV3CabdxPZ3cO6O5cW6xmYxF5MbzGrA5Xox4IPAB6YpGy2M57IadbzTQrb27oZGKR5O8k7254+YKsmQ2B0yABlW3ug2c2mywTQpJdkqqTSSlCHf5SSBheMcjABwuRkDGnFFJpUklteySXNq6C4iAG6SICPGG9VJG7A569qf9tTUbqOxgsS0LsVkkD+UgRPlVgCOPu/WiyM2tTy7WtLtrTUD4bttCmk0+WdGtbguCsk7pJIUyGGD5aoFJXaojZWZfMQGno3g7xBHqWsyTWdnZ2Rl+yrDFHFN9rld5nbzJcF0JQxcnB3uxxkgN61rVmdXtorazjgu2tpFl8tiyAHOzAZR8rFWbadv3lXBGMjEk1+J4YdD06F769nMy/YPOSOSUxB8F87igIAIBXkP067YkrLQFqzjNHivdQhs7SOz1AaSl1JMZxGWCMfMQ7jGw3/u8dc42ptOWydt9APi21gWxvLxrCK3iwhUK7viHd52MBS6oNxwQuHONp2m1bapYPqV3ZaWrRRRXMyRiMkBmdlcOGQYQBmXAPBO48hQa6C9S+srDzrWG2tWCG2iIibIlkCoXUuwZQHVWHfaoJJqEjS3U8c1/wAI6jobmz0/XLK72XiwW6Sb7nYfNkaJmC5ePDJtZ2BBKA/McmtHQNB1GweG7uLKC/uopomkktR5TSP5qSt8uSY8hEZcncqyspwzEV6FB4YtLkve6iii5uywuLu5EYZ2ljERQDdyAscYI6HoRWzpthYLcQT29q6LMkzSdsIzb2UjJCjMgORj5tg9MJU02U52Rh6/4E0jVrGPSJpjHFEzzRTRwLIwBV0fIYHO4PuOc8hdwYs1eC23w8t9L1U3Oq6xqmpalFFGJtPk3ALYpNHHcCPKsMgSoV5zgDGAxB+hF8X6ZJfXttY36w/ZUBkk8tyHuS8gUqARgAo7Ek/xD5gQWOPf6Bqevta67bxW89/aW81miRXq+SwkkCyltsRY5aPHJVgVGcONtXOCasZcz6HkHxQ8G6LpyWLWWyVYb+BYZzvLFW8koC2ANwEuVLHknLZwa5zXdJk1SSXWNKlSXUoW2GGAACW3CnNvhSeCHf5xhk4UZwqm94u8BW3hu1e31LVpr+C4WRjDOH2wASFVVZsgMqqI8MWIxuwzHNTeJrPUvDfhnGjyMkiRLE07oqqigFgzZH3wW64GS7Z4yw8HEpqbiz0aDfKjzpLgR+IdOu4nlt7vQpjNdabC5igihDxIZerc+UpkG09EkPRmDdHrukp4ltk1d5okuFSW3juULKqjAZCuE2hScFdzqQAwJKkkW9C0zRrTwnbX2l2DSR7ZraWWSUxO5wZPMZghzuUOzE4YcDjpWPpurafoFvc6XqUjDzXlbT7ZkmeVSi7JEjZeigtCwJ28SIBvwqDkOxbHNaTLqHii1tvDul6ZNFqMNxcTy6jasYfJhEgV1wNshJAkzlS2QGICA573wPLrXw1ma8FjeX1lqcqS+Ys8EohQIsaqApGACEztDgFFPU/LyGh+LNAFvDc6kls2oRKsvlRq8lzIS0hKCFgCiYuJohuyxGCCVYVtXkbz/DzT9T0t7ua6c+RcxwLIVihZAhRRxjaBLgHnDE545BSSOg8Uyw/8JC7afbXmgp4gvltbPfcPGjTNHIon8vhdxCoXVlzhwMjGT5v4qBj8UKmlFbXTdOSV5Qx/0eC5SKSQhEkcBUMwjAGB/qyA3zAN6f4d1DQPG+lv4UvH0wXFtctOkbRNFNYyNbSIrcAbljKIqSLg5cYx0ry7VtEtrG7vbq70ya80yZn+2LLLMiOS2wRysSzDapM0jH7m7cO9XExOZXTtSezjfw8zpqVur3FqrfJII2tzIYwQSshVSpKsd53gJg7kPoPiLxBPN4PLpFO63FnDpV4IoXVRcOVkMgkJLBgiRuWJABMmeWKLzmgn+zPEekaRok80VmupWVxbk2vyy21wyvMEDn5USAELnAVHkxjKhbDNNaS6bd2WuLLo15p0ul6dDIx4mt7ji4Kn7jKJMsMApGxCn5CDqFkel+CYJ9I0O41HxHpGlznYJrm/u9WaWGzBZ2CpHkiFCZQuyP5X3RYAJNYfinwAni5H1zw5a2P9sanDdMqz2pnMUJiUCbYqnO1grCMZZcg8cK3MeMZ/+EO8HE3NjdyXF6bZ5VfcslukjktICoA3iJPMKkkoApB3AbvSfhFqPhvVPhhcazqtvNcrp2mzaXLiFVae3wbmZ5Y1YsJGEkCj5h91nwvKLotjFrldzxeY6l/wjuhaTrNto82p3WpKqRo7p9rLRxvI0WSVCxosD7cCJkMmD8hWvQ9Lv7efw2I9Mt5rlpJZ4Hvp32w3U8YZRPGRw8jFX8sr1VHI2j5TpeOPBOnHxh4cmsdNjvINN0kym/k3M8oeTEjSyZBVgI43JIP33Q5AArLuIrPTo49C0nxBLZpc3N9fwwywedCRI7bdjsOGBRsMAz/MAQTgNzzi+ZmkJ3OXvAFvL3+0YF06xj/0m4KXU0geMI0yMrKwYIrOp2KQTnpsB8vLufEV14f8Hz+KIvDsFlf6c/y3j3DTvcRsoYnAUqBIHHys2FVcY4Bp93E+rXgli1GTS1nnsoWmkulkW4nuLosWCsMhiy4JUYUBcL0J4+88P3F2mt2urQRyJoc6SRWzWPli48qUKDIrEruLpIChQ43fPkYYiWhb3KLab4s1ic20/i6xbz1iL2scaIbiXaVYM7oxhcLHv285KEqucY7lPEl74hxqOu6vH5AN1JpUe15y8jIImjaIhVjO8hlyxA81DhRuWs3wZ4u8QeNPHx8cau9hZwWL3U8lvHEqIzNGEMQVUJ/1AJBD5QRncSSRXaPqmseKLKXU1toraMtdyRtJLIsa2hUlGmChHUORsBXAByAAFFKQjx2DXIb3wvrT+IJNOt7qG1luUlSH55/lbZvTGZFYtEoQA4AOWO5hWZ4l8Tad4UtnvNImuJb67gW1spXgCtbxlWDSxFncLuy428YDcADFYPj7xPDqV7Losr36WkEzBoHC8RoQYwHHLK7AnORwAK4W7ujPHFDKWZLeIR20LncsaZJAA7YOR+HuadOn9pjuyrelJJCYZS527ss+58Elvmbruyx/SqjMdokGAdwzgVLPI7SFp3LPKPm/M8VCiAnykDEA/MPaulJAaVxEtxaSKpAyMD6bSa42zjhFzFh8k+vsAf5128cQVwOgZMqM89xmuUurJLe63DKxoSo+orak9zGokbdreOHS9RArMSWGM5FSNJvn81wqQsSMehqhozyXBELMWkd2YcADaFP9RW5/ZGxp9zqI3bcI+uOSMZPPasmtS4fCjEvLbCMqSMSjZCoSAffIqG4tZ1hZ4IwzZHzM7Ng9xgmp187zmVWKruO7Iz0NWFeW4ikNo8ZaN9jYXD5OMcHtwapNlWQxU+UZeHOP7j0VDJNqAdgvAycfMelFO7CyPT/H/hT4ja9c/wDCVXPh67bTNXvfLS5jtlW1knLNGxDRgJvkaEEg8li3ytXefBfw34l1zwpfeFb+2kubvTtRW9s7Jb6CKS5lndbZ7dgS7IqyTo3zgINsxJTaMbdrqGraXean4csNftrjRrxbo3VvFPFKjK8m75wQVYfKznHzKxO0qDiqXhHwpP4WutSmsZ7lby3uS8VxazmJoIykgV0kzuX5t7EZ27Qhxyc+hKpdtnmQh7qNrQfG174I1Owu/BthqY1CRJZRarpqSGytSzAKA4yo/ez+WFDHbKylm+UDro/jvZ+M75bXxZoOoaTrs01is+swTxtAAPKLPLE0cbIisokCfOd0koLRgNv4q5sI7SLzRazpdQyS3RvJ/Kkmad5hM4zjBy4DA9846sCJrLw897qovNG8P3tzcq8MsVzBDLNiQSDYwI6sxLvx82FHDHGJjVlzJFuEban0hpl/cPdeXoWmRafqelW8CSRXWHktrWRQrOhdgwP3iu4JnJyFY/L0XhuXSvE+u+Ip7uxt4H1e1e21KE3CNBaRwBtpT5Sgcb9xO7aWl4B2so5v4b+DdWMVjqPiOy0krKX/ALSJk8y4eVVAUSKAsQJBiO1V+87Z/wBY616RZ/YNNnfUNZtpZpLUySS3RtlkCqV42o2Qep46sGYk5PzetGPMk2edUlyyaRzcPhXU9TGiyX6pFLpX2kyaUzfaJJU80KBtVEDR+UHVMj5d+0Ln7/Z6d8P9IS0tIbW1a38uNlgS0cxxhGYlmKA+W252LFiCSQCSTg1PoyaQl+iLF9jDTPb2wuJ0/wBZ50gZwpYEs5Vjnb82CRjDAdHBrehvcXWlC4VLqJhbMkmIi7442An5jtIORuyCCBgg1nJWdi4u6ucNq2kyWGi6r9pimntLHSp5LfT4Le2EL/KNg2vGRvj8oBcjy8y4ZW4K17a0k0Hw/J4eTSn1X7PKJJbWZY3YmYBZWCpGEVWjk3OfmC5ePaEClfQdbuWsrZ7pJ40SQLD5jRiUfO4QjGRxgtncMYPSvN9b1PUL+3hgg1VbL7NIy3kltYkwhFidIGSYMqllKo6qHLLj5QpMZMOVgtLoZeteF7SykudTg8N2lpeXenX6xTX0SCe3kR5po0YGRlceaY2RyPlZiRs3AL13gc/2xDqdxDoFtDYNqNzDHcWmpRSxahHtQLcAoOm1VjUH5kWILxjFeYafD4kjg0d9b1WfUtTJktZ/tMzsz5WRFjcA7pDtSdWOMsFUbCMhPS/AF3e+HvJ0O40K1gtpbid5pLOZlgjnd0aQ4kXIRpnmI2k5Jbk9oczWOiO706K9RI4oLePHmMWYzMoXcScABdo+cg9R1Nc/4k+IfhDwXdWdtrV3EiXGLiUJE52xusm12ZFKkmUIgGSR5hO0YU10N/eQ6ba3E9/54NiqtIYn4BKuDgg8YBXIbruUjoa8O+PF74Xl120bU5pridrG3guZWDxMUG+RQqjlQWJOCeBJ/eUEZ1J8quaRjfcyPF/xx8biQPpt3DakRPLFHEqs8UTqpEVwZMIXULhW2AqpyOrbuaT4heL9e1GyutcuhcpZTKLeG5hRWjdSyxhwmcklj8zn0yxIzU1rcaX4i0/+xNYlvb1Ft0A6+cBG9vtMa5zlRH8yEgAuWxmuXSxtbf7JLMggsLuJALieZhumU70jG0g4G0rj72V9CK8upiKkZ3T0OyFCDhc6uy8aa1pd1baoZIJ4xdSrHFbTmPzJjIEBYDO5lRmQldw2sCcEZr0Twt8atPisNNtfFmnXRuZNS3yzXKRyQpAwEay7lGFIyzZB6A5PYcT4Y8AWvijRV8Uw3NtLJcLL5HmIdjbWZBIVPAY7G4x6Hqc1f0iwtGnW5NqRt8sArzFGOu50fIfJQgDBzkg5HFbrETumZxjFpo+htJ1/TtYt9D1eFFgTV3eSyJbzm8ollD4jwD8rKxHQcj0q5psmlXVxJNZXqPcXNv8AaHjVvNxGCoB4O0nc2Mgd/avLl8dSaV8MdWu7PR7a0uzLLp+mXFofIhtBJbtJiMjG0DySWHZivasL4KXkmj6zqVzfapJDp2n6XP5zPahxbNHc28USqAvzZO/IBwCSSOAa6/bJmfsz2HWNfuSNZtNM0tru70dracwytsWVJ8IxVmO0bQXXAPTOR83PCa/pNt41uYY7CytbaZJAHfYrtCXRpS7MyqWCvKMjeQSoHVq57xddeJvD3i7VbeCeW0+x3cqxsjbgYQVaFmdWbIKBQVOTgsygspzn6B401PTb6DxJp9ykksyEXk10HmPkEMchFIAJkTLKNxT5BgEVnPFK9mNUXuerTeFrbSDYSLdzTMrm3eJ49qXQUcF92SSoWTO07clsdTW9DOJnebUZUbJjjEUm5VDJuEjFjnP3R9Poa8hh+LPiBtR1HTzpFpD5g87T5UtyXtiWLhnBxwVGMMN2Dk9c1d8QeM/Gv/CR694fs7KJ7KaZjDdsWR4opLVHVEOdw3rlueeW56U3iaUdmH1ecj1pLDz41XyJZIWiIxtLGMByGYMDh3JQbQAD1zWRqfi+xt7SK1S+hi1iSN54LGZ8vIkYk3gsB8h2Ke5Cn1zx5QZfH3ll7fxt9nhZXMqWdsrFWJLOM5QhR90HrxnOSTWRq8Wo299b38XiO6uNRt5g3DRokjKuFC4G1fvg7eOSx/iOV9bQnQa0O3P2280e4srLT0h1IfvA0RcfZEEoNsHKEF1CAnrlfNB4U4pvgiG4GhXepj7Tp9qbZ5re3jsnVxG9vG8U0MIOSA7SnOCzqWDfcJCeFPGGkarBJ4hvba/tIUH2aRIJzI0bhlmkVolJ+Xaka5A+bzCCcAqY/EHj7RYrGDT9N1a2crbrHte7aN0Er8LKFB2tsKsOBtJO0KDitoVFJc1zGcZRdkeffGDxN4h1PxVaaW1laxabDbLHItxs2QCSRWzLuwyq4EoZSquoEfALtnm/G/iFbnS3k8O3lokFkIPMff8AJIx+aILswVDESMB8w3R8gA8y+KdW0nxfqCazJaQzNHHDbXKm2+0CHzWdyH6bU2/LwOsinGFNUvGM2gaV4ektbDSbhLp4HMC2tvlbqBDmRVYAtgRrzyC3fivDxLvUbPWoL3FcsaRYm20S/t9GnFrE0ksdqq3HnoYiFDsxAUnBDoWYYx8u3AyeRm0TT28aeH9c0CLejLLLPPDcLsuPLiEcsjShVKlZHRhn5QD0b5dm/YXWp6V4FsNcuHWCe+sJ7q3KyMyWqFI5FBDg4OZFXA5Pl4HeqlnaW8cAv59W1CXULOGORLeILKsUIBeOR1wAW3NMVznhiDXEzrSOdmW2+2232vSisjpLbxLaJIsomaSJoiNpONyFfvAn94GLA816JpXi77R4itGN1Da6PdEzwAXUbxzwDYj5y23Ycj5EJ55znheMnub43kV1phsmW6tfK+1qfMVn2k7lUY8rLvhGY/dCBASgC13h0PX7i80F4Y4r6KdY0MsZdGQKoldecxP5cW8qMEr93DEYAsjpfBVtNogbxsJk1i0uIYrQ3qJIXV2kmAby9xU4Jgyu4Elix5wa5TWtL07xDPa2jQyl4bqae/uQfLW9lmV8I5DEK6i4Vdj5GDyRu51vEmm3+j6DqWly6jb5kuxNsEyrFNKVj3KibQfl3E5JxtVCSvLVNeaj/wAI1fXPhS0DT3V1eyRW80NmXghZ44pLXzC4yu1rfcZOQhddykN82sDnqKz0PM/EN3FpPh2TTNasTDc2emmbULm0tY90qPxHsZ8B0dvtSqSdxaWLtsYV/wBnDVRceKbiTxfLHNYzJcT6bqE7iWP/AFqnZJIRuK7pZGDEsWCrjoa6oXF3HaaTp7+HoZPJsxYziLLfbZGjaTyjuXlmEisAMgKmEYH52yPD/hrwl4d1GfS9NhW5S6vX1G0sBdSNH9nk2svlmMj51ZZNrZ55GDjcOlJWMbs7DxlpMf8Awk1/cW8f9rab/aLRwK8rtClqocTR7iMiNikIKRnBjBDIed2x4Q8V+HfCutat4Z0uCK8huLmVbtYolljQriMpIRjC7XlUDcgGCB8zLvvXck134c0u6CrG9rqEMQdHUzC3EO1FaZRxkrKXbLHIEgLbQw5uS/hHiQ3NhYyXFpPqMVnEJGBitxM8oLmPO0iMxxMAv96MAncWOcm0y0rrU9I07xvofxW1zXdOtby80qfwxKzSTXcS8tJA21mEgLSK28MMcF0B+ZcM3Km1j0nVX8N63qI1WaOe7bbFbNPcTHBClJMgIzENIwxwVm/hUqdzwJo2leGNDudY0RrTUBdaXNeuXLJumwgG3kssJyeQow7/AC/KD5btZ8QRaRdjxFP4eYrrMkk8d1BHHI9sqLjLkkFUIzM+wsMtKqsQ5yPYhJKR87fEBNOtdbs7p9PvHt7eQXkgaCeO585G+VSS+FId1cdgJW5DKCcVdR8N3dsjXPiS0s767ke91+IJGkMsioFSzJdmVVJYALgEAM7YCkLtfEvV/Cl5rw8RDSNVupYxPplldw3KyvaouxFADBiQGmcZXLBX3E4AFcdplhL4UazNhbyXF4tpMbg3KQj7P5jhi8QQBW27nC9djqAWA6waGz4H0231pdO/sK3e++127Lexm5KizmePdMWGcMiGONGVxnc0m45Yhn+IfigPDi63b2c0+qt9m+zRO8VwYxKWCuFZWYsqhioLgYx1GMLe8P6sYhq95o5t0u9Ztxp15eQJKUmkKFXEA+8oUgBpAdxVi2G4Y+N+MtettZni0/Q7COy0qCGPy7a3ZmG8YJkLEKZGOFy5UHI29FpLVgcxI87yGZiS7MXLlR85Pfqc46de1JA1pHMhuY5GjX5n8vrjOf5ZpzPHv2xgj3J5/WoBtMjtt+YZC5Ptjt9a6I7AIXgmbzURigOV3dce/wCOaaFjEvmMSuTkYqdACpaWNATydh4JqdIEd4yDjjHTPFS5WdhNMksY4zI5jlLBxkkjofSsXXLMW9z/AHgQcV1lrbxZcKgHy9fpWf4htUazjvfJYc7iB2HT+lKNSzCUNDB8PROsyuULAYDDB6HI6j8a6e1zMzGVyZAd7ZAHOT6VS0eHfZStCJFUvtbDHjABz+tXLGBlEko3MsuZFyQCMDn+VKUncqKsjMvY1t57mXy1XaN6nPf0rLgL3UyTRiXzGCvIEQkkqx2gsTgAbiTjsT6DFvWEaLUJbeffkO0bncMErwfpyKjskWIJJvACMQu7BVhgnH6VtHZAyK40fVlnkWPULBUDkKsivvAzwG+br60VYQ6PMomntLgySAM529WPWiqEfSegfbY7G78T3eh2+o6eoisHlWSJjaXMiM6odvG0yO5JPzcGIooVSd42VleQouk7rhIra21CaF7hWaSJoJTHtwQZEZUTCuQ/7ssY2BKH079jb4Z+B/G3wm1PUNV0eS51jVr6+0q+e4dpSjSRAkBAVOfn5wfMbBIcEceZfGTwfonww8X6t8PfCGo6lrMMc0N7IRdmH+zrt2DzozYMhRlaJi29dyuq4ZxJJXozpXszzea2h03hBfh9qioPCdhqdzcNdS2V3bSxefcwuqq5ijiKkSAqgJzGCoZwSdox9E6T4Y1HRbOHdpkMUti7m3uEeJwkpIALhdqZyd288ncNynAJ8R+BM0dj4+0X/hIjaXNjL5kVprNrPE9rbTEqiDyIzEsSks67QZGBn4ZghJ+m/G97deGPAWveJtM+yrJp9hcXird7o4w20lGYqVH3hH1ZfkXqOSbpUWndmc5nL2Piy0t9COoeINEOgwWnkkJe26ma/KorM0CKhBwwjXKBjxyAACee8TeM76ws7DVLKxvRFfX4ljvEBCyDDRyReXjO4MMoQvGGGVGRTdR+OPwUs3fw4dftr660yQNJMtqlzHdSlCZI2eQbgyO8bFlJDFNqDJ8oP0qSHxZo9odagFjFqttgoZtjI5WUMIghKMisZAhdsAbHAZnNejBOxw1JLmH+Jdcn0rRtS1S5vUEPktmJmy6RrGdu2LOxjH8jeWD/AMsxgjbsPlMvjSGO01SfWNUM1zd20Q0945i0810pM6xM2NzMyyKpk4zuAIDKQNr44Xdt8NvAMlnqzWOoy295HZod7iMOFBAO5cyMA6Z4+8zFVPb5wu/jIJdNl02PQljvIlnNteJMWm3FldAgKkuFKAEtzjOWUmvPqymp6HfSUHA+uL74reMvFXw603+xPD97o8oN5ZyW8dwjP5hgElmrAYJjmxPluoZAAQTXmGheP/HurQQ32uRTaYwit7RInnjRSsERCkqARuAkl3Etg/P8vAr2z9nXwvpXir4Dabcaj4+u9aTWYyk8lk6QmxlVmb7PuVUcMjsW5ckBQQSmA3Br8AdA0O8tPCd09/qXibTY/Ks7mMykRjzi7PcTxq0SGTzDtikilIAmO4qPkU4ykgi4nP8Ajbxav/CO6VuuiNji2uTcXnnkBYXEiAsFEbH5yXBHKjBJ4FPRPEnirTtWj0S/8YXFvNMzTxxKZJEDW8YuXkKhMOwiSQlcAkRHCsSDVvXPh/8ADbXZDrF5Oljott4gnhuYTeKVlRhCTIsiojQkNgOM7280FXVZI8yeGb/4VQahbeLLLR9FtdXE+pXR0bV9V1aFVtpbKZLgrcMWRrhHhuBtCYdTgBDHUKlNrfY29EeneKPjlaa/oetaj4Dgvr261PUlsrXTobFZblbeKKN5pTG0Zy/nExq8hcHEigJ2m+JPjXwt4X+Jfii18eQwtPdW1pKCZJGUjyII2jVAoDFpWxvGcsw6BmrX+Df7OXhP4d+NJfFuk6heX0dvFKLSc6usixNcQoJG8vyVwxVQsZMr5jLkkMSBb/ao/Z0/4XZo+gm31ex0278NtNc+ffIyJIu1QI5Jg4EYJViXCvwHIHBzfs3JaiTs9UfOXjPxVoOjXE0ukS27xahdOyRmVoFM8m6Jf3oXeV89PlL8ttAyuOeftPibrHiHR9QuJtHhht7bz49OMrK0czNIohmld13rghY/N5JAA6gsfRrv9hdY7yPzPiTCZo9QMuom80wSRyaezFoEmZP3hlNx5ZkLMgXzGOCFYHy34h/s3eOvB/xCg8O6XoEN/Pe6FawXEkFzExhBEdtb3jLcxr5CtcRKTEGZl5DgLsLY/U3KQ5VklofRkms+L9D8O6Vp40C2t7i8mkCIlwoEaKpEcgAG1mYzRZDHgq/DZAHLaz8T/Duhana2l74l06UvAY5YreaGWCyZtzRmadenyGEkjHOSoHzA8X4Q+G3iw3umao/iXS7a9stSsZLnTpII5jCzQQzi3ZzGY5m8vyNwZkRjFJJx85iy/i78PNO8SeI9R1i8ibS/C2h6pPptrLqVytrax3DObHYpiZWcKYbN1DHPk2k6vv2I53eDkkkYxqpM9TufifoOofBCyvrSKbU47jxlNBcW6PCQZWsNpXcCVIdZF2lQdwkBXDjYF8EfFuG/177XDbyi5isXJKQKPISa3Tz2JUlJB++3EgEI6qACxCv4V4S+BPhH4wfETVPCPgbx/PHpllp8+rRPqUTW+6MhCke4bxtVZfLdyWJMchKkKgbYsv2ePDHgrxI2h6x4n0iLXY7AXLQ3F29vLNbAgMyucbYwqLIrlVfbIy4UIQMZ4Wb2ZrGqrn0Da+Mv7bsjqz28l2sYlNzJa7nkaeKTD+Wj5aRVBSRQCPuMSfmCjztfjH4PtfHGneC1ub+WMv8AZ2WzjM8c3m4EabhldxwC5UtGDkYUg5h1mz8JfD7TBBYXGp3f+g2UF1plvFuyC80hJhJ8xbmNUkyM5UK8vPlsBz+ueKdc+E+sXniG6Z9N0e/vpNHuLl4A95O0SxyRXQlKgvtWcna2cLEuHweeWpDl3OiDuz17VbO2n0ZdJgF3KY7SV3uZJXV/uEzh22/LtzCFTCtySoYEGuw8daXHbeONQuUklR7yG2vA2xc7xCkQ5GAqv5aqOmBuwwJZRzcdjexmbSrie3ltpYWCsZN8M0b4EpPBZwFZFJbg7cYyN7dFrvmw6R4fJ1CO2uLCxi0zyba2kMNuIZXETOXkyfl8sDr1yT0A5Uk22btvRDdB1E6zcvaveNJAu5ofMijZSpdlJBDHI3JkD5uvG7kCr4n0e2YPesjzTXcawyeWJGICBhgxEhdpKjGO+RwWG3M0rWtYWfUIp7qW1dB9niS2uWDSFY0Uu6IdoLkqeMcL9c7niCTxFYeHpDqkbXbM7OzS73Ma4UBQFDHachssCCVwfl3EFOfNdEyVtTy8XlzpWoR+HioGmPCXXFvvt5LhoVbytvVFIZGwe8cffNb2lSXUOrRzWSr9ovlM08m0KyLGWbDtvHJBb6O57Lw3VtSsotQVZtkkc93NeSq2/wAyTBfe6sRkqoMeBt+fcxKhlzWlPZxabcQXjSvLZG0me4S1iViGYMJD8mTgkg5IIRcE7izKNoykluRZPU828eWUFl9n8R3d/M7avf2+mO24Ww5V9rttz8w2YDddr4YkHFZGg2N+0S65NfWtwwtWu9PgndVF1LE6sYw7bnyUSRH+XBG3Fdh4t8NRa9ptxpU1/eWDfa45YxHcJI1tE20oS23Lc8lmA3dCMdcbS7YQxG0utYguZdJuZrj7NeRiSFJ3DxMqE7Y3Z5F2jdlVwvAXkYVNzSDNKS6fxJpSf2BY+RBAIYzp6rt2uSM+auFIyqgg8YVsjmqsesaKtpo1/FB5Pl2xH+lXAO5VG1CyD5nBWTOSMKUkzniq3jmFNG1F/FOjJdWhvbpNPltnmPl38pO5NxbjbvbaqkHG3hlU7a43xR8X/AejWEHhLxPqr2lzNd3Yvruyf7QsYDwuQjLnzMxsyFvukRhCDtJPK4ylsdcXG2rO8g1C2s3tRcRQ2kz3Uzw2+wfIGVCxwqgKg2hAq7VLLjuNuDBZWdxqllfShrKeZbeW3kJFuXB8tkICpsVcoArZ6huBuJPN+GfFOga1oDeKvD9481nK8tsZJolhlQOFZ4Hj/wCWuFYtluMEgdxXaQ6Ta62unyWj3lvJcTvFZN9r8xEWOQxosQbAVGJZiPl/1Rxuy2M0mnZlPbQ5bxTP4gSZLpdVh1Sdp4kaCeOWONZPLiBICOzoVkjj6lCdxw2GULl6pqFxZeLZ9c1GeX+07z95KYoVTDkIBtdlYxoikI2EDDhuN4YbN9q9tDfy3l5dX1/bwaiYd1u6kyOS+HwSCyssY+8NuOBlTlszX7q7uNbvU06ZYLq+mjT7DJb/AOqt/LEj27zAkFSsxOP724ll3ZO8DmmdFdX1nceG7fxbpmqtN9h1WPTLxLdGWSW6dGM0rMAVaVwsJ+XczMMsSzOWowQLY+LPsWnnyxZWn2WSG7tpAsUYaIbofunbGpiK7gOc8YUVS0Wytr8wWOnXhHlzxyvDte3jNo6E+YCGB3r5nBHC4iAGOT7rHpdtfeF7aDVNNVNUihNvFJCI5GmQxtGWEiDdISNrHK4DbfetrshJWPFtM1XXLjT73T9Iu4RZvskS3u7eSOeM5jb7PlpPL2bV3Z2kknOTjBpXmmG1tPt1rFNdaj/aMawxWrlbeRYYwgYKSSNrNsZFyS8bK3ykGuv1ZRpWmaWNSgN2pXyb0Q5ZnfzDFhAG3KyDyWB4JwCNpG407kRWcKatI8XlJCJrI3Ks6edtClSWIRx5gk3DhgHfrwah7jOgvILfSvhXL4j03XFWyls0dftTuZBHOhhEcB3HdOmHYg7htO7AYmqvxL8TNHeap4b0+GCI+ZAbWdIQEaQIqsoQ8shG0ZHBXooKbxVivvDsmiSXWsB7fWTfyzXkrMXW3TC7DAjhlhwkakvh3YsUTeWCjmtd8QS+JNWj0fXba2u4ruK4mg1J1QNbRIillEibV3n7hY5JwiBvlY0BY4rxK/iTxnLJNPbLbx2WoRDLxiBWcssdrAibigUuRJg5YMBhsFCMnU/Evhp9fng1GN9QtGla4W+8vd591IscIhjkAL4Quxj42SBoc4bbjN1mOHUhcNpl5HbQ2erzS3VobpSHS3U7pUEgA6svzbhgckMWIrjvEU50TWp49KuZ3eygNtZS/bGnS3X5l3IX+XcYSMOnQHgg9EBs+IfiJYQWD2Xh6wsUNzC/mx20gKwiSNVKDAB4XHDfMCScLnaPNpQ0cgeNNjnncBycin2ttsiiyPm2bCFyQD36+/PpUt0k4+aQcjCr+FBRQlszIwZYw2OSc1EtnI7ZA2qG6dattGxc/NgMN2PapLSLywU3YVz8vHeq57FclyFLJVVcqSHY5wcY4FWbS2crHKysVHVe4qZI0EjW0gOd235hz0B4q1bQIHLIWEn8SngMKynI0hAmKExnyySz/dyOmKqeIWLaK0zSrvK7Tt6cEf4mtmFkjjEkYAkXJ55xn2NZuu2qXGlTws6oSm8YHYn/AOtWcZ+8hzgZGjMrW7IqFSZSCMnDHjn/AD6Vqz6fdve+Vb4YOjGQqBhBtwR/KsbSry1gtE8yXYYZxyy5JJxzXY3UFkJtT1JpnVoLKVoQh2hpwmYwR/tPtH4VrUfvaEwWjueb6lMby9mu3jVxLM8oGD3Yknj3zUltcxyABQMpwF24A/zmq8ImEuQhkikYsPmw23A5wPy/CrSQu43L93sO/wCNdMdjFiDzlAVbkgDgDaOKKn2Sf881oqhH6z/Ae5h0bwCmjXPg290GxsI1ggS4MTS6k0chVpljDsxyx3Ek7cSqN7Mdx8K/aM8M3F94w1n4n3/hmOeyt7G2tf7Oj06K9jnmgIjjudQXcsgH72SJJI9j7YSzbRDtPovwo128vrzSvDVxeXk+lWEUml+Ir3XJi97JcWiHzIFIDRmJBNEA4O0A7WcfKr9p8TfCWtXrW02meJRFpkEZt7x762SaSVHkcyBjIQ5R1WIZDqNvzKSExX0TSueHdnzd8P8AxJcQX1//AMKT0Kxe1mvVS3ns2H2yJpoYrd5GhyyzxpJKzL0CMk23hhX0bqaXHjT4c6T4B1XxLb6Brmr+GYJRDFdF3ikKL5uI2cOx2+cBnLKYySSQc8l8Ov2frHwp4iYadZR6FqEj5uL/AE2/kP2iKFiEijSXZvjDmMbTHg7shgVXPrPw603WtBnuNB8aHTdR1mWaS7guomkmVovl2xsZRxNuSQsFAGFweQa0S0EfDVt8G2i1ifw/L4e8UT3V5LH9lCwSNAbUov2eMm2iDXETOsSPMZFKqwwpK4r1fw58JvEsWteHhpfgC38SWcUcN9Be6j4ou4LzTQxRoHuYlcRhRCF+VN3PK7BlF+i/AXwVsfC2u6nrV9rU2qXV1dXwtTJKPLtLWW680xwjAPm7RAzSOSQUUKRtrvJNKhlvd1ssXm2jPLB+8KsJeYyev3SJec9C3GAaltp6CcU+h89+I/gPBqt9pt3aaHpur6Iso1D7Drdu3k2jM8cZl5Jk3vDksgYIJY/MIPmEGj4b/Z18O2nihLlPBOhxXcVtPqWl38Cfup5YjbhIp4WhJ2/vzEMuxKxGVUDMCPetb0fWtd1O1ltg1tY2lyb43CiQHaoxBGEjdS5DMrspV0ODwGRa5vxD4Ys7vQbbWvEcmh316tqsUVzLqUpQw74ZZOTJsK4t42z8wYlmIxI6tNrmsVZHdeD/AAx4e8NaTJpfhnTbPRrVpnlxb2i2isW8td7pGFAbAXIIGCucA1H4ivPDvh7TtQ8Ya5Jb2kdpGztKxghIVPkUCR9vRZSApYZ34BHete+IrLS9BhmvbDVmS509nW0tLSS4nZVwHUrCDEkj/KF5A3bwMlW28B8bfHX2r4ceI4dKa+sdb068sb61S80t7czG1lgumMcUgDSxfuJFyBnnPzKxaokb0qV3cvX/AMLra+8e32p6xoWqXvn2K22nETW0thbTS3JgZ/sZCpI6wGB3kZeYYwp3hBuy76y0/wAR+C9K0Txvo99rnhnVvDYuFvtSFtLepdTQ7wZ0jjYQvGkkgV4lOGQK3mPLGK6eHx5JqGiXHiPw/AdVS8jglttPtj5cd0zyFpEEzoqpMZRLF84Vd6LvAO1h5b46u/GnhQ6d4JsPCUs1p4h1sRwfabl7y0sbJrKPzlsljki+ziJVkVS/GIrkhUEhCypWKtOU3CJtfDn4ReA/BGqXXiTwlrN0fEN6bi2az/tCLNwPMNw6xhj+9LLMsqu5JEYjXKqzM/p2qeOFd3vEu7axigW6s/tOotCsEl0jNFvO1zKVScqvl/KXE4bgLurxPwv8P9a1jWrLWLDVLma6m+267Za1c2QhurS42QW8en39sHCMjQJMADl2Z3BVSHL+z+CP+Ec+JXh/T/FEWk3NxDPc35tLS7s4giwSyyK52BR8rrnLMCWO7OQxLC3Na1JwprmLOjvY3N/fanf6Vch7dpNMS7lsHgNzE/lSuqFipaMOAAxHzbG2kHzGrj/izq2n+GNcXxHq2j3Wsm40ebTBpsKiU3xMz7k8g4QjBkPzjhZZMYOceh6Bd22p2bE2ssk2nXTQCWWINI/2aUorbjgyFXWQAjC5wwwpUHz34seFrnUNSg1C6WaeDWFGkwwyr9ngSMkf624xvR2dpIwnzO3ngIodTjaL1PMknY5nT5vB82rR23gPRNO827W41aHexW4RI4VtvMVGbMfKywom4JsUnO1WBqpoOn+JJZvCV14bs9XvP9Gtbq41ZklNncRI4ivWjAKzbm8tNysSwcgkYIrvdD+EV9Jcw3uvhYriGPa9npszR2TAT3JRsMrNHlGQMqHa4Lny12rjt7jT9J8NxTavrKQpC8rPIriR2V7l0aUIpBfmVoxt2kHIOAT82jl0JWiPNPgj8JIfBN3Hp/8AaWozmLTnVrq4V/NuIZbiZreMPtO1440ztQq0bhQD87FvAP28PD+j6LLHcw3umafqGq3trNCs1pLb3MWyJ47hbeWGMs0SotsxjxuRyrEvuRB9X+G/iPqGueJI9J0rw9sUwG8JnvUMmwjIAUb4cZkhIVpo35kZQwiKn47/AOCiWqaZqfiDwpZaZrd6LiyiurK5hBieK6KJCxYplDHKrTDeVjAKuCG+UR1z1W1sb09WfPHgu8tfF04s/Fd7FOUuLSdWvLoyPOwaNFjwfmcsWLMWDKPmUKA25ZfGmu2PjOS7j0BxbaeQl7a2bboi+oo8Ubbg8s2/diRgXkOw4Hy/efmYrDxDo1xbpp9hqEd5eXKQWzxLKryp5m0snlY3MZB0ZTtcqT824N1fh/4V+I9dtbTU2RpdQ1BnhfezpJGyjLyyPJn5lwr53M6q5ba23dXmVnGO71Z6FJSlt0Op+AmueN9V8WhE8S3Udlapc/bgl5uDs++R23pllDiFchSrsAuPlDuPsWa4m1bwz9r01GuH8vacRsodeWILlgArA43KQc5wB1PhEPizw18FCNIt7zQ7Ge70S0uksraGRZ0klht3hFx5rM6SBpWIUHaQ7/Oo27vGfjj8S4fGdva6DYTxi0s5TcIkFqWhjlZ2Jwd5w5DJu3AbTGVAGDnhSl7bltoayl+7ufWV/qHh/wANavH431nxXLbabFqEUTzRxObdmfb5fUFeWK/eCr85BIwK6/X/ABp8MYrS0fVPHGiItyUmhV50CTdfLkR2IXkHIK5bAXKhsbfzYuPFVzL4Kt/Br3Fw2nrem9uIzIoExdSFxxvGI2xtJb75AXDHMuhaq+h6Xq6X8tqyarbbLfy8rsdZItkigbAD5aS43YOI8N8rgPtQpKKba3JqTPpr4oftS+B9CuRo/hTS7jWNQmjWSCa5VobaNS2EMqnDsUBLdAgK4U8SZ891D9qvXbe0exi8P6NcacWka5eWeaTO8OA6SEggjKjOWyR+7KnNeBO06W3mi3aPKqrHymiyQRkgcdNuM+mRwCVFaWyuDGb6CxY2zTcoF5ZgBjAHIC8YI6dBXQqasY8zPRdU+PvxG1LWINYvdUmtIUjjW9jt/MXzRHlhvLsXLkOflLEY296y0+KPi7V7PULS512eBWYtbTyEQzRROOITJz8oJifP3sqzZzzXC3FvOitJegiR/wB5CWcEnrk7MdetN0+K4eKWSPAY/dD/AClxtCABTnOMnJPGP900pUoW1Dnktjph4h8RSSXdrqWqX0vnQzQIJJ3lb7pjLK7McAgleMYO0jiOsOz+zJPiWF4oAdzJbvgiMAKQegwMsSMdvTAqxHppYXNzKY471JRI6K5RgC7LtQMCcjzAWXqFD/3jnQ1DRki0+3tNbttRs4rx1eWW5gMRlhVlDCIljgt8w+71GOnFZWgjVczVz074UfFLw1oHhcWEGgveSTiefUfLsQ/mNuQQLuwQqmIu+4gAMDzXoeh/FXw54ytf7a0adp7+2tpbeyimmd51AjcStvJ27QAgBXJBYnLcBfHfAVpDv1DUEmmhMivaQq0bAec+fLUeWNrYZo1AA/jHBzhodB8MB1mjsJpQWlDaefLMZnjGNjBXIONrORtIbcykF8EHiqU4ubdzrhKSike4aF9o06MWen7IXjgyn2pPLZNsbFMgHByqFlByXZuoBIJrGty6JqWni9+z3Ekdn5BNvOv2gNEYVEzBnAZfMeTA25xGQTjJGTFoTXuhaNqI1XyVu7cfZHmvoUVpVI8yM7wzTIQwyyqSS3RQDt1ruPXNQv8ASrvUfCax3SoJ5/K3GP8A5aFMuDtGNkJIAcZYgE7VFZ25dEJ67lu30TS7OCK2ihRmS1QrPcJIrKzxAh4pAo2sXJBUnqIyRtQget3um28+gRNbI95qvh1DI1uZGfapiIdQYwfmICcdecgbiufLLeTUriKJ7y1e3hN+slxEhiDnbCA0QJPyEKCvBzjOD8xr0L4fXmrXmma5ZWurtqs7af51ubkBXWLYA++TJZSBcRSAHLcHHG1S4t3JlojmtQ1mHUNN0m7sd0NxfRLqTXEkagWpnLDYflAi3iCQEj5ehH3VDWvEOqXDadqQ8MXFlfo2nywzR+VKHeVERDH82cHAlO/AICNkcfLjNrL2VvHbXltPd27pBIbRUEboAJBbvkHbuU78ZyNwQAfNurOu/iHommaFe6NZwzQTahZS28kvnlVlldjFtSVF/eHapVS3ykKCwK8UPclbHDeOviBqmieIJbo6VbyfZb6G1XcqLG++EMWlH8JjbCbgNvysQctl8DUdaXS7adNangubjX4jJYRXAnuZZoEfCphdo+VwxCgABfODYB21S8R+Mr2S+eK41FNX8y4S81C6gIkiEQKxqfK3ZLEooIKkZZwAMnPnvijWtXGgwWE+ba0sZWlsVLbhKVVUEgG1QR8sm07QMEkBdxFMs6Sbx/pmnWV9LetFe+Ib1UeZmgJt5hI7EyD92p3oSeCpXPIWQszrxEKho2VmY4GxlkwWByR1GeoOepxkjJxmq+kQTSILsx4lmIJyfUDd+BYtx05rSMEakhgAc54pM0SVhnkReeIpHkQPksVHOaz1eWVZIZCPMiYqjEnBHqfetV1V1JyxP8RHYetUkV0vGt3KvlBKksa/LtJIwwP8XB/MUirIWziTBkzlNu3kH9KDGjM4Z1VPKJDZxsI5z/M/RTVi0EaxzxeZhVbgDI5NIkKJdvFKolXaIyTjpyf/AK35juaRSRPDFHIIBJC8czrnaxyY2A5Ge/4981ciUSIJB25wetVbaPzNhliaNowAjF+WXA5/nV+BVkzJBAwAO07mzz/e/Wuee5rHYjWNw24c7gSR7elNu4xe2DKQoG0qc9QBV+CONWbfgPtP48H+uKdqn2YQCOziEapEhZc5JOwbjz6tnihNJoJnGaTYC5HkuQd8yIjEccMDn+Y/Gulummv9NaWaOFpLvYgiwQQu0ndx+X/AazNOtmuWkCh41jdGzuAyN2e3uora1nUIrGCNktghtQZFUty27IHP14/GtZO8jJbM84ZAyeXuYHPylRjB7/8A6ulXLJYLWExXcu5j90MCCx+oqvCsiuxdi6sTtx2B5B/Wra7J4xCrFsH7zDvXSmznRVaO63HFvjn/AJ60Vd+wTf8APOM/gKKd2M/XHwN4d17Ur3UrPxV4Ut7WK3WG7uLZnHmSXE4n89CI3ZGgkwj7Szj52XcwGTf8X/Dm4unlufD/AIesra6tbJrewubyZvJiuGI/0doUGZIeRhRuH7xxtHBF3XPij4M8M+Xf614zthqE1sltdRxL5sxlyWG6MEHjzC2FxkSA5+6D0NjqOv2umpquoiCdHVZnnS32YjYsAwB+dECP8+/OM5IUBg3054lkfO19c+OLPxC1/Fr2mQ65p0otEhaCQ+WmoajIFuCu1d5+zrhmKOSSrMF2kv1Xwy/aYh8c+M18LWnh+SOyxItxq1vF+6iliSUhnOQYcxrBgFWIaR06LTfjF8MfFOsavY3Hg3QdcvL9nsrGbULfVHSLyxMI1NxGyFGaNw8geNWKiRmCZ2NJ0nwI0+YNqA126sbTdcS2sOmJBFvtZbeR4/NRkG0szF2beW3j95wjKELslLU9d1K0nj0++ha5Fs0lvNDukl2AZVsEblOeVJPB43N2IPNaVZm31C7uZbSaK81Kya5EMoWOOIDbEOpGJSkkQJLFcwj5Q/znsJNNh0uCSeKLasaNLIoAABIySSSDn34AJ5K9uTtbi11jXb+a2vhKujl7e5MMQLC4YW8rxuUVSWWNoQoBwSSGQuoCG5TSPO/if4Y1nW9A1PTJ5NbuvDl5Bb6fImi300eoQRHb5ztARJ56KhBCLvZvMcHGSy+Pad+zN4A8JQ3HjLVfibqLafbSXQ8uz1Lyi87BQ2ZvldnbPKRkFihJd9gUelfEb4j6FplpqsPhKLSl1S00uWe01sWJS2a4IkkQhsMIygEgZwZUyQHIfKV87aj8YfE/iHw74pGu2dhoza0t26MdLlENxObNTHMrBj5TC5X7RkhzEWGWJcyNaairsdJXqKJ9JfAfSdW+Gvhufw54a0ptUi/s2O7TWU1eEqZGu/KECQvIWXYdz7z+780yDG0qR7lqSSMbyK3lHn6lbiD5pRJCk6x54Vhs+fhTgc7Y8AtuI+EPhv8AHS5tokuvFmk6q9vpFiRY6dbW2Uu7URhGNxtVI5I1AhjDSkK/kDcAWkQfREGs2Hxu+D0vhLQbTU/DWrajZS3dtCWaSJ7gSvuiNwBIFJlE+drglN+5VAdUxcla6OydKSqOK0SM/wAY6j4R8DfDXWvBPwxLWk+rbxDYGwku2t7yezBiDRytwSWiwHbBklkYjCOE5rwd4L034p+C7FNNg0rV7fwq4ls9LuPM85lW0jht0umikcCQSGZZM7n2sAACiIPoLw94SjewttQdtU0+4u7O0kuknnLXClI4ZFEzn55yhUghyXO5huOTnOGjaT8NfCjeEPBzXFq0LSW1q9qs08mmo4aYSSswcsUQu6K7szMoQBssKyvfU0jPlfu7nzp4Wj8QeC/Cdh4IvtH1Tw9LaXctxrmv+HNLuZGF7PI/2RZON14oO5CGjZZQY/3kYJc+uXV0/gD4E362l5a2GrXumQ21rLGpt545JLIFpI4AzYeKGN22ISMWoyQGZ0f4J8KeN9U8c2HjiHS7+28OanHcX1jDqlxIbi1u7oMr3VxAki+YogSOKKMvmFJF+VWV6t/tAaBq2v8Aw3u7rRpXjkj1MX9iGMiJFvItflmiAYRkyrI5O/8Adeeg4ZCjgm5F4mrzUlzblXSviJq1r4w8J+HvE2sWdx4jvtAs7t7SSBYbd7sWkxma2mhUswJKbtglAQIqgeYdnY6nH4nfxToButUR9N0yFr7VIreJJi7L8jBwCBhZ4/N3hWlDYEaptkB828O/DXUbvx54V8WeLYtGs4bG0uGvb2OwW1nu7lootzyxqmIlCWpBZ5HysrRyKjOVX07WPEQg0CXSPD+q3N7r8LvcW0eqbrc3vlSPKyggKBCU3jzYxtPyAfK6oem1jylsb2si9sNMvdt6NIsVtJBHc7ykdttgd0maV8IioY3Qqy42tHnAJWuSvPFel+JEu7azkudSt4fFIsRaaYvypc2pLNazK2GiANukpbaCyyoF3fxeXeLfiHpfjrXdN8BCaBdB8cWK3MENpeTRSeW1k8U0YeCZGfbKGjeJ4kRfKIZBl2G38NdFfR/COu6L4rjubYWmp75RY2QV1uJFjRJI441Z0l8wrv27hul3jejhpEotakNanWfD+SK3g8T3NtE0niW/uH05LLUmkk+0rAZ2t4kYPJmBzJOSzgMB5u9QsW1fin9qH4q6Z4313w39m0z7ZqNrpAts2RkaUP8ANulM7RbpypdMLvfojgq5dB9s+IFh1bww1/q3iC6trXTVjvlLz48uANGynzfvG0Zo2XzHjG5ULAjAdfzlub3QPEPiW68R3eo6qupPdedbxWgaa0tIRLGzmOQeZKLeNGcRsQxxFnClQRjXdo+p0UUrmHcahrN9e6SLe21M3CXDW0cl0mbdHKGF5YlLhTJzhVdSRtXLnBA7zxj401/SvAz6lod7dXU0Zli1C5TCLbpPI52MXLsqtu2hg2FZH5BFXdAvPDWp6GNN0XRfDkM9kkFrpcF9fs0tu6yGQyxHlQzDCuzYIAwCpLCtWT4Vxa34Iuk8TeKru6mN7ELBdN2TlpN0gldWchi2x5gVVhlcyMzbFWvEqpKd5Hp09FofN1lcQraR2N/DObOa7Vt4L+SAqtvUBSQwZWTJG5lA+TJcLUAt7XV7zzI/s8Fsys7KDIYikZDk7gdwH8GMnJdSuM17R4y+Cmoafp7eH/D+tw3UMLS3zWMtsgu0EgAYoYwzsD5QXapAZcZ+5zwuieFvGk0UWqW1tNE11dpZzKWV2t3jCSBpAylkijLxjJxn5BjBG3WM07sylTbscVEI1jS0hmZ5GkSHZE3m3Fyxz8uABnaQeGzjHtxdh0fU7+xbUbOXyo7GRIGjfesrl1ldcFQcKoik35z95AcK3Pq2p6G0llrl1p/hyN9VNtZ3+nyWjOq4SIrMwb78ZR1n3qSWLI4w5OaxrnQPEHh7wtA1tfpqlr4kWWI6LYXkkl3HkmNGm8pStwjHyWyRtDAIQCxU5Ksr8o5UWtWee6jYzaTfTaZf20sl5HtDGQG5k5UMAxXcgwrKMKTjHboKMMG+4VVvIbWSZQWjdzEVXdgfLlW6nqDjt2ro7Xwbeppep6pcQ4fSLmO1miWBo5pZnkZNjKzbkAZW5KjoFODnFXwp4D1/xjrDxWME1yl1HKLNkVPLMgjaSEM+dmFYAlztzsUYOSD0+0iorUx5exl6Xpep+INSNjpYXUZWlEywW4EjAYBbIzkKVXGSepAGWIB9c+HvwQvdTtdBllWDR2s5jcT3jjzY9QkYqfl/eYePHlINoKks3JDMa3vB3w2mvvixc67pPhW4k0PSFDaQl6CyxTJDtba7Mu5VmRtpYANuXcQBvr2tvDul6qWsreZJIXylyhTYI4zb7VVI2/1YyjK2ADu8wfdwK8/E1m3aLOinT6s4U/DbR7i/h1K9slg1C4IWa4Ct8uHO4q0h6EZGSCx3ZJ6AVPG/gTwV4gsooNa0+WS/FrFDpiQkNcyyO7iQBgRu2meEkE9CTwfmHdRW0TXR8pJZtJ8wwCG3l8ppzGzB2DjAZt8YQu2SQmSTmtDU7W61KJri4u5r2aJTcQonMqPEgUPG4+aDbl8SDBJ34OMAcvNLudijG2x5fH4H8K6Bo0VkI3t9OXdqVzFPEgkhu1ckAM5LpjLKBwQyxKRuypbpllHYZ0zUHhkVAUjWCWN5gsgVkjCjKsB+7GTuwyqTkKDWj4ij0/SvDt7pdjdWBn1OOyKrO4I81Y90hZVU9+x42kcAKuI20p7LRtO8QTiJNQTy0W2+VikxMO9ULFSG2ttLBXcgHOMqafP3Fy9jPl0e78b61YreSXc1vbIzSWt9D5qwMisuwAnao3xzYlI25Ub1YqCN1NRs7OOFksvKW6nW8jlYlvmmJWVE6sQ3A+YnrsGeSDyTI7ap9m860azWSR3HkC6nLs6R/M7KqFN4ckCTbJJuPzGpbzVBqdzbme2Om2tnMywwELEwjjjUrl2ITyw3mKckrsCjCDli9wsVbvU7WSBormWWaGytFk81AFjikkMscsu5AFZw4Ruc8SMcA4C7aWl7e3janDcX8D3sZ+1vhIpJoo4yh8zAGDhEJxgbX9FxUV9a6bpxvv7RvzZ2Vv8Au0jljaVbiRwIRMUHBXO8g7ih3DJHytXKa/8AFHwd4daDTrSC71SeM7Jy0zbFO5VZGEhAkLRoTgAZVhyQxqkQ4XZuyxPdW+qxGzW60+SKS5NsYzmImMbHMituUsqMSWIChmOcgK3nmtfFXwvpawroOkWWtX7W0VtBfqptkZ32Akkx70LB95BIwSV+YZZ+F1T4g3N7qV6vhKW90u2v1gjlmBWGQMq7VOEPAYMuQxJPOcg1y93dzX8C2OpwTSIrNKImkATLSb8nbjOSAee5J7nKcrMap6Gjr/i7Wtav7me4NjZx2bNOqRI0pjB/e7nJBZ2CKzncDEcAEEmuGvLm61C41e7uYmaQSmT7ucnbhj9ct3we5+YknU1y/upbK7sYpLeMS28tsY1iVR5RC7lcqBkNwBnnjFUBeGKJ/KYmJ5UWRZCQFjl5JPuPlJ9c5PU5fOi1An0cSXNhFKcRK251LHJwSSOn1q8UlIy23g9QOop8dt5UcMMMTxoI12rjjbjI/LOPwqS3KmBoy7Mcksx6gelZueo+Qr+UWYuAenBDYpGgmmTIZAwwASOf0q4qRnCoMgjk+g9amjtF3CMEKOCHB5brxjpS5ylAyDHMtw8LruYK0isvQkYGP1H51dt0+0BW8tY3jPzhlycjg8/nT2V7fyrmWN23l42PPyZ4zgcnkL09Pep5IS8TRwySrudpA3BPJzyelHOaKBApjRHg+Yo0m85APGAMA9ulTW8UsfmNBI4WRemB930pUhfy/KlT5x82OOR6/LU1pjG4E8E49qxk7stQFhiQw+YobbuA2kElQOTz75/Spooo9v2W4AABLiTb87An0PaiK1uZZPJt5zFllk6Z5BrRvQj+VE6gFQVMnIOMk/zJrHntItw0OVt7dReTxFGCmTcB/eA6f1q/rlqt9blCy+YYdoIH3cEnn86Qw4v1vGn3pGpUdk74yfXmpIg0tvK83zFgWbjGfTGK6Yu7TMXFJM4JkfaRKdpJwQBjNWLBFSWSNplIjG0ZHJ75/Wq17expIzspHzknHp0/pUlnc2sgSKCba+DuYjla7VscTJSlvk5aTP1aiqzXcoYjBPPX5uaKYH6j6X8GvCz/ABG1L4h+IdWgW9uJo9cSCIJ5LzRAASqzZkiTkAx7x/rIwCECqfog6w+oaXDfeXDHPJALyVFieTzosEBkCDKgrhhklwNoOCCK+R7j4v6O7abrGm67oyeHdS1a70xxPG7XEDQu8kKXPOFjmjfdlQ20OwAO3K+4eF/EtxqVrp0lhDZw6NBm50ud45WeNQY5FZUVVZFYhCIgzDaXYFlwlfR8546g7Hb39pYXWqbLzTwbMypFvVi8Egz0A+XG1go5OflUYwBVfVfEOg+DZ7TSJ4RDMyTQxvEg/d3IaIHG5dodll38g5KsclsA+I+E/G/i3xRcy+MItU0WHQNXvbm4eQ6eY5WyYYodxCqyo7LLKzYZ1VYh3Ytyth4e8QW/7Qdz44k8TL/Y2vX91dx6nFcpai1tVa4+z7ELKJSY/KTzJkKBh86sC2cp1rOwch654t+POlXXidPAJ1LUrfVJUWYKkF1pwMTBlLxupK3Ko+x8Rsm5EJUvtZH3LrxN4l8WTWejvo2saLZamH+3a3LCkH2V4AhhaFHLtI4lQBA8asCDlVwwrgvjDfmeGzXQ/E2hyavLYGOJ9YhjLKsuXhnhaEqI58wFEEcibzJETtGCPk7xj4l8e618O9KufHfjnVt8NxFNZm4u5DcX9+QItyMwIjSKOIqruTkzFmZmBzqqke4ezbPsO+sPD/hLR7HVpptf0+xtr2Uyz3Wpb32EsbWQwJKisZJVkhdWX96Q5b7xauahfw/cTx+H4fipf2UCajI1+lxFvtYtR04pdttkaBo4o2ENzO3A2naq/KClcCfif411XwNr2ifFLRdUabTHSwgNtcoba3nWJJLUMYhIszBJuNpAU24d1kPzL87Xnj7xbM4i1TxHHdWc8E6xyxWptUSG5iMdwiyzKGO15njYrjKcIwCRFW6kbbjjBxlfqfZel/DnwBZWmo6bofiF49K1ONxLJ50apZlox9qbO8ApshkDo8jbWifyvLMeKveDPBthoFnod1aaqNV0O1igvfCi61uklcCNriJmnUJJEiSLzD86xhJpHGCij5m8ZeIr+28F2eoHwzYeFr64uzDZzSQXCSzW07AsILdsmcIIVcTTImCwlALHefSfh0/xoufDsln4tv44dYMdtDol5du6C8jkd0CLJbmMxvl12KriQMx3DZKCMvdeqZ1SlW0u9z6D0r43eKrnxG3hXVPhnNousp4X1HUxGLlbxHnhaMxQARbXkbaJCUO1lVo9py4NeZ+OP2j/AA34T8ZrdeKBa63p3i20sxBdaOzRXSWgvbkxFrfkxyQKyN+8GC+4HdkY4K38Y+Hfh14/vvFej6lr/hDWI9PMWq+HorYXV6spw0gha480GJpvsO8IrSLtncbFIevJ/j7ren/E/wAC6F8Q01DTb7xboWnXN/4hW3szZPLaS6mttZFlQiL7RG7KpbaCY7uI5KqXqZSUndHRGCow5nufX2g/tkfBifw5d6nP430+z0+GxluoLieR/tt5MrAL+5KpiWR5D+7DBQ28btoIrw/48/tb643hmw8M+DhNpPiO8sorrXdRt74y28fnQoywRIW2MrRmJlkXPk+cioyuzOPjS0mmnWKeG0McSTmSCe3uDGA3msA7rwpBQxrgrz5Z6A4Hca34p8Q/EDVLKW4SK0bwzpMenXMun6fcENZ2+V+03jOXMj7CIg3AKBV6Cp9uk9Dmac6blLue0aB+2z8QPDfwXuPA0V0f+Eh0tkjsNXaKF5FsQYkSAbmYeZzdAO4AClfmLkA/Wvww+I/hL4qabdT6Rq8ulwXdq015pkF2t6olumRGYIWZonCsrMjRrGpuomZNwJX8wdIMFxb6g7taTXOn2zypEYwqliFADOrkD+AqHKnIUYIOK+jf2KfH2h+DZtZ0Pxp4mXTNIDW8kFqZWgS7Ko4baAN80jExr5YAMkeeJMAprTrXepyzhbY+ofBdjO/xG1rTNU06efTdk96mmXOlRyuAxWIxCRVaEiUrFPiPy2GzkSkyGuh0bwNrnh1I7cafqV1p920skdxPqUd3NYXqxeRCywvHGJxNCqo/z85+ZD5jyntNG1rwnoFtax6NpgtbArtTyoTDBEjMBwEBVl+UDEeeg3YABrF+LHxN0Hwl4at9Ul1t7K4u2SCxaOOGSO9ldZFIiHO51yrhQyksYl3KC9dEqmlzG2tjyH9sH4zxfCbwI/h621HTLjVtUjjtdFWHZFLauWKqypK7EIWiZGXG1QqJw0jOn5/yWupzafcaja2kISK3EriePDiA7IUKkEBiWd1KAYUpJ8oHFe1fEzwLH4uudM1p7DWVsrCa30+1+xzzLDZWI+RY4hLJNtYA7uo2krwPnLS2/hnwR4cuLV9L0Wzn0iaCSa4meITSPG2WYQqwBj2EwEOmGJATdhjXkVsTzysj0qOHcY3Z4p4I+1G+fXtM1W0hu7DzLxlupHkM0RAy4UIQ77k2A8fKUJHBJ9N8Z+KV1Pwjb+LLnULize80W4ggSHUTFbySR3YXf5ICO8gG45JI2og6g14l4+8VtomrX8GgvHJerJKlzNbSBY1G44MbKclXQqMDBI9jivPb7W7m6jWTV9RvL/yDtjhmmYxQux3YiUnAJJBPcknOc1hOlzu7LVRRVj6K1n9qpX8K6ZaW2lpqPiPSoJGOs2y/Y4YGZwxDgptcBcLtH90H0NeaXP7SPjq3ur26tNfCXmoLtke0sN8kowwcFmZkb77HfgNlv9kV5PNDfRzNHqF27zygjYZCRbqRzx0BI9KaVhkEk0EkYDFizjAYg9Qv90Z54x1NdEKMVEh1XfQ1pfiZ42tIiF8VawheWWYeZPhsyFtx+XGM7j9OPQYr6P8AFPxdpc0d9FqrgaYA9uN23adyKR8uGA2s2CpBHJBBrldSnaaYoFKjjBJzx0/pVRYnA8qM4eQ8HHJPpnqKpUoLoJ1JPqey2/x6/tadU8Z6XLcL5jyrb2szRwySbFQuxJy+QgAUnIHQgGvpL4IfF3RdZso7a0bTNOMitPBGrs0lrOdwLZlLCPJK/LkA4x8w+UfBd1byRAK5JkJ+cHnn/PetDRvEWt+H5hcaJqc9jMuCHikKHjtu9OelZVKXNsVCajufqy2j6ZPYRw6LZT286jd5DFpnhgLyuoPmcZDltjsVwUDfNt2vWuxFDpQ1OysYpMETyvGxj3s0jNuYlFLEk5KkAhiy7SQa+ZPgF+1Lpt/FB4b8W2lw9+qx2yzySC4jdVHySZxgSK3cgHDH5jkivqKL7FqWnNPM0xt7hI4za7H8sqDGHBIUoOXAyM4+XJIwB51SlyPU7FNNXMqJ9O0jR08NrGYY7VkSNXf93+8cOyAsGy2NzEk4bIBGcimXd3cJdfZPsskljJujutPlBJbYSkgkVh90Ky4+oI7VcudHsNYkv9He10spe3rxz3D5LFYyI1wGUBHXaFJA2/LkdTUd5Z3TXkunWaCa5ihaOaSKTzN7eZnzZH4I3eUgz8wIjYBcjDYy2Li7nAPHoP8Ab1n/AGldRiIBUSQqm91jGE2Lj+9CFwOBg7shubd7pt7qQtotR0HyWmCRm+mRfKkMMcaGQj5gSdsp+5t3BTnO0VDc6jpviq3tNPfTrO01KAtPe3CRhhYu8zIQjbgQsihMDDL8mTncczLrJZbttRs54DaR6iNs8iFoWfytjqrMEEcZC8biSWIA/eVBoXF/si4N+14rtYYNxHaZzJDskOfMBy3z7sF2xweVUK2PBviL401DxbYNai0i0myjvD+9hRvPZ1Ty8hyc+WyYO3C8k5Ga0PH3iPU7/W00qe+le0gQS3FnHEyxMXX5lbBADqCwb7xB4DFVUDmlgknuopCDcRqozJLLuK9uB0XHtTKsilapBaWix61dNJZLF5caPKZFKkk4CnhRkkgY4LMR94067/0e1SG2vNkYy8KOx7nJJ7n8ava54amu4EmnuxIgyXBZdyqMFSPXnPWsi8sZfPVY05kjVf33IB6cY+oP4UXYWRBDFNKz+eVVGYuRjqfbHGKc0caQACIkuAVJI45Nawspbe2ieCNSwXCqckAde/XrWeYfOkicKBuY9F6HvUT2KjC7KUiJHcEJAUMjKC+1WVj2BGOxOaw7qwWFNR0q6LMJ7V3+dwGTeAqsDjkfKi465GR/Fnqr+F2jmKAQ4jYo/QZIIznrnkVBq2mLOttPY5kmtoEdPLlAPmFmdMqR84YqU9txxWfPY05CtaPLOsfmtDI6gtGkTtjyySQGJ7gHtwe3FWLWySWQOgJ3/uw2fTJ6f56VNbi0e7t2aRZ4ri1hWHfujwFyvlgA5G0he4JB4wASLb2lxAGRVztB5aMqwwOGPvyeOPQgHNZynqHIUjB9n2bldSyhgGA4qZGMcqO+wRurLuwTscc5/WrcNsjyZvbp3bA8shcA8Dipo43McsckEhXowUClzlqBmxoILhZZHJAUum3O7KEFuvA3bl9/lpiwLBdzQiQOrHMYQkLHwPlIPGe/41q3LQXEBaWFJCgB2ZZcgjAyM9f/AK1UQsZnRLlAGVwmR6BRijnLUBrbFjEmxUZxghewqdYoSibUPToD1q1NBDMPNiiBcMu4dN3v/n0pY1WUr5qKDgELjqA3zDP0qHJ3HaxLYQXM9wsMCNGMZ3sR8vqauK+8zwXY3AHy43IHzLlfT6mqMazw+UsThivLk/eatGWYG2kVIxuEeV46c9R68ipHLY4wWZWKUK53B8BDkgDAP+NaNpHGLdvMbH7s7vyP+FSqlu16bCWfCggDgjfwO4qvqKtbW15FE2WSNyi++3AGT7mumnujCovcuedtY/aXJlVnyg5Bx3J/rRNp1jp8E13DazSArudQ5+YL24PGfarkSMWWWXKFYwpUYwp5OfU8EflTxcrLA0FqBLHvBAXhvl5bg9uRXorY8y5z66ncyKJElljVhkJsU7R6ciio5bS9eV3S0YKzEgb+2aKYH1h4a0f+1NM8Rapp2pTS6zqkltNp8ejXMcVva3biSXypF3EkthY0eNgEViX56d1pd94m1TwrZR6lolzaXFuYM+RfyLDfQwOk8UeUl3pMWm3buGK7nB4rpPE/je5stYi8GeGdI0m11YxxTRJHbzW/2RSQZCz+WFIBTaZvuqgXzBgnFL4teMvDfwp8SeIPDuh3F0+q2WrQw3MO5reSQSb3D+aN0cY8h1GGkB8tiqFCmw+q+dLQ4bpHpnge5i8M6XYaSLR7O2srWK2UG5SKaWIIEXJLZkO6ORd5OCIR6iunvPB83izTLeXTZoo9R0mbfHNCjeXNa7y7LNEGwwSSRlyf4Z8feVSPCLb43aNrGtJo/iG3l0+3v4WWzGoSqY0ZnR1BcIjJGwlOzftJCRnPzFB6npN9Fo99bXB1yRbJXNrIjXSD7RbPGA+C0ifvOkuSBhwufl+YZpyvqUoxepB8Vt91o1nY6hoyNK0yrGLT/SBHbFigDNkkAh2+TaejnoQB4z8MPAMmoXtvpXia91WaXSZntLWG6uC83mb1Y3MTGNHhVWZ3AG/hQ207ePZ7vwzN4dW+uvEFnfLcabctZuyxiNdsbOygM3UliwDL8o3A8DKjaTUbC48G6zf2OnKmraHeJcxX4V2a6WV1R1VQPuoqglnyFJTPJjBajK+onJLRHlfgrwBe+HNRu7XXtCufEd1qU0ct+9xMsaQXCYEFx5k3myFVDnkwsq5f5WVQ6akf7PuqadNJ4onhtL7UrWU6kVaAmyWVwW2MsJbzHLrI4TftIm2sCHUj0ezjh0e/XxNfXunNqNxaJKQY3BgDwyyGF2VvMKpuI3bvkBYZxJ81W01G6+zz2tppQSxuwY7uC8mEpaR8sEQybl3DLDAUl1BbBHzCpaIFq7nD6n4X1/4g67YeF9aSCXQLOa7v5Hm3RTXizGR1HksqR7QfmUncVA/3gey8aW2vaTqGk3g1OwshA0sMtlCpaYgxyoojMYRUCg4wdzcuN53EUunC30aysUvBKkVm7S2yFpEYMNv3JFcELtUMFIAYkHkuC8mrFtZvILhdQgvbddiXD3Ch0hRSPkdjh1C5kJZSvVfun5TKu1ZFVJczXkfPvx++Fx0i/tPFF548MGq+LZTGmrX9/DaW8EEUYPlogO4KVEScqdpGSCGyvG/s9eHIfEerazf3fiS6s7bU1m0IGbToG+23MkfmxwA3YUbw9qp8xghDiNlKjcF+odf+E3h7xqy6PqMOladbxyNO93LCz+UdksEm0k4yokjdWfgFIy4JOB5D4a8J+Ivh/wDFG/8AC1qbG9fTtJFrpupwiONkhJeRdVADswbc5XKsoIkzhFApwjKN7hUq8zSRwvw1+Emo+M9c8V6X4p8OLZz2Xn3J1aaGaJY7jIWOBEVliVTuBVfLIQMo2gdMu8+Hmi6F8RdP0S31a7n0K7itm1OCESRusUyIuJizFjEkkoJ3ckFhtPllh6r8HbbxVb6r4n8Y+Iru5k1C/uXsJYmugFd4DHHlwPkLOZ9pONoAdgCuWpt54a1aX4yp4m8OWESafHYWdjciSJEE0S5O2DjGExHKxOWJQqHAIzyyqWZ0RXu2Z458R/DkM/xJvNN0+5j0/StGUaVcC3CuJpAD+8/5ZqWwsrE5LZhjQqGYCuP/ALL165t4L65ukjm066i0m0URLFdQmJiZI1UBWLQ7uWGf4APmy1fXY+CXhzxxqEuqazbXkV54hiit3uYrhDLJJHLG6uTIBASZIIOAMMZTkNkNVG/+C2iWp0j/AEQGSwmeLUZ1DLPdSRW7iVJE3KAGcxll5j3Cbd1YttCs4rRGcqUWz0XR/HVnqWj+HNbtLfU/tbaXaOYQ/kmOcSx/aMhWVo4yjb1UKM7mbABJWh4sl8Q/EHSbW08XrZ3ur6fdR3Npdo4inskVWhkjdSG8xXV8lW2feyyYHPW+BPC3hvT9Cka6tmnMMKrHA0pVLe3QllUtvxLwTh+hATuAWt6tpfhu7ubvz7lhDJItsyqVaMbFLGPDAgnnAGAc4HGSBbqSa3IVOPNseReJ/hxqfiTSTo/2q8/s+SJ5FaK5aN2lEPl7wTtywEik7hgqhzhssfG/j34nvfhFoNt4A8O6rezXctuIzcTpHE9vCXzkhVB+YoAQeuD1B5+g9Z8YadouiprOpRSAQSTPJE7p5sk4jw7uPlO7ndt+bChcDk1+f3jDxFqvjLxBPrWv3LXN5cYaZiSVHomc9jxyAeScd65oU+aVzeTaRxVx9puHeeZnf5goDMWwVUAHLZJ+tRWltFHL5874EOSpKBhvPUndnJ6c1szG1XeyypMW48xgQB6D8sH8azpLW7uSYLaKRxjJfPAPpXW5Rirsw5HJ+6ZE7zXXmx2Wz5uHkKgsx/GmvbQ2kRN0q7kXCLjk10OneF7izs3mkt3dt2ZCemfwrKvtNu5pzbxQNub7znnj0GaFVpsUqcotJrc5C6In8yQIEx/CeMGolWaRwkQwUwQR712UXgDUpjGvkSFXXczkdfQVbsPAt3bI9zf2+IowcYbG4ggH343J+ZoVWEnZMt4eotWtDk72znnMLSBfMjxG4PG4dd/64/Cnf2Oz3D2xYIrDejkfpXbR+HkmzDI4KwEKGK/Mq/wn3Bxu/wCB46AVBJaWqgs7xOzsVi6gHGMZ9Dw351V0jJ05HHWq7J45VjaCaBwY5BIcqc9Qc5HAPT2r9Vf2Pfifp3xg+FtjZa29tJq/htP7OvIXV3mEmwFZG/vIyqoOTglQSMgGvzLvobaSzubi0H7xkdfLKDPmHIZQeuNmzB9zX1H/AME4PEyWHxM1yzRIbm51PR1kihnjxJL5TEMEZRksA4IBz64I3EY1EpblRbWh9b+KbXUItVudDubS6R7lIjMoRGUhyZF2yKxZeEAIJ9yOcmG38PR3lxI0mnvLtd4Y9xQOUMb4WNgAEYmSXnBBEjf3a7LxNDBq2s3Ou6Zf+TJcQxz2zrHhmhjQ53Rt0ZS0mCTsBCZ3Ddnz6P8AteV7c/2jfxXdiz38fmhVEVuD8g5IAyMRsGKg/PjqxHmVUk7I76WyOD1GGfw3r82v3yWk4skEayFAphTz1dgpXnZtdjjJJDx54BFeJfEHxtDq921jpFgLy3t2zHdSlSW+aTClTwApl5wANykjouPWvih4otdGs50023meVbUO8HkgwgNHKpPzYMQwYThlDZU/3ufmmWxV0kkkdEPmsvyEjB4GwDqAMAfr3rnOghicfZJ7uezLyMjh9zcgrFwoY/MQMY6+3YVt2d/ayaYFlZIwxMTsVXO5TnjOBzkd/wAKxNSsHlYkSbwc5jDEcnk/zo0yCSKcTGb7PMrbVV1G1yO2ex9zQM1J7+3vpIlhjaPapj+dc59TyOn5ikt4kgLojNKU5HzAY4weoI6U+YzG7Dz2yI8v3jwRu9Mrx6dK1NFieJJQ8qGMqxYKCSGwM4B4zjJHvtHes5toqO5RkaV1R43YkkkMpyBnt6f/AK6msrF3VCVwSCNzDoa6afTbaSxgWWMxuPuASZI45IHdc5xz2qvZaReRSSLzcAMChCbACexBPt1rnnNo1jHU5qS1toJzp1y3moAJCxPyBc8r9eAaS0tbN7nyPNcvIY44nSPeFXJIUBcYIwPmJzXQ6rpKxwQzXKpvmMiNEQvzewwcn8APr6ZEX/FP3FwWt/LsnKmUsJPkfKADY3X5d3AycE85K4zUmza1jEm0x9Ou5YblftFjIGeVYw0ZjmXBDq6/8tMsDg4ACAhuCDfFnqtvAtjcql1IymSKdF2rcITnrGSCSSB8q85zkdB1eyFreL7TZFkZiI9+3gZAAU9VB3L9SM+lZ1xomn3Mb6eIwsaI5ZARvjm8sukiMP4uxznOB3qXuBlzfZpIhZrchgmCJcBmzgfKQOV+8OozxU1rEJC9oWHnQRu4dcnIBADE8eh4NMsoFvLctLIwvo23LO0OGCdtrdSvJ+9nnPbFOj+2XtwBI0sbKwgl+YncmBx/nmpZrCFxJ7aOZTcO4CK5Vyf4uDj6VkwwMJGDhXlREcOvIZe59P8A9VbE+m3rxq8EmVUkNE0eBJyeM9jg9aht2SSdvIhCxw27wtAh3sGyuMtjkKMnA5OeDxS5ki3FLQqeXdgrvIjA+YH15OP51PBbTyxlHiwZS0YIPByOvt1x+NWZJ4Z4niJ85kO2B1IUuMnjaRxgY9/XnNbmlaZDKkiwRzF9o3RykDCblO8YPqPyVqdxclzNWBhcymTbvlOAQBhQThV/DcoqtLC0H7+SRCQMwhclgD3Pbp61YuYpbeOQsZhGOEYx9WOcgnsefTgj2FVrtd9pM0eFcKDkudu4nkdvyqo6mM1bQwrlv+JlJtA3DYwweuSR1HA6VT1Fp5bG4ESlpGYKA7cbS2TyPQKTWhePZobeBwVlmlUIsY4IGAR78vnP+zTdTs5o9trBBJmQsJFKjoa64tKxzvZnGB0luBBaqN6Nt2FCXCjI4PcfdHPp70/TIpftL2VpZvJcliF5XzCGCq2Byex7Y561oXtjqFsrzXmbZjHsVgu3cBtXqO4UA+5Hq1ZVppdjfSSX7brqHc8beaFfchOdqkAYw2fmHzH1xgV3qWh5cou5jf8ACfaRb/6PL4J1p3i+RmNi3JHBP+tH8hRXWR6VbxxrHFHEqKAqqYVOAOgyRmir549hcrPt3x3+yf8AE+31fxLdeFvDEkGki0Y833nvPbRlJlQMkZeQmZpXMBiVMoQq5SN6zvFX7MXx51fwppPiBdV0u1n1caPb3VrZ2s8F7CWjSESyjyvOiVFRRJs3kbHYKFOV+8rnWI/7OF9p62k8T42lJ1YZYhUxxnIJVc9hjHSqNzrdiY/IhKuzxEm3jBYbVVfkw3yEtuXoVycDJ5x9Sqaa2PDqVGj8/vB37C/i7VdRSL/hIFt2kkle7vfs0hiXbMyIyyZHmZEROEUEbRvVOldIv7M3i74WzR6vaape+I7fQ0le+0j7VJZtfl9/7mCRc7mG2NiS5LFkXDEbT9m+FpI9R8OWLWumoum26Wy2qOxX5FjUFvKZQQ3XbuAyO1WLu0GoxSragQW0TgQXKSBPPkDLsADZyDhlOe6ntitqdOmtZI5J1KsmuVnzL4+0nxtfXdi2ieForq9vdNWWSKYNEkc+xUaViwRUlkfzQjT7YXEWwLgLvb4Uj8ew6TJY3l4+nwNaWsEcgvJllvrpUMkzGCTYwJZc/vQgCuu0NsJX6d1TwXpd/wDY59RjWWCwkguodjFBHPBPvhbK4PysSDjgrvByCctTwdpWgWZeGS9tkizPLDHcHYqrI0hXGdzcjcyg87scgsrZThTlqjaNWbPnzS7vw9rLrqHhvUpEimMVs10bMXDxPK/mNtB5ErPIkYMqq5kSXbmUuD1em/DrUbvQBreg21pe6aS11b26nyHb97lGVQUJXymJYynJOWCqGFd7feDrGG2W+gs7SO21lbc3cctmLq2dzO0iEQlmLFmuShbOBlSDgAHttJsXs5Y4ZZ02vH5TqY1OBvw6g/IGy2QcKTuccDJFZSowsdMak7HxxqnjHwlpBuZ1e7tbu1NxaXE88aJLDIqytCqq5L5cjtksYpRGR5R28rq3jH4r6Emq67oMOi6jaaal7e3FjfaQtteQQ27KBmF/LadGjAO3fu2zIfkwUH1tq/wu8Barrl/LdaDB5kt/BMZrq1Qbp2JkV42GcyeY6rtYEjBwo3Fhz8PwX8MeHNWj1aNtRurHTw80jOsk9xKZrttqydPMRNzo75ZjEMHy0ctKo0YIr2j6nxy/7RvjzTZE1q78OwnQFukVbi309vKulluJio+0JLHmLEUqp8wJ+yrxxKV6nxz+17oPjHw3f+HdC8Ky6NrDRsl1qCIyPDbRzhkhzbv5wZlQxNhlUNKQrAMK+jdBtfhh4Q8BRL4T8WXeleEYLpmeO5hWR4Wub0eYiKYhOfNeRkwjOpKeWFkRGWsy6/Zr0n4YalceI/hx4e0QBdOmg1fTpZbyeaS3lQCaJD54BicRKyK4Z1kcfNhY9tOMYq1hc58y+FtX1XSLbTvDus/2UF1uCW6t7y91lTExeRF8nAM0iKd6keYys/O4YBFdTB8TfDVnZxarK9zNe6kjXVrHFDKFxgspRyqrIS0caZjOTIGC7AS1fZdz8Lvh9rOgfZNT8IadqKm4uYFnvIUNzbhZJdxiuFPmRkKXZXUlicsfmZmPgHxs+B/hCez1a08T+NdTs9PNxf3NvI4O2E7ZbklIYd/nFRv3KBEyokYwisRNxvBxm7m8cY4qx5xpXxj8IbbabS4NblE9+dPgg1WSGGRJEg3RRBFmcQK+9FWRdxDyPJlMjHpkc93qK3t1aajGGlumuZYpDIipLKgDhWYqQ23acsu7DDB27a8o8P8AwK+Mvgy11fUvAdrZTSaekV7p0M8Uvl6vDJEzmFoWXzRIm5j5SuzLtdWA+U1BH8ZvGWua9daDceDLXVdfW0uJLxbfT/sVta3QLhYZBPvYytGlswJfP75lJHlgVzywk07I6I4im1dn0t4aXTdR0VLC7t7XEjorQvIN6uGyijbglWkLcA99vAbiO/8Ah/dXdk7rI0dzOFST9x5EZyxEcY2gE52sA5ycc4Y7Vrz3wf4T+Omu2ml3tp4BS0g1ob4by9mSL7AGti6y+WTvIKyJkgEeajj92jYPsOq/CbQvGHg5NL1a9129fVtLiMlza6tcoFkkVBLKrK5A6l8MxXBAZWViDvRoXVpmFarZ3gfO/wC0Xba/4C+GOtXOpazoqLPDNDDG1wjzuZXAES8Ha5jeRQM4zDnoSK+AvD+lal4h1qPRLWeRxcEszf3UyenHHfjsc19vfHj4U/E6LTtJ8J+INOt7iOO2vxdX0duzxNH5sENvO8mX2SbRcoA+WXzlDt8pc/NHwuaKLxmsxXaJII5FZ1O7YegwRwScsevLH5j1rhxSeGjKUD0cGvrE4xkWdN+BOtapeJb22lTyJtVt235SSSM/pXtPhL9l9bS3dL6x3tnnjqcCvffAlnCtikggG8IN3AODj/DFej6RBCBGJSmCM4KjNfMPFVau7aPrY4OjQ2ij41+I3wB16z0Ax+G9DEyy7vPRUJck4CEEdBmvNoP2dPH4jhuG8OTRl7jygCufkz1P+e1fpZqFrFPa+XHMIlLRsWUAAbXDY/EKR+NUH1nQob5NMNxD9rLgMgTIUkk4z0yM4rSnWlBWbFLC0ar5nE+K4f2d/EiNpUFtpQcTACU4OFUOMj8t351gfEH9lnxg+gtc6dZEyzEEqMDZtAHf/eb9PQV9+6ebSxUxzOmVZivTgc/15/Cub8S6vY6nZRuYxGZUDhem0HnH5imqs6a5k2N0YT93l0Pzh0z9mnx9vSR7dreONJFcvLknsOPTimeLfgjFAjypPGrCEAjaeZFH6dT0r7O8Rahb20U8h2h3zyAP896+f/GFyLi2nmWVwFDAnJP1rN46rzrVlRwFFQeiPkfxBoT6LLJHJIJZgoAXBAzwvb8K9n/4JxrY3X7Q6LczzpPb6BfTWgjGd8heBSCMEgbXb+HBx1ryXxnc3VzLebpTsWQbTjnggjn6gflXp/7B13b2vxl1a7Sby3tvD04SYJuMYM9urYU5H3e/tX01Kd6Kkz43FU+XENLufoN4ttZ7W11G70jU5ri5uLiSFYZfmje3DSFo5s53hy0jBSPvSjIxgVw2q32kxPe+beXX2ieacTSRy5cRxh8ks3JODFtOediAYYlq7bUPHr/Yzf32mmIOqvL5qIiR72XCRqSuXVRyeeCO4rxzVvEd3d2NwyLaWEGpm2iVJoWmM7R/vR8hCgIN6r8udx3A7uFPDOaepvTizxj4qX2oTX1ql9brNdXsj22NiRq9pHIcKQoy5LpH8z54YYwDiuDuIUW6d4pN0UTmNyrbw2Ojbm6kgjn8O1d18Q9XudQ1qHUoJVh8ptnMHlvKXCkkg/7SjkEjgcmsKGKN7HYix+aLoeYHPVdvIA6AcZ4x1NcknqdGxkw2i3EMhdCzKcpheWPrkEUyWxdJwk0DPGiK8rshCqxJ+Xrzwo6jvV22IuL4WtpHEUnIw+PvAjA+mCD0rp9K8MvMrXF1CrnbuZMcfLuweO+VrGdRo0jC5jWemGfT43tpTJhyvBUAnOAQABjPA/GtvS9BNtKRIjSxqgMmXAJB78fQVuxaWXhm06GFERuAzISUwexPTjt+Na0Om20arIIs7lPPHJAFc7qM3VMwbi2WOPMW+OHOE9doAwKpW8F2EYoSyvj5QBliDknPXpmuk1SFgjSKFSNThgcHnArHt7aWctHJKYgEIDqehb5Qf/Hj+VJu5cVZlDU4LyCKOKwlcMUJkjccgD7w9CPrVF4TAsUzxFiXUxoQpCMQSG29MYTtyCo5BwDtGaS6ktraNlmkZ2ijJkxgMAST3OSNv41fHhu6lu9155MKNDvgSHcWbjhsnpgfePYdOpzLZbOS097aW3L3ETSwpIkgIBVQAEZMg8gjA49sEDoHPLJLOYGKW5ZVlVkhUB0wyLnI5Iy36VsavoE1mIlt3e5+0XKx+RCNzMmxmYhz9BweQNtRQ6bealBJsP8ApMDMsEMq7cKRkZbpgZAHuDTJZX/s+6tU3XtyTbxhWWUKNrDptZsfLkYHQ9OMdaz/ALKkt3sdJbIkKYX6h+WIBXkg/Un+lbs2o3FhdA2qItu6BUtnkyScgeYdwOOSw4wDhQadHoT29vI0nlMbdzs+zuSBliWKEcY+YDnru9ah7msGZP8AZOqGMNcRKNw+V4xulIIHb0BI6/3j7VkzaffWF15sySTmNCsqQ5VwynK7ewZSXHFdfZahIyxm1YjEbhmVG+V+ncdQQRgnnAPpUNzaWpV0eeWSIqGJGQ5IHOCrHn73U96k1ZyUGmhw0caXMIJLGK4xlgeQDjoeevU96jsL59H1WJVjNpcTSeWPLjZmIYbSBwUwQSMsO+egNbcy3VlbxXlzIJy6tHtdcYRVAUnGDu3dz7Vm3ViNWQzIWYK6kncV9wp9QRuHpg/WnHcUnYsPLZ31ytvMs0EjvIsk8rcFjyrYwAMknoP1zRN5d1EBIZDsIiYBd21+ecN1XA7HPzfSs3TtIT7RMlzJIbRS75UAtEwAAz7byxz1PNPsbrUUtTZXmmi4hZSYy77lEjc4UNkE42+h961MJaozpLOG41qBbeVSkcp3Oo4+ZDkc9ODj8Ks237y8lEjsxVQgJ9gKsahCIPssTRtHKqMrRMcMGBJz6j73TJplnEBdbUJBJyc/7oraOxjZEWt6VFrdp9ilKiQxsscu1d0bHABBPocN9QD1ArkLaCRZZFQt5KtujRgBsOACBjtkHA6DPHFehTRAxASxl1wxbA5b5TkA8YOPU4zjoMkeYabrtvqrXMdoNksXm71J5BDD8xz1/PnNdVJt3ucVVJS0LpjGTkH8zRVVy+9sSdz/AAGindl8q7H7I2Nxfau8d/oGo2sGlERv5MUkJVGLszLkqMSBtgCb2TnK56nov+EUitLNvsd/cTSGa2ETSvKyDnadmxgVQiRwcHJ+YZ2jaOEfwN4p8PWdrFpd1ata6HerdSJY7IpLqM20sRE21Ejz5zeZkN8i84UBTWld3mu+KfC114e8O61Lo+oaSbSWHUFtPM8xUeTZGjyOCzLJAYnaVQeuUG/n7Ryvax8lJa6mU+sX1l4z03QINL8SapZac0SSXa3bQlp2XyzK1uis0kYKbi7YQO7HIyAe/wBJ1O5u4TbppMU9rArgSNLHGTKsuGVlZsqSCzbjztUngkAeP3Px60nUPirdaJoHhBvENxA8cdlqWmwW9ztsWtA2UnGJIsyyqCjbshWKlg2E6fSPGOpnWNdtNf0280C6srdEOpyArEUbADCORnEh+R/ndVwDAu0gxl7eqZKXLJHpz3UT2TNfhNyysohWdHJiM22J8E5GQqgL6uQeSSOR8Vt4x1ezjm8PW1nKk2nSmW0eWLzZzJBhFkBUndueQqVwCFYHIYit99K8QajBam2vpYJw6rcSOFDMsYlUAsVIzubecLknJIAO0eZ2mir47+KWv6dqPiqfUNG8KXMdivh1plintXFskiXSTLJ57MwKAEuhP7zcPlAblvy7HbCiq22hieL9X1fTLPRNC8PajaaNr1/PZ6JFfWuYbZGlmkjt2S3lXdMUhgdgQVQSR4XzPMdRtw6LqPhMWE8vxK1Ofxfe+ZNHHqV3K0GoXIijtgDCkRKwCW4VjGg3JlfmAjBHn3xl8E/Dvwk+jXFi3ibTtennsta1tbfW5buS3soo5EkkdJJCj7CJPn28FnOCPlrkfA/hLV/jBqITwrBdWGn+HbiH+yVvUIktYkuLia2Msk/mP8v2kgwAbZUgXLrswZ9s5O1j2IZWvYqu3ZefX0PrXwVrt34ntJLK9uoLTVtPl8nVLIoAwdUKngMxEbMQ6vkq3PHUVvadocFhHbW6zyXDR3FxOryhSwErMSDt4OdxzxzxnJGa80uNY0/wl8UWj0VxdtaeFQl5p9jYi5nl+ySTMEGH3oxLbUVgqkkAFsYHeW3jKzkv4VijmME7pHL/AKGyzRzSnMayKSGRtvBTYSAQxIUcv3jyqypp88dmc/44+GZ1vxH4f8QW0qI2jAxXIVDNcXUAKukZ8wmN8SRq43gtuUFWVhmua17R/iJP4gu73wF8T7bT0nv4bbU/t1j51xZWsSExw24B2BXkeclpFJ3Mq5KRgDsz430yy0XWta8VSnTP7Ha9a7LoCgto7idI5CjE/I0casWyAxwo+bKiXTtO8L6lcr4l02NEl8Q2TQXDmB42uEVR5Yk3qrxlUjYCMlSAXzhhk3zdGY8nYqeGNZv9X0vSNY1LQlsr7UnS5kgFwtytsSn3VYAA5iCv8u7JkY7SORqTCz1DULaWCeCO4t55Y51Ll5IpWiUoMkDbJseMnI6OvJyN13w/otpovh+z0D+1Y7pdOtUVZ5DEr+Vt2phEQIqY4AAIAAGSRmrS25W2gSJVmZTF96XzMFTw289TgD8KXOL2ZxVz488G6Rr9t8OWuYbG5u4RJ9i2CPMJmMbMh3qy/O4w+NpYMANxYLxPjsS67cjw1B4Wa/fTLW2uIdRk33Eccf3o5NnL3wzkuufmZAcjP7vvb+78Lz+O4dBfwzHPrF7YyJdzTiPzU0xiVwjycNEZVVTEpGC5ODuzWD8LtHufhv8ACyz0fVLq9uJdOlY3Vxq18Ll4Iy4ky0sgVRFErhNoGE8zBdMPINIz5V6kuB03hDxBqMkjeC9eguLzW9GtrN76+htngt7lpmlAMZJ+ba8ThjgdCwVeBXX6PcWOqpDq9nMpjmU7EAxgrlSufYgg/T2GMGw1Vo11eWMB4LWWRYZzKzxbChfBaVgrMrBxwwjAYICp3BdDwedZfQ44dRNsJYnlTMaIhKq5Cs3lnbvYAOxATlj8idKwnc3ghni7wXonja2sLXX7LK6VqNrrFnIrbWhubeTcCp7AqSh9VkcV+SWseAofh7+0VqHgvT4ZI7PS9Zv7aEeb5jmKNiYA3r+5VOuTz9K/YCMTwSRNcTXMonUxqqfNGMZbnvk4I/Gvzl/ab0FND/bZ82Oa2lj1iwi1RTC4LKRaSWzI4HR98O498MPWuDG/wWeplv8AHR6j4M1FYxHaRMSZMgqo6c45967q20zVmlDBm2DgCvIvCfjDTdB/0h1+1SAZIQKCOec5Of0rsZv2oPhtoiONYuRbFFxjLMQf++RXx0ablqfZuahudxdnV7SEsqMR8oyckDJx/XP4Vhw+Gtam1VJlMcdu08t0wAcyFmXd19Nx/p04rJsv2j/AfiizkttL1FGaWMsrOSuD2OOD6+1dNZfFDSZtJTVbSdTuAwN+cnv9PuniiXLF2bOmlVbhdGlYaLqVwplLkKXcc9cqzKf61W1bwzO/zTyIx7Y4x+Vea+Iv2kNP0CxuZFuYR+9lkVMgkbmLEfma8Mv/ANt3W9VvjZaToUtwd21TEDk8/StKa507HJVqcr16ns/xE0C7giMdvKAShZcr1PPFfPGqysoksrmPa7MySAjqa6G++InxB8SwC51O0ewb78SeYuGU9M5OQc56VyWrPrV25fUjCxiGd6Nj+nNYum4yuzanO8eU8Q+JWgw2ZMtp8nm53R5J3EHrz/niuo/YmtLiP456nBBat9in8P3Ed2yqSREZYchSf4sgEc5+U9s1S+JqRyafb3scq/u5vJc5zywOCeOgIBPtmut8AfDx7XwnHc6TBH/wkV40V20zRhjHDsDRx85GSd6kY6j1r2IYvkwyTPArYB18Q2j6t8W3f9p+GLhXkWMx3JtCy3EroDtPzxNwzK4G8ZJGCOa82a2ttEvx4k1JYl+yxsqR52MS4Vyp2kE9+vrithNZubf4c6NZ3KovkzCMMrEEhYzEOP4FMbkgLgA5x0rhr63m17V3vbiGJ5ra4+y4mXLCMZGWHQnk8nnGKxcm9jndJwfKclrNvbSWl1fXqt9tvJXkDuWJV2OWPJOc/wD6sViQafcXXnsgA+ziKQFjgfeC4+vzGuztPCupan4qkstRaP7FLISsqsF2jDHgY9VP51bk8J2ktrPc232mJiofyxhvN2jeO3HcVm52ZXIcNDYJbzWt4Gd2UBWZYwFVs4bpxyAD0712E99MJbWGxkxbySjzXVwcjGNvT/OazbXQfMllaRHHloQqjoNqgD/H8a3/AA/ayXe2E2qyFdgBcnK45z+tYTdzWCsaunLNPtLSkLcztIVGQMDjHP4VptBF9oFubiKBpsINwGPRvpkitE6bGRk42pnawYDBwM8fgKpT2SLpkt1JudkbczMB0BJ4z7ntWcdTRnP6wWkdbSEELna2UyDjd0P4CsqysXuZWkMjb2AUBRjb8pw2Oh5Jq9eTzTW63H2YSMmwBmAIGcg7sfdBOeaq6ZLdQTktFFAtsBL5Q+8DuCAbh1+9n05yeAauWiCO5Z0zQTbzi9JkjRY2mkmTPzgqSOOx3qx4H4Yzt6mLR7+dLq3vLkzpehvLKygOwYjaVzyBk8qpAIx1GCed/wCEkuLCeGSF4ykyTJLE6cGLGRtUg5IyxxkEqrc5Ax1ml3yaj+72xLdxRo4kuIhGVYsp81FLblXIxt6nbk5BrK5tZGMNDikFw0KtBFKIpdkbN8yspXzFyflz5TKe/wCGKoXNubaWO5iQ2txchbmaKWTzFCqhLHH3RhhH8uP4zXd3ot5TIweGUrCsRFq5/eHcUI2jeV+UZ5Hqf7xGHfwWt1dSB0XEUYbeQB5ZCk5bZgHAdz05wvUBTVIza1OXgtrcvdQS3LoyLxiFWdMjIKZ+8M4ODkArUgu7p9OWFlHnQ3BdUdVjR3/utgcxjjH0b0FXvscY3SqLc3CfN5z5O6MfMVTPU7gfw9qVbS2hjjmMcoUW4AaQ7FPGQcDjPOM1L3C9jH1HSpY0e+lkt7OTcJCjB2lLDGVyOAcA/ez1+lQyWOv3RtnbxCwspnijeGaGIOhbcrAEJuIOQQQcjBrprR/LSWG1mkunlXc0chEgcsAMlmbceAexqre2TSqsMschZZPMSFSyhH5OFHB6N24JIpGiehzGrafexTMzIrQRIFKSYWQKW3ct9116+/WsWTS5Lu2kW2M8WFERAK7WXG1wN3IyCOnTBIwSa7m9hSSFoI4I5EaJjJF5OxN+CMJnvkg5HUEVnQ6erRzRvApaYN0UllAGQSc9fmP6UDOdW22xPJfwqLqVGhl+VlUAfKrfKQDkKePx6nNUZrG4t7WVZRtyzOMdCvBVfp/jXZCzeUx3clg2Ytq/vUDJIoXA4z15799vqawdchNpbyRSW0KbojgRkqofbjHXnkAZHY+1aRM5nOavPBEsFzPcDbGpZiVAVC20Yz7AMf8AgVQRARzmQts3cIwOenB6/SqPjEXl9p8OlWkqxtdpDENqr9z5Hlf5gefKEh//AFVpYdv9XbrvUFQAT8jYwBz19fTmuuMW0ccm7ljzlkURM7IrBtrqcEkDofxwfqAe1ea6Do2kaFql7ZLMZ9SeV4VkKAAIdrbQBxgZPau6aadHd1jGxMPg845CkjHuc/hXmt09/LrzzafaeZPp1zI8uH2sU3bQfm45+b8/pW9OLsznqfEjsZNOneRnjICsSR8x6UU0+KbuI+UmjXSqnygbAcAe/eis7M1R+0PiaSR9Aa7lspL68t4ZPJtLcMq3E5QxBFDEhlLNwWyBnd61g63oaat4bbw/qt3An23TWt7xvInbE6gRh48uD8rBslySWWEZGY6h1rx9N4M0jUJNbljvbuzsRqWn2sSqtzJbizAw8agAyyXSTRqEwGMsKgEnaPBbf4keNPGHjZrTTdRmksYfDt2VsLuyjns7mzF/cx29xcm6vIWjneC0BcFJG2wMysN7LX2sE0fLySsek/Dn4bWPhb4lX/xGsZbq/a7s49JMENuI4rTTmliS3j8sDnyRap/GfleU4I2sfZoJdOnRLS4SCXyfJufLQKyKuSUkPJG3ehKnggjtivJNJurjwndxLb3BWO1Zp5LeytnlW4uXuZd7LFPIzkl51iaZCu1pCGHRLb07RNSgvPs/2OwaKO7CpAXG53gjUMWJ6FQW2gKSu58gnOaKjYQSe5q28qT+fDdzrEzQx+ZB5m0ojsQrcdN2G/L3ryf47ah4l8A+V8SPC2ljUoZbWTTdftoJtl3cwbwUki2cl4gbgKyqzJ5hypUsV1/GcNzpH/E0kuZ7648nRvtn2O2MlxPFa3jSyNGhKx+WS21j1VCTz8oOLq0Wpa68UuheLdb06I3zW8MVrNbNa2izRRMDN1SZAVDBi4k2zkLnALZqm3qbwqRoyPKLH9nTxX4r8eRar4o8Raf4q8IpqXnXNtNdXTahFD5BaGAyqgk2RyTeZsaTIWOEYQyMle9x6PYeGLsPoemWkzxLa2dwY5kEy2wDtA5jPykiRlRlBj3LIx3EqqnmtA8JWqeI4viB4c1S40G18V2sN/dW1zetvuZ94iYfMHFuDG8WNrhjIIgVUptOzYeN9E8NrMfGj3WmXsF79ghN8m5xHJukjd2RQAn7p1DMTGTAQpYsq0RtGR2YmtWxijTi9FsuxyVj40+Hw8YXckoupNVjI0kSrbSxtGrFZJI5jkIpLz5XzAG3CVwM8Lt6P8TPDU1pGNQ1ixmgs4Z7K8FrKk0dzMu3ITygyuNjF8EAqGCkApKy8v4J+Ffw98byXPjvw/4ole41PWNYurh9H1B2tNVtXu5dhkhYmLMSzKgcoV5ZwH3Kw2fit+zOPiXoUFvY/EPW9EutNeW6002qxC3imlO9pJYUC+byem7kAZzk10e0hJWPLxFKrTqcs+htwfCf4Y3mm+JtT8MWen2N74sNxd3uqhWuZHeVxI0y7pM7lkAZfLKhWJZApYEw+IfhhpGri38Ifa5Z9Pu9I1XTr+Br5UkktbmGJXWCNVI3q8NsAWYLHHI69HQV5Sfg/wDGbw34STwnp/iGbWrPSILLTbe60nUzpyz6fAYZFcwuzLbXCybyzh/3kaohTO2RO6v/ABn4nOuXMmv+Dr+bS7LU9TRHa2ubN3t49OjKH5mbzXM0stuAuYydzxg7QankjumVdnVfA+PXNH8GWHgTxPp1vY6h4Z0y30xkRDJi3CuttHJIQqyusMYLsgCEscKn3R6NPdRWEEMMhhiCfdQkIh+YKrZ6BcsMgZILADtnhdI8aeGLyzjtNYv9NinFoHv9NvrqKW5s0mR2kjkUnAUbZFBG5HSMnL/KT5z8VY9Yt/Auh6b4bi1fxVbafqCanH9puYYptQS6Z0jtDE3lu48qeXEaoqtHDsBXqmLjdlcx7rcII4Ibh5QnmRhJPOcRyYwz5ymACvLcc4BweueX8T213JpTyPZxwXRmMIsjcgpqUXmbZ4niTAld7aFthYMVLsPlxmthUs7yWy0fUrCdHtYlmbe7TRxSRmM5aUnLNndgvnePNJJw4Hl1t8QvCDeFLvxhfXVn4k07QbvUX+36fZvLD9mkcJKRES8hG8ybmGVeOKRx8pTLiuZ+gPa5gXvjnQrPw34t8W6PpenaTDqupW2mHUDLFPFe2uyad5ZBFI9uSVnuZFbzPMMjYdThVb3bwiYdM0ZLJLeSG302GK3QTXJn3JHEB5gmkYySpxsEkxDNs3ZwwJ5fT/ASat4HsfD8V8I9OuLYy+S8a3HlpMzv5UasFCwjzBEilMeTGEYYJWr3gGUv4cuIdOWO8e0vLi0IEsySFmldmkd5x5hf58k5OcMQeac3F6jgzqNK1ldStZJEmh82GWS2uFjl4jdGIwTtVgTlT06ZxkYY/nN4v8OahrPiiLxLqAe41KDxNd20V1KqpP8AZmtppRHLt4yGROeTyOecV+gNzY/YrgWd6WOm28MmpC7ETL9nnjm8x2aVCOX3ncmAMRsMndgfM3xK8NSaJq+rWx09LeO6uYr+yjwNy+aWOARlTgfKWXIJDck5rwc251C8dj6DJPZubUtzwjxX4ut/Atra2kOkXOo71BkKwSzKuRn7sfLtkngso6ZNeZ+MdP8AEXirR5L20+Ec10bmIyI5t4rCYcnIYSJKhwOciTPOMcc/Tx+G095P9qtHSCZVUFgm5lO0HI6Edex7dKW88JfEa+C2dpa6XdQIPL8+5lkCKO+VQDH/AH1Xz1OfU+pdNSVrnyX4G+HWtxa9ZWUek3ekpdorRXM4Ywo46xtMqIoPttI5+8eg+uvAXw70e28Pi1vLm6EqkswiYOQ2O56HqT07ir9p4DfRoBJe6qL28YZKQIIreMeigMd3Q8tzWhb62mm2slrp9mSsQyWPVieDg9xxXJiZpzujqo0+WKSPnbxn8G9L1PWbpbXUZIFj8yQrKxLyYHAAzjJrjvDHwdSWzvBeabFoV+0qf2aXezulZP4jcSOCeecJHtI655r37X7xNRuGufswSSEkhgMEg9R71o+HPBXgzxfZCddPawvWyryWP7oH6xrhD9cZrbDVmtLEVsOpbny/4i+CGv6bBJd3nxOsWd3OzydOgh2L2VBhn9erd62/Bng/xRoVhu1DWrq9tyMRNNDuLD39K+qdI+Ceg2V0jixF9IeQ88Kkg+pGMZ469ab458HPp9kYpdPSMFSckdh0x6VVWq2r2MYU4w2Z8ZeP9Aguknt7pjGkqhvlj5DKSehz2P6mvQvAFnrVnb3c2pLHDEtpHqdm0UbO06R84JzgZKMMe/vWJ8QIFhhFzGQCrOvPTOCT+gArr/BsmrnR7XT4LC4lhubOKzi+TIdnHmN8x7bWCADncR61kpucEn3LdoXlbobnjCxubDTLC1lhCW81zJlVAPyu5+brn5Um4H+AxiabCkLNGFZ7i5OSRwFbAbJzkk4YH8cdq7/4geG7fSrPT7wlT9njitmjSMSBjGzI5B4xkjIyCeU5wQK5fT9PtntUZzEZBPuZlPJDHt6DGAPYCu2d46HgX5/eLUumFoidOKW0yxl1EiswLYG5vXI4OOnPSqr6cHtlW6aS2lukaZismQqljyvB4KKDj2967a2tIAEJcsGG5RuIII47dv51RSxjs4ooGRikLDaC2CFGeCep6DrWW47HEDQrGGwluLcSMcFRvY5UdD6Z6dTzU2k2duhhliiHK4B6ceprrdZsPssskMxD4RTvByGyoP8AXFZEen+VHB5bAxyL83Y9TUspJDjA/nbwqyeWM4CjOK5zXjJfqtpueNXfGB0VeOCfwrpbxJvs6izkMTEeWHyMg5zjnrxu/KsbVFu4ZIlMImhkKnPGJEJO1jjoT8tIDmdT0mNVkcXawqqNJtWYBCF5CuB1BJOAe9QNpyWrTESKcxoGDszGFZF6YAw3J6Z788Gugv7Gx1SSTzCsaskm2OMlVBOAjHGM49/SubsxLdrbv9oYmTK24ZQXXapZhvPJyUHU98U5bFwSN2GOa5e2trZzHZkO5f5C+CSZGYsdjYX5gCc/MwxgnPQ2rTabcrcraoFbKTALuMi7CC2TjlcRn5M9MeorN0yV4oAWLjkBVO0mTccBVI4TaAAc8H6k51bLT7R7iMWVtuLSJG2Zc7ACW+Yvk7dy89sE9gRWZpLQmeL/AEQ3d15kVzOMXSEFR93KoFHzEnJ5IH3hxwDWdcm61GXbdQsyTXpk8rLLkny1YHBBA/i29OTxya33vYYY4v8ARWM0IW6jbby/TgewyOOxBHrWeui6q7u2J/3UvmlSp3sCDyCMgfd+8x/iHGFpmJlvFAskVzIkVxDkGGFQQyybD29AM/itRIAthHBMVuoTH+73kAspwckdc4yfxrYjjt71vtaxqlx5KygBiQFwCzBCFYbVJ4JPvmo761iZZTMkUUs7ySrtA3R7QFAUY9845pksxGsLayRQWzY3m5kMakvkdMjHAAPqKq6hBbOYobO2tVmjwomjX5+gADcnkcHPHb0ro1sNLe6RXXdKilAyuFlIVVBUbiFHJ3YAqe50wSaYi28c19KU8xHDLn5v4QVBJIwO/ZuO9JlJs5NbaeC5l0iW6hnFvcDayBgyblUkD+8eBgccBuelJNpkcFv5bIHLJtLBSz4JIBxn742/MpzwH77cbFlo6W2oCa7MvnOcOiiQBgB1JJG4ZPBOePqab9jaG3cyBIINzYDoCw+XJZNvzA5BPXqPc5QXZzF3FPDat+8QSom+REiUCQZwCD0IyvH0Bqjq1lbv54u4kneSIvHHbqVeN22/IuflPG7jHG/joMb+pWcsTG9utPW2SSLbHGUYY/d9dm7AHGAMcbawLmO5ito4LedlEd3hNwzywPI3ZI4TvxWsCZHm+uR3V34h060hSJWtiZmZznJSMqMA8YZX246cn0FSyQzW97E0UkoicFgAjTSHK/KVUA8DJPpxyMVm+KtDvb/U2utO1j7J5ARVT7P5uAVATkMuQT1x6g4Y9N66+zwafY29g0F2s0apcyx27W2ohgw5ZpHdMZIIETIpBAYA5Vu6KVkcUpSvsR2yJcgKI5wAxB3jGwMTuyQACOCc+inuK4TVfBV/ea3f3Njft5t3JteJsKqbRwc/8BAx6/Wu707Ttf0SK5tPDsE2oXl1IEttL1DTfKW5TAZYS8bRhHyJBwyt8x3ZLBaxtQtbi7mFtrXh3VtIudQ3TXmkQQMx04KVOBJJIWIOV53u3ykNhg6jaEWk2ZSnd2OeNl4vnPnJqjxLJ8wQQZ2g84zjnFFQy6ZawyvFHqXiZ1RiqsLoAEDvjFFRzC97ufZv7THxnfR/jr4H+IukWj2ujeI/BGiXup2lzbs5Nm+o3F4GKpKhjuIXhWaN0cN5iEg4JD/PXin4+eKvH3xbh+Ksunm11VhbNY2pnkNrZ29uIyqW6s/zLJhd6E/Mskx5aT5foH49/s5+NfE2rPpnhHVpp9W8M22n+HbS1kuEhjFpa6ehiHl7nAkluPNKxo2z/SFZvmDY+V7Xw14otL3W/DV5Z61eyaNOV1SOyt5Q6zASLGGXeE37mcAMPl+ZvmO4D6yc7bHhcjPqLwJ+2de6k3gb4fX2i3luujam+q6ndi5gMl86Ga4MXkrG28FVBJV1ILhTkAtX0Z8Ivjh4o+IepQefZz3Ws2t3GLqzisJfLg092dTdJPmJQroEYK6k5ifYHfEZ+DPD3g3V/BWueDtU8PWVhqN/e20erWemzvMtrHAoEkssjR7BmI7YyEbarBFfYF2t7Q/xS1nxH4/8MeDb3RofD+pHVtP8u4luJ57R+Y5IYC8od2V2ihzGp2qY8Y3DjSlVpuPLLczlTmmmtj6r+KTnWvES6XqOrSafI66hYacqgvYvbvCi3E9yQNyAJFNFGFKjzCM9c1x2haZ4ssPF9/dCaC6uo0WOyjktpxZ/ZQ8KC2juGRxMyufJMj4uEEjBY2KLHXyL8adR+Idh8XPGDTz6jd6LH4qvbW0t5biWew3w38l0kUyOVSQpLdPJtYlMMuVAAz3vhH4nfEfStD8JatbeEtM0/wAOaXeeVYtaebDd3twyA/aG3xcW7tMH8tNi71RlGItxcasYpq450Zzakj628N+IvHGr6hfaONL07QZGs3Er2cBmjhvEjiWRIZ2/dytG0biQkYAWKMDzBKyu1Txvo1r4ambWNf0a5vLe52WU1rCtzsaSWSOKbyvvMX85lKbNvDFMgAH5vsPihrPj7xrY6Vq9lb2WlQLHejS9OuZngurpYld5byUuWlcfOphkOx2CFtzyMR7Z4fgt9QsWutV02z+13cIlnuJh5yG8eXcpIOJMYlkCyO2RnCR4LbsXXpvQ6IUpU9Tf8E+G4/h7bTW3gLR7W2uZNKhj1Gx3LcPaXjYa0gUo43bBcTh33O/liI/MeTW+In7Tvhv4R395puo+HNTv7CwubaxnntYY0gjupgzC2UyGMSbFR2LZRVRkGHYYMPjgxDTtFSys5JkbSobaCG1JuNkoLKFchQRtkdQNrDa2RlScVxPxK8CW/jjTrC/vbi08Qz6Vqlk4t5XMrCS6kt0QTO5GY9plUxBfmyw4OUqFKMnZFzTn7zZ63dfFLTdfVprKBrrR57G3ukS5ESNgF2kIilXhWUxRlXKkAkYDbsVPBnxo8K+OPEs3gmLwhrdrqYgtZL9ZrLdaBZIUDKX5Yqo3JuZVAIbnk1xXwg+Gsnw20FtNk0W61r7dAyXd9etulna4jH70OwlRm2fKAqkbSUYYUlptPm+Kfh7xKPHCSQ2WmX9kLi+0V0wjMxMge3lVCrHdNuk5OWYIqsThNk0jlcXc7Twq/wAK/iLqWj67bzWOq+IfDyR3Mf2aeItbRyxbCHaNgjAxuGKkn7n3TtIrup/DGi/aLnXEIjuYZXkimeMFLV+dzAfKpUO8jMMtku+fmPHiPwn8ES+GNW1bxBoGhWujXFwmzdZQI8nlySzP5JldNm5JMBUQDPzMcDaiewaxqd3HBdzxXQVltUntDKYXaZvMdlXK7tiZRMswKgZOF8t2KbbZSijhPH3jzxF4VW302417RNFitGSzknmS4le980rve1t4MO8ccfmqoR96tGuWxHIG+YfEHw08Z+C/jZ4d1LSfEY1zw/qt5aNf6po1wyXl0hEu8SOWLNEFQJLJGSuxY2cB1bP1rr+mR3ZlgvJ7a9t9SuHnjiFuI1WFyouInU8/vJGKlJM5/e7hnGOSsvCNhHpqXltaW1uLWCVbed5fmhtwuTEqHhIyYBtJzgbAR95gKoo6FRjdmf8ACT4g/EDTY08JeKvFEXi61tlmtotVnRo/Kuk+0N5F8DCkgZI4bbJkwXa4YhpjtFfQ1prmk3MwsrfUoZ5WJZgJQ7MSN4xjOTtI4AIxkA4UivmCLUj4U8SeILu41QvZ6skcrjYyy+ZHDFBIUyCiAxLBkkFiqBnO12QWNQAa10/UVh86exndIluRIuLkoyiQKAdy48xh0PzgAqCc8lXERi2jeFE+jY9Vku7K82vZz6hbSzwKsb5XzRllQZ+6QjIXOOOhzzXgfx2fUIrjQ5NYtUj1CGJEujFFIqsMOcqSChWMsoyJFLGQfKFQ5n8PeONU06R9atru71iFkWRoLeYMR8sgBACh1LCVnVScE55Zyd0Hj3W9c8TfBzUB4ga0bU4724d7bS4NsEMa3cXlSqMsdskamXcWY/v3AO04rlxM4VcO7nbhU6VeNi54SsdN1HSYBdS/PGgDRuTgnsx7EkY9frWpf6npenWjb5gojGBt449OK8T07x3PpdqySyBokOM5OOg4FclqHxPvPF2uJ4V0iGSUht11Ip+SCL1Y9cnkV8fGf2T7a1nzHqs0x8QasZLaY7FGVjLALt9enPfiux0DwbYXNst5cGMKGIGDgDIHUHmvNpdI0y78PPpFvNdQQyKVKpNLHMpxywcNkfga4/UL7x74Q0EaR4X1S4v4oxtSXVbjeYx/d3D52x1yxJ5rRU1J6oPb22On8cW2h6Vqs1k93BCqkhSAxDf/AKu4zk54rlfBvia68P6hqF1bRi5srZxEij78kvBbbwM4VlOOevrmvOtW+FV547P9u/E66uNXeKRJIbeOd4oRz6IVyRzycn3ro9L1SPw1bxJZ2aW1paEi3hABEZ6HryT7kmqVLkd0V7fm0kfQmi/FLT76332ZQScDDnDg4ydw7HmuT+JHj24v7fZIVJAIRP7y9xkfjXgGu6jqmqSTeIPCWqR2t9byKZoHQ7Jh8xbOeATwBj0rSS91jWfD8Oo6nFNb5iDbN2cHvkjpz29MVlUZPurVHAeMr43TXSxbXjG5oywwoweh/EnnrXtH7PvheXUNe03S9RneS6ghFzCOsJiC71KHPBEgXnr8oHTivGfEMe6wmmSGSWWVgqIoHznnI574GcV9seBPAPg3wJPDrOj2dxCUtvsyG5kMhRAVGU3ZGHILY7FiBgYFb4OkpyPPx2I9lFruYXx/8NRxy2usCCIQhpYWEqbZFOP4cfeG5wwJ5yp5wMDw7SIzFJdWqkfuLlkYg/d2gEHBzjr0zivoz4utaDw9catqd1IlrIGgEcqqHwzFEcBeSN8uMHjt1wR88wkwagUuPLIuASNi4yhJKE++0r0wD1713YmCvoeThpaWZ1mnurWS3MEpMxXfHnByckEfpV9W81JW8tTK4UFDg4YZ9fqaxbe+tLGzD3DRwKjbd7HC1pQur4dQpONyuOd3vXE1ZnStSpqMPlL9nlV2IGTkj8qpvGz24jUbdoGz/ZHpWtdst0waVFZ/fgn3qMwR4AhUspPzA8c1DKRlC0g2EOM+X1J55x/9eq6eVb2ojZlaNpFRVI/izkfh0rXmga3JULuEx+b2HrVOa2Enlxs4AyH37eD6fTpUM0SVjElsYHAhaGLc6+VIdxBVVLFhx6hgM9eKyrnSo5Yo7axby2B3xDZkZ3HH8wPxrqpbMyz4AVivO8DHzd/0xVQ2zLec/KvUAH170FGXGJ4FLzzxfMXdwIwFlzyQRjqc5A6D5sYra0hPD1m7S38Ud0GRXLrKwMZ3LwQPvR7Sw65KFx1Ipl7Z+XH54EZJIwG55U56e4LD86r21pJGYZtghRm3rEky8kjn5WB7r68YwMYrJvUo0iGuY/tl9YzWscTSQxCeQbSCvzYXkngsSSeWB7YpdNt7V4LmK5tI5UlsWQlYcb1jPAwTg9SN3U8+9ReTKUjst8u2VQbtDFlDnn7w4DfQZ5UdOKnjs7CCOaLFu6W25Y5LeXzAihcjdnkgsenXj3ouyWkP0uf7OIbBRFdW+4b5J4xJJGS33Buz/CCeePlx3OZZ5zb6pNpUcUyohaNGkkBxvchcEDtnPHr7VSt1SSWOSGyEc8Mro/l/LHLgk5A/AHL5HJA71c0lFd7YpfKsoclog2F3OVKggjcctzwf4eMCtE9DJrUoSaPcoyXst8k5PlCVmJKhkAVzkYAJAOfw9qLeC8/tGOR44ljt1fgKAN+Q28N2G3cNo4HPHNad3H9ngkhjuiY5z5DqctukkJ6A9B1Xnn5c06GSzgsZp5mkktpGIUPjbn/VNwPfd+lBLKFrbxXl1IrbpWVHJYIAUBAxy3BGRwBzWa9it1p1wZVjSKQKqEfu8AMSx6dSSf8A9Vbc6GDTbSykvvPlaDzGBgOcqAQVO5QOSe1QwL9nDTzB5DPHsjt3yQcqfnCqxBO7A59qoRyepacl3Czq3nw2qLbyvGqr6kAnb/d43defUVyslxJaIRDFC7gsIwYXdHDR4QswI3cuTxxzzXoOoaj5GqPp93FNbQyOEuCoYMuV8t9qklWZV5AOVzLn+HjldUuP7L+26bZ3KTrCvmxFVL7Ig427d+dnBXIGMHIqo7hLY8v1uF11Se0jEXlxNCiRheZAQA4GOAAg+hOM5Iqpax37WqQGEW1up3QQLLmZQw5EgPyHGSAMYAAxitTWbaWK+hleOOHYJEKxDb8pfkkDv8g/L3OdHTNKs7iBXVm+bgEAEsAMcZ71upGXLcxLr+17eF7fTdTvFSUlPKt72e2kGQMkPH0BGBjOOBxWFH4GvriaI6xdy3ZgkD2y3bvePCw6EPJ9TwOO/Wu+j0vbI0UbMyg/Lk5x7MOmfarkNvjKyRZGcH90CAPQen4VftWla5m6SvexzC+E/EG0Y1Z+n/PrD/hRXUnS7InITr/sH/Gilzj5D6w8JazcfEHxBrnjVIrdL2/jZJEjgUMkkUSiJzhjtBRY+Dygyw43A+dWPwc8NeRcLreuXeo3HmJfOt7PF5YuFO5Y5WUBiNz7HcclZHcEBgB2Xgd7rT/iC9naW1v52upJawMsvlKVUqVJAyisGz2B55f5gp9a+G/wrN94l1qbxjojCBZXePzbbZ5p8xixRwRlcMvPcls8jA+joOU4K7PJrKMZPQ8e+IPhnRk8Uz+LIbH7RNrtokEpnuVlVYlZViRCcHYThth5JnJ6ZrmtB8E3f/C0NF1nRtKtLtNOu11d9YZ4WuUnijnKxiNhncxMUoLMx2xOuEK76+iPFHwtS08Rw6fHHdJpUzxtbXUl28uyePkRqmR8yiNAGPJAPPDVX0LwLLNo15EhS7uZjMvnSpImVJeIruJIDjbJufGGbIGMCrVOcZXMXKKsmzx2fwDoY8RyaTqcFpLc6qsGpeJJbmHyRLfXY86TMQC7gI8FUKK6EkBcivQL/wCHvg3U/Dk/h+0soALeGGO2uphJCbi0Ro2UoAcjAEijJ3Dc44yRXK6vpHjS0RH8c6ZNNqWqlb5GmZRMH3KjOhHzk7U27WbIUDBAIA7241bUNS8KTwM8jXbIVimMxTdciRgI+eUBYKO/XAwBRFtOTZpUfNyqJ51pvw20NNKaHT5kC2FwHjkkUssRUbTIqkN8zMQpG3aQec816f8AD680jUJI9JjtJrtdSE0V1b7niFu5WSRSGiUuu4BTgHrIMJxkcrpviuG+s7u1vLGRreNysLi1Mq7kCn59zqB8zk/eJOAfSn+Gr20TUzcwR2sl5ZsPLiaImOVkIYeZhlOwkDgsVzgZIJFc0Gr3ZrONzWHhWOXXJjb6mWg3NfGMzOzQMY0MbZJO4MjjPG7LnKlQGaK6lkGn6xp2ixx6ZcyRyQ+dCpSZ325haDcoCBZSjAPht+wDBAYP0XV7cTvc6nqdtKhilJSZFjZBI+QNiEqAQ33QSoywGBxU+tN4ehee41KCCS3Eiq0kAdhvUMVQ4BySJGYZ7it1U6olRVj0HwP4qEWj6dBeTaWLKwggtJ51lUADyWMZBz5bKCQAucgMDtUAmmza/wCG7p2R7Ga6t/tSxlRkATwFZEQBxsKmP59yAqTnYTlWPml4Dfac2qwW9/BpokjurpcFfIhZCfMaFAGHyljuC7QcfMvOampeN9ShsrOax1SCJLGWOe4kMrSqGAAIRWDfIRIuM4YNsxwQTp9a5FqYyw/M73PStO8U+E9bCQJpMcV1b27JC02whScOC8iHzFbLMSyhfmkPzZbAq+KNS0+4srEamiQ29pcjzEZIw4ieNiTGfusS8WC0Y4IYBuw4GG/t4dW8wWaW4kmkaWWF9sksZBCbQ7LtXaOAGA3ISRhBXSWfh291u0eWIxRaasInY3NuLeM7FVmLKi87izEcEbZTzlflFiHUjdE+xUXqy94VmHiLUns7m6uYriKVWluWLNCJA44ZHxsLFyQqjywRnr0qTajYxXEkaC9WSAFzbS/KI2QbkYHoCCXOTz/FyFUVxV48N3f3L6PdPbwsptoUj2K7nIbc+TheXIIO0fKCAcGrtvcXUVzFJMiyJI26ZYUYCRm2bHUyMGUABFBccEjIPyleSWIkjdUIt6DPF95d67ZWI0OZUuIy8MMRjKxx7o5PMDIOCrYwVztLbFOQTmK1ll8J+Hbz/hI9UeKLSEuRPJcJkzRpvADOW3ZKrGWQ7htHXoBbkmlgs1gNuZZruJgqLGRFtZkDwkAsEKEE/Meqcepz/E1zFYeHHbUZp5Lg28UElxCGfD3FwLdfLjP3hvlII+7045Nczk5O7OmMVFWLehada6poX2jQBbIL6zaSK/DpFFIu2EQPwu1dsbJwpXaSwygID6+hafaxDVWvrhornWAY9QdYQiSfwxlcEgDy1VQSAxMajA6mlox22lvOYpopbdJ2+ywWxEar5ziMA7v7hBH8WVHOCc73hO01JbWS7kuIZVLE27Rqw3ydHYfLxlREccnGPu5ybi04uLFJ2kpLoeF6loK2Op3Wj3I8421w0TuRtyVPD7ewZdrAeje9ZQ8OapoerTX/AIb0m3ni1Nv9IPmCIoMYALbW44/Wu8+I1ld22rz+II44UsbqXyJvswHlo6j5SBubblMDGf4M8ZNY+garFNqEdvOq7cfISAQx7Z9cjBx7187WgqNZo+pw1X21FM5Oz+Js3h7xHa+EfFngjU7KS9cx296dUjls39F8wqGz7YPBHPYeq33hfxRJaAx/DhrqA26zSS2eqW3mJGzMA4DgAgbc8+tUde0DTtYtEguoElRBuMYGSjZ+8Pwx+VczZaV4S8KXUk1peGwlliZZAibTIrcHOPp+ldEHHqWlJq6sR6xF8RfKgi0fwHpui2l1NHFHc6/qkRch+VISF8YUFickHCnO3gnx34i3Hj3TBFY6Fqnha8u3nlidbeylbZtkVUfLSkMJBuYYHCFTznJ931LxpZahuN5ql3fQFd4t1cxxhgMBgigAHBxkduK47UNPtb6dzoOk/Y0wqtcyBgYV2kfuyed2GIz1xjngYc5LoVFa2ZwnhP4c3uo20E3ifV31S780yOWIjto267BHGQj7Q2MsC3qeK6XxZf2gtrbS7f8AdxQRCMqDwCCeB7dK6trmKzjW3jO2G2UmRn59z16ZJz+NeP6vqwvr671VmxG7lkXPAA4rlnZlNpJmXcaydO8U6PNFpp1H7DeRXv2JHANwsUiuV56ZAIz3zjB6V7j42/aD8OXXwztrL7NMuonZeJbxXs0K2c6Sp+6lDxoZgASzAKuF+8VGwt4N4CE2sfESI75FiSxuZjtOMgNEvJ64BkHHQ5NZ3jHwqNC8T3VhIjiw8lrvTYWk2QseX2A/xFPnBJPy5ByNxz6uW8lrPc+LzHMU8V7J9D1LxJ8UtW8QxeHNe1Ke3k/tzSJrLULSCECGK386Qxy8FjuYlvmAU5O3jjE2kXE+r+G0eVxc6nYQxy3MpkTzRGwLKGA+U8cdAx29t2R41dXhlezh1HWJ7uS5s4pzG6bzIBHsKqSP3wAGCxAGdwA43NreD7vWbTxHHeXgvLx7yJplgaBYfOX998wVvllBVpUwcckdeg9DE4e8LroZ0MRee56q8MGvaY2k3cqqhwDKDkKQeCD3zxz/ACrpbFWtYI7ZSEQRiNFJyVI+vqK5tns7h0msomjjLIzQjJCAgcZPPbPQdfxNz7WxgXMgDBjt4PPPTNeBLc92LurnTsY5/KYrtdtuM/3cmgMFJdxgRk5HqM1maZrEd1KsdwoVlAA2E4yO3P1rSWQJ5iv0yTg9qhlobuV0eROVY5A9Kp3tuqWnyEhgRIFyfmA6iroeFADGn3s5GacFe4s2DHj5h6HB60h3ZmwXE8qrO4CFRhsL39OfYioprNN6zkFQwzjPuP8AGtREjEIUuBjufpj+lQSQtM+7IPykHnjHXpWMnqaLYq3cU8c+YrdNhKtGM5yVZsEZ6nBYY9x7VS1a31ie0ERQxLFcsXI+Vj87c4HTqeK0UjtLue3E88u6Ml4T5gVYcHOMYznIzn8KtRXD3ReVLQXbSHbMplwdoJIYngk8H8xWbepqtiixsoHlSO3lWVW2tsmC4/dk7yCDnoP++adZW9qgIt3jWSYt96ROAI2yGBXvu424PFOdYpJJblbd8yFWIZwPlx9wkcgAFuR6mqt1JdC5idZIcyuquqrvlT5WUyKvGFywUMSed3HGaBNDxazW+IkG7JOI33EspX5cnqQGboc9PepZbWO1WZVgl+3QndDKJCoQlQCDzu4XGD78VZm1KEwCFRds8cpXe6tI27dnGVIPB7njiqcsmpJeySeZHcX0g5gkXBKBQBz2PB9uDnkii7IaQXr6g9odQ0q4FxOIyzu6EozKQSQWPzEjI7Yz1BwDow6RewWMskqQtEchRKpSMZLHpjIIIQ8tn1AyRURTy41xJHBM/wA29QXUkKCF2HPy5bOMd8HnNLFdJHe2cNxaTIt0fs8IgjWRYsj5XKEEALndg4ztAB6ito7GMtyvbxWMlzE82rNLKqFLZ45cRybxnpuI42sPx6VVFlfQX1zc+QskkcZR2A4MWfM8rIOG42DGM8Hnk1ozadatPbS3XnWpUrDG01rleMsIhgkD5ckEE+mc5pJI7YXh33b2oCRjy2hzImAWWV09wr8qR94D+EVRJi+IdJ0ptNt4BdOHR1jzHKW8tSh3naMbN21eTnHOMAnPLa5p9/cWU97ZQrHbtI0ImKlWKmRVY7icEF9jE4B+VvfPoAl00SLpEGrw323Lq7AldgGQflw24jAG4liEbknbji/FdpHZ3ktq8YuElhleSPZKGWRmD7v7pbPTnBXbxg8uO4Hm/i9NNe+lubHdtBiBZyxzIyhmU+/zc44z0qxoGmanqNjJdWun3Eq2r7ZI4kyUHB3YznBGQD0GDmpfFto18Y1sbqQtlAss5B8r5RjcisQQG3HjB554xTbS21aGaSC4v5vmiaMywQSW27gdGbqhy3ByDn6VsTflJrESyswVDE0TfMjpgucAFv6c+h7YrbFnDJCii38wyjBJIwv41ky3kt1dNNpel3KkxBX8t0w5DlCxLFQzfMDtGMBBgnOBowfbTaNA0a8SbSpxvIAHJAPrn0Pt3MsL82pX/sqQcfY0/wC+qK1RqHiFRtQaOFHA3afOTj3+eigR9T/8Kt+I3hzxBpvibS9KsJf7IAmjSKPcWm8x1yEUMUVgo3MAMLyCCSB9A2fiJM6aLjTL2KTUo3WUSAt9j2Rsx8xslsMRtGcH5RVCH4n+BpfDlzrthqqXMFqY0nYROjgu6ogKMqsQWdV4UAZIO3HGh4f8T2PjLw9Z65pty8UV3I6BZAhkIV2jwQrMMZ5HzN/Dk8kV9rCEYK0T5yUnJ3Y3xlFYf2bJc3Qmkj0+OWSSONWZpIvKKvg9mAfcCPm4YDhmqXSzY2um/a4tltbuI51RcJ5W5EG0AYUDI3ZyQSx6g5O2tm32WOO6fzNgXdzxkYOPcZHfqMZqhqdrA1l5DGOGNGRjM6LiJACQQzcZyoGc55FXzGUo3dz58+IvjbSfEfiGbSNO0Gef+ybxopbwzKs0nlvtljjEblHjKrGMtswSTnJAbDsbizk8P3l82qWjT2yRpa2RnAne6ed3lMBLgMMdlAAIbkEED17xd8HLLX2k1DTZ/Ju57z7S25/OU73MgPABB3kc5bHTpkV4vL4b+JWmfELTbWXSbVrCJpHk0e6sWH2sorCSUXWcNtjBOE7NjbnaaxlByb7GsZcqsdr4I+D6694EvbzXYJ9M1IyzmwHlhUSIMwjDqcjLMSCAT0z1Nee2a2qyS2FxcPL5ixiCOFPv5AV8A9GB2Z/A19EeDbS21T4Y2lrp0MscXlXSW8ylszFXdfNAAON5y2cLgt8oAC14NrJu/wC0L3ybCX7XFdSRSBXRZUlwyqVJ24yilsYJPkkjOCDlVoqyUTWnV1fNsSSaZeS6jF9i0m7uL9JGimEcRuXkGQp+U8BQRnPXg1Ve+sVI8iZpVubjZs8veplbCpGqAZ3btw7tkgLuJAG7+zH8O/jL4S+KXijVPHurRajpt/psOJLecNEl0JFTYgUMN0aq6OQcM2TyNpruvib8Lra3sfEGu6No91f6lfQyNpkFmT/olzsOGVQyblb95lcc5YLksAJWFcla4/bLocDoeuS6ClomqxzC1mju7OcykI88MitkliTkR7wV4P3eMZwOVup9D8JTwt4l1rS9L0q71C1AkvSBD5TSIjEFjt8wojEAAf6nPUA12/7P6a9401Owm8fQ31rrWiwPK8X2aW2DGN43WJ1uFE/mBZYmbOFYMOCCSeq+M2h2vjzxBFpt/aC40XQ4muZAIVm86Z45ipXk52MEGCBy5G4bwKpYSWzJdZHFa1H4f0TxDd+E9OuJntrPUZbVlLC1y0sUAK7yH3eVuAL8k+a64wOXX/jDUNa8Ff2XeXl1ds8huppJ7wvG8GxFQReYAQCJGY52BdwwrcAdF4W+Glz4x1weJfFskenanNpizJaQO2+R2QbmlGeRko/OSWJxtwVG9e/A3TvD1nZmz1O6nttPEcSRySLHIF+7ndtIzjbg43BUAOS25cZ0aibjEtTg1qeUNottBeva+Sk8uELlDveIcoQGYcZVs8jcckgEHA3ltjaQz6kCnlugZ7aUmJCOiFpN+M7iowBzg56kCfVPB2r6Un2ePTkZGmPnxSXQjcwneu9FTLDcQpORgZ5LbWYxQxtZiG4jm+3iXFy0kU+5CY0PByeQcf6s7SME8Y5wnCcNzRTT0RaE2mCYpCiy6dAyyEs0ErsBIyZfAJKYVMbuOmMAGuU8XaVrtzH4dstNEAtLrVrQXcp2hEto3lmUAxj55Fe2g2hPvMBkFScbhsY78mVlsrdmk2uQmRGU3b2DNkgnDMGB78YB2irLBd6REr6laxwnUJTqekWi3WZisDW4adSc7WUsQc/wquOgrLc1jKyNq0ubIabcXv8AZZkSxuf3kEQSJpIjwrqMKxDHaoKvnLfKH2jdWs52tGe8jmkuyluEtCjGOMRhnXzHjZSCd0e7Jc4BAyMYrN0WPXNQtZrvWY9PgltL+UhXuGkW8sN4JYZYBcmRyVx0jbs2Kls7z7Xb2j/aIgPIKuUmTzZVZdrh1Ddd24fUVHNZkzmoq8mrFS+tpNbS+0zWJ5pkuWVgkbAmVgxUvuLEsdqoOuRgHGM587vdGvvDt0sNwwkhZme1u4h8jgZ455Bx2PIC16JqGqW+npAtyHubqWXyrVMbZF8whAAFYjA5ye4Y54ryr9p7xQfCln4YiaZ4YY9TS7uCCADC37tw/f8A1Ushz6jPUV5uNUJ+91M6GfU6NWOHpO9zu7C9j1WwhubN9soGSAeRzjB/LP41dWK2uVePUNMieccFjGCSK8wj8S6n4SuWvEiFxZTvyAuCpwP5Yro4/jp4esVDX5jt7hx1mUYc49yMVyU5wep9fFLlR2VrpEDov2exjjIG3hAuR+FUvFNlexFIZ9jpJGMEDITqP6Vw6ftF2txeRww3VgFXJdn2bQPYqa4D4g/tMWieZZ2l6k0j5IEKZJ6jjHGOK2lJW0By5NSX4h+JhpNhLo8U4LyyeUdvLMPx7e9eUX2si8xpmnkZQhZG67R6fnXO3mq6/wCMtSa7uQ9vFn5ST8xHX8OtdV4e0OOzj+0y/u4YezDJZj/GxPOBj9a55O7Ob2kpzbekUd38F9FQaxrF08X/AB6WcVu7gZAeRySuT6BEJ/3hXVeJ/DWneIrVbDVInkihmW6g2PsKOBgMCcrnHYgjgHrUvwi0ySw+Hceq3ETpPr08uosPWOQKI/zjSNvYk11i6e09nFIqje2UymAQOcg+oyR1reDcNYn4zneZNY+o4PZnz94t+HGtWcFxf6BcS3isGeSNI1+0nJGdm3GSf4mzg9hnJONE+ry3Nu2t28kF5pVuz2s1s0zGzT5hgKQSrHGCMqSSME5G36N03S4LhJJLeIGFmZQDyMZ//VTdV8M6TfJ5V9p0U/DA7wWJDcHk+uMfTjpXpUcdKMeWewYPiJxly1Oh4n4S8cjQ9PtLHxLbancQQ6JLcW8thb4kuo43YZQECNSg5LFm3blyAcgd7DLHe2Q1TTrg3FlPFHNDLzhlZFOVyBkZJ59c81l6j8ANNlvjfaLd3VtujfMBxIZMDhVb76k8bju5AHcV0nhfwtcwaclhrIgtdUs0jhbyo1jguYwWJYBAMMFIX5uflHzYwBnXVOquaB9vlmd0K1oue5lw3UsG50Q9flOeldRpV39uhVJDukC85OMisSfTxJY2upxnbBdwxzKo6oWUNg9RxnHBP1pbBpo5QfM3KrcHp/KvPe59NGcWrrU6dEEJA2/ePH+zUgAAYK+0Afeqo16ZApBRezb+hFPRxETuYMp6elIrckaWZsPCFGBg5XOfes64kmhnHnFSZfqgC9uenXPGK0EnVd20MVx91Tj8cnik+2W6x75Zf3yj5Vf5Rt9Nw5PeoaVzRbFAjzGQzgLnByTtVhzzkf8A1ulQ7pJ4FhupAHdtgdW6jPTPpwKbeyKf3scURBwSqnj/AOv9aoTu4ULHvTPzbMjH1yQT1zWbjqaI1ba5jt4FZbmEvEXSVW24YHIxnGe5xSLHcXUTRafYRzNA/wAiTsC6EB5A2T90gjoOOlYNitxp7hYypDHLF3+XJ/2jxn2xW3JfWtu0TarZ3GoxN1EarvGeDuOM7MfxZ9RjioasBfQ71gcapDJcXSL5gUFWWQDOwtnnAxyePxzUWySS4d3jaJmJiZ1RWKEjBGRgEcKenpU2n3Vkl5Pu08vaThPJQJ5Kx7yRnftbcAQeTtXt2qeLT50ujG6OBLE5jiJjkEgzhwCqKoGFXHUj+9zgMllcrItvBFK4jK25ysmQ7uhO7DDlsnacZBznnmraySxWJOpzeabXZsCwbE34TB3DBDgbx1J5BzVO9hmSSFNMt5Y1gYEQNtWTaxJxnoysVI+bJzj1qheahf3BNtII40iIkEJ5GS+7oeOCxA9gKd2Yvc2J7y3s7aOGKwfZLabLm4dhtabaqIwXkEja/PU7jmqD6ZFNb3E+qRxSOjeapF0QzLlvlx1wAoPBxzisuSOVLPzEKxbC4jDAFQd+O/satTaibOwWyt41mLlo3LqCAemCx5AweMHrmtFsWoXRU0z/AIlluY4/IKSxxRmWQNFINuDlDnltxIB7HB6A1jeJYVvpJL1bh5Zug8wZaNey5POPT0BA7VK95Ck2JE/eZJMbnpncMbe3LDp247moDK11PJChJVxuZmB4buMnk+ufek5WY+VI5s6TJPblXABKsA+SCMjj5h82fTn61Tj+FOm69LHLq1nf6pfR2/mz3d7qM0slqATtV0VwhHGQFAHPIzmups9Ov7iYoxSGLeI8KSSR1zz65x+Fdl4d0QeYou4hHDt3xWpIxLgkFmIyAD8o6Z6nNUqhjUSOB0/4YQabEINPtrqNNjT4+1sAr4+Zl35MTMGwQpHAHtWymlR6UrJJ5MMKRmRuQzoCnBCMMEbiOe5B967a/vb+SGNkt/MgCbi87COPDDegznc5CkLwAeBzXL3un6ja3Mdze3EZkCNbyIWZ41UNu2gOMgZwcHPXrzir50ZrRGZHf3JjUiGNgQOTbqM/rRUJW2JJ+zQ/hGKKOdAfW+g2fiTRbW5vPEVp5tje2qw6rp00j+ZCxij8psFV2bZAG3bt7EyBEHlYrtfAH9paXb6hpltp1xLaaVJNC26CKGSUKgZF+bazTbEi/eSSJuSQNyAJBynhjSvEFxcppmqeJ9Tnv9Ovrh5rgokqyboWuInhjJZXw32V+VGXdDsjIVR2El14h0yzv57/AE2fUGCWt3cx217NG6ZiQB0AJXaJIGVkWTOI2did+K+/9nbQ+V5m9TutM1m7vNJsri40m4Wa6fy5oGwrRNkiQ88lQ2cdOMcVoXqyG0MdvAsjsyRsJCVBiLgP78KGNc3YQ2+m3iaZaaa4tpLcvDcLbxw2+4llkLzQjaHI2Y+VfujGeambxdaWkdtBFdwGYqB5Es3mTyKpZNwRNzvuaMqCAep6kFVza1NFsak9zDLdmCGaWS6gVJwUUZMTuQ20kYP3cccgD3q1NplnewmCeMssqyRFo2ZDsfltpByM8Zx3FZMGoX0eu2umRaDcGwW0EgvZduQ3K7VXIbdhFJwvSRehDAOk1650+P8A4mM8MaR3ASae4HlKIjHgMC5UZMhRTg45OKQy7ZaLp2h2sOl6RZQWlpbwlEijixtXjGMEYUAHjvniuZtvA+mLr8uoXkDLK1ymp70g8tTIoKqG+Ty2IO9gS+8b+gwDXTTray6bK0Uiuk0S/NG5dmB/uldx7kDGSDkjNcf/AMJT4wXXLp5tMt10OwEruVt3+0u/SOGOR2VDJ0Y4G0hk2NKS1BLOs07TbHQ7KWOy/wBGtypkCkj9zGqKnynHAVVGAc9ep7Zus3Ph+40vULlryI+XbKZLiNMyRxj5o1V1AIO4FguG+Y9DkA6unX8upaZFf/ZLi1aZVkdLmDEsQKK210ByTj5WHXOenFee6vrGlnU9Kv7C4tZtclEaqjahLZrJGytIgMYcq6F1KKZPusr4DDcpcYtsG0kdV4Xl0TX5YvEujJp5R4CIJbf7xjfygSQVVlw0JjKuN37rGF5Ueb/FbRNM8P6drfi+81ubTrC1kt5ZZNOiW3vYEwvmRxzS743ysxZQoVyWK7mHyjt/CE1vJretXTRahcTq0VtcTys5gDIAwSKJmLbFMpIO1Vzuwc7q8n8ceAb7W9ehs4NO16GxuJJomutL82VluCWEcsKNcvAg/wBGQMXjUKSnzHexTWK11Zm5O2iNP4SSW+s/ETVfG/hzVdR1+0upf7Me/uIykElpHCJA8RYJ5kol2ozk5DLKAoVVJ9F8d+OrHwzplq87rs1C6kskMLbnG5W2sCpG0sSmGPBLoCU3CQeaaZ4JtNP8IeFtSvNGv/DGqeFS9hp8dpe/ZxdwtG0jvJKciSORGZiJYxIJgy4Xc27029i0O+0uDUb21e4ttJSV7W55iWHawUjPcIyoMleDEG54pTVtUC1WpyemfEDw75kNl4t0WK2iMLfZtUCzTRyxkyxgEkM+QgYs0h5WRHHDfLU8RWWlRQQ6pZX2nz2UpEcjwgxLdREnzvlwyEPIJSCvyjcMdAa4b4r/ABN0H4WadpdvdaXNOt9KLOC1iNvF9khKsxd1kLyklljQr80e3Zyhwpi8MDVdVi0vVpNA0y3s9a0tdYjeC22JbmaaT5GDjLttUSHKqOcbQBz52IqxTszT2kKC55vQ1LVoJ7OK2mm3xQXk1vayIRsK7TztdRuy7FtpGeikksaw4tX0K48eQ6FdWd9c65oOmXNqkNv81sltdyrvMuRkYW3QBg5z0GC+6uznvJ7iOOXUQk8yrJHkRKoVXJdgQBgnezHd1zg5yAaxdQmRI7eJSi2w+/D0A9DgdhwAO2K8qpWV9DzcZn9KlpDUyHa/ub5PELM9oxt183SUcNCs6ldzFsZYhVljOMKwIOOav2ttBb2cT+YqOQzkR5XJPzfj161Skubdpkmi3yMAyMSfvqTnn3z3rUlEcGlx3L4C28Ekhyc7AAT1P0rgqTbd0z5HF5xUxE27s5XRYTr3xFubpwPs+kW4Cx/xedJuAPHogkb6qK8//bA8OJqOh296sYlxAySJjOY+Rj67WY+ort/gbc3Or6NrfiaYZTWNanktXxz5EaxxAZ9PMjl/M1t/Frw8us6Nb27MqRKJDIxXOSU2oP51zT1WpWAxXspqo97nzx8KfFkXjXwmmlXVz9ov9NQ2VwXxukaI7fM+rEZ/GtG+0qCWFrW9tV+UkBpV4/8A114T4XutQ+H3xO1ezyYka9T5ecKNqr+P3R+tfS8txHrtiL22aNpnX5lONjH1579OnpXl1lyS0P3TK6n1rDQn5HjPiT4ZaNJIbg2+DtypH3eprk4vC2mWE2Le2BkHHyjivUvEOm+IJlMaW0nB4GMj8Pas/S/A+t3SlmhSD5stI4x6Vqq+h6EqaaMPR9B37fPhXJOVXofrxXRT+FH8QX+meDVklWbV5hGRAMlYlBZy3oAqt+dddpXhyw0G3Nw264un4WRj0xyQB057ZHrXefCTwS+n6Xe/E/WYwt1qsLW+mLkhY7ViP3o9C+3I/wBnHqcujJ1J36Hz3EWYQyzBSj1kifW47az8jTrJRFBZhYo1HQAfKePQEnj0FLPLFp/hzUtb+VTa2ks0YI/jCblH4sFFUZx9tvkjVmK/dYHuBkdetXvGjx2Pg6CxaPP9p6ja23T+EP5rfh+6A/4FXfe7PwCrOVSTlLdkmmWRsNNhtkRQUADY7nuanurGKWQCRtiDkmr1rHvdRyflXdkdwKrag7RG5nUZ2Jjp61e5yMW3tYrmEmFUaEsPlI6kdDS3dnDNGVu4FkHONw+YE9x6fWrmhRn7DEDgHbnpVvykaVlmYFugoXu7G1GbpPmRxl74YW5Dm3l27sHaQOwwP0Arl7/QL6y3PtJ24+6PevV5NMRz8v3sYzk1Wk0edFIXDM3qM8VDi2z6bL+JcXhLLmul3PKvtUcbFPKO8Do5/wAam+aRFYj5epw3T2rt9R8I22otm7sCGx/rYyAV98d65m88NalpAeZIhcWIYiSXeFZPT5e9TsfoOU8R4XMko1Hyz/AzwWBxFIfL7qeR+tVrkyHCSkvgd+1WVaBguyQjIwykdD6VDcby+QOp/OpZ9THbe5TUMXEcUTEtkkg8YqZDJKBFDMwX5QVZsEtk8Z/Kk37JMOn0NBibGYwAPSkMTM0f72dQrBirBHBfHb8KRLjyAjM05aOQyKHXKAkDrjvxUkA2fJPaxNG2fmX/AFgP4dqgmsvOPUyEna2Ux+h+tFkQ27lySW3a/S6ktgRNEBl4w21gT8w3ZxVqC/1G6cQ3Vy7Bt37xNqPt46AAcnGPwrPaymgZI5G27F3J6YpFiLElp2iVhjdx19u4/CiyJuy/qayXEslzNLIomi2BGb5ynAycfdPyjpjGMjk1nvMTMpkCDcByckgD+Q4pZTMGDGbzQV25xgk1Q3cYbIYjB5NZvc0S0NW51HTkBht0Vo2BL8kgknJPPTn0rNaSKa4AKZIXLAsQCMn0qDywAEUYUDH60pjUuzvyCuN2cc+lF2WjMa4hk15rNIFREthLv3Bi2H+Zctls/dPWuhtbYBNqxAqCeST/AFrGu9JMlxaajbAJNa712BQfOR8blJPT7oNb0Dqg2q+Oc/NnqeTUPcT3LUcQGIvLBEhHYDGOafbw2sF35sd3NGZmOza5UL0yrMMEDg4GepqJLrzybdYQWAyWIIXH165pILOZ7pZJHaSFFYmIMqpnGM9Mng+taxSsYy3NV5tSDSrPeSSiY+ZJHkKhcnoVBAByM5xjGBUXlW7MEuWU+SyqcgEnPYYJBPvUk86305VpChjjJURyMue/OMBuSeuaqT65pdnKmnzzmylZVz9oljZZB2xu+Zec/dIqXuQ0V5fC9u0rlYroAsSBgcCitLZcN8wurMg8/wCuf/45RSA9S1Xxj4istR/sWDSZ20/WF+ywXSyJqFnceWqKl3LcFZnB8hTBJGwaMeYzcklV9utItR1DU7TW7LUftcF6qJb2cgQxQxlNsssjK2JZjuxgMEB34BPL/m3oHxD8T6zpXiCeA39iPDOjype6fdPNJHcyG+iVbdTEqtabhbJE2xvnCMilVJB9f/Ze1z4m+PPHd14iFzPPaWsRvb1I43SFbx8Rl4k3b5BIFWSQllbJZtxAkWT9GVTm0R8nyNH3H4Ku7m+sJJ7iDUrKeOX7JLZ3Z3bHh3AMpJbIkURncrMpAXBLFydlZ4DqCQtAJLgpI5mWMfIQUUZx8w3bgfw9K8pttd1zwt4lttV8Vi2gigttSmuJ451CzxxIZJC6uI3eT9yGUiPavlSjcEZK8fsPjZ8Q9T8OeKdS8NeFtJvvEGheIdMu7511W6s7LUbi7LQRwrJKMRmFo7MPF5mGXJPlvvDKcV1ZUW1pY+wHghnj3FAdrEo4XoSpT5SCCDgnn3rm9a1SxjvbjQ4tXhNxDatdyWW2NiIcbVIQI7NiRDhQMnJxnaFPnniL9oiLSfFl14b07w1NcWWnuLa5v45tsiyKU8xY1aMxswDBlLShW59MV4tpviHxlN421jxNrF/JJo9xeSTQ2ElqIpIWM3m27M8UiESRlngZf3iEE5LbiBjzRjuzX2c3qkfYFj9ke2aGaeE27FUQKvl8k5AyDjG0qOmSBnkEVNNBC9zbSWyxCSGdjMsXy7lKvwcYyNzAkdCeTXhvgX4gzzaNe6h4lRJrO3u4ZbRZjtkWZpQZdoUb3Yo+5Qu5VCEYAAB9k8Ga0df0qy1F3SZrm3jkeePO0ynJZACTjBUArk7SCDyDT5lLVENWdmbpjZxnYGdSOW+gPFcJ4o8P6ZaavZR2/h6FopIxFmGNVEYdzHKSQu7AWUSfKwIMS8jgHuGE+bcxTiNE5dWXO8FSAM9vmKms/XbCw1DdFqkI8mKJpPN8wxsmB8xVlwyEDHIPI3A9KqLdyZI5LTNXvtPtV0e5NnFcwqUmeO5C+QygBZY45QAY1AKDHUrggEGvLPEfjy90bxxpWjh7HVNTk0zUJn1N9PhSC7gaYKtkyxs4SLzPLbcx3koygjzM16H4TubXUprA/aY57lrCWCNrW6abynBG8JgoI/lmT5mBZuOhX5uV8SWHiO31bTJ5vs9k+kyXZvLXTZ5DbalFdybdjDcXUq7AZZAFcEqMHaupk27Gg/i+7Mun+F/Aiad5EohklnZzcxr/AKSWkQMW8wuGlgLMQ4bzgQFbAfSOpp4e8L2sOnz3/iP+0GzeanZxo1wInkA+Ro8KT8pXdnhgC3zZrlfE88fhW1vL20hvNS1nWUjtWkj2ssN0kkjFWeP/AFZj80JtXYxYDoPu1vDniPxevhKRdevZLjzJAbSOS3jjneIrHhmCKNu50Mm30Zc+lcmKxKoRsctfExw1Nzmx2saTot7NCLrS7Weys7n7bZJlT5LF2kTYqgBCA+CfvE5JJBFTTy+ePkQRqRwi/wAI9P8A61V7YvPbJced5qldqt6AcY9sYxgcACnQOWyT/CcV87Vrc75j4zFZrVxcm22kQTpceZueZtuM4PrWNqJtre3cs/B9ea6fUEIsvOCj0JrzrVLua9uDbAjAPtXI56nlTqW0ZB5EkzO9pI6lAXUAnBPpVv4ra23hr4aXV1KfLuZbbywB3kZcD88gf8CrV0K0CyRW4QEyHDHrxXD/ALRM01xBpuhxNuWa4AdMA78DIH5qOlQ3cy2hc6/4IaHJoPwk8NWM7KzvZm9yD/z8SNPz7/va6/XbOS90dwsbyFCGCqhcEjJwwXnnGAat2elx6ZY2mkWkKhbaJYIYxk7kQAKB7Yx7njHevkf9sz9ovxb4S1nTvh/8K9b+y3OlObvW7mJCxFwebe33LzhdrMRnBLRq2QSCcvMrI9Ckk0k9Dmvjx4Lk0/x6mpR+Yq3CeXgDO1kLHJPc5Y/oO1WfBms3GxbB5PmAyoIzg12PgHxVYfHL4U6Z4j8XatpieIxcmwvBZwPELacyMsaTxM37ppVUMkq/u2Yuu1SuTo2fw+jsL9pDCqvGxV8dMjg4/Lp25FcGJp2dj9h4OzWhXw/1aUtYqxVtr3WRgEKwHU4HSrki397GV3bV6k44rqItHt9o2gglWyAMnAHJA9claxPiB4qi+HltE9potvqWq7VdIbgultASSRv2MGd9u0lc4wR61x8t3Y97Ms2o5ZR56r1E0fwvb63fJa6vfpp2jQIJdSvJ5vKSOPPyKXPCGRgVDblxgkZwQfV/HuqRQWsWlWyRxwGNHVEACBAMIFA4xtA4AGOnOMn4x+Lnxd+I/wASrP8AsHU7y3ttMTZJJZ6fbiGFpFJILcbzjI+VmYZAPWtX9nDxzqxjf4aa3M0ojLy6LJICWBHzNbZ6YwGZM+jL3THfh4qKPyLiDOqmde9eyWx9B6FaedK9yxy3XGKT4iRifXfCuiYyIo5L+ZAcDa7oin64SX863NDhIjR5FAVhuGB1G3j8TkZ9DkVk+ILaS9+JE++TK2MVvbRkf3BGHP8A4/I9dcNj4qbb3OmtYYfLSXGWC8msi9QG3uSRxNIqD6ZrfcBImYtjcOgFZF/GPIhiA+9JuqjAt6dDiJNowMYFTzW4Dq4X5s9an06DEC57U+4GZFUHig0WxDhg+PXmrKL8hzS+Wrngcjilx/Ca0SVi0iJUCBzKo2BSxOOfpnrXK36ebOt5GVdHOFjZAfl9ORzXX3526ewVgruwjUlgNoPBbGOdoy3vtx1IrDNtHN5flDMcBIQ7gfrnAHfI/ComkbUpunNSTOC13So7Z2ubdQIHOSoBOw9zmsS4hlA81X3RBeGA5zXpV/Z4VsL8jnketcLqVjcWF23kuBDJ82Dz+HP0rBxbP1XhjOPrdP6pUfvLYxCfl/eZ55pqZPIkyc8VqCBbtCZo1iAOFIOd1ULi0dGPlrgj+GlsfaoYZmjz56HpncvH6jmpCZriN5d5fgEjJ4X1zVeJpAzRkhmPVW9KeX8vKCQ4xyinqPpSIe44TIzbWJZVXClmzxQV8xPm25UZXFK8hZVA8ry2HOxAMex96VrR47Y3IVkUnCkHIPtQIrlpUUO8jMQeKgeHcwdW5HzMp7irULzMmAqs2eQFPAqS4trUqhLHze/UY9qLILszZAjOXAKhecfXtQsbj5C27aeuOtWJHRflkwApOKajAICibgD+lZvc0T0FkxDED8x5zxWhDJG0QcgFjztFZ582dgyRM4HG1eSKvQBkYZwDjpjp7UuW5XMXoZB/y0QAEY21PEzBC0QKjlcA44qqoLKWAyc1NEmZB5gGcetWoswm9SRxIQryKx7c88fWo51SZfLmt0dQQRjoPw9atHaF8sHA64HPNNTJyCAffGKrkMuYr/bbgcCUAD/pmv8AhRUxVc/e/QUU/ZhzmD4H8N6v4L1FtZm1S8m0jWJ7i81Pzo5FnblGw8Zmy7ZSPDBWLqxLZwAO3+Hll/wri7sRoF+1xZSLGkFrMgVkdiJHkOFHnrJFJ8ySAsRHbgHCADzjxx47uU0O8sNE8Z2thc7hJ5MdvIJZTGYV2eYuI4s75GYsBygX59zkYXif4keKPBOvabpzpb2q3cdm8Vi14lygaKBEd1AkEyO0yttRjtDM6LlQCfp6dWe55jpU7n1Jr3inxJ4v1GLQ9Aton1i7luNNCxtAga18uPzYJg5yNyRCRX2tlBsVhuYHgvFHjPWm8M3ekw2tlfWutJaWMrXdqvnQxwyl42BBAfJjizu+VvLOSegg+AvxQsNN1T+2vF2tWsOnWFvJcaVfSWhgZbtLaSM2ZDSKATE/mHeRjyeGxnbw/gY2MOsWWmXFteX6R6iQLczuYZNzqUtkCf6qUEyxqq7fvMxHFdbcpxOfSE2el6PqN9eeHrTSNQuxcXCWcoVJ40Q3bu8jkDgoQpLuuHZgG4AAFatu6T6NstGmZfMlicM3nMIwyuNykCQfMC24qQF3EE7SK4jTrK41W1xZ3ust/ZFwpa5S3Ks3yHep+QMI1SQjcSQN6HB2MDtzlNJjuddu7IWel6paRTW1wJnjhYIqqZArkEq4jH3kGAByW3E5cj2Zp7TsayalFDDcafAiwtMotvtLCNjaTh2aMgBvkZdmTyDuMYIIGR9P/DiOKLwrYWYhEb2LMhk80sJJVxvkYYRlZmdiVZVOQTgZrxn4aHw/488FeHLfwnqkF7fWmtRyaoDHsuoLELI5j/dqG2n5F3AsN7Ng5Qbfbtb1yz8I6Q17CqTQws/2eCNGDSSEMCMoG3fMyjG0HJ7nAPXSg0kctWSuQpqNxDra3UjtKZoTFHNFK0sTQpEXe42LxuEgRdvUhhjpWlqg1oWC2OmkveGHfHdTQ/KrDqdqsp3Pk429M/MAOvEfDjU9H0+c+CdMvjKmj3i21tMk5jW4byYjIWDsCzE+c20b8A9AAprs9K1/SNc1a70S3fzJLGNJZnjiZUk3gkENtXDAhiCpPUHOcgavcwvc8m8Haj4k0jX/ABH4Z8X6dpazXl28k1wrSiMi9YyQo7+W3meUd8Ssxix8wUOcGrHiXxFB4N8T6dp9jZz3banA17KthGSIbeJmAgdJCdkDBWG5Ad7AcIqCtD4nWkPhW9OuXN3NbW16kVrcXEVxJ5oiWPLyEl/3W0IWMi7emW8wkbPJNP8AFes+Hba10jXtP1vxTq3j+HS7qxsIp0mjeENL1mkdkWIgxnptIQIx2biLvyq5nPZnqlt4mttfgmeZJGN7pxW5hUuoUukUmJA/Un7Q5Rl/20JO1hXN+NLu6s7EXsDMFjuVd8f3WZv6uCffNM8CwNc6U/iOfVItTuNfkGpG6RWXdG67kTDKpCpvYKMfKu0ZOM1o67af2jp91ZNwZ4XVG9Gx8v64r5zMazq1Gl0Ph83xEpycb7BpFvbTaLE9u+Ubc6jPQMSwH5NVNAI5JEXj/GqHw51RbvRpLFwRNbT+X/wHAH9KvTOY5pMrypOc/WvLk7s8im+aKZM8xubFrZjkjNea6hbva6g23IO7J+ldvpd4ZdQaJj8rHpWd4ksBFM5RM7ifyrN7mFdDdBuDDfWwxjzSqjv1YD+tcV8REF38SfD6yhTFBe2yvvbChWkBct7YWuq0lmgu9OMh5N3Eoz6Fxmsvxno8Oq+KpBMOY34+mMVLMk/3fzL3j74h6zLDeaB4FCx3xVoG1JyGWN1wMxr3ODwffivGNJ/ZytdT8PXMniBJLq6upZHmlkJLysScs2ec8k/keoFe+eG/DdlaXfmPboCybc45x7enSuoWwgTdGFBVmLc00nujduUtEz4b1f4Rx+BvENmmn+esE5MUwBIXbxwR0I4HX0Fe96XrU76dEup5eRI1RZv74AwM113jjwvaXaefJCpIfis3RdCjQmHyldGTAB6KfWsqlNy1ZtgcdiMtre1pyOfm1tbaaa4MzwpaqJPMjj3/ALwn90g9ywyf9kN6CvNtW0e81u7e5e1mVpmJee8lLO/rgZxtzkDIzxXq/iXTZzLDp+mKqoG8yaRRjLdMHHoB/wCPH1NZ58LCGOd726PmRxfu1UZwWOFJ9eTWEadmehnPEFfNlFS6HlMXw0lu0yIxk/LkLgEVt6R8HJ7L/ToXeKeIhkdMqVIIKkEdCCM/gPQV7lp/huzRFVEyqHA9q3U06GCHdsHHTP8AhXVGGh4vM5I808DeOjqeqTeEddhW21ewTz42wFjvUUgkg9FfOcjoeO+a2dMsHnv7jUlcsbmV5Mkcj5iMYPI6VD/wjNpeeIJL/wAlN6gpnHYnJrsbaxijTco+Y/eOeSa0SsrCa5tCrJbv+6iHJbqfaszVGL6pHaoRiNAQMdDk106QBQ1xIvEa8VzNlGLvU5rpxltxCnPamQ48qsacbNHGFB9sVMYSkXnMee1PtrUyTb8ZUDmi5lWSUW0Y470DjsT2cAdd+ME9ajugkBwx5Y8VdQCGMY6KorCS7/tXXXWGTZDaLumbGQBzj8ad2UT3hZk2pkCT5QAe3f8Az7VO1mqplQFBUYA7CpLOD7TL5rRbdjEKM9BVi9KIFSIZx1PtVrVDW5zV3BlGVjxXN6pYeagQR7gTjOeldXfIMnaOCaxriFGDqy5A5GOuaynoe1lNeVHEwlF2dzivsczPNDHbhdmRuySVIHBPbB6fgao28VxLCv2+FI7jGCqPkdeD61096GWHbb3KLIchiOmRyVYd+CPzqrIkFxBMl/ZzLdwxr5bwKiITnJyCM/cLEYONyqO5zkftkJuUVI5K6hYTAjOQMfdxTfsk9x+63LnqG2gEHnjI57Gt66tJpry4a2icxRZwsnBUdupOfUH0IqG3jinga3NuVmI3LIWOEfnnjg8Fhg0yzDJULtLDIABYc+/8iKdHPcxjyrgKyEZUsO34VqXunPtjdvJO1doZDyQPugjp0xz1qjNFI6hXVldByDQMoyebE5ntrj5RjcgJ/PmrEjwzKxUgkDO12IOf8Ka6FVwqcOMH1FV5FG4bjhhwT6igCCWZAjBlPbrT1mSEM3mIq45zknHtVa433BZUI252gsOB+I+tX49PaKJGfDHjBPHP9RWbjdhz2LGnK3kGQeYgdiVIGMjAq5HbneWLbuM5pLZbm+lFqbpIgehA5+npWpHbLbQ7ZkYkAAuSOefatFDQyc9SCOFMDJ21ZjEcaBkjjmYnbz2oSJWk/dYIzgd8VeWFmjbIXK8cKBmrUCHMrTtGoDFoo8D5uDx/Sqn220aVIwu6XJDqjgBeOmTx7/jWmRGsX76ESFR0PTH071nal4bTWntriCb7F5fB8uHKsvXJyOvPX0AqrWGrMga6iDEfamHPTYpxRTD4UbJxrkWO3y0UDsjz/wAQ+Gtf8K6hqNnqcxu5mQ3clwVZoJUaL5WVWzvU7XEfznJjwyt90aFzBbv4I1DU08OaRFr3i5yy2EsQQyRSBTDPbIE+VslQgAZjhmJHJXnPDk48Rape6xqmotHqwjRnvWIVLMIVJSSNSw8vcgGxFKgO4IXHO347v9OPhPSr+1kt1WDURDrbKYhcXMMJACx7yrqioz8HayBIygAAY/TqPKrHkPUxtW0y68P6U15ZaTrF1CsvyXE9ofJeaOTImbkq5IgcOoYqVfAbsfbPhxrXh/QP+EK8SaxodpZWWmX7JFIimaIzKGYI0KsNtwVEqoGZQCc4YmRR5no+vam2tCy0VLnX9LtwzySSW3mtHbPcwqLJ3JGEieUyCSJwS1yV3ASZHVa749HiHwTaeAtcSx0u1spktjqCKvmRQxSDykYLIzK7TSGJhjcVWUksNzVtFSWpjJKTtc7XxN4k1VdR8RNc6cuh+G9O8QNp7TIjmW6tbS4yXclWwo/1spGTtOVG1QB5td+DvFmq2Gp3N1dTTQeFftd/9mvLuS7SeJNvlgqTlk8tsKQASsaltoIr2zwp4U1TSfgva2HibUoP7W8YWkFhZwj5hHpktnHHGyqqqQ+SI32nYrXLhCu8E/MMvhi9n1WDSJdHu4pmUG1uILZ4i5kA2lVQYMbZXbwp2OGIBOBbirczJ/uo+svhXB4A+EnhS8hHjC2V53/tq7MEySvGVt1jWPbJGdpcyoeUznGGcsBXH+PvjHrnxFtbu0ttBex0uGeXy1nn8sCRGVl34KYG3JOck4YHAUO/nLadrFzeab428avbTvqDi8RVUlnWCURbjDEi4DRqeFVQdzDggk9P4o8MWusXWn3Ntq738l5pc0zQpO5RUyCdqckNvEiGL5AoYFsDk6Qqq1jGUNTm9Oh1iP4fXOg22sMbWFm1W6urQebdeR58ET24fzAZ0XzBKI8xlWkYMQjhn9U/Zr8e2Xhq5vzqxm07SdQkg0+4+R4mluldYEZI25CuztI5jPyrLDiONFbd5Z8K9AvNT8Sto83niaaOaQrdq5jllcmAShGUfJFKyyAjo0ScOQGHo+k3niDw14lvvFtlFbabBPpN4y2MTpHCZ7fMayGFcCLEUSxiPa24MoHzAms3VS1CNJtnvf7T2pjTPgn4hu5BDK8UUTRRTRecZmDKdoRcEkYydvIGSCCOPK/ic+on4p6Hp9j4R1fTr62Hh5tNujfK1t5MMsty/mpkl3VWukZt2W2cEbvn57xJ4h1n4gajayXd1eTNZvHJbXUoNtbSeZbKkm4Oq4jUSyAtv80IpYscAV6Fo2i3C+JNS8TXOoLd2N9cQS2HlzpcW6qsLJEAoH7qSNTMnGOJFySea5a+MXI0jmx/+z0XI27RraFhZ20UEMcMCxxRQKVjRV4VFB6AKAAOwwDgggOkGWDdFVd/4qQQP0NUdTaawZb2NHP2Z8yL1+UnoPbqePWrgnjmjSWFwyvhgR36/wCJr52dSUpN3PzitL2knJ9TzjSJF0H4gapo6yFBcSRyxOTgCM8n/wBDX/vmt3xFeNazs6Ar5mN2Tnk9ua5j4x2kmlGx8YRsyw2wNndFB8yqxHlH8SWGfULW34xkiu7Nb22YPHKqSIynhgyg5Htzx7YrJvU4k2rpFfSLj/Tdw7HP4Vo6tcSu/wC7j3EjOawfDzgE8/ORmunhjWbbnqKYk+dWMSy0++udXsBImyGKUTE+4OR+oqTVI/N8QzOycM24/wCfwrejkEesWMAP+t8wcfw4RiD+YH5Vl6lxq77f41yeKLImSsrGpp5Ksu08DgVsy4IVh1xWNoyEwBnOTuraIUoOKDSG1zG1+1F1YkD72c1ix2otLMuVIypy3uBn+mPxrrJFV4mTGTWXqER+zpEoILHDEDtx/hQTOmnqcPdaVruo3slrpUUjRxMpkeGEsQO5yT3APapYNCe10ie5uJ5Jp2lt9zv14mUEEdByDxXS+EpLnR9XuZWjW6jLxvGGkWOQOgIClmB3KwbGBg5BPeoPEEVxLp19KqhHkuoZCQ+QC1zuIA7AZxg56da09jDl5luZ8lqenc1rW3ESAkfeOTmrF9Ei2jOV7cVLBEsgSPBIA9aNbKRWZXGBtNZ7G1konG6UG+3SuemTXRQRhsHFYWjASF39Sa6awhLEe3agiBX16RbLSmPR5PlFYmlW3kxCRh80nQ1qeLmWQQQdOn86S0tgREh+YDmkypRuyYj7Jas/Q4rL09Hlmedm71qa7IsdvsA4NUbJCkS7RjJpmctGkHiHVLfQ/D93qdzMEEKFnJ6BcE598bScdwGHXFZXhuCaLSo3uEKXN8RdTIese8AhD6kLtz2zms/4ro9xZaDpSvtiu9VhE47PGqs+0+xZUrotJWJl3EfIOVJPbt+mKS3Ff3jUgH2W3I6lhkfWo5I/ItS7/efkmp4I2uJV7IKp+ILvafslv1IHNbI0RkSnzCQR0Oc1msgkmZF6EHJH6Vr3UQtLDfI+5nGD9az7OBncepFZy3O7Cu0lLszEjis7i6WTydlyqvC5bCo4PYf3n/I4xzUZilt5G+0IZd/yskzlQemFb+7jaCAOffmtH+yrie7ljglgRmYkJKD+8bHQY6fjxTo4NTuIfsMtmZWG4CAxAAv3Ck/KTjGPcj1qGj9py6bqYeEu6OWn050Mi+QYS5bIHdTyAe5wSeR2wO1V7a2KWstre3CEfIY5kTkPkjGB14/CulSykWHdMwRogFjEx+dck5HuPT2rKayuYgsLSrFMXZk2oWDooJwWzkZqeVs7znksdTOpzCLTYjYm3Um4EjF3mBI+7nAG0L2qLyZTIyzsN4bg4P8A3yf8963I5pDIm2WON0QEqdyeYDzn3OSRnPaiWGCQEs7iY/MRJwJPpinawm2c3dWyq+eOeGAB61l3f7sMm09OATmuumsFlhZhuRF6hieG9vUdK5+6tAp3FB7kdxQO5m2amNNjvw/OK04zLMFiMm5Y1Zl4HFUJY4EidWWTe2PKYHge1PtrxIQ8XmKDkgjJBxgdiD/OgDVtYV+0ooBXuMdMkf4kVqvCjFIgu3zMnJY7SM8VkWuoxF41feu0gAbR7c5/AVpLMDcIgzhFG3POKqO5lNWNEJBD5KwxOruMOQOCfWpIX35Rh5fOzPXJ9ahikkdgQSFUkEVcH7rahiBOM7q6ElYwZKdQttPQtc6dDOyABNz7STnrx/8AqqWLxBdo0xt7G1RXBZlkkJUKRj+lUXOWALNyeOelOIUOUb52ZQCx549KfJcOdrQoHVxk5MQOeggJAoq/vYcBTxxRR7MftGeJt8IfFmrW8i6Qv2yO3cfaYkmVnEjRRtDE3OWVFKjaT8pWTIIBrb8O/A6TVbPQ9Uu9Qn0pp7BPOc3LGJgJEDXIY5XbKJJMAlCfKKhWJbPp1vdahbWS3tzAkix3cyCG4k8xFuF3R4ALZckichjuBMgAJBOdq88TeH4jHcSeG40ublJbaQWqC3EqTQtIyByz4w/lvvJwVwgCqrsvqQr33OeVOyOKEvi7wD4S8UaLbBLq50aYyvYvaI0jQsY2t7gkbnU7WuAIxgKIATwwUT+DtG0bVfg/pk1/Yx6ksmt3Nx9o1GMQx3enBP3jZ3+cXSeJRt3q22WRlOGYrBq5eHxJp9hDpMt5LqWjzR30siu8UcSzzIsQwdoHzICrA5DDaRuLL2miwJ4Q1Czj07wqjWdhbTC80u6aVbV4Hia1aFoJcqPLnnkb7xJBeM89O2WMvCMEcUaLjNzZteFfGeqaj8N9JvfBXh/XbnVNCguILKAWi3D3NjLJbzNNvdTGoKqy4Vt6blUKQwauK8cSC08QaItvFd3FvZTW8d9dpbPaXc8QjIRZBnEZAnUqAuPkG0BcY7rSbDxP8Pb2a2Et1bC/82FUEpmIWRNsbNNA+QymVmGwht5Zgq791YVxaQIjXGr3UxkjJuPOhmk82Pa/2ZAu5NyssYJXOCE4ACsQRVOd8rKUdHJF7xd4cttR8Q2mj+HjJb6ZHBJF5V6A8gJih83eisCJN5KHIb7jklljCjIm0WaOV9TuNEW7XSPMjuJ4LeaDeVl2jduG3CmYAo4IG4gdK6xLi51W+MsdyjvDbW8UDgCOVXC7fLYIqAbl3BT2Yc/eqCHw1qHhS7mivZt++WHSr1ftO1pMr5j7lyWwskaKX3DJKkYLMxupSdKJnCaq3sXfEOh2+maJ4b0BPENrptxa2elMrtM4MWpedJLIxkRWI2yToxywbBbbtBOYvFei6QvjqKG21RIElOJriS42hZLd/KY7MH52dDINo6TLkAjcbvhXT9C8JaLJ8UPEN1/a+qXYu724N0HVooI+LeVVZiGGyGJl43kO+QwJMcWj33hrWYLHVDPBH512J0gWV5kknlgQmaQzK2FLRvhWbIYjOK58ZNwj7pdN3ZgXF5pTaQ9hZ+VbzrIt0sk6Rq5njzjnO3aCv3BlSTkjJOPQfCQI0KC58zdLc+ZJJKCP3gZ/kJIJBGxYwPYfXPHWXh5rqC41uLQrnVNN0y4ma9Ek3lAeX5RG51V0yQOerHLDaAFJ7/SbP+ztLsNMwR9js7eDawwy7YlGGHYjvwPpXi1JOyk+p4fEtdQpxgiwSA8QPKqSCpHGCOa5iad/DdxIA4fSmfO/ktbMT3HVl6fTmumlJ8tiOqYYVyfiGebTZxcuP3M+QcqCAe4/LFcs32Pz+q+VWLPiPT7HxJod5pt4BJbX8DxOobhl2kggjoc4IIwQe9c3p9hPB4I0rT7mQvLp9lHYs5H3mhHllvxKE/jRDrA0SFbi1G6wkJzH18onqoz0HQ/ia0tOuo9T0iV7Tb5SSsAo5wDg/wAyahbHG3zbHNaJIYrwxk5Of0rsbTOd4GK5BFNrqLeqtgnFdRZajbufJkIQ9dxoT1CKsaNkg/tSKVjyoPOOxBH8iayp5Bc6zMc7h9MVsafcW9xqCxxkfLG5JHOfSsmODGrS4XAxVlz3RsaVGI4tgXjcf6VqlflwBiqunDC4x3rQdo0ALkUHQoqxTK7WJ7ms3UpAl1ax4JEsiIQPQsAf51oyTRmQhTxWTrEkaXFk7nhry2iwPRpQP6igznoiOaDZIyeWQGOMN3qpqiZ06RZCSFltlC7jgDzlq00MkjhjKxC5Izzjk4/TFQXEBkt5mJyBNb5P/bVad7GXkdRZxJ8rbemQPpWT4slCW7AHAANbMLlQV7qTWB4o/eWcjMM470in8Bg6AMW4bucmuq0kZRnPVelc1oyKLVdnSur09Fjg4GNwyaCaS0Rha9K0mpJEyhgAMe3JrRsIx5gDrzjIrJ1h1N8H78c/iauwXwt8ZYZKA+9Bq5JMTXE3fKTkdafZWpaNS4yAKhupWlCs+fmPAIrXt4/Kt19xmgh2ep5f8YZn3+HrdXwJNTWMnpjMUmOa6izuBJEkEceDhd3+zgAf0rzr49XUjT+F7ZJCBJ4isw46ZQeZuAPrgmvRdAKKvnzYWOFd0jMdufqTxn2qXuYP4mbl3eWukacs1w+1P7w6n04rJ0+1lvC2qXcbAuMxr2UVSWY+KdT81SxtbdsRJt+Un19+o9qveKdSGmWsOmWhKzTHbgcnFWmxp6mTe3Z1O7MSkmONsHjHNXbCB1kefpGq4A96q2VqIYAkafOx5Oc81oatOul6QWdwpZcA+9I6qDfOkZumJZ3msGO4kuVlbcYjbyKGZgQAgj2lpM7jnaMjFXtQ8PQ6y72egXWqXcqM5mjEjEoELKxCAKVKttJJC8bRt4yee0tBdz20ckjKs0oDeXIyuSejfLk8Y4OPxrpZfF2sCUNr2p3cdvCnlI0k8cLmN8ZV3U726RgFweRjBLEjaHL1R+r5HWlVwqjfYXT/AAFpfiWO1to9cVLq5YCFvMMyybTjlVUtGCc7c90fJIK46ZPB3hKwtb3QvFWjadb3syrIgOqFYkQBgGDlvMJB3EqoPKOThStcD4d8QeHNai1K/sbuwnsdTsGQNEi3g8wblEyKQGDblX7uAAVLAMDhtlPJ4fvrK+uLRmt5JfIkjnRZUiG5UctyAseGZR8y4JABydp6FKnFWaPflSnN3TIdTstAayEmmW0kKW7iNAjbwyL8riU+YyZyCd68cgYGDXNzQeTDCGjt1U4MTKAzbCz43bABnjrjOMV0niDR9M8N3gs7fVEvrSTdJaSJahSqgYKybgD5iDGc4564PBZ9h8SQMLrU4LaGRXMLmQAPJtyPNJPAUrzzj7rD5TyvPJK5rHY5iW1mR2JnjlXIAkhU7cFQcEN35P6VkavEEUeaCFY7cqO1d5NZ6aXWI3kaNGwjeRUfyhwckMzBcgA9efl6AHFYmqaaocpIwuUIB3odysMdcqABzkd+nWsmtSjzO9S4+1Gzjk8kqSyO6HEoXkoWI2ryV5yDgsewp1heataaZJYajY3AfLPa3BvolSVAM5k25CjBA6ZypPQYOxquj266iLm52Aupi3bVd+5+RWYDJGV+pFVYGnjvbO9miZbkRNCiS25VooT82351ywzyDkjO3BzmkBe0nSZ9UjaSSKOzjCBzI4I2tgAgc4OWB/PHapIS8ExhYPuXqSQefb2pbXV5SkNgDD5aZIBXCDk5GAAT7E9selPu3RZhJGFgD/wgEgfnzWiSsLc1rXJRQOrdatSSbpPmOSBiqOnuW+VnUMAWU9yAB2q9LGjStIgIBAwD64rZbHNLcp6kniGQ2yeHn03c8u24+2RO+2PGdyhXXngjn1q8CjkOmHyBwBt2kjOMZJGM9yTTDJJhIC7hCTuUMQCeOf0FTxv5hJMvJJJBBOT9e1Mhh5F4eQFx+FFP+f8A54P/AN/KKBFWzEM7GK5l3Si3KGeMgBpAyAucKCA2xnKgnDO+D0xoWqxx2lppv9nvezSvJamGJUtj87MwdWHJQlcHgt8oAIAGKOn/AG+OCAX63VrJcvhjJGVilYoOCzZCsATuGCxO3BIORsw6ZZysFk+wzRXlmbkSYDKQdzBHX+/8rKqnguD1BBO62LZBb6B4Xe6k13XtPv4tUsjbw2V3A6wu1vIx8xCmcRusjoGDBSuHf5FJY3m1HWNLu7l9Fv5fsNhcn+y40dm2WyneC8LrsVy6uxUADkceqmzWTSZdRea4jcy7I4Qn7uTEeWdQuAjK3k84ywZ8BiGq4bAqSdMtrmWMYYLdRj7TCpRgweUZUnBXP++ejbq1iQ0iS+v7u5uU1iOL7VchJopnmYyNOZBMxJbLYO09ScBVPAJBrW0HwzfeJrOW2t9OtTcyXA3TeY5lJjSQyoU2nOWEfz5XaXALHkVX0OxuJdYkvY9O0u90/T9xmutRLRWqRkqI2kJbcVzgbR945wrc42b+NvAJnsfCltJdS6lbFr/UvKUxaaHd98bRAMkLM5UlpHYkjpxXRTunzM5Z2u4o5/RNMfRboy6xpc8cMWpC3vZbiVYoTEuFMcZkx5jqAWYqWyUHHrsa3b2Wsalf39smoXd/JbPcyS22mRmys9rSMY5vumU7AUBIbcCV2tnAxGMGp3l1dWOnzgAxrHKztLJM+IYySzfMSTKgJbaMe5Cu3SrSTRtE1C78qaV0miglaWxilTIO5T8z7o2BDlihYOGUYynHU6rmrSM401HYsX/9n6/pjajNE8NpEzuhuYy8jyzNveHdtIbAhcjGF+VM9AFki8U6FDeaTp0OmwvZ2lijzRXDCNZHQuBvkdTmQs2Tu4+X7xyoXJu49V1ZXupQJ/s9jtRZI5YkW3gBCgeYoVlIQYXcwJDA5y2TxDu1nW4tR8UaHcWE7Rtc6dEEWIQ27MxVANgUhRsYYBzxyccctaSbsEY2Z03gvxppAv8AUNDsNMEMGpIljIlhI0iidEYy7nLDlkERIXdwcHktnqUkIby9xbaSgPfqeo4x19B645yeM8GeRq3iDUtReyigeOwhVswKsjTuXXeWwCxKxsSf+mvsMdnKSC3l5UL8yA9h6CvIxNRN8p8RxLWc8Sqd9gkJGSpwV6+9Z2t2cWsaXPbGIEyAnJPQ1ekcS4lH8Qz+NVpAzZCu3zdQB1rnaPlar5nY8fmvLjSEuLa5j80x/JJH3Zc/eA/z0rS+F4k+263Db3W6zljgmt4zyY2Yurj14xGeah+JdpHA8dyA8MrsQGUfe+tch8F/E0cfxLm0G8k2NqFnLHGrH7zKyuSP+Aoay+0csFadj0vXbbyr7zljCkk8fTj+lT2lul7boHQBs8kGpvEsbC2FxwTgDPvjB/lVXQJC0GDx83HPsKa3HJ++dZoFrHCX/dj7hXNRLaIl7I5xk89e1aOkArGSOpFZk8pjvHyc54ArQ7LJmrbBIoyB6ZqndTsyEluB0+tOV3CAbuSOao3bui7SepoFLRFi0QsNzck1T19CFsZA2GXUbLHGTxcJV+0f5FHtUeqj5LTcSMajZnj/AK7r/hQZy+Ehmukt3kVY32BmHK+nH8qo3F4p05yGYB57bcCvX9+gqW/1BriZo7eJnALNIxz1p+oRBdPEMiABri0GNhJIEqsefwoMzooQphMkpwzDOffFc14oW8Onh4YJH80/KI13EiunfEULZyMJjBwedoFZ8txJBp8SK7A+WAfX7xoNH8Jyml3ccMIgnAjkHUMQpH4Gungula3HlH+EDmqd3ZWN+oXUrOO4jxgY+WQf8CGD+tRjRWt4h/Z2pyeX0WKcAlfYEc4+tBKVtjO1AGS8cYHBqaTDQqrYBPANZ9zY60l0zyfZ23HgqxqvctqiDb5trHtOcOx359QB2oM29TSUyC4WNnZ9oH/6q25NSiS0ACnf90An9elcIuoy2777m78x92cKmwY9K2NP1W5YvulcK4XaucYzTuikeX/HKz1/WpfD1poE9tbXp1eIpLPhlUeVMWYDHUACu9WBJDHobXEk0cIDXAJ++3Qsw7Hjp6YrzDx74jVPir4XtLm63NZWmoXYiZv9ZIxjhhBPXo85/wCA16V4SRTZNqs+4xyNuEp+9McDGf0qGQ9zqHubLw/pgnYbAE2xL/KsGzt7jUroavqDCWTJMXP3R9Pzq49ldanML3UlxEDmKM9B6GtbT9PkmlBQBVzggDAqkJbiWNg6fvZBheCPb1rnPEd8up6obCCPdDH1OeM103izUhpGnMkTAuw2DHauY0CzPlNNKNzyZOT70HVTajJMorGsUBQfMQxYHGcfgOe3tXB2178YIr61l1Gw8P67pKDZqUV1PFBeBpblV+RDI42MjHIOwbY5MAttV/QrxQrPAQCpyCD07/41o6Xd6eu99TtJ55JXRRKsKSCPGVXGeh/eMOSAQxUbi20kZWZ+i8MVrtx7lTSNB8DeH9evNY0fwXY2c+q2sgvRE0jIygFi/CAI7bmYygb23AEkKuLela7AsCaXHb6bqFpMrvbxXUZOwRyNkpnaGPyjnHJHOalj0eLW9O+zacj29tK0lwGRhHKCUYPtUYGCpQAqPTC45MKWV9Zy28xeCwEcnluizGSNjKN+VLAucqCex56dKpu7PuleOgll4laK3ihtbexWKKdVhWYh12EMrBl5K/60/dYU3V20vUGMbeZFBONvkrM8sSyBlb5WY5Cj5yFYkgqD6YrJazSTeTqc5Rro+Z5uxGKy7WGAmMAlVVhkZynvVi51IajGmiSw2FvcSyO0NwV8yJEYKwYh27yAMD/dwOhYFXYWM4xCOdbiG5d0ESqFVAphV+AWX+JVBBGPcdBim3Fpd2GnwxR/KuAskgbbG8Z+6wB5BztBJ/v+1a9/oIvBd6zaiEozrsNtlkBXcfk2vkMBuJU5XG3isyOPbKxmikljMkiSxu28spLnZk5PGcjOB0weOEBga1pqS2qyq21DnBWXBBz1wOvI6g9hXF3TSwrdRrC6yhRtESGEu+45YtnnqvQZ+Uegr0d7KCaK2t5tYkt0VSz+ZCpMkZwMiNQANuRypwcHOTmuT1PSlNwJYokaUuG8zlXCjlGGMY4bp+dBLMhLy5dMRbLgSfKDIhV3XL7Qr53KPlPP6VYco9rbXEcwaG5RWjmWQSKwYAhhjBP3h26giqUNkdMZ7hFh3x7TFJJEPMYoPl2kjCkd2PXpzTE/0vfLdFXeWSaXc0IBTDOSqlQMKAGIHT8K1WwjatRlYJoI5QBlpfMGCMjt7YxW1at5zIVYsjfMGNYdrdSRMWuowrzOVwBxu6Hp7j9K27NVjXkMSvy/LwP881aOepuPmMZl4lyQ2OlPgBIaJmI5yBUa/K2RGcFsnNOV5ZXIiiO1DlyCOn86syJ97jjyl49hRVb972nP/fs0UAb2mz3V1p0nmp9qgiZmWCVCWhVS+F4YldoUlj3dGJzjBZb2ttDpEKXc8cd1fTSXFx+7ZiOmx8lslg0l0TyzDaOOAahv9Si0IWviA2k4WWXfBcoSIyg5ZTgZk3OWBHUFtwIwaksdQg0qwn1DUrCzngsIluijQ+dFKihhIOoXJRTgYbLN1CgCut03Bq41JdCOGOKz1C7+0apDqFvDL9iiKn91NI3ETBNyvgbnclvlycY4rsfCuh6laG+aXU7TR7G8s44p7qdTLIFmiMioig4J8oMcduSWU4J5zSYbC/0v+1tUlmFvPHBNFZWUKMsUDkMrGWNDHGjHJU4JI5UbWDN1t/BLrmo3C6lr09qmlabm6iubGSH7GVEUcCqgO99zEHOwYDZ5+XZtGFzCpJjL6afxJZaf4Y8L6fdw2drtmWKCZvMud0Z5uNv+td9uVIAXZ5owVYbLviZ49O8I2dvrNrFJd32oSRx4SBUt4Ld9gMQiAKkkIhfBP7vaCVVSaPh3TAnh8axrl59r02yvILyQIjwQEHdsI3JhczyBPuFgpfjI3Gl4e1jxAbnSP7Z2X76eWgtoP3nlJiRdp+YbuEGSQP8AlnjCrXXBK3Kc7fLqO03QdavdWtdE+WXQoZ5PMvTM0cFtGshM7JKypuYR/Nkknk9lwcPxBq+ktfDXfD0zQm0vlitEW1CsVj+bd57EHzGYsCecBwN/Ciu00LxFb6L4c8VW5vrpP7U80IoJmTLAKHROwKq/zhz8zDI+Tjj3gWXUry5eRLdhObqJkiYRg4fCqVclRhQMHB55FZVVyaIuEubUv3mvWum+FNLs9NYm5vJmvL2V41YIFkIhijdty8/OxDDq2WH3hWFINZvY7WyF9PdTmSOG2ZpDN5khBQBRtG7gA7QV6kZ4rtNE0KKUt4p8UwNa+HtLcSv5bqWupUyEjjjIw3CcjGNpckgDBtQy6zex2w0fWVbSvEM8uo6hZQwxA2yGZGKr5j70YNIH2KuNjOctgGsXB8vMyalb2UZSS2Rs6FBqMdk9zq32ItKyCBrKRpYVgRVCKsjcyLuDMrnG5WBwM4qzIPmVhjH8ODnitXBkV8KnIA2quFJ6Ej1571m3cRtCXYAxr09jXjVNZtn5Zja0sTWlVe7ZVyIHaOQcHlfanLF8u4NyKbqH7y3S5jyxA7VWtr7zIyuPmzzUHGkjm/G+l2+p2TWtwGYnkFeqk96+Wrg+I/h18cfBmqT2Ym01tWWy+0oQWRLj9ydwPp5mc19ZeJSPs4YAgjrg14R8YbKS/wBCu57NQLi2UXEbADduVhjB9ayqaNWOea5Z3PcvEdrJPA6SqPl6KAR1G7+tZegoAjxEYZD1q94Z1hfFXhXQ/EpOE1awgu1BOcb0DY/Akj8Ko2jvDqdxDt+UvkfStI7GdR3ldHb6SxZSo6KMfpWNqLGPVU9D/jWtpLulu8ojrM1kMs6ykYPUUzsjsi1bSbx5j9KqaoyhlIHFSwTARYbpmqV9MsmCvagioXbCTe4AGAOMVZ1gIkFvIeAl3bv0zyJFI/Wq+lLuQSNyc4rRv4Vnt40YHBnhz/38WgqKvFFzwzD4euP7TGrvawyicoFkn2MLcom1lGRnLswz64FcvfS3smmaUkkknmSXkETkgKWwM5YAkBsA5xjnPpXSmN4ZHC3DKCxyvrgjH/oI/IVR1VPOn0dGfd/xMM89SRDJg5rZyi4pWKrzU4RhCNmi5dsYofmILM2T9KwtQurkvlmVl4ABAGBmtu8UEBicsRg1iXcSu/POKyOV3SsxftILmLygO+c5pVuY4sjaSOuQMCoV2lvn5P5UO2w59B0q0lYnmsYur3c08wjsoz6s+7hfzrJub2DTIpJLzUcn7xLuNuPoB1rV1WVGkUuoUdOOP5Vzs87Xt08MMKG0Q5+6OX7/ANKiegcyItMkt9Tma8V98SnK7UwD+grTnu47RFbL4dg5wBnoeB+VZsV/Mt0YvIk2qOMqaLySZ9sgU8qwJPblR/Ims3sK54TqfhjWviJ+0hFLCTbaNoOkQJrEzNjy3eWZhAp7SOCDn+FdzdsH6t06zhNmiiLZFt2qgGAu35cY7Y249wAec5ryDwdJ9rF8EUGe81K686QDBcxztEmT3wkUY/4Dnrk17AQ9nZx2xnBlOMeqjAAH0AAA9AAOgogVbm1Ql0rzPFZW7ElT19BW6kY0228xnA2rlj6mqWlWDWpM53NI/VyOMVT8S30s0SabZSfvpPvkDO1fx/GtGGj1Ry+p3MuvangZMMbfhmugtYESNcEDBxnpVbTdFjto1CncSTvb+8a3bSyhkXawz5eAyg9/pVpKxUYts4jWCkWoTRhgRnjDA8/hUUMsTW8kU2xFlIi80vGpUsCMHeQCCpbgHJ5HGedvxfoUVtdi6gjcBwCyhQoH+1/n0rLsFGn3I1KyyJ1AAlULuVemQXBHVhwBnOOcEioaVz7DhzFKhWTm9NiXSoLbRY1tori+lVELIsEgiLtuLAspcld2c7QWGeSTkAXYdVimgkQabJAYLfMcf2lo2UKGx5azAAHDvkhs/KNuOKo2kItSb/UtLjMly0rJOGEohG3DSLDuwFZ0P8ONpPHAxH/aekw+e6zm0uFd33ZYuCGxgxlR22juPlIB60PY/UIzQ68JvbsC3hnmNxGifaN4HmPhWikyx3KMAgnnkNzg4pPs6QMkltM0lxNEUlRnwB5aqqiPAUtht4x0Ax1GAC2sxvSWPzBHfSSM9wCQCQpDZXdjkYxkcdsVKLTS9Qh+12umldmfOnhIKK6qGZ5FwFx8y9OQVJ9QZWxoVZGdJfNaVI4Iwz7crGyu25XUSAZYHjt3Iomd9QukAjMcnlqyCQ7Vd0AA2sOh4IyMZ3c9Kl2m/tGjmuZJpIIwpkS2WN878vk5YkgYwGPG4dhTvs00AaC602SeUMJXgkIiLHHBAHzLnOev8XqOGSxLSWG4tFS70wnzEKxzM5dwApXPKsSCxPf8KyLmzZ4ClzZz4hEjwOVZWGTkA56qOfbn2rXmuLeScb4UgW5BAijYs0bFgU3ghiFLd1AHJHal0uzUzQIuoPvR4JWt2jVDIrhI2+Y5A5ZeDjhzgDGa0SViJvQ89vNOhczfaXbyHOZMklSD936jnp9ar3kl5KLezTyFFupYhHRDhiwIIYjP3j/316DFddr9oLK/liFtsRVXAzlWB5GAc9On4Z71z17YJcvuBUMnQbRnp6/mPxNUZXZVeG0mhkFyu1gSPO8wqGJ5yNpIHJPBGfU1NpyXdtEkbXDSpjAV05+ueppkUEluwhQyrJMcCQMGcd8k9+h6+tT2lzHOfMMu3ewJIzwTjg+4B/SqQ5bFqOZ3BiVsFDknHX2qaISIHeE48wYeq7l0CtIcAgMCCCfpU0L5OQQM+verRkSCZwMYb/vo0Um1v9j/AL6ooA9n03VfDGt+EtC8BWdtcC/a/s7ae3ZJVd1KlpZ4gWZtgUzdwAQd2A6556+/srSNaurDVGkvdIsUdtJ0eLc1vdnIRRgRIDDhmHT5/LYAlTzc8AT6T4W8SatfxPLc21pYSGB7RvMkFyFEY2AcOCInChwQpUZ+5XP3h1S/0uTUn062toIb0omoGPyzZhUjjVSc7diCMeWGKtg55LHPqzmpKz3OSO5HpuriHA0bW7hJpkklke1ba9zuDnZdIQFOd6nJByXBzu3E7cFxqmualrF34g1kLYXkctrO9ugS2ufKLCDETsn7z918hVgSTz8u81i2VpokfinStLvrmVtJeXztRmtbFYp50W2eOM5jZmIDrFxsBJkDNtADN3vjbxlfNpWn3S6fa6fLPapemaNFPlNlzA8TZ5O3zV5jDfPnaGGxCnsKW5wdxq7zyzRDUTAzS+ZdG5yjSkMdhA3GLylG9MDauQR0UBOs8I6bYXFvqjvN9l07SY/Nm2QhQsBaYSlFK7mdlACDAzvkIUNtNZOl+FNF0rw2b5ormLVr+Zo7ZLSMmVJW2AMhJz5O7ACqu0Pkdfkra1S0v/CXw9uLZL6x07xDql3bm8gFy3mCCD5VaOMgFSsjLICpIPTJFa0XbVmVT3rROVu9W00oFi0zf5aolrdXWxxaok+9iikcsVZUy4PCnHDHNe21Um3MNzbAGJFiWYKfNlbAbLsBhss7ZOc4PHSqln4U1XUNat7G1VLjUr0NHuaUL5ilC7blZsDIO4ADOVAHAKnqz4WGn+BxdL4zim8rmaGGAGNp2O5YYmMgRwFLEup+6UKnByYk/aSuWvc0Ot1fS9U0r4aaet8sSalqF1CRG0vmC3iTLqFcE7yGZvm6ATNnlQR45C1/o8putE1BIZbO1b7PcMMbbqKRwkRUfdBJYEdDnGMYFdVPqN7qlvaRwtLZf2fHMLfMIUKzqd8cca5VgMEY7hgSSea57WrGd71xqUMmmPJN5cohibyxJDKCihjyXZ45AQzE7Qp71nUqJrlRcKCkmp9T1PR/E+mXunW7/a/NmkX55im2KSbBLLx0GVfHT7vWtqbO4q4yyjaQ6jPtkdASMH8a8m0jXLtIpIdJmt7qxuYvsV15CKiyMSQ6EHPMYcHIxzJk9DXoejefHBHFv3wIv3STlQSTkZ5AOc47ZxXjYjlpS16ngY3hWVWMq2G18hNRtAY2khYxvgAYPHX06VkypLYMWkJfgcqBnP0roLj5gQuWUkYH8X1+lZOpyp57xLxtUEnuTWHOj4rF4GrhtKsWmYfiC+sLiM2n22BJwm/yy4Dkc9ic9vSvH/EgmvYbiHAYBtuwA/d5yTkA/wD6q9I8Q3CGNll2SFssF6Z9jj6V494ymttK0K8vzFDFnJYR/ulyeMMUwc4zznsKxm7s8qpRk7Rj3PSvgLIt98KtFtXmWRtOkurNtuRtEdzIEX8E2D8K6O9h+z6yjDADj17ZNeY/smx6rZfDmdNYMyi91C51O1ikUhktnIVQSeeWR2/4FXrOpRpdPFcwlQUIHHOOa3jsViKLpy5Zbo6XTiqWp6YIHQ1j6+7LIT2xxWxCqragKMD/AOtWXrCGRMntg0wd1Ez4pmeEDPPQ1Zt7BZxh2xznFUrQ752j9G/pW9ax4YED2rRJWI3JLa1EK+XGe+aszxM0aLgYEiMeSOQcj9QKI8q5Kjt+tTRfvigI5LZ/KnZG8ditLLCsnzSZc5J/M1UuXe41nSrdOFUXFzx6oEUH/wAi/rWtJDGgy0a/lVGZVGtWkigYhtJ0cDsJZIcf+ijWb3M22noPu8btg/hPP0rMaAyTE5+UnpWlKPnJbrgA+5wKzpTNEcgZGeKI7mcyvLEI3IXtUUkgPOOg5NTTmUANjBbrVWFnNwUY8Gt0jF7mTqlot/KqwvggYJqGHT4bRNkQA28HvW1qGhF5kuYbvyG4HbaRn3rm/EWsQaRM8Et5CW7bTkmom0hErkQljGOSOTXK6/q72zAFsuVIUeuWUD9Tn8KlHiEzuQM4x1PSuC8X+KIrUzPNKsjKhMcajOdpyc/hXNJlwg5uyNj4NXyapFJqXAik1bU+FO7btvZgFz9AD6/NXv8AZ29tLGtwtud78kucn/61fLf7J2ppqejaxocpU3Wj6s7SJFwDFMFZZCPUt5in/dr6r09WijCEAd8AdAen6U6Z0xotOxYZpCvlqNqgc1kSW8S3AeKMbs8titmUDAHqcDg81QumSEO80qRAcbpGVF/NsAn8a1fL1ZvSwdSu+WlFtkDRbMtkAbgfwqa0ZILmZEB3SYflsDnjjg56dBWLq+vfY7JnstJvdQkwCDtEMJ56b2Oce6q/0ryfxv4i+K2q28ttbazbaDbSKVSHTcmWTPTM0qhgfdAhrJ1eV2R9DgeEcwxbTasj1T4jeN/CHg/SHvPHnifTNGt1UgPeSiNpPZVG5m+ign2rwGX9q74QRzW9poOranrVxPKIreDS9FlMsrlgAgMxixklRk45INeWwfs3an8R9T1HXdW8YrFa2biMwzyPc315PxuESSOq7sH7xZjkD5CMke4/CD4QfDbwnA+s+CRf/wBu2CRLuugtw00plZCUngQsB90qFUYwxyeGPZSpxnFSZ7GG4bqYOu41ejO81XxBftpS20kBgM8VvdzWzx2+Y5JIwMSFWbaSCowSch+2AapIuoSzW8W0I8sEcLqAEfGXIJzu5IzxnnBJ5xRqV5q+l2sn9pGe41QxJKfNPll4WEbBmPEikZTgjcVK+lTHUG1NbqeJmjTMsyoJ2ZY/nBYAsFIAZjjbkgZHdskopOx9jSXLBJMtaBbLe39zYDSDbmKdRG5mQpMvlgrIB98Z3AcjGMc5zSyB1uIYtPtreRlR44jGC0srHyyyE/Mo42kHjB6AdTnW+s6rcfar+G1ivbe1kE5KbUYrgF1DMwyAr9GXjaMdq2dfadGi1CydmkUxtZwjyzFHhhhcjqN29SDkfLWbSOqL0IdP1EWmjXcTysUv1AlBdlkVedqtleRiTGRwQuOmaZcyaxq1wYlZ5oxCr7UCtKz4GVRvvYwdwBbBY/KpOaoWUlxZQRzTXjqHCqEZykTEoylcBWHBOOR2GATmrsog04fYVSKO3mMckiLL87Dby2ZCqkYZFBXGTnIyvBZDL9tfandtb2RtEu7clXWREyypudcMu0gAFcjcT94HjoGX39pS2sunz+Hbpre1V7iF1tWQbeCqMcgMNpChse4OVBAJLjSmjt1sXi+0RZhku0lZZ4ht8tG4xnCp0yMN1601NTmvDfWNrfWkEpVTb+WAgbI2lW8wgKNrbwoAB2NymMm0jGT1MbydxFrKLdVuLdWE9w7uiEjjacgluPu5PXoBlhlX1mbK4KSxsNhzk9xjHIwCOQRggHjkCtuee6ginWc4ihnEckZKeeu0h2bapwVDLyQPkx/EMExXRV4J5L6JDeXPOYsmJ87WMmVO0Elm4GBgDAHSghmJcrDEkdwACTncUBHXHpx2FZkqwW9rJIzshfdIMj5S5DZ6cD5eeewPpW2YYw0kDsyQbiQSfwH8sVlahI8Fu8aTCNywSRDsCsBkupL4QfJlsk9Ac/KGpMYtrM8oEtysQMjK5jDjI4UsDjjOSelXEwbmS0CPCuWZSMMzYJOOQeMAD8ayHuV0y/tLCWzaS3A8o3IjHkR5ZVIkYAFWBIGRkHaf4gxrdkguUkdL0XEE0XyyrDuQq44IxyBzt/i6Y9acdxSKDXKxsY2hZip2k7uuO/SircOgQrCiyWMrMFAZm1Bsk46n99RWpmehiyj1CJIrqCJdLnnIMtzKsMUzsuZZjGM/N80i/n71pWGtHQdBex0mWZZdTV2DKv7sWiEg+WhOze7LIC33gAuMd7HjHTNJuvEmrxaRd21tHG4aCJFb94qoEMY2o5Crg4wAAMAcDAvfDl7y41u5sUitoLuSzltoLm3tQyxOxRmdgEG07QACRjOMjk59C3vHO9roy/BujWKaxd+IdTCw3Hh6D+0EBJf7QqktkO3yr8sO443EFQf4QKS1sdf8W6nqf2EwalcOXUR/alZlgckBwWP3EI2nPcKORnLzYX91Mltp9pdS29jeiJreaPyN80hBKyY3LHIAW3fMGA5OE2baF/ql1H4p1y3tdNj0YWjjTtlo7eXc7CA5YqT8mWUMTyDCxwRgDV6Igu6Fr+n6SLyHTrOOCSWxktLiR1yRDI5Y7fLbJ+Yna+egXvkmr4q8LeI59L0y+1ZElbyG8i6luER1QiRlQsRgZ2ucEjtyelb0PhzTzpCXptY3lttQgM0EkLRtPA0QdYtqlQOcNwOjjGBhRW1We78UPNqet3bWsNsnmpAWUQWyYUOqqTjHKLnaTy3NS5WViUveOXm17QPD9hpjpZ75dRZdPMb3KBzds+VByoLRIFO4nBIQEk4Brrf7VtrnSdO02K4ksTp9ulrFFMFI+0KjySvv8zALMJAVwcgKSTuqPTNOm0GysdavlEej3U22SN/uhWkxIiBD3XzDn7xCP1GSE8fTeEb6DQ9UtLizuREv2ZGs+H2JyScgsVPByGyVfKnhmaW3ylrV6nMeJr1AQbFrlLaOVXubsNsduiqBtb5l2gt2ztOeAQ2loa2HjO80+efTLW+WAeZHgEs8aSGNZyTxGWEjMGPyHBJC5qKbTNN/si7stagv3mjWSSygIVPtByWaN2VecfK3BxwQOStSaXYQG2RbZbyJUijDxx4VpGyCQSwAIy/QjHPqM1ldRdzotzKxt+OYdEXUNOeyhEiRxwwR+XIpLYLmQuowADvAJAGQOPlIJ1tJkyEJYEgYOORnPqetchqdmGvtN1PAZbhG2zmERtMQqDkd8KF5/pXT6c4SMGI8AkA+vJrxMxmnK59FlUHGDRrXbRGJt6ZJIyQcHH4VhajpcsjyTxXRMYGArx9D/vD+tXrmQSqVduo7cVk3V4YQVJznvntXkucu5WIyvCYpP2sE36HC+JdKv4o2lUxSu4bOxwSq+vJHv2rxrxLYXPiXxno3gq7s7hLG7lZZVjMbNJGiGVujd/LxnqM8YzXuHiHVXK4DvjlfvnpXm3h9L7UfiDdX8F2IlsbB135O5ZZWwgXkAZVJFJz36dDW9KTb1Pma3CWBhU9pHc9J8MR2cOrfZ9Pie2iW3FsYnywJByNpycDBPHrmutt9CmnLMW2KWLY9Rnj9MVwHjvxZqHw/0eXxo0fnWmmm2luogdzbGuIkcDj+68w78qOea9V0fxFoOsaZbalpd9C1tdwrJCwYHchHyn8Rg/jXcpJI+B4qy+NDEqUFZMS6C29uiRjovJ96z5k89GBH8PH1q9fXCbNoIPoarBwkJkbnjAq07nyk1ZHN2J2X0gb7wPNdLp4L8FuprmCDDrEuTww3YrpdMwSD3p3ZlHc2obdFVww5xmq1tJGl0oZhwGbn6VZUE5z3XFUNLCT31xuwRGhXB9SRzn6ZH41pF82hr1SLt1LbtgK6884B9qzgFGs3o2sN2nWjDP8AeElyf6CtjV7K2sNCs9SRFaQvb+YGlVQVkIDDPP3Ad5AGdqnuRjMkZUkZ1GSYUjZiwZhguQrY4yN5HFOpTcbDqUnSfvdSG7kw7YG3r/Ouf1jUbuzgMqqZOeFAFbM5UiTcxO01zOrJfi4+eXfB1QYAI/KsnozCorGVJ8QJ0UJc6RIu1sE47Ug8feHzJumuY4XHJV2Ck/matJfaTbqz3ylcHksuRVS48Q+FIwzxi1Zj32r/ACp89jIy/Eer3viYwpp+pCC0PBaFgxJHbv6iuYTwhKkzST37TszbgznOD/kVleOfibNHcJb6HZGUx9CkOBuyeOPbFc5F8TNYT5brTZpbhufIjjOR71lKeo+W5297psNlA8k9024Dqh4H+96V494xvrKx0++uXuVLuSseGPzHGDj2wa3NU1rxvqtu89zposLLnJkO0H2PevF/GmuT3c7QHbth4CjkE5PI/wA9qhO7PQwdLW7Oh/Zn8fx+GPjPNZ3Ukcdl4mjFtLufaq3CEvEWP08xQB1MnOcDH6DaSZb21ieyj8xFjVd0gMeSB3Jzk/QdMV+V/ggOPiR4YeSAMv8AblhI2Rkf8fCZyOnQGv1X0TUFjsIHXzCyxqnDHIAA4+ntUVZezs0ff5Bw9h8zftKuljSj0qZkBu5/KU/eSMZL+2f6jFVp7GxsmMkFqqvtwHLFnA9NxJPrxnvVsXfmDzApQ/TBqjdXJYlSe3WsHUu7n6JhMmwuES9nBX9Dldeja5UiNyrDnI6/nXlvibT5nnlkuSzKoVsbiBuBOGHoff2Fesaq6IQOOa8x8bzlUfy+5wacXdnpqHLsc54Hh1jVJNe03S7e8MYZLuSWGRcBo0kfJDOCdoUsQBzheQQAe6sPDmt+DLmbUfFMkehpdQOFijWOa4uQihhIu0tsG9MbiVIGAZEDB24b4T2V1rl/qelWkcFrczXkHl6hNP5CRKA5Ylz0KssZXGWBbIAIBrvPCnhpjr03hj/RNRazR3u7uS8CQxeVM6SOkilWi2hQBlCcOSQwOK9vDr3EfNY7+NJM5bW9Y1zxBquq6ze3+oGG5uBNcG1leZXXcn+rVwAQrSIgYHAEWQSpBNiy1b7XploskBt3s40imXyljSUEMD93Bxu3Z3EkkE9xXTeMPEV3rd+bu2srmaznjm8qCSRl+yE/eEkTbVXzEKNxvZj8x9uXX7NYgRDaIkCxOGBCtwAoPRgfnGG4A4LZAqqiRzR0RZvNOt7RF0W71abTree38xRCF3ZOHBTcCAMqx9CFK96txXWq3iahbsXeLTLeJhePIZWCM58xPlGxXVgTwMfNkAZrHjvr3Wbx21dLUmztTAqRSsVYJiRGbJyow+B7rmrOn2lvCI40sYJYUCS4nfgHcTgL9GXn2rE1TZaikSwniu4I7gQyYtpEnOQqn76hsAkAjHbpnqSTbW8vYLoGwuV2jYkasPMG1OEXDdew5z19hWdeS3Quo51tUW2jbJijjxvZW27z/ezxyeTirUytbROYooIpGZi1y8YPlFfvdeBkc9gOvHLAC7NGO4tLmFn32rJCWLCNVMnmk5JKNnBK+mBjAHSqv9oNKt7fN5CRJJHhPsyK7EDDBkC4CnJG/B7g8CqdrLa2sVzfwCGURTebK4hUF8r1JxkDgjjH0B6aPmRyMwgt4pb5HEqzmeTGMk8DO0Aknnn0xwKANG+ido4pBfajDNLzmNg0sQ2gCVHjAEmA7DpyQAOQc413e6nb2sZljZU887wuXhhZjlox82cDg9O+TkljVhdUurKcXJiZY33KY1YqYtoLApubJGWb5vlXJ45HGRqFzFbGe7dYJfOTmUIGXKjIZSCQMhWzgkZyetBDG3DhpkRUZyyPkMQMNknI7Y56H3qK2eC1nK3sazlth4GCCDkEnvyAfTgelaMU9rBG99JAkoZxGqyMSsQPVh68ZPPpVaaWSW4FxgBlVoiAikSD+EDI4wd3SgpGY+lWun36iGaMxtuZY3eNEhTaV46Ho7n0+UelW44tXj0htSS3W6jhnewdreFZZDKAPL+6RuDOQOoPfPNTXNkba5kuIkdEAXersWQ8c8DnOSaqW0NoyP58fnxk7kMsP+rwPlw4AJAIBwzdcngEsABH8QWhdjLcyq5J3BkKkHuCPN4+lFK19cqSsJuBGDhAFiwB26zA/mAfYUU7sLI9VglgS4jt4rNrhWjfYjMc7GdS7oc/OFXKg8HJyd2MGaPwL4k0jxHf+ILDW4oGIS2ubiJ3H2do4i7bZMkhFSNi2FwZZWUiQRBRt2KTS6xqd9aaLFELe1aOYpIJI7VAPkjcMDh98URbOSqknhhxNpFzZp4e1DVNN0u+GswX8azS3KyRgIWZBG5LkyKdjOwXCh2Hy8V68FZNs8691YxLDSPDdz4V1bSNbXUJ7jXZp9de7WUmQXAMTqAwb93IJVVjjA+RQfugBbb4e6DBYzQ+EbBZNPjs/KUzXKu0KqiuDIzHcWLr8nOBhlGFyKmWxFwXvZdVhR4wtukckABkLbI44iykYwqhS3PI9ck0Lu416we1S3Zo9OS2gRY7WYDDbl2o27O8x7pOW656ZGaXPctQdiV7G1urLzrKBJFSRnidJCcfOgQ7geWA4PPPOazEWZXudRm8rzVXb5hnYSsrbm8sIMNjeueuOSAM1rQHUEs4biFp7q2hlVflhdVU7iRllztGdnLd+3zZDWS31a+jU2scflhJJGedEEUwZdhy+0HEm5ivIGD1xmsZJtmiikMm1/WPEEiR+LJrlzKVlsxIVjWNQyqPlVQHOd/13HnnFV2t7qPcsEcc/lEvFGjGPf8AMF6A/KwZkA7gO3OCRWveW8tnJbXOrQlxJayNZQ3E6ny1iyApO7/VBtpYLwgViAdxql9gv1uxfWtoqC3uUnMO0nETYbGA/wAigMDk9Qu7g9DVaFqKJLJtPnuNjeG/tl7JE9rZxea0mSrkl9pyQ3yKF5VWwSclQRW00xacsE9tM6pfTuZppbYyIFYg7lXcVHX3UbCcj5iKX2q/ju1ZWngDwt5Els4Vg27PyHJZXCqykk8byRzzV3xFpc1oUk02y+zyWrlTPEQ+XdmPl5Jw+3fEuPxznmlNWhdjpu9SyK2q3kU2tLZWtxLJbWamOJXcsUIYhuTzztBx2zjjoOisZGCgFvvfMeK4iz+3SahJJfx+TOr7JI9oXaR2A7YGB17V2NudiKQP4etfNYmXNN3PsMJFRgrE91IF5B5rntXuyobnkDirt9qCqSGfJ6iub1a/VwcN1rie50z2OY8Q6ksdrJLKzbYzubb1x/kVn/CmCMQ3OszBmur+aURTAsipApCKGK9ywlYf71Yfj/Uzb6bchN5eRdqbRnJwTjA/zzXpnhuzs9N8NwadppkebShHbvLHKfLaSLcuWVWAJyS3I/iHtjpoxueViZJSMzxrY6ZrHgLxHZ2RmZL6zut0TKctKm5wxzzklcj8K5/4UNa6dpUOlay00enxRKYJoeq9guB2AAr0CC70+OxllvJHmuoYPmTcf3qK3Iw2egbOR1xWF8M9MtPKW0RxNFEzKjE5yBxzXZax+b8awT5JHoFidNe2Mek3bXELHcGYksDgcHP0/WrTlI4lVjjPWoTbwaV89tEvzHlVGOaku5YmiR9uD1IrRbH5xVVtDB1LbHqkb/wuuM/ia6rSIVxHkZ+XNc3rLRsbSTZn97jPtXVaGm6Ldt4/h9hWqSsYx3NBPmcDsCRWRoIM91rB5ASQIvpyQSP0FbgEMKFi3PXHpyOaz/CkDR2OoTPnE9/K6EDqgCgfyNNabDbdxWtrUyxzi2j3Bvlk2jcvzDgenQVUt4mN3qmUxi9QAZ6j7NCf5k1pyLhiVz7cd+v9KpJKouNRdUys94WQk/3I0iP6xmm23uEpyl8TMuSa4e8uYnCBdowPxrO1WQwRgyqpxzxViCQyajdOTlS2B3wK5/xNrdnFcSI8wIQYKjqfes5kTKs7W9yTgowPLBgKw7vwT4e1hm+02pR+qtFKyEflxWNf+LtHt3Z98iHp1BqsnjueZTDpTMpI+8c1lzLqZlyDwN4a0bzZLueWZt+QbqVAFXj+LA96yNa8d+APDzyW2mpFdXSc7baPdz6Fh9Krz+FpvGdzJcazfSzxhABErkJwSenrzVuLwXomiQp9msow7Dr3zUuzLTZ5tq6+L/HUjNdMtlp7cpGD29Tnv/hXIaj4CtYHwIPNdeCxJ5r3mTSGCMscfPWse80OG0ge5uSoLZwppcr6HVha8lNQPArbw8dD16x1QxgfZbyC4U46bHz/AENfoV4auIxaR7gQTzg9q/OH4wePorec6JpEoa4UliyYITOVx/Kv0B8PXby2tvKr/KyAj6VhXi1Zs/YOC1KNKbmdnLcFslW6cVQuZ9oOe/elSXI61n39zsiYHnmuc++itDO1J8oWPzEdDXlnjacmN9x6ZOPWvQNRvAY/lOOK8r8bXDbdynJLFR7+tEG+exo9ix8OdJubjwnf315FNNpLeI/7Nf7PKUkWZoIZA5UA+am0MNvYkEEd+r1bw1qkVo03hC8XW7cB4o7y3uWaZSVctHKhxKswMeQQCoIU5Gdo89+FiW9/BfxkXEs630pggjl8pWby4iAW7g7cdRggHPSvQ7XX3a1m0XUBbQR6fHO1nHNL5sUk6szvKRG3MpxJjzA4bb827pX0lJWgrHymO/jS9TofhVZeIU1O9sbvQxfabdTpHqUeoxxQm1Xc22NYXxvL+ZIucZDCI/dJFc/qWkaanirUNHimvraxEaW8Wn6rcKssMchVVEYEYJiMckfGT0kGc1tadpU/ibT4k0y8EM0zfZZk1e+jWGRvLGHgyi7yoREIRTIp8vJ2nin4mGu3c+m/2hby2c0OnwWQhjVWYQokmMyBzlhslLNgsGQnkJkaSSscSepgXT3NhdAWdkga58ttzRqzeTt5eQDAZVB4xkk54wBT9OtoraZ1E1xMshXYrc5OSobBwFyCPlfb93vSRPaLNbb5hN5WWG9yVlVWyqsMlQMNuKjsQASACatnryajNcI+7Tb63lMTwbmKowBGE/3t24HOMcdq5XuaFhfttsnnwwfZRIwEIc7tuM/K4GDnkcYB5ycjBqS1mbWb+9AmmdQ8cqsAN0kYwAu3hOoPzdckZ4WjTtG1Z7a6muJ7TFpucRq5jlfchDuqjglhuGRjt3ANUFvCulyG7eQwq5dY5Ilj2kuQxAwQTyWxjHTtuBQF2wexnjvLc2bqXlUwGKXEUaZxiQMCfvEHHIxgetSQzRRQS32oak9tbwRI0gZgwjKkjdsUAA5wDwCQBgg8NQJguNJt9Ws71YfNhLG4xII5AzHaNrMEzkOPX1Gea3NMupZbT7GZYI2unxHHgZdywLZZnUlVViwIzjLYYDJWgItY1aGZbTUBd7TBFG12yBZFyS+5T8u5TsEbcYPABwdwrLFu2n3L/wCjyANAHEckjNneuwkq3A6sOnv1ragsobaSc3Th1Xes627FRGQQPmwck/dzu5wrcDmq2qajZfaCWv5Z5UKmJp1zM6BVby2HQKAxyx53JjIG4hMCCwsJ0820LrM6zIiq4A+8xA474O0fiaRFt9scz7kKkE8dBj7w+vX8au3KW5igv0vd8joMgjawfzMLnGOcAE9MEkYGMCN2gkjEKozKyJuY/wABCgY/SpZSHt5MVu0ySSsmAckYLDOSPyzWbPArst4FEEUTRhiYA7MQysV/HYR7bvpWlZyq7tp1xCjAjMT+YRu4I6e3NLdRzJJGVMcp3h0Vo8byDuHHI7Mf+A0xMbHoXiy4jW4spo4beUB4Ytn3EPKryewwKK5kDWUASKxuZUXhX+0Fdw7HAPGfSigR9IeEFW28MeIUt1ESnU9QgIQbQYw9thOP4fnfjp8zeprlLZm8/wC8fmuJ2PPU+U5z+fP1oor2/sHnQ3JPHkECaM2yGNfJsLaaPCgbJDbwMXX0bJJyOckmssOzaToiMxK3JlaYE8SMHGC3qfrRRXMjqWx65Dp2nxeDbCSKxt0eeWyMrLEoMn3B8xxzwSOfU1y8MUen+N7hLCNbZRrscIEI2ARh8BOP4cE8dOaKKYytrpMmq6i8hLNHqBKFuSpM0gOPTiuNttX1aO/0xU1S7UXltdLcgTsPOUGbAfn5hyevrRRU9SlsbsoDPau3LEqCT1IK3WfzwPyp1iqnzYio2HU3QrjgrtU4x6Z5+tFFFf8AhCofxjivDRJtLckk9P5CvQF/49FP+zRRXy9b4mfZ0PhRy+pE+Y3PauevidvWiiuV7m0zzfxgSuraRgkbr+BTjuPNTg17B4etLWO5dUtolEjGRwEA3MerH1PvRRXbh+h4+M+IowMyLMUYqRFeAYOOPJkpPg8S1pGzHJx1P0FFFdD3PzrjPaB6KoBvyCMjb0/E1S1DrIKKKtbH5xUMu/8A+Pe1/wCun+FdxoYH2JeP4aKK2WxlHcL/AItwR3JH6im6CzDR+Cf9bJ/6EaKKY2Vrt3EqYdvv+v8AstWPbO5tIyXP/Hxf9/8Ap8noooJM3QyTHfEkkjNeUeMJJBqk6iRsbOmfc0UVlMUjy2ZmN3KCxI3HjNbOhu4lwGIHPf2oornZmj1LwminTySoz5Z5xVO9/wBfCO27+tFFUikaEIBmGR3rgfimzJouolGKlYjgg4x1ooq0bYT+Mj4Lnd5LrUZJHZn3t8zHJ++nev1O+HhLeG7AsST5S8n6CiissV8KP2vhL+HI7WLoazNT/wBU1FFcKPuY7I5XUP8AVmvLPG5Ijm5PCE0UUU/4hb2LHwwd10m2hVyI55ZfNQHiT5ofvDv+Neq+KtN07Q/Eeo2mi6fbafA3hhZmitYliQyFZ8uQoA3e/WiivpKXwI+Txv8AGl6nGw3t5b6r/Z8F3NHaztG0sCSERuRBGQWUcE5dzz/eb1NdZLc3C+NfDhWeQf8AEhvBwx/hhudv5bVx6bR6UUVb2OSJk3ZM9l4gExMnlafqTx7udjLbZUjPQjse1cl4dmlfQdHZ5XYy3OliQliS4MchOfXJ5oornZZqTu8UsixMUCmMAKcYG8Vz1s7rfWbq5DPJEGIPJDPtOfqCQfYmiipA3tNd11K7t1dhEL6LCA/LyjE8dOpJ+prZgtbYhbw28RnitLt45dg3owhJBB6g5A/IUUVaAt+MpJF8TTqrsBIkW8A/ey7g59eOKztJAfxKruAzNcTxsTySvk7tp9s849eaKKlgUb0kWl2o4Ed1bqgH8IxGcD05JqzpjMbSDLE5TnnryaKKhlI2rD/VTDsMYHpVS8AjmuRGAoGSAvGOBRRVIlmJq7MmrXqIxVVuJAADgAbjRRRVAf/Z' },
  { name:'ઘનશ્યામભાઈ નાના', role:'બાળ યુવા મુખ્ય', photo:'data:image/jpeg;base64,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' },
  { name:'વિકાસભાઈ નાવડીયા', role:'રીજીયન હેડ', photo:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAKAAoADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9DaZ/H+NO2e36UtfSny5E33KF+5Q9H8FBPKC/fqR6jSnPUmo2iiigCG+/5Bt1/wBc3rzeFERPkr0y5TfbTp/sV5zsdHrCqaUh330+elpHpyVmbDkf5KSmJ9+pqAGp8lMp70lABUT056Hf+CgCu/yVVd91WLl6ou9AHYeD9HtoYf7Y/e+e/wC7rqazPDCbPD1r/t1pbK6aXwHNVG0yn0VRnykbuiVk+MJkTwlqj/8ATCtesLx++zwZqP8A1zokXCPvnN+CU2eFU/33rok+5WD4PTZ4Vtf9963ayh8B0GB42f8A4lsEL/xvXkP7Ydy8P7LWr7/40to//H0r1zxsn7m1/wCuleO/tyP9m/ZsvoU/jns4/wDx+sKpdI/Nf4bpv+M2kOn8FjN/6BX1V+z8nnfFfw9/19PJXy78LkT/AIXBBv8A4NNmr6s/Zvh874taD/22k/8AHK4ZfGejH+EfU3iebzvGcCP/AATpXeXP+uFef63Dv8bQf7d0lehXKfPXdSOCRGnyVxfxpm+zfBnxlN/1Brn/ANArtErz39oR/s3wN8ZP/wBQp62IPjfwenk+G9Oh/uQJV7UvufPRoiImlWSf3IEpdS++lWZI7P4CQ/8AFyNbm/54aHDH/wB9TPXr2vP+52JXlv7PCb/Gfiub+5ptnH/6HXpmvTfJ/wBs6/J+IP8AkYSP2PhyP+wROLv/APkFXr15TYbP7H/353/9Dr1bVfk0rUXT/nhXk9t8miQV51I9mqV9iV7p8B02eA9//Pe7mkrwt3r6A+CCbPh7p3+283/ode1lnxSPncy+A9KtvufP/wA86vWCfO7vUMOzYlWrNP8ASfkr0ap46Kvzo9Q3j1M/+ueq959w1IySH/jz2VG6JvgT/pnUmzZZ/JUcyf6TvoAtQvshn31Vm/48/kqZPnhdKjmh/wBGgoAkfej/ACf3Krvbf6NPNNVyF/neo799lnP/ANc6AK9sn+jQIlG9E+R6IZkS2gR/7lUZpvnfZVgSX95NNDs82VESs3zt8yPWh+5eGstHRLZH/wBunADesNj07f8A6S6f7FU7O5RKkS5++/8AfpgFtM/nbP8AbqxqXyXKbKp2ex5qsPN/pNAGtZvs/wCAJVq5TzpoN9Ns0/5bU7Z/pm+gg434qPs0qyh/vz15rqSffSvRPiu/yadCn/Pd68/v/wCN6uJA7Sk2Ij1cv/uR1DpqfOn+5VzUtibKzlI2iRzfO6VX/wCW0Cf7dXpv+PmP/rnVfZ/p8FIoj1ibzrzYn8FV5/uJV7VYU+0psqvMnyJTgSUZvv0Qvv3vUk2yo7b5Lb/fpkE173/651Hf/PeWqVJc/O+z/bqO8+fUkoLLE3z2z/8AXdKq22/yZ3/26sXLoif9tKhtv+PB3/vvQQdR4Jf57pP+maV1dcn4G/119/1zSusrll8Z2UvgPo96SmPTXev0o/Kxz0Uyn1JYL9+n0xKfQAyij+CigCG/m+zWE83/AEzrztH3/PXeeIX2aPdPXAwfcrCqaUienUUVmbCbPb9KmR96VC9RwzfPQBYemvR/H+FD0AO2b0qvNUiPsem3NA4lOb56p3PyJV53Sqty6bKCj0bQU2aDY/7laD1V01PJ0q1T/YSrddETnkV6XfTqiqyB1c58SH2eDLr/AK6JXSJ9yuT+KL7PB8//AF3Son8IRKHhX/kWLKt16xfCqf8AFMadWw/z1Bsc/wCMPnSyT/ppXiP7eb7P2e9ifx31mn/j9e4eKv8Aj805P+mleB/8FCLnyfghZQ/89NVtq55FwPz7+FFt9p+K8+//AJYaa719afsx22/4r6Q/9yCaSvlX4NfP8UdXf/qFf+z19efsrpv+KNq//POxmrj/AOXsTvj/AAj6Gv387x5AifwT13kz/vq425tk/wCE8g2f9dK7Cb++9d8TikN370evM/2mZvs3wH8V/wC3apH/AN9Olelf8s5K8p/arm2fArW/+m89tH/31MlakyPlmwTZa2qf7CUal8jolWLZP3Kf9c6r3nzvVxMUekfs3o76x41uf7n2OD/xx69E8SfI9cT+zTCj23jK5T+PUoU/75hrsvEPzzf991+R51LnxtQ/ashjyZfTOP15vJ8MajN/0wevK4f+QPZb/wCOOvTvE/8AyJ+qf9cK8z/1Om2Sf9M0ripHfVKM33N//TOvpL4RW32bwBon+2nmV823f+pk/wByvpjwNss/B+ibPufZEr3Ms+0fPZkegJs2JV62T783+xWTbTb9m+tqH59//XOuyr8Z5RlzPveqt++9KuP/AK6qdz/cpgSfJ9m2UPs+0vQn/HtTdnz0AO3/AOjU6Z/3MCPUiQ/uabeJv8hP7lBUSNPuTvUl5/x5/wDAKIU+R9/9+nXn/Hk/+5QBXs0R/I3/APPOoXtkd6uWafvk/wCudVU+d3oLKOzYk6f3Kx9m9Eh/uPvroNiPebH/AI6y7yw2PJsrSBlItW2x0d0/56VLUVnbPserWxEtn/26YGbDM6fPV62+eZKEtk+zbP43kp0P7m88mgDok+4+z/WUI/77fUKTf+OUI/z76AOL+KL/AOmacn+/JXCv86O712XxLffrdqn/AEwrj9jonz0BIsab/rv+AVa1X59lU7D/AI+X/wByrl+/yJWf2gCT/j5T/rnTbb/kJQ0f8vMf0o0//kJJVFSG6l895VWZ/uVYvP8Aj8NU3++iU4EyIZnz8lORNkMFN2b5tlSO/wC5RKZA133zf9tKjuf+QulOmdEff/00qO5dP7SR6AJLx9+xKjtn/wBA+f8A56Ub97/9906zx9gTf/z0oA6rwT/rr3/rmldXXLeCU+e6/wBxK6muWr8R2x+A+i5vneo3qTZ89Nev0o/KgRKdRv8AaigOUEqR6jRKkepHyzI3oSh0pqfcqhRiZviT59N+zf364nyfs0zw+bXbeJ/+QPv/ALklcLeW00yb4Zf3lc1U6qRJvehJt9Rw2d46fvpdlN+wXqfclrA2Jnemw75pqhewm+TfdVehTyU2JQBHcpND++/gqNLnf89XN6P8j1kzWFzC7/Y/nSguJYe52fPUdzqUNVYdNvJv+Pn5I6uJpVh/H8+ypKKM14+/5It9Q+TNN9/5E8ytZ/JT5ErPvH+R9lCJkesQpss7VP8ApnTXem6a++wtf+uCUXL7H312xOSQlNpN++o99WZEtch8V3RPCT7/AOOdK6xPneuH+Me//hFURP8An6Son8JUSTwx/wAi9p2z+5WzWV4YheHw9pyf9MK1IKmJsYPid/8AT9OSvnP/AIKNXPk/CXQYf+e+qp/46lfR3iH/AJCunJ/t18w/8FJpv+KA8KQ/39Vf/wBArCqXA+Jfgm+/x54huf7mmp/6HX2N+ycm/wCIrv8A3NNevjf4FPv8T+K3/wCnFE/8fr7U/ZFTf481F/7mnf8As9cUvjid3/Lo+gN/neP0/wBiOuqm/wBuuVh+f4hSf7ldRM/z11xOaQ1P468f/a3m2fBx4f8AnvqtnH/4/Xr33K8R/a9udnwx0i2/5+vEFnH/AN872qzKR4GifJVGf/W1ef5Kpuju6V0LYhbnrX7MybPDfiib+/r7/wDjqJXVa3/rtn+/XP8A7N6bPA2tzf39fuf/AGSug1v/AF1fj+Z+/i6h+2ZRHkwNM43xP+58H6p/1zrzO8TZDap/0zr0zxh/yJ96if7H/odea6kn3P8ArnXNSOmRm3nyWz/9c6+nvDCInhvRIX+59hh/9Ar5duf+PZ9lfU1nC8Oj6Qif6z7DD/6BXv5V9o+dzf44nVQ/Jsf+/WxZ/cd0rJ+48KJ/crWs0fyXrsqnmRKrp89U7n5Jv9+rFzN++Sqt4d+ypAsJ9xEqNPv1Ij7EqGHZvoAvf7FQ3Pzzb/7lO8759lQzO73jpQUSQ7PJo1L/AI83/wBv93ToUTydifwVDqT/ACJD/wBNKAJdP/1tQWyff/2KdZzbPnotvktp3oJMu5m2XKTJ/fqO8f5/99Kbc068+fyH/wCmdbRIJrD5If8AtnUdzNMibKm01N6JvovLb5OtIuJJC774EqSGFJr95npsMLokb0WEz/aakDU2bN9Ns/nf56jeb9zTrCbfQBwPjx3fxJs/uQJXNzP8ldB4wdH8VXX/AFzSuduU+RKoJEmlf656tX/RP+ulR6UifO+akuX+4n/TSgocn/Hy6U3Tfnv3dP8Anm9N3v8AbP8AfjqTRN/2l/8ArnUgQ3O7zvn+/VGb71Xnd/tk+/8A551Rmf76U4GQW3zvs/6Z1HM+fkp0L7E3/wDTOo5v4HpgRzfPC71XvP8Alhc1c+T7MlU7x99gj/3KALD/ACJvSrFt/wAekFUXffZ760E/484KUy4nTeC/v3X/AACuprl/Bn37r/rmldRXNV+I6YH0T/H+FD/fpKX+P8K/SD8u5R3yUynvTKCh6U56ip9AA9Mop9AGbr0P2nR3/wBj564nfs+Su81h/J0qevP9nz1hVNaRM83yVHDM9O2pUfk/3KwOkmd99N3+1MptAD3enI/yVHs2fO9TI8L/AH6kBu/5Kj2b/n+5Vp/JRKqvN89BRC8NVblEdNn8dWLn7/yVVm/ffc+/voRMj1Swh+zW1rD/ANM6dNsenQ/PbQf9c6a/yV2xOSRH8n3KheF9/wDsVJ/H+NO3+/61ZAIiJXE/F35/DcCf37uu3rhPiu//ABLdOT+/PU1fgLiXtHTydKsk/wCmaVc2fvqhtvks7X/rmlTP/rkep+yVI5/xC+/XtOT+5Xyv/wAFKZv+KV8Gw/376b/0CvqTVZkm8VWqf3K+Tf8AgpfN/o3ga2/6b3Mn/oFctWRvSifH/wACod+veK3f+COGOvuD9j+FH8Va3N/ctUjr4p+AMP8ApPi+8f8A5ZvClfbn7H6f8T7xDN/0wSOuP7R1y/hntWlTb/H91/uPXVTfPM9cbomxPFt1f3MsUEEG/wAySSTYlcf8Rf2uv2fvhv8Aak1XxvY6pqKb9ljp0nnPI6/wb/upXTzGHspzPYoUR0+evBf2w/8AkT/CFsn/AC08Rw/+Oo9fOWu/8FUdWtNTmg0D4aaO9qj/ALuS4upWf/x2vIfjB/wUB+IXxXXS7aTwno+lx6Vd/aoUj3vvfZt+bdR7WJfsJnvdylVUhd5kr5Ruf2tPijc/6m10eD/rnZVzWofH34uajNvfxdcw/wCxBEiJ/wCO1r9ZjyWJWEnc/UH9nuwmT4bzv/z31m8f/wAfrY1i2uUmd/Klr8mT8Zvit9l+xy+O/EEdq7tN5cd86J83+7VrTPjP8ZNJLf2b8RNcXf1/053z/wB9V8Lichq16sqvMfomD4goUKMaXKfo942tpn8Kzp+9+e7hrz/Uk/fV8faN+0l8XI7pLPVPG+r3UZ+/A8v33/4Etev+DPj3/bFzHYeJ4on8z/lvHF5L/wC//devPq5VVwx6NDN8PifhPSrlP3PP/PRK+sofJ861hT/lhaJ/6BXyvbPbalbWt5pssU8E88PlvH8/8dfUz7Pt/wDt+QiV3ZbD2cZXPPzSftJxOgRN8yJ/0zrYmm+zWbulZKJ/piIn/PNK1Ln/AI9tlb1TzzLRPOdHqvN99H/6aVeh+TelVXT99/sVIE2zfDUcL/P5KVI77Ef+5UMKbHR/46Cixs3zf8DqF9/2yf8A2KtW3zzVVm3vcz/9dKCy5Cn/AJEqnf8AyXMCPWlCmxESs3Xod8yf7FBAfch305/ks0qrM7pCiJVr79nGj1YSMmaq+/fC/wDsVaf596VGifJP/tx1RPKXNK/uJU14/wAmyqulO/2mr146b9lKYBZ7Nnz0WcP76mwuifJTbObfcvSAsTbEhp2m/wCu/wByi8T9z8lN03771AHnfiR0m8Sai9YNz99K1NVffreov/t1k3P+uNagaGlfckqSZN+z/rpTdK/1KPUk3+uRKCgT777/AOCjRPv3T/7FNd0Saem6bvTz9n9ypAj+d5p6pzffmq3D9+Sqj/fdKokhTeiU5/4Kd99P+B04/fT/AK6UEFPZsh/3HqPZ/oc6PVx0+R/+ulVdnyXVAAif6An/AFzrQ2fIiVXTP2ZEqxN99EoLidJ4MT57r/gFdTXLeC/v3X/AK6muWr8R0wPoiinulNSv0g/MBz0ynvTKACn0yn0AMp9MpfuUAZ/iR3TSnrhfk++ldx4n3/2O/wDv1wuyuaub0Bz01Hp3+/UdYHSWk2U7eifcqFKm2J/HLQBG9ORKEeH/AH6clyn/ADyoAPszulV5oUT5H+/Uz3jvVV03UARv86VVdP4KtP8AJ9yqdz9zfQTI9Ys/ks7X/rnRN9+q+jzb9HtX/wBhKk3+/wCtd0PgOOqLTaVKa/8AfqjMd/DXnvxaf5NLT/br0B/uV538Wt/2zS0rOp8JpS+M6C2f9za/9c6sfffZVeH/AFMP+5VhKj7JcviOJm85PGyb/nTzPkr5L/4KWTedrHgaz/uR3Mn/AKBX2RZw7/GD7P4P3lfHf7fOpfDrxD420i21v4g6ZZf2RYzefaRy77mSZvup/sVzVDppQPnH9nWFH8DeNbl4o9/9q/6z/d/267nw1+2p4Z+BT6vZ+G9PtvEOo3fyO/mbLZNqf7P36+TNe+I19ZW8nhvwhLe6PpW9/PtEm3faH/vy/wB+uDkd7mTfKfneuQ9KHwHsfxb/AGnfiZ8U72R9S16T7LNJvS1g3pHH/urXj009zcvvmklkpux+3zpU1s/36sARIc7Ln/vtKmhhRPnT76UalbfY7x7G5kj3x/8ALRKbZpeTTJZp9/8AgoAtPMjps8qoUR0+SWP7/wDqX/v1fNpcjTRr0UJeCGfybpE/5YP/APZVXlvUlt5rQjzI/wDWQP8A3HpAI77LZLC5tf8AlpvR/wD2SiGzMyOkPybPn8urSeTcw/vvk3x/+PrWhZw3nnfaYYvMnsp/9ZJ/y0/ub/8AeWlMuJhw796ed8+z/WVqWdzc6bcvMnmz2r/J+8/uNUl/oiXN495Z/wCpn+dE/wCeb/e2U7Sv+Pm6huZf3E9p5/8AwBankuVDnR1ngD4heLfh1qr3Og+ZewJsn+wySfJ8r7kevvr4J/tV/Dr4x3UGlalL/wAI34ofZvsbqX9zI/8A0yl/9kr8/bOHZ9l2fPIknkJJJ9/5U3JTbnTbN9SS/s5ZbVH/ANZ/0zf/AG/+B1x1cND7J3U8TP7Z+xmx3vP+2dbDpvtq+A/2V/2q9V8Hvp3w9+K9/wDatLeTyINVnl+e0/ufP/HFX6AJ5L2aTQy74Hj3xun/AC0RvuV5FWHvno0p88DLRN7uaq/8ta0ERP3lZvz+d3rMokm37Hp1snzpinTfdp1mn3KCia2/4+qr7P8ATHf/AKaVah+SaqsL75n/AN+gC4m/fsqnefO7/wCx+7q5v+eq7pv376AMuZHohd3h8l6ds2O9CJ5KVZZV2bHpqfI9TJ8/zpULffqjItaUn+k1NqTp9p2VXsHdLxKsXOx7mlMAhpump87ulTJ8iU3TUTY7/wAdICw77Ep2lQunmb6dP/q6ksH/ANG3/wCxUBE8jufn1K9f+/O9Zdz/AK+tJP3z3T/353rPf/XO9bRA1NM/49o6sOm+ZEpth9yCH/pnU1z8lylQUV3RP370Wez7NdUO42SJ/wBNKks/ks59/wDz0oAzU/5bvVX+/Vw/8er/APXSqP8AyzkqiSR/uJso+/NTXT7if7FOh+d0egga6fPPUOz5Lr/rnVp/uTvVWb7k/wD1zoAE/wBUlXLlPn/4BVNP9TG9Xnf/AEn/ALZpQXE3vBP37r/rmldXXLeCPv3X/AK6muOr8R0wPo6mIlS02v0o/MBlNepN9Ru9QAJUtVkf56k86P0oAds96b8/tVX+0pv7SSz+wS+Q6ffq550NWBR8Q/8AIEmrgUSu68Q3MKaU6P8Ax1xaTWf/AD1rmqnTSGulN2PUz3Nn/B89QveI6fJWBuSfOlO+zf36qpNNvqZJnf5HlqAJnh+f+4lNfZ9xKkezm+/9+odj0ANeo9nz1Y2e36VG6UAV3SqrpveOH+/JV599R2EP2nVbWH/ppVomR6JbQpbWcEKfcRKWpX+T5KirtickgqLe6VJ/DUP8f4VZkSO9ed/Ff/kJaWlehffrz/4l/P4h0uH/AD9+s6nwmlI6KFPkT/cp33Kc+xE/7Z1538cvjBpvwZ8AXvjB7X+0b1E/0Wx83Z5j/wDxC1jzchrGHPM+ef21/wBpLxR8Lv7X8I+CfLsp761TfrEEn760f+JP++K/LzxJ4iv/ABTfvqGtGO6vp5PMku/45/8Aertvjp8YT8V/Geo+MVh8ibWH8+6j+fYjt95K8sh3764pe+erShyA1tM/+3TzbXFtsmljKb/uV1elaa7w/votkH+sqOaG2g3200Xyb/4/+Wf916jkNTJSzf7833Hj8zZH/cqOzs5kuf3MW90+fy3/AOWiVsJ9mSz+zeVsdJP/AB//AOIqGJSdiyRbJLX94n/XH+NP+A1RPKLrVpbT6dA6RfPs8yCf++n8UTf7a07wvplr4gP9nyzSJdeW32Xy/wDnsv3f++qlREtr99KeXeiSeZ/10Sr1tDDpXiGC802L/RZ/3if9M3qZlRKulTXOl3jz3lrstdT32s8b/c85fvo1Y76VNDPJbf8APGTZ/wDE/wDfVdVqttc3L6pDeS70SSG6/wC+n276uTaD5N+6XMv+odE/66f3Kz5jb2RzNnZvbbP44EnSfZ/Hs+69dY+lTf23JbJdbEe0dP8Arp5f3P8AxynW2j7NkLxeYn76PfXSaPZ/b9VguZoovPg2Ryf9NEZNtZSrm0aBzdhYTJZvqtt9+1vrN/Ik/wBpNv8A49VO/wBKtn8i5tvkdLp7V4P+mMn/AMS9dleW3k73T/UJJD/5Dequt2cM1/Pf233Lq7ef/gDfNU+1NJUJmHYI/wDY6XP/AC306NJN/wDzzdX2v/45VzTb9H1K9s7+13+e7+en/PP5Pk2VY017DSrydLnzdl9Gk/8A31TbyF7x31u2hiR/keeOT+/H8v8A48lV7Qy9lMsWbo7wabfxRbH/AHEEn8En9yvuL9kX42PqWj/8Ko16/inutOj8zTX8z55Id/8Aqf8Atn/6DXwXcw/6h5vN8h508j/cX+CvRPhR4kfwr4z0TW4fnnSdI/k/5abn+euWvHngdmG9z3T9SE2bKzU/11O0G/h1KwSZJfvpTUT/AEmvN5DuJpnSpLb7/wAlVZvv/PVyH7m+spRKJof9c++qcPyfc/jkq1bfJv31XT53SmBYR6rwu7zP/v1YhfHyVTs/43/6aUARzQ/P/wADqObYkLu9TTfceqM297OrLGo/yU16k2fJRNDVEBbf8fKVem+SbZVO2+S8TfVq/wD+Pk0pkjkh/josNiJJvoh+eizT9zvpAWpvnhoh/c2Dv/cjeo3felR6lN5Oj3r/ANyCoA8th+SHf/00es/+OStDen2NKzYX++6VtEDoLNE/cf7lSTJvuf8AtnTbb7if9c6H+e5qCivsf50/uPU1ts/s2R3/AL9Q7/kff/G9O3p/ZtAGe/8Ax7f9tKp/wO9XPn+xon/TSqv/ACyqjId9+hN+90SnW3zvUmzZcvQBD8/7/wDe/wDLOq7/APLdP76VcdPnn/651VT77/8AXCgBqf6mBP8Acq9N/wAfn/bNKppn7Mj1cm3+d/2zoLib3gn/AFl1/wAArq65bwT/AK66/wCAV1NcdX4jpgfR+9H+/Rs9v0qP5KEd0ev0c/MA2e9N2fPUkMyO+x6ds+ffQBDs+em7Pb9KkdKNnvQWQ7/npafso2PQBz/jBHewSuJTZvruPFu/7AiVxqWbu9cdU6aQ3/Yp38fyVcS2hhqF4fn31mb8w3ZUmympUyUACO6fIktSedv+/UNO/wBiggmR6H2VFTHegkbN96jRN/8Ab1r/ANdKhd6k0d9mt2Tv/fq4BI9Gmf56jdKdMnzvUaff2V2xOGQ1/uVFU7p8lR1ZIV574/8An8YaXD/0zT/0OvQv46878Z7E8ZwXNzLEkEEaO7v9yNFrCt8JvQOof7+z7iV+T/7b37Qlt42+J2qaJpV/K+kaQ72NpIn99fvun+wz19kftaftFX/hL4M6vr3ga6ttO+1SfZLG7u/9dfI33nt0/gT/AG2r8hdb1WbW7/7fNLvef55P99vv1x1JHoUqRjzOzyu/9+uk8PaVbX+zfLskrNtktk2PN5v/AFzrrtHmsNiJ+9g/35UrI6zSms7aG28ma18+D/Yk+es2/wDs2pfJYRSu+zy/Lni+f/gdaFhpWt39ylhZ/v4H/j/jr2Twr8NIUttk3mu/8dcVfGQoHo4bBzrng6eFdS+59l3o8fzx/wAdXtK8JaxDcpv+eB9/lv8A/F19VaV8OtKh+/FFXVab8NNHhTfDa/PXnSzWB6sMhmfH6eAL9/If7B86Jsd/937r06z8Jaq77Etfngk8yRPK/wDH6+yv+Fb2Ez7Psv3/APV/9M61Lb4S2CbLl4ondP4/9is/7VgdX9gzPkdPD1z9pg+02u/Z/os/7v8A1kLfdrtrDwBNNZv9vtYvn/cJ/wBNHX7lfQk3w30re6Pa/wCv/d1DYeA7nR7z+zftXnwP88kclYVczOulkp87/wDCvbxLx0S1+RI3+T/bqxoPgybTZkv7mL57V03/APTRP4K+lH8GfZngf+NN/wD3w1XtN8B2c1588XyPWH9om/8AY585p4Deb7VYQ2u/zLrzE/3GesvXvh1f22yzSw+dEevrq28B2H9pXX7qJNn7z/vqodS8H2zu7zRfwVEczCWSnxvN4AuZr9Jktf8AUIkfzx/6tFSpn8DX8yfZvK/0V497/wC/X1R/wh9hsf8A0X/WVDN4Vs0TZ9lio/tUy/sY+YU+GlykMCXMX3PuIn9+snUvDE3hu8tZrP8A5YOjvX1omiWcO/fFvry/4i+DHmh323lJ/Gkla0sdKfumFfLPYw5ySw/bJ8T+G9Ng0qz0GxnntY/L3+Y/7v8A4BXUeDP2ur/XrzZqUtsjvIkflx229N//AH1ur5jvJtHudVg0rXpfsr7Nnnx/3/4K5nUrC88Pa8m+6ltd/wAnnwf3/wCB69OFCMzyKlWUD9MPAfxg8N+M5vszyxWt7HH+/SPfs/3/AJvmr0zY/wB/79fnD8Lvi1N4hubKHxVrPkajp0j2n9pJFv8AvfKnm/34m/ir7M+GmvW2saPO/wBvvkutL2JqWmpc73tP+m1v/fiasK9LkNaVXnPVN+xJHqrB9+Oo0S58lL/StU+2wTwfck/5af7j0aVcw3kKTQ/8DST78b/3K5jcuQ7EmqnDv8n/ALaVY+fe7pUMP/tSggr3j/wUbNmlP/fkp2pQ7Pn/AL9SX6eTYJClEQKKI+yrD/cT+/QiJ5OyoXd0SrAkTY7o9STfvrl6j8nYiPVhH+egkciP5L/7lNsH3w/JUiP8j/7cdV7bzoU2VAE0yP8AIn8FU/EL7PD17/1zq07/ADpWf4q/5Fuf/boRR5u7ukP/AACqMP3qtTPshqGH+BP+mldCMkdND9yo9n+k/wDAKm3pv2U2b/j8d/8AYrnOhGbc/ImKjuXf+zUdKdN88KVHf/8AIKRK1IkR79lmlV5P+PaOh9/2NNn9yiT/AFMdBkSWb7P++6mmR/tL/wDXOqsPybHf/npVqf8A4/P+2dBY7Z++dP8ApnWen33/AOuFaDp/pP8A2zqrs+ef/rhQA3/l3SpJv9dv/wBimp89nTn/ANcn+3HUlHSeDPv3T/7CV1Nct4Jff9q/4BXU1z1fiN4H0bspv3Hrmf8AhMLxPv2sVaEPi3TXTfNFKj1+h85+Zmps+ej599Yr+MLNPuWstRw+ME8799YfJRzhynRJM9Neben9yuZvPFszv/o0XyVn/wDCSX+/e8VHOVynZI6b9n8dNS5hd/JSX565eHxa6Q73sN8lR23iFHfzprXZ/wBc6n2ocpteLU32aIlczDbO7/P8lXte1iHVXRLbzU2Vn73hrORpAkuUSP5EqH/YqR9702o5S+Yqumx6P9uppk3pVd0epNIkif36N/tUOyapEh+SoAHejfTkhqOaF/4PuUAQvsSnWG99VsvJ+/vqF9/3KksLn7NqUF48UuyD79XAJHpUz/PUL/frBufH+jp/y63L1ND428Num95ZYP8Apm8ddXNA4uU3N+9KhrF/4T/wwnz/AGqX/v3UyeMPD1zD5yXUv/fuj2sCvZGxH9+vnv8AaH15NN8SWtnNFFdJPAkiWPmbPtbr/wA/D/wWq/xf3vu17xNreiQ232x7+LZ/11r5B+N/jDw3pXxO1Hxh4wuov7B8NRpdXUn/AD3vP+XWz/29qeZKyf3qzqz5zfDQPhj9rn4heL/El/8Aab+Xfp2r3z+RP9z7R9l/dfJF/wAsYlb7qV8/aPpUN5c+Tc3Xlx/x7K2fiP44vvH/AItvdVeWRLLz5vsMcn/LCFnZqi0Sz+dIYZfnf/vuuLmPT5TrLHw54etNNkntv9Y/7vf99/8AvpvuVk6J4es9V1h4YdLiSBP4/MrqIdKhSwd7+XYifwfxyP8A3K6j4e6J515v+y7ET/ln/wDF1y4mryQO3B0PbVeU7jwN4P03TbZHSL569I02FET9zFWDYQ+TshT79ddpsPyV8niq/Ofd4PCwpwNrTbbY/wDqq6awtvkrF01HT/brpNNT+B68qrI9elA1LOzTYk1ayWFR2FmkMKb62ERP4Kw5joM2HTUSb99/q6x9V03/AInybP7nmV2UMPz1l6rbO/iGDyYv+WFTKZ0YaPPKRTh015n2PXSabpqQuiJ/BTraF4U+eti2SFPneWKq5uciSObsLZH169R6kv7CH7lXLaG2TW71/NrQe2tnrCJriPiOLm0pN9ZN/ZunyV21/bJ/BWDeQ702PWsTnORuYa53W7BJoXR4t6V2V5bfPWDfoiffrelL3zlqwvDlPlX4x+DHsH/tiz+TZ/rK4OHVYdV0101KKXZZbPP/AL8CfwTI/wDs/wAVfTnxC0G21K2ntrmLejpXy3qVhN4Yv72Gzi2PavveN/uSWzffSvrsvr88OU+HzXDSoz5omXNC/h7xUl4/mo+/53g+5dwtX2Z8EPH+peObP7TYXUWneL/Cnkp9r8remrWcnypDcf8AoG+vkHUoU1WzS2SX/j1/eQf9cW+5/wB816Z+z34nvPDHi3Tr97qJIHkTTbqD/npbTfL/AOOv89dlelzwPMoVeSR+h2la9Z3+iJ4t0eKX7LPH/wATG0/jgdfld0/3X+9W5beTvSaH/lv8/wAn/LSuF8Jed4em1G5hv/PS1dL6eCT7kltcfLL/AN8um+uy02zewmdPtXn2r/vIP+maN/BXkTPViXNn30qqj/cq1v2fcrPtn+T5/wC/WRZa1JP9DR6NSTfDAlOmTzrOo7x/uJV8xBDbJ++2VI8KJC9N+dJt9Od/3NAcpDc/6lNlNtkdPnom+dE2VND1/wBigBz/APslNtv9VTn/AI9lOs0TZQSRvv8Akes3xb+50F0/vula15sRK5/xhN/xJ0R/+elKHxlHn959z5KdYIj3kKUy8/8AadT6Un+mQV1fYMonQInz1DN/x8un/TOpkf8Afb6q3L7Hd3rmNSrc/wByob//AI8ESibZs3028f5EhrSASK+z/RttRz07fQ/zvTMh0ybLZP8AYqw+/wA5H/6Z0Xif6HTZPvwf9c6Cyab/AFn/AGzqn2m/65pVibfs/wC2dU3+5df8AoKiSb9ltsodP3yf7lCJ+5p03+uT/rnUlnReCPv3X/AK6muW8F/fuv8AgFdTXPI0getw6DfpcpDeRS+R/fj+etKbwrpSJvS/uf8Arn5dbyPto3+1fofsj8wOLs/Dd5eTP/ywgST/AFj1oTeD/k/0a/8Anrp6ier5QORm8MalDDv/AHT1m/2Vqrvs+wV6A7/JvqjbTbLn7TNUeyDmOJdLlP3P2WX5P+mdTWdhc3kyWyRSpv8A45K7qGZER5n/AOWklTJs2fJU+yL5jgbzTZrC8+zTf991DM6b66bxOmzZv+/XL/fqZGkCTfTqh2U+sjQV6bs9v0pafs96ABEo2e9FOTZRygRuj0lSvsqKgBjpVObpVx6taVprza2kNzF8mzzJI3o5R8yOdmTzn2JFvd6jvLC5hT99aypXqUOlabZv51taxI9STeTcp++iikrX2Bl7U8b+wPMnnW0UrpRDNNZ/JNayoj17IiWyJsS1iqGazs7lPJmtYnSo9gVGqeSv5L/P99P79fn7+2B4sS002bwjeXUUGySbXL6eSPe93eTP/o9sv+7F87V+qlno+j2Fs8MNhF89fkH/AMFCPDyaP8UYEmil/wBK3zzySf7+1ET/AIBWNSPIdlCXOfJhed3F/P5ab3+Sur0rWIdNh/c/8fs/+r/uRp/feufmuYftLzTRbE+5BH/cSrGm3ltbTO7xb3f+CsTrO+8KzXmq3nnPL8ib/L3/AH/99/8Aer2zwTo6abCj/wB/95Xkfw6Szh/fXP793+fy/wCDYv8Afr27RJnvNjvXjZlVPpMopQ+I6Kzhfzt9dVpW9/uRVz9hC9dRpUPk7K+Xqn2FI6Sztn2JvroNNT7N883zpWTDD5yIlbCJsRE/grkmd8ToLB0ufuf6v/lnWxZ7E+/89czZ3KQv/uVoJc+c+z7lYSNTqIXhdN9YusTQ22qwXk33IIHd6dbXP/LH969YPjxLn+zX2f8APOiR6WVUvaYjlkczrfxR1K5mdNNliggT/lpVzwf8S5kvEttbl3o/8f8AzzrzXZsTY8uynJ9/Z/HQfp08gwU8JblPoqzmtn1K6dJd++NPLrS+0oiVxvhV3+zWv2nzd/kf8DreeZE/26yPy3MaXs6vKXpnSZKwbz532Va85Hf5JajmRHeqOEx7+2f76fPXJ63C+z567y52J9+uZ1i2R0euiBlI8/1W2+0w/PXzf8YIbbR/EME1/Yb7K63xv/wL76f+z19PXkOx9j14j8e9KhfR/Omi3ole3llXkqnz2b0uekfPtt51nvtvN3/YneD/AIB96J66b7fDvnvLP5H/AHLxyfwb/wCOuVm8mz1W6heWXyJ9Ohk3/wDPN1f5K2oYXsP9DT/nn5ifx/wV9VLY+K+2fpN8DdVvPE/gnw1r00XnwXWjTWN9JJ9/zlf/APeV6ZCiQ+QkP3Nmz/vmvCf2JNSudV+BUE1zLv8AIvpo0/6Zpv3bK94h+eZE/wCme+vn6/xnsw+AkdPkes2FP9G/4HV5P+W9U9N3/Y5PO/56VkUaSf6nyXrPmffNVx38uqcPzu7vQA2Z/kp3/LtUNz883yfcqxvTyaCyGaF3RHqxvRESqsz/ACJsp029031YDnuU2UW1z89U/vvViGGjmAmvPndP9iud8ePs02DZ/G9dFcp9zZXJ/EKZ0hsof+2lKHxkSOLd981XtH+e8Ssnzvnd61vDzp9v3v8A8866Z/CZROg/j2f3Kz7x/kff/HVp5k3/AOtqrM6PvrmjE6Ci6b02VXvH3vsqxWfM/wC+rYiRJbf67ZTv+Xl0SqsMyedvqSF/33nUEmhMn+h7KE/5Yf8AXOm79iSJ/wBM6j85E2f9c6A5SZ3TfUL/APHvP/10pzum/wD4BUc0yeS+/wD570FRJE+4iU2b/XR03zvk3/8ATSpH2O6PUlm54J/117/wCurrlvBn/Hze/wDAK6mueXxmkD6Neiiiv0g/MAoplI9ABc/c+Ss//XTJ/cq9N9z/AH6o2z/6Ts/gSgC18j2z1YRNkKJVdN6Qu/8At/JViF3dN9QBh+Lf+WFc2iJW54qd3vER/wDnnWLWMzekNekpXTZTf4qyNCSn0nye9LVxAKRKWigBlNf5Kkeo3oArzP8AJ8ldhpVskz2uq/xyQeW9ca9dJ4MffDPvl37KqBnVOieoqe9R7/f9a2MBKKV6joJJkRN9fjn/AMFFPElzr37QN7bPaywWtlGlpa74vk2L99/+BPX7GJ877K/Jf/go1YXM3xj3vaxeQlj+48v7+9v43rmrnpYQ+K7yb7TM83+38lSWMLzPshG95P4//Qqu3+i/Y3gsJLrM0bpH5f8AvfM1LpVs8L3u/wD651xnceheA7l0s/J8r+P79e4eFZv3KbP3n+3XivglHSzg875P/iK9m8HpvRHrwcwPqsoPQtNTeldBYJv+SsW2+RI3rc0376PXzlU+voHZWexESrX2nf8AcrLs3eZPnrWhs9n34q4ZHdEdbTPWxYQvN89R2eledXUWGm+SmzyqzkawI7CzfeiPFUevaak1zDbP9x08uuosNNeqevaa/wDbFlCkVZVFOEeY9LLXarc831X4S+deP9ml2f79anhv4RWFhMl5fy+e6f8ALOvXIdK+T54vnqSHSn87ZXX7P3DtqcRYqcfZcx5vbWz22qzw/wBz93/wCtCaw3pvStjTNI87Xb1/K+5WpNo7/wDPKuenGU4nn4+cHVueezW00NN3unz11V5pWybY9YN5D5NVynnzM28ffWLfpv8AkrYmdH+5WbeO/wBx61gYyON1uHyXT+49eV/GNP8Aim5/408h0r2TWLbzodleY/Eiwe80S6hT76RvXoYWXJVPMxkOelI+Q/EOzZdI9hs8+1hg/wC+U+/VHSvEiW2vJcwxfIkflvG//LN/9iuw8VQ+S7zPF9yRP9z7leZ+SkOsPsi/3/46+uhP3D4OvDkmfod+wT4h02bwHr2ieV9lvf7S8+OCT/lpCyfI6V9RQyPvT/rnXxb+wf4hmmTW7O5iley06Ty4P9G3/ZPM/g3/AHtjf3K+0oXR03pXjV/jkejS+Acn3H/26p23yeen/TSrXz7KhT/WP/10rCJtKI25fej1Hv2W1E38aVDcu/yJVARo+999WHf5Kbs2IlRzP8+ygB39xKdeb02f3Kro7vc7P+mdSIm/78tAEkMKImxKktneoUdEd6dDv/joKiWJt71wvxId0vLJP9iu8f8A1yJXkfxy8H6l4k8Q6d9g8ZanpH2W12bLGRP3j7/460pfGTIyUR/nrQ0F/Jd64G2+G/jlE/0b4ta4+z/nvHC//stWv+EA+KKJ/o3xVl/4HpsNdEpGUYnpELpsqv533689/wCEG+McP75PihYv/wBdNISobnwf8Zk+54y8Pz/9dNNdP/QWrMo9G3pvffVGZ087fXBp4Y+OSTbIdZ8NPs/6dpv/AIqpk0348Qv88XhB/wDv9QB1SfIj7KdZ73+R65XyfjenyP4X8NT/APXO+mSnf2r8Y7N9j/DTTJ/9zUv/ALGgk7j7Sm/Z/cjpv30R64d/E/xd3/P8ILZ9/wDc1dP/AImo7zx58SLBP9P+EFyifc+TUkego75/neqdy/nbET/npXDp8SPGDvs/4VLrn/bOWGm/8LF8SI/774S+Jf8AgGx6Cz0Df/o1N+dJoN8teev8VL9N6XPwv8Xp/wBuyP8A+zVN/wALXtptm/wb4qT/ALhtAHsXgZ/9J1FP9yuury34OeKrbxJeav5Nhqdq8CQ+Z9qtnh+9v+5ur0+uWr8RpA+lqZUmzelNdK/SD8wG016dTXoAr3jvsRKpoieSiJ9/zK0Ln5IarpC6TRv/AKygOUHd3tkdJfuVYtvO3/7FQwuiJP50X8dWLZ/3KbKgJHN+Kn/0/wCf+5WPv9q3vGGz9x/frnY/v1jM6YfCSed/fqN/76UOlEL/AMD1JRIlPpdn9ykoAKV6dspKAG1E9WNnyVC33KAKsyV0HgxHRLp/K+/XPv8AfRK76zhSG2jRIv8AlnWlIzqkj1FUtNdK3MCN9lRVK9NoJJEf56/LX/go1cwzeNoPs1/596l15l1BBH8lpbKm1N7/AN9nr9Sk+evgf9vzw953g97mzsItn9q75544/n/2Ed/7lcOJPQwnxH5q77l9Vtbx/N3vPvk3/frUs7b53eH50nkSpns3h1hE83z/APpo9aVhD5029ItiVxzlyHqwjzzOq8K6PNf38FmnyJ/y0r3bRNNSztvk/grh/h7oP2az+2TfO716NC+xNiV81jJc8z7HA0PYwLj3LomxP466DTbm2s9j3MuyuHudShhf55dj1Jpr39y+9LWV/wDpo9edKgerGvyHrWla9Z3k3k233P79dpbIkyIiS143beHvG3k79Ni8iD+5/wA9KdbeIfE/h68/4mUXkf7/AM9H1L+Uccw5PiPoyw03Zs2VsW2zzvJT/gdeU+D/AIu22xEuZf8AvuvTNN8VaPeJvhli+f8Aeb6zlhjopY7nOy0q2hean6vDbL4gg/v7KzNN1KG2m3/7FT6lcC41iyv5f3f8G+sa0PdPUwVXnqykdnNYQo+9KjdIUmqvNqX8H/TOqKal8+9/nrqlyW908+EZ3KWl27nXLkr9ytG8REfZWTod2g1G9uP9uo9V8Q20P35dlc+Hpe6duYV/Z1EQ6knz7PK+euZ1Wz2I71i+J/jBolgnzyxb0rz28+OWm6q7w+bs/wC2taSwfOeVLMInYXlzZw70+46Vhvqthcu8Ly/PXCzeIdYmuY3s7WWeB/8AlpJ8/wB6qt+9zZ/PNYSp/fqJYbkCOL5ztLyZE3pXJ63Zpfwun9/93U1trcMybHl3/wDPOSpPvpWfwGnNzny78TtB+wb7Pyt+z79eSpZzP++h+d9/z19SfGnSkmsHf9386ffr5xSwd7xIU/fo/wDzz+/X0+Dq88D4/HUOSrKJ9QfsMf8AIVvbO5iisnR/+ebwvdp/vr8r7f7jV9xJ9/Z/cjr5R/Yn8MXNnomqeIbbxRbajp11Ps8j7NseOZfl/wB5H/vV9TWz/O9cWJ+M0ofCTO+xN9Qwvv8A+B0533/JUf3HeuWR0yDZ871Hs3/JUiI/z06FP3O96sRHN8myqLu+/wD7aVcmf99VFN/3P+2lUBJbfPcvVrZ8m96pwv8AO9XofnhoArum2rSWybEeib/Uv/fqO2f5N9AFiZ085K8l+Kmq6rbeKtlnFbOiQJ/rN/8A7LXrWxHffXm/iqHztYnmrWkRKJ5/Z+LfE8P+u0axf/rn53/xNXP+E8v9mz+wbZ33/wAEr/8AxNdBCmxER/46bZ2zvcv+6qyDFT4hX++SF/C//kzUj+PJnT994Xl/7Z3KVrXNmj3P+qqvNbbETfFF870csSyGHxm6O83/AAi99/2zlSh/H8Ntv87w5q6b/wDpmj/+zVe8l3h2JFVW5hmR/ni/8h0csCOYrv8AFTRHdP8AiQ6uj/8AXtR/wsjQfn32Grp/v2T1Mlgmz54oqrzabbb/APVVHsivaDofiX4SR0+039yn/XS2f/4mm69488JX9skNnqnzvJ9/yn/+JrNubaFHd0iqrvfZs8r5K0jQ/vEyr/3ToNN8W+GIUS2TXot+z+OrkPirQdnya9Y/9/Urk/7Nhm+/FVqw0qzeb/j1/wDIVT7H+8VGpznRTeJNEffs1mx/7+pTYb/TZodiapbeY/8A00Ssf+wbB9++1i/79JTU8JaPv3/ZYt6f9M6OQfNE9E8JTQuk+yWKT7n3K6Df7/rXC/D3SrPTLnUfs38aJ/7PXc1zVfiNIH0rDc22/wAnzYqkf+49cSjzWz+cnyVrQ3+x/tM37+v0U/Mze2U16y7bW4XR/tPyf886vQ3KXKb4ZfkoII9S3+TsSm+cjojv/BUl46fJVXZvh3+VQBYhTzof31SW2xE8lKp3N+kKbIfnqGz1X99seL79BZm+Kt/2/wCf/nnWOlaWvO8158/7ys9fv1jM2gMoqXZTXh2fPUlAjulWE2PUP8H40I+x6AJPuPRvpzpuqPZ7fpQA56hqZ6hegCF/nuYP+ulegJ9zZXn9sm/UoE/269CetIGdT4SPZvpr06mvWhzDX2VHT6KAF/hr5j/aH8JQ+Nvhp4ls7y/+y2sG++kk/wCufzV9NP8A6l3/AOmb14X450p9b+Hviuz83Yk9jNvk/wBiuSud2Fl75+QviF0/thLmwl/0H/ln5lbXh7TfO2J/z32SVT8coia9OkMXkWUH+rj/APQK6bwBsv7y13/wRp/47XkYmXuH0+DpR5z2TR7ZIbbyf4ESrkzvDC7pTbb7m+poYZr9/Jhr56fxn1UPgK/hvR0vJnv7mLzJ9/8Ay0+5XcWds8L738qd/wDrnWKiJYWb76bqviR9HhT7BdRfap0/d/x+Wn9+sjePuHrnhu8hfTU/tKX7K/8Ay08z5EjqvqsPg/WLN4ZtZ0yf/wAfrw2bx54es9763rNzezpH5k+z995f/AF+VK1Php8ZvD15DdabpXheW9SCT/WXUqQ/P/sbq1pU5kV6kOUz/E/w9fTb+Sbwr4ytv+en2TzPkqjpXjnxh4eufs2qxS+Qn8cfzpXYXnxI8DeM3vbP+xrmyfTv3F959t8kH/A1rDm8GW147v4e1SJ0/wCeccldMoHFBx+yeweDPjS9tpXk/wCveevRtK8ZvqWmo7yy/P8Acjr5FudE1jQZvOfzUr1b4deJJryzSF/M/wCmlebiYntYGrOEz6Ms/FSXNtsv5fIrL1XW3/487CXfO8n+sq14ehttbsPJvIvk/wCmn/LOjXrawsIdltFEjp/HHXH7568pwh73KZM3jOz8N2F1ZvL8/l+Z5n9+vnP4i/F3Xry/ns9HsLmf95/uJHXYeP7+aa8Sws4pXeSuF1Lwrf2dg9zc+VB/00k+RI67cKeLjKkq0+aRxdn4S8beMJvOv5YoEeT/AJaSV614D+FHgnSk87VdeinevN4b/wAN6DbPqWvXVzqKWse+RIN7p/8AE123gz4i3Oq+Hp/FXhv4QXN7p0G/949zCj7F/jRGau+05/CebTjShM9wsLbwBcw/YLC/sXfy/ueYm+qd/olskLpcxef+72V4fZ/GbwN4hR7+bQbnSESTy3kntvkjf/fX7ldVo/ja502ZHhv4tR0i6/6ab3g3fxo/9yvPqxmelS5Psjde8JQ23mXmm/Js/wC+Ko6VN51nG9d8my53w/6xH+5XJ3OlJo9y/k/6if8A56f8s65jX4Dzn4upbP4e854vuV8vpfw/ap4Xtfnj37/L+/8A7/8AwGvqb4qfP4SvXT95s2P/AN818r20KTXkd5Zy77qaR49n+99yvbwP8E+ezD+Mfo9+z34S0fSvA1r4n02W2d9bghe7eD7kjqn369UsPv1xvwr0SHw34A0iwhlidPIST93/AH/467SzmTY71zVZEwiGx/Oeo/O/fPVj771T2fPPNWUSyw7/AMFNebZsSh3Tyd9U7ne7psqwB3+d6rw/fd/+mdTfcT56jh+SH/fegkmtk+d6mhT5Kjttmx/7/mVYT7+ygCvNvT/fqSCnXPzp8lSQpsh30AVbm8+zf8Drh9Sm87Up67a/+fYlcXcpvuZ3/uVvAgqon3E/6aVJbJvm2U6FPnSpLBN8z1YFXZsmqG8RP3H+/VyZP9JqGZPng2UAFsmxN9SXKfJvFORNltvei8T9ylAEcMKTQ7/79Q3NtD89TWf3NlRzbEhf/bkoIMm/sE8nY9ZsNsiffrc1L55qo+T8m+nzElPYm+tCwTZDvqr5L/PWlbJ/o1TKRUYjoYU2b6bDDvmerCJ8lNtkfY71mWaHg9P9Jun/AL8aV1Vcr4V+Sa6/4BXTb/f9aykaQPbn+5sp1m/34Xpaim+R/OT+Cv0I/MyR4fn+StDRPOR32fcqnvSaHzk/4HUKX81s+9P4/wB3S5wOgmmhmudkPz7Ka+/yfnrN0d99y71qXLo9nvh/eVUZBymbs2P89V0T56kdH3vR86JVAUNQ/wBbUCIm+rFz881R7PnrGRpAj+/TfmqZ32Psp2xNlSMh2VG9WkREpron36AIUfZ8lSP/AH6a6JQj/wB+gsa+9KjerDulQu6UAVYX8m/gf/ppXoX+3Xn+9HuYE/6aJXfb0StIGdT4Q+5UL/PUn36hd60MOUfTEo3PQlAFfW9Ss9H0e91XUpfItbWB3nk/2K+OdS/aH8W62mqab4V0HR7XTrqN4E+173mkRq9s/al1i8Twlp3hKw+/rcjvP5f/ADxj/wDs6+OfEnhibSrmCFPknnTzK+VzfMpUavsqZ91w/kdKvh/b1z5/+NOg38Oqu9z4cisfPneTekm9JKx/hL8l46P/AB/cr6O16wTxnoM+j6xFsvbWPzI3/wCeiV4T4bs/7H8YPpSRbPIkeuaNf29I9GWD+q1fdPWLZ/uJXWeFYbb7TveWXZ/sfPXEw/f2V6F4MmSwtkuZq82oevQ98PE8Om22/wAmK5+f78flP/33XjPjm21LVbxLbR/Nggn/AHck/wDHX0hqVteawm95fId/uRp871zs3w9m2PM9rc73/wByojVN5Uuc4/4e6J4b8N+Errwrf2Erpqkbxzzx/f3tWD4S+F3jNNS+36VpcWzz/L+1SSJsk2/7FeqW2j20LpbTfJs/56bK3rO202H5PN+//wA899dNLE8hhVwMZ/Canw0sLP4deG9XhvPC8Wt61r07vfSPsS2/3K4vxJ8PU8ba99vm0bSNLdPk32vnJ5f/AHyy16BZ73tks4Ytif8APSf/AOIq5NpVtCnnPLvjT/gCU5YkmlgeQ4XW9BsNB8KwaJNqkuqTwQeRHPP9/wD36x/h7bJbXOxIvuVe8VTPfzfY7b7lanhKwtrB686vV54nq4OhyTPavBOzyfOqPxU+z99/cqHwrc77b55am1t02On9+uPmPS9keYvcw2etpqTxVxvjbwBba9qr69qV/bavPPJ58EF3v2R/7Corba9A17TZkfzv+WdV7bTbO/s97xb9n8Fd2Gr8h5eJwxz9zrE2q/DrUfAdz4NsYHnj2JdWvyfd/wBivJ9B+FHjnQdKkm+y6RPaujxpH9p+ePzP9iverPRJrN/+JbLE/wD0zetS2+xo7/b9Glgf/noke9K9H64edLL4nmfgOwfwl8NLrw9N4ciurrVJ3e78z7ke6vL/AA94G8VeDPELvpt1v06d3/0F/uf8A/uV9OXL6b9m/wBGl+T/AK51zM3hX+1ZpHufng/g/dVy1a/Ob0sNyfCaXhJ5ntoHs/v+X5f7+P8A1dQ+MIXhTe91FdO/9z5PLrS03Tf7Bh/0CXyNlZ/iR/tltI7/AH64pHVKJ438S5kTwZq/8eyB6+dfhp4YvNS1iye2sLmd7Kfz/wB3Hv8Auvur374tP5PgbV9nzu8H/s9dd+zr8PbbwZ4Mfxbr3lb9U2SQJ/H9yvSpV/YYc8qphvrOKPcvDHjB5ksrDUtG/s5HjSOOTzfk3/7ddonyJsrxO5TW9Ymsr+aX7La/PIkEde2WCJNZwO/8aVyRq848bhoUPhHed8/yVHD/AK50qNIXR3f+DfTbOZEvHStOU4CZ0+R0/uUIn77Y9STfuZv9+oUf/TN9WBDMnyO9Rp/x7JTrx/k/36d8n2ZKCSaGHZCmynJ9+pE+589Qo/8ApOygokn+4lSP8iVDN/AlSffeoAp7H3z765FN/nTvXYTJstrp/wDpnXG22x0roiZSI7ZPneptNRN71HZn/wAfkerGlffd6sCr/wAvX/bOodnzolTXPyXj/wC5Qn399ADtn+jPTr9P9GT/AK50ffR99N1D7if7lAENn8ifPTfs3nTbKsWyJ5L1YsE3zf7lBBh6lD8/yVH9m2W1aE0KO/8AwOobz5NiVQcplvDs+/WgnyW0af7FVX+erz/f2f8ATOokA5/kh2VHCn7l6mmT5Kb9y2qSyx4e+R563t9ZOlJsh87++9aG/wBqykaQPfarTP8A3Kc81UbmbZX6DKR+axiR/b3s33pWWnie2ebZ5Uu+mzO9zNsT+Ork1mn+phtdm+P55KwN+VFzTdV3v8kvyPWol+lt8kMtcLNYXmg/Oku+B6mttbR0qYyK5Ttv7SR/+WtOSZH/AOWtczDeb6vQzVp7UzlSNC5+R99R7/46qzXNNhm3/fp8wuQm/wBupk+5UaVJvoESffpr/JS0u/8AgoAbs+So0SpvJ+T5Kbs9v0oAheGo3hq5sRKjdKAKtnDvv4P9+u6f79cT9x0dKtfbLnejvdb9lWKZ1D7E+/LTdnt+lc3NeJMnz1Ve8udmzzZfkpe1J5DrNiUeTJ61yMN5cwv5ySy76sP4h1J0+T5KPalQpHB/HiHf4k0jf/yz0qaSP/v9Xzz8RbBP7b0d/J/18de8fGC8e517RLl/n/4lV5B/wNXRq8V+IVzDc2fhq8T7/meQ9fBZr/vUj9dyH/cqZxvj+F/JtU0e1/0q1+eeT/Yr538VI9h4ttdeh+5dSfPX1d4q8KwzaJPeW0sqTvB+8r5d8eWb6JbaRDN87+Z/6FVYT+UzzCOp1Fm+90/e+W9ehaD/AKTsT+BK8z0197o//TOvUvBjp9m+f+OpxI8H8R1VhfwvM+z53StiwS5vEd5otm+qOg21sm/919+ussEeabekXyJ8myvP5j6KnS54GSmgvMm/7LE//bKrUOg3iTfuZdn+58ld9pumvs2fukSpJrDyfneKmR7M4uHR0tvnml31k+NrnZpuyGXY/wDc/wBuvSIdEe5h3+VsSuF8eQ6VoKR3l5L587/cjpBynnsP/EtsPt+q/fp2m3N5eb/Ji8usO/1K81W8kh8r5P4K6jwkmyFJrn7nmVlI1idx4ee8htt/332fvI6uXlzeXltvSnTWGpJNAltYfuH+/P5n+r/4BUlzvhttifu65zu+wZttefbIfsdz9/8A1dVba2msLx4X+4/+rkpt5+5f7TD9+CtbRNbsNS1LToZvkT5/P8yric0oFh9HSZEmh+R/79New1tIfkuonrvn8JWyW2+zl+T+CqKaPMjun3NldHMcvszhYdN1Wab99L/5CrQh0fWPvvF8ldsmmwonneV+8+5UdzcvpsP+tieoN4UoHH6lZ+TC/nRffrhde3p/yy+R/wB3Xq2pTQ3iJMkvyV574ttkhhejmObEnh/xCtvtmlfY/v8A2q6SD/x+vbNE0qGbR/tj/wCpsoPIgj/gj+SvFfGcL3k2iWEP359VRI6+lrzR5k8KokNr5HkQfvKuv9k5cNH3zY0Tw3Cnhu1uZvn/ANBeT/xytjQf+QPZb/8AnglTW0yQ+Ek/uQaUn7z/AIBVXTf3OmwQ/wByNK0oHJm/2S1Dsd3Ssmb/AEO/d/4HrQs33u71HeIlzbPXSeMSXKb4UmSqtsnnVNDM/wBjSi2d/JoAr36bERKbcvs2JRczedc7Kjuf9dsSrJLUz/uaan3/APtnTnT9zSQ/ckoKJZn/ANRVqFPneqs3ybHqw83zps/joAz799lhdP8A7D1xdg/+jf7ldlqsLppU7vXF2afuX/66VvH4DKQ6z+RNlWNK/jqulWLD7+ymBXd/9P2f7FNR/npzp/p/yf8APOnInz0AH/LF6bN86VNs/wBGeo/+WKUAOtkfYmyrVmnzu9Q2fyO6PVq22JDPM9AGa6PVG5/12ytaZ0/3Kx5rlLm5kSH76UogRpD8+x6tP/x81HbI7zfPT0/1qUwJ7z+5Veb7iJVi8/pVW5+4lQBrW3yW0CVNv9qqu/zon/TNKk31EjSJ7hNqUKf8tax7y8eZ3/uVnu95N9yLZVyHSt/zvLX23Nzn58R2HnO/nfwVvW0M03755ajsNN/ff3ErWm2QpsSqIMu8tnvE2PLv2Vz954ed/wDj2rqn+R6jdH376OUuMjiUttVs/uS7Nla2la2lz/o1zFL51bl/ZpNDvSuXvIZraZLmH5HSsjSMjppkeF9j/wAdV4blEfZUj69Z6rYJNc3UUE9rH+88z/lpXKw+JN9y++1/cf36OYuMTrobmrSXO+uXs9Ytn+f+CtTTb+G53vDLvRKcZGUqRvb0Sm7/AGqGF96VNs31uZ8pIm+p6rJ8lTI6UGY3yf7lRuj1Y31G70AV/Jd3qR4acj/PQj0AQ7P4KjdKsP8AfqKgCJ0qi6O9Xn+SoX2P9yiQ4nH/ABFs5ptBTUoYt76XP57/APTSFvll/wDHK+f/ABsiWz6dD5vyf2l+7/4ElfU15DDNbT2033Hj2Sf7jV8s/EizezeDTX+/peqpH/wD+Cvks7w3v+1P0ThbGc9L2Ejc8T/6N4YdH+TfBXy38bES5trJ7b5408mvob4ha3s0pLZIt/7uvn3xJbTTJJZ3NrsTekkcclcODPVx3vxIdH3p5CP/ABpXqWgv9m03/cjrzXTUd7+BE/gr0SH5LZNn8dGJDBbno3hj99bR7677SoUhRJv79ef+Fd/yJ/cr0rTZobnZs+4leV9s+lpfAddYOmyPf8jvV65Sz0pJ7mbynR65t7y2s4fO+/XK69rF/rcN1baVL86fc/6aV0wJkbWt+J3m3ppvyJH/AKyvC7y/udb166ub+Xfsd/8Ax2vSvtl5DomzVbWK1/5Z7I5N9eU69c23hjWHuYZdkF1/z0/5Z/36PZGHMWrnRJtNfzn+fe/mf8ArtPAelJf3KTPFsRK8tv8A43+D7zUvsDyy7ETy/Pji/cxv/v16B8HPGGlXlz5NtfxXUD/6uSOiVKYUqsOc+krDwn9p07cnlVzviTwlNZzI/wDfjroNH1tIdjwy7Hp3jDXoUsPOml+4lEo0uX3TWNWcJ/3TyF9KR5nR/wCOsG/0p7ab/RpfnSodY+J3hjRLmd9VupX+fzPLgi3vH/3zUmleM/Dfi1PO8PRXL+f9+SSPZWPspG0qsD0bRPEOpPokE3735K6LR/Elhfpsf5Hrn7aFE02CGz/1Hl1z+t/afD039pP8lr/y08v/ANDquUx5j1zZbTW37mWuX1iF3+R/46z/AA94h862j8mXf/ckrUmf7T883yVMjSByt5D9jR7auJ1uaabfDc/wJXca3M73OxIvkSuD1V0+3un+xWEfjMMX8B5XePZ/8Jh4ehm/6CT7P9/ZX1xfwpeeEtifI/kfP/3xXyfZ2cN54/0iaaLfBZTvO9fTEOsQpoN6Xl/5YVvU+I5sH8PMR2dy9z4Ytbbzd/n+TB/wD+Ot50TZsSub8MO80OnWz/8ALlAjv/vtXVfJ9+tqHwHmZpLnq8pDDDsR6bCm9HSpEf8Ac0WafO9aHnGfbb/9T/cq0ibIdlN+zbJnmomf5KAM/ZvmeppoX+/Tbb/X1Jf1sQSb/kqwkKIn+/Vd9lTO/wA6UAOvIfnSpIUTf/uU25f7lOh/jegCjrzv/Y89cPZ/cf8A6712niGbZpWz+/JXF23Wf/rpWsTIG+/Vqz/11Rv9/fU1m/76rAb9y8f91Uaffqa5d/tNQo/z76ALCbPJdKz0+ebZWh8j76ow/Jfoj0ATP/rqkR3ez/7aUXKbKkhT/QP9+gDPv4Xm2Vm2cP2Z32f89K3nhTf/ALlZ6Q/O9AE1gm99705E/wBJ+SprP5N//XOo7Z/9J/7Z1BBHfp/cqnMnzolaF5s+SqezfeIlBrEtXL/6TRvqG5f987p/fpu96gZ71DpVz9yatC20ryU+epNz06Z3+5X2x+e8w7/j2+RBVd3p299mynJDvdKozIXT56a9aUyIn/LKq77HqwIYKq3lhbTb99WJk2VVf+/UFxMmbw8j70h/jrNh0fyf3LxV1mlXMyTO/lVDNbb981ZSiaxkczNpUMMP2lPk2Va8PIiWb07Uv+PZ0qjoMzojw1kjf4zrrZ6vJWTZzb60oXrqgc0iem06kerMRu/+/TXemu9Nd/ko5gHJ9+j+P8Kqpc0JMlHMBfqB3oR6a9WBG/z1X+dHqw9V3esRxIbl/wBzXhPxv0R01KDVfuWuqR+RJJ/zzmX7n/jle4XL/JXN+MPDdt4z8N3Xh65l2POnmQP/AM85l+49efmFD21LlPayjF/U8RzHy3cvePbJYX/7y6tZPv8A/PRP4Hrj/iQ6TTQ7Iovkjr0iw8N+JNSv57CaL/SrX9xPJ/u1xfxa8JX/AIVSye5/jk+/XytBckz9ExGtLmOF0r5L9K9Cs037Erz3R3R7zfXpWmpsSB6qv8JhgzuvDbumyvQLCaG2tt83yVxPhi2eZESuk8VW0yWFrZwy+R9qf94//PNP4682EPfPe9vyQK9zrD69czwwy+Rp1r/r5/8A2RKdN4k0fR7OC2sIvIef+/8A3P79eN/EX4qWHhh08N6V8nkSIkaR/wB+vE/E/wAZtb1WZ7z97BAjvB/rfnk2161DBzmeVic3hA+hPG3xg0ewme2837U+9I4I4/8Alu7V5r42+JcLzQaP5W+SefZJI/3P7z7P92vEbm/uf7STUrmWWS6dPP8A+uf9xErSuYXmm+2alLsnf94kCffk3fcSuyOEPKq5vOt7sSbVfHNtc+emlWv39/mJH/y0f+5Vzwx4k8Q+AJrLxJZ3VjH9qj8/yP4JE/jrkdN8HzW0KJbXUW+dJpP9iDdXWP8ACjxP4zvINB8PSy/uPJgjd/8Aloip/wCOJWsqEOX3jmpYnEQnzRPpjwN+1LoniTTfOhiuUuoI/wB5BXI/EX9pa817Sn/sGWL7Kj7J5PN/j+7sqTSv2V/FXgbw9Pf6VrNtqmr3SI8k8nyJ/uJXivxC+C2vfDrUtUhS/wDPsvEMDyf6r5IJlfdsf/2V65o4SlzHdXx+N5PeidFo/wAV/wDSZ7aaKJ3g2f8AbT5Pv16d4P8AjZZ2c39iTWvkb4/MST5ESvlWw0TUobNLmGWL7VB/ou/+CdP40rU17TdVtvElq9tdf6K6Q+Xv/wCWe5PnT/gNbSwZw0sxnD4j7y8GfFrQb+wR4b+L+P8Ad+Z/drrn8YaPqthv/dSI6fP/APEV+ffg/WNY0GGewtrXz0geafy/+en9+uk0r4ka9ps2nWdtdS/ZUn/56/6/d9zf/u1zSy+R6VLO/wCY+skm/wCEMvLW/s5Zf7B1F/3e/wD5dH/uP/sf3a9Ghv8A7ZZo7y7/AO5Xg/w98f2et6bdaDqX7+C6jeeRH/5Zp/Gn/Aa9G8B3MyQ3WgzS7/sT+XG//PSFvuP/AN8V5WJoToHv4PGe3ia2t3OyHYn364fWHfzkd67rVU2P88VcP4h/fPsSuKER4mRxPhuFLnxm+/5ERHkr2jW386wg0fTYvnnRPPf/AJ5pXj/gZPO8VXU00W9LVP3mz/fr1SFNS3w2dt+8/tT93HPH/crSp8RjhP3dLnkdV4Vh/wBD+2J/y9SfJ/uL8qV0Wx0T56qvDDYfZbO2+5DHsSrHnIifPXZCPJA8GvU9tOUiGH50osPvyVXtrnfToX/uUzEuTQ7Id9Zs33KtTXO+Gs2ab5KuIDrb53zTZn3v89OsHffUP3/+Bz1ZBedPnSrTp86OlRon8FWIU3v89QBDeJ++2JTod/3KLx/3zpVeF/8ASXTzasCj4kf/AEOBP9uuThR/3/8Av102vTfJClcyn3563gRIkf5Ep1tvSb5KJk+R/wDcp1t/r6ZJHefJcvsqFN/yVYvP+PmSm/wQVQAjuj/79Q3L+TcpN/cq0n3/AJ6q3ifJv/6aVIF5/nhqZPk01KdDsezqZ0T7BAlQBnzPsm/36op/fq5eTJDvd/4I6zbN/Os96fx0AXrN/wBzI9Rwp++qaFP9Geo4f79ASI73/XJUKP8A6fTnffNUdt8949Eixty/yb/+mj1Gj068+Szgf+/I9VfONQB9VQ2yO/8AqqLmzR3qZPkqT5PavuD85KP2ZKmRESnN9+nIm+rAjmR3Sq7wvV56h30AUXT+B6r/AGPe+xKvO6Oj1JbQ7E86gCnDD9jfY/8AHVd/40q5cp8++qLo6PvSokVAw9YR6x7B/sd4/wDzzeuovLN7m2d0rn/sbvvrCR2wkalhc7Jtla0M1cjbO8L7HrUs9R+ejmJlE6hHqR6y4bxHf/W1Ye5/jrXmMOQJnrNmvETfReakiI/72udubx5v+WtZcxrGBpf2lCnWWpob+F/uS1ycyP8Af82q8Mz2z7082p9qaeyPRLa5q1vR/nrkbPUv3KO/3K0odSR/uS1vGqYSpGw71Xd6qvf1Xe8o5ieUdeP8lZ8Nzsuajv8AUqx5tShR/wDW1zzkb0o8k+c53TdB8VaDr17DbaNFepdSPOl35qIkm7+/Xlf7SfhXxy/huDxPrdrYwWtrdpH5cEm94938dfQ1teQ+T5zy/JXB/HjZrfwi8S20PzvBAl1H/wBs3SvIeBhCfOfVUs7q1uWlI+PdBTfebK9ORHs9j/7FeW6C6JeJMlemXO+5s0uf4Ery8TE97CzPWPBMyTbJvN+etL4o69Z6D4S1TxDc/O9laO8caf3/AOBK8/8ACWsPbPHDXD/tIfEJLbQbXSraX7/7+f8A6afwolceFp89Y7sdX5MPzHz3r2tvf6kmpX91E91PvdE82sea5037TBNN9/Y88Ecn/odaHgPwNrHjDW/t7xS/v5PL8z/YWu0m+FE1473KWH/LR0R/9hflr6dShA+RjQrV/ePKYfENz/bEcyRee8CeXAn+21dR4P8AD3iTx54nnm/e7IIHjjj/AI/l/uf8Dre/4VLNDNazPa7J03x/u/k+Rq9+8AaxonhvXrXVbnwbbJAlilrdeRLveTa/yPWcq8DrhgcR/KYvwB/ZO8f+PLzUb/VbC2tU0j/RII7v/lo/8dfQXw3+DPjlLOeaw8L2z+RI9r5nmp/DVPwB+2BN4Vttbs7/AOEtzBPPdvJY+Rcps2N9zfur0r4OftdeALDw9a6J45sNS0jVE3vO6WTzQybn3ffWsPdmdVsbho80aZyd5oPxItvEkHgxPDmy6nTz408xPuVj/Ev4FeP3sILnXtGsZ0vX8jy/N3vvau2/4Xf8Orn9plPHj69cp4e/4RxNOjne2m2fad+77u3+5XqHi39oT4Dww2U1543tn/fpJHstpn2P/wB8/JR7OEPtFVsfjXywlTPzl8f/ALMfjPwZqs+iWcsXn3sbyfYfvp/v14nryaxo+lT2eq+W+o6XOm+P/nojfLvSv0+8QfHX4D+JPGafZvEcU969j5EbvbTIn+18zLXyT8Y/D3gbWLbUbzTb/wA+61F7n5I7bf5aL9xNlVHEHJUoTf2T5bvPiLqvhi5soXtd6OiT/u/+WD1qTeNtN1WbzvK8ueCfzE/3K0Jvgnr2pXKTJYb4Ej2Sfu/nk3VRfwBN4b1LyZrWJINn/LSPY/zfx10xqwOOWHn9o7j4XeM5ra/jvPtXyJP5ke/7nk/devrzwHc7Ne8l/N/49E8z/gX3K+Gfhp5Nt4tfTbyL9w++BP7m+vuDwrrFnNeXV+kvyT2lskf7r+6leNmZ7mUVZwOs8W3iQoieb89cDqVz99/vp5damq6kmt38kMPz7P8AWVh+LblNN0qd3+R0jevHjE9erVN79n7w9Z6wmvarN5m95Eg/ef7P9yvQH0Sbw94k0vZL/oN07x7P+eb7K534LeEprPwBpepXN/fWuo6pvun2SfJ833Pk/wByu6h02b+0kvL/AFm5vfI/1ccmzZH/AN81Xs5cxhVxkPZcsQv32X8aPUj/AOp31DePvv8A56m85PK2V0nklOzh2J8lSbHT/llU3nIiJVi2mR6vlFzmTv3u6VVd/nq1cp5NzO6fx1Vd96UDLFl/HUP3JrVP+mlSW3yb6a//ACEoE/6Z0cwGon+uqwk2x6zfO/ffJUiP++2VAuQLl/8ASX/36h37Hd0qSZ086m/xv/t1ZEjH1t33xo/9ysHZ/pP/AGzroNedHuUT+5HWHJ/rq6oEyJLn/Uf9s6dbfJNTZvub6Ifv0yQuU/0n/tnTn/1KPRefJN/2zomd/s0FAEkOx3pt+nyPQj7Hqxc/Omzzfvx1ABpv/HnU03/HpBWbbPsttifwVcmm+SCgDHv7N5t++pLaFEsESrHyTO9Q/wCptqA5S18iW2z/AJ6VC/yJI9Sb/wDRk/36a+z7HQVymej/AD76dYbHuX/6503yfn+SjTURHnqJDI9Vf/QLX/fes3fV7W/ksLL/AH3rJ30CkfYmxKds96j3+/607fX3B+dDX2Ub/wC5Ub01P9irAN/9+kpHf+CofnSgCG2+e82Ved/k2VVs9n2l6s1URTIHTf8Afqu+x02VaemUSiECgn39lUby22P8kVaD/I+9Kc+yZPnrCUTpjI5XUrZ3+dKp/ZnR/nl2PXSXNn/cqv5KbNk0VZSNYmSk00NNfW3T5KtPbW38FU3sHeb/AFW+oLK81zczfP5W/fUb21z8jzf98Vc8n+BPv0PYO/zzUFlVLZ5vkSKoUh/vxfPXQWEL7/JT53rorbwlZ+TvufnerjExlM8zufOtpt//AJDohuf7915H+/XbeLdNs7aw3w/fSvP5kSb79TL3DSPvmpDqqfce/iepJtVh/jlrBS2T+OmpDvfZ5W+o5x8he1jUrCGHe9/89c7NqVm/3PNnermpWaJsR4qz/sab08n5KzNOVEyaxeeT/sVHqsP9seHtU0q5i+e9sZoE/wCBJVxNNR5vn+etL7AibJn++lEjWlLkmfBem+dbOiP99JPLevVtEuftOj/Zn/ueX/wNa5H4qaCnhX4i69pSRfI919rj/wByT5qPB+qp5z23m/f+5Xz2Jpe+fWYWr7h2yTTIkDp8jwP+8ryX4tWc3i34heGvB9nLse9fe8n/ADzSvWLy2T7M/wC9/g+SuV8K+FbbVfFT6xNL5F1ayfu3rmoS9jLmOyp++5YnsnhL4Y6V4b01Es7X57WBP3lV7C202aaeGGKPZXqXg/7NeaOlsnzunzyeZ/y0rgb/AET+x/E86eb8k/8Aq6J4g9OlS5IHJ3+gp5zukW9JKdYeGP43i+ST93XTTWz7/krUtrb5P9V9yOo9uehQI7DwxDeInkxRP/0zres/h1qXz3MNrKm//plVe2vLOzR98ssGzZ5kldBbeMLOFP3OqSv/ANc/nrWFU3lKH2SH/hANV/5ebXe6J/y0jpt54AvNm+8tYvuVvJ4/httiXmqSfP8A6v8A3Khv/FsOsQvDDf79n/s1XKpEy5ked6l4S02GHyXi3+Q/mfu6y7DwfYTO+y1/cO+/ZXoH2azTfC8v36k02ztk3pDFvrllVCpCBRsPBNnDbfPFEjvXF+PPhLpuqpH9mtYvPg3+W/8AHHur16bZbQ/vv7lV7O2+0vP+92b6n28zz6tKEz4T8W/BbUtKvPJ02KV3svn8+P8A2v8A2euq8B/ELW7bR/s2sWFyk8EiRyOkbv5e35fnr6e8SaVo8Nneu8W93rzfSvBj2dzJrd5o0To+z93/AAV0yqe2h7x5XsPYz906DRLmwttH86zilnnn/ePsrgfHM03ifxDp3hW2l3vqN1DB5cf/ACzTf89dJ4w1LTdEsPs2lWFtBP8A/FVX/Z+0ebWPGGo+LbyLfBpcflxv/B9pk/8AiUrCNI1lVPpKG2hs7a1sLb7lrAiR7P8AZoeH99UaO7vB/wBc6d/y8VByyMu53/bHejY7pRcu73L1YfYkKVcSCq/+qSrlm7olV3dHhqxbfcSqAr6x8idfv1mww1qalsdEqij1BA77iO9VYf32pO/9yOrj/JbfJVPTU3zTvQWSJ/x8vV6FP46qwp/pL1ehR0tkqQM2Z9lzsq5vTyUqnMm+arT/ACQpWsRTMPWHR9SdE/551m7/APSX/wBhKmv33391sqnD880/+5XREykSTb9lOtt7zUTZ3/PTbP8A4/BVkjpv+Pl9/wDzzqxMn+hwJVWZP3z1YvNiWyUARv8A36ufI6I9Z+/5KvI+yFKggpw/PNOiVYvPkdP+udQ/6m/ff/HU2q/67/tnQWV4f49lV5nfZVqzT9y71TvPkoLJHf8AcpUn/LvVff8AuUq46fcqB8hR+f79NsN/7+nTTIn3Kr2E3+v/AOudTIOQj8Qv/oFl/wBdHrD31qeIXf8As2y/66PWL5j1pH4DOR9nJ8iVHs2VPRX23MfnhWffTfnSrGymulHMA1Epsn3Kkb7lVXoLG2aP52+rTulOtfuPTK1gZzE+R6j+58j0532U3fvSiQyrNDsqPZVz/Yprwp9+pkBTdN6VX8lH+/Wk6OlV9m96y5TojIp/YLb0pv8AZkNaF5CifcqH+D8KjlL5jNeztt9NmREq1sTf89STQpMnyUcocxn6Omy8+0v9ytLUtVmtndIZadbQoibP9um6xCm9HqCDmbm5mvHdH+5WXc2Gz79bGxN77Kq3OzfUmxhvCiP8lNtv9cauXL/PzVf5E2VPIbRK9zC/nfPTprOF/uU65m+epEmT+OnyCNTw94Ve8f7Tc/cqTW/D1zYfvofnSpk177HDsh/gjqxYa9c6lbOk1OXKSpTPk/8Aau0GFNV0HxJ5XlvdQPaP/wAB+5XhNtM9heJN/wAs6+gP21bz+yrnwhD/AAb5nf8A3K8HvId6edD86PXiYyJ9Rl0ueB6Z4b1K2v4fs3m1tf2bDYXP2mz+T7nmV5L4Y1V7ObyX/gr1zRL+zvNNktppfneP5JK8yUT2qUjrvDfjCbSrxE83ZBPXReJLmzuYft6Sxf79eR3Mz23yeVvrptK1WG/0p7aaX5/LT93/ALtccoHoUKp1mm2yfYE/jnrYTZYQ7H+ff/rJK5fRL9Hf7S8v3K2L+a287fDL/r6w+A9KBpb9EtvPSHynf5N/mfPU0Nz4YvJvsfm7N6f7n3aw7bTbma8TZF8jpvrqtK8PTJ/zC4tj/wDPT567KUpHPViR20OiO/2b+B/3dXLPw3YXlyk32DZ5H+rrQfTbmHZMlrEmyP7lVZn1VN6fwUVZSClGPMWrnQdNhff/AMAodIbP9zbeVsqNLl02edL8lZd5fu6PMnyIn7uuHmnM6ZRgSXNz503z/PU32xLCF5nl2Jsrn5rl7Z0/8frJm1hNSufs00uyD/lpW8Inn1appI73959sml+RPn8uSuf8VeJ7azR0eX5P+ecf/LT/AGKj8SeJIbC2dE+TZ/H5vyV5H4h1u51ubZbSyoj/AOf++K6YxOGrIz9Yv9V1jVfni3+e/lxwf33b7lfV3gPwfbeBvBll4eT/AF/l+fdv/fmb5nr5x8BzWGg+M/D2oalF58f25E2Sf7Xyo/8AwF6+sL9HR99XI5SYf61P+udTP9+oU/13/AKsfxVzgZqOj3klNud9V4bn/T50/wCmlWL+52ffqiBqf6mrCfJDTYf9SKk+4mygCrf/AH0qvbfferVy6PMlRwum96sgbf8AyWyJVPSvkeetK82PClVdKh/19QWWLCHfvermz5EosE+R6c/8f/XOpAx5vv7/APppTbybZClGze71DeJvRN9WgOfmm33N0/8A00qG0/109SW3zvP/AL9R2yI7zv8A7ddcDGRJN/x8ulNsPnuXp03+ud6LD77/AO3VGQP9/wCSptQ/1KVXRD9p2VJff6lKgCF/4HrSTP2ZHrLk/wCWdaX3LD/tpQBRuX/4mqJVjVX/ANM/4BUbw79Vgei/+e8d6Cx0M2yHZVO8+erWz9z89VbnYlRIsPuIn+5Vq5d/s2+q83zun/XOrDonk/PWRqZaJ9/fRYfcerDpsT/tnTbNNiP/ANc6AMvxJ8mm2X++9YO/3/Wt7xN/yDtP/wCuj/8Aslc7v9q3p/AYVfiPt7/cpr/JXzqn7eHwZ/j0vxCn/bsn/wAVVpP23vgVN9+61eD/AK6W3/2VfY8x8H7M9886jf7V4nD+2N8Abn/mY7lP+uls9aSftY/AGZP+R8tk/wB+J/8A4mjmD2Z6599Kr7E315rbftOfAe5+RPiNY/P/AL6Ves/jx8Fppk2fEbQ/+2lzVxDlPRNiQ21RVzEPxa+Fdz88PxB0N/8At+SrkPjzwHc/6nxvob/9vyf/ABVa8xnKkbdQOmyq6eJPDE3+p8UaY/8A28pUn9paU/3NZsX/AO3lKOYOWZJv/v1J/uVXR7Z/uXUX/f2pkT5P9bE9AcpJ/wBs6jeFH+5UnlvR5L/88qgqMSH7NTfsaelWtj/88qP9jyqkrlKaWaed0qG5T5HStbydn3Kp3Ntv+egCnbfPbOlN1JN6I9WLaHZvoe2eZKA5TlXT532VRmR99bFzbOk0lVbm2fZvrE2OfvEf79VK2Xtnf5Kq/Y9lSaQMeaF99O2Pv/1tWLmHZU1tYI/756nnGR3LukNSaUjwonnS7ErSmsLbYk1U7Oze5vE3/cSqA+W/2879JvEPhSzT/n0mkrx3wf52q+DNOv5v9uDzP+ub16Z+3a+zx/okP/PDTnrk/AGlQ6b8CtIvLz5J5Lt50k/3nrzcZS93mPWyyvyT5DmdSs5rZ47mH+Cum8MeJ/kRHlq9NYJeW2x4t6VxepWFzo9550MXyV5Uz6Xl5D16HUkudnnf3Pv1npqr6PqTv5vyPXI6P4kR0R3/ANZWpc38Opff/gjrKUDXmPStK1XzvI2f8tI98lddptzC6f6T/sV43oOvfZrmCG8l/wBx67zSvEKb0/0qKuaVI7KVc9s0REhs98PlPv2fvH+5XYW14iQu8PlOiV43o/jPe6W3m7LVP/IldlYa9ptzC6JdRf6zfH+9qom/PznYJeb0/c+V89VZtKR7Z3m8r/43XP8A9pQpN/cRP3n7uT/x+o5vE6Ijw3Msrpv3+X/BUyjMrnG6q6Im9Ivk3/6uuV1W8Tfs+5s/uVc1LxDC/wAlzLFG6f6uvPdS8QpfvOn9/wDj8z/0Co9gYVMSaGparNcu8KS7/wDnm6Vk39/9md0h/jj+/JXO6r4nhhfZDLskrmbnVdS1ib7NDL8n9+tY0zhlV5y5rGq3N/8A6NDFE6b/ADKm0rRJpv8ASZv9Xs/d1Y0fw950yfxpW14kv7Pwrok+pXn+rgj3/wDXT+4lalRj7nNI4W5ea8vNeuYf+XWe2tbT/pm8fzP/AOP19eeG9YTxP4S0TXk/5fYEkf8A3/46+S7azvLDRNOs9S/4/Z993df9dpH3V7l+zrrH2nQdR8MTS/Ppd39rgj/6Yyf/AGdVUj7nMcPtOeZ65DD++2U7Y6O6VNbI++R6hmd0euM1iZdgmyZ/9+jVU877/wDBVjTfn3v/AH5Kr6k/yfPWoiZHdEq19xPnqvD9xPpVp0+TZVgZ94/76molSTJ89Nd/nREoIHXmzyU2UaV/qZ6juZk8lP8AYo01/wDQ53rEs0LN9iPTXf79Os/9T+NR3MPyPQBQh+/JVC/m/fIif8860ET79Zs1tvmd5v4I3oAxbZNjv/10qOz+Te//AE0qxbf6nfVeD7kddETGQ7++/wD00qSwTe6VHv8AnqbTX/jqxhsT7S71Hf8A3I6IX/fPTbl3egCF0+dK0Nn+hoj/APPSqO/Y9Xt/7lEeoAHfZfwVXd97vTt6Pfps/gqGf78lAEz/ACW3z1mzfPsq5NveGqLp8ib6BxJn3+cn/XNK0Jk/c/8AbOq+z50/3Eq9fpsh/wC2dc5oZLo//kOpIU3o/wD1zpz/ACJ/2zp0PT/tnQBk+NkSHTdL/wCB/wDslclXV+OX/wBA07/ff/2SuSrqofActX4joZv+Cdej/wDLt8WtT/7aWSVTm/4J1vs/0P4q/wDf+x/+yr7I3+1O+/X3fsj4KNWZ8S3P/BPfxnD/AMeHxG0h/wDftnSs+b9gb4rp/qfFHhqf/rp5yf8AstfdFSb/AH/Wj2Qe3PgWb9hX42In7mXwq7/9fz//ABNYt/8AsN/Hj/oA+Hp/+uepJ/8AE1+iW+h99RKkEa5+Z9z+xV+0DbfIng2xn3/3NShqi/7IXx7tn+f4X3L/AO5cw/8AxVfpk7uj1cd32b0lqfZl+1Py7f8AZd+PFn8//Cqtc/7Z3KP/AOzVn3nwW/aB03/mn3i+D/rnE7/+gtX6nedMn/LWh7mbZVeyD2p+UP8AwiXx+sPkTQfHsH/bK5qxDc/HXSk/fXXj2D/tlc1+q0Ny707zv78UVHsh+0PytTxz8b7b7/ijxnB/10+01YtvjH8bLZ/+SjeIUT/ppv8A/ia/Uj9y/wB+1if/ALZJUL2elTfJNo1i/wD27JU+zK9ofmOn7Sfxy01/k+KGpv8A78X/ANjWgn7XXx4tvufEbf8A9dLZK/Rybwx4SmfZc+EtIn/66WUP/wATVOb4afDS5Tfc/Dnw8/8A3DYf/iamVIPanwHbftmfH6H/AJm3TJ/+ulslalt+3P8AGmH5LmLQ7r/tls/9Br7Sm+CHwWvH3zfCrw8//biiVn3P7OvwEm/13wv0P/tnFso9lIftYnyPD+3t8VIf9d4X0OT/ALavWhD/AMFCPG0P/H54I0x/+udy9fSFz+yv+zxeff8AhzYp/wBc5HT/ANmrJvP2MP2cpn/5E25T/cvpk/8AZqPZSD2sTwv/AIeBXjvvufhz/wB+7mrEP7f+mv8AJc/Dm+/7Z3KV6xc/sMfs8Tfc0bV4P+uepPWTc/sAfBCb/j2v/EsH/b7UewmVGvA4P/hvDwq/yf8ACEamn/fFSf8ADcngZPv+EtX3/wDAK6qb/gnp8Jf+WPijxKn/AG0T/wCJrPuf+CePw6f/AI9vHniGD/vh6zlQma+1gYP/AA234Amf/SfDmpp/2zqZP22/hpN+5ew1OD/t2p15/wAE9PDf3Lb4oaun/XS2Ss1/2A/sfnpZ/FDf56f8t7H/AFf/AHzWUqczSMoHRQ/tk/Cu5hRH+3J/10tnrasP2uvhFZp/o1/L58//AD0jevMX/YA8T7/9D+JemP8A79i9eT/E74FP8KNSTTdY+IOkave/8tLSxjd5o/8Af3fcrPmLjHn+Ek/ai8c6J488W2uq6Vqn2pEtHj/d/wC1WK+t6lc+DNB8NzfuE06D5/8AbdqxbbStNS8S8e18yRP43rU/13zv/HXPXq8/unp4alyHZeD9VS8sPs00v76D5JK1NY0dLlN9cHYedbX6XNt8jpXpmiX8Oq2f+2n7t4/+eb15VX3D6ChPnPNbzTbnTZndIvkqaz1J7ab/AFXyPXoWq6D50Mn7quLvNHmhf5KzjI1lEuW1zDN8j1sW0Lun7nyvkrkU32z/AD1pWGpbH+eolIqJ1kKa2kP7m/lT/rnVhL/xmnyJfyv/ANM6ybbWNlXv7bRErOUizSfxb4whdPOupfk+5HUaeNvEKfvrnzZ3/gfzdnz1g3PiSHfsSWV5E/uVTd9Yv/ktvkqoyI986K58VXj75tSuooE/5Zx+bvese81vUr+HZpUXkJ/z3k/9kSm2Hgy8d/O1KXe9dBDo6Q1UpFckzD03RLl0Tzvnd/45K67RPDyQ/wC/ViztkhrU+0oib6xlIuNLkLFskNgm9/krz2a5m8eeJ3eb5/D2gyeY8n8E9yv3E/3Fq94hv9S8T/8AEh0GXZ/z9Xf8ECf/ABdOS2sNK02DQdH+Sytf/Ij/AMb100qX2pHHicT9iJTuX+03j3L/AMddN8LvEKeEvHNlfzSxR2V7/oN3J/sN9x/+AvXPpD8lV7yFPszo/wDH+7raUef3ThjLkPtK2hm3u6fOj/ckT56p3KbEd3r47s7B7CbyU8Ua5pf/ADz2X0yQ/wDAPm212WlfEv4i+EnRP7Zl1ex/54al++ST/cl+8lcn1aZv7eB9CWCOiVXvE3zbK5Xwr8YPB+vbLO8l/sS9f/lhffckf/Yl+7XWXMLzTJM/8H+rqeU2LEKVI7/PUcO+o3mfZvoAdN8/z1nzI6TJVx97pUMyb7lE/uUEEb7NjpViwREsHqrN/G6fcq5bJ51hvqJFQLFs+z79OuX2I7pUKb6beTOls6VnzjId+9Hqncv/AKNO/wDsU5PO8l9/8dUbxHSzupn/AOedVGQFGH/jz31VtvuJVr/lw/3I6pwf6j/tnW5kENWLD5PuVVT7lXrBPkqwK8P35P8ArpTbj/WVJbJ99/8AppTLz79QAxE3VemTZsT/AKZ1Vs/k2Vcv9iPQBHZw77l5n/gjqu8O9/8Afq1YPsSd/wDgFRo6fJQAXKbLasv5P46ualfp5OxKpoju6UAXkf50qa/3um//AKZ0Qw/PUl5s8l65yijN9z5/7lOtk+/ReJ8kj/8ATOpLD+NP+mdBZz/jn/jw07/ro/8A7JXI11njl/8AQ7L/AK6P/wCyVyFdVD4Dlq/EfcFPqFKk+/8AJX3x+dyJaY7/ACVH81NffQSSb/kp2/5Kr0b/AGoLIZnqxC++2qv5Mz1MiInyebQUG/2o2ed9yjZD/wA9KPO8l9kMtApjn/c0JcpMmyb5KNifx1Ds3vQItJs2f62ofkT56mh8mFPnqnvR/noAkebe9WER3h3vUMPnPVryrn/nrQBXeZ6hd/79TPZzP9+mvbQp8lA+cjTZQ6JTnRE+5Tf4aCuYcibKrvNs+5UtM2Pv+SlMRGkz1Huesvxb4z8GeA7P7f4z8UWOkJ/zznk+eT/cT7z14D4w/bMh3vYfC7wRLqH/ADz1HVf3MP8AwCJfmeuOrXhA66WGq1vhPoa5huXT9zXmPxC+OXw6+HSPbalqn9qap/BY6d++m/4G/wB1K+W/GfxI+Mfjnf8A8JP4tvktX/5cbX/RoY/++fm/76rgXhsLNNk1/Ej/ANxPnf8A74WvPq4zn+E9ehl/J8Z6h8Qv2nPiX4whez0eWLwvpb/wWMm+5kT/AG5f/ia8psNBmv5v30ss7v8AvHkf53/33enJDf3jpbWFr5Hn/wCre7+//wAAi/8Aiq7qw0eHTbNLZPnf/lpJXD7Wc/iPQjShD4Tg9b02GwSCFP8AnpVdId9b3iqHfbPMn30krNhTeiUzYakNb2mzPbOlzDLsn/56fwSJ/cestEq8nyVEo+0NIy9nPmPQrDUrbUk8n7k9V7/REmfekVcvZ3j2z7P4K7jSrxLyGDf/AB151WlKHwnr0K8K3unLzeGIX+/FVGbwZM7/ALnza9OTTd//ACy31YttKR3+eub2p3RoHlqeD9b/AIPnrUs/h7fzf66vXLDTYU2fuq6C2sIdn+qrKVcqNA8j034aIj73i310lt4Phtk/49fuV6IkP/TLZWff+SiVPtTf2EYHD3mmwwo/7qsG5dLZ3d61vE+tw2CPXL6Pv1JH1K/+4/8AqI/+en+3W9KPOcder7MuQzTOm+H/AL+UTWaTJ/p918if8s46sPN/zxqN03pXoRpHk1cTOfwlea8htofsemxRQQf7FU0TdVrYiVGiIlanERonyVXmTztkPlb97/vP9ypnfbU2j23neZeP/H8iUEyLEMKTW3kzfOlQ/wBleTD9msLrZA//ACwk+eH/AL4/g/4DWhbQ7Pk/6aVY8mgRzdzpts6eTf2ssaf34/30P/fH3q2vCXjPxn4S/c+GNei1TTk/5cZ5d6f8A/iSptib/kqneabYXj77mwid6mUYTNIynA9m8GfF3w94nf8As28/4kmtv/y43f8Ay0f/AKZP/HXSPNeQv5L/AMdfMdzps3k+Skvnwf8ALOCf5/L/ANx/vV03hL4o6x4b2WGqxS6jYo/3J5f30af7Ev8AH/uNXLKkbxqn0A+9PLqPzpt7vVfTdV0rxDYJqWj38V1B/wCPx/76VPD9ySszUqTPcpZ1chuZobNKqzf6mOpvne2RKwkaQG/bLlPn8r79Nuby5e2f919yryQ+cmyqepQ+TYP/AL9Iorw3k3kpviqHUrl5tNnR6kdJoUR3qnrG9LPY/wDHsoQFWbemlPVe2TfD/wAAqxef8g2oU+SH/gFdSOaQ1E+R6vWafuXqmn3Nn9+tBE2Wb0DKdn9x6hv3+eprB9lVbn/Wz0FEln/BVrVfv1VsE3un/XSpNbd9jvQSSWf/AB5zvUVUtNmmSwffVhHoAq38Pyb6LbejpVi5femyqts/+k7EoA2Efe9R6rvSF0/6aU2H/j5TZVnVfuVzmpkXMz+TVqwf7/8A1zqrfw74f+2lTaUjvNs/6Z0AYPjl/wDRrL/ff/2SuTSuq8Z/8etr/wBdHrlq7KHwHLV+I+3Xtnh+5Qj/AMdOd5qIUf7/AJVfeH57MHd/+eVQu9Xvn/jpqQo/36DMqp89SOkKJVjfCn3IqbN5L0AUXd3o/wB+pvs1HlLQVAhd/wC5QiIib/46k+zf3Kje2eH/AJa0Fy+Ajd6ktt7v8lN+xzP8/wDq6mh3p8iUEDrmF3qOGGGH78u+prx/nSoXSgZYSb+BKdueq6U+gCXe71Xd/nqREpzwu/3KB8hHN86b0pqQu/3K434i/GP4dfCiH/iqte/03Z+7020/fXMn/AF+5/wKvlf4kftV/Ejx5vsPCUX/AAi+jv8AJ+4+e5k/35f4P+A1y18ZCidlDA1ax9TeP/jB8N/hpC6eJNeie9T/AFenWvz3Mj/7n8H/AAKvmXxz+1d8QvFXn2fhXyvC+nf8s3g+e8k/7at9z/gNeM2fh6a5me8mllnnf/WSSfO8j/79b1toMMKfPF89eTXx05/Ce3Qy+lR+IyX+06rePqusXV1dXT/furqV5ppP+BtVpLCwmT99Lc/9s5a1v7K3019KRK4JTPRhCxj/ANj+G4X859Lid/8Ab+f/ANCqneXkMKbLOKKD/tnWxc2exPnlrmbn/TL9NNtv4/8A0CkM3PCWlPczPqtzLv8A7nmV000O9KtaVpqWdmkKf886keGgDj9V01LlHtv78dcrZo8P+jTffT93Xol5bb/9+uZ17Sv+YlDF9z/X/wDxdWBnpD/HViFKq2029Ksb0SgC0mz/AL4rpPCTzTefZp/B+/j/AOA1y6Olb3hi8ewfUb/+C1tHk/8AHKirHngb0Jck4nrFtDvhSZP4/wDlolTeSifOlV/ACXNz4b068uZd7zwI8n/Aq3rnTd/zp5dfPyPq6RVtpk37K6C2mTZXLzQvC/8Aqv8Av3Uf9sPC+x/NT/tnUmx1014iJXF+JNbSFH/v0651uZ4fkiun31w/iGaabf8AvYk/8fetIxOerVOT8T6lNqupWWmw/vHvZ0g/76rvLm22Olsn3IY/LSvLfDzpefFfS7B5ZX+xWs13J/6CleoXM3z169CHuHz+LnzzIXREqN3/ALlNebe++o9/yVqccpDZtn36r3MyIiPUdzeInzvLUNnZ3mtunkxSwWv/AD3f/wBkoESQ2z6lN5Kfc/5aPXReSiIkMP8ABRbWdtZw/Zrb7lS0EEGypai3/wAdSfwfjUFjdnvVd/8AYqw9QvsoAjT53qG5sIZk+eKpanR02fPQPmRn6bqXiTwffpqWiXUvyffj++kif3HSvYvBPxR8PeM7b7BN/oWr/c+ySfck/wBx68r2I6fPWLquiQu/nW37t6zlS/lNI1T6ev7Z/kh/uVahh/c14L4M+MesaD5Oj+MPN1GyT93Hd/8ALaP/AOLr3DRNY0rXrBNS0G/ivbV/44//AGeuGrDkOyEzShSqOton2ZEeL/lpWhC/zpWX4hfZCn+/WETQa6I8KI9ZOtvvRE/6aVeublLaFN/8dYuqzb5oE/6aVrAkNS+TTYP9+qv8FWNVm32yf3Equn9yukwkOT532Ved/wDQ6ow/J89Wrz5LPfUiIbBPO2VFc/fep9Lqvc7N71USibTf4PrTdVffv/36m01PkSq94nyO/wD00qRSHfZvJsEqP/Yq1N/x7R1V/joERzPsfY9VbN0e83pVi5Te71R01H+0yUGkDasvvp/10qxqrpsrLtnfzqsalN9ysSuUjmf+D/ppUlh8ly7pVF3d3/7aVc0357l6CjnfGfz21r/10f8A9krlK6vxm/7m1/67v/7JXLV2UPgOSv8AGfc7oif8sqj+d3+SrCQ/89qqvM+/YlfdwPzckfZD87/O9R7/ADk+SmujzffoTYj7KZYlP85P4KhmfYmyobZJpvuUATPM9MqV7Z/+etCWb/xy0DgRo+xN9Hzp871I6Qo+95d9Q/I776BjnuXf79TQ7H+5UGyKnw/I9BEhtz9/56kh+eGpLm2d3+T56dc/Y9H017/W7+2061T/AFk93KiJ/wCPVnz2KjCc/hIqfDDM7/JFXj/jP9rf4OeFfPttEv7nxRep+72adH+53/8AXVvl/wC+a+e/HP7T/wAY/H++w0q6i8KaW/8Ayz07/XSJ/ty/e/75rmq46lA7qGWVZn1548+K/wAOvhdbPN4w8RxQXX8FjB++uZP+ALXy/wDEX9rTx/4zSTSvAdh/wi+kP+7+1v8APeSJ/v8A8H/Aa8XttEd7l7+8llurp5P3k88u95P+BtW5baan8deVXx05+7E9rC5bSo+9Ix4dH+0zSX95dS3t0/8ArJ55d7yf8Datiz0dE+/WhDbJDVxE2Vw856JXhtkq15NSIlSfx7KkCu6IlVZvub6vOiVj39zs3vQBh69f+TC9VfA2m/abx9Sm/jrJ1KZ7+8+zJ/HJXoHhiz+zWyJQafYNpEdKbMlTP/GlRp877KDMo3MNU3T+BK1pkR6ovsSqA5XUvDfkv52j/wDA7X/4isN5km3p9x0/1iP9+u6mTZ9+qOpWFnfvsvIt7/8APT+OrA49Jtnz1qf2k9t4G8S3iff8jZ/31UN/4bv4f+PC6inj/wCec/yP/wB91HDZ6rNoOo6I+lypPdSQ/wDLVHTZ/v1URS0+E+rIfCs3gBNE03zfPstR0q2urWd/+WnyJvT/AIDVi8s0+/D+4/6Z10j/ABO+BvjD4b2XhXWPGUWl6po8CfZZ3tn/AHcyp/u/Olecw+M/DE1sif8ACUW3mf3JPk/9Crx8wwk6VX3PhPoctx0MRS9/4i1cwu/yPWTc238daiarpt//AMeevWL/APbVK0NB8E+JPGF49noNrFJs/wBfPJJ+5j/33rkpUp1JcsTvq14QhzSkcLfo6fPXF+JLlLOF3mliSvSviR4Vh8Ja3/wjCaz9u1GCBJ7uTytkMbt/Av8AFXN6Jv0e/wD7SudG0O+dP9R9q01JvL/76rupYSUPiPLq5hS5eaJ5L8MbO5ufiR4r165ilRNOtYbGDzI/73zV3l5eIj1a1Xw3puq6xqOvXl/qcl7qk/2q7eO52Jv/ANhF/gX+GobbwfoMP37WWf8A673LvXZH3DypV+f3jNm1i2RNj3UVCPqV+n+gWErp/wA9JPkSuih03TbP/j2sLaP/ALZVaT7n+tqjE5+w8MJ8k2qy+fP/AM84/uR10HyJsRPkod0T7lN3+1BpzDn/ANuoX+d9iVJ99Kj+5UCIfuPUiP8A36a9OSgBuz3qPZ7fpU336jegCun9+pIetN+SpP8AcoAcn3KHhTZR/H+FTJ89AGPeWCPv3xVl2b694YvP7S8PapLZT/7En/oafx11jw7/ALlUZrDf/wAsqzlAuMuQ7Twl+0PsmSz8eaXs/wCn6xi/9Di/+Jr1L7fonifTYL/QdUttRtX/AOWkEn+dlfMN/olUbC/1vwxefb9Kv7m1nT/lpBLs/wD265pUP5TsjXPqy/tkmtkRP9Ylc3rcLw3ll/v1xvhX49/afJs/GFhF/wBf1p9//gcX/wATXcaleabrf2LVdEv4r21/56Qf+z1lylc5Vv8Ae9g/+xUKfc3v/wA86sXj/wDEtn/2Koo/+jJ/uVuZkyVavHf7Bsqim+rV/wDJZ0FchJpv+p31VufvvVqz3/ZkdKo3H+soGadn9yql/wDJZu/+3Vi2f/Rt9V7zY9mif35KkyLFz9xEqm/+uq5N8nyVR/5bb0oKGzOPnqHTUTzpKbM77Ho01Nju6UFQNKFE+0vUN/8A67/YpsL/AOmPv+5Udy//AKMrEqJX2ff/AOulXtNfZeTp/wBM6x7yZ/n2f89KsWFz/wATX5/ueXSmaRMvxaj+TAj/AN9//ZK5qun8ZzI/kIn8Ej1zFdtD+EefX+M+6dnyb3lqm/3/AJKmdPnqN9iJsSvvD88jEhmmqHf/AB1NsSm+RQVyEkP+mfI9WN6J+5T92lNsE++9OfZQTIj37Kbv/v05/nqF9lBUBv3/AJKEShE+eptlRKQxuxER5nl2Rp88kj/cjryXxn+1d8HPBLvbWd/c+JdRT/lhpse9N/8Atyt8tc7+2H45vNH8Mad8PdKuvIuvEMnn32z7/wBjj/g/4E9fJtnpSJ+5hi8uNK87E47k92J6+Dy/20OaoeveM/2t/jB4w/c+G/s3hTT/APln9hj865/4FK3/ALLXlOpP4h8VXP2zxP4j1PVJ/wDp6uXf/wCxrWttKf7j1qW2moj/AD15Eqs5/Ee7SoUofDE5+20dETYkVa0OlbNj1sJbIj1J5KI/+5WRoZ6WH399TJDsq08Kffpu/YlSOI1Ic/fqREpKn2fxpQXykfyJRuSmUx3oMyO5m+TZXI69efI9b2pTbErj7z/SZqJDgR6DZvNc/aXr0iwREhSub0SzRER/KrrIfk+/QVIkf+B6jT/Yp09RpvT7lBAXL1RfZ9yrk339lVfvvQBVmSqN+mx0etCT7lVdST/RqoCi++ZPnqTSn2XPz1XRH++lOTZvoA1LmbyX/wB+mvNvRHhiid9/z+Z/cpvyXKVmzQvC7p5vz/8ALOgNjSubmG2hfyfvoj/6uvrzwHf6bZ/CXQb+28R3OkJa6Ul3P5ESfvH2bn3/AN92r4h+03KJsufnevTvDHxC1i8+G9r4Js5ZUR3eC62Rf6yFX/v124KtSw3NKRx4unVrcsYyHTarea3f3Wt6ldSz3V7O87zyff8Am+5TYd8MKQvdee6ffkemols+x0i+SD92lH332JXBOdzt5BqfP9+pPk2UbERI6NifJUF8qI/v/c/gqb7lSJ8kNVd7u9BHISff/wBinfPvqNHo87Zs30ByEn3/AL9R7P40pvnbPkqZP9iWgorv8lNTelWPKpuz2/SgBr1C+/56kpux6AI0+/8A7FOT5E+f+ChP9ijZ8m+gByfPTt/tUaf36WgCVPubP+WlCJ/BTUR6loAieFKz7ywR/v1rbEprw/3Kgs4m/wBN8l96fcqTSte1LR7lLmwupYXT/nn/AJ+f/gVdJNZo/wB+sW80RN+9KCuY77RPi1balZyWHiG1+d/+W8H/ALPF/wDE11Wm3NhqVsj6VfxXSJ/c+/8A98ferwG5sJoX+eiHVb+zdHSXfs/j+48f/A1+ao5DWMj6Ghhf79SX7p5OyvK9B+K+qw7La/ii1FP+ecnyXP8AwB/uvXeWHiTQfE9g76Pdfv4P9faSR7Jo/wDfSpNec6C2fZDs/wCmdZsz/PVi2f8Ac1XR/n2UcozStv8Aj22f9M6pv/y6wv8A36uQv+5rLebffp/sVHKQajvtqnv+/TXuf4KjSb771PKVyDbl0SH/AH6LZ0SGd/Nqrcz/ALn5KhSaHyX30SK5DSs33zU25+T7lZthc/6TvT/rpTtS1JE2b6xNOQbc/wCpnd/+elV/tnk3/wDwCqeq3myF3T+OSs25v/8AiZIn+xWcpGsIl7W5kmRH/wBt6yqnuXd0TfUFd2E/hHnYv+Kfcsz/AD1G6VI6fPvp2z2/Svvj86gV9nt+lGz2/SrGz2/Sh0oGRw/I9Nf5Pnp299lN+fZ89BEoEL/JR8lSP5L1H5Oz7lLnKjEE2J89Y+peIXSb7HpsW+RJPL/ef36L+8ubzXk8PWf/ADw8ytCz0qGzhd4Yt7+Z5e+T/wBko5ec1UT5B/aN+03PxXdLyXz3stKtkf8A32+auBsLBP8AnlXqH7Q8Kf8AC4NUTyv+XGz/APQK8/tk2PXzGJ/iyPrsN/CiWIbZEqx5FNR0d6kffs+SuU2Gp8j075NnyUInz1LQBWmfZUKP/BU03zpVffsoHEsJsd/kpzv8m+q6O/36k3v/AB0F8wb/AON6p3PepnffVG5m2UGZl6l8/wB+se2h86b5KuX773+erWlW2z56BxNawh2JWwifwVTtk2JWlD1oERumz5Kb/uVYeo9nvQPlKs39yq83Srjp/HUexNlAjNm/v1DePvTZVyaH5Kozf9cqAM/+PZTn2J89D/JVG5+03LpZ20v7x98m+T+4tUBJNrem2H/H5fxQVTfWLC/T/QL+KffWgmm6PpT2rvdWz/ao/wB477Pv/wByvVH/AGdfCXxF+F0/ifwr/ovijSIPtfmQfcnh+9/wPd/DU832QPA7l7z/AFKfO88mxK9W8MaV/Ymj2sKfPO8n7z/2d68/+Fdg/ie//wCEhvP+XL9xs/6bL8rvXda34/0Tw9rH9j3ksru7pH+7j/1e7++9VIcTeudm+q1LNc203+puon/3Kc6bayKI3ff/AMAoT50/3Kb8nvTk/wBigB0z/Jsqq7pUz799VZv79ADXudn3KqvePvSi5+f5Kr7NlPlAtJc/Psq9bXO96yUqwm9KOUnnNzf/AHKWs62uXf5Kub3dKRQ1/wC/Tf499Ppj0ALTPk2bKcm/7lLQBDT6c/36WgB+z56dTU/vvTkoAd/v0PQ9LUAM2e9QvClWPk96Pv0FmTNYb6x7zTf7ldU6JvqH7Mj0Aef3mmuif6quZv8A4l6l4Y8T6XbJpdz9tgkRIL54nRJ0b+Df9169S1K2/cu6RfP/AMs6+4vBnwu8MTfC7QfB/ifRtMuvIsU3pdWyOnnfef71dWGw31nmOavjIYb4j5Te8+Jcz7Lbwlpjo6b/APkJbP8A2WmunxO/6E2x/wCAav8A/Y19Lax8B9B87Zo+qXOiXX/LNH/fW3/AP4q8r+Ium+M/hc6f8JDoNze2T/6u+sYvOh/+wrPE4arR+ydOGxWHxPwyPP3f4op8n/CBxP8Au/8AlnqyVDDefELfvf4c3O//ALCUNbkPxUhf500HV3R/+WiW29KP+FnWaTJ52jax/wCAT158qtvsnd7P+UwZr/xtv/ffDnU9/wDsX0NV5tY8ZomxPhz4h/7+Qv8A+zV1E3xU0fzt72Gpp/25PRN8V9B2IkP2pH/68X/+Jqfal+yOPfWPG2zyU+HOuf8AkH/4qqaal45dHSbwHrn/AH6T/wCKrurb4o6bNM7/AGqVP9+2f/4mpk+JGguj/wDE02P/ANcnqJTgVGMzgbDW9bs386/8G+IU/wC3bf8A+gtRN4ts5n/faX4hT/uETV21n8RdB2ZfVIv9Z/HTk+IvhtEff4jsd/8A11qeY09885ufHPh5/kmsPEP/AIJJqjm8Z+GHmSZ4tcTy/k/5Ak1elJ8RfD38Gs2L/wDXOSo/+E20ebe/9qWP/fxKylHnLjLkOFsPEOj63vh0r7d+4/1n2uyeH/0KrdbOvaxbaxDD9murafZI/wDq5aya9PDR5KXKeZiZc9U9Eh/bntv+Xz4c3Kf9c7lKtQ/tz+FXf994D1f/ALZypXQTfsYfBlE+SXXE/wC356qv+xP8KJv9TrOuJ/28p/8AE19ofAFeH9uT4abP9M8L65B/2zR//Zqk/wCG5/gh/Ha+IU/7cv8A7Kq9z+wx4AuU2Q+MtcT/AL4f/wBlrnb/AP4J++FX/wCPb4l6un/XS2SlzBynYJ+3D8BP47rV0/66WT1aT9tL9n6ZP+Q9qaf9uT15rN/wT6he2+zWfxQl+/8Ax2KVV/4d+6knyQ/FC2/7aWVTzTK5T1y2/a6/Z+uf+ZtuU/66WL//ABNbFn+058Dbm5S2tvGUTzz/ALuNPKf7/wD3zXgM37BnjCFP9G8eaRP/ANdLZ0rU8B/sf+LfDfjnRNV8Sa9pF7ZWt3v8i0iffJt/3qI84cp9UeErB9V1ifVU/wBQ8fzyf89Hb+D/AICldBcw7H2eV8iP5damj2dtZzXttbfIibH/APHKj1KHZC7/AN+evQpdjOUj49/aZs/s3xU+0/8AP7psMn/fPy15bCnyV7p+11YbPEPhrUvK+R4JoP8A2avEU+5sr5XHR5Ksj6vBy56MR2z599ORP4KaiPUmyT/nrXCdIlP2fJTU/uU50/v0AV3+RNlVX/1iVYm2fwVDQA5H+T56je5+eo5ptnyPVF3d3+SgCw9z8/yVn3M2+p6YkKJQBTSzeZ99blnbIn3KbDDsSr0KJ/BQBIlWIahTZUn8H4UDgTJ/t0fxU1KH+/QURulR/P8AcqZ9/wDDUOx/O30EyKrp8lUblPkrU/g/1tU7lKBGDc766T4Jw/D2b4tWVt8TrW2n0iexmSNLr/U+d/BWPNDvSsHWNH+2J/cf/lnJVRFKPP7p6F8b/D3w08l4fh1f6ZA/9q/J5cu/y4Y/7n+w2+nfDf4kar8OvA2o2aX8U7/2d/Z0CJ9yR237ET/vuvFb+bxanyTaXa6jGn3H83yX/wCB1ufDTSvEnifxP9v16K2g0vS0/cWkHz/6S38b/wC7WdT35cxVL3PdPSvBPhj/AIRvw3BpSS+RO8e+SRP77ffeuX/4V1fzXk95c39s87u/+si3/JXffbLaZ3mh/g/cVGn9+kUeep4G1vTZvOs4rnz3/jgufk/74arFnr3iHSpp/tMUs8Ecfz+fE/8A6HXdP/sVJ52+HY/3P+eb0AZthcpf2EGpJ8nnxpJVre+ym/7FJQAj1Rua0HRKzblKAKrvTUR6c6U5PnrUgjT7/wA9SJ/sUbPb9KkhhfZQA6FNn361ofuVRtoa0IU+SspFjdnvR9+nOlPqAINn9yo3+/UjvSVYDESpHSnJ/fpyUANpyUfJsp9AEX+/TkoelqAF+WmvR8/vR/v0Fi0x9n8NFH8dAG18N/DH/CW/EXQfD3leYk92k8//AFxj+Z6+7JoU+0zon8FfOP7JHhX7Zr2t+M7mL5NOgSxgk/22+Z6+loU865ndP76R19JltLkpHy+ZVeeryh9mhudlhf8Azo/3N9VftKaVcvompf6VYz/89P8AlnWpcw75kSse/he58/fL+/SP/wAcru5Oc4YT9nseW/F34S6I+j3viTwrYfZdUsv386QfIl3D/H8n3d9eA2001zco6ebsr7Os5kvLBPO+f+CT/cavl3xb4JufBPi260eb57Xf59pJ/wA9IWr5/OcHyfvYn02R4z20ZUpHJ3Lzfaf9b/q/4KbDM7o71NeWz/b3fzakhtv3L182fS8xlzQzTQ/PLKlZ/wBmeGF382XfXRTW3yIk1V5rBPJ+es5msTJ0qab5N/lOn/TSKr15/ZvnbH0u2f8A7ZJTvsaW1tVe8dEmrD2hpyFG5SwSGd00ax+/8n7pKw9VubCzv4ETRrF0dPMk/dpW19+wut9Y+paPNNcwTQ/ceOplVLjEdbJD9+G1ig3/APPOLZU1H2V7ZE30V6+Blz0oni42P72R9yb/AO/Uc0Oz50o+SpEr7g+C5ivvmSnO/nJv/uVI+xKuQpYfY3oAy0epkeo7m22fvoaq+c7/AH6knmLTv5lGjwpc+IUd/n8iP/0Kq+/3/WtzwNprzefqv9+Ty0/4DVU/5gkaSTPYa29s/wDy3TZH/wABp2pJ/pkEP9+P/wBBqr4qm3ulzD/y6yIn/XSnec95cwXKfwSeXXXD+Y5uc8N/bAsETwxoOpfxwal5H/fSV8yp/rtlfX37VGm/b/hLe3n3306+tp//AB/bXx6n+ud3lr5/MI/vT6rLJfuizSbP+WdOTfSV5R6Uh9FH+3R8lAiu6fJVd/79Wn2VVmoAo3L1X+T3q1MlV0+T56AEpUpuz+NKkREegC5D1q0ifP8AJVVHq5D96gCTZ8lO3+/60O77NlR73+Q0DiWIXSpt++qKO/8ABFVpKChaR6dsdEpKAKU3yfPVOb7n9+rlylUZt9BBVm+T7lZ9y/yVam+5Wbc/f2UAY+pO6Qu9eieDLD/hG/CSXLxb53j89/8AfauD02w/tjXrWw/5YeZvf/cWvWpnmhSBIYvk/j/6Z1EhxIZn85E/7+U5ESnP/co/5aSUFBsdPuUlLv8A46Pk9qAEpNiJR/H8lG/fQBC9UblP46vPVW5TelAFHZ/fp2z3qbZ8lGyrII0T56tIlCJ/BVhESoLHJDVhE+emp9/5KWgApP4advpsn3KAI6bsp2/f89FAB/BUtFFABTadRQAn8NLSffoRKAG/P70fcp9MeoAa336a82xHpzpWt4P8PXPirxhonhu2+f7bfIj/AO595/8AxytqUeeZNWfJDmPsb4A+Ek8JfC7S7aaLZdaj/p0/+/J83/oFd5YQpvkdP45HkqZ0SztvJT7kEflx02wREh+Svp6UeSB8ZiJc8+Ydcp++3pWXMm+/d4fv7K6DyUmTfWDeJ5OqwTf9NNj1vSkYQMvTU8m/e2/gnrkfjB4V/t7wx/asP/IR0He//XSH+NK7TW4Xs79Jof8ArpU1+kM1ml+/zwTx+XPH/fRqnFUo4mlyyOrC1/qtWNQ+O3ffNI7/AMdTQ70tnq54n8PP4Y8SahoL/cgn+ST/AJ6I33Kq/wDLGvzytD2c+Q/Q6c/aQ5infu/yVVmmf7NsSrl51jqOZP3KVhI6YGfeTbLb56p3OzZ53/TSrV4m+F/7lVbxPkeuOqdUSrMnyTwp/c8yprbY/kI/9yi2T559/wDHBUcPSCkMbrcKJs2Vl1qawnzo9Z1e7gf93ieJi/4p9x7Kjf5KsOnzvVeZHr7g/PSF6d9pdE8mmvR5Pyb0oL5iRH3/ACVTvPkf/VVJ89Of/SU2VMgM25mdIfk+/XoWmw/8I9ZwJ/A8aRx/79eezQvDNawv/HOiV6s6Q3PkWz/Ps+eqj8BNU53xbDCiQWyfx/vKzdBd3uUT/ln8lO8TzPc3jw/88EetDwfpv+hpcv8A88/kruh7lL3jmOX+N+mvqXwx8V6an3/7Nef/AL9/NXwrC+9E/wBtK/Qzx5bPeaJrdm/zpdaVcx/+OPX522H/AB7QIn3K8HMo+9GR9LlEvcND/Yo/5ZU3f89LXiyPYH/f2UfI9OT5Epux0oAhd0qF0/jqx/H+NRvQBnulQunyVcmSoXR9lUBV++mxKd8/3Kk/g/GnbPb9KkCaFKvIlV4Uq4nyP8lADnTf9yodr1Mn9+if/V0FkKPViF6r/IiU6H/0OgC9/BTdiUQujpUtQBQvE3pWbcp8la1z9ysu5+5xFVxJkZM2ysm8m+TfWtc1z+qzeTC7vVCOg+G9g8z3usP9x5PIT/gP367x4blJvn/1Hl/J/v1j+DLD7B4b062eL53j3v8A77VsQpMiSeddb98jyf8AAP7lZFkVFFIn+3QAJ/AlLT6jdPkoAE3/APPKnfJ7UlFAETpULpVmmOn8dAFVEo2VM6UfJvoHygifPUn8G9IqP9upEoENTelO37/uUb/f9aEegAeo3enb99NoAb9ypaZTkoAd8m+lpP4qWgAoopf9ygBr/J8lLTadQAUzfTko/v1AEde2fsl+Hk1Xx5e+J3i/d6Ja+XH/ANdpP/sK8Rf5Pnr7A/ZO8N/2P8NH1W5i8t9bu3uk/wBxflSvSwNP3jz8wq8lI9gv3/c7PK++9TWyfuar3j77lIU/36vQpXvS+A+VmO+4lYet79nnJ99HrS1KZ4bOeZPvpH8n+/WW8z3NhA83yTb03pVUv5iYDdbT7TpqXifwfPVPRJoZoZ7B/ufwVrbNls9g/wD10SuVhmezm85P4H/8crWl78eUJnlvx70T7M+neIUi+f8A48Z3/wDRVeTvMmzYlfU3xC8Np4n8N3tmnz/arT9x/wBdl+ZK+UU37Hd/kkSvjs+oezr+0j9o+4yPE+3w/L/KRzO7um+pLmZ/Jg2Rfu6p/vvtPz/6upry52bEr5/mPoYkaTecmzyvv1TvE/g/2KvQ/OjulU7l0e52f7FcszYzYXfzt/8A0z8ui2Te6f7FWv3MMyJ/0zqxDbJWUwM/WEdIYN/+3WZWrrCOiQf771lV9Dgf93ieLi/4sj7ds7xLmwtb+H50uoEf/vpKc839+vM/g/4qdNE0vw3fy70ktIXsX83f8+z50r0T5/46+1jLnhzHwdWHJMmT56tfOif6qs+F/n/1tTb9/wByrMh039+qL76sO70fI70co+Uqwuk2vaRbTfc8x55P+ApXpFn+5hkuX+/PXltnqUP/AAn8GlP9z7J/6E9etOkL22yrZFU4PUkuX157NPne6g/1ldZ4eTydNgR/vp+7rnYf9G8YWrv9yTfHXTWyeTqU9s/3N/npW1f+Ugq69bb/AJH+48bx/wDfVfm/cw/Y9VvbBItn2W7mg/75ev0q8QonyO/8FfnX4/s/7N+Iviiw/uarN/48+6vIzD+FGR7eTS+KJkulTQvUFKnyV4Z75Zpd+xPnpv30pr/IlADfn+5UbvTd9NoAPv8A36jeH7lT0n8f40AVdib/APW05E/jqbZ8+2j7n+5VASQo+yrCf3Kr79/3KmT5KkCZ/kplKj76c/8AcoLI5/uU1EqT5Paj/YSgCRKk37Pv1HvdPuU3f8+6jlAkm2OlZsybK0t+9KozJQTM5+/+R65m8he81K101P8AlvOiV02rffrL8Kw/bPGtr/06xvJVCPUNkMMOx/kRI6PuQ7E/eRolQ3jwuiJc/ceTZUz1kWRp86fPR/sUfx/hTv46AG/x/hRsp1FADkSmv/cp2+loAi2VC9Wneq70ARUqJTv46d8nvQAbKfSb/f8AWj/YSgBr0tLv9/1pKAGbPem7N71I9LQAz+OnJ8lO/wBuloAKT/fpaX+P8KAGpTv4PwpKR9iUAEn3KN/z1DvpqPQBa+5QlR76d/DQBDeb/szpD99/3af77V+hngPQU8N+DNE0FP8AlysYY5P9/Z89fCfgDR/+Eh+IXhrR/vpPqUMj/wC5H8z/APoFfoB52xH2V7GXw93mPBzmr8MSvbO81/PN/c/d1rQ/c31m6aieTv8A79a33Er06h4Rn6kiTQojxfx1m3MPnakif3E8yStK8ffcon9yqttC73ju/wD1zral8AEepf8AHslyn34KwbyHZ87/APLetrWEf7M8MNVb9Ems4XSuikLmK+j3O+2ewm+/D9yvl/4i6U+g+OdX0pItiPP56f7jfNX0gk32a8Sb+D7leU/tD6VDDqukeJ0i/wCPqB7WT/fWvD4goc9D2h73D9Xkr+zPI5kTZv8A46rzQ/c87/nnUdzfvv2VTv7/AHun99I6+AlI+9pRNRPktndKy5tiO++tCwd/sz7/ALlZt5/rvk/56JWEpGg22h33m/8AuJVe/wBettEh+33/APqE+RI/45H/ANir1tv/AH8yf36838YXn9q635KS/uLH92n+/wDxvXThaHtp8pjia/sYmtpvifVfEl5dPefJAmzyII/uR1o1geFU2ef/AMArfr3oxjD3Yniylzz5pHruj6PNYeBtI+zf8fVlGk/meV8/nTfvdibfldFRPv8A8NeueGNe/wCEk0SC/wD+W6fJOn+3XmvgmzSHw3a2ejy/6LPG9jY+RL8kj/evbxHb7j/wbK1vBl4mg3OxPNgtZ0eR43i2fx/JX19KlyQPlcT78z0RHffVr7T8lYdtrds82z+NKtQ6rC7/AD1Jx8pc3vv+SpEm+f56rw3kM1Fz+5+d/uJ89UBzfhub7f8AEueb/ng+z/vmvdtm+2rwH4bp9p8ST3P8fzv/AN9PXv0KO9hsf+OOt6nuQiYVTj9e/wBGvLK8/wCeE6V2V4jpcQXg+5/q3rh/Ge+HTdn8fnp5dd5YPDf6amz5/kqsT9mRBX1iHfbOlfAPx7sP7N+MGvf9PXkz/wDfSV+gTvvs/n/gr4j/AGrrD7N8SNLv0i/4/dO/ef8AbN68zG/wD0colyVTyX7iU5H+Sq6VIjps2V4J9SW6R/nT56jT5/np3z7KkCF9lN/joej7/wBygB9OqL/fqRE/v0AD/O9NdNlH+2lN/g30ATfw/PUifO9Qo7/8AqSFH376ALCb3pr/AO3Um96Pv/O9A4jf4Kan39lSbHT79N2PvoKGVK6fJvpr/wB+o/n30ASb32VHMjum+nfP9ynTJ+5oCRzesJVP4bwu+t6vf/f8iNIP++qvaxUnwxhf+zdRuf4J77/0Ggg6p3hR0heLfvqSZ/kqreXjwzJCkUru/wC7SOP78jt/BWppXgzW9bs7q8e/itUg/ubNkn/bWVl3/wDAVoHzmekyb6kR6zbmw1LSrl0uZbafyP8AX+X9+P8A2/7rp/trVy2ffUFE3+3Tv9un0nye9ADfn/77oSn1E9ABvqP/AGKk3/wU3+GgCP7lH+3TuyU3+OgAqWm0nz+9AB/v0tJ9yloAR/v/AD0tOptADqX5Pamx/fpaACl2U3f7/rTk+/QAfJ7VXept/v8ArVd6AI3oSo/v05KALCPvqb/YqqkyVYR99AHqH7Melf2l8Y7Wbyvk07TZrr/gbfLX2BeO6Wbon33/AHdfNf7Ium/8TjxXr3lfcgtrRJP/AB56+mNmya1tv+2j19HgY8lI+WzWXPiC9YQ7Nn+xVyao7NPk31HczbEetvjmeaZ9tN9pmeb+5vqrpszvbb3+/wCY9WkRLPz7xP8AlulQ2GxJrq2SLy9n7z/vqukCa5h3/PWXD/x7PD/zwk8uti5m+TZWSn/H5Oj/APPPzK0pCmZMyffSuZ+KmiP4k+Gmowwxb7rTv9Kg/wC2f3//AByuwvNiPUNnsS8ezm/1M/8A7NSxVD29GUDowtT2FaNQ+J7x3+//AH6hmhe5m2f9M0roPG2gzeGPFWr6Jc/8uU7xx/7n8H/jlZ9hC8zo/lffr8oxFCcJ8sj9Vo1YThzRNBIXSz/1X/LSsmZN9z/20rqnh2WCJ/00rD+wPNvrCUSoyKb3P9m6VdXj/wAG968thT5H3/feu48Z3kNnYJoiS/6Vex+Zs/6Yq/3/APvuuPRNn369vLaXJDmPIzCd58poeHodjz/8ArbrI0HZvnrXrukccT3XR0ez021h1iKxRPsNtBPBH8ieS3zW+nSp/BcSP8/m/wAVajp/y2v7qWf53+1vJ/0x/ey70/2ZfLirm9BfztN07ZL891J8l3fR703qn+kTXSf3I0+SGX+Fq3t+leS/nWssNrZQQySQTyb3jsI3/wBHhd1b/W3D/Pv/AIlr7SHwHytT4i9Z/b/J3v8AI7x+ZJUyTXKfcrU8PWE01s6alLvvUkfz/wDpm7fNs/4DWlNo6f8APKuaUSDHttSdH/fVcv8AUnh0263/APPB9lV7zTXhT5PuVh63NNDps8P398flx1MfjAtfD1Hs9YtX/vp8/wDwKvoSwm86z3/x14L4bT7HeWX+3a/+g17hoM2+wR666kf3RwVPiOf8VJ9pufJf7kEf/j9dF4M2f2Da1k36faUnvH/jrQ8Ev/xKtn9yR6rEf7uM1LnZDc7H+5P/AOh18l/tk6UkNz4a1X/bubT/AL6+avqTxPeeT9lf+4++vAf2tLP7f8PYNYeL/kHarDJ/wBk21w1aU54fmOjA+5iD5L3/AN+nQ/PTX++7077iV85I+vgWN/ybKdvqF6N/tUjHffp33Kj3+1OR/noAfSP/AHP4KSl+/QBGlSIm/fvoTZso2P8AwUAOSpof79V4/v1N/H+NBcSRNlTP/fSq+/3/AFpyO9AEtJv+ejf8lGygA/36b/v1LTHSgBtNd/3Oynf7dRz0EzOZ16b5H3/wJW58Orb7N4Jsnf8A5b75/wDvp65fxb8lndP/ANMHrvvD1t9j8MaXbJ9xLRP/AECgRvfCLwxeePPio+iXMvl2trAmzZ9+TzPv19ReJPD3wu+DPhW11Xxn4civUupPsk8/lec8e75l2J/8TXyD4Y8T3nwx+IunfEL7VK9rBJsuo44/9Wn8G+vua28bfCD4taVA9/LpmqR7PM8ifZ+7/wC+qI14wnynPXjOZ5/8SPhj4A1XwfpfxC0TRv8AhGrp9l1+/j2Ps2bnSVPu/Mn3q+Vbm50ez8Q3uj2F1+4Sf9x/uN8yf+OPX0h+0/8AE7w3f+Ek8E+G7+2kT/VzzwS70tIV/wDZ/wC6lfH7+FdY1W/n1j/j1893kjTzP9Wn3U3/APAKqUucqhGcPjO8+f79N3o9cnD4S1uGaB016VETZ5myV/8A0D7tdNvrI6Sbf7U13o30b/4KAD7j0lM3pR8+zfQAfP70J++o/g/Gnf79AA9N+/Td+z5KN+9KAHb/AO/TpPv1HvT7j07/AH/noAPuU+mfJ70I6bKAH0qPR8mz5KN9AB/v07/bSinff+5QBXf7lV3q4/yVVegBuzf9yjY9ORPkqR0/v0AVf4/wqxDvdNlJSolCA+qP2RbPyfA2t6q//L1rDx/9+0Ra9ys/3zz3j/x/u468r/Z1s30r4M6Q/lbHupLm7/76mevWrOH5IYf7ieY9fUUI8lE+NxkuetI0kTyYdlU7n5/kq5M/9yqP35t9XS/mOYbc/JZ1nu/k38E3/Pf93WlqT/uURP79Zt//AMsX/uSJW9P4BxLWze/z1Rv0dLmDZ9//AFdaXyQ/O9ZesTJNs2f89EqqXxkzKt5CiJ/t1nzJsdLn+5W08OyHfNWW6b0eH+CumOozwv8AaK8PbNe0vxbD9zUYPsk/+/H9z/x2vNbOHZMiV9JfFHRE174dXuyLzJ9O2Xyf8B+//wCOV86w7N6PX59nmG9jiuY/QMmxPtsLE0Jn/wBGgX/frJ1XVdN8PaPe+IdYl8iysoHnnk/z/erYmTfsT/Yr5Z/aT+J0WsakngDR5d+naXJ5mpOn/Le5X+D/AHF/9CrzaFD28z0a9X2cOYteCfEOpeOdS8Q+NtV/d/arv7Jawf8APC2j+4ldPXPfDGw+x+A9O3/JPeyPd/8AfVdNs+5/zzr2YR5PdPInL2nvFzR0+d9latUNNTY71fqJDiey+d9md7y5ilneC0trSfyLb540b/j3sXi/5bW7f62R1+7XSWdzNePZQ2H2a6vU3/Yf+eMlyv8Arbm3l/jt4d+xYmrl0mdEsrmwl3zpazTp5HyXke75bi+t93yzbv8AVRxVY0ezT7B51/5Sb3SOeRJPsfmTfet7GJN3+j3H/PSX7rNX3VL4T5OfxHUfDHW7C58Q3ulW0u9LqBLpHk+/P/C82z+Dd/ClelTWez7leF+G9b+x+P8AS7mztbGCBHSN4LH54YEm++jy/wAb76+lptH31jXj7xhUmcfeWe9Pnrj9esP9JsrPzfkup/Lr1C50GZ/uVwPjmzm03VdEheL77v8A+gVlCPPMmMhsNn/Zuq2Vm8vyI/lpJ/vfcr1LR7yazsHh/j+4leYvM+t6OlzDL+/07/WV6N4evHvPsSP86SR73ruqx9wyqmpqsMKWyQpFs/jqHwTN+5urZ5fngner2pb3fen3K53RLn7B4knRP+XqseXnocpBa8Q/adS1J7C2/gj31xfxy0RNV+BWvW0MX79IEnf+/wDu33V6BrFnc6bc/wBsWfz/AN+o/FWj23jDwTqlnZy7HurGaOPy/wDaT7lc+Ilz0bfZNsLPkrH5s73dE2U5Kds2Js+46fJJH/u0I/mV81VjyH2FKXOSfPRNTvk96HT5P+B1gaDUenffpv36E3v9+gB2z+OjfR8/vRs2UACU+mIn8dPoAfD8nz1Ij/36hT/YqT5/v0FxGv8AJ9yWhHShfv0J/wBcqCyb5PuVIj1BUqPQQTfP7VG6PT6imegByfcqOZP3L/7FHzp9yi5f9z8lBMjh/G3/AB4T/wC2nl16dYfJYWsKfwQIn/jleX+M/ns/+2if+h16l9xE/df8s6JCKNtbWH2adLP54HkfzP8Af/jrLfwrYW0zzWctzZO/+s8iT5P++K3rOaGazSZIvIR/4Kdv9/1qAMeHR0T/AF0ss/8AHH5//LP/AHEq8iIj1bpn8f40FkL7NlJS/wB+mvQAffpaZ/BvoegASn0ibKc6f3KAD5aSnvbPs/1Wyo3TZ9+gBru9N+f7j0b0T78sVQveWf3/ALfbJ/20SgCb5PuU59/8NU31XR0/12qWKf8AbylRv4h8Np9/XrH/AMCUoAvb/npyb6yX8T+GE/5mOx/7+VInifwqnyf8JHY/9/aANel+f2rL/wCEk8MOnyeI7F9//TWrCeIfDb/8x6x/7+0AWt7/AD76dv31V/tjQXT5Nesf+/lSJeaP/BrNj/4EpQBa++nz1RmStCHY8O9LqJ/9yVKq3Oz56AIYX+f/AGKm2fx1CmzfvqxH9ygCP7iJTX+SF3/6Z1Yf/bp00PnIlsn353SP/vr5a0pR52TP4D7g+Fdg9n8N/CGmv99NNhkk/wC+N1ehWHzu9z/frnfDFn9j02CH+C1ghgj/AOApXUWybIUr6SXuQPiqvxkdy9UbPek32Z/9X/BU1zNveiaHZbecn30q/sGZX1J/9J2JUdzbb0ff/v05Hhmd5vNqvNc3NzDsh+4lbR/lHAdNN50KJD871XubN/sbun+sT95/3zVywhSGzR/+mdQzXnyeSn/POrj/ACxJmVX/AH3/AC1++lUZk+d0/v8Az1e02FEs0eq9ymyaN/8AgFbxCBDYQw3KT6bN9yffHJ/uNXyvf6U+j6xdaU/37K7eD/vl6+pE3215vrw/406amiePH1KaWKCy1G1+3STv9yPb9968HiDC+0jGofQcP4rkqypSPE/jl8RU+Gngl7y2uok1vVP9F02P/b/jm/4CtfEcML3Lujy70jT95JJ/y0dv/s6674zfEub4keNrrW3+TS7L/RNOj/6Yr/H/AMC+/Wf4S0r7Zr2iaI/372+Sef8A3F+avFoUPYwPYxNX20z6CsLP7BptlYJ/ywgSP/xyriJTnT53qwkPybKoZNZ9JKs1FCmypaykWen3lylzoMG/yo4J5Ejkgnk8mznmjT5LZJV+ZHhT52/hZq1Nmm3Og6dYalFFvnRESDVZHebTd3zRebEvzXFxJs+V6wfO3+DILzyrmD/QUtP9LtvOhgtmf/l6T+/cP8/m/wB2uq01L+ztrW20q1vrKyffH+4iR3kvF/e+d9vl3f6P/Av+zX3dCPu8x8rU+Mo69Dc3+pT2zy3XkJAk8bz2yQ+Ru+bYiL/y13/Jsr3Tw94hv9V0HTr/AM2VHeBN8b/8s3/jrxP7Zpv9pJqWlfZrJLp/3cnmPcv+8/59U/vt/fr0r4dP5Om3ujv5SPZXb/JHLv8ALRvm2O/9+liTiqnYXOsal/BdV5/rGpXmpfEK1tnl3/YrXf8A99V2lz89cLpqPc/EjVJv+eECJWdCPvkQNjSk/s3xP9j/AOXXVI3/AO+677wT/o0Lpc/8uvyVwvieF4bNLxJdjwOkm+u88JXNteWG9/8AlvJXZifgCR0Vzsez3pXI3n+ja3ZXyfwPXXTJDv8AscMvzpH5lcj4n3+Smz/X+Z8lctCV9CDvkeG5tv78b1k6fbTaJefZvv2U3/kOm+Hr9Ps0Hnfx1oXlzDC6Jc/x/crjceXmiNb8x+cPjnTU0rxh4hsE/wCWGq3Mf/j9c6leoftCWH9m/F3xLCn3J3S7j/7aJXmKOlfP1/jPrsLLngWERP4/v059lR76kR0rmOsbs9v0p336ds3/AHKm2J/BQBX2fPRsd6nqLZ/rKB8pGifx0fcqSnJ9zfQHIRpUjvUVPR/4KChyU5HfZ89NSnJ/yzoANnt+lO+5SU/ZvoAN/wDfooT50+emv/coAk/g/Go3TenyU5fuVIlAHB+M0f7G7j++n/odemO/7nenz/u6898eQ/6G/wDwD/0Ou4hd/syf9c//AGSiRBHDc3joj3kXkO/30qwmx/kqm6TOkHnfO6f6yT/npVpPkqCyb5PejZTfnSigBr/fqP8A36keo3SgBtN+ffTvuO9R73egCZE31X1KFJvI3y3Kf9cJdlWE/wBWlRzQvebESXY6fP8A6qgCi+g6Jc/661ld/wDppczP/wCzVC/hXwx/Ho0T/wC/K/8A8VV77Hfo/wDyFIv/AAGo+wXn/QUi/wDAagCqnhvw9D86aNbVYTStB/6A1j/36SmppupPv/4nMSf9u1O/s2/T7+s/+SyUACaPo6PvTRrGP/t2SrSWdmn3LC2/79JUKabN/Hqlz/36Snf2VN9/+1Ln/wAcoAsb0/giiT/tklG/3/Wq6aa//QUuf/HKdDpXz731S5oAmTZ9/wDv06GZ9/zxRbP+udN/seH/AKClz/38pyaPDs/4/wC+/wC/lAFjzoX+/YRP/wBsko8mwf7+l2z/APbNKj/spP4NUuf+/lO/sp0+f+1Ln/xygCF7CwSa1eHS7ZNk6fvPK2Vem01Heqt5pu/yJv7Uuf3D7/L+T95UyXNzN/y1oAz5keGb/VVIn3/kqS5Te/z/AH6jj+/QBI6bq6L4e6I/iHx54a0f/nvqUO//AHI/m/8AZKwUTe9elfs/J/xeDRJn/wCWEFy//jm2uzCx55nNi5clKR9mQw+Sn2ZKvP8AInkp9+qsM293mf8A7Z0X8z2dm83353r3JfEfHDQm+5/3Kmmf5Kjh+5v/AL9R377LZ/771ovekIydNheZPJ/grUh+zWyOlNs5oUtk2VDM6ed/tvW0vfkBRR3mSdE/gkq06IkKJ/sVThfyZrpP+mlWkffDWwplOwRPsyJ/v0X6fu9/+49Otkd3dP8Abq5Mm+22eVVSkIxb9PvvXzf/AMFBf7StvgCmvab8my+hsb5/4/s0n/2dfSkyb4UevLf2mfCT+PP2b/HnhhP9fBpr30H+/bv5v/slZ4ynz4c6sHPkqxPyN/0a5v0RPuQfvHr0D4LWz6l8Qp9Sufn/ALOsXdP9+T5a87s/3Olec8vz3X3/APcr2T9m+z87RNb1h4vnnu0gT/cjT/7OvmKp9PSPVkSryQ4+/UcKfPUzv/BXKdIJT6Ym/wC49PrKRZ3fh7fc+BrVLO61O1RPOd7v/XPHt/4+LyVP+W1qqfuo0roIUtrD7Fv0ax+xfYUn020e5mubCD7P9z7Par9+WSL523fdrk/AEM1zo91Z2cV9e3UF2n+iQS7Jv70UNu7fLs3/AL2ZK6aHW7m2hnmsL+K62f6VdazaR+TDdzf6q4d5W+5Er/IsUXzS19zhvfpRPmK/uVTWtkSZ/O0SLYl153l/Zfkfyf7kTt9yL+9L/CvyrXUfDfUoU8T3thbeV9lurFJIHg3+TJ5fyvs3fM/+/XLw6bbTW11NeXX+iwbPPjn/AHMP+/cSr9//AGbVa3tB86Hxnp1/cxSwTvvtP3/yTSQsnybIl/1Kf3UrevGEziqnp0/+srk/B9m95r2t6r/z3n8v/vmusm/v1yvgbf8A2Il+nz+fdzSf+PvWWG+M54G5qtg/2byZovvyJW54DRLzSns0/wBfZSVDczJNcwQzf88/MqPw3MmkeJ9ifcukrpq+/DQZ31n9m+e58r9+/wAlYusWaTXnkw/OiR1sXKJDcpMn3Hqr5LzQzXf9968+lo+YDP8ACqJeWb2z/fgkqxeX6Jc2tnef3/vyVV8Nv9g1V7N4vkn+etbUv7Ne/S2eWLen7yqn7tUiR8o/tY6JDZ+LdL8Q21rs/tG08iR0+5I8f/2FfP8AMmx6+wv2k/DH9pfDqe8tvn/sidLtP9z7r18f3ifPXg5hS5Kp9Llk+ekCVY2pVWFKsI+z7leZI9YkSpEf5KhepPuVI4Dvn303Z7fpTkf+/QnzvQUR8f8APKhPko+ffTvuffoAj/2/v07ZTad9/wC5QWO+5TUf/wAcoenInl0EDfuPvp38NGzfUiJQBGm9Pkp3yJSUu/f8lADk/v07f/BTUqTejv8AJFQByfjlP9D3/wC5XUJvezRPufu/9ZWD42RP7Knd62vkewT7T/qPI/eUSJiWLCFIbaCHzfP/AHf3/wDnpVrelV7byUtkS2+5/BTvnqCiwlFQpTk3/foAc9NfZspz7/4KjffsoAa9R/7FSbPeigA+SpIU2P8AJUfz/cp290oAHfYj1G9y+9KmTZ89VX2ffoAHudj037Y71Hs+/Rs/5aUATedvoe5d6h+5senffoAmSZ3SpkqunyVY2UASb99G9EqPY/8AHTtnt+lAEjvup2/+/wDPUex/4Kk2UATb02f7FNR4Upv+wlN2UASXOz/nrVeFKkf50oh2b6ALkMNewfs36Ilz48utSf7mnab5n/A5Hry+ztt6b696/ZXS2hv/ABDczS/O/kwR/wDAa9HAx9883MJfupH0JYI+z7Tc/J/zzjqP7S9zcvv+5/q46hubzzrn7BD/AMDqxDs3oiV7nLb3pHyw6wSZE2TffqO8++iVaT5Lz56rv++md/7lTH4+YCO2RPJ+f+CoXTY++hN++dP9umzI++umAGem/wDtK6/240q8iI8NVUh/4mT7/wCNPkrQeFIYUdKqUgKcPyXN0ifwSJVp96VDN+5vEm/gnj8v/gdWEffSAyXh+R0T+B6qpZ2148+m3nzwajA8D/7jJtetK5+S8/67p/6DWfc/uZkf/brX44cooS98/En4i6J/wh/jPxD4Pfzf+JJqt5afvP7kcz7P/HK9w/Z+sHs/hppczxbPtsk13/30/wAlcz+3/oKeD/2k/F6Qxfu9bgh1WD/ttDtf/wAfr1TwBpX9leD9E0r/AJ9bGGP/AMcr5av7h9dhffhzG5ClSOnmVMifJTXSuM6yH+P8aWnU2spAb/hLUnSz1HTUiln3yJ+4+0+T8jff+yv/AM/sn3F/2a9CSb53S8l0ySeDfaTwSb0eB9m6JEVflt/L+5JK3zM33a8/8JXNtbPPbTeVsunTzHn+SGBF/jR/4Lr/AJ516B994HT+00TUd6SQPbIjzvG+1P3SrumuPn+Z2bav3q+2y+V6UT5vF/xZGlpSXKeRNDFLPI+/yJI7b/V7vm/0K3b7n+1cS0TTTWc0Gqp5SIl3DO8nm/af3yvt2I//AC2l2fef7q06FPJ+2pD5T+Xs+1okuyH5vm/0q9b5n/65RU6/fVU0r5IovPSB9n+kpYJHbM+1v4f9Ht9nz/3mrskc3KevXL7LZ5v+mfmVy/w0d7DTbW2ufuTu8kf/AAJ6m+3unw3+2TSxb00p97xyu6fKn8DtVjwxbI9hpE0P3/ISppRMJRO4mtobnUkeH7iJsrndYR7C/gv0/wCWElb2jv8A6x3/AI5KNYs4byzdElqoy5PdMzpLa8S5037T/sVNbW3+gJDXK+FdSd7CCwf76T+X/wB812z7H+dP4K8+r7kyTk9S86w1KC/f7nmfPWhfWelTXLzTRf65N/mU7W7ZJkdErP0HUkuf9AufneBHStrc8ecDmdb0Sz1K2utHeWV7W6jdJE/3q+HdesJtKv7rTX+/azvBJ/wF6+5PEN4mlb3/AI6+P/ijbQp4z1iZPkSefz0/4FXDmlL3IyPYyqXxROL/AI/wqbf7/rUOynV87I+hgS1OiVXR/n+Spk+RKyKgSbKPuUlP2f36ooj/AN+mv8/z0+mfwbKkA+58nlUI9Cfc+ehEoAk+TZSUqUlEgHp8nyUb/k20yno71ADdn36EqT5H+eo/v0AORH31LTPk3075qAMXxb8+lPWlvSGzSZ/uJHWf4n/5A77P+eiVqO7pbb0i890j+5QBYhdHRHT+NKKqw3/2n5IYt8/l/vI4/n8v/vmo01KGb7kv/slAF6pE/wDQKr7971MlAEn+3Td/v+tCUbN9ADX/ALiU1Kd/H+NRulAEiJT6fs/uVG9AEb1G/wDf/v1Js/uU35/agCH5P4KNiffp9J8/8dAB8m+jZUf8f+qqTf8AfSgCZESpk+eq6bEffVhKAJHpuz3oej+OgASn0iUbP46AHbP7lO/g/Cm7PnqT5N9ABs3/ACU6zhTfS/8ALap7ZNj/ACVYHQabbI6V6p8K4Us0SGz83+0fPef93/c/26858PQ+dsT+/Xsnwchs4by9m/1k7z7JJP8AYX+CvVy3+KeNmX8I9g0SGb7H5z/PPP8AvHeti2jRP9+qOm/uYXT/AJ5vWhC++vZqyPnQvH8lEf8Ajf8Ad01ERIdlFynzpv8A4Kd8jpvSsI/ABmv+5v8Aen8cdR+dM++nXnyX8CJ/y0R6khR9m967IfCBTdJnvIP+B1ee2dLP55abN8kyTVad/kdP7lTKQGXfpshtf+u6Vag/1tR38O/TX/vp+8/75qaGZPkf+/VcwFfUk+RH/uOlU7+HfWpf7PJf/crPf99Z7/8AYq6UgPz/AP8Agpr4A/tLXvhf48SL/j6nfQ7uT/dfzYt//kSq+jp/oyf9c6+gv2ydBs/E/wCz3qj3kXz6DqtnqMDp/wAs3WZF/wDQHrwnSvktkT/Yr57MoclU+py+XPh4jnqP7lWnSqr15h3kL0lK9JWUgOt8DaUl/Dew22l3N1qLxvPaRyW2+2/d7Pn/ALvmr/C7fLXVab/oyTokXkO8Hn3Ukl95yb5E+f7Rdf76f6qCsnw3bQ6Vpv8AplhpCP8AYUvkkupZpnndZk3/ACKy/dT+CuqS2mh1LfNFK91Bv/s2P7ND9p2b92+3tV/dW/8Avy/NX22Xw5KUYnzeL9+r7pe02aGa5tZpvNnunfy7GSS2/wBWmzzYvstr91Pk8zbLLUl/eX7+fbaVdfPBJskkgi+0+Q7ff3u3y3F039z7q1VmtrZ4Xh+1W0+nI7pd/wCmv5Mjxv5qfaLr703yP/qlqbWE0dLNIbnyvsSInlpdb7OGS2+7+6t1+ZE2P/F8zV3cvvHMaV/qt4nwi1uG/luftVjA9pJ59yk029v77r8vzb67Twk+zStLT+5aJH/45XmPxC1K2sPBmqWcPmpHevbWsCSWyWyfu32vsi+99zy/vV6Z4GuYbyw07/rmn/jtIzqnolnCkKQQvFv2VDqVsju6W1XLD99c+d/BRfzIltO/lfPXPze+YHE+GLm5tteeGb/nu+yvTEf/AEbe9eZ6lbPZ3Nrcp/A9egaVefabPZU4mHu8xI6Z/JheZ65+aFNNubW8T7/8f/Aq3NS+4kP9+RKh1KFJt6f9M6ilLQDkfiFZzXNg80NfI/xL/fawlz/fgSP/AL5r7Imf7TYPZzf8sK+V/jNo6WGqo8MXyPvrDMI/uj0ssn+9PIZvkpu+nTfI9R7Pb9K+YkfTwJIXerCPUVJ86VAy1/tvRv8Af9ahR9/yVMlSWDv8/wA9H33pKdQAj7KEpKdQAvz76HpKfs96AGpR9ynJR9+gA2J8703f/wCOU776bKNiJ89QA5H+TelOd33/ACVD9zZU38G9KAMvxIn/ABLXT++6R/8Aj9alhpU3ifxJpHgyzuvsr6pP5bz+Zs8uH+Os3Xk/0OD/AK7pWTrdzNYa3ZXjy7IN/l+Z/wA83p8yCX90+sL/APZ++Htholk/i3xHcwfYp5nSx0258mGSGNP40+98v8TtXi/jD4aWdtYaXqXhXWZXutUR/MtPvpH8/wAn/fVdNefD3xb4w+Hs8Om6pqenQXse93tP332vb/yxl3fNsb+LbXpnwx+C3/CPaC/iTxtrNy9rZQfarp7qPydjqn3Il/giX7i1UqkJ/Cc9OM4e9M+XdHvUe2/0z9xPB+7nT/nm61qQzI/3Jd9c3qVm/iHW9X1vR4v9F1S+mnj/AHnzx/P9xKIfCWpTPveWK1Ty9n7iR3eSoOg6RJkm3+TLvf8A6Z/8s6mR9iVg6P4J03R5p7y2urnz5/8AWSeb/rK3Nnz0ANeh/wCCnP8A7FR/PQBY3onyJUP3Kc7/AMdN376AG799FGz3p2+HZ8lAEVFP3p9ym/J/HQA1ER3p2z+5Tk+/vSnf8s5KABE/v1MmzZUf3KmTZQAbEp2zYlO+5Ttm+gCPZ7fpTvk3/PTtnvTtmygCPf8AP8lTJ86b6j2bPnp9AEq/fq5DD8m+qcP3E/dVctu1WB1XhhNldt+zl4zttb8eeNvBL2sqT6LOk/n/AMEiSJXF+Hk2Ij13H7OVhDpvxL+Ibzf8vv2Cff8A8A216WW/xTyMy/hH0hZ20MLvMkv30q5Zpv8AnrPmdIbOB/8AbrStn2W2969qp8J82Rwzfabx0/uU6Z9iOlVdK2JNPs/v0Xk3nTbKFH3uUspo/narA/8A0wetTyXf7lV/JS2eB6uJ5z/7FFSQEN5Cnku7y/cpts6O+/8AvpUzpCm9HqnbP+53v/BUx+AgsbPvo9Zds7oiQp/BJsrQ/fXj/J8if36rwwpbST2yfwfvK1jICxcx/wAb1l7HS2eF/wDlm9bW+H7lZdym+82eVs3x1VKQHjfx1sP7S+FfjXR0/j0550/7Z/N/7JXzDpUyPbQTf340r64+J1n52lX0L/curSa1f/gSV8c+D5vtOlQbP4I/L/75rys2/in0WUfwjWnqq7vV65T+/WfNXkHrEP8AH+NLRRXPID1nw3ZvNqWqIms32o/6Wkj3djbQ2zyJNDtdJbqX5UTemz91VzSryb+ytmj6XY/Zf9ZJHHI/2Od9nzwvK3727fen8Py1R8PWdnYaPBDf/Znn8iaxg8y5fVZoHhm3Jsii/dJ9+uitrmZ5nv0iltZ4Pv8A72F7zYvzfO/+otE/1nyL81fe0InzNUsXLw/2lBs+0vP5afZYJI0eb5U3J9ntV/dQ/unk+eWs9IZrnY9tf3Nq9rP5l39hjS5mk3fupfNupfl3qj7/AJflWr1npthbWd07y2z2U+/zP3rw2cnlv/y1uP8AW3D+U/8AD8tR6lNpv2m1ttSiidE3+X9rjdEktpP3Tpb2UXzOmz+9W8TM5X4taVbaP4PfZL/ptrdwvO8Eb3k0jwvt/e3Df3onj+7XsHwrf/iT6dN/ftK8/wDHOlfafBOsabeeVNe/YXkjju/nm863T+C1g+VN0X96vRPhukL+FdImtv8AVvYwyf8AfSUzGoerab8kO+ptSS2mSC2/jeodH/gR60Eh+03jzf3PkrzqvuTOc4vxJZ7IX2fPWt4Ym32aJUmsWaf6ms3wxNsuXtv7kldPNzwJNzVX2PB/v05JkdKL/Z9pgT/pm71ReZN+xKzpR90CnfokN5v/AIH+SvA/2gdNREgmSL+N5Hr3y/8A9MeCzf8Aef8ALSvK/jfpvneHp5n/AIKWJjz4eR1YP3Kp8l3ifvnqtV+/T99We9fIyPrIC09P7lQ73pyf36yNCbe/36m3+1V0pybKkC15j0IlQ/J7VJ9z56Cx38VN/wBj79O3+/607fQAbPnpyPs+ej7lFAAlSJs31ClSJvR3egBvz7/no370+SnQf6ymumz5/wC/UAH8Gypv7iJRClOdET5PuUAZOvOifYrb/nvdJTte0fR9V0d7DW5dkE7psk/2/wCDZVPUt83iHToUi/dpvnrcfZ+4tprWWff/AOQ6ANDwN8TvjN8K4U03w3qmmavpaP8AJa6lv/d1oeOfi78XfivD/Zvi3WbHTtI3/vNO0qN0ST/fdvv1kun9+hIUpezgOXvle2htrC2SztotkCfIkcdT0/yabs/8cpiGo9O+f7/m07Z703ZsoAZRTqZ9ygBv+3Tv4/xpyUlACfJ9ylpET5PnodNlADf4HemU/wC5Tvk+/QBHv2PUtMp2wf8APKgBtWE30ypYfnoAd9z7n8dLSp/sU6gA+f7lHz7/AJ6KcnyPQAf7FHye9PpU37KsCSHfVyHZ9yq6b0qxbJvfZQQddo+xIU2V33wWTZ8UdeT+CfSraT/vl3WvO7B9myu8+F1/9j+Jdq//AEEdNmg/4Gr7q9DAy/enBjo/upH0BfzP/Zux/v8AmVpXlyltZwQ/xvWDZu9/efZn+5/HVqzuf7S1j/pha/IlfQSifLF62/czXSf7j1YtoU373qqj+dqs6J/cStRIazlLkLK9/wDIkbp/A9WH2I9R3k1slm++s9JrnUUgSGLZHs/1lTGPOBaubmPztkMXmPUNhbO6PNefO+/fsq5bQ21h8n8dQ70hvHT/AJ70f3YkyJnm/ufwVVufnuYHT+PfHUn3Heobl/kSb+5JV8oiw6PWffu8P+k/3K1HfelUb9N9tsf/AHKqkBwfjyH7Tps+/wD1fl18M+DLl/tOqab9x7K+mgkT/gdfb3jZ3m037N/fR46/PebW/wDhEv2ite8N3ksSWuvWsOq2v+//AKqX/wBArhzeHwyPdyifuyiepTf36y5vv7HrWf5031m3n3zXhntlaiiiueQHuN4k0KbP9ORPI8/yH2abbRpJD/Gi/Mnzp/vUQ2fz2tnNa2yIkjvBBJbOiSIr/ft7Bfmm+R/vy1m6bZ3N48Dw2v2V7W1hkj8j/XfL/H+9ZlhTZ5n72X5q3rBHsPP/AI7Wf/j+nS58m2k/5ZP5t7L+9mf/AGItq1+gUuc+UlItTQ3lzqT7PtP2212eZ9ya8/c/K/yf6i0Ronqjs/0+d3v5UtbV3ku0sfn+Rf3Uvm3sv+w+/YtSTP8A2PpWy5iingf76fPDbb4f3Uvyf6+7fyvnqr51zDfo95YXMjp+8gju/vyIvyv5VlF/0y/vVpEyNC8R/wCx7rTUlltbX545J7WX7HDJNGnyO91L+9m3RVvfs938N/4A06GGXz0gTy0k83f91/79c/5NzDvs4br/AE149ifukvLz7TD+9i3/APLKHzIvkWpP2e7lLa51fR0lldIbt3RHlSZ40b5vndflrQKh9FWHyJ5z/wAFWLZ7mGHf/fqHf/xLUT+++ytB4fkRE/gryKsvfOUy7+5mf78VcrC/2PW0/wBuu4uUR02PXE6xbbL/AO2J/wAsa6qEvd5QOomTfM9z/AkdY6fO9aWjzfaba62S1jzTeSj/AN+ilH7JRctkSZ57nyv+mcded/F2F5vCV7/sJ5lemW1t5NgiV5/8VEf/AIRLVH/uQPSn/CkaYf8AixPjfUvv76x3RP4K2NV/rWXMmz5K+QkfXUiKl2U2P79SVBsMp9PpNn9yKoAcnyffqZ9lR/fSpH31I4jn3075PamUqUFEn+3R/t05ETZ89H+5UAN3ulO+f3o2U75aAG/7lO+fZ89H/wARR/DQA5KH3/wUb/kqveTbLZ3/ANXQBi6U6Xni26f/AJ9bTy/+Bs9dUiXn2lNkUX2Xy/3kn8dcv4GTzrnV9S/6b+R/3yldZ5MyXPnfapdnl7PI/wBugBr0VI6UtA+UbSf7lO/2Kb9ygQ16b86U5vv03/YoAbv9/wBaWmf7dO/26AHf7aU2T79OSm7PnegBKdSbN/yUPvoASk/g/GhP79LQAiffp9M2U5E/v0AORN/3KmhTZ/y1qNNlTbH/ANygsE/26d9ymU96CBz73Te9Gymv9zZQiPQBJ5b1Iif36jT5KsQpVgTfJ71as/8AXf6qq/y1es4aCTUhf56vWet3OieMPC9+kuxPtzwP/wBtIXrNT5Nlc78S9SfR9K0vVU/5ddVtn/76fbXVhZfvYmGJj7kj7K028ms/D0+pP/r3T93/AMCre0S2Sw02BH+d3/1lcv4eSbUk0iz/AOWCQJdT/wDsld4kMKJ/uV9TKR8nMLb/AEa5+f8A5b1Ye5/ghqvcunnQO/yR1Y3wom9K5pfzEFd9N+0wu95VhHhe2g8mh5t8P+5Udns+eF/4KJf3gHOiPNveobz5HgerjolR3nzwyIlEZEA6JUbojpsf+OmwzPNClRpv3/J/BV8oDoXdIUR/vp8lR3n+ppyQ/vpv3v8At025+eF6uHxgee+J0+//AHEfzP8Avqvyx/bkfUvB/wASPCHjPSv3F1BHcwb/APdfd/6A9fqp4q/1O/8A6Z/+g1+b/wDwUU0TzvB+l63DF89rrH/oxKnHUuekehgavJM6j4M/EvSvid4P+320v+lWX7i7j/jjeuqvPn318VfskeMn8N/FlPD7zbLXxDA8D/8AXZfmSvtm8T5K+aqw5D6WlLngZqU+k/jenbPb9K5pFntmj2E0Nsjpa3LwPInl/wCjO6SPvdd6RN803/LP97L8v+zWhols95N9pufN+2vJ5cj/APISvIEmTa7u/wDqLf8Aep9xaybZ38lIYZYtl7/HdyzOkjsm5P8AprcP8n+ytdB9je5f7HqUsqI++0SC+k+zQ7Jk82J0sov7rp/FX6EfJSGvcujvcv5r3uxJ7vyJUeaN/wDUS+bdN+6hT+P5fmqnonkp/p6RW29J/MeRJHS2/d/fSW4b7+5P4F+9U2vXMz2fyRfZd/8ApSfbo/8AV+Ynz+VZL/tp9+Wqug2149nBMnmvdInmWkf2bzrmR1/ep5UX3U3J5iM7feqyA3ol+lmku+1R/wDQZJInhtpHj/f2/lW6/vbjcjyJ83/POr3wWtns/H/itPsstrA98kkCPbJbfJIiN8iLWD9peHWLqHR7re6P5cn+nbEg2v5sSXV183z7HkTyoq7b4V6IlnrGovZxW3kJOnkSWltMiSIybvvy/M/3/v1ASPeLaHfNAj/wR76vfc3ulVdNfzknuf8AgFXvkdP+edeRP4znKfnPsffFWHeWyTQyf7ddBcpsh+T+Oqd4myH/AFVbUpEmP4bm2TTw1R1jfDfon9+SrCJ9mv8Aen/LSm+J4f3MF5/zzrrh8ZRoXNy6Qo9ef/FG53+A9b/69HrqnvPO01H8qvL/AIqXL/8ACJaon73e6VNeP7qQ6H8WJ8x3/wBysmb/AG61L/f9ysuevjKu59jSIKelRU9N/wB9Kk2Hfx1InzvUf3/nqb7/AM9QAfx/hTt6I6VHv/v0bPb9KkcCTf8AJUyf3Kh2b/kSpIf79AiZHof7/wAlO2J/BRs/jSoLD53+/Tk+589O3JTfk9qAGv8AI6UOn9+j79LQAqJWbrbultIlamxNmysXxJNss3f/AGKIgSfDdN/hvzn/AOW91M//AI/W9DDbQ3M8yS755NnmR/8APOsfwGiJ4S05P78fmf8AfVbFt9jd3e2i+d3/AH/+/QBYemUkn36SguQv3KH+f79En3KN/wDyzoIGuj/fproj1J8/zpUbfcoAj/uUbPb9Kd/B+FJQAqfco/36Sn0AN/j/AAoffTqPv0ARvTfn31Ns96ET+/QBGnyffpyff3vUmz+CnJs/74oAI/uVMlN+5TkoAb/BQ++j599SPQBC9Sfc+Sh9lNqwJv4PwqwnyVDU38eygCaHfWtbJsSs+FP4K0odj/JVcpKJk+f79cf8YEebwxBbJ/HqNn/6OSu0RK5nxhps2veJ/BPhKH7+qa/D+7/6Yx/M9a0I++YYn4JH2p4AttmlfaXi+eTYn/AFrqkTZWbYQ/Zne2T5NiJWsifPX0spHycvjKeqvN9m3/3HqRIXeH5Pkqxcwo9s6U6wffCn+5T5vcIK6b9nyRVH86XKf7aVe/2PKqG5hd0R/wC4++jmAmTfTvvpQj1Hv+eskQVbb5IZ0T+CSnR/fpv3Lx/+m6U5EfZ8lboBtzvhuU/26jmR0f55akvIXdN/m/c/eVDebHRHqoCkcX4tT/QHdPvpJXwf+3Po/wBs+D/iV/v/AGKS2uk/4DNtr748VJ/oE+z+5Xx7+1ppSX/wi8V/9gqb/wAd+b/2SrxPwnXhvjPzG+HOoPpXxO8MX8P/ACx1W2/8efbX6U3/AN+vzG8ED/isvDL/AN/VLP8A9GCv03va+bxMffPocJLniZqfeen0xP8AWvT68+Xxnaf/2Q==' }
];
const MAIN_LEADER_PHOTO = 'data:image/jpeg;base64,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';
function renderTree(){
  const container = document.getElementById('treeContainer');
  // Remember which branches were open before this re-render (e.g. from renaming, toggling
  // a deputy, or any other action that rebuilds the tree) so re-rendering doesn't collapse
  // everything the person had drilled into — that was the bug: any button inside an open
  // branch triggered a full re-render, which always rebuilt the tree fully collapsed.
  const prevTopOpen = !!(document.getElementById('treeTopGroup') && !document.getElementById('treeTopGroup').classList.contains('collapsed-v'));
  const prevMainOpen = !!(document.getElementById('treeMainGroup') && !document.getElementById('treeMainGroup').classList.contains('collapsed-v'));
  const prevOpenLeaderSmks = [];
  (getPoshakLeaders()||[]).forEach((p, pi) => {
    const panel = document.getElementById('treeChildren' + pi);
    if(panel && !panel.classList.contains('collapsed')) prevOpenLeaderSmks.push(p.smk);
  });

  const mainLeader = getSanchalakFromMembers();
  const mainLeaderName = mainLeader.name || 'Main Yuva Sabha - C Leader';

  const poshakList = getPoshakLeaders();
  const membersList = MODULES.members.data;

  const chainInitials = c => esc((c.name||'').trim().split(/\s+/).map(w=>w[0]).join('').toUpperCase().slice(0,2));
  const chainAvatarHtml = (c, extraClass) => {
    if(c.photo){
      const safePhoto = esc(c.photo).replace(/'/g,"\\'");
      return `<span class="org-avatar ${extraClass||''}" style="padding:0;overflow:hidden;cursor:pointer" onclick="event.stopPropagation();openPhotoLightbox('${safePhoto}')"><img src="${esc(c.photo)}" alt="${chainInitials(c)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></span>`;
    }
    return `<span class="org-avatar ${extraClass||''}">${chainInitials(c)}</span>`;
  };
  const leadershipChain = getLeadershipChain();
  const top = leadershipChain[0] || {name:'', role:''};
  const mids = leadershipChain.slice(1);

  const topBox = `
    <div class="org-box org-box-main org-box-clickable" onclick="toggleTreeTop()">
      ${chainAvatarHtml(top, 'org-avatar-main-init')}
      <div class="font-bold text-sm text-crm-textDark">${esc(top.name)}</div>
      <div class="text-[10px] text-crm-textMuted">${esc(top.role)}</div>
      <i class="fas fa-chevron-down text-[10px] text-crm-textMuted mt-1 org-caret" id="treeTopCaret"></i>
    </div>`;

  const midBoxes = mids.map(c => `
    <div class="org-connector-v"></div>
    <div class="org-box org-box-main">
      ${chainAvatarHtml(c, 'org-avatar-main-init')}
      <div class="font-bold text-sm text-crm-textDark">${esc(c.name)}</div>
      <div class="text-[10px] text-crm-textMuted">${esc(c.role)}</div>
    </div>`).join('');

  const leaderBoxes = poshakList.map((p, pi) => {
    const leaderName = p.name || p.full_name || '';
    const initials = (leaderName||'').trim().split(/\s+/).map(w=>w[0]).join('').toUpperCase().slice(0,2);
    const matchName = p.group || p.poshak_leader || leaderName;
    const myCount = membersList.filter(m => (m.group||'') === matchName && m.active_status !== 'inactive').length;
    const isDeputy = p.is_chief_deputy === 'હા';
    // Photo pulled live from Members master (own uploaded photo first, then legacy
    // Drive link) — these boxes previously showed only initials regardless of any
    // photo on file.
    const leaderPhoto = p.own_photo_data || driveImgUrl(p.photo_url) || '';
    const safeLeaderPhoto = leaderPhoto ? String(leaderPhoto).replace(/'/g, "\\'") : '';
    const leaderAvatarHtml = leaderPhoto
      ? `<span class="org-avatar" style="padding:0;overflow:hidden;cursor:pointer" onclick="event.stopPropagation();openPhotoLightbox('${safeLeaderPhoto}')"><img src="${esc(leaderPhoto)}" alt="${esc(initials)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></span>`
      : `<span class="org-avatar">${esc(initials)}</span>`;

    return `
      <div class="org-col">
        <div class="org-drop"></div>
        <div class="org-box org-box-poshak ${isDeputy ? 'org-box-deputy' : ''}" onclick="toggleTreeBranch(${pi})">
          ${isDeputy ? '<span class="org-deputy-tag">સહસંચાલક</span>' : ''}
          ${leaderAvatarHtml}
          <div class="font-semibold text-sm text-crm-textDark leading-tight">${esc(leaderName)}</div>
          <span class="badge bg-red-50 text-crm-primary mt-1">${myCount} members</span>
          <i class="fas fa-chevron-down text-[10px] text-crm-textMuted mt-1 org-caret" id="treeCaret${pi}"></i>
          <button class="org-deputy-btn" onclick="event.stopPropagation(); toggleChiefDeputy('${esc(p.smk)}')">${isDeputy ? 'સહસંચાલક હટાવો' : 'સહસંચાલક બનાવો'}</button>
        </div>
        <div class="org-members-panel collapsed" id="treeChildren${pi}"></div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="org-chart-scroll">
      <div class="org-chart">
        ${topBox}
        <div class="org-tree-group collapsed-v" id="treeTopGroup">
          ${midBoxes}
          <div class="org-connector-v"></div>
          <div class="org-box org-box-main org-box-clickable" onclick="toggleTreeMain()">
            ${mainLeader.photo
              ? `<span class="org-avatar" style="padding:0;overflow:hidden;cursor:pointer" onclick="event.stopPropagation();openPhotoLightbox('${esc(mainLeader.photo).replace(/'/g,"\\'")}')"><img src="${esc(mainLeader.photo)}" alt="${esc(mainLeaderName)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></span>`
              : `<span class="org-avatar org-avatar-main"><i class="fas fa-crown"></i></span>`}
            <div class="font-bold text-sm text-crm-textDark">${esc(mainLeaderName)}</div>
            <div class="text-[10px] text-crm-textMuted">${esc(mainLeader.role || 'સંચાલક')}</div>
            <i class="fas fa-chevron-down text-[10px] text-crm-textMuted mt-1 org-caret" id="treeMainCaret"></i>
          </div>
        </div>
        <div class="org-tree-group collapsed-v" id="treeMainGroup">
          <div class="org-connector-v"></div>
          <div class="org-branch-bar"></div>
          <div class="org-row">${leaderBoxes}</div>
        </div>
      </div>
    </div>
    <style>
      .org-chart-scroll{ width:100%; overflow-x:auto; overflow-y:hidden; padding-bottom:8px; }
      .org-chart{ display:flex; flex-direction:column; align-items:center; padding:10px; width:max-content; min-width:100%; margin:0 auto; }
      .org-box{ display:flex; flex-direction:column; align-items:center; text-align:center; background:#fff; border:1.5px solid #ecd7da; border-radius:12px; box-shadow:0 2px 8px rgba(90,6,22,.06); box-sizing:border-box; }
      .org-box-chain{ border-color:#cbd5e1; width:190px; padding:7px 12px; flex-direction:row; gap:8px; text-align:left; }
      .org-avatar-sm2{ width:26px; height:26px; border-radius:50%; background:#eef1f5; color:#475569; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:10px; flex-shrink:0; }
      .org-chain-name2{ font-size:11.5px; font-weight:600; color:#2a1013; line-height:1.2; }
      .org-chain-role2{ font-size:9.5px; color:#8a8f98; line-height:1.2; }
      .org-box-chain > div:last-child{ margin-left:-2px; }
      .org-box-main{ border-color:var(--maroon); box-shadow:0 4px 14px rgba(90,6,22,.15); width:150px; padding:12px 16px; }
      .org-box-clickable{ cursor:pointer; transition:box-shadow .15s; }
      .org-box-clickable:hover{ box-shadow:0 6px 18px rgba(90,6,22,.22); }
      .org-avatar-main-init{ background:var(--maroon); color:#fff; }
      .org-tree-group{ display:flex; flex-direction:column; align-items:center; width:100%; }
      .org-tree-group.collapsed-v{ display:none; }
      .org-box-poshak{ cursor:pointer; transition:box-shadow .15s, border-color .15s; position:relative; width:150px; padding:14px 16px; }
      .org-box-poshak:hover{ box-shadow:0 4px 14px rgba(90,6,22,.14); border-color:var(--maroon); }
      .org-box-deputy{ border-color:#16a34a; border-width:2px; box-shadow:0 2px 10px rgba(22,163,74,.15); }
      .org-deputy-tag{ position:absolute; top:-11px; left:50%; transform:translateX(-50%); background:#16a34a; color:#fff; font-size:9px; font-weight:600; padding:2px 8px; border-radius:8px; white-space:nowrap; }
      .org-deputy-btn{ margin-top:8px; font-size:9px; padding:3px 8px; border-radius:6px; border:1px solid #d1d5db; background:#fff; color:#475569; cursor:pointer; white-space:nowrap; }
      .org-deputy-btn:hover{ background:#f8fafc; border-color:var(--maroon); color:var(--maroon); }
      .org-avatar{ width:36px; height:36px; border-radius:50%; background:rgba(90,6,22,.1); color:var(--maroon); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:12px; margin-bottom:5px; }
      .org-avatar-main{ background:var(--maroon); color:#fff; width:38px; height:38px; font-size:14px; }
      .org-avatar-sm{ width:24px; height:24px; border-radius:50%; background:rgba(90,6,22,.1); color:var(--maroon); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:9px; flex-shrink:0; }
      .org-connector-v{ width:2px; height:16px; background:#d8c3c6; }
      .org-branch-bar{ width:calc(100% - 40px); max-width:900px; height:2px; background:#d8c3c6; margin-top:0; }
      .org-drop{ width:2px; height:16px; background:#d8c3c6; }
      .org-row{ display:flex; gap:16px; flex-wrap:nowrap; justify-content:center; }
      .org-col{ display:flex; flex-direction:column; align-items:center; width:150px; flex-shrink:0; }
      .org-members-panel{ background:#faf6f7; border:1px solid #f4e9eb; border-radius:12px; padding:10px; width:100%; margin-top:10px; max-height:280px; overflow-y:auto; display:flex; flex-direction:column; gap:8px; box-sizing:border-box; }
      .org-members-panel.collapsed{ display:none; }
      .org-member-chip{ display:flex; align-items:center; gap:6px; text-align:left; }
      .org-caret.collapsed{ transform:rotate(-90deg); }
      .org-caret{ transition:transform .15s; }
    </style>`;

  // Restore the branches that were open before this re-render (the actual fix — before
  // this, any action inside an open branch, like making/removing a deputy, triggered a
  // full renderTree() rebuild that always started fully collapsed, closing everything
  // the person had drilled into).
  if(prevTopOpen){
    document.getElementById('treeTopGroup').classList.remove('collapsed-v');
    const c = document.getElementById('treeTopCaret'); if(c) c.classList.add('collapsed');
  }
  if(prevMainOpen){
    document.getElementById('treeMainGroup').classList.remove('collapsed-v');
    const c = document.getElementById('treeMainCaret'); if(c) c.classList.add('collapsed');
  }
  if(prevOpenLeaderSmks.length){
    (getPoshakLeaders()||[]).forEach((p, pi) => {
      if(prevOpenLeaderSmks.includes(p.smk)) toggleTreeBranch(pi);
    });
  }
}
function toggleChiefDeputy(smk){
  const rec = MODULES.members.data.find(r => r.smk === smk);
  if(!rec) return;
  rec.is_chief_deputy = (rec.is_chief_deputy === 'હા') ? 'ના' : 'હા';
  saveData('members');
  syncRecordToBackend('members', rec, false);
  showToast(rec.is_chief_deputy === 'હા' ? `${rec.name} ને સહસંચાલક બનાવ્યા.` : `${rec.name} ને સહસંચાલક માંથી હટાવ્યા.`);
  renderTree();
}
function toggleTreeTop(){
  const g = document.getElementById('treeTopGroup');
  const closing = !g.classList.contains('collapsed-v');
  g.classList.toggle('collapsed-v');
  const c = document.getElementById('treeTopCaret'); if(c) c.classList.toggle('collapsed');
  if(closing){
    // closing Haresh bhai's branch also hides everything below it
    const mg = document.getElementById('treeMainGroup');
    if(mg && !mg.classList.contains('collapsed-v')){
      mg.classList.add('collapsed-v');
      const mc = document.getElementById('treeMainCaret'); if(mc) mc.classList.remove('collapsed');
    }
  }
}
function toggleTreeMain(){
  const g = document.getElementById('treeMainGroup');
  g.classList.toggle('collapsed-v');
  const c = document.getElementById('treeMainCaret'); if(c) c.classList.toggle('collapsed');
}
function toggleTreeBranch(pi){
  const panel = document.getElementById(`treeChildren${pi}`);
  const isCollapsing = !panel.classList.contains('collapsed');
  panel.classList.toggle('collapsed');
  document.getElementById(`treeCaret${pi}`).classList.toggle('collapsed');

  // lazily build the member list only the first time it's expanded (keeps initial render fast)
  if(!isCollapsing && !panel.dataset.built){
    const p = getPoshakLeaders()[pi];
    const matchName = p.group || p.poshak_leader || p.name || p.full_name || '';
    const myMembers = MODULES.members.data.filter(m => (m.group||'') === matchName && m.active_status !== 'inactive');
    panel.innerHTML = myMembers.length
      ? myMembers.map(m => `
          <div class="org-member-chip">
            <span class="org-avatar-sm">${esc((m.name||'').trim().split(/\s+/).map(w=>w[0]).join('').toUpperCase().slice(0,2))}</span>
            <div>
              <div class="text-xs font-medium text-crm-textDark leading-tight">${esc(m.name)}</div>
              <div class="text-[10px] text-crm-textMuted leading-tight">${esc(m.mobile||'')}</div>
            </div>
          </div>`).join('')
      : `<p class="text-xs text-crm-textMuted italic px-2">No members yet</p>`;
    panel.dataset.built = '1';
  }
}
function computeMemberAgeKey(m){
  const d = (m.dob||'').slice(0,10);
  let a = null;
  if(/^\d{4}-\d{2}-\d{2}$/.test(d)){
    const dt = new Date(d + 'T00:00:00'), now = new Date();
    a = now.getFullYear() - dt.getFullYear() - ((now.getMonth() < dt.getMonth() || (now.getMonth() === dt.getMonth() && now.getDate() < dt.getDate())) ? 1 : 0);
  }
  return a === null ? '?' : (a >= 24 ? '24+' : String(a));
}
function computePreciseAgeText(dob){
  const d = (dob||'').slice(0,10);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(d)) return null;
  const birth = new Date(d + 'T00:00:00');
  const today = new Date();
  today.setHours(0,0,0,0);
  if(isNaN(birth.getTime()) || birth > today) return null;
  let years = today.getFullYear() - birth.getFullYear();
  // The birthday this year, in the current year — if it hasn't happened yet, count
  // from LAST year's birthday instead (so "days" never goes negative).
  let lastBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if(lastBirthday > today){
    years -= 1;
    lastBirthday = new Date(today.getFullYear() - 1, birth.getMonth(), birth.getDate());
  }
  const days = Math.round((today - lastBirthday) / 86400000);
  return `${years} year${years===1?'':'s'} ${days} day${days===1?'':'s'}`;
}
function showAgeGroupPopup(ageKey){
  const isScopedLeader = isPoshakLeader() && currentUserRole !== 'admin';
  const all = isScopedLeader
    ? (MODULES.members.data || []).filter(r => {
        const myGroupName = currentUserRecord.group || currentUserRecord.poshak_leader;
        return r.group === myGroupName || r.smk === currentUserRecord.smk;
      })
    : (MODULES.members.data || []);
  const yuva = all.filter(m => m.role === 'યુવા સભ્ય' && m.active_status !== 'inactive');
  const matches = yuva.filter(m => computeMemberAgeKey(m) === ageKey);
  const title = ageKey === '?' ? 'Age Unknown' : (ageKey === '24+' ? 'Age 24+' : `Age ${ageKey}`);
  document.getElementById('ageGroupPopupTitle').textContent = `${title} (${matches.length})`;
  document.getElementById('ageGroupPopupList').innerHTML = matches.length ? matches.map(m => `
    <div class="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100">
      <div>
        <div class="text-sm font-medium text-crm-textDark">${esc(m.name || m.full_name || '—')}</div>
        <div class="text-xs text-crm-textMuted">${esc(m.poshak_leader || m.group || '—')}</div>
        <div class="text-xs text-crm-textMuted">${esc(ddmyDisplayValue(m.dob) || '—')}${(() => { const p = computePreciseAgeText(m.dob); return p ? ` (${esc(p)})` : ''; })()}</div>
      </div>
      <div class="text-sm text-crm-textDark whitespace-nowrap">${esc(m.mobile || '—')}</div>
    </div>`).join('') : '<p class="text-xs text-crm-textMuted text-center py-6">No members at this age.</p>';
  document.getElementById('ageGroupPopup').classList.remove('hidden');
}
function closeAgeGroupPopup(){
  document.getElementById('ageGroupPopup').classList.add('hidden');
}
function renderDashboard(){
  if(!membersLiveDataConfirmed && useBackend){
    // Don't show any member-count numbers until we know for certain they're correct —
    // a brief "loading" state here is what prevents ever displaying a stale cached
    // number that then visibly jumps once the real one arrives a moment later.
    const kpiRow = document.getElementById('dashKpiRow');
    // While the last saved server copy is still being read (a few milliseconds) show
    // nothing at all; the "Loading" text only ever appears on the very first visit on
    // a device, when there is no saved copy yet.
    if(kpiRow) kpiRow.innerHTML = apiCachePrimeDone
      ? `<div class="col-span-full flex items-center justify-center gap-2 py-10 text-crm-textMuted text-sm"><i class="fas fa-circle-notch fa-spin"></i> Loading live data…</div>`
      : '';
    return;
  }
  // A Poshak Leader's Dashboard should reflect only their own group's members, not
  // every member in the database — same scoping already used for their Members table.
  const isScopedLeader = isPoshakLeader() && currentUserRole !== 'admin';
  const all = isScopedLeader
    ? (MODULES.members.data || []).filter(r => {
        const myGroupName = currentUserRecord.group || currentUserRecord.poshak_leader;
        return r.group === myGroupName || r.smk === currentUserRecord.smk;
      })
    : (MODULES.members.data || []);
  // A deactivated member disappears from every dashboard number — KPIs, percentages,
  // score/age distribution, all of it — the moment they're deactivated, since this whole
  // function recomputes fresh from MODULES.members.data every time the Dashboard is
  // opened. No separate "sync" step needed; excluding them here is enough.
  const leaders = all.filter(m => m.role === 'પોષક લીડર' && m.active_status !== 'inactive');
  const yuva = all.filter(m => m.role === 'યુવા સભ્ય' && m.active_status !== 'inactive');
  // Everyone else — Zone President, Baal Yuva Mukhya, Region Head, Sanchalak, Sah-Sanchalak,
  // or any future leadership role — counted together, same definition as the sidebar's.
  const otherLeaders = all.filter(m => m.role !== 'યુવા સભ્ય' && m.role !== 'પોષક લીડર' && m.active_status !== 'inactive');
  const T = yuva.length || 1;
  const N = yuva.length;
  const pct = n => Math.round(n * 100 / T) + '%';
  const cnt = fn => yuva.filter(fn).length;

  /* ---- KPI tiles ---- */
  const pujaDaily = cnt(m => m.puja === 'દરરોજ');
  const chestaDaily = cnt(m => m.chesta === 'દરરોજ');
  const kathaLive = cnt(m => m.katha === 'લાઈવ');
  const kathaDelay = cnt(m => m.katha === 'ડીલે લાઈવ');
  const kathaDaily = kathaLive + kathaDelay;
  const shibirYes = cnt(m => m.shibir === 'હા');
  const kpis = [
    { ic:'fa-address-book', col:'#4a0512', bg:'#f6e7ea', big:all.length, label:'Total Members', sub:'બધા સભ્યો' },
    { ic:'fa-users', col:'#5a0616', bg:'#f6e7ea', big:N, label:'Total Yuva Members', sub:'યુવા સભ્ય' },
    { ic:'fa-user-tie', col:'#7a1020', bg:'#f6e7ea', big:leaders.length, label:'Poshak Leaders', sub:'ગ્રૂપ લીડર' },
    { ic:'fa-user-shield', col:'#631018', bg:'#f6e7ea', big:otherLeaders.length, label:'Other Leaders', sub:'અન્ય લીડર' },
    { ic:'fa-fire', col:'#8c2138', bg:'#f6e7ea', big:pujaDaily, of:N, chip:pct(pujaDaily), bar:pujaDaily*100/T, label:'Daily Puja' },
    { ic:'fa-eye', col:'#96182c', bg:'#f6e7ea', big:chestaDaily, of:N, chip:pct(chestaDaily), bar:chestaDaily*100/T, label:'Daily Chesta' },
    { ic:'fa-podcast', col:'#a63d52', bg:'#f6e7ea', big:kathaDaily, of:N, chip:pct(kathaDaily), bar:kathaDaily*100/T, label:'Daily Katha', sub:`Live ${kathaLive} • Delay ${kathaDelay}` },
    { ic:'fa-tent', col:'#6b0f1f', bg:'#f6e7ea', big:shibirYes, of:N, chip:pct(shibirYes), bar:shibirYes*100/T, label:'Shibir Attended' }
  ];
  document.getElementById('dashKpiRow').innerHTML = kpis.map(k => `
    <div class="dsb-kpi">
      <div class="dsb-kpi-top">
        <div class="dsb-kpi-ic" style="background:${k.bg};color:${k.col}"><i class="fas ${k.ic}"></i></div>
        ${k.chip ? `<span class="dsb-kpi-chip" style="background:${k.bg};color:${k.col}">${k.chip}</span>` : ''}
      </div>
      <div class="dsb-kpi-num">${k.big}${k.of ? `<span class="dsb-kpi-of">/${k.of}</span>` : ''}</div>
      <div class="dsb-kpi-lbl">${k.label}</div>
      ${k.sub ? `<div class="dsb-kpi-sub">${k.sub}</div>` : ''}
      ${k.bar !== undefined ? `<div class="dsb-kpi-bar"><div style="width:${k.bar}%;background:${k.col}"></div></div>` : ''}
    </div>`).join('');

  /* ---- Monthly Birthdays ---- */
  const now = new Date();
  const curMonthNum = now.getMonth()+1, curDay = now.getDate();
  const monthBdays = getMonthBirthdays(yuva, curMonthNum);
  document.getElementById('dashBdaySub').textContent = `${GUJ_MONTHS[curMonthNum-1]} • ${monthBdays.length} this month`;
  document.getElementById('dashBdayList').innerHTML = monthBdays.length ? monthBdays.map(m => {
    const md = parseDobMD(m.dob);
    const isToday = md.da === curDay;
    return `<div class="dsb-bday-card${isToday ? ' today' : ''}">
      <div class="dsb-bday-date">${md.da}</div>
      <div class="dsb-bday-mon">${GUJ_MONTHS[curMonthNum-1]}</div>
      <div class="dsb-bday-name">${esc(m.name)}</div>
      ${isToday ? `<span class="dsb-bday-today-tag">આજે 🎉</span>` : ''}
    </div>`;
  }).join('') : `<div class="dsb-bday-empty">આ મહિનામાં કોઈનો જન્મદિવસ નથી</div>`;

  /* ---- Sabha Status strip ---- */
  const noSabhya = cnt(m => m.family_member_in_grp === 'ના');
  const inGrp = yuva.filter(m => m.family_member_in_grp !== 'ના');
  const bucket = v => inGrp.filter(m => (m.member_type_raw || '') === v).length;
  const ss = [
    { label:'Aatmiya Member', sub:'આત્મીય સભ્ય', count:bucket('આત્મીય સભ્ય'), c:'#5a0616' },
    { label:'Group Member', sub:'ગ્રૂપ સભ્ય', count:bucket('ગ્રૂપ સભ્ય'), c:'#0e7490' },
    { label:'Yuva Member', sub:'યુવા સભ્ય', count:bucket('યુવા સભ્ય'), c:'#0d9459' },
    { label:'Unknown', sub:'ખબર નથી', count:bucket('ખબર નથી') + inGrp.filter(m => !m.member_type_raw).length, c:'#64748b' },
    { label:'No Sabhya', sub:'ઘરમાં કોઈ સભ્ય નથી', count:noSabhya, c:'#b91c1c' }
  ];
  document.getElementById('dashSabhaStatus').innerHTML = ss.map(s => `
    <div class="dsb-strip-item">
      <div class="dsb-strip-lbl"><span class="dsb-strip-dot" style="background:${s.c}"></span>${s.label}</div>
      <div class="dsb-strip-num">${s.count}<small>/${N}</small></div>
      <div class="dsb-strip-sub">${s.sub}</div>
    </div>`).join('');

  /* ---- Murtibaag Seva (2x2 mini stats) ---- */
  const sevaYes = cnt(m => m.local_seva_assigned === 'હા');
  const noSevaTotal = N - sevaYes;
  const noSevaWants = cnt(m => m.local_seva_assigned !== 'હા' && /^Yes/i.test(m.wants_seva||''));
  const noSevaNot = noSevaTotal - noSevaWants;
  const murti = [
    { label:'Seva in Murtibaag', sub:'સેવા ચાલુ છે', count:sevaYes, of:N, bg:'#e5f6ef', c:'#0d6e4a' },
    { label:'No Seva in Murtibaag', sub:'સેવા નથી', count:noSevaTotal, of:N, bg:'#fbe8e8', c:'#a41919' },
    { label:'No Seva — Wants to Join', sub:'સેવા નથી, પણ ઇચ્છા છે', count:noSevaWants, of:noSevaTotal, bg:'#fdf3e0', c:'#96700f' },
    { label:'No Seva — Not Interested', sub:'સેવા નથી, ઇચ્છા પણ નથી', count:noSevaNot, of:noSevaTotal, bg:'#eef1f4', c:'#4b5b6b' }
  ];
  document.getElementById('dashMurtiSub').textContent = `${N} members`;
  document.getElementById('dashMurtibaag').innerHTML =
    `<div class="dsb-seg"><div style="width:${sevaYes*100/T}%;background:#0d9459"></div><div style="width:${noSevaTotal*100/T}%;background:#dd5454"></div></div>` +
    `<div class="dsb-mini-grid">` + murti.map(x => `
      <div class="dsb-mini" style="background:${x.bg};color:${x.c}">
        <div class="dsb-mini-num">${x.count}<small>/${x.of}</small></div>
        <div class="dsb-mini-lbl">${x.label}</div>
        <div class="dsb-mini-sub">${x.sub}</div>
      </div>`).join('') + `</div>`;

  /* ---- donut helper ---- */
  const drawDonut = (svgId, legendId, entries, centerTop, centerBottom, showPct) => {
    const total = entries.reduce((s,e) => s + e.value, 0) || 1;
    const cx=80, cy=80, R=62, W=21;
    let angle = -90, arcs = '';
    entries.forEach(e => {
      if(!e.value) return;
      const sweep = e.value * 360 / total;
      const a1 = angle * Math.PI/180, a2 = (angle + Math.min(sweep, 359.99)) * Math.PI/180;
      const large = sweep > 180 ? 1 : 0;
      arcs += `<path d="M ${cx + R*Math.cos(a1)} ${cy + R*Math.sin(a1)} A ${R} ${R} 0 ${large} 1 ${cx + R*Math.cos(a2)} ${cy + R*Math.sin(a2)}" fill="none" stroke="${e.color}" stroke-width="${W}" stroke-linecap="butt"/>`;
      angle += sweep;
    });
    document.getElementById(svgId).innerHTML = arcs +
      `<text x="${cx}" y="${cy-3}" text-anchor="middle" font-size="23" font-weight="700" fill="#2a1013">${centerTop}</text>` +
      `<text x="${cx}" y="${cy+15}" text-anchor="middle" font-size="9.5" fill="#a58a8f">${centerBottom}</text>`;
    document.getElementById(legendId).innerHTML = entries.map(e => `
      <div class="dsb-lg-row">
        <span class="dsb-lg-dot" style="background:${e.color}"></span>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(e.label)}</span>
        <span class="dsb-lg-val">${e.value}</span>
        ${showPct ? `<span class="dsb-lg-pct">${Math.round(e.value*100/total)}%</span>` : ''}
      </div>`).join('');
  };

  /* ---- Sadhana score donut ---- */
  const scores = [0,0,0,0,0,0];
  yuva.forEach(m => {
    let s = 0;
    if(m.puja === 'દરરોજ') s++;
    if(m.katha === 'લાઈવ' || m.katha === 'ડીલે લાઈવ') s++;
    if(m.chesta === 'દરરોજ') s++;
    if(m.granth === 'હા, રોજ' || m.granth === 'અઠવાડિક') s++;
    if(m.shibir === 'હા') s++;
    scores[s]++;
  });
  const scoreColors = ['#dc2626','#f97316','#facc15','#a3e635','#34d399','#0d9459'];
  drawDonut('dashScoreDonut', 'dashScoreLegend',
    scores.map((v,i) => ({ label:'Score ' + i, value:v, color:scoreColors[i] })),
    N, 'members', true);

  /* ---- Poshak seva table (with ratio bars) ---- */
  let activeLeaders = getPoshakLeaders().filter(p => p.active_status !== 'inactive');
  if(isScopedLeader){
    // A Poshak Leader's own dashboard should show only their own row here — not
    // every other leader's name (each showing 0/0 from their perspective, since
    // `yuva` above is already scoped down to just this leader's own group).
    activeLeaders = activeLeaders.filter(p => p.smk === currentUserRecord.smk);
  }
  let poshakRows = activeLeaders.map(p => {
    const grpName = p.group || p.poshak_leader || p.name;
    const mine = yuva.filter(m => (m.group||'') === grpName);
    const inv = mine.filter(m => m.local_seva_assigned === 'હા').length;
    return { name: p.name, total: mine.length, inv, not: mine.length - inv };
  });
  if(!isScopedLeader){
  // Members whose group doesn't match any currently-active Poshak Leader — otherwise
  // they'd silently be missing from this breakdown, and the per-leader numbers would
  // never add up to the true total member count.
  const assignedGroupNames = new Set(
    getPoshakLeaders().filter(p => p.active_status !== 'inactive').map(p => p.group || p.poshak_leader || p.name)
  );
  const unassignedMembers = yuva.filter(m => !assignedGroupNames.has(m.group||''));
  const unassignedInv = unassignedMembers.filter(m => m.local_seva_assigned === 'હા').length;
  poshakRows.push({
    name: 'પોષક લીડર વગર (Unassigned)',
    total: unassignedMembers.length,
    inv: unassignedInv,
    not: unassignedMembers.length - unassignedInv
  });
  }

  const poshakSevaTotalMembers = poshakRows.reduce((sum, r) => sum + r.total, 0);
  document.getElementById('dashPoshakSevaTotal').textContent = `Total: ${poshakSevaTotalMembers} members`;

  document.getElementById('dashPoshakSeva').innerHTML = poshakRows.map(r => `
    <div class="dsb-psk-row">
      <div class="dsb-psk-name" title="${esc(r.name)}">${esc(r.name)}</div>
      <div class="dsb-psk-nums"><b style="color:#0d9459">${r.inv}</b><span style="font-style:oblique;color:#a58a8f">/${r.total}</span></div>
      <div class="dsb-ratio-track" style="flex:1"><div class="dsb-ratio-fill" style="width:${r.total ? r.inv*100/r.total : 0}%"></div></div>
      <span class="dsb-psk-pct">${r.total ? Math.round(r.inv*100/r.total) : 0}%</span>
    </div>`).join('') +
    `<div class="dsb-psk-foot"><span><span class="dsb-lg-dot" style="background:#0d9459;display:inline-block;margin-right:5px"></span>Seva Involved</span><span style="font-style:oblique">/ Total Members</span></div>`;

  /* ---- Seva Samiti ---- */
  const samitiForms = (function(){
    const forms = {};
    try{
      for(let i = 0; i < localStorage.length; i++){
        const k = localStorage.key(i);
        if(k && k.indexOf('yuvaSabhaSevaSamiti_') === 0){
          try{ const v = JSON.parse(localStorage.getItem(k)||'[]'); if(Array.isArray(v) && v.length) forms[k.slice(20)] = v; }catch(e){}
        }
      }
    }catch(e){}
    if(!Object.keys(forms).length) forms['Seva Form 1'] = RAW_SEVA_SAMITI;
    return forms;
  })();
  let totSamiti = 0, samitiList = [];
  const uniqueVolunteerNames = new Set();
  const normName = n => (n||'').trim().toLowerCase().replace(/\s+/g, ' ');
  Object.keys(samitiForms).forEach(fn => {
    (samitiForms[fn]||[]).forEach(c => {
      totSamiti++;
      const mains = (c.main||[]).filter(v => v && (v.name||'').trim());
      const assists = (c.assist||[]).filter(v => v && (v.name||'').trim());
      [...mains, ...assists].forEach(v => uniqueVolunteerNames.add(normName(v.name)));
      samitiList.push({
        name: c.samiti_name || '—',
        mainName: mains.length ? mains[0].name : '—',
        assistCount: assists.length + Math.max(mains.length - 1, 0),
        total: mains.length + assists.length
      });
    });
  });
  const totVol = uniqueVolunteerNames.size; // same person listed in multiple samiti counted once
  const formCount = Object.keys(samitiForms).length;
  document.getElementById('dashSamitiSub').textContent = `${formCount} form${formCount > 1 ? 's' : ''}`;
  document.getElementById('dashSamiti').innerHTML =
    `<div class="dsb-samiti-chips">
       <div class="dsb-samiti-chip"><b>${totSamiti}</b><span>Total Samiti</span></div>
       <div class="dsb-samiti-chip"><b>${totVol}</b><span>Total Volunteers</span></div>
     </div>
     <div class="dsb-samiti-list">` +
    samitiList.map((s,i) => `
      <div class="dsb-samiti-row">
        <span class="dsb-samiti-idx">${i+1}</span>
        <div style="flex:1;min-width:0">
          <div class="dsb-samiti-name">${esc(s.name)}</div>
          <div class="dsb-samiti-detail">મુખ્ય: ${esc(s.mainName)} • સહાયક: ${s.assistCount}</div>
        </div>
        <span class="dsb-samiti-total" style="margin-left:auto">${s.total}<small>સભ્યો</small></span>
      </div>`).join('') + `</div>`;

  /* ---- generic bar list ---- */
  const barColors = { maroon:'linear-gradient(90deg,#5a0616,#a63d52)', teal:'linear-gradient(90deg,#0e7490,#38bdf8)', gold:'linear-gradient(90deg,#b45309,#fbbf24)', violet:'linear-gradient(90deg,#6d28d9,#a78bfa)' };
  const hbars = (elId, counts, color, max) => {
    const entries = Object.keys(counts).map(k => [k, counts[k]]).sort((a,b) => b[1]-a[1]);
    const top = max ? entries.slice(0, max) : entries;
    const mx = Math.max(...top.map(e => e[1]), 1);
    document.getElementById(elId).innerHTML = top.map(([k,v]) => `
      <div class="dsb-bar-row">
        <div class="dsb-bar-lbl" title="${esc(k)}">${esc(k)}</div>
        <div class="dsb-bar-track"><div class="dsb-bar-fill" style="width:${v*100/mx}%;background:${color}"></div></div>
        <div class="dsb-bar-val">${v}</div>
      </div>`).join('');
  };
  const tally = (field, cap) => {
    const c = {};
    yuva.forEach(m => {
      let v = (m[field]||'').toString().trim() || 'Unknown';
      if(cap && v.length > cap) v = v.slice(0, cap) + '…';
      c[v] = (c[v]||0) + 1;
    });
    return c;
  };

  /* ---- Skills — every skill, not just a top-N cap ---- */
  const skillCounts = {};
  yuva.forEach(m => (m.skills||'').split(',').map(s=>s.trim()).filter(Boolean).forEach(s => { skillCounts[s] = (skillCounts[s]||0)+1; }));
  hbars('dashSkills', skillCounts, barColors.violet, null);

  /* ---- Age (single ages) ---- */
  const ageCounts = {};
  yuva.forEach(m => {
    const key = computeMemberAgeKey(m);
    ageCounts[key] = (ageCounts[key]||0) + 1;
  });
  const ageKeys = Object.keys(ageCounts).filter(k => k !== '?').sort((a,b) => parseInt(a) - parseInt(b));
  if(ageCounts['?']) ageKeys.push('?');
  const ageMax = Math.max(...ageKeys.map(k => ageCounts[k]), 1);
  document.getElementById('dashAge').innerHTML = ageKeys.map(k => `
    <div class="dsb-col" style="cursor:pointer" onclick="showAgeGroupPopup(${esc(JSON.stringify(k))})" title="Click to see members">
      <div class="dsb-col-val">${ageCounts[k]}</div>
      <div class="dsb-col-bar" style="height:${Math.max(ageCounts[k]*100/ageMax, 4)}%;background:linear-gradient(180deg,#a63d52,#5a0616)"></div>
      <div class="dsb-col-lbl">${k}</div>
    </div>`).join('');

  /* ---- Study / Satsang ---- */
  hbars('dashStudy', tally('study_status', 34), barColors.teal);
  hbars('dashSatsang', tally('satsang_yrs'), barColors.gold);

  /* ---- Business / Work Status (top strip + drill-down breakdown) ---- */
  const workCatDefs = [
    { key:'Only Student', label:'Student Only', ic:'fa-user-graduate', c:'#0e7490' },
    { key:'Self-Employed / Business', label:'Self-Employed / Business', ic:'fa-store', c:'#0d9459' },
    { key:'Private Job', label:'Private Job', ic:'fa-building', c:'#7c3aed' },
    { key:'Not Working Currently', label:'Not Working', ic:'fa-pause', c:'#b91c1c' },
    { key:'Freelance', label:'Freelancing', ic:'fa-laptop-code', c:'#c8952a' }
  ];
  const workCounts = tally('work_status');
  document.getElementById('dashWorkSub').textContent = `${N} members`;
  document.getElementById('dashWorkStrip').innerHTML = workCatDefs.map(w => `
    <div class="dsb-strip-item">
      <div class="dsb-strip-lbl"><span class="dsb-strip-dot" style="background:${w.c}"></span>${w.label}</div>
      <div class="dsb-strip-num">${workCounts[w.key]||0}<small>/${N}</small></div>
    </div>`).join('');

  const wdBars = (list, cap) => {
    const c = {};
    list.forEach(v => { let s = (v||'').trim() || 'Unknown'; if(cap && s.length > cap) s = s.slice(0,cap)+'…'; c[s]=(c[s]||0)+1; });
    const entries = Object.keys(c).map(k => [k,c[k]]).sort((a,b) => b[1]-a[1]);
    const mx = Math.max(...entries.map(e => e[1]), 1);
    return entries.map(([k,v]) => `
      <div class="dsb-bar-row">
        <div class="dsb-bar-lbl" title="${esc(k)}">${esc(k)}</div>
        <div class="dsb-bar-track"><div class="dsb-bar-fill" style="width:${v*100/mx}%;background:linear-gradient(90deg,#8c2138,#5a0616)"></div></div>
        <div class="dsb-bar-val">${v}</div>
      </div>`).join('');
  };

  // Student breakdown — by standard/class, falling back to study level for college etc.
  const studentClassLabel = m => {
    const std = (m.std_class||'').trim();
    if(['ધોરણ 9','ધોરણ 10','ધોરણ 11','ધોરણ 12'].includes(std)) return std;
    const study = (m.study_status||'').trim();
    if(study.indexOf('કોલેજ') === 0 || study.indexOf('ગ્રેજ્યુએશન') >= 0) return 'કોલેજ / ગ્રેજ્યુએશન';
    if(study.indexOf('ડિપ્લોમા') === 0) return 'ડિપ્લોમા';
    if(study.indexOf('પ્રોફેશનલ') === 0) return 'પ્રોફેશનલ કોર્સ';
    return study || 'અન્ય';
  };
  const students = yuva.filter(m => m.work_status === 'Only Student');
  const selfEmployed = yuva.filter(m => m.work_status === 'Self-Employed / Business');
  const privateJob = yuva.filter(m => m.work_status === 'Private Job');

  const fieldFilter = v => v && v.trim() && v.trim() !== 'લાગુ પડતું નથી' && v.trim().toLowerCase() !== 'na';

  document.getElementById('dashWorkDetail').innerHTML = `
    <div>
      <div class="dsb-wd-title"><i class="fas fa-user-graduate"></i> ફક્ત વિદ્યાર્થી — ધોરણ પ્રમાણે</div>
      ${students.length ? wdBars(students.map(studentClassLabel)) : `<div class="dsb-wd-empty">No data</div>`}
    </div>
    <div>
      <div class="dsb-wd-title"><i class="fas fa-store"></i> સ્વ-રોજગાર / ધંધો — પ્રકાર પ્રમાણે</div>
      ${selfEmployed.filter(m => fieldFilter(m.work_field)).length ? wdBars(selfEmployed.filter(m => fieldFilter(m.work_field)).map(m => m.work_field), 26) : `<div class="dsb-wd-empty">No data</div>`}
    </div>
    <div>
      <div class="dsb-wd-title"><i class="fas fa-building"></i> ખાનગી નોકરી — ક્ષેત્ર પ્રમાણે</div>
      ${privateJob.filter(m => fieldFilter(m.work_field)).length ? wdBars(privateJob.filter(m => fieldFilter(m.work_field)).map(m => m.work_field), 26) : `<div class="dsb-wd-empty">No data</div>`}
    </div>`;

  /* ---- Blood pills ---- */
  const bloodCounts = tally('blood');
  const bloodOrder = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  const bloodKeys = [...bloodOrder.filter(b => bloodCounts[b]), ...Object.keys(bloodCounts).filter(b => bloodOrder.indexOf(b) < 0)];
  document.getElementById('dashBlood').innerHTML = bloodKeys.map(b => `
    <div class="dsb-blood-pill">
      <div class="dsb-blood-type">${esc(b === 'ખબર નથી' ? '?' : b)}</div>
      <div class="dsb-blood-count">${bloodCounts[b]}</div>
    </div>`).join('');

  /* ---- House type ---- */
  const houseDefs = [
    { key:'પોતાનું ઘર', label:'Own House', c:'#0d9459' },
    { key:'ભાડાનું ઘર', label:'Rented', c:'#c8952a' },
    { key:'અન્ય (મામા/માસીના ઘરે/કે અલગથી રૂમ રાખીને, વગેરે)', label:'Other', c:'#64748b' }
  ];
  const houseCounts = tally('house_type');
  document.getElementById('dashHouse').innerHTML =
    `<div class="dsb-seg" style="margin-bottom:12px">${houseDefs.map(h=>`<div style="width:${(houseCounts[h.key]||0)*100/T}%;background:${h.c}"></div>`).join('')}</div>` +
    houseDefs.map(h => `
      <div class="dsb-lg-row">
        <span class="dsb-lg-dot" style="background:${h.c}"></span>
        <span>${h.label} <span style="font-size:10px;color:#a58a8f">${esc(h.key.length > 22 ? h.key.slice(0,22)+'…' : h.key)}</span></span>
        <span class="dsb-lg-val">${houseCounts[h.key]||0}<span style="font-weight:400;font-size:10px;font-style:oblique;color:#a58a8f">/${N}</span></span>
      </div>`).join('');

  /* ---- Sabha years columns ---- */
  const syOrder = [
    ['૬ મહિના કરતા ઓછો','< ૬ મહિના'], ['૬ મહિના – ૧ વર્ષ','૬ મા – ૧ વર્ષ'], ['૧ – ૩ વર્ષ','૧ – ૩ વર્ષ'],
    ['૩ – ૫ વર્ષ','૩ – ૫ વર્ષ'], ['૫ વર્ષ કરતા વધુ','૫+ વર્ષ']
  ];
  const syCounts = tally('sabha_yrs');
  const syKeys = [...syOrder.filter(o => syCounts[o[0]]), ...Object.keys(syCounts).filter(k => !syOrder.some(o => o[0] === k)).map(k => [k, k.length > 12 ? k.slice(0,12)+'…' : k])];
  const syMax = Math.max(...syKeys.map(o => syCounts[o[0]]||0), 1);
  document.getElementById('dashSabhaYrs').innerHTML = syKeys.map(([k,lbl]) => `
    <div class="dsb-bar-row">
      <div class="dsb-bar-lbl" title="${esc(k)}">${esc(lbl)}</div>
      <div class="dsb-bar-track"><div class="dsb-bar-fill" style="width:${(syCounts[k]||0)*100/syMax}%;background:linear-gradient(90deg,#0d9459,#34d399)"></div></div>
      <div class="dsb-bar-val">${syCounts[k]||0}</div>
    </div>`).join('');
}

/* ===================== PAGE NAV ===================== */
function showPanel(panelId){
  ['dashboardView','tableView','recordView','usersView','mastersView','memberReportsView','approvalsView','activityView','notificationsView','sevaSamitiView','sevaSamitiListView','treeView','yscListView','yscView','changePasswordView','reportingListView','reportingEditorView'].forEach(id=>{
    document.getElementById(id).classList.toggle('hidden', id!==panelId);
  });
  document.getElementById('addBtnWrap').classList.toggle('hidden', panelId!=='tableView' || !canAddInCurrentModule());
}
function canAddInCurrentModule(){
  if(currentUserRole==='admin' || !currentUserRole) return true;
  if(currentUserRole==='yuva' || currentUserRole==='poshak'){
    if(currentModule==='members') return false; // members can't self-add new records
    if(isPoshakLeader()){
      const mobile = currentUserRecord.mobile || '';
      return hasExtraPermission(mobile, currentModule, 'access') && hasExtraPermission(mobile, currentModule, 'add');
    }
    return false;
  }
  return false;
}
function canEditInCurrentModule(){
  if(currentUserRole==='admin' || !currentUserRole) return true;
  if(currentUserRole==='yuva' || currentUserRole==='poshak'){
    if(currentModule==='members') return true; // Members (incl. Poshak Leaders) can always view/edit their own profile
    if(isPoshakLeader()){
      const mobile = currentUserRecord.mobile || '';
      return hasExtraPermission(mobile, currentModule, 'access') && hasExtraPermission(mobile, currentModule, 'edit');
    }
    return false;
  }
  return false;
}
function canEditSeva(){
  if(currentUserRole==='admin' || !currentUserRole) return true;
  if(isPoshakLeader()) return hasExtraPermission(currentUserRecord.mobile,'seva_samiti','access') && hasExtraPermission(currentUserRecord.mobile, 'seva_samiti', 'edit');
  return false;
}
function canAddSeva(){
  if(currentUserRole==='admin' || !currentUserRole) return true;
  if(isPoshakLeader()) return hasExtraPermission(currentUserRecord.mobile,'seva_samiti','access') && hasExtraPermission(currentUserRecord.mobile, 'seva_samiti', 'add');
  return false;
}
function canDeleteSeva(){
  if(currentUserRole==='admin' || !currentUserRole) return true;
  if(isPoshakLeader()) return hasExtraPermission(currentUserRecord.mobile,'seva_samiti','access') && hasExtraPermission(currentUserRecord.mobile, 'seva_samiti', 'delete');
  return false;
}
function closeRecord(){
  showPanel('tableView');
  renderTable();
}

/* ===================== TABLE ===================== */
function roleScopedList(){
  let list = data();
  if((currentUserRole==='yuva' || currentUserRole==='poshak') && currentModule==='members'){
    // Deactivated members are invisible to everyone except the admin — a poshak leader
    // must never see them in their own member list either.
    list = list.filter(r => r.active_status !== 'inactive');
    if(isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'members','access')){
      // Only once the admin has explicitly granted "Members" access does a poshak
      // leader see their group's yuva sabhya — before that, they see only themselves,
      // exactly like a regular yuva member.
      const myGroupName = currentUserRecord.group || currentUserRecord.poshak_leader;
      list = list.filter(r => r.group === myGroupName || r.smk === currentUserRecord.smk);
    } else {
      // Match by SMK first (unique per person, never shared) — family members sharing
      // one household phone have the identical mobile number, so filtering by mobile
      // here was showing BOTH siblings (e.g. Ved and Krishna Gabani) in each other's
      // own-record view. Email is the next-safest fallback since it's also unique.
      // Mobile number is intentionally last, only for the rare case where a member
      // has neither a valid SMK nor an email on file.
      const myRec = currentUserRecord;
      const mySmk = myRec && String(myRec.smk||'').trim().toUpperCase();
      const myEmail = myRec && String(myRec.email||'').trim().toLowerCase();
      if(mySmk && mySmk !== 'N/A' && mySmk !== 'NA'){
        list = list.filter(r => String(r.smk||'').trim().toUpperCase() === mySmk);
      } else if(myEmail){
        list = list.filter(r => String(r.email||'').trim().toLowerCase() === myEmail);
      } else {
        list = list.filter(r => normMob(r.mobile) === normMob(myRec && myRec.mobile));
      }
    }
  }
  return list;
}
function getFiltered(){
  const q = (document.getElementById('searchInput').value||'').toLowerCase().trim();
  const list = roleScopedList();
  if(!q) return list;
  const fields = cfg().searchFields;
  return list.filter(r => fields.some(f => (r[f]||'').toString().toLowerCase().includes(q)));
}

function renderTable(){
  const columns = cfg().columns;
  const thead = document.getElementById('tableHead');
  thead.innerHTML = `<tr>${columns.map(c=>`<th class="${c.className||''}">${esc(c.header)}</th>`).join('')}</tr>`;

  const filtered = getFiltered();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  if(currentPage > totalPages) currentPage = totalPages;
  const start = (currentPage-1)*PER_PAGE;
  const pageItems = filtered.slice(start, start+PER_PAGE);

  const tbody = document.getElementById('tableBody');
  if(pageItems.length===0){
    tbody.innerHTML = `<tr><td colspan="${columns.length}" class="text-center py-10 text-crm-textMuted">No records found.</td></tr>`;
  } else {
    const list = data();
    tbody.innerHTML = pageItems.map((r, i) => {
      const idx = list.indexOf(r);
      const displayIdx = start + i; // position within the CURRENT (scoped/filtered/paginated) view — 1, 2, 3... regardless of where this record sits in the full database
      const dimStyle = r.active_status === 'inactive' ? ' style="opacity:.45 !important"' : '';
      return `<tr class="fade-in"${dimStyle}>${columns.map(c=>`<td class="${c.className||''}">${c.render(r, idx, displayIdx)}</td>`).join('')}</tr>`;
    }).join('');
  }

  document.getElementById('headerSub').textContent = `${filtered.length} of ${data().length} ${cfg().label.toLowerCase()} shown`;
  renderPagination(totalPages, filtered.length);
  renderPageSizeSelector();
  renderSidebarStats();
}
function renderPageSizeSelector(){
  const options = [20, 50, 100, 150];
  const html = `<label class="flex items-center gap-2 text-xs text-crm-textMuted">
    Show
    <select onchange="changePageSize(this.value)" class="border border-crm-border rounded-lg px-2 py-1.5 text-xs outline-none focus:border-crm-primary bg-white">
      ${options.map(o => `<option value="${o}" ${o===PER_PAGE?'selected':''}>${o}</option>`).join('')}
    </select>
    per page
  </label>`;
  document.getElementById('pageSizeTopWrap').innerHTML = html;
  document.getElementById('pageSizeBottomWrap').innerHTML = html;
}
function changePageSize(size){
  PER_PAGE = parseInt(size);
  try{ localStorage.setItem('yuvaSabhaPageSize', PER_PAGE); }catch(e){}
  currentPage = 1;
  renderTable();
}

function getActionsHTML(idx){
  const viewBtn = `<button onclick="openRecord('view', ${idx})" title="View" class="w-7 h-7 rounded bg-slate-50 text-slate-500 hover:bg-slate-100 flex justify-center items-center shadow-sm"><i class="fas fa-eye text-[10px]"></i></button>`;
  const canEditThisRow = (() => {
    if(currentModule !== 'members') return canEditInCurrentModule();
    if(currentUserRole==='admin') return true;
    const rec = data()[idx];
    const isOwnRecord = rec && currentUserRecord && rec.smk === currentUserRecord.smk;
    if(isOwnRecord) return true; // everyone can always edit their own profile
    return isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'members','access') && hasExtraPermission(currentUserRecord.mobile,'members','edit');
  })();
  const editBtn = canEditThisRow
    ? `<button onclick="openRecord('edit', ${idx})" title="Edit" class="w-7 h-7 rounded bg-red-50 text-crm-primary hover:bg-crm-primary hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-pen text-[10px]"></i></button>`
    : '';
  const viewEditBtns = viewBtn + editBtn;

  if(currentUserRole==='yuva'){
    // Yuva Sabhya: only View and Edit, no more-actions menu
    return `<div class="flex justify-end gap-0.5">${viewEditBtns}</div>`;
  }
  // Admin and Poshak Leader: View, Edit (if permitted), and More (Copy/Share). Delete only if permitted, handled in toggleDropdown.
  return `<div class="flex justify-end gap-0.5">${viewEditBtns}
    <button onclick="toggleDropdown(event, this, ${idx})" title="More Actions" class="dd-toggle-btn w-7 h-7 rounded bg-slate-50 text-slate-600 hover:bg-slate-200 flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-ellipsis-v text-[10px]"></i></button>
  </div>`;
}

function renderPagination(totalPages, total){
  const el = document.getElementById('pagination');

  let pageNumbersHtml = '';
  for(let p=1; p<=totalPages; p++){
    const isActive = p===currentPage;
    pageNumbersHtml += `<button onclick="goToPage(${p})" class="min-w-[38px] h-[38px] px-2 rounded-full text-sm font-semibold transition-all ${
      isActive
        ? 'bg-crm-primary text-white shadow-crm'
        : 'bg-white text-crm-textDark border border-crm-border hover:bg-red-50'
    }">${p}</button>`;
  }

  el.innerHTML = `
    <div class="flex items-center gap-2 flex-wrap justify-center">
      <button onclick="changePage(-1)" ${currentPage<=1?'disabled':''} class="h-[38px] px-4 rounded-full text-sm font-semibold bg-white border border-crm-border text-crm-textDark hover:bg-red-50 disabled:opacity-40 disabled:hover:bg-white flex items-center gap-1.5">
        <i class="fas fa-chevron-left text-[10px]"></i> Prev
      </button>
      ${pageNumbersHtml}
      <button onclick="changePage(1)" ${currentPage>=totalPages?'disabled':''} class="h-[38px] px-4 rounded-full text-sm font-semibold bg-white border border-crm-border text-crm-textDark hover:bg-red-50 disabled:opacity-40 disabled:hover:bg-white flex items-center gap-1.5">
        Next <i class="fas fa-chevron-right text-[10px]"></i>
      </button>
    </div>
    <div class="text-crm-textMuted">Page ${currentPage} of ${totalPages} · ${total} ${cfg().label.toLowerCase()} total</div>`;
}
function goToPage(p){ currentPage = p; renderTable(); }
function changePage(d){ currentPage += d; renderTable(); }

function renderSidebarStats(){
  const statsWrap = document.getElementById('sidebarStatsWrap');
  if(currentUserRole && currentUserRole!=='admin'){ statsWrap.classList.add('hidden'); return; }
  statsWrap.classList.remove('hidden');
  if(!membersLiveDataConfirmed && useBackend){
    // Don't show any counts until we know they're correct — otherwise this briefly
    // shows stale cached numbers (e.g. 129) before jumping to the real ones (154) a
    // moment later, exactly like the Dashboard KPIs used to before their own fix.
    ['sbTotal','sbYuvaMember','sbPoshakLeader','sbOtherLeader'].forEach(id => {
      const el = document.getElementById(id);
      if(el) el.textContent = '…';
    });
    return;
  }
  const members = MODULES.members.data;
  document.getElementById('sbTotal').textContent = members.length;
  const yuvaCount = members.filter(m => m.role === 'યુવા સભ્ય').length;
  const poshakCount = members.filter(m => m.role === 'પોષક લીડર').length;
  // "Other Leader" is everyone whose role is neither of the above — Zone President,
  // Baal Yuva Mukhya, Region Head, Sanchalak, Sah-Sanchalak, or anything else — so a
  // future new leadership role is automatically counted here too, without needing to
  // update this list by hand every time.
  const otherLeaderCount = members.length - yuvaCount - poshakCount;
  document.getElementById('sbYuvaMember').textContent = yuvaCount;
  document.getElementById('sbPoshakLeader').textContent = poshakCount;
  document.getElementById('sbOtherLeader').textContent = otherLeaderCount;
}

/* ===================== DROPDOWN ===================== */
function hideGlobalDropdown(){
  document.getElementById('globalDropdown').classList.add('hidden');
}
function toggleDropdown(e, btn, idx){
  e.stopPropagation();
  const menu = document.getElementById('globalDropdown');
  const isOpenForThis = !menu.classList.contains('hidden') && menu.dataset.idx === String(idx);
  hideGlobalDropdown();
  if(isOpenForThis) return;

  const canDelete = currentUserRole==='admin' ||
    (isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile, currentModule, 'access') && hasExtraPermission(currentUserRecord.mobile, currentModule, 'delete'));
  const deleteItem = canDelete
    ? `<div class="dd-item danger" onclick="openDeleteModal(${idx})"><i class="fas fa-trash w-4"></i> Delete</div>`
    : '';
  // Admin-only: preview exactly what this member/poshak leader sees, with no login needed
  const previewItem = (currentUserRole==='admin' && currentModule==='members')
    ? `<div class="dd-item" onclick="startMemberPreview(${idx})"><i class="fas fa-street-view text-purple-500 w-4"></i> Member View</div>`
    : '';
  // Admin-only: reset a signed-up member's (yuva OR poshak leader) login so they can
  // sign up fresh — previously this only existed for poshak leaders via Users Permission.
  const resetSignupItem = (currentUserRole==='admin' && currentModule==='members')
    ? `<div class="dd-item" onclick="resetMemberSignup(${idx})"><i class="fas fa-rotate-left text-amber-500 w-4"></i> Reset Signup</div>`
    : '';
  menu.innerHTML = `
    ${previewItem}
    ${resetSignupItem}
    <div class="dd-item" onclick="copyRecord(${idx})"><i class="fas fa-copy text-blue-500 w-4"></i> Copy</div>
    <div class="dd-item" onclick="shareRecord(${idx})"><i class="fas fa-share-alt text-emerald-500 w-4"></i> Share</div>
    ${deleteItem}`;
  menu.dataset.idx = String(idx);

  const rect = btn.getBoundingClientRect();
  const menuWidth = 140;
  let left = rect.right - menuWidth;
  if(left < 8) left = 8;
  let top = rect.bottom + 4;
  if(top + 120 > window.innerHeight) top = rect.top - 124;

  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
  menu.classList.remove('hidden');
}
window.addEventListener('click', function(e){
  if(!e.target.closest('#globalDropdown') && !e.target.closest('.dd-toggle-btn')){
    hideGlobalDropdown();
  }
});
window.addEventListener('resize', hideGlobalDropdown);
document.addEventListener('scroll', hideGlobalDropdown, true);

/* ===================== SADHANA PILL HELPERS (Members module only) ===================== */
function sadhanaPill(key, val){
  const map = {
    puja:   { 'દરરોજ':['દરરોજ','sp-green'], 'ક્યારેક':['ક્યારેક','sp-amber'], 'નથી કરતો':['નથી કરતો','sp-red'] },
    mangla_aarti: { 'દરરોજ':['દરરોજ','sp-green'], 'ક્યારેક':['ક્યારેક','sp-amber'], 'નથી કરતો':['નથી કરતો','sp-red'] },
    sandhya_aarti: { 'દરરોજ':['દરરોજ','sp-green'], 'ક્યારેક':['ક્યારેક','sp-amber'], 'નથી કરતો':['નથી કરતો','sp-red'] },
    katha:  { 'લાઈવ':['લાઈવ','sp-green'], 'ડીલે લાઈવ':['ડીલે લાઈવ','sp-amber'], 'ક્યારેક':['ક્યારેક','sp-amber'], 'મોટા ભાગે':['મોટા ભાગે','sp-amber'], 'નથી સાંભળતો':['નથી સાંભળતો','sp-red'] },
    chesta: { 'દરરોજ':['દરરોજ','sp-green'], 'ક્યારેક':['ક્યારેક','sp-amber'], 'નથી કરતો':['નથી કરતો','sp-red'] },
    shibir: { 'હા':['હા','sp-green'], 'ના':['ના','sp-red'] },
    granth: { 'હા, રોજ':['હા, રોજ','sp-green'], 'ક્યારેક':['ક્યારેક','sp-amber'], 'અઠવાડિક':['અઠવાડિક','sp-amber'], 'ના, નથી કરતો':['ના, નથી કરતો','sp-red'] }
  };
  const icons = { puja:'fa-fire', mangla_aarti:'fa-sun', katha:'fa-podcast', sandhya_aarti:'fa-moon', chesta:'fa-eye', shibir:'fa-tent', granth:'fa-book-open' };
  const found = (map[key] && map[key][val]) || [val || 'Not set', 'sp-amber'];
  return `<span class="sadhana-pill ${found[1]}"><i class="fas ${icons[key]||'fa-circle'}"></i> ${esc(found[0])}</span>`;
}

/* ===================== RECORD PAGE (Add / Edit / View) ===================== */
function openRecord(mode, idx){
  if(mode==='edit' && idx!==undefined && !canEditInCurrentModule()){
    mode = 'view'; // block direct edit access without permission
  }
  // Members module: a poshak leader/yuva member may always edit their OWN profile, but
  // editing anyone ELSE requires the admin to have explicitly granted "Members" access +
  // edit permission — enforced here too so this can't be bypassed by calling openRecord()
  // directly, not just by hiding the Edit button.
  if(mode==='edit' && currentModule==='members' && idx!==undefined && currentUserRole!=='admin'){
    const rec = data()[idx];
    const isOwnRecord = rec && currentUserRecord && rec.smk === currentUserRecord.smk;
    const hasGroupEditPerm = isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'members','access') && hasExtraPermission(currentUserRecord.mobile,'members','edit');
    if(!isOwnRecord && !hasGroupEditPerm) mode = 'view';
  }
  // A deactivated member can never be edited, from anywhere — clicking Edit, opening a
  // stale edit link, whatever the path, always lands on View instead. Only the
  // Activate/Deactivate toggle (handled separately) can change anything about them.
  if(mode==='edit' && currentModule==='members' && idx!==undefined){
    const rec = data()[idx];
    if(rec && rec.active_status === 'inactive') mode = 'view';
  }
  if(mode==='add' && !canAddInCurrentModule()){
    return; // block direct add access without permission
  }
  currentMode = mode;
  currentIdx = (idx===undefined) ? null : idx;
  activeRecTab = cfg().tabGroups[0].key;
  recDraft = {};
  pendingUnsavedTabs = new Set();
  showPanel('recordView');
  renderRecordHeader();
  renderRecTabsNav();
  renderRecordBody();
  hideGlobalDropdown();
  document.querySelector('main').scrollTop = 0;
}

function renderRecTabsNav(){
  const el = document.getElementById('recTabs');
  if(!el) return;
  const moduleCfg = cfg();
  // cfg() only resolves to something meaningful when currentModule is 'members' — this
  // function gets called from background refreshes (e.g. after custom fields sync from
  // the database) that can fire before login or while a different screen is open, when
  // there's no member-record tab nav to render at all. Bail out quietly instead of
  // crashing on `.tabGroups` of undefined.
  if(!moduleCfg || !Array.isArray(moduleCfg.tabGroups)){ el.innerHTML=''; el.classList.add('hidden'); return; }
  const tabGroups = moduleCfg.tabGroups;
  if(tabGroups.length <= 1){ el.innerHTML=''; el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  el.innerHTML = tabGroups.map(t =>
    `<div class="page-tab ${t.key===activeRecTab?'active':''}" onclick="switchRecTab('${t.key}')"><i class="fas ${t.icon}"></i> ${t.label}</div>`
  ).join('');
}
function captureCurrentTabValues(){
  document.querySelectorAll('#recBody [data-field]').forEach(el => { recDraft[el.dataset.field] = el.value; });
}
function getMissingMandatoryFieldsForTab(tabKey){
  if(currentModule !== 'members') return [];
  const list = data();
  const record = (currentIdx!==null) ? list[currentIdx] : {};
  const getVal = k => (recDraft[k] !== undefined) ? recDraft[k] : record[k];
  const isEmpty = v => v === undefined || v === null || String(v).trim() === '';
  const tabFieldKeys = getFieldKeysForTab(tabKey);
  return tabFieldKeys.filter(k => {
    if(!REQUIRED_MEMBER_FIELDS.has(k)) return false;
    if(isFieldConditionallyHidden(k, getVal)) return false;
    if(k === 'own_photo_data') return isEmpty(getVal('own_photo_data')) && isEmpty(getVal('photo_url'));
    return isEmpty(getVal(k));
  });
}
function switchRecTab(key){
  if(key === activeRecTab) return;
  if(currentMode!=='view'){
    captureCurrentTabValues();

    if(currentModule==='members'){
      // Freely allowed to leave a tab even with an empty mandatory field — that's
      // only enforced at Save time now, not here.
      // If something on this tab genuinely changed from what's on record but wasn't
      // saved, remember it — the next Save (on whichever tab) will fold it in too.
      const list = data();
      const record = (currentIdx!==null) ? list[currentIdx] : {};
      const changedHere = getFieldKeysForTab(activeRecTab).some(k => {
        if(recDraft[k] === undefined) return false;
        const original = Array.isArray(record[k]) ? record[k].join(', ') : (record[k] ?? '');
        return String(recDraft[k]) !== String(original);
      });
      if(changedHere) pendingUnsavedTabs.add(activeRecTab);
    }
  }
  activeRecTab = key;
  renderRecTabsNav();
  renderRecordBody();
}

/* ---- Admin "Member View" preview — see exactly what a member/poshak leader sees,
   without logging out or needing their credentials. ---- */
let previewOriginalRole = null, previewOriginalRecord = null, isPreviewingAsMember = false;
function startMemberPreview(idx){
  if(currentUserRole !== 'admin') return;
  const rec = MODULES.members.data[idx];
  if(!rec) return;
  hideGlobalDropdown();
  previewOriginalRole = currentUserRole;
  previewOriginalRecord = currentUserRecord;
  isPreviewingAsMember = true;
  currentUserRole = (rec.role === 'પોષક લીડર') ? 'poshak' : 'yuva';
  currentUserRecord = rec;
  enterApp(); // reuses the exact same nav-visibility/routing logic as a real login
  showMemberPreviewBanner(rec);
}
function exitMemberPreview(){
  if(!isPreviewingAsMember) return;
  currentUserRole = previewOriginalRole;
  currentUserRecord = previewOriginalRecord;
  isPreviewingAsMember = false;
  previewOriginalRole = null; previewOriginalRecord = null;
  hideMemberPreviewBanner();
  enterApp();
}
function showMemberPreviewBanner(rec){
  let bar = document.getElementById('memberPreviewBar');
  if(!bar){
    bar = document.createElement('div');
    bar.id = 'memberPreviewBar';
    bar.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9998;background:#5a0616;color:#fff;padding:9px 16px;font-size:12.5px;display:flex;align-items:center;justify-content:center;gap:14px;box-shadow:0 2px 10px rgba(0,0,0,.15)';
    document.body.appendChild(bar);
  }
  bar.innerHTML = `<i class="fas fa-street-view"></i> <span>Member View: <strong>${esc(rec.name)}</strong> (${esc(rec.role || 'યુવા સભ્ય')}) — તમે Admin તરીકે જ છો, ફક્ત જોઈ રહ્યા છો</span>
    <button onclick="exitMemberPreview()" style="background:#fff;color:#5a0616;border:none;padding:4px 14px;border-radius:6px;font-weight:600;cursor:pointer">Exit Preview</button>`;
  document.body.style.paddingTop = '38px';
}
function hideMemberPreviewBanner(){
  const bar = document.getElementById('memberPreviewBar');
  if(bar) bar.remove();
  document.body.style.paddingTop = '';
}
/* ---- Active/Deactivate: a PERMANENT local override, independent of whether the
   server's backend actually manages to save this field. Every explicit Activate/
   Deactivate the admin makes is recorded here; every time fresh data loads from the
   backend, whatever this override says WINS over whatever the server returned — so a
   Deactivate can never silently "undo itself" just because the server's copy is stale
   or was never correctly persisted. ---- */
function loadActiveStatusOverrides(){
  try{ return JSON.parse(localStorage.getItem('yuvaSabhaActiveStatusOverrides') || '{}'); }catch(e){ return {}; }
}
function saveActiveStatusOverrideFor(smk, status){
  if(!smk) return;
  try{
    const overrides = loadActiveStatusOverrides();
    overrides[smk] = status;
    localStorage.setItem('yuvaSabhaActiveStatusOverrides', JSON.stringify(overrides));
  }catch(e){}
}
function applyActiveStatusOverrides(list){
  const overrides = loadActiveStatusOverrides();
  if(!Object.keys(overrides).length) return;
  list.forEach(r => {
    if(r.smk && overrides[r.smk] !== undefined) r.active_status = overrides[r.smk];
  });
}
function toggleMemberActiveStatus(idx){
  if(currentUserRole !== 'admin') return;
  const list = MODULES.members.data;
  const rec = list[idx];
  if(!rec) return;
  const willActivate = rec.active_status === 'inactive';
  openConfirmModal(
    willActivate ? `Activate "${rec.name}"?` : `Deactivate "${rec.name}"?`,
    willActivate
      ? 'They will be visible again to their Poshak Leader, and will be able to log in.'
      : 'They will be hidden from their Poshak Leader and everyone else, and will not be able to log in. Only you (Admin) will still be able to view their data — editing stays locked until you activate them again.',
    () => {
      rec.active_status = willActivate ? 'active' : 'inactive';
      saveActiveStatusOverrideFor(rec.smk, rec.active_status); // permanent — wins over the server from now on
      saveData('members');
      syncRecordToBackend('members', rec, false);
      logActivity('admin', 'admin', 'Admin', `${willActivate ? 'Activated' : 'Deactivated'} member ${rec.name}`);
      showToast(willActivate ? `${rec.name} activated.` : `${rec.name} deactivated.`);
      openRecord('view', idx);
      renderTable();
    },
    { confirmLabel: willActivate ? 'Activate' : 'Deactivate', confirmClass: willActivate ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-crm-primary hover:bg-crm-primaryHover' }
  );
}
function renderRecordHeader(){
  const list = data();
  const m = (currentIdx!==null) ? list[currentIdx] : null;
  const titleEl = document.getElementById('recTitle');
  const subEl = document.getElementById('recSubtitle');
  const btnsEl = document.getElementById('recHeaderBtns');
  const displayName = m ? (m[cfg().nameField] || '') : '';

  if(currentMode==='add'){ titleEl.textContent = 'Add New Record'; subEl.textContent = `Module: ${cfg().moduleTitle}`; }
  else if(currentMode==='edit'){ titleEl.textContent = 'Edit Record'; subEl.textContent = `Module: ${cfg().moduleTitle} · ${displayName}`; }
  else { titleEl.textContent = displayName || 'Record Details'; subEl.textContent = `Module: ${cfg().moduleTitle}`; }

  const recBodyEl = document.getElementById('recBody');
  if(recBodyEl) recBodyEl.style.opacity = (m && m.active_status === 'inactive') ? '.55' : '';

  const avatarWrap = document.getElementById('recAvatarWrap');
  if(avatarWrap){
    if(currentModule==='members' && m){
      avatarWrap.innerHTML = avatarHtml(m, 'w-11 h-11', true);
      avatarWrap.classList.remove('hidden');
    } else {
      avatarWrap.classList.add('hidden');
      avatarWrap.innerHTML = '';
    }
  }

  if(currentMode==='view'){
    const isInactive = m && m.active_status === 'inactive';
    // Admin-only: deactivated members can be viewed but not edited until reactivated.
    const editBtnHtml = (canEditInCurrentModule() && !isInactive)
      ? `<button onclick="openRecord('edit', ${currentIdx})" class="px-4 py-2 bg-crm-primary hover:bg-crm-primaryHover text-white rounded-lg text-xs font-medium shadow-sm transition-all flex items-center gap-2">
        <i class="fas fa-pen"></i> Edit
      </button>` : '';
    const activeToggleBtnHtml = (currentUserRole==='admin' && currentModule==='members' && m)
      ? (isInactive
          ? `<button onclick="toggleMemberActiveStatus(${currentIdx})" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium shadow-sm transition-all flex items-center gap-2">
              <i class="fas fa-toggle-on"></i> Activate
            </button>`
          : `<button onclick="toggleMemberActiveStatus(${currentIdx})" class="px-4 py-2 bg-white border border-red-200 text-crm-primary hover:bg-red-50 rounded-lg text-xs font-medium shadow-sm transition-all flex items-center gap-2">
              <i class="fas fa-toggle-off"></i> Deactivate
            </button>`)
      : '';
    btnsEl.innerHTML = `
      <button onclick="closeRecord()" class="px-4 py-2 rounded-lg text-xs font-medium text-slate-500 bg-white border border-slate-200 hover:bg-slate-50 transition">Back</button>
      ${activeToggleBtnHtml}
      ${editBtnHtml}`;
    if(isInactive){
      subEl.innerHTML = `${esc(subEl.textContent)} <span class="badge bg-red-50 text-crm-primary ml-2"><i class="fas fa-circle-xmark"></i> Deactivated</span>`;
    }
  } else {
    const isInactive = m && m.active_status === 'inactive';
    // Same admin-only Activate/Deactivate control, also available while editing —
    // never shown to a poshak leader or yuva member, only currentUserRole==='admin'.
    const activeToggleBtnHtml = (currentMode==='edit' && currentUserRole==='admin' && currentModule==='members' && m)
      ? (isInactive
          ? `<button onclick="toggleMemberActiveStatus(${currentIdx})" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium shadow-sm transition-all flex items-center gap-2">
              <i class="fas fa-toggle-on"></i> Activate
            </button>`
          : `<button onclick="toggleMemberActiveStatus(${currentIdx})" class="px-4 py-2 bg-white border border-red-200 text-crm-primary hover:bg-red-50 rounded-lg text-xs font-medium shadow-sm transition-all flex items-center gap-2">
              <i class="fas fa-toggle-off"></i> Deactivate
            </button>`)
      : '';
    const saveHandler = currentModule==='members' ? 'saveCurrentTabDetails()' : 'saveRecord()';
    btnsEl.innerHTML = `
      <button onclick="closeRecord()" class="px-4 py-2 rounded-lg text-xs font-medium text-slate-500 bg-white border border-slate-200 hover:bg-slate-50 transition">Back</button>
      ${activeToggleBtnHtml}
      <button onclick="${saveHandler}" class="px-4 py-2 bg-crm-primary hover:bg-crm-primaryHover text-white rounded-lg text-xs font-medium shadow-sm transition-all flex items-center gap-2">
        <i class="fas fa-check-circle"></i> Save Details
      </button>`;
  }
}

function renderRecordBody(){
  const isView = currentMode==='view';
  const list = data();
  const record = (currentIdx!==null) ? list[currentIdx] : (cfg().newRecordDefaults ? cfg().newRecordDefaults() : {});
  const tabDef = cfg().tabGroups.find(t=>t.key===activeRecTab);
  const visibleSections = cfg().sections.filter(sec => tabDef.sections.includes(sec.title));
  const getFieldVal = k => (recDraft[k] !== undefined) ? recDraft[k] : record[k];
  // A Yuva Sabhya has a "Poshak Leader" above them; anyone else (Poshak Leader,
  // Sanchalak, Sahsanchalak, etc.) instead has a "Saakshi Leader" — same field,
  // different framing depending on the person's own role.
  const isYuvaSabhyaForLeaderLabel = getFieldVal('role') === 'યુવા સભ્ય';
  let html = '';

  visibleSections.forEach(sec => {
    if(sec.displayTitle !== ''){
      let headerTitle = sec.displayTitle || sec.title;
      if(sec.title === 'તમારા પોષક લીડરનું નામ' && !isYuvaSabhyaForLeaderLabel) headerTitle = 'તમારા સાક્ષી લીડરનું નામ';
      html += `<h3 class="section-header"><i class="fas ${sec.icon} ${sec.color} mr-1 text-sm"></i> ${esc(headerTitle)}</h3>`;
    }

    if(sec.special==='sadhana' && isView){
      html += `<div class="flex flex-wrap gap-2 mb-5">
        ${sadhanaPill('puja', record.puja)}
        ${sadhanaPill('mangla_aarti', record.mangla_aarti)}
        ${sadhanaPill('katha', record.katha)}
        ${sadhanaPill('sandhya_aarti', record.sandhya_aarti)}
        ${sadhanaPill('chesta', record.chesta)}
        ${sadhanaPill('shibir', record.shibir)}
        ${sadhanaPill('granth', record.granth)}
      </div>`;
      if(record.flags && record.flags.length){
        html += `<div class="flags-box mb-6"><i class="fas fa-triangle-exclamation mr-1"></i> <b>${record.flags.length} flags:</b> ${record.flags.map(f=>esc(f)).join(' · ')}</div>`;
      }
    }

    html += `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-2">`;
    sec.fields.forEach(([key,label,type,options]) => {
      if(sec.special==='sadhana' && isView && ['puja','mangla_aarti','katha','sandhya_aarti','chesta','shibir','granth','flags'].includes(key)) return;
      if(key === 'poshak_leader' && !isYuvaSabhyaForLeaderLabel) label = 'સાક્ષી લીડર';
      const isConditionallyDisabled = currentModule==='members' && isFieldConditionallyHidden(key, getFieldVal);

      let val = (recDraft[key] !== undefined) ? recDraft[key] : record[key];
      if(Array.isArray(val)) val = val.join(', ');
      const isTextarea = type==='textarea';
      // Poshak Leader is a dropdown only for a Yuva Sabhya; for everyone else (shown as
      // "Saakshi Leader" instead) it's plain free-typed text, no dropdown at all.
      const isSelect = type==='select' && !(key==='poshak_leader' && !isYuvaSabhyaForLeaderLabel);
      const isMultiselect = type==='multiselect';
      const isMultiselectDropdown = type==='multiselect-dropdown';
      const isDate = type==='date';
      const disabledAttr = (isView || isConditionallyDisabled) ? 'disabled' : '';

      let fieldHtml;
      if(key==='skills' && isView){
        const items = (val||'').split(',').map(x=>x.trim()).filter(Boolean);
        fieldHtml = items.length
          ? `<div class="flex flex-wrap gap-1.5">${items.map(x=>`<span class="badge" style="background:#eef7f5;color:#0d6e5f;white-space:normal;text-align:left">${esc(x)}</span>`).join('')}</div>`
          : `<input type="text" value="" disabled>`;
      } else if(key==='photo_url' && isView && val && /^https?:\/\//.test(val)){
        fieldHtml = `<a href="${esc(val)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-medium" style="color:var(--maroon)"><i class="fas fa-image"></i> ફોટો જુઓ (Open Photo)</a>`;
      } else if(key==='own_photo_data'){
        if(isView){
          const legacyThumb = val ? '' : driveImgUrl(record.photo_url, 160);
          const legacyFull = val ? '' : driveImgUrl(record.photo_url, 2000);
          const viewThumb = val || legacyThumb;
          const viewFull = val || legacyFull;
          fieldHtml = viewThumb
            ? `<div class="flex items-center gap-3">
                <img src="${esc(viewThumb)}" alt="Photo" onclick="openPhotoLightbox('${esc(viewFull).replace(/'/g,"\\'")}')" class="w-16 h-16 rounded-lg object-cover cursor-pointer border border-crm-border hover:opacity-80 transition" title="Click to view full size">
                <div class="flex flex-col gap-1">
                  <button type="button" onclick="openPhotoLightbox('${esc(viewFull).replace(/'/g,"\\'")}')" class="text-xs font-medium" style="color:var(--maroon)"><i class="fas fa-expand"></i> મોટું જુઓ</button>
                </div>
              </div>`
            : `<p class="text-xs text-crm-textMuted">કોઈ ફોટો અપલોડ કરેલો નથી</p>`;
        } else {
          // If they haven't uploaded a new photo through this field yet, show their
          // existing photo (from the original form's Drive link) as the current preview
          // instead of looking empty — it's already "uploaded", just via the old field.
          // Small thumbnail for this little preview box; full-quality version only
          // requested when actually opened in the lightbox.
          const legacyThumb = val ? '' : driveImgUrl(record.photo_url, 160);
          const legacyFull = val ? '' : driveImgUrl(record.photo_url, 2000);
          const displayThumb = val || legacyThumb;
          const displayFull = val || legacyFull;
          fieldHtml = `<div class="flex items-center gap-3">
              <div id="ownPhotoPreviewWrap" class="${displayThumb ? '' : 'hidden'}" style="position:relative;width:64px;height:64px">
                <img id="ownPhotoPreview" data-full="${esc(displayFull||'')}" src="${esc(displayThumb||'')}" alt="Preview" onclick="openPhotoLightbox(this.dataset.full)" class="w-16 h-16 rounded-lg object-cover cursor-pointer border border-crm-border" onerror="this.closest('#ownPhotoPreviewWrap').classList.add('hidden')">
                <button type="button" id="ownPhotoRemoveBtn" onclick="confirmRemoveOwnPhoto()" title="Remove photo" class="${val ? '' : 'hidden'}" style="position:absolute;top:-7px;right:-7px;width:20px;height:20px;border-radius:50%;background:#dc2626;color:#fff;border:2px solid #fff;font-size:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.3)">✕</button>
              </div>
              <div class="flex flex-col gap-1.5">
                <input type="file" accept="image/jpeg,image/jpg,image/png" onchange="handleOwnPhotoUpload(event)" class="text-xs">
                <span id="ownPhotoUploadStatus" class="text-[11px] text-crm-textMuted">${legacyThumb ? 'હાલનો ફોટો ઓરિજિનલ ફોર્મમાંથી બતાવેલો છે — નવો પસંદ કરો તો બદલાશે.' : ''}</span>
              </div>
              <input type="hidden" data-field="own_photo_data" id="ownPhotoDataField" value="${esc(val||'')}">
            </div>`;
        }
      } else if(isSelect){
        const resolvedOptions = (typeof options === 'function') ? options() : options;
        let opts = (resolvedOptions || []).slice();
        const optVals = opts.map(o => (typeof o === 'object') ? o.value : o);
        if(val && !optVals.includes(val)) opts = [...opts, val]; // keep existing data visible & selected
        const isConditionController = CONDITIONAL_HIDE_RULES.some(r => r.controller === key);
        let extraTrigger = isConditionController ? ' onchange="captureCurrentTabValues();renderRecordBody();"' : '';
        if(key === 'poshak_leader') extraTrigger = ' onchange="onPoshakLeaderSelected(this.value)"';
        if(key === 'school_city'){
          // "Other" (or any saved value not in the standard list, e.g. a city typed in
          // earlier) shows the free-text box instead of the dropdown owning data-field.
          const isCustomCity = val && val !== 'Other' && !GUJARAT_CITY_OPTIONS.includes(val);
          const showOtherBox = val === 'Other' || isCustomCity;
          const selectValue = isCustomCity ? 'Other' : val;
          fieldHtml = `<select id="schoolCitySelect" ${showOtherBox ? '' : `data-field="school_city"`} ${disabledAttr} onchange="onSchoolCityChanged(this.value)">
            <option value="">Select…</option>
            ${GUJARAT_CITY_OPTIONS.map(o => `<option value="${esc(o)}" ${selectValue===o?'selected':''}>${esc(o)}</option>`).join('')}
          </select>
          <input type="text" id="schoolCityOtherInput" ${showOtherBox ? `data-field="school_city"` : ''} class="${showOtherBox ? '' : 'hidden'} mt-1.5" placeholder="Type the city name" value="${esc(showOtherBox ? (isCustomCity ? val : '') : '')}" ${disabledAttr}>`;
        } else {
        fieldHtml = `<select data-field="${key}" ${disabledAttr}${extraTrigger}>
          <option value="">Select…</option>
          ${opts.map(o=>{
            const ov = (typeof o === 'object') ? o.value : o;
            const ol = (typeof o === 'object') ? o.label : o;
            return `<option value="${esc(ov)}" ${val===ov?'selected':''}>${esc(ol)}</option>`;
          }).join('')}
        </select>`;
        }
      } else if(isMultiselect){
        const opts = options || [];
        // Several option lists here (Kundal Seva especially) have options that
        // themselves contain a comma — e.g. "હા, ઘેર બેઠા સેવા ચાલુ છે". Naively
        // splitting the stored value on ',' breaks one selected option into pieces
        // that never match a full option string again, so EVERY checkbox showed
        // unchecked even when the field had real saved data. Instead, check each
        // known option as a substring of the raw stored value — safe here because
        // storage always joins full option texts with ', ' (see updateMultiSelect).
        const rawVal = val || '';
        const selectedVals = opts.filter(o => rawVal === o || rawVal.includes(o));
        fieldHtml = `<div class="multiselect-box">
          <input type="hidden" data-field="${key}" value="${esc(selectedVals.join(', '))}">
          ${opts.map(o=>`<label class="multiselect-opt"><input type="checkbox" value="${esc(o)}" onchange="updateMultiSelect('${key}', this)" ${selectedVals.includes(o)?'checked':''} ${disabledAttr}> ${esc(o)}</label>`).join('')}
        </div>`;
      } else if(isMultiselectDropdown){
        // Skills-style multiselect: opens as a vertical dropdown panel (via the same
        // shared custom-dropdown mechanics as single-selects), not the horizontal
        // inline checkbox row the plain "multiselect" type uses for Languages/Kundal Seva.
        const opts = options || [];
        const selectedVals = opts.filter(o => (val||'').split(',').map(s=>s.trim()).includes(o));
        const summary = selectedVals.length ? selectedVals.join(', ') : 'Select…';
        fieldHtml = `<div class="ms-dropdown-field" data-ms-key="${key}" data-ms-options='${esc(JSON.stringify(opts))}' ${disabledAttr ? 'data-disabled="1"' : ''}
            style="border:1px solid var(--border-color,#ecdfe1);border-radius:8px;padding:8px 10px;font-size:13px;cursor:${disabledAttr?'default':'pointer'};background:${disabledAttr?'#f7f2f3':'#fff'};color:${selectedVals.length?'#2a1013':'#7a5a5f'};min-height:20px;display:flex;align-items:center;justify-content:space-between;gap:8px">
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(summary)}</span>
          ${disabledAttr ? '' : '<i class="fas fa-chevron-down" style="font-size:10px;color:#7a5a5f;flex-shrink:0"></i>'}
        </div>
        <input type="hidden" data-field="${key}" value="${esc(selectedVals.join(', '))}">`;
      } else if(type === 'cf-validated-text'){
        const subtype = options; // 4th tuple slot carries the validation subtype here
        if(subtype === 'digits'){
          fieldHtml = `<input data-field="${key}" type="text" inputmode="numeric" value="${esc(val||'')}" placeholder="Enter ${esc(label)}" ${disabledAttr}
            oninput="this.value=this.value.replace(/[^0-9]/g,'')">`;
        } else if(subtype === 'mobile'){
          fieldHtml = `<input data-field="${key}" type="text" inputmode="numeric" maxlength="10" value="${esc(val||'')}" placeholder="10-digit mobile number" ${disabledAttr}
            oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(0,10)">`;
        } else if(subtype === 'email'){
          fieldHtml = `<input data-field="${key}" type="email" value="${esc(val||'')}" placeholder="name@example.com" ${disabledAttr}
            pattern="[^@\\s]+@[^@\\s]+\\.[^@\\s]+" title="Enter a valid email address">`;
        } else if(subtype === 'video'){
          fieldHtml = `<input data-field="${key}" type="url" value="${esc(val||'')}" placeholder="Paste a video link (YouTube, Drive, etc.)" ${disabledAttr}>`;
        } else {
          fieldHtml = `<input data-field="${key}" type="text" value="${esc(val||'')}" placeholder="Enter ${esc(label)}" ${disabledAttr}>`;
        }
      } else if(type === 'cf-radio'){
        const opts = options || [];
        fieldHtml = `<div class="flex flex-wrap gap-x-4 gap-y-2 pt-1">
          ${opts.map((o,i) => `<label class="flex items-center gap-1.5 text-sm cursor-pointer">
            <input type="radio" name="cfradio_${key}" value="${esc(o)}" ${val===o?'checked':''} ${disabledAttr}
              onchange="document.querySelector('input[data-field=\\'${key}\\']').value=this.value; markFormDirty();">
            ${esc(o)}
          </label>`).join('')}
        </div>
        <input type="hidden" data-field="${key}" value="${esc(val||'')}">`;
      } else if(type === 'time-multi'){
        fieldHtml = timeMultiFieldHtml(key, val, disabledAttr);
      } else if(isDate){
        fieldHtml = datePickerFieldHtml(key, val, disabledAttr, null);
      } else if(isTextarea){
        fieldHtml = `<textarea data-field="${key}" rows="${key==='skills'?3:2}" placeholder="Type here…" ${disabledAttr}>${esc(val||'')}</textarea>`;
      } else {
        // First Name / Father's Name / Surname feed the Full Name (Gujarati)
        // auto-transliteration — typing these (in English) and tabbing/clicking away
        // auto-fills "Full Name (Gujarati)" as a best-effort transliteration, which
        // the admin can still edit by hand afterward (it never overwrites a value
        // that's already there).
        const nameFieldTrigger = ['first_name','father_name','surname'].includes(key) ? ' oninput="autoFillGujaratiFullName()"' : '';
        fieldHtml = `<input data-field="${key}" type="text" value="${esc(val||'')}" placeholder="Enter ${esc(label)}" ${disabledAttr}${nameFieldTrigger}>`;
      }

      const isLoginField = key==='login_username' || key==='login_password';
      const isRequiredField = (currentModule==='members') ? REQUIRED_MEMBER_FIELDS.has(key) : true;
      html += `<div class="rec-field ${(isTextarea||isMultiselect) && !['skills','address'].includes(key) ? 'md:col-span-2 xl:col-span-3' : ''}">
        <label>${esc(label)}${(!isView && !isLoginField && isRequiredField && !isConditionallyDisabled) ? '<span class=\"req\">*</span>' : ''}</label>
        ${fieldHtml}
      </div>`;
    });
    html += `</div>`;
  });

  if(currentModule==='members' && !isView){
    html += `<div class="flex justify-end pt-4 mt-2 border-t border-crm-border">
      <button onclick="saveCurrentTabDetails()" class="px-4 py-2 bg-crm-primary hover:bg-crm-primaryHover text-white rounded-lg text-xs font-medium shadow-sm transition-all flex items-center gap-2">
        <i class="fas fa-check-circle"></i> Save Details
      </button>
    </div>`;
  }
  document.getElementById('recBody').innerHTML = html;
}
function updateMultiSelect(key, checkboxEl){
  const container = checkboxEl.closest('.multiselect-box');
  const hidden = container.querySelector(`input[type="hidden"][data-field="${key}"]`);
  const checked = [...container.querySelectorAll('input[type="checkbox"]:checked')].map(c=>c.value);
  hidden.value = checked.join(', ');
}

function generateUniqueSmk(name){
  const lettersSrc = (name||'MEM').replace(/[^a-zA-Zअ-ह\u0A80-\u0AFFa-zA-Z]/g,'');
  let letters = (lettersSrc.match(/[A-Za-z]/g) || []).join('').toUpperCase().slice(0,3);
  if(letters.length < 3) letters = (letters + 'MXY').slice(0,3);
  const existing = new Set((MODULES.members.data||[]).map(r => (r.smk||'').toUpperCase()));
  let code;
  do {
    const num = String(Math.floor(100 + Math.random()*900));
    code = letters + num;
  } while(existing.has(code));
  return code;
}
function syncRecordToBackend(moduleKey, record, isNew){
  if(!useBackend) return;
  if(moduleKey !== 'members') return;
  const endpoint = 'members.php';
  const smk = record.smk;
  const recId = record.id;
  if(!isNew && !smk && !recId){
    console.warn('Cannot sync record without an smk code or id.');
    showToast('⚠️ Could not save to server — missing member code. Data kept on this device only.', 12000);
    return Promise.resolve(false);
  }
  if(isNew && !smk){
    console.warn('Cannot sync a new record without an smk code.');
    showToast('⚠️ Could not save to server — missing member code. Data kept on this device only.', 12000);
    return Promise.resolve(false);
  }

  const method = isNew ? 'POST' : 'PUT';
  // For existing records, prefer id over smk whenever id is available — id never
  // changes, so it stays a valid identifier even while smk_code itself is one of the
  // fields being changed in this same request (e.g. giving a fresh SMK to a record
  // that didn't have one yet — looking that record up by the NEW smk value would fail,
  // since the database row still has the OLD value until this very update runs).
  const url = isNew ? `${API_BASE}/${endpoint}`
    : (recId ? `${API_BASE}/${endpoint}?id=${encodeURIComponent(recId)}` : `${API_BASE}/${endpoint}?smk=${encodeURIComponent(smk)}`);
  const body = isNew ? { ...record, smk_code: smk } : record;

  console.log('MEMBER SAVE — sending', method, 'to', url, '| payload:', JSON.parse(JSON.stringify(body)));

  return fetch(url, {
    method: method,
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(body)
  }).then(res => {
    console.log('MEMBER SAVE — server HTTP status:', res.status, res.ok ? '(ok)' : '(NOT ok)');
    return res.json();
  }).then(async data => {
    console.log('MEMBER SAVE — server response body:', data);
    if(data.error){
      console.warn('Backend sync failed:', data.error);
      // Self-healing: if this failed because the server couldn't find a member with
      // this SMK, the person's SMK on file has likely changed since this browser last
      // knew it. Look them up by name instead, get their CURRENT smk from the server,
      // and retry automatically — no manual steps needed from whoever hit this.
      if(!isNew && /no member found/i.test(data.error||'')){
        const healed = await attemptSmkSelfHeal(record, smk);
        if(healed) return true;
      }
      showToast('⚠️ Server did not save this record: ' + data.error + '. It will be lost on refresh unless re-saved.', 12000);
      showSaveErrorPopup('The server did not save this record.\n\nReason: ' + data.error + '\n\nYour changes may be lost if you refresh — please try Save again, and if this keeps happening, show this message to the admin.');
      return false;
    }
    console.log('MEMBER SAVE — server confirmed success for smk:', smk);
    return true;
  }).catch(e => {
    console.warn('Backend unreachable, change saved locally only:', e);
    showToast('⚠️ Could not reach server — this record is only on this device and will be LOST on refresh. Check internet and save again.', 12000);
    showSaveErrorPopup('Could not reach the server to save this.\n\nYour changes are only on this device right now and will be LOST if you refresh.\n\nPlease check your internet connection and try Save again.');
    return false;
  });
}
async function attemptSmkSelfHeal(record, wrongSmk){
  try{
    console.log('MEMBER SAVE — attempting self-heal: looking up the current correct SMK by name for', record.first_name, record.surname);
    const res = await cachedFetch(`${API_BASE}/members.php?_ts=${Date.now()}`, { cache: 'no-store' });
    if(!res.ok) return false;
    const all = await res.json();
    if(!Array.isArray(all)) return false;
    const fn = String(record.first_name||'').trim().toLowerCase();
    const sn = String(record.surname||'').trim().toLowerCase();
    if(!fn || !sn) return false;
    const match = all.find(r => String(r.first_name||'').trim().toLowerCase()===fn && String(r.surname||'').trim().toLowerCase()===sn);
    if(!match || !match.smk_code || match.smk_code.toUpperCase() === wrongSmk.toUpperCase()) return false;

    const correctSmk = match.smk_code;
    console.log('MEMBER SAVE — self-heal found the correct current SMK:', correctSmk, '(was trying:', wrongSmk, ')');
    const retryBody = { ...record, smk: correctSmk };
    const retryRes = await fetch(`${API_BASE}/members.php?smk=${encodeURIComponent(correctSmk)}`, {
      method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(retryBody)
    });
    const retryData = await retryRes.json().catch(()=>({}));
    if(retryData.error){ console.warn('MEMBER SAVE — self-heal retry also failed:', retryData.error); return false; }

    console.log('MEMBER SAVE — self-heal succeeded! Fixing this record\'s SMK locally too.');
    // Fix it locally too, everywhere this record appears, so this doesn't keep happening.
    (MODULES.members.data||[]).forEach(r => { if(r === record || (r.first_name===record.first_name && r.surname===record.surname && (r.smk||'').toUpperCase()===wrongSmk.toUpperCase())) r.smk = correctSmk; });
    if(record.smk) record.smk = correctSmk;
    saveData('members');
    if(currentUserRecord && (currentUserRecord.smk||'').toUpperCase() === wrongSmk.toUpperCase()) currentUserRecord.smk = correctSmk;
    showToast('✔ Saved! (Automatically corrected an outdated member code.)', 5000);
    return true;
  }catch(e){
    console.warn('MEMBER SAVE — self-heal attempt failed:', e);
    return false;
  }
}
function deleteRecordFromBackend(moduleKey, smk){
  if(!useBackend) return;
  if(moduleKey !== 'members') return;
  const endpoint = 'members.php';
  fetch(`${API_BASE}/${endpoint}?smk=${encodeURIComponent(smk)}`, { method: 'DELETE' })
    .then(res => res.json())
    .catch(e => console.warn('Backend unreachable, delete only applied locally:', e));
}
function validateRequiredMemberFields(newRecord){
  const isEmpty = v => v === undefined || v === null || String(v).trim() === '';
  const missing = [...REQUIRED_MEMBER_FIELDS].filter(k => {
    if(isFieldConditionallyHidden(k, fk => newRecord[fk])) return false;
    if(k === 'own_photo_data'){
      // A member can have a photo via the new upload (own_photo_data) OR the
      // original signup's legacy Drive link (photo_url) — either one counts as
      // "has a photo". Checking own_photo_data alone was blocking saves for every
      // member whose photo still only exists as the legacy Drive link.
      return isEmpty(newRecord.own_photo_data) && isEmpty(newRecord.photo_url);
    }
    return isEmpty(newRecord[k]);
  });
  if(!missing.length) return null;

  // Find which section (and therefore which tab) the first missing field lives on,
  // so we can jump the admin straight to it instead of leaving them to hunt across
  // every tab for what's empty.
  let targetTabKey = null, targetLabel = missing[0];
  for(const sec of MEMBER_SECTIONS){
    const f = sec.fields.find(([k]) => k === missing[0]);
    if(f){
      targetLabel = f[1];
      const tg = MEMBER_TAB_GROUPS.find(t => t.sections.includes(sec.title));
      if(tg) targetTabKey = tg.key;
      break;
    }
  }
  if(targetTabKey && targetTabKey !== activeRecTab){
    switchRecTab(targetTabKey);
  } else {
    renderRecordBody(); // re-render current tab so the highlight below applies fresh
  }

  // Highlight every currently-visible missing field with a red border so they're easy to spot.
  missing.forEach(k => {
    const el = document.querySelector(`#recBody [data-field="${k}"]`);
    if(el) el.style.borderColor = '#e24b4a';
  });

  showToast(missing.length === 1
    ? `"${targetLabel}" is required — please fill it in before saving.`
    : `${missing.length} required fields are empty — please start with "${targetLabel}".`);
  return missing[0];
}
function validateCustomFieldFormats(newRecord){
  for(const def of CUSTOM_FIELD_DEFS){
    const val = newRecord[def.id];
    if(!val) continue;
    if(def.field_type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val)){
      showToast(`"${def.label}" doesn't look like a valid email address.`);
      return def.id;
    }
    if(def.field_type === 'mobile' && String(val).replace(/\D/g,'').length !== 10){
      showToast(`"${def.label}" must be a 10-digit mobile number.`);
      return def.id;
    }
  }
  return null;
}
function getFieldKeysForTab(tabKey){
  const tabGroup = MEMBER_TAB_GROUPS.find(t => t.key === tabKey);
  if(!tabGroup) return [];
  const keys = [];
  MEMBER_SECTIONS.forEach(sec => {
    if(tabGroup.sections.includes(sec.title)){
      sec.fields.forEach(f => keys.push(f[0]));
    }
  });
  return keys;
}
let _saveSuccessHideTimer = null;
function showSaveSuccessPopup(message){
  const popup = document.getElementById('saveSuccessPopup');
  document.getElementById('saveSuccessPopupMsg').textContent = message || '';
  popup.classList.remove('hidden');
  if(_saveSuccessHideTimer) clearTimeout(_saveSuccessHideTimer);
  _saveSuccessHideTimer = setTimeout(() => { popup.classList.add('hidden'); _saveSuccessHideTimer = null; }, 1800);
}
function showSaveErrorPopup(message){
  document.getElementById('saveErrorPopupMsg').textContent = message || 'Something went wrong while saving.';
  document.getElementById('saveErrorPopup').classList.remove('hidden');
}
async function saveCurrentTabDetails(){
  captureCurrentTabValues();
  const isEdit = (currentMode==='edit' && currentIdx!==null);

  if(!isEdit){
    // A brand-new record doesn't exist yet to partially update — create it using the
    // full save flow (which already handles required-field validation and smk
    // generation), but stay open afterward instead of returning to the list, so the
    // person can keep filling in the remaining tabs one at a time.
    keepRecordOpenAfterSave = true;
    saveRecord();
    return;
  }

  const list = data();
  const originalRecord = list[currentIdx];
  if(currentModule==='members' && originalRecord.active_status === 'inactive'){
    showToast('This member is deactivated. Activate them first to make changes.');
    openRecord('view', currentIdx);
    return;
  }

  const tabDef = cfg().tabGroups.find(t=>t.key===activeRecTab);
  // Fold in any OTHER tab's changes that were typed earlier in this session but never
  // actually saved (tracked when leaving that tab without clicking Save) — so this Save
  // covers the current tab AND anything left pending from before.
  const otherPendingTabs = [...pendingUnsavedTabs].filter(k => k !== activeRecTab);
  const tabFieldKeys = [...new Set([...getFieldKeysForTab(activeRecTab), ...otherPendingTabs.flatMap(getFieldKeysForTab)])];
  if(!tabFieldKeys.length){ showToast('Nothing to save on this tab.'); return; }
  const savedTabLabels = [tabDef.label, ...otherPendingTabs.map(k => (cfg().tabGroups.find(t=>t.key===k)||{}).label).filter(Boolean)];

  // Mandatory fields are only enforced now, at Save time — freely switching tabs with
  // one still empty is allowed, but the actual save is blocked until it's filled.
  const tabsBeingSaved = [activeRecTab, ...otherPendingTabs];
  for(const tk of tabsBeingSaved){
    const missing = getMissingMandatoryFieldsForTab(tk);
    if(missing.length){
      if(tk !== activeRecTab) switchRecTab(tk); // jump to whichever tab has the problem so it's visible
      missing.forEach(k => {
        const el = document.querySelector(`#recBody [data-field="${k}"]`);
        if(el) el.style.borderColor = '#e24b4a';
      });
      const missingTabLabel = (cfg().tabGroups.find(t=>t.key===tk)||{}).label || tk;
      showToast(missing.length === 1
        ? `Please fill the required field on the "${missingTabLabel}" tab before saving.`
        : `Please fill these ${missing.length} required fields on the "${missingTabLabel}" tab before saving.`);
      return;
    }
  }

  const updated = { ...originalRecord };
  let anyChanged = false;
  tabFieldKeys.forEach(key => {
    if(recDraft[key] === undefined) return;
    let val = recDraft[key];
    if(key==='flags'){ val = val ? val.split(',').map(s=>s.trim()).filter(Boolean) : []; }
    else if(key==='score'){ val = Number(val) || 0; }
    updated[key] = val;
    anyChanged = true;
  });
  if(!anyChanged){ showToast('Nothing changed on this tab.'); return; }

  if(currentModule==='members' && validateCustomFieldFormats(updated)) return; // already surfaced the error

  const isAdmin = currentUserRole==='admin';
  const actorMobile = isAdmin ? 'admin' : (currentUserRecord ? currentUserRecord.mobile : '');
  const actorName = isAdmin ? 'Admin' : (currentUserRecord ? currentUserRecord.name : '');

  if(isAdmin || !originalRecord.profile_completed){
    // Admin edits (and a user's very first profile fill) save directly — same rule
    // the whole-record Save already follows.
    const isFirstFill = !isAdmin && !originalRecord.profile_completed;
    if(isFirstFill) updated.profile_completed = true;
    list[currentIdx] = updated;
    saveData();
    // Partial PUT — only this tab's fields (plus smk to identify the record) — leaves
    // every other tab's data on the server untouched.
    const partialPayload = { smk: originalRecord.smk, id: originalRecord.id };
    tabFieldKeys.forEach(key => { if(recDraft[key] !== undefined) partialPayload[key] = updated[key]; });
    if(isFirstFill) partialPayload.profile_completed = true;
    const confirmed = await syncRecordToBackend(currentModule, partialPayload, false);
    const diffs = computeFieldDiffs(currentModule, originalRecord, updated);
    logActivity(currentUserRole || 'admin', actorMobile, actorName, `Edited ${savedTabLabels.join(' + ')} tab${savedTabLabels.length>1?'s':''}`, diffs);
    if(currentUserRecord && updated.smk && updated.smk === currentUserRecord.smk){
      currentUserRecord = updated;
      updateSidebarAvatar();
    }
    // Only claim success once the server has actually confirmed it — syncRecordToBackend
    // already shows its own error popup if it failed, so nothing else to do here in that case.
    if(confirmed) showSaveSuccessPopup(`${savedTabLabels.join(' + ')} details saved!`);
  } else {
    // Existing profile being edited by a non-admin -> this tab's changes go to pending approval
    submitForApproval(currentModule, currentIdx, updated);
    const diffs = computeFieldDiffs(currentModule, originalRecord, updated);
    logActivity(currentUserRole, actorMobile, actorName, `Edited ${savedTabLabels.join(' + ')} tab${savedTabLabels.length>1?'s':''} (pending approval)`, diffs);
    showSaveSuccessPopup(`Your ${savedTabLabels.join(' + ')} changes have been submitted. They will appear once an admin approves them.`);
  }
  pendingUnsavedTabs.clear();
  renderRecordHeader();
  renderRecordBody();
}
async function saveRecord(){
  captureCurrentTabValues();
  const list = data();
  const isEdit = (currentMode==='edit' && currentIdx!==null);
  const originalRecord = isEdit ? list[currentIdx] : null;
  if(currentModule==='members' && originalRecord && originalRecord.active_status === 'inactive'){
    showToast('This member is deactivated. Activate them first to make changes.');
    openRecord('view', currentIdx);
    return;
  }
  const newRecord = isEdit ? {...originalRecord} : cfg().newRecordDefaults();

  Object.keys(recDraft).forEach(key => {
    let val = recDraft[key];
    if(key==='flags'){
      newRecord[key] = val ? val.split(',').map(s=>s.trim()).filter(Boolean) : [];
    } else if(key==='score'){
      newRecord[key] = Number(val) || 0;
    } else {
      newRecord[key] = val;
    }
  });

  const nameField = cfg().nameField;
  if(!newRecord[nameField]){
    newRecord[nameField] = cfg().computeName(newRecord);
  }
  if(!newRecord.initials){
    newRecord.initials = (newRecord[nameField]||'').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  }
  // CRITICAL: every new Member needs a unique smk code — syncRecordToBackend() refuses
  // to POST a record without one (silently, with just a console.warn), which meant new
  // members were saved to localStorage only and vanished on the next refresh once
  // loadData() replaced local data with the server's list. Generate one here so every
  // new Add actually reaches the database.
  if(currentModule==='members' && !isEdit && !newRecord.smk){
    newRecord.smk = generateUniqueSmk(newRecord[nameField]);
  }

  if(currentModule==='members' && CUSTOM_FIELD_DEFS.length){
    const cf = {};
    CUSTOM_FIELD_DEFS.forEach(def => { if(newRecord[def.id] !== undefined) cf[def.id] = newRecord[def.id]; });
    newRecord.custom_fields = JSON.stringify(cf);
  }

  if(currentModule==='members'){
    if(validateCustomFieldFormats(newRecord)) return; // already surfaced the error and stopped here
    const missingKey = validateRequiredMemberFields(newRecord);
    if(missingKey){
      return; // validateRequiredMemberFields already surfaced the error and stopped here
    }
  }

  const isAdmin = currentUserRole==='admin';
  const isFirstFill = isEdit && !originalRecord.profile_completed;

  if(isAdmin || !isEdit || isFirstFill){
    // Admin edits, new Add records, and a user's very first profile fill save directly (no approval needed)
    if(isFirstFill) newRecord.profile_completed = true;
    if(isEdit){ list[currentIdx] = newRecord; } else { list.unshift(newRecord); if(currentModule==='members') MODULES.members.data = sortPoshakFirst(MODULES.members.data); }
    saveData();
    const confirmed = await syncRecordToBackend(currentModule, newRecord, !isEdit);
    const actorMobile = currentUserRole==='admin' ? 'admin' : (currentUserRecord ? currentUserRecord.mobile : '');
    const actorName = currentUserRole==='admin' ? 'Admin' : (currentUserRecord ? currentUserRecord.name : '');
    if(isEdit && !isFirstFill){
      const diffs = computeFieldDiffs(currentModule, originalRecord, newRecord);
      logActivity(currentUserRole || 'admin', actorMobile, actorName, 'Edited Record', diffs);
    } else if(isEdit && isFirstFill){
      logActivity(currentUserRole || 'admin', actorMobile, actorName, 'Completed Profile');
    } else {
      logActivity(currentUserRole || 'admin', actorMobile, actorName, 'Added Record');
    }
    // syncRecordToBackend already shows its own error popup if this failed — only claim
    // success (and only proceed to close/switch away from the record) once confirmed.
    if(!confirmed) return;
    if(isFirstFill){
      showToast('Thank you! Your details have been saved.');
    } else {
      showToast('Record saved successfully!');
    }
    // If this saved record is the person currently logged in (their own first-fill,
    // or an admin editing themselves), keep currentUserRecord and the sidebar photo
    // in sync immediately — no re-login needed to see the change.
    if(currentUserRecord && newRecord.smk && newRecord.smk === currentUserRecord.smk){
      currentUserRecord = newRecord;
      updateSidebarAvatar();
    }
    if(keepRecordOpenAfterSave){
      keepRecordOpenAfterSave = false;
      // The record now exists — switch into edit mode on it, in place, so further
      // per-tab saves on other tabs become proper partial updates instead of repeating
      // this whole-record creation path.
      currentMode = 'edit';
      currentIdx = isEdit ? currentIdx : list.indexOf(newRecord);
      recDraft = {};
      renderRecordHeader();
      renderRecordBody();
      return;
    }
    closeRecord();
    return;
  }

  // Existing profile being edited by a non-admin (poshak/yuva) -> goes to pending approval
  submitForApproval(currentModule, currentIdx, newRecord);
  const actorMobile2 = currentUserRecord ? currentUserRecord.mobile : '';
  const actorName2 = currentUserRecord ? currentUserRecord.name : '';
  const diffs2 = computeFieldDiffs(currentModule, originalRecord, newRecord);
  logActivity(currentUserRole, actorMobile2, actorName2, 'Edited Record (pending approval)', diffs2);
  closeRecord();
  openSubmitConfirm();
}

/* ===================== COPY / SHARE ===================== */
function copyRecord(idx){
  const r = data()[idx];
  if(!r) return;
  const text = cfg().describe(r);
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=> showToast('Details copied to clipboard!'));
  } else { showToast('Copy not supported in this browser'); }
  hideGlobalDropdown();
}
function shareRecord(idx){
  const r = data()[idx];
  if(!r) return;
  const text = cfg().describe(r);
  if(navigator.share){
    navigator.share({ title: r[cfg().nameField]||'', text }).catch(()=>{});
  } else {
    copyRecord(idx);
    showToast('Sharing not supported — copied instead');
  }
  hideGlobalDropdown();
}

/* ===================== DELETE ===================== */
let genericConfirmCallback = null;
function openConfirmModal(title, subtitle, onConfirm, opts){
  genericConfirmCallback = onConfirm;
  document.getElementById('deleteModalTitle').textContent = title;
  document.getElementById('deleteModalSubtitle').textContent = subtitle;
  const btn = document.getElementById('deleteModalConfirmBtn');
  const label = (opts && opts.confirmLabel) || 'Delete';
  const colorClass = (opts && opts.confirmClass) || 'bg-red-600 hover:bg-red-700';
  btn.textContent = label;
  btn.className = 'px-4 py-2 rounded-lg text-sm font-medium text-white ' + colorClass;
  const iconWrap = document.getElementById('deleteModalIconWrap');
  const icon = document.getElementById('deleteModalIcon');
  const iconClass = (opts && opts.iconClass) || 'fas fa-trash-alt';
  const iconWrapClass = (opts && opts.iconWrapClass) || 'bg-red-50 text-red-500';
  icon.className = iconClass;
  iconWrap.className = 'w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 ' + iconWrapClass;
  // Show/hide Leave Unsaved button
  const leaveBtn = document.getElementById('deleteModalLeaveBtn');
  if(leaveBtn){
    if(opts && opts.cancelLabel){
      leaveBtn.textContent = opts.cancelLabel;
      leaveBtn.classList.remove('hidden');
      leaveBtn.onclick = () => { clearFormDirty(); closeDeleteModal(); opts.onLeave && opts.onLeave(); };
    } else {
      leaveBtn.classList.add('hidden');
    }
  }
  document.getElementById('deleteModal').classList.remove('hidden');
  document.body.classList.add('modal-active');
  document.getElementById('deleteModalContent').style.transform='scale(1)';
  document.getElementById('deleteModalContent').style.opacity='1';
  hideGlobalDropdown();
}
function openDeleteModal(idx){
  deleteTargetIdx = idx;
  openConfirmModal('Delete this record?', 'This action cannot be undone.', () => {
    const recordToDelete = data()[deleteTargetIdx];
    data().splice(deleteTargetIdx,1);
    saveData();
    if(recordToDelete && recordToDelete.smk) deleteRecordFromBackend(currentModule, recordToDelete.smk);
    showToast('Record deleted.');
    showPanel('tableView');
    renderTable();
    deleteTargetIdx = null;
  });
}
function closeDeleteModal(){
  // Close instantly — no JS timer to lose a race against synchronous work that runs
  // right after (that's exactly what caused the "big empty dark box" bug: the timer
  // got delayed, so the backdrop stayed up long after it should have been removed).
  document.getElementById('deleteModal').classList.add('hidden');
  document.body.classList.remove('modal-active');
  genericConfirmCallback = null;
}
function confirmDelete(){
  if(genericConfirmCallback) genericConfirmCallback();
  closeDeleteModal();
}

/* ===================== TEXT PROMPT (replaces native browser prompt()) ===================== */
let textPromptCallback = null;
let textPromptCancelCallback = null;
let textPromptCloseTimer = null;
let textPromptValidate = null;
let _lastPromptOpenAt = 0;
function openTextPromptModal(title, placeholder, onConfirm, opts){
  // Guard against a double tap/click firing this twice in a row (common on touchscreens) —
  // ignore a second call that arrives within half a second of the first.
  const now = Date.now();
  if(now - _lastPromptOpenAt < 500 && !document.getElementById('textPromptModal').classList.contains('hidden')){
    return;
  }
  _lastPromptOpenAt = now;
  if(textPromptCloseTimer){ clearTimeout(textPromptCloseTimer); textPromptCloseTimer = null; }
  opts = opts || {};
  textPromptCallback = onConfirm;
  textPromptCancelCallback = typeof opts === 'function' ? null : (opts.onCancel || null);
  textPromptValidate = typeof opts === 'function' ? null : (opts.validate || null);
  const defaultValue = typeof opts === 'string' ? opts : (opts.defaultValue || '');
  document.getElementById('textPromptTitle').textContent = title || 'Enter a value';
  document.getElementById('textPromptSubtitle').textContent = placeholder || '';
  const input = document.getElementById('textPromptInput');
  input.value = defaultValue;
  input.placeholder = placeholder || '';
  document.getElementById('textPromptError').textContent = 'Please enter a value.';
  document.getElementById('textPromptError').classList.add('hidden');
  document.getElementById('textPromptModal').classList.remove('hidden');
  document.body.classList.add('modal-active');
  const contentEl = document.getElementById('textPromptModalContent');
  contentEl.style.transform = 'scale(1)';
  contentEl.style.opacity = '1';
  input.focus();
  hideGlobalDropdown();
}
function closeTextPromptModal(){
  // Close instantly — same fix as the open side. Relying on a 250ms JS timer to remove
  // the backdrop was the actual bug: if any synchronous work (saving, re-rendering the
  // table, etc.) ran right after, the timer could fire late, leaving the dark backdrop
  // visible with nothing inside it for as long as that delay lasted.
  document.getElementById('textPromptModal').classList.add('hidden');
  document.body.classList.remove('modal-active');
  const cancelCb = textPromptCancelCallback;
  textPromptCallback = null;
  textPromptCancelCallback = null;
  textPromptValidate = null;
  if(textPromptCloseTimer){ clearTimeout(textPromptCloseTimer); textPromptCloseTimer = null; }
  if(cancelCb) cancelCb();
}
function confirmTextPrompt(){
  // Guard against Enter-key + OK-button both firing this for the same confirmation
  // (or any other accidental double-trigger) — if the dialog is already closed, there's
  // nothing left to confirm.
  if(document.getElementById('textPromptModal').classList.contains('hidden')) return;
  const input = document.getElementById('textPromptInput');
  const val = input.value.trim();
  const errEl = document.getElementById('textPromptError');
  if(!val){
    errEl.textContent = 'Please enter a value.';
    errEl.classList.remove('hidden');
    input.focus();
    return;
  }
  if(textPromptValidate){
    const errMsg = textPromptValidate(val);
    if(errMsg){
      // Keep the modal open, show the red error, clear the field so the
      // user can retype just this value (e.g. re-enter confirm password).
      errEl.textContent = errMsg;
      errEl.classList.remove('hidden');
      input.value = '';
      input.focus();
      return;
    }
  }
  errEl.classList.add('hidden');
  const cb = textPromptCallback;
  textPromptCancelCallback = null; // confirmed, so don't run the cancel handler
  closeTextPromptModal();
  if(cb) cb(val);
}

/* ===================== AUTH / USERS ===================== */
let currentUserRole = null;     // 'admin' | 'yuva' (poshak leaders are 'yuva' too, tagged via currentUserRecord.role)
function isPoshakLeader(){ return currentUserRole==='poshak'; }
let currentUserRecord = null;   // the matched poshak/member record (for poshak/yuva)
let pendingOtp = null;
const ADMIN_PASSWORD = 'Hari@1608'; // actual admin password — set directly here so it's consistent across every device/browser, not dependent on localStorage
const API_BASE = 'https://haribhakto.com/api'; // your live backend folder

// ===================== API RESPONSE CACHE (only download what changed) =====================
// Every read-only API call made on load goes through cachedFetch(). It keeps the last
// response of each API (plus the server's fingerprint of it, the "ETag") in IndexedDB
// — NOT localStorage, which is already close to full with the members cache. On the
// next load it asks the server "I already have this version — has it changed?"
// (If-None-Match). If nothing changed the server answers 304 with no data at all, and
// the stored copy is used; only APIs whose data really changed are downloaded again.
// Writes (POST/PUT/DELETE) are unaffected: after any change, the server's fingerprint
// changes too, so the very next read automatically downloads the fresh data.
// If IndexedDB isn't available, or the server doesn't send fingerprints yet, this
// behaves exactly like a normal fetch — nothing breaks.
const API_CACHE_DB = 'yuvaSabhaApiCache';
let _apiCacheDbPromise = null;
function apiCacheDb(){
  if(_apiCacheDbPromise) return _apiCacheDbPromise;
  _apiCacheDbPromise = new Promise((resolve) => {
    try{
      if(!window.indexedDB){ resolve(null); return; }
      const req = indexedDB.open(API_CACHE_DB, 1);
      req.onupgradeneeded = () => { try{ req.result.createObjectStore('responses'); }catch(e){} };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
      req.onblocked = () => resolve(null);
    }catch(e){ resolve(null); }
  });
  return _apiCacheDbPromise;
}
async function apiCacheGet(key){
  const db = await apiCacheDb(); if(!db) return null;
  return new Promise(resolve => {
    try{
      const r = db.transaction('responses','readonly').objectStore('responses').get(key);
      r.onsuccess = () => resolve(r.result || null);
      r.onerror = () => resolve(null);
    }catch(e){ resolve(null); }
  });
}
async function apiCachePut(key, value){
  const db = await apiCacheDb(); if(!db) return;
  try{ db.transaction('responses','readwrite').objectStore('responses').put(value, key); }catch(e){}
}
function apiCacheKey(url){
  // same API + same query = same cache slot; the _ts cache-buster is ignored
  return String(url).replace(/([?&])_ts=\d+&?/, '$1').replace(/[?&]$/, '');
}
async function cachedFetch(url, opts){
  opts = opts || {};
  const key = apiCacheKey(url);
  const cached = await apiCacheGet(key);
  const headers = Object.assign({}, opts.headers || {});
  if(cached && cached.etag) headers['If-None-Match'] = cached.etag;
  let res;
  try{
    res = await fetch(url, Object.assign({}, opts, { cache: 'no-store', headers }));
  }catch(e){
    if(opts.signal && opts.signal.aborted) throw e;
    // network hiccup — fall back to the last good copy rather than failing outright
    if(cached) return new Response(cached.body, { status: 200, headers: { 'Content-Type':'application/json', 'X-From-Cache':'offline' } });
    throw e;
  }
  if(res.status === 304 && cached){
    return new Response(cached.body, { status: 200, headers: { 'Content-Type':'application/json', 'X-From-Cache':'304' } });
  }
  if(res.ok){
    const body = await res.text();
    const etag = res.headers.get('ETag');
    // Always keep the latest good copy — even if the server/host strips the ETag header.
    // The instant Dashboard start relies on this copy existing; the fingerprint (when
    // present) is only an extra saving that avoids re-downloading unchanged data.
    apiCachePut(key, { etag: etag || null, body, savedAt: Date.now() });
    return new Response(body, { status: res.status, headers: { 'Content-Type':'application/json' } });
  }
  return res;
}
// Instant start: fill the members list from the LAST REAL SERVER RESPONSE saved in
// IndexedDB (not the old embedded/seed copy), so the Dashboard shows real numbers
// immediately instead of "Loading live data…". The normal live check still runs right
// after and quietly updates the screen if anything changed since.
async function primeMembersFromApiCache(){
  try{
    if(!useBackend) return;
    const saved = await apiCacheGet(apiCacheKey(`${API_BASE}/members.php`));
    if(!saved || !saved.body){ console.log('Instant start: no saved server copy on this device yet — first load will wait for the server once.'); return; }
    if(membersLiveFetchedAt) return; // live data already arrived first — never overwrite newer data
    const membersData = JSON.parse(saved.body);
    if(!Array.isArray(membersData) || !membersData.length) return;
    MODULES.members.data = sortPoshakFirst(membersData.map(normalizeDbRecord));
    applyActiveStatusOverrides(MODULES.members.data);
    if(currentUserRole && currentUserRole!=='admin' && currentUserRecord && currentUserRecord.smk){
      const fresh = MODULES.members.data.find(r => String(r.smk||'').toUpperCase() === String(currentUserRecord.smk).toUpperCase());
      if(fresh) currentUserRecord = fresh;
    }
    membersLiveDataConfirmed = true; // this IS the last confirmed server data
    console.log('Instant start: showing', MODULES.members.data.length, 'members from the saved server copy (saved', Math.round((Date.now()-(saved.savedAt||Date.now()))/60000), 'min ago); checking server for changes in the background.');
  }catch(e){
    console.warn('Instant load from saved copy skipped:', e);
  }finally{
    apiCachePrimeDone = true;
    if(currentModule==='dashboard' && document.getElementById('dashboardView') && !document.getElementById('dashboardView').classList.contains('hidden')){
      renderDashboard();
    }
    if(typeof renderSidebarStats==='function' && currentUserRole) renderSidebarStats();
  }
}
// While the login page is showing, download the members list in the background (a
// cheap 304 when this device already has the latest copy), so right after Login the
// Dashboard shows real numbers instead of "Loading live data…".
function prefetchMembersForLogin(){
  if(!useBackend) return;
  cachedFetch(`${API_BASE}/members.php?_ts=${Date.now()}`, { cache: 'no-store' })
    .then(res => { if(res.ok && !membersLiveDataConfirmed) return primeMembersFromApiCache(); })
    .catch(e => console.warn('Members prefetch skipped:', e));
}
let useBackend = true; // set to false to fall back to old browser-only storage

function normMob(m){
  return (m||'').toString().replace(/\D/g,'').slice(-10);
}
function loadAuthUsers(){
  try{ return JSON.parse(localStorage.getItem('yuvaSabhaAuthUsers') || '[]'); }catch(e){ return []; }
}
function saveAuthUsers(list){
  try{ localStorage.setItem('yuvaSabhaAuthUsers', JSON.stringify(list)); }catch(e){}
}

/* ---- Extra permissions (Add/Edit/Delete grants per poshak leader per module) ---- */
const PERM_DATA_VERSION = 'v2-poshak-defaults';
let permissionsCache = null;
function loadPermissions(){
  if(permissionsCache !== null) return permissionsCache;
  try{
    const storedVersion = localStorage.getItem('yuvaSabhaPermVersion');
    if(storedVersion !== PERM_DATA_VERSION){
      localStorage.removeItem('yuvaSabhaPermissions');
      localStorage.setItem('yuvaSabhaPermVersion', PERM_DATA_VERSION);
      return {};
    }
    return JSON.parse(localStorage.getItem('yuvaSabhaPermissions') || '{}');
  }catch(e){ return {}; }
}
async function loadPermissionsFromBackend(){
  if(!useBackend) return;
  try{
    const res = await cachedFetch(`${API_BASE}/permissions.php?_ts=${Date.now()}`, { cache: 'no-store' });
    if(res.ok){
      const bySmk = await res.json();
      const byMobile = {};
      let unmatched = 0;
      Object.keys(bySmk).forEach(smk => {
        const smkNorm = String(smk||'').trim().toUpperCase();
        const leader = getPoshakLeaders().find(p => String(p.smk||'').trim().toUpperCase() === smkNorm);
        if(!leader){
          // The database has permissions saved for this SMK, but no currently-loaded
          // Poshak Leader has that SMK — this permission would silently vanish from
          // the app's point of view (even though it's correctly stored) because
          // nothing can look it up by mobile number afterward.
          console.warn('Permissions: database has entries for SMK', smk, 'but no matching Poshak Leader is currently loaded — this permission will not be visible until that\'s resolved.', bySmk[smk]);
          unmatched++;
          return; // don't store it under the raw SMK as a mobile key — that would just create a different, equally-invisible mismatch
        }
        byMobile[normMob(leader.mobile)] = bySmk[smk];
      });
      permissionsCache = byMobile;
      console.log(`Loaded permissions from database (${Object.keys(byMobile).length} leader${Object.keys(byMobile).length===1?'':'s'} matched${unmatched ? ', ' + unmatched + ' unmatched — see warning above' : ''}).`);
    }
  }catch(e){
    console.warn('Backend unreachable for permissions, using local fallback:', e);
  }
}
async function savePermissions(perm){
  const previous = permissionsCache || {};
  permissionsCache = perm;
  try{ localStorage.setItem('yuvaSabhaPermissions', JSON.stringify(perm)); }catch(e){}

  if(!useBackend) return true;
  let permSaveHadFailure = false;
  // sync only the entries that actually changed, one PUT per mobile+module — and WAIT
  // for every one of them to actually finish before this function returns, so a caller
  // that reloads permissions (or navigates away) right after saving can never race ahead
  // of the write actually landing in the database.
  const puts = [];
  let changedCount = 0;
  Object.keys(perm).forEach(mobile => {
    Object.keys(perm[mobile]).forEach(moduleKey => {
      const newVal = perm[mobile][moduleKey];
      const oldVal = (previous[mobile] && previous[mobile][moduleKey]) || {};
      if(JSON.stringify(newVal) === JSON.stringify(oldVal)) return; // unchanged, skip
      changedCount++;
      const smk = getSmkForMobile(mobile);
      console.log('Permission SAVE — mobile:', mobile, '| resolved SMK:', smk, '| module:', moduleKey, '| new value:', newVal, '| old value:', oldVal);
      if(smk === mobile){
        // getSmkForMobile() couldn't find a matching Poshak Leader and fell back to
        // returning the mobile number itself — saving under this "SMK" would silently
        // store the permission where it can never be found again on reload.
        console.warn('Permission save: could not resolve a Poshak Leader SMK for mobile', mobile, '— skipping backend sync for', moduleKey);
        permSaveHadFailure = true;
        return;
      }
      puts.push(
        fetch(`${API_BASE}/permissions.php`, {
          method: 'PUT', headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            poshak_smk: smk,
            module_key: moduleKey,
            can_access: !!newVal.access, can_add: !!newVal.add, can_edit: !!newVal.edit, can_delete: !!newVal.delete
          })
        })
        .then(async res => {
          // A non-2xx status (e.g. a 500 from a database error) still RESOLVES this
          // promise normally — it does not reject — so without this explicit check, a
          // save that actually failed on the server would look identical to one that
          // succeeded, with nothing ever showing up anywhere to say so.
          const data = await res.json().catch(() => ({}));
          if(!res.ok || data.error){
            console.warn('Permission sync FAILED for', mobile, moduleKey, '— server said:', data.error || res.status);
            permSaveHadFailure = true;
          } else {
            console.log('Permission SAVE confirmed by server for', mobile, moduleKey, '— response:', data);
          }
        })
        .catch(e => { console.warn('Permission sync failed for', mobile, moduleKey, e); permSaveHadFailure = true; })
      );
    });
  });
  if(changedCount === 0){
    console.warn('Permission save: nothing was detected as changed — no PUT was sent to the server at all. If you ticked a box, this means the click was not captured before Save was pressed.');
  }
  await Promise.all(puts);
  return !permSaveHadFailure;
}
function getSmkForMobile(mobile){
  const leader = getPoshakLeaders().find(p => normMob(p.mobile) === mobile);
  return leader ? String(leader.smk||'').trim().toUpperCase() : mobile;
}
function getUserPermissions(mobile){
  const perm = loadPermissions();
  return perm[normMob(mobile)] || {};
}
// One-time migration: "Members" access for poshak leaders used to be automatic/unconditional
// (no permission check at all). It's now gated through Users Permission like every other
// module — this runs once so every poshak leader who could already see their group keeps
// seeing it after the update, without the admin having to manually re-grant it for everyone.
// A version flag makes sure this only ever runs a single time; the admin is free to revoke
// it afterwards for anyone, same as any other module permission.
function migrateDefaultMembersPermission(){
  try{
    if(localStorage.getItem('yuvaSabhaMembersPermMigrated') === '1') return;
    const perm = loadPermissions();
    getPoshakLeaders().forEach(p => {
      const mob = normMob(p.mobile || '');
      if(!mob) return;
      if(!perm[mob]) perm[mob] = {};
      if(!perm[mob]['members']) perm[mob]['members'] = {};
      perm[mob]['members'].access = true;
      perm[mob]['members'].edit = true;
      perm[mob]['members'].delete = true;
    });
    savePermissions(perm);
    localStorage.setItem('yuvaSabhaMembersPermMigrated', '1');
  }catch(e){}
}
function resolvePermDefault(moduleKey, action, explicitValue){
  if(explicitValue !== undefined) return !!explicitValue;
  return false;
}
function hasExtraPermission(mobile, moduleKey, action){
  const p = getUserPermissions(mobile);
  const explicit = p[moduleKey] ? p[moduleKey][action] : undefined;
  return resolvePermDefault(moduleKey, action, explicit);
}
// Modules listed in the "Module Access & Permissions" grid — every module in the app,
// all with live, tickable checkboxes that get saved per selected Poshak Leader.
const ACCESS_MODULES = [
  { key:'members', label:'Members', icon:'fa-users' },
  { key:'seva_samiti', label:'Seva Samiti', icon:'fa-hands-helping' },
  { key:'ysc', label:'Yuva Sabha-C', icon:'fa-book-open' },
  { key:'reporting', label:'Reporting', icon:'fa-file-lines' },
  { key:'tree', label:'Tree', icon:'fa-sitemap' },
  { key:'notifications', label:'Notifications', icon:'fa-bell' },
  { key:'approvals', label:'Request Approvals', icon:'fa-clipboard-check' },
  { key:'activity', label:'Activity Log', icon:'fa-clock-rotate-left' },
  { key:'dashboard', label:'Dashboard', icon:'fa-gauge-high' }
];
// A Poshak Leader granted YSC rights can manage the Yuva Sabha-C content
function canEditYsc(){
  if(currentUserRole==='admin') return true;
  if(isPoshakLeader()) return hasExtraPermission(currentUserRecord.mobile,'ysc','access') && hasExtraPermission(currentUserRecord.mobile,'ysc','edit');
  return false;
}
let permGridDraft = null; // in-memory working copy so switching leaders doesn't lose unsaved ticks
let permSelectedMobile = ''; // mobile of the Poshak Leader currently shown in the grid

function populatePermEmployeeSelect(){
  const sel = document.getElementById('permEmployeeSelect');
  if(!sel) return;
  const list = getPoshakLeaders();
  const prevValue = sel.value;
  sel.innerHTML = '<option value="">Select Poshak Leader...</option>' + list.map(p => {
    const mobile = normMob(p.mobile || '');
    const nameEn = p.name || '';
    const nameGuj = p.full_name || '';
    const label = nameGuj && nameEn ? `${nameGuj} — ${nameEn}` : (nameGuj || nameEn || mobile);
    return `<option value="${esc(mobile)}">${esc(label)}</option>`;
  }).join('');
  if(prevValue && list.some(p => normMob(p.mobile||'') === prevValue)){
    sel.value = prevValue;
  } else {
    permSelectedMobile = '';
  }
}

function onPermEmployeeChange(){
  const sel = document.getElementById('permEmployeeSelect');
  permSelectedMobile = sel ? sel.value : '';
  const leader = getPoshakLeaders().find(p => normMob(p.mobile || '') === permSelectedMobile);
  document.getElementById('permEmployeeId').textContent = 'SMK: ' + (leader && leader.smk ? leader.smk : '—');
  const cred = leader ? findCredForRecord(leader) : null;
  const trueEmail = leader ? (leader.email || (cred ? cred.email : '')) : '';
  document.getElementById('permEmployeeEmail').value = trueEmail;
  document.getElementById('permEmployeeMobile').value = leader ? (leader.mobile || '') : '';
  const resetBtn = document.getElementById('permResetSignupBtn');
  if(resetBtn) resetBtn.disabled = !(leader && (leader.email || cred));
  renderPermModuleGrid();
}
/* ---- General-purpose signup reset — works for ANY member (yuva or poshak leader),
   used from the Members table's 3-dot menu. ---- */
function resetMemberSignup(idx){
  if(currentUserRole !== 'admin') return;
  const rec = MODULES.members.data[idx];
  if(!rec) return;
  hideGlobalDropdown();
  const cred = findCredForRecord(rec);
  const trueEmail = rec.email || (cred ? cred.email : '');
  if(!trueEmail){ showToast('આ સભ્યએ હજી સાઈન અપ કર્યું નથી.'); return; }
  openConfirmModal(
    `Reset signup for "${rec.name}"?`,
    `Their current login (${trueEmail}) will be cleared. They will need to sign up again with a new email & password.`,
    () => {
      try{
        const creds = loadSignupCredentials().filter(c => String(c.smk||'').trim().toUpperCase() !== String(rec.smk||'').trim().toUpperCase());
        saveSignupCredentials(creds);
      }catch(e){}
      rec.email = '';
      saveData('members');
      syncRecordToBackend('members', rec, false);
      showToast(`Signup reset for ${rec.name}. They can sign up again.`);
      logActivity('admin', 'admin', 'Admin', `Reset signup for ${rec.name} (was: ${trueEmail})`);
      renderTable();
    },
    { confirmLabel: 'Reset Signup', confirmClass: 'bg-crm-primary hover:bg-crm-primaryHover' }
  );
}
function resetPoshakSignup(){
  const leader = getPoshakLeaders().find(p => normMob(p.mobile || '') === permSelectedMobile);
  const cred = leader ? findCredForRecord(leader) : null;
  const trueEmail = leader ? (leader.email || (cred ? cred.email : '')) : '';
  if(!leader || !trueEmail){ showToast('This leader has not signed up yet.'); return; }
  openConfirmModal(
    `Reset signup for "${leader.name}"?`,
    `Their current login (${trueEmail}) will be cleared. They will need to sign up again with a new email & password.`,
    () => {
      // 1. Remove their signup credentials (by SMK, the same match key used everywhere
      //    else) so a fresh signup isn't blocked — this is the true source of truth,
      //    since rec.email can go stale after a data refresh even when a real signup exists.
      try{
        const creds = loadSignupCredentials().filter(c => String(c.smk||'').trim().toUpperCase() !== String(leader.smk||'').trim().toUpperCase());
        saveSignupCredentials(creds);
      }catch(e){}

      // 2. Clear the email on their member record too (this is what doSignup() checks against)
      leader.email = '';
      saveData('members');
      syncRecordToBackend('members', leader, false); // pushes the cleared email via the existing update endpoint

      onPermEmployeeChange(); // refresh this panel

      showToast(`Signup reset for ${leader.name}. They can sign up again.`);
      logActivity('admin', 'admin', 'Admin', `Reset signup for ${leader.name} (was: ${trueEmail})`);
    }
  );
}

function captureAllRowsFromDOM(){
  if(!permSelectedMobile) return;
  document.querySelectorAll('#permModuleGrid tr[data-module]').forEach(tr => {
    const moduleKey = tr.dataset.module;
    if(!permGridDraft[permSelectedMobile]) permGridDraft[permSelectedMobile] = {};
    if(!permGridDraft[permSelectedMobile][moduleKey]) permGridDraft[permSelectedMobile][moduleKey] = {};
    tr.querySelectorAll('input[type="checkbox"]').forEach(chk => {
      permGridDraft[permSelectedMobile][moduleKey][chk.dataset.action] = chk.checked;
    });
  });
}

function renderPermModuleGrid(){
  const el = document.getElementById('permModuleGrid');
  if(!el) return;
  if(!getPoshakLeaders().length){
    el.innerHTML = `<tr><td colspan="5" class="text-center py-10 text-crm-textMuted">No poshak leaders found.</td></tr>`;
    return;
  }
  if(!permSelectedMobile){
    el.innerHTML = `<tr><td colspan="5" class="text-center py-10 text-crm-textMuted">Select a Poshak Leader above to view and set their module access.</td></tr>`;
    return;
  }
  const cur = (permGridDraft[permSelectedMobile]) || {};
  el.innerHTML = ACCESS_MODULES.map(m => {
    const rowPerm = cur[m.key] || {};
    const chk = (action) => {
      const checked = resolvePermDefault(m.key, action, rowPerm[action]);
      return `<input type="checkbox" class="perm-checkbox" data-action="${action}" onchange="captureAllRowsFromDOM()" ${checked ? 'checked' : ''}>`;
    };
    return `<tr data-module="${m.key}">
      <td><i class="fas ${m.icon} w-4 mr-2" style="color:#94a3b8"></i>${esc(m.label)}</td>
      <td>${chk('access')}</td>
      <td>${chk('add')}</td>
      <td>${chk('edit')}</td>
      <td>${chk('delete')}</td>
    </tr>`;
  }).join('');
}

function renderAllPoshakAccessGrid(){
  if(!permGridDraft) permGridDraft = JSON.parse(JSON.stringify(loadPermissions()));
  populatePermEmployeeSelect();
  renderPermModuleGrid();
}

async function saveAccess(){
  if(!permSelectedMobile){ showToast('Please select a Poshak Leader first.'); return; }
  captureAllRowsFromDOM();
  const btn = document.getElementById('topSaveAccessBtn');
  const btnHtml = btn ? btn.innerHTML : '';
  if(btn){ btn.disabled = true; btn.innerHTML = `<i class="fas fa-spinner fa-spin text-xs"></i> Saving…`; }
  const ok = await savePermissions(permGridDraft);
  if(btn){ btn.disabled = false; btn.innerHTML = btnHtml; }
  const leader = getPoshakLeaders().find(p => normMob(p.mobile || '') === permSelectedMobile);
  const name = leader ? (leader.full_name || leader.name) : '';
  if(ok){
    showToast(`Access updated for ${name || 'selected Poshak Leader'}.`);
  } else {
    showToast(`⚠ Saved locally, but the database update failed — check the browser console (F12) for details, or it may not stick after a refresh.`);
  }
}

/* ---- Activity Log ---- */
let activityLogCache = null;
function loadActivityLog(){
  if(activityLogCache !== null) return activityLogCache;
  try{ return JSON.parse(localStorage.getItem('yuvaSabhaActivityLog') || '[]'); }catch(e){ return []; }
}
async function loadActivityLogFromBackend(){
  if(!useBackend) return;
  try{
    const res = await cachedFetch(`${API_BASE}/activity_log.php?_ts=${Date.now()}`, { cache: 'no-store' });
    if(res.ok){
      const raw = await res.json();
      activityLogCache = raw.map(e => ({
        ...e,
        name: e.name !== undefined ? e.name : e.actor_name,
        mobile: e.mobile !== undefined ? e.mobile : normMob(e.actor_email || '')
      }));
      console.log('Loaded activity log from database:', activityLogCache.length, 'entries.');
    }
  }catch(e){
    console.warn('Backend unreachable for activity log, using local fallback:', e);
  }
}
function confirmClearActivityLog(){
  openConfirmModal('Clear entire Activity Log?', 'This will permanently delete all recorded activity. This cannot be undone.', () => {
    saveActivityLog([]);
    if(useBackend){
      fetch(`${API_BASE}/activity_log.php`, { method: 'DELETE' }).catch(e => console.warn('Backend clear failed:', e));
    }
    showToast('Activity Log cleared.');
    renderActivityLog();
  });
}
function saveActivityLog(list){
  activityLogCache = list.slice(-500);
  try{
    // keep only the most recent 500 entries to avoid unbounded localStorage growth
    localStorage.setItem('yuvaSabhaActivityLog', JSON.stringify(activityLogCache));
  }catch(e){}
}
function logActivity(role, mobile, name, action, changes){
  const entry = {
    id: Date.now() + '-' + Math.random().toString(36).slice(2),
    timestamp: new Date().toISOString(),
    role: role,
    mobile: normMob(mobile || ''),
    name: name || '',
    action: action,
    changes: changes || null
  };
  const log = loadActivityLog();
  log.push(entry);
  saveActivityLog(log);

  if(useBackend){
    fetch(`${API_BASE}/activity_log.php`, {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify(entry)
    }).catch(e => console.warn('Activity log sync failed:', e));
  }
}
function roleLabel(role){
  if(role==='admin') return 'Admin';
  if(role==='poshak') return 'Poshak Leader';
  if(role==='yuva') return 'Member';
  return role;
}
function computePersonStats(logEntries){
  // returns { mobile: {name, role, logins, logouts, edits} }
  const stats = {};
  logEntries.forEach(e => {
    if(!stats[e.mobile]) stats[e.mobile] = { name: e.name, role: e.role, logins:0, logouts:0, edits:0 };
    if(e.action==='Logged in') stats[e.mobile].logins++;
    else if(e.action==='Logged out') stats[e.mobile].logouts++;
    else if(e.action.indexOf('Edited')===0 || e.action==='Completed Profile' || e.action==='Added Record') stats[e.mobile].edits++;
    if(e.name) stats[e.mobile].name = e.name; // keep freshest name
  });
  return stats;
}
function statCardsHtml(logins, logouts, edits){
  return `<div class="grid grid-cols-3 gap-4">
    <div class="bg-white rounded-2xl shadow-crm border border-crm-border p-4 text-center">
      <div class="text-2xl font-semibold text-crm-textDark">${logins}</div>
      <div class="text-xs text-crm-textMuted">Logins</div>
    </div>
    <div class="bg-white rounded-2xl shadow-crm border border-crm-border p-4 text-center">
      <div class="text-2xl font-semibold text-crm-textDark">${logouts}</div>
      <div class="text-xs text-crm-textMuted">Logouts</div>
    </div>
    <div class="bg-white rounded-2xl shadow-crm border border-crm-border p-4 text-center">
      <div class="text-2xl font-semibold text-crm-textDark">${edits}</div>
      <div class="text-xs text-crm-textMuted">Edits</div>
    </div>
  </div>`;
}
/* ---- Notifications ---- */
let notifSpecificSelected = new Set();
let notificationsCache = null;
function loadNotifications(){
  if(notificationsCache !== null) return notificationsCache;
  try{ return JSON.parse(localStorage.getItem('yuvaSabhaNotifications') || '[]'); }catch(e){ return []; }
}
async function loadNotificationsFromBackend(){
  if(!useBackend) return;
  try{
    const res = await cachedFetch(`${API_BASE}/notifications.php?_ts=${Date.now()}`, { cache: 'no-store' });
    if(res.ok){
      notificationsCache = await res.json();
      console.log('Loaded notifications from database:', notificationsCache.length, 'entries.');
    }
  }catch(e){
    console.warn('Backend unreachable for notifications, using local fallback:', e);
  }
}
// ---- Live check for scheduled / newly sent notifications ----
// The list used to be downloaded only on login or when the Notifications screen was
// opened, so a notification scheduled for e.g. 3:04 PM never "arrived" for anyone who
// was already logged in — nothing re-checked the time. Now every logged-in person
// re-checks once a minute (a cheap 304 from the server when nothing changed): the bell
// badge updates and a toast shows the moment a notification for them becomes due.
let notifAnnounced = null; // { user, ids } — ids already announced to this user this session
let sessionStartedAt = Date.now(); // set again in enterApp()
function dueNotifIdsForMe(asOf){
  const ids = new Set();
  if(!currentUserRole || currentUserRole==='admin') return ids;
  const mobile = currentUserRecord ? currentUserRecord.mobile : '';
  const at = asOf ? new Date(asOf) : new Date();
  loadNotifications().forEach(n => {
    const due = !n.scheduledFor || new Date(n.scheduledFor) <= at;
    if(due && notificationAppliesTo(n, currentUserRole, mobile)) ids.add(n.id);
  });
  return ids;
}
async function checkForDueNotifications(){
  if(!currentUserRole || !useBackend) return;
  try{
    const user = currentUserRole + ':' + (currentUserRecord ? currentUserRecord.smk : '');
    if(!notifAnnounced || notifAnnounced.user !== user){
      // first check for this login: whatever was already due AT LOGIN was shown on the
      // badge then — don't re-announce it. Anything that became due since is announced.
      notifAnnounced = { user, ids: dueNotifIdsForMe(sessionStartedAt) };
      getSeenNotifIds().forEach(id => notifAnnounced.ids.add(id));
    }
    await loadNotificationsFromBackend();
    const seen = getSeenNotifIds();
    const fresh = loadNotifications().filter(n => dueNotifIdsForMe().has(n.id) && !notifAnnounced.ids.has(n.id) && !seen.has(n.id));
    fresh.forEach(n => notifAnnounced.ids.add(n.id));
    if(fresh.length){
      showToast('🔔 ' + (fresh.length===1 ? fresh[0].message : fresh.length + ' new notifications'), 8000);
    }
    updateNotifBadge();
    const view = document.getElementById('notificationsView');
    if(currentModule==='notifications' && view && !view.classList.contains('hidden')) renderNotifications();
  }catch(e){ console.warn('Notification check skipped:', e); }
}
setInterval(checkForDueNotifications, 60000);

function saveNotifications(list){
  notificationsCache = list.slice(-200);
  try{ localStorage.setItem('yuvaSabhaNotifications', JSON.stringify(notificationsCache)); }catch(e){}
}
function renderNotifPreview(){
  const msg = document.getElementById('notifMessage').value.trim();
  document.getElementById('notifPreviewText').textContent = msg || 'Your message will appear here as you type…';
}
function getNotifRecipientOptions(){
  const initials = s => (s||'').trim().split(/\s+/).map(w=>w[0]).join('').toUpperCase().slice(0,2);
  const poshakOpts = getPoshakLeaders().map(p => {
    const label = p.full_name||p.name;
    const search = [p.full_name, p.name].filter(Boolean).join(' ');
    return { mobile: normMob(p.mobile||''), label, search, init: initials(label) };
  }).filter(o=>o.mobile);
  const yuvaOpts = MODULES.members.data.filter(m => m.role === 'યુવા સભ્ય').map(m => ({ mobile: normMob(m.mobile||''), label: m.name, search: m.name, init: initials(m.name) })).filter(o=>o.mobile);
  return { poshakOpts, yuvaOpts };
}
function renderNotifRecipientTable(){
  const searchEl = document.getElementById('notifSearchInput');
  if(searchEl) searchEl.value = '';
  document.getElementById('notifNoResults').classList.add('hidden');
  const { poshakOpts, yuvaOpts } = getNotifRecipientOptions();
  const mastersEl = document.getElementById('notifMastersRow');
  const listEl = document.getElementById('notifSpecificList');

  const masterPill = (groupClass, label) => `
    <label class="notif-master-pill">
      <input type="checkbox" class="w-[16px] h-[16px] accent-[var(--maroon)] cursor-pointer" data-master="${groupClass}"
        onchange="toggleNotifMaster('${groupClass}', this.checked)">
      ${esc(label)}
    </label>`;
  mastersEl.innerHTML = masterPill('poshak', 'All Poshak Leaders') + masterPill('yuva', 'All Yuva Sabhya');

  const item = (mobile, label, init, groupClass, search) => `
    <label class="notif-recipient-item" data-label="${esc((search||label||'').toLowerCase())}">
      <input type="checkbox" class="w-[15px] h-[15px] accent-[var(--maroon)] cursor-pointer" data-mobile="${mobile}" data-group="${groupClass}"
        onchange="toggleNotifSpecific('${mobile}', this.checked)" ${notifSpecificSelected.has(mobile) ? 'checked' : ''}>
      <span class="notif-recipient-avatar">${esc(init)}</span>
      <span class="truncate">${esc(label)}</span>
    </label>`;
  listEl.innerHTML = poshakOpts.map(o => item(o.mobile, o.label, o.init, 'poshak', o.search)).join('')
    + yuvaOpts.map(o => item(o.mobile, o.label, o.init, 'yuva', o.search)).join('');
  syncNotifMasterCheckboxes();
}
function filterNotifRecipients(query){
  const q = (query||'').trim().toLowerCase();
  const items = document.querySelectorAll('#notifSpecificList .notif-recipient-item');
  let visibleCount = 0;
  items.forEach(el => {
    const match = !q || el.dataset.label.includes(q);
    el.classList.toggle('hidden', !match);
    if(match) visibleCount++;
  });
  document.getElementById('notifNoResults').classList.toggle('hidden', visibleCount > 0);
}
function toggleNotifSpecific(mobile, checked){
  if(checked) notifSpecificSelected.add(mobile); else notifSpecificSelected.delete(mobile);
  syncNotifMasterCheckboxes();
}
function toggleNotifMaster(groupClass, checked){
  document.querySelectorAll(`#notifSpecificList input[data-group="${groupClass}"]`).forEach(chk => {
    chk.checked = checked;
    if(checked) notifSpecificSelected.add(chk.dataset.mobile); else notifSpecificSelected.delete(chk.dataset.mobile);
  });
}
function syncNotifMasterCheckboxes(){
  ['poshak','yuva'].forEach(groupClass => {
    const children = document.querySelectorAll(`#notifSpecificList input[data-group="${groupClass}"]`);
    const master = document.querySelector(`#notifMastersRow input[data-master="${groupClass}"]`);
    if(master && children.length) master.checked = Array.from(children).every(c => c.checked);
  });
}
let notifSending = false;
async function sendNotification(){
  if(notifSending) return; // double-click guard while the previous one is still saving
  const message = document.getElementById('notifMessage').value.trim();
  if(!message){ showToast('Please type a message first.'); return; }
  if(notifSpecificSelected.size===0){ showToast('Select at least one recipient.'); return; }

  const dateVal = document.getElementById('notifDate').value;
  const timeVal = document.getElementById('notifTime').value;
  const scheduledFor = (dateVal && timeVal) ? new Date(dateVal + 'T' + timeVal).toISOString() : new Date().toISOString();

  const newEntry = {
    id: Date.now() + '-' + Math.random().toString(36).slice(2),
    timestamp: new Date().toISOString(),
    scheduledFor: scheduledFor,
    targetType: 'specific',
    targetMobiles: Array.from(notifSpecificSelected),
    message: message
  };
  const recipientCount = notifSpecificSelected.size;

  // Save to the DATABASE FIRST and only report success once the server confirmed it.
  // Before, the local copy was saved and "Notification scheduled." shown immediately,
  // even when the server request failed — the notification then silently existed on
  // this one browser only and never reached anyone.
  let push = null;
  if(useBackend){
    notifSending = true;
    const sendBtn = document.querySelector('button[onclick="sendNotification()"]');
    if(sendBtn) sendBtn.disabled = true;
    try{
      const res = await fetch(`${API_BASE}/notifications.php`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newEntry)
      });
      const data = await res.json().catch(() => ({}));
      if(!res.ok || data.error){ throw new Error(data.error || ('server responded ' + res.status)); }
      // The database's id is the one every future GET returns for this notification —
      // use it locally too so "seen" tracking keeps matching after a refresh.
      if(data.id !== undefined) newEntry.id = data.id;
      push = data.push || null;
    }catch(e){
      console.warn('Notification save failed:', e);
      showSaveErrorPopup('Could not save this notification to the server (' + e.message + ').\n\nNothing was sent. Please check your internet connection and press Send again — your message and selected recipients are still filled in.');
      showToast('⚠️ Notification NOT sent — server could not be reached.', 8000);
      return;
    }finally{
      notifSending = false;
      if(sendBtn) sendBtn.disabled = false;
    }
    // Re-read the list from the database so the new entry shows exactly as stored
    // (with its "Scheduled for …" note) instead of a local copy that a background
    // refresh could overwrite a moment later.
    await loadNotificationsFromBackend();
    if(!loadNotifications().some(n => String(n.id) === String(newEntry.id))){
      const list = loadNotifications(); list.push(newEntry); saveNotifications(list);
    }
  } else {
    const list = loadNotifications();
    list.push(newEntry);
    saveNotifications(list);
  }

  logActivity('admin', 'admin', 'Admin', `Sent notification to ${recipientCount} recipient(s)`);
  document.getElementById('notifMessage').value = '';
  renderNotifPreview();
  initNotifDateTime();
  notifSpecificSelected = new Set();
  renderNotifRecipientTable();
  const isScheduled = new Date(scheduledFor) > new Date();
  let msg = isScheduled ? ('Notification scheduled for ' + formatDateTime(scheduledFor) + '.') : 'Notification sent.';
  if(push){
    msg += push.devices > 0
      ? ` Phone push ${isScheduled ? 'will go' : 'sent'} to ${push.devices} device(s).`
      : ' (No recipient has enabled phone push yet — they will see it inside the app.)';
  }
  showToast(msg, 8000);
  renderNotifications();
}
function initNotifDateTime(){
  const now = new Date();
  const pad = n => String(n).padStart(2,'0');
  const iso = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
  document.getElementById('notifDate').value = iso;
  document.getElementById('notifDateDisplay').value = isoToDDMMYYYY(iso);
  document.getElementById('notifTime').value = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
}
function notificationAppliesTo(n, role, mobile){
  if(n.targetType==='all_yuva') return role==='yuva';
  if(n.targetType==='all_poshak') return role==='poshak';
  if(n.targetType==='specific') return n.targetMobiles.includes(normMob(mobile||''));
  return false;
}
function isNotifDue(n){
  if(!n.scheduledFor) return true;
  return new Date(n.scheduledFor) <= new Date();
}
function getSeenNotifIds(){
  const mobile = currentUserRecord ? normMob(currentUserRecord.mobile||'') : '';
  if(!mobile) return new Set();
  try{
    const raw = localStorage.getItem('yuvaSabhaNotifSeen_' + mobile);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  }catch(e){ return new Set(); }
}
function markNotifsSeen(ids){
  const mobile = currentUserRecord ? normMob(currentUserRecord.mobile||'') : '';
  if(!mobile || !ids.length) return;
  const seen = getSeenNotifIds();
  ids.forEach(id => seen.add(id));
  try{ localStorage.setItem('yuvaSabhaNotifSeen_' + mobile, JSON.stringify([...seen])); }catch(e){}
}
function updateNotifBadge(){
  const badge = document.getElementById('notifBadge');
  if(!badge || !currentUserRole || currentUserRole==='admin'){ if(badge) badge.classList.add('hidden'); return; }
  const mobile = currentUserRecord ? currentUserRecord.mobile : '';
  const list = loadNotifications();
  const seen = getSeenNotifIds();
  const mine = list.filter(n => isNotifDue(n) && notificationAppliesTo(n, currentUserRole, mobile) && !seen.has(n.id));
  badge.textContent = mine.length;
  badge.classList.toggle('hidden', mine.length===0);
}
function renderNotifications(){
  const listEl = document.getElementById('notifList');
  const titleEl = document.getElementById('notifListTitle');
  const all = loadNotifications().slice().reverse();

  let mine;
  if(currentUserRole==='admin'){
    titleEl.textContent = 'Sent Notifications';
    mine = all;
  } else {
    titleEl.textContent = 'Your Notifications';
    const mobile = currentUserRecord ? currentUserRecord.mobile : '';
    mine = all.filter(n => isNotifDue(n) && notificationAppliesTo(n, currentUserRole, mobile));
    // Visiting this screen means everything currently shown has now been seen — the
    // badge should reflect only whatever arrives AFTER this, not the same stale count
    // forever.
    markNotifsSeen(mine.map(n => n.id));
    updateNotifBadge();
  }

  if(!mine.length){
    listEl.innerHTML = `<div class="text-center py-10 text-crm-textMuted text-sm">No notifications yet.</div>`;
    return;
  }
  const targetLabel = t => t==='all_yuva' ? 'All Yuva Sabhya' : t==='all_poshak' ? 'All Poshak Leaders' : 'Specific recipients';
  listEl.innerHTML = mine.map(n => {
    const scheduledNote = (currentUserRole==='admin' && !isNotifDue(n)) ? ` · <span class="text-amber-600 font-medium">Scheduled for ${esc(formatDateTime(n.scheduledFor))}</span>` : '';
    return `
    <div class="px-5 py-3 flex gap-3">
      <i class="fas fa-bell text-crm-primary/60 mt-0.5"></i>
      <div class="flex-1">
        <p class="text-sm text-crm-textDark">${esc(n.message)}</p>
        <p class="text-[11px] text-crm-textMuted mt-1">${esc(formatDateTime(n.timestamp))}${currentUserRole==='admin' ? ' · ' + esc(targetLabel(n.targetType)) : ''}${scheduledNote}</p>
      </div>
    </div>`;
  }).join('');
}

function renderActivityLog(){
  const tbody = document.getElementById('activityTableBody');
  const statsEl = document.getElementById('activityStats');
  const fullLog = loadActivityLog();
  let log = fullLog.slice().reverse(); // newest first

  if(currentUserRole==='poshak'){
    const myMobile = normMob(currentUserRecord.mobile || '');
    const myGroupName = currentUserRecord.group || currentUserRecord.poshak_leader || '';
    const groupMobiles = new Set(
      MODULES.members.data.filter(m => m.group === myGroupName).map(m => normMob(m.mobile || ''))
    );
    log = log.filter(e => e.mobile === myMobile || (e.role==='yuva' && groupMobiles.has(e.mobile)));
    const allStats = computePersonStats(log);
    const mine = allStats[myMobile] || {logins:0,logouts:0,edits:0};
    let html = `<div><p class="text-xs font-semibold text-crm-textMuted uppercase mb-2">Your Activity</p>${statCardsHtml(mine.logins, mine.logouts, mine.edits)}</div>`;
    const memberMobiles = Object.keys(allStats).filter(m => m !== myMobile);
    if(memberMobiles.length){
      html += `<p class="text-xs font-semibold text-crm-textMuted uppercase mt-5 mb-2">Your Members' Activity</p>
        <div class="bg-white rounded-2xl shadow-crm border border-crm-border overflow-hidden">
          <table class="w-full crm-table"><thead><tr><th>Name</th><th class="text-center">Logins</th><th class="text-center">Logouts</th><th class="text-center">Edits</th></tr></thead>
          <tbody>${memberMobiles.map(m => `<tr><td>${esc(allStats[m].name||m)}</td><td class="text-center">${allStats[m].logins}</td><td class="text-center">${allStats[m].logouts}</td><td class="text-center">${allStats[m].edits}</td></tr>`).join('')}</tbody></table>
        </div>`;
    }
    statsEl.innerHTML = html;
  } else if(currentUserRole==='yuva'){
    const myMobile = normMob(currentUserRecord.mobile || '');
    log = log.filter(e => e.mobile === myMobile);
    const myStats = computePersonStats(log);
    const s = myStats[myMobile] || {logins:0,logouts:0,edits:0};
    statsEl.innerHTML = statCardsHtml(s.logins, s.logouts, s.edits);
  } else {
    // Admin: personal breakdown for every user in the system
    const allStats = computePersonStats(fullLog);
    const mobiles = Object.keys(allStats).sort((a,b) => (allStats[a].name||'').localeCompare(allStats[b].name||''));
    statsEl.innerHTML = `<div class="bg-white rounded-2xl shadow-crm border border-crm-border overflow-hidden">
      <div class="px-5 pt-4 pb-1"><h4 class="text-sm font-semibold text-crm-textDark">Per-User Activity Summary</h4></div>
      <div class="table-responsive-wrapper overflow-x-auto">
        <table class="w-full crm-table"><thead><tr><th>Name</th><th>Role</th><th class="text-center">Logins</th><th class="text-center">Logouts</th><th class="text-center">Edits</th></tr></thead>
        <tbody>${mobiles.map(m => `<tr><td>${esc(allStats[m].name||m)}</td><td><span class="badge bg-red-50 text-crm-primary">${esc(roleLabel(allStats[m].role))}</span></td><td class="text-center">${allStats[m].logins}</td><td class="text-center">${allStats[m].logouts}</td><td class="text-center">${allStats[m].edits}</td></tr>`).join('')}</tbody></table>
      </div>
    </div>`;
  }

  populateActivityNameFilter(log);

  if(!log.length){
    tbody.innerHTML = `<tr><td colspan="5" class="text-center py-10 text-crm-textMuted">No activity recorded yet.</td></tr>`;
    return;
  }

  const dateFilter = document.getElementById('activityFilterDate').value;
  const selectedNames = Array.from(activityFilterSelectedNames);

  let filtered = log;
  if(dateFilter){
    filtered = filtered.filter(e => new Date(e.timestamp).toISOString().slice(0,10) === dateFilter);
  }
  if(selectedNames.length){
    filtered = filtered.filter(e => selectedNames.includes(e.name));
  }

  if(!filtered.length){
    tbody.innerHTML = `<tr><td colspan="5" class="text-center py-10 text-crm-textMuted">No activity matches your filters.</td></tr>`;
    window._activityLogRows = [];
    return;
  }
  window._activityLogRows = filtered; // stash for click-through detail lookup
  tbody.innerHTML = filtered.map((e,i) => {
    const clickable = e.changes && e.changes.length;
    return `<tr class="fade-in ${clickable ? 'cursor-pointer hover:bg-slate-50' : ''}" ${clickable ? `onclick="openActivityDetail(${i})"` : ''}>
      <td>${i+1}</td>
      <td>${esc(formatDateTime(e.timestamp))}</td>
      <td>${esc(e.name || e.mobile || '—')}</td>
      <td><span class="badge bg-red-50 text-crm-primary">${esc(roleLabel(e.role))}</span></td>
      <td>${esc(e.action)}${clickable ? ' <i class="fas fa-circle-info text-crm-primary/50 text-[11px] ml-1"></i>' : ''}</td>
    </tr>`;
  }).join('');
}
let activityFilterSelectedNames = new Set();
function populateActivityNameFilter(entries){
  const listEl = document.getElementById('activityFilterNamesList');
  const searchEl = document.getElementById('activityNameFilterSearch');
  if(searchEl) searchEl.value = '';
  const names = Array.from(new Set(entries.map(e=>e.name).filter(Boolean))).sort();
  listEl.innerHTML = names.map(n => `
    <label class="flex items-center gap-2 text-xs py-0.5 cursor-pointer" data-name="${esc(n.toLowerCase())}">
      <input type="checkbox" onchange="toggleActivityNameFilter('${esc(n).replace(/'/g,"\\'")}', this.checked)" ${activityFilterSelectedNames.has(n)?'checked':''}>
      ${esc(n)}
    </label>`).join('');
}
function filterActivityNameOptions(query){
  const q = (query||'').trim().toLowerCase();
  document.querySelectorAll('#activityFilterNamesList label').forEach(el => {
    el.classList.toggle('hidden', !(!q || el.dataset.name.includes(q)));
  });
}
function toggleActivityNameFilter(name, checked){
  if(checked) activityFilterSelectedNames.add(name); else activityFilterSelectedNames.delete(name);
  renderActivityLog();
}
function clearActivityNameFilter(){
  activityFilterSelectedNames = new Set();
  renderActivityLog();
}
function toggleActivityFilterPopover(which, event){
  event.stopPropagation();
  const dateP = document.getElementById('activityDateFilterPopover');
  const nameP = document.getElementById('activityNameFilterPopover');
  const target = which==='date' ? dateP : nameP;
  const other = which==='date' ? nameP : dateP;
  other.classList.add('hidden');
  target.classList.toggle('hidden');
}
document.addEventListener('click', function(e){
  const dateP = document.getElementById('activityDateFilterPopover');
  const nameP = document.getElementById('activityNameFilterPopover');
  if(dateP && !dateP.contains(e.target)) dateP.classList.add('hidden');
  if(nameP && !nameP.contains(e.target)) nameP.classList.add('hidden');
});
function openSubmitConfirm(){
  document.getElementById('submitConfirmModal').classList.remove('hidden');
  document.body.classList.add('modal-active');
  document.getElementById('submitConfirmModalContent').style.transform='scale(1)';
  document.getElementById('submitConfirmModalContent').style.opacity='1';
}
function closeSubmitConfirm(){
  document.getElementById('submitConfirmModal').classList.add('hidden');
  document.body.classList.remove('modal-active');
}
function openFieldDiffModal(title, subtitle, diffs){
  document.getElementById('activityDetailTitle').textContent = title;
  document.getElementById('activityDetailSubtitle').textContent = subtitle;
  document.getElementById('activityDetailBody').innerHTML = (diffs && diffs.length) ? diffs.map(c => `
    <div class="border-b border-slate-100 py-2.5">
      <div class="text-xs font-semibold text-crm-primary mb-1">${esc(c.field)}</div>
      <div class="text-sm text-crm-textMuted">Before: <span class="text-crm-textDark">${esc(c.from)}</span></div>
      <div class="text-sm text-crm-textMuted">After: <span class="text-crm-textDark font-medium">${esc(c.to)}</span></div>
    </div>`).join('') : `<p class="text-sm text-crm-textMuted py-4 text-center">No field changes recorded.</p>`;
  document.getElementById('activityDetailModal').classList.remove('hidden');
  document.body.classList.add('modal-active');
  document.getElementById('activityDetailModalContent').style.transform='scale(1)';
  document.getElementById('activityDetailModalContent').style.opacity='1';
}
function openActivityDetail(rowIdx){
  const e = window._activityLogRows[rowIdx];
  if(!e || !e.changes) return;
  openFieldDiffModal(`${e.name || e.mobile} — ${e.action}`, formatDateTime(e.timestamp), e.changes);
}
function closeActivityDetail(){
  document.getElementById('activityDetailModal').classList.add('hidden');
  document.body.classList.remove('modal-active');
}

/* ---- Pending changes (edits by non-admin users awaiting approval) ---- */
/* ---- Seva Samiti ---- */
// Fixes volunteer names that were already saved in Seva Samiti data before the
// dropdown was connected to Members — e.g. a volunteer saved as "ધીરુભાઈ માંગુકિયા"
// (missing the first name) back when the old static list had that error. Matches by
// mobile number (digits only, so spacing differences don't matter) against Members,
// and replaces the saved name with that member's current Full Name (Gujarati). Only
// touches entries where a confident mobile match is found — never invents or guesses.
function reconcileSevaVolunteerNames(committees){
  if(!Array.isArray(committees) || !committees.length) return committees;
  const members = (MODULES.members && MODULES.members.data) || [];
  if(!members.length) return committees; // Members not loaded yet — nothing to reconcile against
  const digitsOnly = s => String(s||'').replace(/\D/g, '');
  const byMobile = {};
  members.forEach(m => {
    const d = digitsOnly(m.mobile);
    if(d && m.full_name) byMobile[d] = m.full_name;
  });
  const fixList = list => (list||[]).forEach(v => {
    const d = digitsOnly(v.mobile);
    const correct = d && byMobile[d];
    if(correct && v.name !== correct) v.name = correct;
  });
  committees.forEach(c => { fixList(c.main); fixList(c.assist); });
  return committees;
}
function loadSevaSamitiData(){
  if(sevaSamitiData) return sevaSamitiData;
  try{
    const stored = localStorage.getItem('yuvaSabhaSevaSamiti_' + currentSevaFormName);
    sevaSamitiData = stored ? JSON.parse(stored) : (currentSevaFormName==='Seva Form 1' ? JSON.parse(JSON.stringify(RAW_SEVA_SAMITI)) : []);
  }catch(e){
    sevaSamitiData = currentSevaFormName==='Seva Form 1' ? JSON.parse(JSON.stringify(RAW_SEVA_SAMITI)) : [];
  }
  reconcileSevaVolunteerNames(sevaSamitiData);
  return sevaSamitiData;
}
let currentSevaFormName = null;
async function loadSevaSamitiFromBackend(){
  if(!useBackend || !currentSevaFormName) return;
  try{
    const res = await cachedFetch(`${API_BASE}/seva_samiti.php?form=${encodeURIComponent(currentSevaFormName)}&_ts=${Date.now()}`, { cache: 'no-store' });
    if(res.ok){
      const data = await res.json();
      if(Array.isArray(data) && data.length){
        sevaSamitiData = data;
        reconcileSevaVolunteerNames(sevaSamitiData);
        console.log('Loaded Seva Samiti form from database:', currentSevaFormName, '—', data.length, 'committees.');
      }
    }
  }catch(e){
    console.warn('Backend unreachable for Seva Samiti, using local fallback:', e);
  }
}

async function loadSevaFormsListFromBackend(){
  if(!useBackend) return;
  try{
    const res = await cachedFetch(`${API_BASE}/seva_samiti.php?_ts=${Date.now()}`, { cache: 'no-store' });
    if(res.ok){
      sevaFormsListCache = await res.json();
    }
  }catch(e){
    console.warn('Backend unreachable for Seva Samiti forms list:', e);
  }
}
let sevaFormsListCache = [{ form_name: 'Seva Form 1', committee_count: RAW_SEVA_SAMITI.length }];
function renderSevaFormsList(){
  const tbody = document.getElementById('sevaFormsTableBody');
  if(!sevaFormsListCache.length){
    tbody.innerHTML = `<tr><td colspan="3" class="text-center py-10 text-crm-textMuted">No Seva Samiti forms yet. Click "Add New Form" to create one.</td></tr>`;
    return;
  }
  tbody.innerHTML = sevaFormsListCache.map((f,idx) => `
    <tr class="cursor-pointer hover:bg-slate-50" onclick="openSevaForm('${esc(f.form_name).replace(/'/g,"\\'")}', false, true)">
      <td class="py-4"><span class="text-crm-textMuted font-medium text-xs">${idx+1}</span></td>
      <td class="font-semibold text-crm-textDark py-4" style="white-space:normal">${esc(f.form_name)}</td>
      <td class="py-4">${f.committee_count}</td>
      <td class="py-4" onclick="event.stopPropagation()">
        <div class="flex items-center justify-start gap-1.5">
          <button onclick="openSevaForm('${esc(f.form_name).replace(/'/g,"\\'")}', false, true)" title="View" class="w-7 h-7 rounded bg-slate-50 text-slate-500 hover:bg-slate-100 flex justify-center items-center shadow-sm"><i class="fas fa-eye text-[10px]"></i></button>
          <button onclick="openSevaForm('${esc(f.form_name).replace(/'/g,"\\'")}', false, false)" title="Edit" class="w-7 h-7 rounded bg-red-50 text-crm-primary hover:bg-crm-primary hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-pen text-[10px]"></i></button>
          <button onclick="downloadSevaForm('${esc(f.form_name).replace(/'/g,"\\'")}')" title="Download / Print PDF" class="w-7 h-7 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-download text-[10px]"></i></button>
          <button onclick="toggleSevaFormDropdown(event, this, ${idx})" title="More Actions" class="dd-toggle-btn w-7 h-7 rounded bg-slate-50 text-slate-600 hover:bg-slate-200 flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-ellipsis-v text-[10px]"></i></button>
        </div>
      </td>
    </tr>`).join('');
}
async function downloadSevaForm(formName){
  await openSevaForm(formName, false, true);
  setTimeout(() => {
    printSevaSamiti();
    switchModule('sevasamiti'); // back to the forms list after the print/save dialog closes
  }, 250);
}
function renameSevaForm(oldName){
  hideGlobalDropdown();
  openTextPromptModal('Rename form', 'e.g. "Seva Form 2"', (newName) => {
    if(newName === oldName) return;
    if(sevaFormsListCache.some(f => f.form_name === newName)){
      showToast('A form with this name already exists.');
      return;
    }
    // Read from local data instantly — no need to wait on the network just to know
    // what's already on this device.
    let committees = [];
    try{ committees = JSON.parse(localStorage.getItem('yuvaSabhaSevaSamiti_' + oldName) || '[]'); }catch(e){}

    try{
      localStorage.setItem('yuvaSabhaSevaSamiti_' + newName, JSON.stringify(committees));
      localStorage.removeItem('yuvaSabhaSevaSamiti_' + oldName);
    }catch(e){}
    const entry = sevaFormsListCache.find(f => f.form_name === oldName);
    if(entry) entry.form_name = newName;
    renderSevaFormsList();

    // If the form being renamed is the one currently OPEN (renamed via the pencil icon
    // next to its heading), that heading was still showing the old name — update it now
    // instead of waiting for the user to navigate away and back.
    if(currentSevaFormName === oldName){
      currentSevaFormName = newName;
      const sevaHeadingEl = document.getElementById('sevaFormNameHeading');
      if(sevaHeadingEl && !yscForceReadOnly && (currentUserRole==='admin' || canEditSeva())){
        sevaHeadingEl.innerHTML = `${esc(newName)} <button onclick="renameSevaForm('${esc(newName).replace(/'/g,"\\'")}')" title="Rename form" class="ml-1 w-6 h-6 rounded bg-red-50 text-crm-primary hover:bg-crm-primary hover:text-white inline-flex justify-center items-center shadow-sm transition-colors align-middle"><i class="fas fa-pen text-[9px]"></i></button>`;
      } else if(sevaHeadingEl){
        sevaHeadingEl.textContent = newName + (yscForceReadOnly ? ' (View Only)' : '');
      }
    }

    showToast('Form renamed successfully!'); // instant feedback — don't make the user wait on the network
    logActivity('admin', 'admin', 'Admin', `Renamed Seva Samiti form "${oldName}" to "${newName}"`);

    // Sync to the server in the background; the user has already moved on
    if(useBackend){
      (async () => {
        try{
          let serverCommittees = committees;
          if(!serverCommittees.length){
            const res = await cachedFetch(`${API_BASE}/seva_samiti.php?form=${encodeURIComponent(oldName)}&_ts=${Date.now()}`, { cache: 'no-store' });
            if(res.ok) serverCommittees = await res.json();
          }
          await fetch(`${API_BASE}/seva_samiti.php?form=${encodeURIComponent(newName)}`, {
            method: 'PUT', headers: {'Content-Type':'application/json'},
            body: JSON.stringify(serverCommittees)
          });
          await fetch(`${API_BASE}/seva_samiti.php?form=${encodeURIComponent(oldName)}`, { method: 'DELETE' });
        }catch(e){ console.warn('Rename background sync failed:', e); }
      })();
    }
  }, oldName);
}
function toggleSevaFormDropdown(e, btn, idx){
  e.stopPropagation();
  const menu = document.getElementById('globalDropdown');
  const isOpenForThis = !menu.classList.contains('hidden') && menu.dataset.idx === String(idx) && menu.dataset.ctx === 'seva';
  hideGlobalDropdown();
  if(isOpenForThis) return;

  const formName = sevaFormsListCache[idx].form_name;
  menu.innerHTML = `
    <div class="dd-item" onclick="renameSevaForm('${esc(formName).replace(/'/g,"\\'")}')"><i class="fas fa-i-cursor text-amber-500 w-4"></i> Rename</div>
    <div class="dd-item" onclick="copySevaForm('${esc(formName).replace(/'/g,"\\'")}')"><i class="fas fa-copy text-blue-500 w-4"></i> Copy</div>
    <div class="dd-item" onclick="shareSevaForm('${esc(formName).replace(/'/g,"\\'")}')"><i class="fas fa-share-alt text-emerald-500 w-4"></i> Share</div>
    <div class="dd-item danger" onclick="confirmDeleteSevaForm('${esc(formName).replace(/'/g,"\\'")}')"><i class="fas fa-trash w-4"></i> Delete</div>`;
  menu.dataset.idx = String(idx);
  menu.dataset.ctx = 'seva';

  const rect = btn.getBoundingClientRect();
  const menuWidth = 140;
  let left = rect.right - menuWidth;
  if(left < 8) left = 8;
  let top = rect.bottom + 4;
  if(top + 120 > window.innerHeight) top = rect.top - 124;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
  menu.classList.remove('hidden');
}
function copySevaForm(formName){
  const text = `Seva Samiti Form: ${formName}`;
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=> showToast('Form name copied to clipboard!'));
  } else { showToast('Copy not supported in this browser'); }
  hideGlobalDropdown();
}
function shareSevaForm(formName){
  const text = `Seva Samiti Form: ${formName}`;
  if(navigator.share){
    navigator.share({ title: formName, text }).catch(()=>{});
  } else {
    copySevaForm(formName);
    showToast('Sharing not supported — copied instead');
  }
  hideGlobalDropdown();
}
function promptNewSevaForm(){
  openTextPromptModal('New Seva Samiti form', 'e.g. "Seva Form 2"', async (name) => {
    if(useBackend){
      try{
        const res = await fetch(`${API_BASE}/seva_samiti.php`, {
          method: 'POST', headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ formName: name })
        });
        const data = await res.json();
        if(!res.ok){ showToast(data.error || 'Could not create form.'); return; }
      }catch(e){ console.warn('Create form failed, continuing locally:', e); }
    }
    sevaFormsListCache.push({ form_name: name, committee_count: 1 });
    openSevaForm(name, true);
  });
}
function confirmDeleteSevaForm(formName){
  openConfirmModal(`Delete "${formName}"?`, 'This will permanently delete this entire Seva Samiti form and all its committees.', () => {
    try{ localStorage.removeItem('yuvaSabhaSevaSamiti_' + formName); }catch(e){}
    sevaFormsListCache = sevaFormsListCache.filter(f => f.form_name !== formName);
    renderSevaFormsList();
    showToast('Form deleted.'); // instant feedback
    if(useBackend){
      fetch(`${API_BASE}/seva_samiti.php?form=${encodeURIComponent(formName)}`, { method: 'DELETE' })
        .catch(e => console.warn('Delete form background sync failed:', e));
    }
  });
}
async function openSevaForm(formName, isNew, readOnly){
  currentSevaFormName = formName;
  yscForceReadOnly = !!readOnly;
  const sevaHeadingEl = document.getElementById('sevaFormNameHeading');
  if(!yscForceReadOnly && (currentUserRole==='admin' || canEditSeva())){
    sevaHeadingEl.innerHTML = `${esc(formName)} <button onclick="renameSevaForm('${esc(formName).replace(/'/g,"\\'")}')" title="Rename form" class="ml-1 w-6 h-6 rounded bg-red-50 text-crm-primary hover:bg-crm-primary hover:text-white inline-flex justify-center items-center shadow-sm transition-colors align-middle"><i class="fas fa-pen text-[9px]"></i></button>`;
  } else {
    sevaHeadingEl.textContent = formName + (yscForceReadOnly ? ' (View Only)' : '');
  }
  document.getElementById('addBtnWrap').classList.add('hidden');
  document.getElementById('sevaAddBtn').classList.toggle('hidden', !canAddSeva() || yscForceReadOnly);
  document.getElementById('sevaSaveBtn').classList.toggle('hidden', !(canEditSeva()||canAddSeva()||canDeleteSeva()) || yscForceReadOnly);
  showPanel('sevaSamitiView');
  if(isNew){
    sevaSamitiData = [{ idx: 0, samiti_name: 'નવી સમિતિ', main:[{name:'',mobile:''}], assist:[{name:'',mobile:''}] }];
  } else {
    sevaSamitiData = null; // force fresh load for this form
    loadSevaSamitiData(); // seed from RAW as placeholder while backend loads
  }
  renderSevaSamiti();
  await loadSevaSamitiFromBackend();
  renderSevaSamiti();
  if(currentUserRole === 'admin' && formName === 'Seva Form 1') syncReportingSevaPermissions();
  clearFormDirty();
}
function saveSevaSamitiToStorage(){
  try{ localStorage.setItem('yuvaSabhaSevaSamiti_' + currentSevaFormName, JSON.stringify(sevaSamitiData)); }catch(e){}
  if(useBackend){
    fetch(`${API_BASE}/seva_samiti.php?form=${encodeURIComponent(currentSevaFormName)}`, {
      method: 'PUT', headers: {'Content-Type':'application/json'},
      body: JSON.stringify(sevaSamitiData)
    }).then(res => res.json()).then(data => {
      if(data.error) console.warn('Seva Samiti sync failed:', data.error);
    }).catch(e => console.warn('Seva Samiti sync failed, saved locally only:', e));
  }
}
function populateSevaVolunteerDatalist(){
  const dl = document.getElementById('sevaVolunteerDatalist');
  dl.innerHTML = getSevaVolunteersDirectory().map(v => `<option value="${esc(v.name)}">`).join('');
}
let yscForceReadOnly = false;
// Which Seva Samiti committees have an app module tied to them, and what to call it in
// the toggle's tooltip/label. Extend this map if other sevas get their own app module
// in the future — the toggle button appears automatically for any samiti_name listed here.
// Which app modules a Seva Samiti committee row can be linked to, so its main/assist
// volunteers get automatic module access. Set per-row via the dropdown next to the
// committee name — deliberately NOT tied to any specific samiti_name text, so it keeps
// working correctly even if that committee gets renamed later.
function renderSevaSamiti(){
  populateSevaVolunteerDatalist();
  const data = loadSevaSamitiData();
  // Re-run every render (not just on the cached first load) — Members might not have
  // finished loading yet the first time Seva Samiti data was loaded, which would
  // silently skip this fix forever since loadSevaSamitiData() only computes once.
  reconcileSevaVolunteerNames(data);
  const tbody = document.getElementById('sevaSamitiTableBody');
  const editOk = canEditSeva() && !yscForceReadOnly;
  const addOk = canAddSeva() && !yscForceReadOnly;
  const deleteOk = canDeleteSeva() && !yscForceReadOnly;
  const disabledAttr = editOk ? '' : 'disabled';

  const volNameColHtml = (c, group, list) => {
    return (list||[]).map((v,vi) => `
      <div class="seva-vol-row">
        <select class="seva-vol-name screen-only" ${disabledAttr}
          data-c="${c}" data-group="${group}" data-vi="${vi}" data-field="name"
          onchange="onSevaVolunteerNameSelect(this, ${c}, '${group}', ${vi})">
          <option value="">Select…</option>
          ${getSevaVolunteersDirectory().map(opt => `<option value="${esc(opt.name)}" ${opt.name===v.name?'selected':''}>${esc(opt.name)}</option>`).join('')}
          ${(v.name && !getSevaVolunteersDirectory().some(opt=>opt.name===v.name)) ? `<option value="${esc(v.name)}" selected>${esc(v.name)}</option>` : ''}
          <option value="__add_new__">+ Add New…</option>
        </select>
        ${deleteOk ? `<span class="seva-vol-remove screen-only" onclick="removeSevaVolunteer(${c}, '${group}', ${vi})" title="Remove">✕</span>` : ''}
        <span class="print-only">${esc(v.name)}</span>
      </div>`).join('')
      + (addOk ? `<span class="seva-add-vol-btn screen-only" onclick="addSevaVolunteer(${c}, '${group}')">+ Add</span>` : '');
  };
  const volMobileColHtml = (c, group, list) => {
    return (list||[]).map((v,vi) => `
      <div class="seva-vol-row">
        <input type="text" class="seva-vol-mobile screen-only" value="${esc(v.mobile||'')}" ${disabledAttr}
          data-c="${c}" data-group="${group}" data-vi="${vi}" data-field="mobile">
        <span class="print-only">${esc(v.mobile||'')}</span>
      </div>`).join('')
      + (addOk ? `<span class="seva-add-vol-btn seva-add-vol-btn-ghost screen-only">+ Add</span>` : '');
  };

  tbody.innerHTML = data.map((c, ci) => `
    <tr>
      <td class="text-center font-medium relative">
        ${ci+1}
        ${deleteOk ? `<span class="screen-only seva-remove-committee" onclick="removeSevaCommittee(${ci})" title="Remove this committee">✕</span>` : ''}
      </td>
      <td>
        <select class="seva-samiti-name-input screen-only" ${disabledAttr} onchange="onSevaSamitiNameSelect(this, ${ci})">
          <option value="">Select…</option>
          ${getSevaSamitiNameDirectory().map(n => `<option value="${esc(n)}" ${n===c.samiti_name?'selected':''}>${esc(n)}</option>`).join('')}
          ${(c.samiti_name && !getSevaSamitiNameDirectory().includes(c.samiti_name)) ? `<option value="${esc(c.samiti_name)}" selected>${esc(c.samiti_name)}</option>` : ''}
          <option value="__add_new__">+ Add New…</option>
        </select>
        <span class="print-only seva-samiti-name-print">${esc(c.samiti_name)}</span>
        ${(c.samiti_name||'').trim() === 'રિપોર્ટિંગ' ? `
        <button type="button" onclick="toggleReportingAutoSync()" title="${isReportingAutoSyncEnabled() ? 'Reporting Access ચાલુ છે — બંધ કરવા Click કરો' : 'Reporting Access બંધ છે — ચાલુ કરવા Click કરો'}" class="screen-only" style="margin-top:8px;display:flex;align-items:center;gap:5px;font-size:10px;padding:3px 8px;border-radius:20px;border:1px solid ${!isReportingAutoSyncEnabled() ? '#e5b3ba' : '#a7d8bd'};background:${!isReportingAutoSyncEnabled() ? '#fdf0f1' : '#eefaf3'};color:${!isReportingAutoSyncEnabled() ? '#a5424f' : '#1f8a52'};cursor:pointer">
          <i class="fas ${!isReportingAutoSyncEnabled() ? 'fa-toggle-off' : 'fa-toggle-on'}"></i> Reporting Access: ${!isReportingAutoSyncEnabled() ? 'બંધ' : 'ચાલુ'}
        </button>` : ''}
      </td>
      <td>${volNameColHtml(ci, 'main', c.main)}</td>
      <td>${volMobileColHtml(ci, 'main', c.main)}</td>
      <td>${volNameColHtml(ci, 'assist', c.assist)}</td>
      <td>${volMobileColHtml(ci, 'assist', c.assist)}</td>
    </tr>`).join('');

  // ---- Header + footer texts (editable in edit mode) ----
  const hdr = loadSevaHeader();
  const shWrap = document.getElementById('sevaShreeHariWrap');
  const tWrap = document.getElementById('sevaTitleWrap');
  const footerEl = document.getElementById('sevaFooterArea');
  if(editOk){
    shWrap.innerHTML = `<input type="text" class="seva-head-input text-sm" value="${esc(hdr.shreehari)}" onchange="saveSevaHeaderField('shreehari', this.value)">`;
    tWrap.innerHTML = `<input type="text" class="seva-head-input text-lg font-bold" value="${esc(hdr.title)}" onchange="saveSevaHeaderField('title', this.value)">`;
    footerEl.innerHTML = `<input type="text" class="seva-head-input text-xs" value="${esc(hdr.footer)}" onchange="saveSevaHeaderField('footer', this.value)">`;
  } else {
    shWrap.textContent = hdr.shreehari;
    tWrap.textContent = hdr.title;
    footerEl.textContent = hdr.footer;
  }
}
function loadSevaHeader(){
  try{
    const stored = JSON.parse(localStorage.getItem('yuvaSabhaSevaHeader') || 'null');
    if(stored && stored.title !== undefined) return stored;
  }catch(e){}
  const mukhya = (SEVA_FOOTER_DATA||[]).find(f=>f.role==='મુખ્ય જવાબદાર');
  const sahayak = (SEVA_FOOTER_DATA||[]).filter(f=>f.role==='સહાયક');
  return {
    shreehari: '|| શ્રી હરિ: ||',
    title: 'સહજાનંદી યુવા સભા C સેવા સમિતિ',
    footer: 'મુખ્ય જવાબદાર : ' + (mukhya ? mukhya.name + ' - ' + mukhya.mobile : '') +
            '    સહાયક : ' + sahayak.map(s => s.name + ' - ' + s.mobile).join(' , ')
  };
}
function saveSevaHeaderField(field, value){
  const h = loadSevaHeader();
  h[field] = value;
  try{ localStorage.setItem('yuvaSabhaSevaHeader', JSON.stringify(h)); }catch(e){}
}
function onSevaSamitiNameChange(ci, value){
  sevaSamitiData[ci].samiti_name = value;
}
let customSevaSamitiNames = [];
function getSevaSamitiNameDirectory(){
  const fromRaw = RAW_SEVA_SAMITI.map(c => c.samiti_name);
  const fromCurrent = (sevaSamitiData || []).map(c => c.samiti_name).filter(Boolean);
  return Array.from(new Set([...fromRaw, ...fromCurrent, ...customSevaSamitiNames]));
}
function onSevaSamitiNameSelect(selectEl, ci){
  const value = selectEl.value;
  if(value === '__add_new__'){
    const prevValue = sevaSamitiData[ci].samiti_name || '';
    openTextPromptModal('New committee name', 'e.g. "Prasad Vibhag"', (trimmed) => {
      if(!customSevaSamitiNames.includes(trimmed)) customSevaSamitiNames.push(trimmed);
      const opt = document.createElement('option');
      opt.value = trimmed; opt.textContent = trimmed; opt.selected = true;
      selectEl.insertBefore(opt, selectEl.lastElementChild);
      onSevaSamitiNameChange(ci, trimmed);
    }, { onCancel: () => { selectEl.value = prevValue; } });
    return;
  }
  onSevaSamitiNameChange(ci, value);
}
function onSevaVolunteerNameSelect(selectEl, ci, group, vi){
  const value = selectEl.value;
  if(value === '__add_new__'){
    openTextPromptModal('New volunteer name', "e.g. volunteer's full name", (name) => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      opt.selected = true;
      selectEl.insertBefore(opt, selectEl.lastElementChild);
      onSevaVolunteerNameChange(ci, group, vi, name);
    }, { onCancel: () => { selectEl.value = ''; } });
    return;
  }
  onSevaVolunteerNameChange(ci, group, vi, value);
}
function onSevaVolunteerNameChange(ci, group, vi, name){
  const match = getSevaVolunteersDirectory().find(v => v.name === name);
  const mobileRow = document.querySelector(`input[data-c="${ci}"][data-group="${group}"][data-vi="${vi}"][data-field="mobile"]`);
  if(match && mobileRow) mobileRow.value = match.mobile;
}
function addSevaVolunteer(ci, group){
  captureSevaFromDOM();
  sevaSamitiData[ci][group].push({ name:'', mobile:'' });
  renderSevaSamiti();
}
function removeSevaVolunteer(ci, group, vi){
  captureSevaFromDOM();
  const person = sevaSamitiData[ci][group][vi];
  const groupLabel = group==='main' ? 'મુખ્ય સ્વયંસેવક' : 'સહાયક સ્વયંસેવક';
  openConfirmModal(`Remove "${person.name || 'this volunteer'}"?`, `Removing from ${groupLabel}. This will apply once you click Save Details.`, () => {
    sevaSamitiData[ci][group].splice(vi, 1);
    renderSevaSamiti();
    showToast('Volunteer removed. Click Save Details to make it permanent.');
  });
}
function addSevaCommittee(){
  captureSevaFromDOM();
  sevaSamitiData.push({ idx: sevaSamitiData.length, samiti_name:'નવી સમિતિ', main:[{name:'',mobile:''}], assist:[{name:'',mobile:''}] });
  renderSevaSamiti();
  showToast('New committee added — fill in the details and Save.');
  setTimeout(() => {
    const rows = document.querySelectorAll('#sevaSamitiTableBody tr');
    const lastRow = rows[rows.length - 1];
    if(lastRow) lastRow.scrollIntoView({ behavior:'smooth', block:'center' });
  }, 50);
}
function removeSevaCommittee(ci){
  captureSevaFromDOM();
  const name = sevaSamitiData[ci].samiti_name || 'this committee';
  openConfirmModal(`Remove "${name}"?`, 'This will be removed once you click Save Details.', () => {
    sevaSamitiData.splice(ci, 1);
    renderSevaSamiti();
    showToast('Committee removed. Click Save Details to make it permanent.');
  });
}
function captureSevaFromDOM(){
  document.querySelectorAll('#sevaSamitiTableBody select.seva-vol-name, #sevaSamitiTableBody input.seva-vol-mobile').forEach(inp => {
    const ci = Number(inp.dataset.c), group = inp.dataset.group, vi = Number(inp.dataset.vi), field = inp.dataset.field;
    if(sevaSamitiData[ci] && sevaSamitiData[ci][group] && sevaSamitiData[ci][group][vi]){
      sevaSamitiData[ci][group][vi][field] = inp.value;
    }
  });
  document.querySelectorAll('#sevaSamitiTableBody .seva-samiti-name-input').forEach((inp, ci) => {
    if(sevaSamitiData[ci]) sevaSamitiData[ci].samiti_name = inp.value;
  });
}
function saveSevaSamiti(){
  captureSevaFromDOM();
  saveSevaSamitiToStorage();
  if(currentSevaFormName === 'Seva Form 1') syncReportingSevaPermissions();
  const identifier = currentUserRole==='admin' ? 'admin' : (currentUserRecord ? currentUserRecord.phone : '');
  const displayName = currentUserRole==='admin' ? 'Admin' : (currentUserRecord ? (currentUserRecord.poshak_leader_name_guj||currentUserRecord.poshak_leader_name) : '');
  logActivity(currentUserRole||'admin', identifier, displayName, 'Updated Seva Samiti list');
  showToast('Seva Samiti details saved successfully!');
  renderSevaSamiti();
  clearFormDirty();
}
function printSevaSamiti(){
  clearReportPrintState();
  captureSevaFromDOM();
  window.print();
}

/* ===================== REPORTING MODULE (v2 — simple & robust) ===================== */
let REPORTS_DATA = null;
let currentReportDraft = null;
let reportsHasSyncedOnce = false;

function loadReportsData(){
  if(REPORTS_DATA) return REPORTS_DATA;
  try{
    const stored = localStorage.getItem('yuvaSabhaReports');
    REPORTS_DATA = stored ? JSON.parse(stored) : [];
  }catch(e){ REPORTS_DATA = []; }
  return REPORTS_DATA;
}
function saveReportsToStorage(){
  try{ localStorage.setItem('yuvaSabhaReports', JSON.stringify(REPORTS_DATA)); }catch(e){}
}
/* ---- Server sync: Reports were local-only (each browser had its own copy) — this pulls
   the shared list from the backend so every admin/permitted poshak leader sees the same
   reports, while still rendering instantly from the local cache first (same "seed
   instantly, refresh in background" pattern used for Members). ---- */
async function syncReportsFromServer(){
  if(!useBackend) return;
  try{
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    const res = await cachedFetch(`${API_BASE}/reports.php?list=1&_ts=${Date.now()}`, { signal: controller.signal, cache: 'no-store' });
    clearTimeout(timeoutId);
    if(!res.ok) return;
    const serverReports = await res.json();
    if(!Array.isArray(serverReports)) return;
    // Keep the LOCAL version of any report that's still mid-upload — the server's list
    // may not reflect it yet, and blindly trusting the server here is exactly what
    // made a just-saved report vanish before its upload had finished.
    let merged = serverReports;
    if(pendingServerPushes.size && Array.isArray(REPORTS_DATA)){
      merged = serverReports.slice();
      REPORTS_DATA.forEach(localReport => {
        if(!pendingServerPushes.has(localReport.id)) return;
        const idx = merged.findIndex(r => r.id === localReport.id);
        if(idx !== -1) merged[idx] = localReport; else merged.push(localReport);
      });
    }
    REPORTS_DATA = merged;
    saveReportsToStorage();
    if(currentModule === 'members' && !document.getElementById('reportingListView').classList.contains('hidden')){
      renderReportsList();
    }
  }catch(e){
    console.warn('Reports sync failed, using local data:', e);
  }
}
async function pushReportToServer(report, isRetry){
  if(!useBackend) return;
  try{
    const controller = new AbortController();
    // 45s (was 15s) — image-heavy reports on a slow connection genuinely need more
    // time; the old 15s timeout was aborting valid uploads that just needed longer,
    // making a real save look like a failure.
    const timeoutId = setTimeout(() => controller.abort(), 45000);
    const res = await fetch(`${API_BASE}/reports.php`, {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify(report), signal: controller.signal
    });
    clearTimeout(timeoutId);
    if(!res.ok){
      // The save reached the server but was REJECTED (e.g. PHP's post_max_size limit
      // rejecting a large, image-heavy report, a database error, etc). Without this
      // check, fetch() resolving normally on an error status was being silently
      // treated as success — the report looked "saved" locally with no indication
      // that it never actually reached the server, meaning it could vanish on
      // another device or a fresh page load with no warning at all.
      let detail = '';
      try{ const body = await res.json(); detail = body && body.error ? body.error : ''; }catch(_e){}
      console.warn('Report save to server was rejected:', res.status, detail);
      if(!isRetry){
        // one silent retry — a lot of "failures" are just a transient hiccup
        return pushReportToServer(report, true);
      }
      showToast(`⚠️ "${report.title || 'Report'}" did NOT reach the server (${res.status}${detail ? ': ' + detail : ''}). It will NOT appear on other devices. Please try Save again, or check with your admin.`, 12000);
      return false;
    }
    // Explicit success confirmation — previously there was NO toast on a successful
    // background upload, so a person had no way to know (short of reloading on another
    // device) whether the save had actually reached the server or not.
    showToast(`✅ "${report.title || 'Report'}" uploaded to server successfully.`, 4000);
    return true;
  }catch(e){
    console.warn('Report save to server failed (kept locally):', e);
    if(!isRetry){
      return pushReportToServer(report, true);
    }
    showToast(`⚠️ "${report.title || 'Report'}" saved on this device, but could NOT reach the server (no internet, or server is down). It will NOT appear on other devices until this succeeds. Please check your internet and try Save again.`, 12000);
    return false;
  }
}
async function deleteReportFromServer(id){
  if(!useBackend) return;
  try{
    await fetch(`${API_BASE}/reports.php?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  }catch(e){
    console.warn('Report delete on server failed:', e);
  }
}
/* ==================================================================================
   REPORTING AUTO-ACCESS from Seva Samiti — v2, built to avoid the earlier failure.
   The earlier version broke because: (1) the ON/OFF toggle state was stored on the
   Seva Samiti row itself, and the existing seva_samiti.php backend apparently doesn't
   persist custom fields it doesn't know about — so a fresh fetch from the server would
   silently drop the OFF setting; (2) a background refresh ran on every app-entry
   (including "Preview as Member"), re-fetching that unreliable data and re-granting
   access that had just been turned off.
   This version fixes both: the toggle state is stored in the SAME reliable
   "permissions" system every module's access already lives in (a special reserved
   key, not a per-row field on Seva Samiti data) — that pathway is proven throughout
   this app. And syncing only ever happens at an EXPLICIT admin action (the toggle
   button, or saving Seva Samiti) — never as an automatic background refresh — so
   nothing can silently re-run with stale data during something unrelated like
   Preview as Member.
   ================================================================================== */
function normalizeMobileDigits(m){
  return String(m||'').replace(/\D/g, '').slice(-10);
}
function isReportingAutoSyncEnabled(){
  let stored = null;
  try{ stored = localStorage.getItem('yuvaSabhaReportingAutoSync'); }catch(e){}
  return stored !== 'off'; // defaults ON until explicitly turned off
}
function setReportingAutoSyncEnabled(enabled){
  try{ localStorage.setItem('yuvaSabhaReportingAutoSync', enabled ? 'on' : 'off'); }catch(e){}
}
function getReportingSevaMobiles(){
  let data;
  try{
    const stored = localStorage.getItem('yuvaSabhaSevaSamiti_Seva Form 1');
    data = stored ? JSON.parse(stored) : (typeof RAW_SEVA_SAMITI !== 'undefined' ? RAW_SEVA_SAMITI : []);
  }catch(e){
    data = (typeof RAW_SEVA_SAMITI !== 'undefined') ? RAW_SEVA_SAMITI : [];
  }
  const row = (data||[]).find(r => (r.samiti_name||'').trim() === 'રિપોર્ટિંગ');
  if(!row) return [];
  const mobiles = [];
  (row.main||[]).forEach(m => { if(m && m.mobile) mobiles.push(normalizeMobileDigits(m.mobile)); });
  (row.assist||[]).forEach(m => { if(m && m.mobile) mobiles.push(normalizeMobileDigits(m.mobile)); });
  return mobiles;
}
/* Call this ONLY at explicit admin actions: the toggle button, or Save in Seva Samiti. */
function syncReportingSevaPermissions(){
  const enabled = isReportingAutoSyncEnabled();
  const currentMobiles = enabled ? new Set(getReportingSevaMobiles()) : new Set();
  let previouslyAutoGranted = [];
  try{ previouslyAutoGranted = JSON.parse(localStorage.getItem('yuvaSabhaAutoReportingMobiles') || '[]'); }catch(e){}
  const perm = loadPermissions();
  previouslyAutoGranted.forEach(mob => {
    if(!currentMobiles.has(mob) && perm[mob] && perm[mob].reporting){
      perm[mob].reporting.access = false;
      perm[mob].reporting.edit = false;
    }
  });
  currentMobiles.forEach(mob => {
    if(!perm[mob]) perm[mob] = {};
    if(!perm[mob].reporting) perm[mob].reporting = {};
    perm[mob].reporting.access = true;
    perm[mob].reporting.edit = true;
  });
  savePermissions(perm);
  try{ localStorage.setItem('yuvaSabhaAutoReportingMobiles', JSON.stringify([...currentMobiles])); }catch(e){}
}
function toggleReportingAutoSync(){
  const turningOff = isReportingAutoSyncEnabled();
  setReportingAutoSyncEnabled(!turningOff);
  syncReportingSevaPermissions();
  showToast(turningOff ? 'Reporting Auto-Access બંધ કરી — હવે કોઈને Auto Access નહીં મળે.' : 'Reporting Auto-Access ચાલુ કરી — Seva Samiti ના સભ્યોને Access મળશે.');
  if(document.getElementById('sevaSamitiTableBody')) renderSevaSamiti();
}

function canEditReporting(){
  if(currentUserRole==='admin') return true;
  if((currentUserRole==='poshak' || currentUserRole==='yuva') && currentUserRecord){
    return hasExtraPermission(currentUserRecord.mobile,'reporting','access') && hasExtraPermission(currentUserRecord.mobile,'reporting','edit');
  }
  return false;
}

function stripHtmlTags(html){
  if(!html) return '';
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}
function formatReportDate(d){
  if(!d) return '—';
  const dt = new Date(d);
  if(isNaN(dt)) return d;
  const dd = String(dt.getDate()).padStart(2,'0');
  const mm = String(dt.getMonth()+1).padStart(2,'0');
  const yyyy = dt.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}
function newReportId(){ return 'rep_' + Date.now() + '_' + Math.random().toString(36).slice(2,8); }

function renderReportsList(){
  const list = loadReportsData();
  const tbody = document.getElementById('reportsTableBody');
  if(!list.length){
    tbody.innerHTML = `<tr><td colspan="5" class="text-center py-10 text-crm-textMuted">No reports yet. Click "Add New Report" to create one.</td></tr>`;
    return;
  }
  const reversed = list.slice().reverse();
  tbody.innerHTML = reversed.map((r, idx) => `
    <tr class="cursor-pointer hover:bg-slate-50" onclick="openReportEditor('${r.id}')">
      <td class="py-4"><span class="text-crm-textMuted font-medium text-xs">${idx+1}</span></td>
      <td class="font-medium py-4" style="white-space:normal">${esc(stripHtmlTags(r.title) || 'Untitled Report')}</td>
      <td class="py-4">${esc(formatReportDate(r.date))}</td>
      <td class="py-4">${esc(String(r.attendance || 0))}</td>
      <td class="py-4" onclick="event.stopPropagation()">
        <div class="flex items-center justify-start gap-1.5">
          <button onclick="openReportEditor('${r.id}', true)" title="View" class="w-7 h-7 rounded bg-slate-50 text-slate-500 hover:bg-slate-100 flex justify-center items-center shadow-sm"><i class="fas fa-eye text-[10px]"></i></button>
          <button onclick="openReportEditor('${r.id}')" title="Edit" class="w-7 h-7 rounded bg-red-50 text-crm-primary hover:bg-crm-primary hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-pen text-[10px]"></i></button>
          <button onclick="downloadReportFromList('${r.id}')" title="Download / Print PDF" class="w-7 h-7 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-download text-[10px]"></i></button>
          <button onclick="toggleReportDropdown(event, this, ${idx})" title="More Actions" class="dd-toggle-btn w-7 h-7 rounded bg-slate-50 text-slate-600 hover:bg-slate-200 flex justify-center items-center shadow-sm transition-colors"><i class="fas fa-ellipsis-v text-[10px]"></i></button>
        </div>
      </td>
    </tr>`).join('');
  window._reportsListReversedCache = reversed;
}
async function downloadReportFromList(id){
  const opened = await openReportEditor(id);
  if(!opened) return; // failure toast already shown by openReportEditor
  setTimeout(() => {
    downloadReportPdf();
    switchModule('reporting');
  }, 250);
}
function toggleReportDropdown(e, btn, idx){
  e.stopPropagation();
  const menu = document.getElementById('globalDropdown');
  const isOpenForThis = !menu.classList.contains('hidden') && menu.dataset.idx === String(idx) && menu.dataset.ctx === 'report';
  hideGlobalDropdown();
  if(isOpenForThis) return;

  const rec = window._reportsListReversedCache[idx];
  menu.innerHTML = `
    <div class="dd-item" onclick="renameReport('${rec.id}')"><i class="fas fa-i-cursor text-amber-500 w-4"></i> Rename</div>
    <div class="dd-item" onclick="copyReport('${rec.id}')"><i class="fas fa-copy text-blue-500 w-4"></i> Copy</div>
    <div class="dd-item" onclick="shareReport('${rec.id}')"><i class="fas fa-share-alt text-emerald-500 w-4"></i> Share</div>
    ${currentUserRole==='admin' ? `<div class="dd-item danger" onclick="confirmDeleteReport('${rec.id}')"><i class="fas fa-trash w-4"></i> Delete</div>` : ''}`;
  menu.dataset.idx = String(idx);
  menu.dataset.ctx = 'report';

  const rect = btn.getBoundingClientRect();
  const menuWidth = 140;
  let left = rect.right - menuWidth;
  if(left < 8) left = 8;
  let top = rect.bottom + 4;
  if(top + 160 > window.innerHeight) top = rect.top - 164;
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';
  menu.classList.remove('hidden');
}
function renameReport(id){
  hideGlobalDropdown();
  const list = loadReportsData();
  const rec = list.find(r => r.id === id);
  if(!rec) return;
  openTextPromptModal('Rename report', 'e.g. "13 Aug Sabha Report"', (newTitle) => {
    if(!newTitle || newTitle === stripHtmlTags(rec.title)) return;
    rec.title = newTitle;
    saveReportsToStorage();
    pushReportToServer(rec);
    renderReportsList();
    showToast('Report renamed.');
  });
}
function copyReport(id){
  hideGlobalDropdown();
  const list = loadReportsData();
  const rec = list.find(r => r.id === id);
  if(!rec) return;
  const text = `Report: ${stripHtmlTags(rec.title) || 'Untitled Report'}`;
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=> showToast('Report name copied to clipboard!'));
  } else { showToast('Copy not supported in this browser'); }
}
function shareReport(id){
  hideGlobalDropdown();
  const list = loadReportsData();
  const rec = list.find(r => r.id === id);
  if(!rec) return;
  const text = `Report: ${stripHtmlTags(rec.title) || 'Untitled Report'}`;
  if(navigator.share){
    navigator.share({ title: text, text: text }).catch(()=>{});
  } else if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=> showToast('Sharing not supported — name copied instead!'));
  } else {
    showToast('Sharing not supported in this browser');
  }
}

function createNewReport(){
  if(!canEditReporting()) return;
  clearFormDirty();
  currentReportDraft = {
    id: newReportId(),
    title: '', titleAlign: 'center', date: '', time: '', speaker: '', attendance: '', subject: '',
    sections: [ { id: 's_'+Date.now(), title: '', content: '', layout: 'center', imageCount: 0, images: [] } ],
    attendanceTable: { enabled: false, rows: [] }
  };
  showPanel('reportingEditorView');
  renderReportEditor();
}
async function openReportEditor(id, goStraightToPreview){
  const list = loadReportsData();
  let rec = list.find(r => r.id === id);
  // The list from the server is now LIGHTWEIGHT (no sections/images — that's what
  // makes it load instantly). The full report is fetched here, only when the person
  // actually opens this one report. Exceptions where the local copy is used instead:
  // a report whose upload is still in flight (server would return a stale/missing
  // version), or when the local copy is already full (e.g. just created locally).
  const isLightweight = !rec || !Array.isArray(rec.sections);
  const isPendingUpload = typeof pendingServerPushes !== 'undefined' && pendingServerPushes.has(id);
  const diag = []; // collects exactly what happened at each step, for the error message
  if(useBackend && isLightweight && !isPendingUpload){
    showToast('Loading report…');
    let fetchedFull = null;
    try{
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);
      const res = await cachedFetch(`${API_BASE}/reports.php?id=${encodeURIComponent(id)}&_ts=${Date.now()}`, { signal: controller.signal, cache: 'no-store' });
      clearTimeout(timeoutId);
      diag.push(`?id= → HTTP ${res.status}`);
      if(res.ok){
        let full = await res.json();
        // Robustness: if the server is still the OLD reports.php (ignores ?id= and
        // returns the whole array), find our report inside it.
        if(Array.isArray(full)){
          diag.push(`?id= returned an array of ${full.length} (legacy server) — searching it`);
          full = full.find(r => r && r.id === id);
        }
        if(full && full.id) fetchedFull = full;
        else diag.push(`?id= response did not contain this report's id`);
      }
    }catch(e){
      diag.push(`?id= request failed: ${e.name}${e.message ? ' — ' + e.message : ''}`);
    }
    // Fallback: if the ?id= request didn't give us a usable result (server error,
    // unexpected response shape, a reports.php that predates even the array-fallback
    // case above, etc.) try the plain/legacy full-list endpoint once before giving up.
    if(!fetchedFull){
      try{
        const controller2 = new AbortController();
        const timeoutId2 = setTimeout(() => controller2.abort(), 20000);
        const res2 = await cachedFetch(`${API_BASE}/reports.php?_ts=${Date.now()}`, { signal: controller2.signal, cache: 'no-store' });
        clearTimeout(timeoutId2);
        diag.push(`legacy fallback → HTTP ${res2.status}`);
        if(res2.ok){
          const all = await res2.json();
          if(Array.isArray(all)){
            fetchedFull = all.find(r => r && r.id === id) || null;
            if(!fetchedFull) diag.push(`legacy fallback returned ${all.length} reports, but none matched this id`);
          } else {
            diag.push(`legacy fallback did not return an array`);
          }
        }
      }catch(e){
        diag.push(`legacy fallback request failed: ${e.name}${e.message ? ' — ' + e.message : ''}`);
      }
    }
    if(fetchedFull){
      rec = fetchedFull;
      const idx = list.findIndex(r => r.id === id);
      if(idx >= 0) list[idx] = fetchedFull; else list.push(fetchedFull);
      saveReportsToStorage();
    }
  }
  if(!rec) return false;
  if(!Array.isArray(rec.sections)){
    const detail = diag.length ? diag.join(' | ') : 'no attempts were made (offline mode?)';
    showToast(`Could not load this report. Details: ${detail}`, 8000);
    return false;
  }
  clearFormDirty();
  currentReportDraft = JSON.parse(JSON.stringify(rec));
  // Migrate any old-format sections (single `image` object, or images missing the newer
  // width/height/fit/crop properties) so previously-saved reports keep opening correctly.
  currentReportDraft.sections.forEach(sec => {
    if(sec.image !== undefined){
      sec.images = sec.image ? [{ src: sec.image.src }] : [];
      sec.layout = (sec.image && sec.image.align) || 'center';
      delete sec.image;
    }
    if(!sec.images) sec.images = [];
    if(!sec.layout) sec.layout = 'center';
    sec.images = sec.images.map(img => Object.assign(newImageObj(), img));
    sec.imageCount = sec.images.length;
  });
  if(!currentReportDraft.attendanceTable) currentReportDraft.attendanceTable = { enabled: false, rows: [] };
  showPanel('reportingEditorView');
  renderReportEditor();
  if(goStraightToPreview) previewReport();
  return true;
}
function renderReportEditor(){
  const r = currentReportDraft;
  if(!r || !Array.isArray(r.sections)){
    console.warn('renderReportEditor called without a valid report draft — aborting render.');
    return;
  }
  document.getElementById('repTitle').value = r.title || '';
  updateTitleAlignButtons();
  document.getElementById('repDate').value = r.date || '';
  document.getElementById('repDateDisplay').value = r.date ? isoToDDMMYYYY(r.date) : '';
  document.getElementById('repTime').value = r.time || '';
  document.getElementById('repSpeaker').value = r.speaker || '';
  document.getElementById('repAttendance').value = r.attendance || '';
  document.getElementById('repSubject').value = r.subject || '';
  renderMetaImageControls();
  renderReportSections();
}
function captureReportFieldsFromDOM(){
  const r = currentReportDraft;
  if(!r) return;
  r.title = document.getElementById('repTitle').value.trim();
  r.date = document.getElementById('repDate').value;
  r.time = document.getElementById('repTime').value.trim();
  r.speaker = document.getElementById('repSpeaker').value.trim();
  r.attendance = document.getElementById('repAttendance').value;
  r.subject = document.getElementById('repSubject').value.trim();
  r.sections.forEach(sec => {
    const titleEl = document.getElementById('secTitle_' + sec.id);
    const contentEl = document.getElementById('secContent_' + sec.id);
    if(titleEl) sec.title = titleEl.value;
    if(contentEl) sec.content = contentEl.value;
  });
}
const SECTION_LAYOUTS = [
  { key: 'imageTop', label: 'Image ઉપર, Text નીચે', icon: 'fa-image' },
  { key: 'center', label: 'Images Below Text', icon: 'fa-align-center' },
  { key: 'right', label: 'Text Left, Images Right', icon: 'fa-align-right' },
  { key: 'left', label: 'Text Right, Images Left', icon: 'fa-align-left' },
  { key: 'both', label: 'Text Center, Images Both Sides', icon: 'fa-arrows-left-right' }
];
function newImageObj(){
  return { src: null, width: 200, height: 200, fit: 'cover', frameStyle: 'plain', cropTop: 0, cropRight: 0, cropBottom: 0, cropLeft: 0 };
}
function renderReportSections(){
  const container = document.getElementById('repSectionsContainer');
  const r = currentReportDraft;
  container.innerHTML = r.sections.map((sec, idx) => {
    const layout = sec.layout || 'center';
    const images = sec.images || [];
    const count = sec.imageCount || images.length || 1;
    const imgSlotsHtml = Array.from({length: count}).map((_, slot) => {
      const img = images[slot];
      return `<div style="border:1px solid #ecdfe1;border-radius:10px;padding:12px;margin-bottom:10px">
        <label class="text-[11px] text-crm-textMuted font-medium block mb-2">Image ${slot+1}${layout==='both' ? (slot < Math.ceil(count/2) ? ' (Left side)' : ' (Right side)') : ''}</label>
        ${img && img.src ? `
          <div class="flex items-start gap-3 mb-2">
            <img src="${esc(img.src)}" class="w-16 h-16 rounded-lg object-cover border border-crm-border cursor-pointer flex-shrink-0" onclick="openPhotoLightbox('${esc(img.src).replace(/'/g,"\\'")}')">
            <div style="flex:1" class="grid grid-cols-2 gap-2">
              <div><label class="text-[10px] text-crm-textMuted">Width (px)</label><input type="number" min="40" max="650" value="${img.width||200}" onchange="setImageProp(${idx},${slot},'width',this.value)" style="padding:5px 8px;font-size:11px"></div>
              <div><label class="text-[10px] text-crm-textMuted">Height (px)</label><input type="number" min="40" max="650" value="${img.height||200}" onchange="setImageProp(${idx},${slot},'height',this.value)" style="padding:5px 8px;font-size:11px"></div>
              <div class="col-span-2"><label class="text-[10px] text-crm-textMuted">Display Mode</label>
                <select onchange="setImageProp(${idx},${slot},'fit',this.value)" style="padding:5px 8px;font-size:11px">
                  <option value="cover" ${(!img.fit||img.fit==='cover')?'selected':''}>Fill Box (may crop edges)</option>
                  <option value="contain" ${img.fit==='contain'?'selected':''}>Fit Whole Image (no cropping)</option>
                </select>
                <p id="coverHint_${sec.id}_${slot}" class="text-[10px] text-crm-textMuted mt-1"></p>
              </div>
              <div class="col-span-2"><label class="text-[10px] text-crm-textMuted">Frame Design</label>
                <select onchange="setImageProp(${idx},${slot},'frameStyle',this.value)" style="padding:5px 8px;font-size:11px">
                  ${Object.keys(FRAME_STYLES).map(key => `<option value="${key}" ${(img.frameStyle||'plain')===key?'selected':''}>${FRAME_STYLES[key].label}</option>`).join('')}
                </select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-2 mb-2">
            <div><label class="text-[10px] text-crm-textMuted">Crop Top %</label><input type="number" min="0" max="45" value="${img.cropTop||0}" onchange="setImageProp(${idx},${slot},'cropTop',this.value)" style="padding:5px 6px;font-size:11px"></div>
            <div><label class="text-[10px] text-crm-textMuted">Crop Bottom %</label><input type="number" min="0" max="45" value="${img.cropBottom||0}" onchange="setImageProp(${idx},${slot},'cropBottom',this.value)" style="padding:5px 6px;font-size:11px"></div>
            <div><label class="text-[10px] text-crm-textMuted">Crop Left %</label><input type="number" min="0" max="45" value="${img.cropLeft||0}" onchange="setImageProp(${idx},${slot},'cropLeft',this.value)" style="padding:5px 6px;font-size:11px"></div>
            <div><label class="text-[10px] text-crm-textMuted">Crop Right %</label><input type="number" min="0" max="45" value="${img.cropRight||0}" onchange="setImageProp(${idx},${slot},'cropRight',this.value)" style="padding:5px 6px;font-size:11px"></div>
          </div>
          <button onclick="removeSectionImage(${idx},${slot})" class="text-[11px] text-red-500 hover:text-red-700"><i class="fas fa-trash mr-1"></i>Remove This Image</button>
        ` : `<input type="file" accept="image/jpeg,image/jpg,image/png" onchange="handleSectionImageUpload(event,${idx},${slot})" class="text-xs">`}
      </div>`;
    }).join('');
    return `
    <div class="bg-white rounded-2xl shadow-crm border border-crm-border p-6 mb-4">
      <div class="flex items-center justify-between mb-3">
        <h3 class="section-header" style="border:none;margin:0;padding:0"><i class="fas fa-layer-group text-emerald-500 mr-1 text-sm"></i> Section ${idx+1}</h3>
        ${r.sections.length > 1 ? `<button onclick="removeReportSection(${idx})" class="text-[11px] text-red-500 hover:text-red-700"><i class="fas fa-trash mr-1"></i>Remove Section</button>` : ''}
      </div>
      ${idx > 0 ? `<div class="rec-field mb-4" style="background:${sec.newPage ? '#fff7e6' : '#f4faf6'};border-radius:10px;padding:10px 14px;border:1px solid ${sec.newPage ? '#e6a817' : '#bfe3cc'}">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin:0">
          <input type="checkbox" ${sec.newPage ? 'checked' : ''} onchange="toggleSectionNewPage(${idx})">
          <span class="text-[12.5px] font-medium">${sec.newPage ? '📄 આ Section નવા Page થી શરૂ થાય છે' : '↕️ આ Section પાછલા Section ની સાથે જ (Same Page પર) છે'}</span>
        </label>
        <p class="text-[11px] text-crm-textMuted mt-1 ml-6">ભૂલથી "New Page" દબાયું હોય તો અહીંથી j Uncheck કરી શકાય — Delete-Recreate કરવાની જરૂર નથી.</p>
      </div>` : ''}
      <div class="rec-field mb-4">
        <label>Title</label>
        <input id="secTitle_${sec.id}" type="text" value="${esc(sec.title||'')}" placeholder="e.g. સભાનો પ્રારંભ" oninput="renderAddSectionButtons()">
      </div>
      <div class="rec-field mb-4">
        <label>Content <span class="text-[10px] text-crm-textMuted font-normal">(Text select કરીને Ctrl+B = Bold)</span></label>
        <textarea id="secContent_${sec.id}" rows="6" placeholder="લખાણ લખો…&#10;Text select કરીને Ctrl+B = Bold&#10;- લાઈન = Bullet Point&#10;[] લાઈન = બોક્સ (Highlighted Square)" onkeydown="handleContentKeydown(event)" oninput="renderAddSectionButtons()">${esc(sec.content||'')}</textarea>
        <p class="text-[11px] text-crm-textMuted mt-1">Tips: Text select કરો + <b>Ctrl+B</b> = Bold &nbsp;|&nbsp; લાઈન શરૂમાં <b>- </b> = Bullet &nbsp;|&nbsp; <b>[] </b> = Highlighted Box</p>
      </div>
      <div class="rec-field mb-4">
        <label>Image Layout</label>
        <div class="grid grid-cols-2 gap-2">
          ${SECTION_LAYOUTS.map(L => `
            <button type="button" onclick="setSectionLayout(${idx},'${L.key}')" class="py-2 px-3 rounded-lg text-xs border text-left flex items-center gap-2 ${layout===L.key ? 'bg-crm-primary text-white border-crm-primary' : 'border-crm-border text-crm-textMuted'}">
              <i class="fas ${L.icon}"></i> ${L.label}
            </button>`).join('')}
        </div>
      </div>
      <div class="rec-field mb-3">
        <label>આ Section ઉપરની જગ્યા (Section Gap, px)</label>
        <input type="number" min="0" max="60" value="${sec.sectionGap !== undefined && sec.sectionGap !== null ? sec.sectionGap : 10}" onchange="setSectionSpacing(${idx},this.value)" style="width:100px">
        <span class="text-[11px] text-crm-textMuted ml-2">Only-Text Section હોય તો પણ આ Gap Control થાય છે — 0 = બિલકુલ ચોંટેલું</span>
      </div>
      <div class="rec-field mb-3">
        <label>Number of Images</label>
        <input type="number" min="0" max="6" value="${count}" onchange="setImageCount(${idx},this.value)" style="width:100px">
        <span class="text-[11px] text-crm-textMuted ml-2">0 થી 6 — જેટલી Image જોઈએ એટલી લખો</span>
      </div>
      ${images.length ? `<div class="rec-field mb-3">
        <label>${(layout === 'center' || layout === 'imageTop') ? 'Text ↔ Image (ઉપર-નીચે) Gap (px)' : 'Text ↔ Image વચ્ચેનું Gap (px)'}</label>
        <input type="number" min="0" max="80" value="${sec.textImageGap !== undefined && sec.textImageGap !== null ? sec.textImageGap : 16}" onchange="setSectionGap(${idx},this.value)" style="width:100px">
        <span class="text-[11px] text-crm-textMuted ml-2">0 = બિલકુલ ચોંટેલું, વધુ Number = વધુ જગ્યા — તમારી પસંદગી પ્રમાણે</span>
      </div>` : ''}
      <div class="rec-field">
        ${imgSlotsHtml || '<p class="text-[11px] text-crm-textMuted">Number of Images 0 છે — Image ઉમેરવા સંખ્યા વધારો.</p>'}
        <span id="secImgStatus_${sec.id}" class="text-[11px] text-crm-textMuted block mt-1"></span>
      </div>
    </div>`;
  }).join('');
  renderAddSectionButtons();
  r.sections.forEach(sec => {
    (sec.images||[]).forEach((img, slot) => {
      if(img && img.src && (!img.fit || img.fit === 'cover')){
        showCoverCropHint(img, `coverHint_${sec.id}_${slot}`);
      }
    });
  });
}
function renderAddSectionButtons(){
  const wrap = document.getElementById('repAddSectionBtns');
  if(!wrap) return;
  const full = isCurrentPageFull();
  wrap.innerHTML = `
    ${!full ? `<button onclick="addReportSection(false)" class="flex-1 py-3 rounded-xl border-2 border-dashed border-crm-border text-crm-textMuted hover:border-crm-primary hover:text-crm-primary transition-colors text-sm font-medium">
      <i class="fas fa-plus mr-1"></i> Add Content Block (Same Page)
    </button>` : `<div class="flex-1 py-3 rounded-xl border-2 border-dashed border-amber-200 bg-amber-50 text-amber-700 text-sm font-medium text-center">
      <i class="fas fa-circle-info mr-1"></i> આ Page ભરાઈ ગયું — હવે નવું Page ઉમેરો
    </div>`}
    <button onclick="addReportSection(true)" class="flex-1 py-3 rounded-xl border-2 border-dashed border-crm-border text-crm-textMuted hover:border-crm-primary hover:text-crm-primary transition-colors text-sm font-medium">
      <i class="fas fa-file-circle-plus mr-1"></i> Add New Page
    </button>`;
  renderAttendanceTableEditor();
}

/* ---- Attendance Table: the "પોષક લીડર મુજબ સભ્ય સંખ્યા અને હાજરી અહેવાલ" page that
   goes at the very end of the report, followed by "જય સ્વામિનારાયણ". Poshak Leader
   names come from the real Poshak Leader list already in the system (same source the
   Users Permission grid uses), plus a "પોષક લીડર વગરના" (Unassigned) option, so the
   dropdown always reflects who's actually a Poshak Leader right now. ---- */
function getPoshakLeaderDropdownOptions(){
  const leaders = getPoshakLeaders().map(p => p.name_gujarati || p.full_name || p.name).filter(Boolean);
  return [...leaders, 'પોષક લીડર વગરના'];
}
function renderAttendanceTableEditor(){
  const container = document.getElementById('repAttendanceTableContainer');
  if(!container) return;
  const r = currentReportDraft;
  const table = r.attendanceTable;
  const options = getPoshakLeaderDropdownOptions();
  if(!table || !table.enabled){
    container.innerHTML = `<button onclick="addAttendanceTable()" class="w-full py-3 rounded-xl border-2 border-dashed border-crm-border text-crm-textMuted hover:border-crm-primary hover:text-crm-primary transition-colors text-sm font-medium mb-6">
      <i class="fas fa-table mr-1"></i> Add "પોષક લીડર મુજબ સભ્ય સંખ્યા અને હાજરી અહેવાલ" Table
    </button>`;
    return;
  }
  const rows = table.rows || [];
  container.innerHTML = `
    <div class="bg-white rounded-2xl shadow-crm border border-crm-border p-6 mb-4">
      <div class="flex items-center justify-between mb-3">
        <h3 class="section-header" style="border:none;margin:0;padding:0"><i class="fas fa-table text-indigo-500 mr-1 text-sm"></i> પોષક લીડર મુજબ સભ્ય સંખ્યા અને હાજરી અહેવાલ</h3>
        <button onclick="removeAttendanceTable()" class="text-[11px] text-red-500 hover:text-red-700"><i class="fas fa-trash mr-1"></i>Remove Table</button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm" style="border-collapse:collapse">
          <thead><tr class="text-left text-[11px] text-crm-textMuted border-b border-crm-border">
            <th class="py-2 pr-2">ક્રમ</th>
            <th class="py-2 pr-2">પોષક લીડર</th>
            <th class="py-2 pr-2">સભ્યો</th>
            <th class="py-2 pr-2">હાજર</th>
            <th class="py-2 pr-2">ગેરહાજર</th>
            <th class="py-2"></th>
          </tr></thead>
          <tbody>
            ${rows.map((row, ri) => `
              <tr class="border-b border-slate-100">
                <td class="py-2 pr-2 text-crm-textMuted">${ri+1}</td>
                <td class="py-2 pr-2">
                  <select onchange="setAttendanceRowField(${ri},'poshakLeader',this.value)" style="padding:5px 6px;font-size:12px;min-width:180px">
                    <option value="">Select…</option>
                    ${options.map(name => `<option value="${esc(name)}" ${row.poshakLeader===name?'selected':''}>${esc(name)}</option>`).join('')}
                  </select>
                </td>
                <td class="py-2 pr-2"><input type="number" min="0" value="${row.members||0}" onchange="setAttendanceRowField(${ri},'members',this.value)" style="width:70px;padding:5px 6px;font-size:12px"></td>
                <td class="py-2 pr-2"><input type="number" min="0" value="${row.present||0}" onchange="setAttendanceRowField(${ri},'present',this.value)" style="width:70px;padding:5px 6px;font-size:12px"></td>
                <td class="py-2 pr-2 text-crm-textMuted">${Math.max(0,(row.members||0)-(row.present||0))}</td>
                <td class="py-2"><button onclick="removeAttendanceRow(${ri})" class="text-red-400 hover:text-red-600 text-xs"><i class="fas fa-trash"></i></button></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <button onclick="addAttendanceRow()" class="mt-3 text-xs text-crm-primary hover:underline"><i class="fas fa-plus mr-1"></i>Add Row</button>
      <p class="text-[11px] text-crm-textMuted mt-3">આ Table ના અંતે "જય સ્વામિનારાયણ" આપોઆપ ઉમેરાશે.</p>
    </div>`;
}
function addAttendanceTable(){
  captureReportFieldsFromDOM();
  currentReportDraft.attendanceTable = { enabled: true, rows: [{ poshakLeader:'', members:0, present:0 }] };
  renderAttendanceTableEditor();
}
function removeAttendanceTable(){
  captureReportFieldsFromDOM();
  openConfirmModal('Remove Attendance Table?', 'This will delete all its rows.', () => {
    currentReportDraft.attendanceTable = { enabled: false, rows: [] };
    renderAttendanceTableEditor();
  }, { confirmLabel: 'Remove', confirmClass: 'bg-red-600 hover:bg-red-700' });
}
function addAttendanceRow(){
  captureReportFieldsFromDOM();
  currentReportDraft.attendanceTable.rows.push({ poshakLeader:'', members:0, present:0 });
  renderAttendanceTableEditor();
}
function removeAttendanceRow(ri){
  captureReportFieldsFromDOM();
  currentReportDraft.attendanceTable.rows.splice(ri, 1);
  renderAttendanceTableEditor();
}
function setAttendanceRowField(ri, field, value){
  captureReportFieldsFromDOM();
  const row = currentReportDraft.attendanceTable.rows[ri];
  if(!row) return;
  row[field] = (field === 'poshakLeader') ? value : Math.max(0, parseInt(value) || 0);
  renderAttendanceTableEditor();
}
function buildAttendanceTableHtml(table){
  if(!table || !table.enabled || !table.rows || !table.rows.length) return '';
  const rows = table.rows;
  return `<div class="rpt-att-title">પોષક લીડર મુજબ સભ્ય સંખ્યા અને હાજરી અહેવાલ</div>
    <table class="rpt-att-table">
      <thead><tr><th>ક્રમ</th><th>પોષક લીડર</th><th>સભ્યો</th><th>હાજર</th><th>ગેરહાજર</th></tr></thead>
      <tbody>
        ${rows.map((row, ri) => `<tr>
          <td>${ri+1}</td>
          <td>${esc(row.poshakLeader||'—')}</td>
          <td>${row.members||0}</td>
          <td>${row.present||0}</td>
          <td>${Math.max(0,(row.members||0)-(row.present||0))}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    <div class="rpt-jay-swaminarayan">જય સ્વામિનારાયણ</div>`;
}

function addReportSection(newPage){
  captureReportFieldsFromDOM();
  currentReportDraft.sections.push({ id: 's_'+Date.now()+Math.random().toString(36).slice(2,5), title: '', content: '', layout: 'center', imageCount: 0, images: [], newPage: !!newPage });
  renderReportSections();
}
function removeReportSection(idx){
  captureReportFieldsFromDOM();
  openConfirmModal('Remove this section?', 'This will delete its title, content, and images.', () => {
    currentReportDraft.sections.splice(idx, 1);
    renderReportSections();
  }, { confirmLabel: 'Remove', confirmClass: 'bg-red-600 hover:bg-red-700' });
}
function toggleSectionNewPage(idx){
  captureReportFieldsFromDOM();
  const sec = currentReportDraft.sections[idx];
  sec.newPage = !sec.newPage;
  renderReportSections();
}
function setSectionLayout(idx, layout){
  captureReportFieldsFromDOM();
  currentReportDraft.sections[idx].layout = layout;
  renderReportSections();
}
function setSectionGap(idx, val){
  captureReportFieldsFromDOM();
  currentReportDraft.sections[idx].textImageGap = Math.max(0, Math.min(80, parseInt(val) || 0));
  renderReportSections();
}
function setSectionSpacing(idx, val){
  captureReportFieldsFromDOM();
  currentReportDraft.sections[idx].sectionGap = Math.max(0, Math.min(60, parseInt(val) || 0));
  renderReportSections();
}
function setImageCount(idx, val){
  captureReportFieldsFromDOM();
  const count = Math.max(0, Math.min(6, parseInt(val)||0));
  const sec = currentReportDraft.sections[idx];
  sec.imageCount = count;
  while(sec.images.length < count) sec.images.push(newImageObj());
  if(sec.images.length > count) sec.images = sec.images.slice(0, count);
  renderReportSections();
}
function setImageProp(idx, slot, prop, value){
  captureReportFieldsFromDOM();
  const img = currentReportDraft.sections[idx].images[slot];
  if(!img) return;
  if(prop === 'fit' || prop === 'frameStyle'){ img[prop] = value; }
  else { img[prop] = Math.max(0, parseInt(value) || 0); }
  renderReportSections();
}
/* ---- Purely informational: "Fill Box" (object-fit:cover) already crops on its own to
   match the box's aspect ratio — this shows roughly how much, as a text hint only. It
   does NOT touch the actual crop fields, which stay a separate, independent manual tool
   (default 0) — applying this calculated amount AS the crop too was double-cropping the
   image (cover's own built-in crop, PLUS the same amount again via clip-path). ---- */
function showCoverCropHint(img, hintElId){
  const el = document.getElementById(hintElId);
  if(!el) return;
  const probe = new Image();
  probe.onload = () => {
    const boxRatio = (img.width||200) / (img.height||200);
    const imgRatio = probe.naturalWidth / probe.naturalHeight;
    let msg;
    if(Math.abs(imgRatio - boxRatio) < 0.02){
      msg = 'આ Size માટે Cover Mode લગભગ Crop નહીં કરે.';
    } else if(imgRatio > boxRatio){
      const visibleWidthFrac = boxRatio / imgRatio;
      const cropSide = Math.round((1 - visibleWidthFrac) / 2 * 100);
      msg = `Cover Mode આપોઆપ ડાબે-જમણે ~${cropSide}% Crop કરશે (Box કરતાં Image પહોળી છે).`;
    } else {
      const visibleHeightFrac = imgRatio / boxRatio;
      const cropSide = Math.round((1 - visibleHeightFrac) / 2 * 100);
      msg = `Cover Mode આપોઆપ ઉપર-નીચે ~${cropSide}% Crop કરશે (Box કરતાં Image ઊંચી છે).`;
    }
    el.textContent = msg;
  };
  probe.src = img.src;
}

function removeSectionImage(idx, slot){
  captureReportFieldsFromDOM();
  const sec = currentReportDraft.sections[idx];
  sec.images[slot] = newImageObj();
  renderReportSections();
}
function setTitleAlign(align){
  currentReportDraft.titleAlign = align;
  updateTitleAlignButtons();
}
function updateTitleAlignButtons(){
  const align = currentReportDraft.titleAlign || 'center';
  ['left','center','right'].forEach(a => {
    const btn = document.getElementById('titleAlignBtn_' + a);
    if(!btn) return;
    if(a === align){ btn.classList.add('bg-crm-primary','text-white','border-crm-primary'); btn.classList.remove('border-crm-border','text-crm-textMuted'); }
    else { btn.classList.remove('bg-crm-primary','text-white','border-crm-primary'); btn.classList.add('border-crm-border','text-crm-textMuted'); }
  });
}

const META_LAYOUTS = [
  { key: 'center', label: 'Images Below Details', icon: 'fa-align-center' },
  { key: 'right', label: 'Details Left, Images Right', icon: 'fa-align-right' },
  { key: 'left', label: 'Details Right, Images Left', icon: 'fa-align-left' },
  { key: 'both', label: 'Details Center, Images Both Sides', icon: 'fa-arrows-left-right' }
];
function renderMetaImageControls(){
  const container = document.getElementById('repMetaImageControls');
  if(!container) return;
  const r = currentReportDraft;
  const layout = r.metaLayout || 'center';
  const images = r.metaImages || [];
  const count = r.metaImageCount || images.length || 0;
  const imgSlotsHtml = Array.from({length: count}).map((_, slot) => {
    const img = images[slot];
    return `<div style="border:1px solid #ecdfe1;border-radius:10px;padding:12px;margin-bottom:10px">
      <label class="text-[11px] text-crm-textMuted font-medium block mb-2">Image ${slot+1}</label>
      ${img && img.src ? `
        <div class="flex items-start gap-3 mb-2">
          <img src="${esc(img.src)}" class="w-16 h-16 rounded-lg object-cover border border-crm-border cursor-pointer flex-shrink-0" onclick="openPhotoLightbox('${esc(img.src).replace(/'/g,"\\'")}')">
          <div style="flex:1" class="grid grid-cols-2 gap-2">
            <div><label class="text-[10px] text-crm-textMuted">Width (px)</label><input type="number" min="40" max="650" value="${img.width||200}" onchange="setMetaImageProp(${slot},'width',this.value)" style="padding:5px 8px;font-size:11px"></div>
            <div><label class="text-[10px] text-crm-textMuted">Height (px)</label><input type="number" min="40" max="650" value="${img.height||200}" onchange="setMetaImageProp(${slot},'height',this.value)" style="padding:5px 8px;font-size:11px"></div>
            <div class="col-span-2"><label class="text-[10px] text-crm-textMuted">Display Mode</label>
              <select onchange="setMetaImageProp(${slot},'fit',this.value)" style="padding:5px 8px;font-size:11px">
                <option value="cover" ${(!img.fit||img.fit==='cover')?'selected':''}>Fill Box (may crop edges)</option>
                <option value="contain" ${img.fit==='contain'?'selected':''}>Fit Whole Image (no cropping)</option>
              </select>
            </div>
            <div class="col-span-2"><label class="text-[10px] text-crm-textMuted">Frame Design</label>
              <select onchange="setMetaImageProp(${slot},'frameStyle',this.value)" style="padding:5px 8px;font-size:11px">
                ${Object.keys(FRAME_STYLES).map(key => `<option value="${key}" ${(img.frameStyle||'plain')===key?'selected':''}>${FRAME_STYLES[key].label}</option>`).join('')}
              </select>
            </div>
          </div>
        </div>
        <button onclick="removeMetaImage(${slot})" class="text-[11px] text-red-500 hover:text-red-700"><i class="fas fa-trash mr-1"></i>Remove This Image</button>
      ` : `<input type="file" accept="image/jpeg,image/jpg,image/png" onchange="handleMetaImageUpload(event,${slot})" class="text-xs">`}
    </div>`;
  }).join('');
  container.innerHTML = `
    <div class="rec-field mb-4">
      <label>Meeting Details Image Layout</label>
      <div class="grid grid-cols-2 gap-2">
        ${META_LAYOUTS.map(L => `
          <button type="button" onclick="setMetaLayout('${L.key}')" class="py-2 px-3 rounded-lg text-xs border text-left flex items-center gap-2 ${layout===L.key ? 'bg-crm-primary text-white border-crm-primary' : 'border-crm-border text-crm-textMuted'}">
            <i class="fas ${L.icon}"></i> ${L.label}
          </button>`).join('')}
      </div>
    </div>
    <div class="rec-field mb-3">
      <label>Number of Images</label>
      <input type="number" min="0" max="6" value="${count}" onchange="setMetaImageCount(this.value)" style="width:100px">
      <span class="text-[11px] text-crm-textMuted ml-2">0 થી 6</span>
    </div>
    ${images.length ? `<div class="rec-field mb-3">
      <label>${layout === 'center' ? 'Details ↔ Image (ઉપર-નીચે) Gap (px)' : 'Details ↔ Image વચ્ચેનું Gap (px)'}</label>
      <input type="number" min="0" max="80" value="${r.metaGap !== undefined && r.metaGap !== null ? r.metaGap : 16}" onchange="setMetaGap(this.value)" style="width:100px">
    </div>` : ''}
    <div class="rec-field">${imgSlotsHtml}</div>
  `;
}
function setMetaLayout(layout){
  captureReportFieldsFromDOM();
  currentReportDraft.metaLayout = layout;
  renderMetaImageControls();
}
function setMetaGap(val){
  captureReportFieldsFromDOM();
  currentReportDraft.metaGap = Math.max(0, Math.min(80, parseInt(val) || 0));
  renderMetaImageControls();
}
function setMetaImageCount(val){
  captureReportFieldsFromDOM();
  const count = Math.max(0, Math.min(6, parseInt(val)||0));
  const r = currentReportDraft;
  r.metaImageCount = count;
  if(!r.metaImages) r.metaImages = [];
  while(r.metaImages.length < count) r.metaImages.push(newImageObj());
  if(r.metaImages.length > count) r.metaImages = r.metaImages.slice(0, count);
  renderMetaImageControls();
}
function setMetaImageProp(slot, prop, value){
  captureReportFieldsFromDOM();
  const img = currentReportDraft.metaImages[slot];
  if(!img) return;
  if(prop === 'fit' || prop === 'frameStyle'){ img[prop] = value; }
  else { img[prop] = Math.max(0, parseInt(value) || 0); }
  renderMetaImageControls();
}
function removeMetaImage(slot){
  captureReportFieldsFromDOM();
  currentReportDraft.metaImages[slot] = newImageObj();
  renderMetaImageControls();
}
async function handleMetaImageUpload(event, slot){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  captureReportFieldsFromDOM();
  const raw = await readFileAsResizedDataUrl(file, 1400);
  const existing = currentReportDraft.metaImages[slot] || newImageObj();
  existing.src = raw;
  currentReportDraft.metaImages[slot] = existing;
  renderMetaImageControls();
}

function handleContentKeydown(evt){
  if((evt.ctrlKey || evt.metaKey) && evt.key.toLowerCase() === 'b'){
    evt.preventDefault();
    const ta = evt.target;
    const start = ta.selectionStart, end = ta.selectionEnd;
    if(start === end) return;
    const before = ta.value.slice(0, start), selected = ta.value.slice(start, end), after = ta.value.slice(end);
    const alreadyBold = before.endsWith('**') && after.startsWith('**');
    if(alreadyBold){
      ta.value = before.slice(0, -2) + selected + after.slice(2);
      ta.setSelectionRange(start-2, end-2);
    } else {
      ta.value = before + '**' + selected + '**' + after;
      ta.setSelectionRange(start+2, end+2);
    }
  }
}

/* Tracks report IDs whose save-to-server is still in flight, so a background refresh
   from the server can't accidentally overwrite/erase a report that's still being
   pushed but hasn't been confirmed written yet (the exact cause of the earlier
   "report disappears right after saving" bug). This lets the save feel instant —
   local save + notification + navigation all happen immediately — while the actual
   upload happens in the background, without reintroducing that race condition. */
let pendingServerPushes = new Set();
async function saveCurrentReport(){
  if(!canEditReporting()){ showToast('You do not have permission to save reports.'); return false; }
  captureReportFieldsFromDOM();
  if(!currentReportDraft.title){ showToast('Please enter a title.'); return false; }
  const list = loadReportsData();
  const idx = list.findIndex(r => r.id === currentReportDraft.id);
  if(idx >= 0) list[idx] = currentReportDraft; else list.push(currentReportDraft);
  saveReportsToStorage();
  logActivity(currentUserRole||'admin', currentUserRole==='admin'?'admin':(currentUserRecord?currentUserRecord.mobile:''), currentUserRole==='admin'?'Admin':(currentUserRecord?currentUserRecord.name:''), `Saved report: ${currentReportDraft.title}`);
  showToast('Report saved on this device — uploading to server…', 3000);
  clearFormDirty();
  switchModule('reporting');
  // Upload to the server in the BACKGROUND — the save itself (what the person sees:
  // the notification and returning to the list) already happened instantly above.
  // Large reports with several images can take a real moment to upload; there's no
  // reason to make the person sit and wait for that before they can move on.
  const savedId = currentReportDraft.id;
  const savedSnapshot = currentReportDraft;
  pendingServerPushes.add(savedId);
  pushReportToServer(savedSnapshot).finally(() => { pendingServerPushes.delete(savedId); });
  return true;
}

function confirmDeleteReport(id){
  const list = loadReportsData();
  const rec = list.find(r => r.id === id);
  if(!rec) return;
  openConfirmModal(`Delete "${rec.title || 'Untitled Report'}"?`, 'This cannot be undone.', () => {
    REPORTS_DATA = list.filter(r => r.id !== id);
    saveReportsToStorage();
    deleteReportFromServer(id);
    showToast('Report deleted.');
    renderReportsList();
  });
}

/* ---- Image upload with automatic background removal (best effort, safe fallback) ---- */
function readFileAsResizedDataUrl(file, maxSize){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width, h = img.height;
        if(w > maxSize || h > maxSize){
          if(w > h){ h = Math.round(h*maxSize/w); w = maxSize; } else { w = Math.round(w*maxSize/h); h = maxSize; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        // JPEG @ 0.82 quality instead of PNG — for real photos (not graphics/logos
        // needing transparency) this is typically 5-10x smaller with no visible
        // quality loss, which is the difference between a report uploading in a few
        // seconds vs. timing out on a slow connection.
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
async function removeImageBackgroundToPng(dataUrl, statusEl){
  try{
    if(statusEl) statusEl.textContent = 'Removing background…';
    const mod = await import('https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.5.5/dist/index.js');
    const resultBlob = await mod.removeBackground(dataUrl);
    const pngDataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(resultBlob);
    });
    if(statusEl) statusEl.textContent = 'Background removed.';
    return pngDataUrl;
  }catch(e){
    console.warn('Background removal unavailable, using original image:', e);
    if(statusEl) statusEl.textContent = '';
    return dataUrl;
  }
}
async function handleSectionImageUpload(event, idx, slot){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  captureReportFieldsFromDOM();
  const sec = currentReportDraft.sections[idx];
  // Report photos (meeting/event photos) should keep their real background — background
  // removal was designed for portrait/profile-style photos and made no sense here. It
  // also always produced a PNG (large) even when it did nothing useful, which was the
  // main reason reports with a few ordinary photos became too large to upload reliably.
  const raw = await readFileAsResizedDataUrl(file, 1400);
  const existing = sec.images[slot] || newImageObj();
  existing.src = raw;
  sec.images[slot] = existing;
  renderReportSections();
}

/* ---- Rich content: simple, robust markdown-style parsing (no contenteditable, no
   execCommand — a plain textarea with a few clear markers is far more reliable). ---- */
function renderRichContent(text){
  if(!text) return '';
  const lines = String(text).split('\n');
  let html = ''; let inList = false;
  const applyBold = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  lines.forEach(line => {
    const boxMatch = line.match(/^\s*\[\]\s+(.*)/);
    const bulletMatch = line.match(/^\s*[-•]\s+(.*)/);
    if(boxMatch){
      if(inList){ html += '</ul>'; inList = false; }
      html += `<div class="rpt-boxed">${applyBold(boxMatch[1])}</div>`;
    } else if(bulletMatch){
      if(!inList){ html += '<ul class="rpt-bullets">'; inList = true; }
      html += `<li>${applyBold(bulletMatch[1])}</li>`;
    } else {
      if(inList){ html += '</ul>'; inList = false; }
      if(line.trim()) html += `<p>${applyBold(line)}</p>`;
    }
  });
  if(inList) html += '</ul>';
  return html;
}

/* ---- Build the full printable/preview HTML ---- */
const FRAME_STYLES = {
  plain:    { label: 'Plain (Sharp Corners)', wrap:false, imgCss:'border-radius:0;' },
  rounded:  { label: 'Rounded Corners', wrap:false, imgCss:'border-radius:16px;' },
  cutround: { label: 'Cut + Round Mix', wrap:false, imgCss:'border-radius:0 28px 0 28px;' },
  circle:   { label: 'Circle / Oval', wrap:false, imgCss:'border-radius:50%;' },
  polaroid: { label: 'Polaroid (White Border)', wrap:true, wrapCss:'display:inline-block;background:#fff;padding:8px 8px 20px 8px;box-shadow:0 4px 14px rgba(0,0,0,.18);border-radius:2px;', imgCss:'display:block;border-radius:0;' }
};
function imageStyleFrom(img){
  const w = img.width || 200, h = img.height || 200;
  const fit = img.fit || 'cover';
  const hasManualCrop = (img.cropTop||0) || (img.cropBottom||0) || (img.cropLeft||0) || (img.cropRight||0);
  const clipStyle = hasManualCrop ? `clip-path:inset(${img.cropTop||0}% ${img.cropRight||0}% ${img.cropBottom||0}% ${img.cropLeft||0}%);` : '';
  const frame = FRAME_STYLES[img.frameStyle] || FRAME_STYLES.plain;
  return `width:${w}px;height:${h}px;object-fit:${fit};${clipStyle}${frame.imgCss}`;
}
function renderImageGroup(images, extraClass){
  return images.filter(img => img && img.src).map(img => {
    const imgTag = `<img src="${esc(img.src)}" class="rpt-sec-img ${extraClass||''}" style="${imageStyleFrom(img)}">`;
    const frame = FRAME_STYLES[img.frameStyle] || FRAME_STYLES.plain;
    return frame.wrap ? `<div style="${frame.wrapCss}">${imgTag}</div>` : imgTag;
  }).join('');
}
function getPageGroups(sections){
  // Splits the flat sections array into page-groups: a new group starts at index 0, or
  // wherever a section is explicitly marked newPage:true. Shared by the actual PDF
  // builder and the "is this page full yet" measurement, so what gets measured always
  // exactly matches what actually gets printed.
  const groups = [];
  let current = [];
  sections.forEach((sec, idx) => {
    if(idx > 0 && sec.newPage){ groups.push(current); current = []; }
    current.push(sec);
  });
  if(current.length) groups.push(current);
  return groups;
}
function maxImgWidth(images){
  return images.reduce((max, img) => {
    const frame = FRAME_STYLES[img.frameStyle] || FRAME_STYLES.plain;
    const extra = frame.wrap ? 16 : 0; // polaroid adds 8px+8px horizontal padding
    return Math.max(max, (img.width || 200) + extra);
  }, 0);
}
function wrapWithImageLayout(bodyHtml, layout, images, gap){
  images = (images||[]).filter(img => img && img.src);
  gap = (gap !== undefined && gap !== null) ? gap : 16;
  if(layout === 'imageTop' && images.length){
    return `<div class="rpt-sec-imgrow" style="gap:${gap}px;margin-bottom:${gap}px">${renderImageGroup(images)}</div>${bodyHtml}`;
  } else if(layout === 'center' || !images.length){
    let out = bodyHtml;
    if(images.length) out += `<div class="rpt-sec-imgrow" style="gap:${gap}px;margin-top:${gap}px">${renderImageGroup(images)}</div>`;
    return out;
  } else if(layout === 'right'){
    const w = maxImgWidth(images);
    return `<div class="rpt-sec-grid" style="grid-template-columns:1fr ${w}px;gap:${gap}px">
      <div class="rpt-sec-row-text">${bodyHtml}</div>
      <div class="rpt-sec-imgrow rpt-sec-imgrow-col">${renderImageGroup(images)}</div>
    </div>`;
  } else if(layout === 'left'){
    const w = maxImgWidth(images);
    return `<div class="rpt-sec-grid" style="grid-template-columns:${w}px 1fr;gap:${gap}px">
      <div class="rpt-sec-imgrow rpt-sec-imgrow-col">${renderImageGroup(images)}</div>
      <div class="rpt-sec-row-text">${bodyHtml}</div>
    </div>`;
  } else if(layout === 'both'){
    const half = Math.ceil(images.length/2);
    const leftImgs = images.slice(0, half), rightImgs = images.slice(half);
    const wL = maxImgWidth(leftImgs), wR = maxImgWidth(rightImgs);
    return `<div class="rpt-sec-grid" style="grid-template-columns:${wL}px 1fr ${wR}px;gap:${gap}px">
      <div class="rpt-sec-imgrow rpt-sec-imgrow-col">${renderImageGroup(leftImgs)}</div>
      <div class="rpt-sec-row-text">${bodyHtml}</div>
      <div class="rpt-sec-imgrow rpt-sec-imgrow-col" style="align-items:flex-end">${renderImageGroup(rightImgs)}</div>
    </div>`;
  }
  return bodyHtml;
}
function buildSectionHtml(sec){
  let out = '';
  if(sec.title) out += `<div class="rpt-sec-title">${esc(sec.title)}</div>`;
  const layout = sec.layout || 'center';
  const images = (sec.images || []).filter(img => img && img.src);
  const bodyHtml = `<div class="rpt-sec-body">${renderRichContent(sec.content)}</div>`;
  const gap = (sec.textImageGap !== undefined && sec.textImageGap !== null) ? sec.textImageGap : 16;
  out += wrapWithImageLayout(bodyHtml, layout, images, gap);
  return out;
}

function buildPageInnerHtml(r, group, isFirstPage){
  let html = '';
  if(isFirstPage){
    const titleAlign = r.titleAlign || 'center';
    const metaHtml = `<div class="rpt-meta-grid" style="justify-content:${r.metaAlign==='center'?'center':r.metaAlign==='right'?'flex-end':'flex-start'}">
        ${r.date ? `<div class="rpt-meta-item"><span class="rpt-meta-label">તારીખ</span><span class="rpt-meta-val">${esc(formatReportDate(r.date))}</span></div>` : ''}
        ${r.time ? `<div class="rpt-meta-item"><span class="rpt-meta-label">સમય</span><span class="rpt-meta-val">${esc(r.time)}</span></div>` : ''}
        ${r.attendance ? `<div class="rpt-meta-item"><span class="rpt-meta-label">ઉપસ્થિતિ</span><span class="rpt-meta-val">${esc(String(r.attendance))}</span></div>` : ''}
        ${r.speaker ? `<div class="rpt-meta-item"><span class="rpt-meta-label">વક્તા</span><span class="rpt-meta-val">${esc(r.speaker)}</span></div>` : ''}
        ${r.subject ? `<div class="rpt-meta-item"><span class="rpt-meta-label">વિષય</span><span class="rpt-meta-val">${esc(r.subject)}</span></div>` : ''}
      </div>`;
    html += `<div class="rpt-cover-title" style="text-align:${titleAlign}">${esc(r.title||'')}</div>
      <div class="rpt-cover-rule" style="${titleAlign==='left'?'margin-left:0':titleAlign==='right'?'margin-right:0':''}"></div>
      ${wrapWithImageLayout(metaHtml, r.metaLayout||'center', r.metaImages||[], r.metaGap)}`;
  }
  group.forEach((sec, i) => {
    if(i > 0){
      const sGap = (sec.sectionGap !== undefined && sec.sectionGap !== null) ? sec.sectionGap : 10;
      html += `<div style="margin-top:${sGap}px"></div>`;
    }
    html += buildSectionHtml(sec);
  });
  return html;
}
function buildReportHtml(r){
  const groups = getPageGroups(r.sections);
  let html = groups.map((group, gi) => `<div class="rpt-page">${buildPageInnerHtml(r, group, gi===0)}</div>`).join('');
  const attHtml = buildAttendanceTableHtml(r.attendanceTable);
  if(attHtml) html += `<div class="rpt-page">${attHtml}</div>`;
  return html;
}

/* ---- "Is the current page full yet?" — renders just the LAST page-group's content into
   a hidden A4-sized measuring box and checks for real overflow, so "Add Content Block
   (Same Page)" only shows while there's genuinely still room. ---- */
function isCurrentPageFull(){
  captureReportFieldsFromDOM();
  const r = currentReportDraft;
  const groups = getPageGroups(r.sections);
  const lastGroup = groups[groups.length-1];
  const isFirst = groups.length === 1;
  const innerHtml = buildPageInnerHtml(r, lastGroup, isFirst);
  let measurer = document.getElementById('pageFullnessMeasurer');
  if(!measurer){
    measurer = document.createElement('div');
    measurer.id = 'pageFullnessMeasurer';
    measurer.style.cssText = 'position:fixed;left:-9999px;top:0;width:178mm;height:261mm;overflow:hidden;padding:0;visibility:hidden;font-family:Outfit,sans-serif';
    document.body.appendChild(measurer);
  }
  measurer.innerHTML = innerHtml;
  return measurer.scrollHeight > measurer.clientHeight + 4;
}

function previewReport(){
  captureReportFieldsFromDOM();
  document.getElementById('reportPreviewBody').innerHTML = buildReportHtml(currentReportDraft);
  const modal = document.getElementById('reportPreviewModal');
  modal.style.display = 'block'; // NOT 'flex' — display:flex on this outer wrapper (without
  modal.scrollTop = 0;           // justify-content:center) was what pushed the already-
}                                 // self-centering .rpt-doc content to the left every time.
function closeReportPreview(){
  document.getElementById('reportPreviewModal').style.display = 'none';
}
/* Defensive cleanup: guarantees Reporting's print state can never bleed into another
   module's print output. The bug this fixes: downloadReportPdf() only cleared
   'printing-report' via a delayed setTimeout AFTER triggering window.print() — if the
   person closed that print dialog quickly, or the browser paused timers while the
   dialog was open (common browser behavior), the class could stay stuck on <body>.
   Later, printing something else entirely (like Seva Samiti) would then ALSO satisfy
   the print rule "body.printing-report #reportPrintArea{ display:block }", making the
   old, stale Reporting content show up mixed in with it. Every OTHER print function
   now calls this first, so no matter what state Reporting's print left behind, it's
   guaranteed clean before anything else prints. */
function clearReportPrintState(){
  document.body.classList.remove('printing-report');
  const area = document.getElementById('reportPrintArea');
  if(area){ area.innerHTML = ''; area.className = 'hidden'; }
}
function downloadReportPdf(){
  captureReportFieldsFromDOM();
  const area = document.getElementById('reportPrintArea');
  area.className = 'hidden rpt-doc';
  area.innerHTML = buildReportHtml(currentReportDraft);
  document.body.classList.add('printing-report');
  // Wait for every image inside the print area to actually finish loading/decoding
  // before printing — calling window.print() while images (especially several on one
  // page) were still loading was exactly what made that page render blank or get
  // skipped in the output PDF, even though the same content showed correctly on
  // screen in Preview (which isn't subject to the same print-snapshot timing).
  const images = Array.from(area.querySelectorAll('img'));
  const waitForImages = images.length
    ? Promise.all(images.map(img => img.complete ? Promise.resolve() : new Promise(res => { img.onload = res; img.onerror = res; })))
    : Promise.resolve();
  waitForImages.then(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      window.print();
      setTimeout(() => document.body.classList.remove('printing-report'), 500);
    }));
  });
}

/* ---- Change Password ---- */
function loadAdminPassword(){
  try{ return localStorage.getItem('yuvaSabhaAdminPassword') || ADMIN_PASSWORD; }catch(e){ return ADMIN_PASSWORD; }
}
function saveAdminPassword(pwd){
  try{ localStorage.setItem('yuvaSabhaAdminPassword', pwd); }catch(e){}
}
function findCredForRecord(record){
  if(!record) return null;
  const creds = loadSignupCredentials();
  return creds.find(c =>
    (c.email && record.email && c.email.toLowerCase()===record.email.toLowerCase()) ||
    (c.smk && record.smk && String(c.smk).trim().toUpperCase()===String(record.smk).trim().toUpperCase())
  ) || null;
}
function getStoredPasswordForRecord(record){
  const cred = findCredForRecord(record);
  return cred ? cred.password : null;
}
function getCurrentStoredPassword(){
  if(currentUserRole==='admin') return loadAdminPassword();
  return getStoredPasswordForRecord(currentUserRecord);
}
function resetChangePasswordForm(){
  ['cpOldPassword','cpNewPassword','cpConfirmPassword'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('cpOldCheckIcon').classList.add('hidden');
  document.getElementById('cpConfirmError').classList.add('hidden');
}
function toggleCpVisibility(inputId, iconEl){
  const input = document.getElementById(inputId);
  const showing = input.type==='text';
  input.type = showing ? 'password' : 'text';
  iconEl.classList.toggle('fa-eye', showing);
  iconEl.classList.toggle('fa-eye-slash', !showing);
}
function validateOldPassword(){
  const val = document.getElementById('cpOldPassword').value;
  const stored = getCurrentStoredPassword();
  document.getElementById('cpOldCheckIcon').classList.toggle('hidden', !(val && stored && val===stored));
}

function validateCpConfirm(){
  const newPwd = document.getElementById('cpNewPassword').value;
  const confirmPwd = document.getElementById('cpConfirmPassword').value;
  document.getElementById('cpConfirmError').classList.toggle('hidden', !confirmPwd || newPwd===confirmPwd);
}
function findMemberByEmail(email){
  const e = String(email||'').trim().toLowerCase();
  if(!e) return null;
  return (MODULES.members.data || []).find(r => String(r.email||'').trim().toLowerCase() === e) || null;
}
function showForgotPasswordInfo(){
  openTextPromptModal('Reset your password', 'Enter your email address', async (email) => {
    const m = findMemberByEmail(email);
    const logRole = m ? (m.role === 'પોષક લીડર' ? 'poshak' : 'yuva') : 'yuva';
    logActivity(logRole, m ? m.mobile : '', m ? m.name : email, `Requested password reset link (email: ${email})`);
    if(useBackend){
      try{
        const res = await fetch(`${API_BASE}/auth.php?action=forgot_password`, {
          method: 'POST', headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ email: email })
        });
        const data = await res.json();
        showToast(data.message || 'If this email is registered, a reset link has been sent.');
        return;
      }catch(e){
        console.warn('Backend unreachable:', e);
      }
    }
    showToast('Please contact your Admin to reset your password.');
  });
}
async function submitChangePassword(){
  const oldPwd = document.getElementById('cpOldPassword').value;
  const newPwd = document.getElementById('cpNewPassword').value;
  const confirmPwd = document.getElementById('cpConfirmPassword').value;

  if(!oldPwd){ showToast('Please enter your old password.'); return; }
  if(!newPwd){ showToast('Please enter a new password.'); return; }
  if(newPwd !== confirmPwd){ showToast('New password and confirm password do not match.'); return; }
  if(newPwd === oldPwd){ showToast('New password must be different from old password.'); return; }

  const accountEmail = currentUserRole==='admin' ? 'admin' : (currentUserRecord ? currentUserRecord.email : '');
  const accountSmk = currentUserRole==='admin' ? '' : (currentUserRecord ? currentUserRecord.smk : '');

  if(useBackend){
    try{
      const res = await fetch(`${API_BASE}/auth.php?action=change_password`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email: accountEmail, smk: accountSmk, old_password: oldPwd, new_password: newPwd })
      });
      const data = await res.json();
      if(!res.ok){ showToast(data.error || 'Could not change password.'); return; }
      logChangePasswordActivity();
      showToast('Password changed successfully!');
      resetChangePasswordForm();
      return;
    }catch(e){
      console.warn('Backend unreachable, using local fallback:', e);
    }
  }

  const stored = getCurrentStoredPassword();
  if(!stored){ showToast('Could not verify your account. Please contact admin.'); return; }
  if(oldPwd !== stored){ showToast('Old password is incorrect.'); return; }

  if(currentUserRole==='admin'){
    saveAdminPassword(newPwd);
  } else {
    const creds = loadSignupCredentials();
    const cred = creds.find(c =>
      (c.email && currentUserRecord && c.email.toLowerCase()===(currentUserRecord.email||'').toLowerCase()) ||
      (c.smk && currentUserRecord && currentUserRecord.smk && String(c.smk).trim().toUpperCase()===String(currentUserRecord.smk).trim().toUpperCase())
    );
    if(cred) cred.password = newPwd;
    saveSignupCredentials(creds);
  }
  logChangePasswordActivity();
  showToast('Password changed successfully!');
  resetChangePasswordForm();
}
function logChangePasswordActivity(){
  const displayName = currentUserRole==='admin' ? 'Admin' : (currentUserRecord ? currentUserRecord.name : '');
  const identifier = currentUserRole==='admin' ? 'admin' : (currentUserRecord ? currentUserRecord.mobile : '');
  logActivity(currentUserRole, identifier, displayName, 'Changed password');
}

let pendingChangesCache = null;
function loadPendingChanges(){
  if(pendingChangesCache !== null) return pendingChangesCache;
  try{ return JSON.parse(localStorage.getItem('yuvaSabhaPendingChanges') || '[]'); }catch(e){ return []; }
}
async function loadPendingChangesFromBackend(){
  if(!useBackend) return;
  try{
    const res = await cachedFetch(`${API_BASE}/pending_changes.php?_ts=${Date.now()}`, { cache: 'no-store' });
    if(res.ok){
      pendingChangesCache = await res.json();
      console.log('Loaded pending changes from database:', pendingChangesCache.length, 'entries.');
    }
  }catch(e){
    console.warn('Backend unreachable for pending changes, using local fallback:', e);
  }
}
function savePendingChanges(list){
  pendingChangesCache = list;
  try{ localStorage.setItem('yuvaSabhaPendingChanges', JSON.stringify(list)); }catch(e){}
}
async function submitForApproval(moduleKey, recordIdx, proposedRecord){
  const pending = loadPendingChanges().filter(p => !(p.module===moduleKey && p.recordSmk===proposedRecord.smk));
  const role = currentUserRole;
  const mobile = normMob(currentUserRecord ? currentUserRecord.mobile : '');
  const newEntry = {
    id: Date.now() + '-' + Math.random().toString(36).slice(2),
    module: moduleKey,
    recordSmk: proposedRecord.smk,
    role: role,
    mobile: mobile,
    proposedRecord: proposedRecord,
    submittedAt: new Date().toISOString()
  };

  if(useBackend){
    try{
      const res = await fetch(`${API_BASE}/pending_changes.php`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ module: moduleKey, recordSmk: proposedRecord.smk, role, mobile, proposedRecord })
      });
      const data = await res.json();
      if(res.ok && data.id) newEntry.id = data.id;
    }catch(e){
      console.warn('Pending change sync failed, saved locally only:', e);
    }
  }
  pending.push(newEntry);
  savePendingChanges(pending);
  updateApprovalsBadge();
}
function getFieldLabel(moduleKey, fieldKey){
  const secs = MODULES[moduleKey].sections;
  for(const sec of secs){
    for(const f of sec.fields){
      if(f[0]===fieldKey) return f[1];
    }
  }
  return fieldKey;
}
function computeFieldDiffs(moduleKey, oldRec, newRec){
  const diffs = [];
  const skip = new Set(['idx','id','initials','profile_completed','created_at','updated_at']);
  const allKeys = new Set([...Object.keys(oldRec||{}), ...Object.keys(newRec||{})]);
  allKeys.forEach(k => {
    if(skip.has(k)) return;
    let a = oldRec ? oldRec[k] : undefined;
    let b = newRec[k];
    if(Array.isArray(a)) a = a.join(', ');
    if(Array.isArray(b)) b = b.join(', ');
    if(JSON.stringify(a) !== JSON.stringify(b)){
      diffs.push({ field: getFieldLabel(moduleKey, k), from: (a===undefined||a===null||a==='') ? '(empty)' : String(a), to: (b===undefined||b===null||b==='') ? '(empty)' : String(b) });
    }
  });
  return diffs;
}
function diffFields(oldRec, newRec){
  const changed = [];
  Object.keys(newRec).forEach(k => {
    const a = JSON.stringify(oldRec ? oldRec[k] : undefined);
    const b = JSON.stringify(newRec[k]);
    if(a !== b && k!=='idx') changed.push(k);
  });
  return changed;
}
function renderApprovalsTable(){
  const tbody = document.getElementById('approvalsTableBody');
  const pending = loadPendingChanges();
  if(!pending.length){
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-10 text-crm-textMuted">No pending changes to review.</td></tr>`;
    return;
  }
  window._pendingApprovalRows = pending;
  tbody.innerHTML = pending.map((p,i) => {
    const orig = MODULES[p.module].data.find(r => r.smk === p.recordSmk) || {};
    const diffs = computeFieldDiffs(p.module, orig, p.proposedRecord);
    const who = p.proposedRecord[MODULES[p.module].nameField] || orig[MODULES[p.module].nameField] || '';
    return `<tr class="fade-in cursor-pointer hover:bg-slate-50" onclick="openApprovalDetail(${i})">
      <td>${i+1}</td>
      <td>${esc(MODULES[p.module].label)}</td>
      <td>${esc(who)}</td>
      <td>Edited Record <i class="fas fa-circle-info text-crm-primary/50 text-[11px] ml-1"></i></td>
      <td>${esc(formatDateTime(p.submittedAt))}</td>
      <td class="text-right" onclick="event.stopPropagation()">
        <div class="flex justify-end gap-2">
          <button onclick="approveChange('${p.id}')" class="px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-700">Approve</button>
          <button onclick="declineChange('${p.id}')" class="px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-red-500 hover:bg-red-600">Decline</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}
function openApprovalDetail(rowIdx){
  const p = window._pendingApprovalRows[rowIdx];
  if(!p) return;
  const orig = MODULES[p.module].data.find(r => r.smk === p.recordSmk) || {};
  const diffs = computeFieldDiffs(p.module, orig, p.proposedRecord);
  const who = p.proposedRecord[MODULES[p.module].nameField] || orig[MODULES[p.module].nameField] || '';
  openFieldDiffModal(`${who} — Edited Record`, `Submitted ${formatDateTime(p.submittedAt)}`, diffs);
}
async function approveChange(id){
  const pending = loadPendingChanges();
  const entry = pending.find(p => String(p.id)===String(id));
  if(!entry){
    updateApprovalsBadge();
    renderApprovalsTable();
    return;
  }
  const idx = MODULES[entry.module].data.findIndex(r => r.smk === entry.recordSmk);
  if(idx !== -1) MODULES[entry.module].data[idx] = entry.proposedRecord;
  saveData(entry.module);
  // Wait for the server to actually confirm the save BEFORE declaring this approved —
  // otherwise a refresh moments later could race ahead of the still-in-flight save and
  // fetch the old, pre-approval data, making the just-approved change look like it
  // never happened.
  const synced = await syncRecordToBackend(entry.module, entry.proposedRecord, false);
  if(synced === false){
    showToast('⚠️ Could not save the approved change to the server. It has NOT been marked approved — please try again.', 10000);
    renderApprovalsTable();
    return; // keep the pending entry so it can be retried — don't delete it on a failed sync
  }
  const who = entry.proposedRecord[MODULES[entry.module].nameField] || '';
  logActivity('admin', 'admin', 'Admin', `Approved edit for ${who} (${MODULES[entry.module].label})`);
  savePendingChanges(pending.filter(p => String(p.id)!==String(id)));
  if(useBackend){
    try{ await fetch(`${API_BASE}/pending_changes.php?id=${encodeURIComponent(id)}`, { method: 'DELETE' }); }
    catch(e){ console.warn('Approval-queue cleanup sync failed (change itself is already saved):', e); }
  }
  showToast('✔ Change approved and saved.');
  updateApprovalsBadge();
  renderApprovalsTable();
}
function declineChange(id){
  const pending = loadPendingChanges();
  const entry = pending.find(p => String(p.id)===String(id));
  if(entry){
    const orig = MODULES[entry.module].data.find(r => r.smk === entry.recordSmk);
    const who = (orig && orig[MODULES[entry.module].nameField]) || entry.proposedRecord[MODULES[entry.module].nameField] || '';
    logActivity('admin', 'admin', 'Admin', `Declined edit for ${who} (${MODULES[entry.module].label})`);
  }
  savePendingChanges(pending.filter(p => String(p.id)!==String(id)));
  if(useBackend && entry){
    fetch(`${API_BASE}/pending_changes.php?id=${encodeURIComponent(id)}`, { method: 'DELETE' }).catch(e => console.warn('Decline sync failed:', e));
  }
  showToast('Change declined.');
  updateApprovalsBadge();
  renderApprovalsTable();
}
function updateApprovalsBadge(){
  const n = loadPendingChanges().length;
  const badge = document.getElementById('approvalsBadge');
  if(!badge) return;
  badge.textContent = n;
  badge.classList.toggle('hidden', n===0);
}

function switchAuthTab(tab){
  document.getElementById('authSignin').classList.toggle('hidden', tab!=='signin');
  document.getElementById('authSignup').classList.toggle('hidden', tab!=='signup');
  document.getElementById('authTabSignin').classList.toggle('text-crm-primary', tab==='signin');
  document.getElementById('authTabSignin').classList.toggle('border-crm-primary', tab==='signin');
  document.getElementById('authTabSignin').classList.toggle('text-crm-textMuted', tab!=='signin');
  document.getElementById('authTabSignin').classList.toggle('border-transparent', tab!=='signin');
  document.getElementById('authTabSignup').classList.toggle('text-crm-primary', tab==='signup');
  document.getElementById('authTabSignup').classList.toggle('border-crm-primary', tab==='signup');
  document.getElementById('authTabSignup').classList.toggle('text-crm-textMuted', tab!=='signup');
  document.getElementById('authTabSignup').classList.toggle('border-transparent', tab!=='signup');
}

// 'સહસંચાલક' (deputy) isn't its own value in Members.role — it's a પોષક લીડર
// record with is_chief_deputy === 'હા'. Used to verify the sign-in role choice
// against a member's actual role.
function memberMatchesDropdownRole(member, roleValue){
  if(roleValue === 'સહસંચાલક') return member.role === 'પોષક લીડર' && member.is_chief_deputy === 'હા';
  return member.role === roleValue;
}
function getAllSmkOptions(){
  return (MODULES.members.data || []).filter(m => m.smk).map(m => ({
    smk: m.smk, label: (m.name || m.name_gujarati || 'Unnamed') + ' — SMK: ' + m.smk
  }));
}

function onLoginRoleChange(){
  const role = document.getElementById('loginRole').value;
  const isAdmin = role === 'admin';
  document.getElementById('adminPasswordWrap').classList.toggle('hidden', !isAdmin);
  document.getElementById('loginEmailWrap').classList.toggle('hidden', isAdmin);
  document.getElementById('loginPasswordWrap').classList.toggle('hidden', isAdmin);
}

function showAuthError(msg){
  const el = document.getElementById('authSigninError');
  el.textContent = msg; el.classList.remove('hidden');
}

function loadSignupCredentials(){
  try{ return JSON.parse(localStorage.getItem('yuvaSabhaSignupCredentials') || '[]'); }catch(e){ return []; }
}
function saveSignupCredentials(list){
  try{ localStorage.setItem('yuvaSabhaSignupCredentials', JSON.stringify(list)); }catch(e){}
}
// Detects whether a string contains Gujarati script (used to tell a properly
// Gujarati-written full_name apart from one accidentally saved in English).
const GUJARATI_SCRIPT_RE = /[\u0A80-\u0AFF]/;
function isFullNameGujarati(fullName){
  return GUJARATI_SCRIPT_RE.test(String(fullName || ''));
}
// Best-effort English → Gujarati transliteration for auto-filling "Full Name
// (Gujarati)" on new members. This is phonetic guesswork, not a dictionary — vowel
// length (i vs ii, u vs uu) especially can come out wrong since English spelling
// doesn't reliably distinguish them. That's expected and fine: this only ever fills
// an EMPTY field, so the admin reviews and can correct it by hand, same as any
// other auto-filled suggestion.
const GUJ_TRANSLIT_VOWELS_INDEP = [
  ['aa','આ'],['ii','ઈ'],['ee','ઈ'],['uu','ઊ'],['oo','ઊ'],['ai','ઐ'],['au','ઔ'],
  ['a','અ'],['i','ઇ'],['u','ઉ'],['e','એ'],['o','ઓ']
];
const GUJ_TRANSLIT_VOWEL_MATRA = {
  'aa':'ા','ii':'ી','ee':'ી','uu':'ૂ','oo':'ૂ','ai':'ૈ','au':'ૌ',
  'a':'','i':'િ','u':'ુ','e':'ે','o':'ો'
};
const GUJ_TRANSLIT_CONSONANTS = [
  ['chh','છ'],['shh','ષ'],['ksh','ક્ષ'],['gy','જ્ઞ'],
  ['kh','ખ'],['gh','ઘ'],['ch','ચ'],['jh','ઝ'],['th','થ'],['dh','ધ'],['ph','ફ'],['bh','ભ'],['sh','શ'],
  ['k','ક'],['g','ગ'],['j','જ'],['t','ત'],['d','દ'],['n','ન'],['p','પ'],['b','બ'],['m','મ'],
  ['y','ય'],['r','ર'],['l','લ'],['v','વ'],['w','વ'],['s','સ'],['h','હ'],['f','ફ'],['c','ક'],['z','ઝ'],['x','ક્સ']
];
// Merges existing free-text data into the new canonical dropdown values for Father's
// Job and Own Job Detail — e.g. "ખેતી" and "ફાર્મિંગ" both become "ફાર્મર"/"Farmer", and
// any "ઓનલાઇન" (online) variant becomes "E-Commerce" (except "Online Printing", which
// stays its own distinct category).
function normalizeFatherJob(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/^ધંધો$|^business$/.test(low)) return 'Business';
  if(/ખેતી|farming|^farmer$|^kheti$/.test(low)) return 'Farmer';
  if(/નિવૃત્ત|retired/.test(low)) return 'Retired';
  if(/હીરા\s*દલાલી|diamond\s*broker/.test(low)) return 'Diamond Broker';
  if(/હીરા\s*નોકરી|diamond\s*job/.test(low)) return 'Diamond Job';
  if(/^ડાયમંડ$|^diamond$|^daymond$|^હીરા$|^hira$/.test(low)) return 'Diamond';
  if(/ટીચિંગ|teaching/.test(low)) return 'Teaching';
  if(/^નોકરી$|^job$/.test(low)) return 'Job';
  if(/^na$|not applicable|લાગુ પડતું નથી/.test(low)) return 'Not Applicable';
  return v;
}
// Work Status / Work Field dropdowns switched from Gujarati to English — these remap
// existing saved data onto the new options.
function normalizeWorkStatus(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/પ્રાઇવેટ|private/.test(low)) return 'Private Job';
  if(/ફક્ત\s*વિદ્યાર્થી|only\s*student/.test(low)) return 'Only Student';
  if(/ફ્રીલાન્સ|freelance/.test(low)) return 'Freelance';
  // The real saved data uses a hyphen ("સ્વ-રોજગાર") — matching only "સ્વરોજગાર"
  // (no hyphen) silently failed here, which is exactly why the old Gujarati value
  // kept showing up as an extra, unconverted option alongside the new English one.
  if(/સ્વ-?રોજગાર|business|self-?employed/.test(low)) return 'Self-Employed / Business';
  if(/હાલ\s*કામ\s*કરતો\s*નથી|not working/.test(low)) return 'Not Working Currently';
  return v;
}
function normalizeWorkField(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/^na$|not applicable|લાગુ પડતું નથી/.test(low)) return 'Not Applicable';
  if(/e-?commerce|ઈ-કોમર્સ|ઓનલાઇન/.test(low)) return 'E-Commerce';
  if(/ટેક્સટાઇલ|^textile$/.test(low)) return 'Textile';
  return v;
}
// Satsang in Home switched to an English multiselect — this remaps each comma-separated
// existing token onto the new options, expanding combo phrases like "બંને (પિતા અને
// માતા)" into two separate selections (Father + Mother) since the multiselect can
// already represent that combination natively.
function normalizeSatsangInHomeToken(tok){
  const low = tok.trim().toLowerCase();
  if(/આખું\s*કુટુંબ|full\s*family/.test(low)) return ['Full Family'];
  if(/ઘરમાં\s*ફક્ત\s*હું\s*એકલો|only\s*me/.test(low)) return ['Only Me at Home'];
  if(/બંને.*પિતા.*માતા/.test(low)) return ['Father','Mother'];
  if(/^પિતા$|^father$/.test(low)) return ['Father'];
  if(/^માતા$|^mother$/.test(low)) return ['Mother'];
  if(/દાદા.*grandfather|paternal\s*grandfather/.test(low)) return ['Paternal Grandfather'];
  if(/દાદી.*grandmother|paternal\s*grandmother/.test(low)) return ['Paternal Grandmother'];
  if(/નાના.*grandfather|maternal\s*grandfather/.test(low)) return ['Maternal Grandfather'];
  if(/નાની.*grandmother|maternal\s*grandmother/.test(low)) return ['Maternal Grandmother'];
  if(/મોટો\s*ભાઈ|older\s*brother/.test(low)) return ['Older Brother'];
  if(/નાનો\s*ભાઈ|young(er)?\s*brother|small\s*brother/.test(low)) return ['Younger Brother'];
  if(/મોટી\s*બહેન|older\s*sister/.test(low)) return ['Older Sister'];
  if(/નાની\s*બહેન|younger\s*sister/.test(low)) return ['Younger Sister'];
  if(/uncle.*aunt|uncle.*આંટી|અંકલ.*આંટી/.test(low)) return ['Uncle','Aunty'];
  if(/^uncle$|^અંકલ$/.test(low)) return ['Uncle'];
  if(/^aunt$|^aunty$|^આંટી$/.test(low)) return ['Aunty'];
  return [tok.trim()]; // unrecognized — keep as its own fallback option rather than dropping it
}
function normalizeSatsangInHome(v){
  if(!v) return v;
  const tokens = String(v).split(',').map(s=>s.trim()).filter(Boolean);
  const out = [];
  tokens.forEach(t => normalizeSatsangInHomeToken(t).forEach(x => { if(!out.includes(x)) out.push(x); }));
  return out.join(', ');
}
// Seva tab fields switched from Gujarati to English — these remap existing data.
function normalizeLocalSevaWhatToken(tok){
  const low = tok.trim().toLowerCase();
  if(/it.*સાઉન્ડ.*પ્રોજેક્ટર/.test(low)) return ['IT','Sound','Projector'];
  if(/કીર્તન.*ભજન/.test(low)) return ['Kirtan','Bhajan'];
  if(/સભાપતિ/.test(low)) return ['Sometimes Presiding'];
  if(/^છાસ$/.test(low)) return ['Buttermilk Distribution'];
  if(/ડિશ\s*સફાઈ/.test(low)) return ['Dish Cleaning'];
  if(/તબલા.*મૃદંગ/.test(low)) return ['Tabla','Mridang'];
  if(/પ્રસાદ\s*વિતરણ/.test(low)) return ['Prasad Distribution'];
  if(/ફાળવવામાં\s*આવી\s*નથી/.test(low)) return ['Seva Not Assigned'];
  if(/ફોટોગ્રાફી.*વિડિઓગ્રાફી/.test(low)) return ['Photography','Videography'];
  if(/રજિસ્ટર.*એટેન્ડન્સ/.test(low)) return ['Register','Attendance Seva'];
  if(/વ્યવસ્થા.*મેનેજમેન્ટ/.test(low)) return ['Management'];
  if(/^સફાઈ\s*સેવા$/.test(low)) return ['Cleaning Seva'];
  if(/સ્ટેજ\s*સજાવટ/.test(low)) return ['Stage Decoration'];
  if(/હાર્મોનિયમ.*વાદ્યયંત્ર/.test(low)) return ['Harmonium','Instrument'];
  if(/હું\s*કોઈ\s*સેવામાં\s*જોઇન\s*નથી/.test(low)) return ['Not Joined in Any Seva'];
  return [tok.trim()];
}
function normalizeLocalSevaWhat(v){
  if(!v) return v;
  const tokens = String(v).split(',').map(s=>s.trim()).filter(Boolean);
  const out = [];
  tokens.forEach(t => normalizeLocalSevaWhatToken(t).forEach(x => { if(!out.includes(x)) out.push(x); }));
  return out.join(', ');
}
function normalizeLocalSevaDuration(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/^na$|^-$|લાગુ પડતું નથી|not applicable/.test(low)) return 'Not Applicable';
  if(/૩ વર્ષ કરતા વધુ|more than 3/.test(low)) return 'More than 3 Years';
  if(/૧ – ૩ વર્ષ|1 to 3/.test(low)) return '1 to 3 Years';
  if(/૬ મહિના – ૧ વર્ષ|6 months to 1/.test(low)) return '6 Months to 1 Year';
  if(/૬ મહિના કરતા ઓછો|3\s*month/.test(low)) return '3 to 6 Months';
  return v;
}
function normalizeWantsSeva(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/હાલ\s*ઇચ્છા\s*નથી/.test(low)) return 'No, I don\'t want to join Seva right now';
  if(/સ્થાનિક\s*સેવા\s*ચાલુ/.test(low)) return 'No, I already have local Seva ongoing';
  if(/જોડાવાની\s*ઇચ્છા\s*છે/.test(low)) return 'Yes, I want to join Seva';
  return v;
}
function normalizeKundalSeva(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/ઘેર\s*બેઠા/.test(low)) return 'Yes, doing Seva from home';
  if(/કુંડળધામ/.test(low)) return 'Yes, I go to Kundaldham';
  if(/કોઈ\s*સેવા\s*નથી/.test(low)) return 'No, I don\'t have any Seva';
  return v;
}
function normalizeKundalSevaWhatToken(tok){
  const low = tok.trim().toLowerCase();
  if(/^3d$/.test(low)) return '3D';
  if(/^ai$/.test(low)) return 'AI';
  if(/it.*ઓડિઓ.*સાઉન્ડ.*વિડિયો/.test(low)) return 'IT / Audio-Visual / Sound / Video Editing';
  if(/library management/.test(low)) return 'Library Management';
  if(/sanskriti|સંસ્કૃતિ/.test(low)) return 'Cultural';
  if(/^ઈન્ટરનેટ$|^internet$/.test(low)) return 'Internet';
  if(/કથા\s*રિસર્ચ/.test(low)) return 'Katha Research';
  if(/કીર્તન\s*મંડળ/.test(low)) return 'Kirtan Mandal';
  if(/ગૌશાળા/.test(low)) return 'Gaushala';
  if(/ગ્રાફિક્સ\s*ડિઝાઇન/.test(low)) return 'Graphics Design';
  if(/તબલા.*મૃદંગ\s*ગ્રૂપ/.test(low)) return 'Tabla / Mridang Group';
  if(/પ્રસાદ.*રસોડાની\s*સેવા/.test(low)) return 'Prasad / Kitchen Seva';
  if(/ફોટોગ્રાફી.*વિડિઓગ્રાફી/.test(low)) return 'Photography / Videography';
  if(/ભોજન.*રસોઈ\s*સેવા/.test(low)) return 'Food / Cooking Seva';
  if(/હું\s*કોઈ\s*સેવામાં\s*જોઇન\s*નથી/.test(low)) return 'Not Joined in Any Seva';
  return tok.trim(); // unrecognized (e.g. "Scanning", "Laser") — kept as its own fallback option
}
function normalizeKundalSevaWhat(v){
  if(!v) return v;
  const tokens = String(v).split(',').map(s=>s.trim()).filter(Boolean);
  const out = [];
  tokens.forEach(t => { const x = normalizeKundalSevaWhatToken(t); if(!out.includes(x)) out.push(x); });
  return out.join(', ');
}
// Availability tab fields switched from Gujarati to English — these remap existing data.
function normalizeAvailDaysToken(tok){
  const low = tok.trim().toLowerCase();
  if(/સોમવાર|monday/.test(low)) return 'Monday';
  if(/મંગળવાર|tuesday/.test(low)) return 'Tuesday';
  if(/બુધવાર|wednesday/.test(low)) return 'Wednesday';
  if(/ગુરુવાર|thursday/.test(low)) return 'Thursday';
  if(/શુક્રવાર|friday/.test(low)) return 'Friday';
  if(/શનિવાર|saturday/.test(low)) return 'Saturday';
  if(/રવિવાર|sunday/.test(low)) return 'Sunday';
  if(/કોઈપણ\s*દિવસ|any\s*day/.test(low)) return 'Any Day';
  return tok.trim();
}
function normalizeAvailDays(v){
  if(!v) return v;
  const tokens = String(v).split(',').map(s=>s.trim()).filter(Boolean);
  const out = [];
  tokens.forEach(t => { const x = normalizeAvailDaysToken(t); if(!out.includes(x)) out.push(x); });
  return out.join(', ');
}
function timeStrToMinutes(hh, mm, ampm){
  let h = parseInt(hh,10) % 12;
  if(ampm === 'PM') h += 12;
  return h*60 + parseInt(mm,10);
}
function minutesToHourSlotLabel(minOfDay){
  // AVAIL_TIME_OPTIONS (minus the trailing "Any Time") are 19 consecutive one-hour
  // slots starting at 5:00 AM (minute 300) — this maps a minute-of-day back to
  // whichever of those slots it falls in, or null if outside 5 AM–midnight.
  const slots = AVAIL_TIME_OPTIONS.slice(0, -2);
  const idx = Math.floor((minOfDay - 300) / 60);
  return (idx >= 0 && idx < slots.length) ? slots[idx] : null;
}
function normalizeToHourSlots(raw){
  if(!raw) return raw;
  const low = String(raw).toLowerCase().trim();
  if(/કોઈપણ|કોઈ\s*પણ|any\s*time|anytime/.test(low)) return 'Any Time';
  if(/^na$|^n\/a$|not\s*applicable|લાગુ\s*પડતું\s*નથી|^-$/.test(low)) return 'Not Applicable';
  // Legacy broad Gujarati bucket labels from before this field had a dropdown at all —
  // map each to its closest single hour slot as a reasonable starting point.
  if(/વહેલી\s*સવારે/.test(low)) return '5:00 AM to 6:00 AM';
  if(/^સવારે/.test(low)) return '7:00 AM to 8:00 AM';
  if(/બપોરે/.test(low)) return '12:00 PM to 1:00 PM';
  if(/સાંજે/.test(low)) return '4:00 PM to 5:00 PM';
  if(/રાત્રે/.test(low)) return '7:00 PM to 8:00 PM';

  const re = /(\d{1,2})(?::(\d{2}))?\s*([ap]\.?m\.?)?/gi;
  const tokens = [];
  let m;
  while((m = re.exec(raw)) !== null){
    const hh = parseInt(m[1],10);
    if(hh < 1 || hh > 12) continue; // skip stray non-hour numbers
    const mm = m[2] || '00';
    const ampm = m[3] ? (m[3][0].toLowerCase()==='a' ? 'AM' : 'PM') : null;
    tokens.push({ hh, mm, ampm });
  }
  if(!tokens.length) return raw; // unparseable free text — kept as a fallback extra option, no data lost
  // Fill in missing AM/PM per start/end PAIR (matching how ranges are built below) —
  // when NEITHER side of a "X to Y" pair specifies AM/PM at all, the rule is: start
  // is always AM, end is always PM (e.g. "9 to 6" → 9 AM to 6 PM, "8 to 1" → 8 AM to
  // 1 PM). A single unpaired time falls back to a simple before-8-is-AM heuristic.
  for(let i=0;i<tokens.length;i+=2){
    const start = tokens[i], end = tokens[i+1];
    if(end){
      if(!start.ampm && !end.ampm){ start.ampm = 'AM'; end.ampm = 'PM'; }
      else if(!start.ampm) start.ampm = 'AM';
      else if(!end.ampm) end.ampm = (end.hh < start.hh) ? 'PM' : start.ampm;
    } else if(!start.ampm){
      start.ampm = start.hh < 8 ? 'AM' : 'PM';
    }
  }
  const slots = new Set();
  for(let i=0;i<tokens.length;i+=2){
    const start = tokens[i], end = tokens[i+1];
    const startMin = timeStrToMinutes(start.hh, start.mm, start.ampm);
    if(end){
      let endMin = timeStrToMinutes(end.hh, end.mm, end.ampm);
      if(endMin <= startMin) endMin += 24*60; // range wraps past midnight
      for(let t = startMin; t < endMin; t += 60){
        const label = minutesToHourSlotLabel(t % (24*60));
        if(label) slots.add(label);
      }
    } else {
      const label = minutesToHourSlotLabel(startMin);
      if(label) slots.add(label);
    }
  }
  return slots.size ? [...slots].join(', ') : raw;
}
function normalizeAvailTime(v){ return normalizeToHourSlots(v); }
function normalizeSchoolTime(v){ return normalizeToHourSlots(v); }
function normalizeMeetTime(v){ return normalizeToHourSlots(v); }
function normalizeCallTime(v){ return normalizeToHourSlots(v); }
let _controlledFieldKeysCache = null;
function getControlledFieldKeys(){
  // Fields driven by a select/multiselect dropdown are validated against a fixed
  // canonical options list elsewhere — auto-capitalizing them here could silently
  // break that exact-match lookup, so they're excluded from the generic fix below.
  if(_controlledFieldKeysCache) return _controlledFieldKeysCache;
  const keys = new Set();
  MEMBER_SECTIONS.forEach(sec => sec.fields.forEach(f => {
    const [key,, type] = f;
    if(['select','multiselect','multiselect-dropdown'].includes(type)) keys.add(key);
  }));
  _controlledFieldKeysCache = keys;
  return keys;
}
function capitalizeRecordTextFields(record){
  if(record.smk) record.smk = String(record.smk).toUpperCase();
  const controlled = getControlledFieldKeys();
  Object.keys(record).forEach(key => {
    if(key === 'smk' || NO_AUTOCAP_FIELDS.has(key) || controlled.has(key)) return;
    if(key.startsWith('cf_')){
      const def = CUSTOM_FIELD_DEFS.find(d => d.id === key);
      if(def && def.field_type !== 'text') return; // digits/email/mobile/dropdown/calendar shouldn't be capitalized
    }
    const v = record[key];
    if(typeof v === 'string' && v.length > 0 && /[a-z]/.test(v[0])){
      record[key] = v.charAt(0).toUpperCase() + v.slice(1);
    }
  });
}
function normalizeOwnJobDetailToken(tok){
  const s = tok.trim();
  const low = s.toLowerCase();
  if(/printing/.test(low)) return s; // "Online Printing" stays its own category
  if(/ખેતી|farming|^farmer$/.test(low)) return 'Farmer';
  if(/ઓનલાઇન|online|ઈ-કોમર્સ|e-commerce/.test(low)) return 'E-Commerce';
  if(/હીરા|^diamond$/.test(low)) return 'Diamond';
  return s;
}
function normalizeOwnJobDetail(v){
  if(!v) return v;
  const tokens = String(v).split(',').map(s=>s.trim()).filter(Boolean);
  const out = [];
  tokens.forEach(t => { const x = normalizeOwnJobDetailToken(t); if(!out.includes(x)) out.push(x); });
  return out.join(', ');
}
// Board/Medium/Degree dropdowns switched from Gujarati labels to English — these remap
// existing saved data (like "GSEB (ગુજરાત બોર્ડ)" or "B.tech(IT)") onto the new options
// so old records show correctly selected instead of appearing as an unmatched extra value.
function normalizeBoard(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/cbse|દિલ્હી/.test(low)) return 'CBSE (Delhi Board)';
  if(/gseb|ગુજરાત\s*બોર્ડ/.test(low)) return 'GSEB (Gujarat Board)';
  if(/gtu/.test(low)) return 'GTU University';
  if(/mkbu/.test(low)) return 'MKBU';
  if(/^na$|not applicable|લાગુ પડતું નથી/.test(low)) return 'Not Applicable';
  if(/university|યુનિવર્સિટી/.test(low)) return 'University';
  return v;
}
function normalizeMedium(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/semi|ગુજલીશ|સેમી/.test(low)) return 'Semi English';
  if(/અંગ્રેજી|english/.test(low)) return 'English Medium';
  if(/ગુજરાતી|gujarati/.test(low)) return 'Gujarati Medium';
  if(/^na$|not applicable|લાગુ પડતું નથી/.test(low)) return 'Not Applicable';
  return v;
}
function normalizeDegree(v){
  if(!v) return v;
  const low = String(v).trim().toLowerCase();
  if(/b\.?\s*tech\s*\(?it\)?/.test(low)) return 'BTech IT';
  if(/b\.?\s*tech/.test(low)) return 'BTech';
  if(/^bba$/.test(low)) return 'BBA';
  if(/^bca$/.test(low)) return 'BCA';
  if(/^b\.?sc$/.test(low)) return 'BSC';
  if(/^ce$/.test(low)) return 'CE';
  if(/diploma.*computer/.test(low)) return 'Diploma Computer';
  if(/diploma/.test(low)) return 'Diploma';
  if(/m\.?\s*sc\s*it/.test(low)) return 'MSC IT';
  if(/^na$|not applicable|લાગુ પડતું નથી/.test(low)) return 'Not Applicable';
  return v;
}
function transliterateGujaratiWord(word){
  if(!word) return '';
  const lower = String(word).trim().toLowerCase();
  // "bhai"/"ben" are extremely common Gujarati name suffixes that don't transliterate
  // correctly through the generic phonetic rules below — handle them explicitly.
  if(lower.endsWith('bhai')) return transliterateGujaratiCore(lower.slice(0, -4)) + 'ભાઈ';
  if(lower.endsWith('ben')) return transliterateGujaratiCore(lower.slice(0, -3)) + 'બેન';
  return transliterateGujaratiCore(lower);
}
function transliterateGujaratiCore(s){
  let out = '', i = 0;
  const n = s.length;
  const matchAt = (list, pos) => {
    for(const [k,v] of list){ if(s.substr(pos, k.length) === k) return [k,v]; }
    return null;
  };
  while(i < n){
    const ch = s[i];
    if(!/[a-z]/.test(ch)){ out += ch; i++; continue; } // spaces/punctuation pass through unchanged
    const cmatch = matchAt(GUJ_TRANSLIT_CONSONANTS, i);
    if(cmatch){
      const [ck, cv] = cmatch;
      i += ck.length;
      const vmatch = matchAt(GUJ_TRANSLIT_VOWELS_INDEP, i);
      if(vmatch){
        out += cv + (GUJ_TRANSLIT_VOWEL_MATRA[vmatch[0]] || '');
        i += vmatch[0].length;
      } else if(i < n && /[a-z]/.test(s[i])){
        out += cv + '્'; // another consonant follows mid-word — needs a halant (e.g. "rg" in Sarg)
      } else {
        out += cv; // bare consonant at word end — matches normal Gujarati spelling
      }
      continue;
    }
    const vmatch2 = matchAt(GUJ_TRANSLIT_VOWELS_INDEP, i);
    if(vmatch2){ out += vmatch2[1]; i += vmatch2[0].length; continue; }
    out += ch; i++; // unrecognized character — pass through rather than dropping it silently
  }
  return out;
}
function autoFillPoshakLeaderGujarati(){
  const gujField = document.querySelector('#recBody input[data-field="poshak_leader_gujarati"]');
  if(!gujField) return;
  const poshakInput = document.querySelector('#recBody input[data-field="poshak_leader"]');
  const guessed = transliterateGujaratiWord((poshakInput && poshakInput.value) || '');
  gujField.value = guessed;
  recDraft['poshak_leader_gujarati'] = guessed;
}
function onSchoolCityChanged(selectedValue){
  const select = document.getElementById('schoolCitySelect');
  const otherInput = document.getElementById('schoolCityOtherInput');
  if(!select || !otherInput) return;
  if(selectedValue === 'Other'){
    select.removeAttribute('data-field');
    otherInput.setAttribute('data-field', 'school_city');
    otherInput.classList.remove('hidden');
    otherInput.value = '';
    otherInput.focus();
  } else {
    otherInput.removeAttribute('data-field');
    otherInput.classList.add('hidden');
    otherInput.value = '';
    select.setAttribute('data-field', 'school_city');
  }
}
function onPoshakLeaderSelected(selectedEnglishName){
  recDraft['poshak_leader'] = selectedEnglishName;
  const gujField = document.querySelector('#recBody input[data-field="poshak_leader_gujarati"]');
  const members = (typeof MODULES !== 'undefined' && MODULES.members && MODULES.members.data) ? MODULES.members.data : [];
  const leaderRecord = members.find(m => m.role === 'પોષક લીડર' && m.poshak_leader === selectedEnglishName);
  // Use the leader's own real Gujarati name (their full_name, which the earlier
  // Gujarati-fullname fix already keeps accurate) rather than a guessed transliteration.
  const gujaratiName = leaderRecord ? (leaderRecord.full_name || transliterateGujaratiWord(selectedEnglishName)) : '';
  if(gujField) gujField.value = gujaratiName;
  recDraft['poshak_leader_gujarati'] = gujaratiName;
}
function autoFillGujaratiFullName(){
  // Live-syncs Full Name (Gujarati) from First Name + Father's Name + Surname in
  // BOTH add and edit mode, always overwriting on every keystroke — by explicit
  // instruction, even if the field had a hand-corrected value already.
  const fullNameInput = document.querySelector('#recBody input[data-field="full_name"]');
  if(!fullNameInput) return;
  const getVal = key => (document.querySelector(`#recBody input[data-field="${key}"]`) || {}).value || '';
  const parts = [getVal('first_name'), getVal('father_name'), getVal('surname')]
    .map(transliterateGujaratiWord).filter(Boolean);
  const guessed = parts.join(' ');
  fullNameInput.value = guessed;
  recDraft['full_name'] = guessed;
}
function normalizeDbRecord(record){
  if(!record) return record;
  if(record.smk_code && !record.smk) record.smk = record.smk_code;
  if(record.group_name !== undefined && record.group === undefined) record.group = record.group_name;
  // Custom (admin-created) fields are stored as one JSON blob in `custom_fields` on the
  // database record — unpack it into top-level "cf_xxx" keys here so the rest of the
  // app (render, capture, validate) treats them exactly like any built-in field, with
  // no special-casing needed anywhere else. Packed back into the blob at save time.
  if(typeof record.custom_fields === 'string' && record.custom_fields){
    try {
      const cf = JSON.parse(record.custom_fields);
      if(cf && typeof cf === 'object') Object.assign(record, cf);
    } catch(e){ /* ignore corrupt custom_fields JSON */ }
  }
  // Merge any fields missing on the DB record from the local seed data.
  // Match by SMK ONLY — mobile number is deliberately NOT used as a fallback here.
  // Family members sharing one household phone have the identical mobile number, so a
  // mobile-based match could silently pull in a SIBLING's data instead of the actual
  // person logging in (this is exactly what mixed up Ved Gabani's and his brother
  // Krishna Gabani's records). SMK is unique per person and never shared, so it's the
  // only identifier safe to match on before falling back to full-name matching.
  try{
    const smk = String(record.smk||'').trim().toUpperCase();
    let seed = null;
    if(smk && smk !== 'N/A' && smk !== 'NA'){
      seed = RAW_MEMBERS.find(r => String(r.smk||'').trim().toUpperCase() === smk);
    }
    if(!seed){
      const nameKey = x => [x.first_name, x.father_name, x.surname].map(v => String(v||'').trim().toLowerCase()).join('|');
      const rk = nameKey(record);
      if(rk !== '||'){
        seed = RAW_MEMBERS.find(r => nameKey(r) === rk);
      }
      if(!seed && record.name){
        const rn = String(record.name).trim().toLowerCase();
        seed = RAW_MEMBERS.find(r => String(r.name||'').trim().toLowerCase() === rn);
      }
    }
    {
      if(seed){
        Object.keys(seed).forEach(k => {
          if(record[k] === undefined || record[k] === null || record[k] === '') record[k] = seed[k];
        });
        // Prefer the original Gujarati form answers over old normalized English values
        ['house_type','work_status','study_status','satsang_yrs','sabha_yrs','granth','skills','hobby'].forEach(k => {
          const raw = seed[k+'_raw'] !== undefined ? seed[k+'_raw'] : seed[k];
          if(raw !== undefined && raw !== '' && record[k] !== raw) record[k] = raw;
        });
      }
    }
  }catch(e){}
  // "Full Name (Gujarati)" is left exactly as whatever the member/admin typed — no
  // auto-fill or silent overwrite from name_gujarati or anywhere else.
  // Poshak Leader must show the ENGLISH name — some records (mainly Yuva Members added
  // via the original form) stored it in Gujarati script instead. The legacy 'group'
  // field always holds the correct English name for the same person, so use that to
  // fix it. Must run BEFORE the Gujarati-transliteration backfill below, which assumes
  // poshak_leader already holds English text to transliterate from.
  if(record.poshak_leader && isFullNameGujarati(record.poshak_leader) && record.group && !isFullNameGujarati(record.group)){
    record.poshak_leader = record.group;
  }
  // Poshak Leader Name (Gujarati): for existing records that never went through the
  // live form's auto-transliterate-as-you-type field, backfill it here from the
  // existing (English) poshak_leader text so it isn't left blank.
  if((!record.poshak_leader_gujarati || !isFullNameGujarati(record.poshak_leader_gujarati)) && record.poshak_leader){
    record.poshak_leader_gujarati = transliterateGujaratiWord(record.poshak_leader);
  }
  // Sanchalak Name is now a single-option dropdown — Divyeshbhai Dungarani is the only
  // Sanchalak, so ANY existing value (including old variants like "દિવ્યેશભાઈ ડુંગરાણી
  // (ખોપાળા)") normalizes to the canonical name — otherwise the old variant shows up as
  // a second, confusing entry in the dropdown alongside the real option.
  record.sanchalak_name = 'દિવ્યેશભાઈ ડુંગરાણી';
  if(record.father_job) record.father_job = normalizeFatherJob(record.father_job);
  if(record.own_job_detail) record.own_job_detail = normalizeOwnJobDetail(record.own_job_detail);
  if(record.board) record.board = normalizeBoard(record.board);
  if(record.medium) record.medium = normalizeMedium(record.medium);
  if(record.degree) record.degree = normalizeDegree(record.degree);
  if(record.work_status) record.work_status = normalizeWorkStatus(record.work_status);
  if(record.work_field) record.work_field = normalizeWorkField(record.work_field);
  if(record.satsang_in_home) record.satsang_in_home = normalizeSatsangInHome(record.satsang_in_home);
  if(record.local_seva_what) record.local_seva_what = normalizeLocalSevaWhat(record.local_seva_what);
  if(record.local_seva_duration) record.local_seva_duration = normalizeLocalSevaDuration(record.local_seva_duration);
  if(record.wants_seva) record.wants_seva = normalizeWantsSeva(record.wants_seva);
  if(record.kundal_seva) record.kundal_seva = normalizeKundalSeva(record.kundal_seva);
  if(record.kundal_seva_what) record.kundal_seva_what = normalizeKundalSevaWhat(record.kundal_seva_what);
  if(record.avail_days) record.avail_days = normalizeAvailDays(record.avail_days);
  if(record.avail_time) record.avail_time = normalizeAvailTime(record.avail_time);
  if(record.school_time) record.school_time = normalizeSchoolTime(record.school_time);
  if(record.meet_time) record.meet_time = normalizeMeetTime(record.meet_time);
  if(record.call_time) record.call_time = normalizeCallTime(record.call_time);
  capitalizeRecordTextFields(record);
  return record;
}
async function doLogin(){
  const role = document.getElementById('loginRole').value;
  document.getElementById('authSigninError').classList.add('hidden');

  if(role==='admin'){
    const pwd = document.getElementById('adminPassword').value;
    if(useBackend){
      try{
        const res = await fetch(`${API_BASE}/auth.php?action=admin_login`, {
          method: 'POST', headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ password: pwd })
        });
        const data = await res.json();
        if(!res.ok){ showAuthError(data.error || 'Incorrect admin password.'); return; }
        loginAs('admin', null, null);
        return;
      }catch(e){
        console.warn('Backend unreachable, using local fallback:', e);
      }
    }
    if(pwd !== loadAdminPassword()){ showAuthError('Incorrect admin password.'); return; }
    loginAs('admin', null, null);
    return;
  }

  const selectedRole = document.getElementById('loginRole').value;
  const identifier = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if(!identifier || !password){ showAuthError('Please enter your mobile number, SMK number, or email, and your password.'); return; }

  if(useBackend){
    try{
      const res = await fetch(`${API_BASE}/auth.php?action=login`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ identifier, password })
      });
      const data = await res.json();
      if(!res.ok){ showAuthError(data.error || 'Incorrect mobile/SMK/email or password.'); return; }
      // Extra check: the role picked on this screen must reflect the member's
      // actual role in the database. Password is still what authenticates them —
      // this just catches selecting the wrong role.
      if(data.record && !memberMatchesDropdownRole(data.record, selectedRole)){
        showAuthError('Selected role does not match your account. Please check and try again.'); return;
      }
      const resolvedEmail = data.email || identifier;
      const normalizedRecord = normalizeDbRecord(data.record);
      // Log in normally first — the dashboard loads and renders right away — then, if
      // this account still has the shared batch-assigned default password, show the
      // Set New Password popup on top of it (blurred behind) until they change it.
      loginAs(data.role, resolvedEmail, normalizedRecord);
      if(data.must_change_password){
        pendingLoginAfterPasswordChange = { oldPassword: password };
        document.getElementById('mcpNewPassword').value = '';
        document.getElementById('mcpConfirmPassword').value = '';
        document.getElementById('mcpError').classList.add('hidden');
        document.getElementById('mustChangePasswordScreen').classList.remove('hidden');
      }
      return;
    }catch(e){
      console.warn('Backend unreachable, using local fallback:', e);
    }
  }

  // Local fallback (used only if the backend is unreachable): matches whichever of
  // email / mobile / smk the identifier looks like against locally-cached credentials.
  const creds = loadSignupCredentials();
  const idLower = identifier.toLowerCase();
  const idDigits = normMob(identifier);
  const cred = creds.find(c =>
    c.email.toLowerCase()===idLower ||
    c.smk.toLowerCase()===idLower ||
    (idDigits.length===10 && normMob(c.mobile||'')===idDigits)
  );
  if(!cred){ showAuthError('No account found with this mobile number, SMK number, or email. Please Sign Up first.'); return; }
  if(cred.password !== password){ showAuthError('Incorrect password.'); return; }

  const rec = MODULES.members.data.find(r => r.smk === cred.smk);
  if(!rec){ showAuthError('Your linked record could not be found. Please contact admin.'); return; }
  if(!memberMatchesDropdownRole(rec, selectedRole)){
    showAuthError('Selected role does not match your account. Please check and try again.'); return;
  }

  loginAs('yuva', cred.email, rec);
}

let pendingLoginAfterPasswordChange = null;
async function submitMustChangePassword(){
  const newPassword = document.getElementById('mcpNewPassword').value;
  const confirmPassword = document.getElementById('mcpConfirmPassword').value;
  const errEl = document.getElementById('mcpError');
  errEl.classList.add('hidden');

  if(!newPassword || newPassword.length < 4){ errEl.textContent = 'Please set a password (at least 4 characters).'; errEl.classList.remove('hidden'); return; }
  if(newPassword !== confirmPassword){ errEl.textContent = 'Password and Confirm Password do not match.'; errEl.classList.remove('hidden'); return; }
  if(!pendingLoginAfterPasswordChange){ errEl.textContent = 'Something went wrong — please sign in again.'; errEl.classList.remove('hidden'); return; }

  const pending = pendingLoginAfterPasswordChange;
  const email = (currentUserRecord && currentUserRecord.email) || '';
  const smk = (currentUserRecord && currentUserRecord.smk) || '';
  if(useBackend){
    try{
      const res = await fetch(`${API_BASE}/auth.php?action=change_password`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ email, smk, old_password: pending.oldPassword, new_password: newPassword })
      });
      const data = await res.json();
      if(!res.ok){ errEl.textContent = data.error || 'Could not set your new password.'; errEl.classList.remove('hidden'); return; }
    }catch(e){
      errEl.textContent = 'Could not reach the server — please check your connection and try again.';
      errEl.classList.remove('hidden');
      return;
    }
  }

  // Already logged in (the dashboard has been visible, blurred, behind this popup) —
  // just close the popup now that the new password is set.
  document.getElementById('mustChangePasswordScreen').classList.add('hidden');
  showToast('Password set successfully!');
  pendingLoginAfterPasswordChange = null;
}
function loginAs(role, email, record){
  if(role !== 'admin' && record && record.active_status === 'inactive'){
    showAuthError('This account has been deactivated. Please contact your admin.');
    return;
  }
  // For non-admin logins, the actual role is decided by the matched member record's
  // own Role field (પોષક લીડર vs everything else) - not by what the backend/local
  // fallback happened to pass in, since all data now lives in one unified Members table.
  if(role !== 'admin'){
    role = (record && record.role === 'પોષક લીડર') ? 'poshak' : 'yuva';
  }
  currentUserRole = role;
  currentUserRecord = record;
  try{
    // localStorage (not sessionStorage) — survives refresh, new tabs, and the browser
    // or mobile app being closed, so nobody gets logged out until they press Logout.
    // A light snapshot of the record (no photo data) is kept as a fallback, so a
    // member who isn't in this browser's cached list yet (e.g. a new signup) is not
    // logged out on refresh just because the cache hadn't caught up.
    let snap = null;
    if(record){ snap = { ...record }; delete snap.own_photo_data; }
    writeStoredSession({ role, email, smk: record ? record.smk : null, rec: snap });
  }catch(e){}
  const displayName = role==='admin' ? 'Admin' : (record ? record.name : '');
  const identifier = role==='admin' ? 'admin' : (record ? record.mobile : '');
  logActivity(role, identifier, displayName, 'Logged in');
  subscribeToPush(identifier);
  enterApp();
}
function subscribeToPush(identifier){
  if(!useBackend || !identifier || identifier==='admin' || typeof OneSignalDeferred==='undefined') return;
  OneSignalDeferred.push(async function(OneSignal){
    try{
      if(!OneSignal.Notifications.permission){
        await OneSignal.Notifications.requestPermission();
      }
      const playerId = OneSignal.User.PushSubscription.id;
      if(playerId){
        fetch(`${API_BASE}/push_subscriptions.php`, {
          method: 'POST', headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ identifier: normMob(identifier), playerId })
        }).catch(e => console.warn('Push subscription save failed:', e));
      }
    }catch(e){
      console.warn('Push subscription setup failed:', e);
    }
  });
}

// The login session is written to THREE places, and restored from whichever one
// survived. localStorage alone is not reliable here: this app also caches the full
// member list (including uploaded photos) and the activity log in localStorage, which
// can fill the browser's ~5MB limit — after which every further setItem() silently
// throws, the session never gets saved, and the very next refresh lands on the login
// page. A small cookie has its own separate storage, unaffected by that limit.
const SESSION_COOKIE = 'yuvaSabhaSession';
function writeStoredSession(sess){
  const full = JSON.stringify(sess);
  try{ localStorage.setItem('yuvaSabhaSession', full); }catch(e){ console.warn('Session: localStorage write failed (storage likely full) — cookie fallback will be used.', e); }
  try{ sessionStorage.setItem('yuvaSabhaSession', full); }catch(e){}
  try{
    // cookie keeps only the tiny identifying part (cookies are limited to ~4KB)
    const small = encodeURIComponent(JSON.stringify({ role: sess.role, email: sess.email || null, smk: sess.smk || null }));
    document.cookie = `${SESSION_COOKIE}=${small}; path=/; max-age=${60*60*24*60}; SameSite=Lax` + (location.protocol==='https:' ? '; Secure' : '');
  }catch(e){}
}
function readSessionCookie(){
  try{
    const m = document.cookie.split('; ').find(x => x.startsWith(SESSION_COOKIE + '='));
    return m ? JSON.parse(decodeURIComponent(m.slice(SESSION_COOKIE.length + 1))) : null;
  }catch(e){ return null; }
}
function readStoredSession(){
  for(const get of [() => localStorage.getItem('yuvaSabhaSession'), () => sessionStorage.getItem('yuvaSabhaSession')]){
    try{ const s = JSON.parse(get() || 'null'); if(s && s.role) return s; }catch(e){}
  }
  return readSessionCookie();
}
function clearStoredSession(){
  try{ localStorage.removeItem('yuvaSabhaSession'); }catch(e){}
  try{ sessionStorage.removeItem('yuvaSabhaSession'); }catch(e){}
  try{ document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax` + (location.protocol==='https:' ? '; Secure' : ''); }catch(e){}
}
function restoreSession(){
  const sess = readStoredSession();
  if(!sess) return false;
  if(sess.role==='admin'){
    currentUserRole = 'admin'; currentUserRecord = null; return true;
  }
  if(!sess.smk) return false;
  const list = MODULES.members.data;
  const rec = list.find(r => String(r.smk||'').toUpperCase() === String(sess.smk).toUpperCase()) || sess.rec || null;
  if(!rec) return false;
  // A member/poshak leader who was already logged in must be kicked out the moment
  // their session is next restored (page load / refresh) if an admin deactivated them
  // in the meantime — otherwise a still-open browser tab could keep working right
  // through a deactivation.
  if(rec.active_status === 'inactive'){
    clearStoredSession();
    return false;
  }
  currentUserRole = sess.role;
  currentUserRecord = rec;
  return true;
}

function logoutUser(){
  if(currentUserRole){
    const identifier = currentUserRole==='admin' ? 'admin' : (currentUserRecord ? currentUserRecord.mobile : '');
    const displayName = currentUserRole==='admin' ? 'Admin' : (currentUserRecord ? currentUserRecord.name : '');
    logActivity(currentUserRole, identifier, displayName, 'Logged out');
  }
  clearStoredSession();
  currentUserRole = null; currentUserRecord = null;
  document.getElementById('appRoot').classList.add('hidden');
  document.getElementById('authScreen').classList.remove('hidden');
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

async function doSignup(){
  const role = document.getElementById('suRole').value;
  const firstName = document.getElementById('suFirstName').value.trim();
  const fatherName = document.getElementById('suFatherName').value.trim();
  const lastName = document.getElementById('suLastName').value.trim();
  const smk = document.getElementById('suSmk').value.trim(); // optional — blank means this is a brand new person with no existing record
  const mobile = document.getElementById('suMobile').value.trim();
  const email = document.getElementById('suEmail').value.trim();
  const password = document.getElementById('suPassword').value;
  const confirmPassword = document.getElementById('suConfirmPassword').value;
  const errEl = document.getElementById('authSignupError');
  errEl.classList.add('hidden');

  if(!firstName || !fatherName || !lastName){ errEl.textContent = 'Please enter your First Name, Father\'s Name, and Last Name.'; errEl.classList.remove('hidden'); return; }
  if(!mobile || normMob(mobile).length !== 10){ errEl.textContent = 'Please enter a valid 10-digit mobile number.'; errEl.classList.remove('hidden'); return; }
  if(!email || !email.includes('@')){ errEl.textContent = 'Please enter a valid email address.'; errEl.classList.remove('hidden'); return; }
  if(!password || password.length < 4){ errEl.textContent = 'Please set a password (at least 4 characters).'; errEl.classList.remove('hidden'); return; }
  if(password !== confirmPassword){ errEl.textContent = 'Password and Confirm Password do not match.'; errEl.classList.remove('hidden'); return; }

  // Best-effort check against whatever's cached locally — the backend still does its
  // own authoritative check, this just catches an obvious mistake earlier. Only
  // relevant when an SMK was actually given — there's nothing to match yet otherwise.
  if(smk){
    const localMatch = MODULES.members.data.find(r => r.smk === smk);
    if(localMatch && !memberMatchesDropdownRole(localMatch, role)){
      errEl.textContent = 'Selected role does not match this SMK number\'s record. Please check and try again.';
      errEl.classList.remove('hidden');
      return;
    }
  }

  const source = 'members';
  const signupDate = new Date().toISOString(); // recorded so admins can see exactly when this account was created

  if(useBackend){
    try{
      const res = await fetch(`${API_BASE}/auth.php?action=signup`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ smk, source, email, password, mobile: normMob(mobile), first_name: firstName, father_name: fatherName, surname: lastName, role, signup_date: signupDate })
      });
      const data = await res.json();
      if(!res.ok){ errEl.textContent = data.error || 'Signup failed.'; errEl.classList.remove('hidden'); return; }
      finishSignupUI(email, data.record ? data.record.role : role);
      return;
    }catch(e){
      console.warn('Backend unreachable, using local fallback:', e);
    }
  }

  const creds = loadSignupCredentials();
  if(smk && creds.some(c => c.smk===smk && c.source===source)){
    errEl.textContent = 'This SMK number has already signed up. Please Sign In instead.';
    errEl.classList.remove('hidden');
    return;
  }
  if(creds.some(c => c.email.toLowerCase()===email.toLowerCase())){
    errEl.textContent = 'This email is already used by another account.';
    errEl.classList.remove('hidden');
    return;
  }

  let rec = smk ? MODULES.members.data.find(r => r.smk === smk) : null;
  if(smk && !rec){ errEl.textContent = 'Could not find your record. Please double-check your SMK number, or leave it blank.'; errEl.classList.remove('hidden'); return; }

  if(!rec){
    // Brand new person with no existing record at all — create one, with a generated
    // SMK so the rest of the system (login-by-mobile lookup, permissions, etc.) still
    // has a stable identifier to key off of, exactly like every other member.
    const generatedSmk = 'SU' + Date.now().toString().slice(-8);
    rec = { smk: generatedSmk, first_name: firstName, father_name: fatherName, surname: lastName,
      name: `${firstName} ${lastName}`, full_name: `${firstName} ${lastName}`, role, mobile: normMob(mobile),
      email, signup_date: signupDate, profile_completed: false };
    MODULES.members.data.push(rec);
  } else {
    rec.email = email;
    rec.mobile = normMob(mobile);
    rec.first_name = firstName;
    rec.father_name = fatherName;
    rec.surname = lastName;
    rec.signup_date = signupDate;
  }
  saveData(source);

  creds.push({ smk: rec.smk, source, email, password, mobile: rec.mobile, signup_date: signupDate });
  saveSignupCredentials(creds);

  logActivity('yuva', rec.mobile, rec.name, `Signed up on ${formatDateTime(signupDate)}`);

  finishSignupUI(email, rec.role);
}
function finishSignupUI(email, role){
  showToast('Sign up successful! Please sign in with your role, mobile/SMK/email & password.');
  document.getElementById('suRole').value = 'યુવા સભ્ય';
  document.getElementById('suFirstName').value = '';
  document.getElementById('suFatherName').value = '';
  document.getElementById('suLastName').value = '';
  document.getElementById('suSmk').value = '';
  document.getElementById('suMobile').value = '';
  document.getElementById('suEmail').value = '';
  document.getElementById('suPassword').value = '';
  document.getElementById('suConfirmPassword').value = '';
  document.getElementById('loginEmail').value = email;
  if(role) document.getElementById('loginRole').value = role;
  onLoginRoleChange();
  switchAuthTab('signin');
}

function updateSidebarAvatar(){
  const box = document.getElementById('sidebarLogoBox');
  const tilak = document.getElementById('sidebarTilakImg');
  const userImg = document.getElementById('sidebarUserPhoto');
  if(!box || !tilak || !userImg) return;
  // Admin always keeps the Swaminarayan tilak-chandlo. Any other logged-in person
  // (or Member View preview) shows their own uploaded photo if they have one, falling
  // back to their original-form Drive photo if that's all they have, and only falling
  // back to the tilak-chandlo when neither exists — same priority as everywhere else
  // (member table, record header).
  const photo = (currentUserRole !== 'admin' && currentUserRecord)
    ? (currentUserRecord.own_photo_data || driveImgUrl(currentUserRecord.photo_url, 160))
    : '';
  if(photo){
    userImg.src = photo;
    userImg.classList.remove('hidden');
    tilak.classList.add('hidden');
    box.classList.remove('p-1.5','bg-white');
    box.classList.add('overflow-hidden');
  } else {
    userImg.classList.add('hidden');
    userImg.src = '';
    tilak.classList.remove('hidden');
    box.classList.add('p-1.5','bg-white');
    box.classList.remove('overflow-hidden');
  }
}
function enterApp(){
  sessionStartedAt = Date.now();
  notifAnnounced = null;
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('appRoot').classList.remove('hidden');
  document.getElementById('appRoot').classList.remove('flex');
  document.getElementById('appRoot').classList.add('flex');
  updateNotifBadge();
  updateSidebarAvatar();

  const isAdmin = currentUserRole==='admin';
  document.getElementById('navUsers').classList.toggle('hidden', !isAdmin);
  document.getElementById('navMasters').classList.toggle('hidden', !isAdmin);
  document.getElementById('navMemberReports').classList.toggle('hidden', !isAdmin);
  const poshakHasSevaAccess = isPoshakLeader() &&
    (hasExtraPermission(currentUserRecord.mobile,'seva_samiti','access') || hasExtraPermission(currentUserRecord.mobile,'seva_samiti','add') || hasExtraPermission(currentUserRecord.mobile,'seva_samiti','edit') || hasExtraPermission(currentUserRecord.mobile,'seva_samiti','delete'));
  document.getElementById('navSevaSamiti').classList.toggle('hidden', !isAdmin && !poshakHasSevaAccess);
  const poshakHasTreeAccess = isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'tree','access');
  document.getElementById('navTree').classList.toggle('hidden', !isAdmin && !poshakHasTreeAccess);
  const poshakHasYscAccess = isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'ysc','access');
  document.getElementById('navYSC').classList.toggle('hidden', !isAdmin && !poshakHasYscAccess);
  const poshakHasReportingAccess = (currentUserRole==='poshak' || currentUserRole==='yuva') && currentUserRecord && hasExtraPermission(currentUserRecord.mobile,'reporting','access');
  document.getElementById('navReporting').classList.toggle('hidden', !isAdmin && !poshakHasReportingAccess);
  document.getElementById('navMembers').classList.remove('hidden');
  const poshakHasNotifAccess = isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'notifications','access');
  document.getElementById('navNotifications').classList.toggle('hidden', !isAdmin && !poshakHasNotifAccess);
  const poshakHasApprovalsAccess = isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'approvals','access');
  document.getElementById('navApprovals').classList.toggle('hidden', !isAdmin && !poshakHasApprovalsAccess);
  const poshakHasDashboardAccess = isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'dashboard','access');
  document.getElementById('navDashboard').classList.toggle('hidden', !isAdmin && !poshakHasDashboardAccess);
  const poshakHasActivityAccess = isPoshakLeader() && hasExtraPermission(currentUserRecord.mobile,'activity','access');
  document.getElementById('navActivity').classList.toggle('hidden', !isAdmin && !poshakHasActivityAccess);
  document.getElementById('logoutLabel').textContent = isAdmin ? 'Logout' :
    (isPoshakLeader() ? 'Logout (' + (currentUserRecord.name||'') + ')' : 'Logout');

  if(isAdmin){
    updateApprovalsBadge();
    const pendingCount = loadPendingChanges().length;
    switchModule('dashboard');
    if(pendingCount > 0){
      showToast(`You have ${pendingCount} pending change${pendingCount>1?'s':''} to review.`);
    }
  } else if(currentUserRole==='yuva' || currentUserRole==='poshak'){
    currentModule = 'members';
    const idx = MODULES.members.data.indexOf(currentUserRecord);
    if(currentUserRecord && !currentUserRecord.profile_completed){
      openRecord('edit', idx);
      showToast('Please fill up your data!');
    } else {
      switchModule('members');
    }
  }
  if(window.innerWidth < 768){ toggleSidebar(); }
  checkBirthdayAlerts();
}

/* ===================== BIRTHDAYS ===================== */
const GUJ_MONTHS = ['જાન્યુ','ફેબ્રુ','માર્ચ','એપ્રિલ','મે','જૂન','જુલાઈ','ઓગસ્ટ','સપ્ટે','ઓક્ટો','નવે','ડિસે'];
function parseDobMD(dob){
  if(!dob) return null;
  const m = String(dob).slice(0,10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(!m) return null;
  return { mo: parseInt(m[2],10), da: parseInt(m[3],10) };
}
function birthdayScopeList(){
  const yuva = (MODULES.members.data||[]).filter(m => m.role === 'યુવા સભ્ય');
  if(currentUserRole === 'admin') return yuva;
  if(isPoshakLeader()){
    const grp = currentUserRecord.group || currentUserRecord.poshak_leader || currentUserRecord.name;
    return yuva.filter(m => (m.group||'') === grp);
  }
  if(currentUserRecord) return [currentUserRecord];
  return [];
}
function getTodaysBirthdays(list){
  const now = new Date();
  const mo = now.getMonth()+1, da = now.getDate();
  return list.filter(m => { const md = parseDobMD(m.dob); return md && md.mo===mo && md.da===da; });
}
function getMonthBirthdays(list, monthNum){
  return list.filter(m => { const md = parseDobMD(m.dob); return md && md.mo===monthNum; })
             .sort((a,b) => parseDobMD(a.dob).da - parseDobMD(b.dob).da);
}
function checkBirthdayAlerts(){
  const scope = birthdayScopeList();
  const today = getTodaysBirthdays(scope);
  renderBirthdayRibbon(today);
  if(today.length) openBirthdayModal(today);
}
function renderBirthdayRibbon(today){
  const el = document.getElementById('birthdayRibbon');
  if(!today.length){ el.classList.add('hidden'); el.classList.remove('flex'); return; }
  const names = today.map(m => m.name).join(', ');
  el.innerHTML = `<i class="fas fa-cake-candles"></i> <span>આજે જન્મદિવસ (Today's Birthday): <strong>${esc(names)}</strong> 🎉</span>`;
  el.classList.remove('hidden'); el.classList.add('flex');
}
function openBirthdayModal(today){
  const isSelf = today.length===1 && currentUserRecord && today[0]===currentUserRecord;
  document.getElementById('birthdayModalTitle').textContent = isSelf ? 'Happy Birthday to You! 🎉' : (today.length>1 ? 'Today\'s Birthdays' : 'Happy Birthday!');
  document.getElementById('birthdayModalBody').innerHTML = today.map(m => `<div style="font-weight:600;color:#2a1013">${esc(m.name)}</div>`).join('');
  document.getElementById('birthdayModal').style.display = 'flex';
}
function closeBirthdayModal(){
  document.getElementById('birthdayModal').style.display = 'none';
}

/* ===================== EMAIL LINK HANDLING (verify / reset) ===================== */
async function handleEmailLinkParams(){
  const params = new URLSearchParams(window.location.search);
  const verifyToken = params.get('verify_token');
  const resetToken = params.get('reset_token');
  if(!verifyToken && !resetToken) return;

  // Clean the token out of the address bar so a refresh/share doesn't resend it
  const cleanUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, cleanUrl);

  if(verifyToken){
    if(useBackend){
      try{
        const res = await fetch(`${API_BASE}/auth.php?action=verify_email`, {
          method: 'POST', headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ token: verifyToken })
        });
        const data = await res.json();
        showToast(data.message || (res.ok ? 'Email verified! You can sign in now.' : 'This verification link is invalid or expired.'));
        return;
      }catch(e){ console.warn('Verify email failed:', e); }
    }
    showToast('Could not verify email — please contact admin.');
    return;
  }

  if(resetToken){
    openTextPromptModal('Set a new password', 'Enter your new password', (newPwd) => {
      openTextPromptModal('Confirm new password', 'Re-enter the same password', async (confirmPwd) => {
        if(useBackend){
          try{
            const res = await fetch(`${API_BASE}/auth.php?action=reset_password`, {
              method: 'POST', headers: {'Content-Type':'application/json'},
              body: JSON.stringify({ token: resetToken, new_password: newPwd })
            });
            const data = await res.json();
            const who = (data.smk && (MODULES.members.data||[]).find(r => String(r.smk||'').toUpperCase() === String(data.smk).toUpperCase())) || findMemberByEmail(data.email);
            logActivity(who && who.role === 'પોષક લીડર' ? 'poshak' : 'yuva', who ? who.mobile : '', who ? who.name : (data.email || 'Member (via email link)'), res.ok ? 'Reset password using emailed link' : `Password reset via emailed link FAILED: ${data.error || 'invalid or expired link'}`);
            showToast(data.message || (res.ok ? 'Password reset! Please sign in.' : 'This reset link is invalid or expired.'));
            return;
          }catch(e){ console.warn('Reset password failed:', e); }
        }
        showToast('Could not reset password — please contact admin.');
      }, { validate: (v) => v !== newPwd ? 'Passwords do not match. Please try again.' : null });
    }, { validate: (v) => v.length < 4 ? 'Password must be at least 4 characters.' : null });
  }
}

/* ===================== INIT ===================== */
function runInitApp(){
  // Instant path: show the real UI immediately using whatever's already cached in this
  // browser (or the data embedded in this file) — zero network wait. The live database
  // sync happens afterward, in the background, and quietly refreshes the screen once it
  // arrives — exactly the same "show cached, then refresh" pattern already used every
  // time someone switches between sections, just applied to the very first paint too.
  try{
    const params = new URLSearchParams(window.location.search);
    const hasEmailToken = params.get('verify_token') || params.get('reset_token');
    // Cheap check: is there even a session token to restore? (Not full validation —
    // just "does something exist worth checking" — restoreSession() still does the
    // real, authoritative check either way.)
    let hasSessionToken = false;
    hasSessionToken = !!readStoredSession();

    if(hasSessionToken){
      // Someone may already be logged in — restoreSession() might need the member
      // list (to look up a non-admin's record), so prepare it first, same as before.
      seedLocalDataInstant();
      primeMembersFromApiCache();
      fetchMastersFromBackend();
      fetchCustomFieldDefsFromBackend();
      fetchYscDataFromBackend();
      if(restoreSession()){
        enterApp(); // this also kicks off its own background members-data refresh via switchModule()
        const identifier = currentUserRole==='admin' ? 'admin' : (currentUserRecord ? currentUserRecord.mobile : '');
        subscribeToPush(identifier);
      } else {
        document.getElementById('authScreen').classList.remove('hidden');
      }
    } else {
      // No one is logged in — the login/signup form doesn't need member data at all,
      // so show it right away instead of waiting on the (large) seed dataset first.
      // The setTimeout here is what actually matters: it yields control back to the
      // browser so it can PAINT this now-visible screen before the heavy seed work
      // runs in the next tick — just reordering the lines alone would not have helped,
      // since JS runs the whole synchronous burst before the browser gets to repaint.
      document.getElementById('authScreen').classList.remove('hidden');
      setTimeout(() => {
        seedLocalDataInstant();
        primeMembersFromApiCache();
        prefetchMembersForLogin();
        fetchMastersFromBackend();
        fetchCustomFieldDefsFromBackend();
        fetchYscDataFromBackend();
        // Run any Login / Sign Up / Forgot Password click made while the app was still loading.
        const q = window.__authQueue || {}; window.__authQueue = {};
        ['doSignup','doLogin','showForgotPasswordInfo'].forEach(fn => { if(q[fn]) try{ window[fn].apply(null, q[fn]); }catch(e){ console.warn('Queued '+fn+' failed:', e); } });
      }, 0);
    }
    const loader = document.getElementById('initLoadingScreen');
    if(loader) loader.remove();

    // Background sync — never blocks the screen that's already showing.
    (async () => {
      try{
        if(hasEmailToken) await handleEmailLinkParams(); // deep-link verify/reset flows still need to run
        await Promise.all([
          loadPermissionsFromBackend(),
          loadActivityLogFromBackend(),
          loadPendingChangesFromBackend(),
          loadNotificationsFromBackend()
        ]);
        migrateDefaultMembersPermission();
        updateApprovalsBadge();
        updateNotifBadge();
      }catch(err){
        console.warn('Background sync error (screen already loaded, unaffected):', err);
      }
    })();
  }catch(err){
    console.error('App init error (loading screen will still be removed):', err);
    // If the session was already restored successfully, an unrelated error while
    // drawing a screen must NOT kick the person back to the login page.
    if(!currentUserRole){
      try{ document.getElementById('authScreen').classList.remove('hidden'); }catch(e2){}
    }
    const loader = document.getElementById('initLoadingScreen');
    if(loader) loader.remove();
  }
}
// Safety net: unregister any Service Worker left over from an earlier version of this
// app. A Service Worker can intercept every fetch() and serve its own cached response
// BEFORE the request ever reaches the network — meaning cache:'no-store' and unique
// ?_ts= cache-busting on the API calls above have no effect against it at all. Once
// registered in a browser, it keeps running on every future visit until explicitly
// unregistered, which is exactly what this does, automatically, for everyone.
if('serviceWorker' in navigator){
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(reg => {
      console.log('Unregistering leftover Service Worker:', reg.scope);
      reg.unregister();
    });
  }).catch(()=>{});
}
if('caches' in window){
  caches.keys().then(names => {
    names.forEach(name => {
      console.log('Clearing leftover Cache Storage:', name);
      caches.delete(name);
    });
  }).catch(()=>{});
}

runInitApp();
