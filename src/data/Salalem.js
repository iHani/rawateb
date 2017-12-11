const value_0_data = [
  { key: 0, value: 0, text: 1, degrees: 15, first_salary: 3000, annual_increase: 135 },
  { key: 1, value: 1, text: 2, degrees: 15, first_salary: 3430, annual_increase: 165 },
  { key: 2, value: 2, text: 3, degrees: 15, first_salary: 3945, annual_increase: 190 },
  { key: 3, value: 3, text: 4, degrees: 15, first_salary: 4530, annual_increase: 230 },
  { key: 4, value: 4, text: 5, degrees: 15, first_salary: 5240, annual_increase: 265 },
  { key: 5, value: 5, text: 6, degrees: 15, first_salary: 6065, annual_increase: 305 },
  { key: 6, value: 6, text: 7, degrees: 15, first_salary: 7010, annual_increase: 365 },
  { key: 7, value: 7, text: 8, degrees: 15, first_salary: 8010, annual_increase: 415 },
  { key: 8, value: 8, text: 9, degrees: 15, first_salary: 9275, annual_increase: 470 },
  { key: 9, value: 9, text: 10, degrees: 15, first_salary: 10275, annual_increase: 510 },
  { key: 10, value: 10, text: 11, degrees: 14, first_salary: 11815, annual_increase: 530 },
  { key: 11, value: 11, text: 12, degrees: 13, first_salary: 13435, annual_increase: 570 },
  { key: 12, value: 12, text: 13, degrees: 12, first_salary: 15180, annual_increase: 605 },
  { key: 13, value: 13, text: 14, degrees: 11, first_salary: 17015, annual_increase: 700 },
  { key: 14, value: 14, text: 15, degrees: 10, first_salary: 20855, annual_increase: 865 }
]

// الممارسين الصحيين
const value_1_data = [
  { key: 0, value: 0, text: 'Doctors', levels: [
    { key: 0, value: 0, text: 'Level 1', degrees: 4, first_salary: 25415, annual_increase: 690 },
    { key: 1, value: 1, text: 'Level 2', degrees: 4, first_salary: 29225, annual_increase: 765 },
    { key: 2, value: 2, text: 'Level 3', degrees: 4, first_salary: 33230, annual_increase: 830 },
    { key: 3, value: 3, text: 'Level 4', degrees: 4, first_salary: 37330, annual_increase: 900 },
    { key: 4, value: 4, text: 'Level 5', degrees: 4, first_salary: 41505, annual_increase: 970 },
    { key: 5, value: 5, text: 'Level 6', degrees: 4, first_salary: 45725, annual_increase: 1035 },
    { key: 6, value: 6, text: 'Level 7', degrees: 4, first_salary: 49945, annual_increase: 1110 },
  ] },
  { key: 1, value: 1, text: 'Doctors Naeeb', levels: [
    { key: 0, value: 0, text: 'Level 1', degrees: 4, first_salary: 19025, annual_increase: 555 },
    { key: 1, value: 1, text: 'Level 2', degrees: 4, first_salary: 22110, annual_increase: 620 },
    { key: 2, value: 2, text: 'Level 3', degrees: 4, first_salary: 25375, annual_increase: 680 },
    { key: 3, value: 3, text: 'Level 4', degrees: 4, first_salary: 28795, annual_increase: 745 },
    { key: 4, value: 4, text: 'Level 5', degrees: 4, first_salary: 32310, annual_increase: 800 },
    { key: 5, value: 5, text: 'Level 6', degrees: 4, first_salary: 35870, annual_increase: 865 },
    { key: 6, value: 6, text: 'Level 7', degrees: 4, first_salary: 39465, annual_increase: 930 },
  ] }
]

