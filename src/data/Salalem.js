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
  { key: 0, value: 0, text: 'طبيب استشاري', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 25415, annual_increase: 690 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 29225, annual_increase: 765 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 33230, annual_increase: 830 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 37330, annual_increase: 900 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 41505, annual_increase: 970 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 45725, annual_increase: 1035 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 49945, annual_increase: 1110 }
  ] },
  { key: 1, value: 1, text: 'طبيب نائب', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 19025, annual_increase: 555 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 22110, annual_increase: 620 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 25375, annual_increase: 680 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 28795, annual_increase: 745 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 32310, annual_increase: 800 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 35870, annual_increase: 865 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 39465, annual_increase: 930 }
  ] },
  { key: 0, value: 0, text: 'طبيب مقيم', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 15640, annual_increase: 495 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 18450, annual_increase: 555 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 21420, annual_increase: 620 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 24565, annual_increase: 680 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 27845, annual_increase: 745 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 31220, annual_increase: 800 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 34615, annual_increase: 865 }
  ] },
  { key: 0, value: 0, text: 'صيدلي استشاري', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 16060, annual_increase: 505 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 18310, annual_increase: 560 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 20670, annual_increase: 620 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 23100, annual_increase: 675 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 25580, annual_increase: 735 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 28060, annual_increase: 790 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 31840, annual_increase: 855 }
  ] },
  { key: 0, value: 0, text: 'صيدلي أول', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 13310, annual_increase: 475 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 15495, annual_increase: 505 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 17640, annual_increase: 560 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 19885, annual_increase: 620 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 22195, annual_increase: 675 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 24545, annual_increase: 735 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 28045, annual_increase: 790 }
  ] },
  { key: 0, value: 0, text: 'صيدلي', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 10760, annual_increase: 440 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 12835, annual_increase: 475 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 14925, annual_increase: 505 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 16970, annual_increase: 560 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 19110, annual_increase: 620 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 21300, annual_increase: 675 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 24525, annual_increase: 735 }
  ] },
  { key: 0, value: 0, text: 'أخصائي استشاري', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 12645, annual_increase: 475 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 14905, annual_increase: 505 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 17310, annual_increase: 560 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 19990, annual_increase: 620 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 22940, annual_increase: 675 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 26170, annual_increase: 735 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 29670, annual_increase: 790 }
  ] },
  { key: 0, value: 0, text: 'أخصائي أول', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 10530, annual_increase: 440 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 12630, annual_increase: 475 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 14895, annual_increase: 505 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 17295, annual_increase: 560 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 19970, annual_increase: 620 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 22930, annual_increase: 675 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 26155, annual_increase: 735 }
  ] },
  { key: 0, value: 0, text: 'أخصائي', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 8560, annual_increase: 410 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 10520, annual_increase: 440 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 12620, annual_increase: 475 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 14880, annual_increase: 505 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 17280, annual_increase: 560 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 19960, annual_increase: 620 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 22910, annual_increase: 675 }
  ] },
  { key: 0, value: 0, text: 'فني', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 5610, annual_increase: 360 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 7315, annual_increase: 380 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 9140, annual_increase: 410 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 11100, annual_increase: 440 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 13200, annual_increase: 505 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 15595, annual_increase: 560 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 18275, annual_increase: 620 }
  ] },
  { key: 0, value: 0, text: 'مساعد صحي', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 4725, annual_increase: 295 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 6130, annual_increase: 325 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 7680, annual_increase: 360 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 9385, annual_increase: 380 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 11210, annual_increase: 440 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 13310, annual_increase: 505 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 15705, annual_increase: 560 }
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
  { key: 9, value: 9, text: 'رئيس محكمة استئناف', degrees: 1, first_salary: 42320, annual_increase: 0 }
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

// الدبلوماسية
const value_8_data = [
  { key: 0, value: 0, text: 'ملحق', degrees: 20, first_salary: 5555, annual_increase: 315 },
  { key: 1, value: 1, text: 'سكرتير ثالث', degrees: 20, first_salary: 6480, annual_increase: 380 },
  { key: 2, value: 2, text: 'سكرتير ثاني',  degrees: 20, first_salary: 7805, annual_increase: 440 },
  { key: 3, value: 3, text: 'سكرتير أول', degrees: 19, first_salary: 9655, annual_increase: 520 },
  { key: 4, value: 4, text: 'مستشار', degrees: 17, first_salary: 12830, annual_increase: 590 },
  { key: 5, value: 5, text: 'وزير مفوض', degrees: 15, first_salary: 16665, annual_increase: 705 },
  { key: 6, value: 6, text: 'سفير', degrees: 12, first_salary: 21825, annual_increase: 930 }
]

