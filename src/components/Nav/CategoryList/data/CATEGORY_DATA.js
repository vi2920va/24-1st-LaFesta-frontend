const clothesCategory = [
  {
    name: '폴로',
    id: 'clothes1',
  },
  {
    name: '셔츠',
    id: 'clothes2',
  },
  {
    name: '티셔츠',
    id: 'clothes3',
  },
  {
    name: '니트 & 스웨터',
    id: 'clothes4',
  },
  {
    name: '후드 & 스웻셔츠',
    id: 'clothes5',
  },
  { name: '자켓 & 코트', id: 'clothes5' },
  {
    name: '바지 & 반바지',
    id: 'clothes6',
  },
  {
    name: '스포츠웨어',
    id: 'clothes7',
  },
];

const shoesCategory = [
  { name: '스포츠', id: 'shoes1' },
  { name: '캐쥬얼', id: 'shoes2' },
];

const accCategory = [
  { name: '모자', id: 'acc1' },
  { name: '스카프 & 장갑', id: 'acc2' },
  { name: '언더웨어', id: 'acc3' },
  { name: '양말', id: 'acc4' },
];

const goodsCategory = [
  { name: '가방', id: 'good1' },
  { name: '지갑', id: 'good2' },
  { name: '벨트', id: 'good3' },
];

const collectionCategory = [
  { name: '라이브 컬렉션', id: 'collection1' },
  { name: '스포츠 컬렉션', id: 'collection2' },
];

const brandCategory = [
  { name: '우리는 함께 합니다.', id: 'brand1' },
  { name: '건강한 우아함', id: 'brand2' },
  { name: '르네 라페스타', id: 'brand3' },
  { name: '라페스타 스토리', id: 'brand3' },
  { name: '라페스타의 비밀', id: 'brand3' },
];

const styleCategory = [
  { name: '콜라보레이션', id: 'style1' },
  { name: 'MyLafestaPolo', id: 'style2' },
  { name: '패션쇼', id: 'style3' },
  { name: '레더굿', id: 'style4' },
];

const sportsCategory = [
  { name: '노박 조코비치', id: 'sports1' },
  { name: '스포츠 스토어', id: 'sports2' },
  { name: '롤랑 가로스', id: 'sports3' },
];

const categories = [
  { name: '의류', id: 'category1', categories: clothesCategory },
  { name: '신발', id: 'category2', categories: shoesCategory },
  { name: '악세사리', id: 'category3', categories: accCategory },
  { name: '레더굿', id: 'category4', categories: goodsCategory },
];

export const CATEGORY_DATA = [
  {
    id: 'menu1',
    name: 'New',
    subMenu: [
      {
        id: 'menu1-1',
        name: '남성',
        categories: categories.map(item => ({ name: item.name, id: item.id })),
      },
      {
        id: 'menu1-2',
        name: '여성',
        categories: categories.map(item => ({ name: item.name, id: item.id })),
      },
      {
        id: 'menu1-3',
        name: '키즈',
        categories: [
          { id: 'category1', name: '의류' },
          { id: 'category2', name: '신발' }
        ]
      },
      {
        id: 'menu1-4',
        name: 'L!VE & SPORTS',
        categories: [
          { id: 'category3', name: '라이브 컬렉션' },
          { id: 'category4', name: '스포츠 컬렉션' },
        ],
      },
      {
        id: 'menu1-5',
        name: '신상품 전체',
        categories: [
          { id: 'category5', name: '남성 전체' },
          { id: 'category6', name: '여성 전체' },
          { id: 'category7', name: '키즈 전체' },
        ],
      },
    ],
  },
  {
    id: 'menu2',
    name: 'Men',
    subMenu: categories,
  },
  {
    id: 'menu3',
    name: 'Women',
    subMenu: categories,
  },
  {
    id: 'menu4',
    name: 'Kids',
    subMenu: [
      {
        id: 'menu4-1', name: '키즈 신발',
        categories: [{ id: 'category8', name: '키즈 신발 전체' }]
      },
      {
        id: 'menu4-2', name: '키즈 의류',
        categories: [{ id: 'category9', name: '키즈 의류 전체' }]
      },
      {
        id: 'menu4-3', name: '남아',
        categories: [{ id: 'category10', name: '남아 의류 전체' }]
      },
      {
        id: 'menu4-4', name: '여아',
        categories: [{ id: 'category11', name: '여아 의류 전체' }]
      }
    ]
  },
  {
    id: 'menu5',
    name: 'Sale',
    subMenu: [
      { id: 'menu5-1', name: '남성 세일', categories: clothesCategory },
      { id: 'menu5-2', name: '여성 세일', categories: clothesCategory },
      {
        id: 'menu5-3', name: '키즈 세일',
        categories: [
          { id: 'category1', name: '의류' },
          { id: 'category2', name: '신발' }
        ]
      },
      {
        id: 'menu5-4', name: 'FW20 세일',
        categories: [
          { id: 'category14', name: '남성' },
          { id: 'category15', name: '여성' },
          { id: 'category16', name: '키즈' }
        ]
      },
      {
        id: 'menu5-5', name: 'SS20 세일',
        categories: [
          { id: 'category14', name: '남성' },
          { id: 'category15', name: '여성' },
          { id: 'category16', name: '키즈' }
        ]
      }
    ],
  },
  {
    id: 'menu6',
    name: '나의 라페스타 폴로',
    subMenu: [],
  },
  {
    id: 'menu7',
    name: 'Lafesta Inside',
    subMenu: [
      { id: 'menu6-1', name: 'BRAND', categories: brandCategory },
      { id: 'menu6-2', name: 'STYLE', categories: styleCategory },
      { id: 'menu6-3', name: 'SPORTS', categories: sportsCategory },
    ],
  },
];