// أعضاء هيئة التدريس
const value_2_data = [
  { key: 0, value: 0, text: 'معيد', degrees: 15, first_salary: 6650, annual_increase: 415 },
  { key: 1, value: 1, text: 'محاضر', degrees: 15, first_salary: 8765, annual_increase: 510 },
  { key: 2, value: 2, text: 'استاذ مساعد', degrees: 15, first_salary: 12765, annual_increase: 570 },
  { key: 3, value: 3, text: 'استاذ مشارك', degrees: 15, first_salary: 16080, annual_increase: 665 },
  { key: 4, value: 4, text: 'استاذ', degrees: 15, first_salary: 18420, annual_increase: 735 }
]

// الخويا والمجاهدين
const value_3_data = [
  { key: 0, value: 0, text: 'رئيس الخويا', salary: 17955 },
  { key: 1, value: 1, text: 'مساعد رئيس الخويا', salary: 12590 },
  { key: 2, value: 2, text: 'رئيس خويا الغربية', salary: 10430 },
  { key: 3, value: 3, text: 'مساعد رئيس الخويا', salary: 10430 },
  { key: 4, value: 4, text: 'مساعد رئيس الخويا', salary: 8980 },
  { key: 5, value: 5, text: 'رئيس المجاهدين', salary: 8700 },
  { key: 6, value: 6, text: 'وكيل مساعد رئيس الخويا', salary: 8240 },
  { key: 7, value: 7, text: 'وكيل مساعد رئيس الخويا', salary: 7540 },
  { key: 8, value: 8, text: 'وكيل مساعد رئيس الخويا', salary: 6460 },
  { key: 9, value: 9, text: 'وكيل مساعد', salary: 5495 },
  { key: 10, value: 10, text: 'مساعد رئيس الخويا بالغربية', salary: 5090 },
  { key: 11, value: 11, text: 'خوي فئة 2 رئيس خبرة', salary: 5090 },
  { key: 12, value: 12, text: 'وكيل مجاهدين', salary: 4960 },
  { key: 13, value: 13, text: 'خوي فئة 2 عادي', salary: 4430 },
  { key: 14, value: 14, text: 'عريف متدرب', salary: 4260 },
  { key: 15, value: 15, text: 'خوي فئة 3 عادي', salary: 4070 },
  { key: 16, value: 16, text: 'خوي فئة 4 عادي', salary: 3760 },
  { key: 17, value: 17, text: 'جندي متدرب', salary: 3620 },
  { key: 18, value: 18, text: 'عريف مهمات', salary: 3550 },
  { key: 19, value: 19, text: 'خوي فئة 5 عادي', salary: 3425 },
  { key: 20, value: 20, text: 'مجاهد مهمات', salary: 3250 },
  { key: 21, value: 21, text: 'مجاهد عادي', salary: 3000 }
]

// القضاة
const value_4_data = [
  { key: 0, value: 0, text: 'ملازم قضائي', degrees: 1, first_salary: 10320, annual_increase: 0 },
  { key: 1, value: 1, text: 'قاضي (ج)', degrees: 15, first_salary: 11230, annual_increase: 630 },
  { key: 2, value: 2, text: 'قاضي (ب)', degrees: 15, first_salary: 13470, annual_increase: 680 },
  { key: 3, value: 3, text: 'قاضي (أ)', degrees: 15, first_salary: 15575, annual_increase: 720 },
  { key: 4, value: 4, text: 'وكيل محكمة (ب)', degrees: 15, first_salary: 17490, annual_increase: 775 },
  { key: 5, value: 5, text: 'وكيل محكمة (أ)', degrees: 15, first_salary: 19445, annual_increase: 835 },
  { key: 6, value: 6, text: 'رئيس محكمة (ب)', degrees: 15, first_salary: 21425, annual_increase: 900 },
  { key: 7, value: 7, text: 'رئيس محكمة (أ)', degrees: 15, first_salary: 24510, annual_increase: 930 },
  { key: 8, value: 8, text: 'قاضي استئناف', degrees: 1, first_salary: 39675, annual_increase: 0 },
  { key: 9, value: 9, text: 'رئيس محكمة استئناف', degrees: 1, first_salary: 42320, annual_increase: 0 },
]