// الوظائف الصحية
const value_9_data = [
  { key: 0, value: 0, text: 'طبيب استشاري', levels: [
    { key: 0, value: 0, text: 'Level 1', degrees: 4, first_salary: 14950, annual_increase: 690 },
    { key: 1, value: 1, text: 'Level 2', degrees: 4, first_salary: 17710, annual_increase: 765 },
    { key: 2, value: 2, text: 'Level 3', degrees: 4, first_salary: 20770, annual_increase: 830 },
    { key: 3, value: 3, text: 'Level 4', degrees: 4, first_salary: 24090, annual_increase: 900 },
    { key: 4, value: 4, text: 'Level 5', degrees: 4, first_salary: 27690, annual_increase: 970 },
    { key: 5, value: 5, text: 'Level 6', degrees: 4, first_salary: 31570, annual_increase: 1035 },
    { key: 6, value: 6, text: 'Level 7', degrees: 4, first_salary: 35740, annual_increase: 1110 }
  ] },
  { key: 1, value: 1, text: 'طبيب نائب', levels: [
    { key: 0, value: 0, text: 'Level 1', degrees: 4, first_salary: 11190, annual_increase: 555 },
    { key: 1, value: 1, text: 'Level 2', degrees: 4, first_salary: 13410, annual_increase: 620 },
    { key: 2, value: 2, text: 'Level 3', degrees: 4, first_salary: 15890, annual_increase: 680 },
    { key: 3, value: 3, text: 'Level 4', degrees: 4, first_salary: 18610, annual_increase: 745 },
    { key: 4, value: 4, text: 'Level 5', degrees: 4, first_salary: 21590, annual_increase: 800 },
    { key: 5, value: 5, text: 'Level 6', degrees: 4, first_salary: 24790, annual_increase: 865 },
    { key: 6, value: 6, text: 'Level 7', degrees: 4, first_salary: 28250, annual_increase: 930 }
  ] },
  { key: 0, value: 0, text: 'طبيب مقيم', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 9200, annual_increase: 495 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 11180, annual_increase: 555 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 13400, annual_increase: 620 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 15880, annual_increase: 680 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 18600, annual_increase: 745 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 21580, annual_increase: 800 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 24780, annual_increase: 865 }
  ] },
  { key: 0, value: 0, text: 'صيدلي استشاري', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 11075, annual_increase: 505 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 13095, annual_increase: 560 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 15335, annual_increase: 620 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 17815, annual_increase: 675 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 20515, annual_increase: 735 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 23455, annual_increase: 790 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 26615, annual_increase: 855 }
  ] },
  { key: 0, value: 0, text: 'صيدلي أول', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 9180, annual_increase: 475 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 11080, annual_increase: 505 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 13100, annual_increase: 560 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 15340, annual_increase: 620 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 17820, annual_increase: 675 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 20520, annual_increase: 735 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 23460, annual_increase: 790 }
  ] },
  { key: 0, value: 0, text: 'صيدلي', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 7420, annual_increase: 440 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 9180, annual_increase: 475 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 11080, annual_increase: 505 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 13100, annual_increase: 560 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 15340, annual_increase: 620 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 17820, annual_increase: 675 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 20520, annual_increase: 735 }
  ] },
  { key: 0, value: 0, text: 'أخصائي استشاري', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 10535, annual_increase: 475 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 12435, annual_increase: 505 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 14455, annual_increase: 560 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 16695, annual_increase: 620 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 19175, annual_increase: 675 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 21875, annual_increase: 735 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 24815, annual_increase: 790 }
  ] },
  { key: 0, value: 0, text: 'أخصائي أول', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 8775, annual_increase: 440 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 10535, annual_increase: 475 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 12435, annual_increase: 505 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 14455, annual_increase: 560 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 16695, annual_increase: 620 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 19175, annual_increase: 675 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 21875, annual_increase: 735 }
  ] },
  { key: 0, value: 0, text: 'أخصائي', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 7130, annual_increase: 410 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 8770, annual_increase: 440 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 10530, annual_increase: 475 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 12430, annual_increase: 505 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 14450, annual_increase: 560 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 16690, annual_increase: 620 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 19170, annual_increase: 675 }
  ] },
  { key: 0, value: 0, text: 'فني', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 4670, annual_increase: 360 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 6110, annual_increase: 380 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 7630, annual_increase: 410 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 9270, annual_increase: 440 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 11030, annual_increase: 505 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 13050, annual_increase: 560 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 15290, annual_increase: 620 }
  ] },
  { key: 0, value: 0, text: 'مساعد صحي', levels: [
    { key: 0, value: 0, text: 1, degrees: 4, first_salary: 3935, annual_increase: 295 },
    { key: 1, value: 1, text: 2, degrees: 4, first_salary: 5115, annual_increase: 325 },
    { key: 2, value: 2, text: 3, degrees: 4, first_salary: 6415, annual_increase: 360 },
    { key: 3, value: 3, text: 4, degrees: 4, first_salary: 7855, annual_increase: 380 },
    { key: 4, value: 4, text: 5, degrees: 4, first_salary: 9375, annual_increase: 440 },
    { key: 5, value: 5, text: 6, degrees: 4, first_salary: 11135, annual_increase: 505 },
    { key: 6, value: 6, text: 7, degrees: 4, first_salary: 13155, annual_increase: 560 }
  ] }
]