// المستخدمين
const value_5_data = [
  { key: 0, value: 0, text: 31, degrees: 16, first_salary: 3000, annual_increase: 100 },
  { key: 1, value: 1, text: 32, degrees: 16, first_salary: 3530, annual_increase: 135 },
  { key: 2, value: 2, text: 33, degrees: 20, first_salary: 4325, annual_increase: 190 }
]

// بند الأجور
const value_6_data = [
  { key: 0, value: 0, text: 'أ', degrees: 15, first_salary: 3000, annual_increase: 125 },
  { key: 1, value: 1, text: 'ب', degrees: 15, first_salary: 3560, annual_increase: 165 },
  { key: 2, value: 2, text: 'ج', degrees: 15, first_salary: 4280, annual_increase: 205 },
  { key: 3, value: 3, text: 'د', degrees: 15, first_salary: 5150, annual_increase: 245 }
]

// الوظائف التعليمية
const value_7_data = [
  { key: 0, value: 0, text: 'المستوى الأول', degrees: 25, first_salary: 4445, annual_increase: 300 },
  { key: 1, value: 1, text: 'المستوى الثاني', degrees: 25, first_salary: 5350, annual_increase: 365 },
  { key: 2, value: 2, text: 'المستوى الثالث',  degrees: 25, first_salary: 6390, annual_increase: 435 },
  { key: 3, value: 3, text: 'المستوى الرابع', degrees: 24, first_salary: 7570, annual_increase: 510 },
  { key: 4, value: 4, text: 'المستوى الخامس', degrees: 24, first_salary: 8060, annual_increase: 510 },
  { key: 5, value: 5, text: 'المستوى السادس', degrees: 20, first_salary: 9260, annual_increase: 510 }
]

const value_8_data = ''
const value_9_data = ''
const value_10_data = ''
const value_11_data = ''
const value_12_data = ''
const value_13_data = ''
const value_14_data = ''
const value_15_data = ''
const value_16_data = ''
// الشورى
const value_17_data = { salary: 22483 }

const Salalem = [
  {
    value: 0,
    text: 'الموظفين العام',
    data: value_0_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 1,
    text: 'الممارسين الصحيين',
    data: value_1_data,
    template: 'TitleLevelDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 2,
    text: 'أعضاء هيئة التدريس',
    data: value_2_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 3,
    text: 'الخويا والمجاهدين',
    data: value_3_data,
    template: 'TitleOnly',
    title_text: 'المرتبة'
  },
  {
    value: 4,
    text: 'القضاة',
    data: value_4_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 5,
    text: 'المستخدمين',
    data: value_5_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 6,
    text: 'بند الأجور',
    data: value_6_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 7,
    text: 'الوظائف التعليمية',
    data: value_7_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 8,
    text: 'الوظائف الدبلوماسية',
    data: value_8_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 9,
    text: 'الوظائف الصحية',
    data: value_9_data,
    template: 'TitleLevelDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 10,
    text: 'كسوة الكعبة المشرفة',
    data: value_10_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 11,
    text: 'أعضاء هيئة النظر',
    data: value_11_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 12,
    text: 'الأئمة والمؤذنين وخدم المساجد',
    data: value_12_data,
    template: 'TitleOnly',
    title_text: 'المرتبة'
  },
  {
    value: 13,
    text: 'كهرباء الناصرية - متخصصين وإداريين',
    data: value_13_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 14,
    text: 'كهرباء الناصرية - عمال إدارة الكهرباء',
    data: value_14_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 15,
    text: 'هيئة التحقيق والإدعاء العام',
    data: value_15_data,
    template: 'TitleDegree',
    title_text: 'المرتبة',
    degree_text: 'الدرجة'
  },
  {
    value: 16,
    text: 'الوزراء ونوابهم والمرتبة الممتازة',
    data: value_16_data,
    template: 'TitleOnly',
    title_text: 'المرتبة'
  },
  {
    value: 17,
    text: 'أعضاء مجلس الشورى',
    data: value_17_data,
    template: 'SollamOnly'
  }
]

export default Salalem