// كسوة الكعبة
const value_10_data = [
  { key: 0, value: 0, text: 1, degrees: 15, first_salary: 3000, annual_increase: 165 },
  { key: 1, value: 1, text: 2, degrees: 15, first_salary: 3500, annual_increase: 190 },
  { key: 2, value: 2, text: 3,  degrees: 15, first_salary: 4075, annual_increase: 215 },
  { key: 3, value: 3, text: 4, degrees: 15, first_salary: 4730, annual_increase: 245 },
  { key: 4, value: 4, text: 5, degrees: 15, first_salary: 5460, annual_increase: 265 },
  { key: 5, value: 5, text: 6, degrees: 15, first_salary: 6275, annual_increase: 295 },
  { key: 6, value: 6, text: 7, degrees: 15, first_salary: 7165, annual_increase: 325 },
  { key: 7, value: 7, text: 8, degrees: 15, first_salary: 8140, annual_increase: 345 },
  { key: 8, value: 8, text: 9, degrees: 15, first_salary: 9190, annual_increase: 375 },
  { key: 9, value: 9, text: 10, degrees: 15, first_salary: 10320, annual_increase: 400 }
]

// هيئة النظر
const value_11_data = [
  { key: 0, value: 0, text: 'رئيس (أ)', degrees: 10, first_salary: 5930, annual_increase: 190 },
  { key: 1, value: 1, text: 'عضو (أ)', degrees: 10, first_salary: 4945, annual_increase: 190 },
  { key: 2, value: 2, text: 'رئيس (ب)',  degrees: 10, first_salary: 4945, annual_increase: 190 },
  { key: 3, value: 3, text: 'عضو (ب)', degrees: 10, first_salary: 3950, annual_increase: 135 },
  { key: 4, value: 4, text: 'رئيس (ج)', degrees: 10, first_salary: 3950, annual_increase: 135 },
  { key: 5, value: 5, text: 'عضو (ج)', degrees: 10, first_salary: 3550, annual_increase: 100 },
  { key: 6, value: 6, text: 'عضو (د)', degrees: 10, first_salary: 3000, annual_increase: 100 }
]

// الأئمة والمؤذنين
const value_12_data = [
  { key: 0, value: 0, text: 'إمام جامع (أ)', salary: 4570 },
  { key: 1, value: 1, text: 'إمام جامع (ب)', salary: 3675 },
  { key: 2, value: 2, text: 'إمام مسجد (أ)', salary: 2980 },
  { key: 3, value: 3, text: 'إمام مسجد (ب)', salary: 2385 },
  { key: 4, value: 4, text: 'إمام مسجد (ج)', salary: 1890 },
  { key: 5, value: 5, text: 'مؤذن جامع', salary: 1790 },
  { key: 6, value: 6, text: 'مؤذن مسجد', salary: 1395 },
  { key: 7, value: 7, text: 'خادم جامع', salary: 1395 },
  { key: 8, value: 8, text: 'خادم مسجد', salary: 1195 }
]

// الناصرية - متخصصين واداريين
const value_13_data = [
  { key: 0, value: 0, text: 41, degrees: 18, first_salary: 3000, annual_increase: 170 },
  { key: 1, value: 1, text: 42, degrees: 18, first_salary: 3630, annual_increase: 210 },
  { key: 2, value: 2, text: 43,  degrees: 18, first_salary: 4420, annual_increase: 255 },
  { key: 3, value: 3, text: 44, degrees: 18, first_salary: 5335, annual_increase: 305 },
  { key: 4, value: 4, text: 45, degrees: 18, first_salary: 6365, annual_increase: 370 },
  { key: 5, value: 5, text: 46, degrees: 15, first_salary: 7555, annual_increase: 400 },
  { key: 6, value: 6, text: 47, degrees: 15, first_salary: 8865, annual_increase: 455 },
  { key: 7, value: 7, text: 48, degrees: 15, first_salary: 10250, annual_increase: 510 },
  { key: 8, value: 8, text: 49, degrees: 15, first_salary: 11300, annual_increase: 600 },
  { key: 9, value: 9, text: 50, degrees: 15, first_salary: 13345, annual_increase: 650 },
  { key: 10, value: 10, text: 51, degrees: 15, first_salary: 14670, annual_increase: 690 },
  { key: 11, value: 11, text: 52, degrees: 14, first_salary: 15990, annual_increase: 715 },
  { key: 12, value: 12, text: 53, degrees: 13, first_salary: 17315, annual_increase: 745 },
  { key: 13, value: 13, text: 54, degrees: 11, first_salary: 18840, annual_increase: 840 },
]

// الناصرية - عمال ادارة الكهرباء
const value_14_data = [
  { key: 0, value: 0, text: 'أ', degrees: 20, first_salary: 3000, annual_increase: 135 },
  { key: 1, value: 1, text: 'ب', degrees: 20, first_salary: 3410, annual_increase: 165 },
  { key: 2, value: 2, text: 'ج',  degrees: 20, first_salary: 3950, annual_increase: 200 },
  { key: 3, value: 3, text: 'د', degrees: 20, first_salary: 4910, annual_increase: 250 }
]

// هيئة التحقيق والادعاء
const value_15_data = [
  { key: 0, value: 0, text: 'ملازم تحقيق', degrees: 1, first_salary: 10320, annual_increase: 0 },
  { key: 1, value: 1, text: 'محقق (ج)', degrees: 15, first_salary: 11230, annual_increase: 630 },
  { key: 2, value: 2, text: 'محقق (ب)', degrees: 15, first_salary: 13470, annual_increase: 680 },
  { key: 3, value: 3, text: 'محقق (أ)', degrees: 15, first_salary: 15575, annual_increase: 720 },
  { key: 4, value: 4, text: 'وكيل رئيس دائرة تحقيق وادعاء (ب)', degrees: 15, first_salary: 17490, annual_increase: 775 },
  { key: 5, value: 5, text: 'وكيل رئيس دائرة تحقيق وادعاء (أ)', degrees: 15, first_salary: 19445, annual_increase: 835 },
  { key: 6, value: 6, text: 'رئيس دائرة تحقيق وادعاء (ب)', degrees: 15, first_salary: 21425, annual_increase: 900 },
  { key: 7, value: 7, text: 'رئيس دائرة تحقيق وادعاء (أ)', degrees: 15, first_salary: 24510, annual_increase: 930 },
  { key: 8, value: 8, text: 'مدعي استئناف', degrees: 1, first_salary: 39675, annual_increase: 0 },
  { key: 9, value: 9, text: 'رئيس دوائر تحقيق وادعاء', degrees: 1, first_salary: 42320, annual_increase: 0 }
]

// الوزراء
const value_16_data =  [
  { key: 0, value: 0, text: 'وزير ومن في مرتبته', salary: 41400 },
  { key: 2, value: 1, text: 'نائب الوزير', salary: 34500 },
  { key: 2, value: 2, text: 'المرتبة الممتازة', salary: 34500 }
]

// الشورى
const value_17_data = { text: 'المكافأة الشهرية لعضو مجلس الشورى', salary: 22483 }

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
    title_text: 'الفئة',
    level_text: 'المستوى',
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
    title_text: 'الفئة',
    level_text: 'المستوى',
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
    title_text: 'المسمى',
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
    title_text: 'الفئة',
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
