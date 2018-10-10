import { Place } from './types'

const places: Array<Place> = [
  {
    _id: '5a96eae4fffb67732feeeb46',
    name: '다해식당',
    type: '한식',
    time: '10:30-21:30\n첫째,셋째주 토요일 휴무',
    lng: 127.060634,
    lat: 37.595808,
    menu:
      '순두부,  참치찌개,  제육덮밥,  오징어덮밥,  떡만두국,  돌솥비빔밥,  김치찌개,  짬뽕라면,  떡라면,  만두라면,  라면,  콩나물비빔밥,  김치볶음밥,  된장찌개,  육개장,  뚝배기불고기,  불고기비빔밥,  생선구이,  내장탕,  갈비탕,  알밥,  제육볶음,  오징어볶음,  해물볶음밥',
    honbab: 5,
    images: ['b82nalfx21n.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb55',
    name: '아욱꽃',
    type: '한식',
    time: '',
    lng: 127.061207,
    lat: 37.595394,
    menu: '돈가스,  김치볶음밥,  오징어덮밥',
    images: ['b1oqka36otd.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb4c',
    name: '내가찜한닭',
    type: '한식',
    time: '10:00 - 22:00',
    lng: 127.0620266,
    lat: 37.59552338,
    menu: '안동찜닭, 고추장찜닭, 치즈찜닭',
    sensei: 'https://www.facebook.com/hufsmealchoi/posts/227073997786173',
    images: [
      'hfat7r7s5r9.jpg',
      '7od42hupqcr.jpg',
      'q3sh40r5yjh.jpg',
      'ok5413bbik.jpg'
    ]
  },
  {
    _id: '5a96eae4fffb67732feeeb3b',
    name: '낭풍 김치찌개의 집',
    type: '한식',
    time: '',
    lng: 127.060098,
    lat: 37.595841,
    menu: '낭풍찌개 , 계란말이',
    images: ['zq7p7vt7jm.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb43',
    name: '아지매식당',
    type: '한식',
    time: '9:30-22:00',
    lng: 127.060611,
    lat: 37.595626,
    menu:
      '돼지고기김치찌개,  부대찌개,  제육쌈밥,  돼지불백,  카레불백,  오삼불고기,  소불고기,  돼지갈비,  참치김치볶음밥,  제육덮밥,  순두부',
    images: ['z3agglsn1h.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb41',
    name: '도네누 볏짚 통삼겹갈비',
    type: '한식',
    time: '',
    lng: 127.060721,
    lat: 37.595486,
    menu:
      '왕갈비,  양념갈비,  갈매기살, 안창살, 갈비살,  돼지껍데기,  생삼겹살, 항정살,  볏짚통삼겹살, 뼈없는 양념닭발,  매콤삼겹살,',
    images: ['it66l06jj7r.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb39',
    name: '화덕고',
    type: '한식',
    time: '17:00-24:00\n마지막 주문 23:00',
    lng: 127.059803,
    lat: 37.594919,
    menu:
      '냉면,  계란찜,  추억의 도시락,  멸치국수,  가브리살,  껍데기,  삼겹살,  고추장닭갈비,  암돼지, 삼겹,  목살,  고추장삼겹,  된장찌개',
    images: ['omxk85ko2m.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb36',
    name: '우미정',
    type: '한식',
    time: '10:00-22:00',
    lng: 127.060889,
    lat: 37.595713,
    menu:
      '갈비정식  갈비찜  제육쌈밥  김치찜  우미정된장찌개  한우  돼지갈비  삼겹살  생목살  항정살  게장추가  한우불낙전골  한우불고기버섯전골  갈비탕  설렁탕  한우뚝배기불고기  냉면',
    images: ['mjkt6mh8v1b.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb37',
    name: '은주네 돈까스와 돌솥',
    type: '한식',
    time: '10:40-20:50',
    lng: 127.060782,
    lat: 37.59548513,
    menu:
      '등심돈까스,  제육김치볶음,  제육뚝배기불고기,  해물순두부,  돌솥비빔밥',
    images: ['uva4ob8nggb.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb40',
    name: '짚신매운갈비찜',
    type: '한식',
    time: '11:00-23:00',
    lng: 127.060741,
    lat: 37.595725,
    menu:
      '궁물닭발,  매운돼지갈비찜, 매운소갈비찜, 사리추가,  계란찜,  순두부탕',
    images: ['nntyv045dck.jpeg']
  },
  {
    _id: '5a96eae4fffb67732feeeb44',
    name: '외대 철판마을',
    type: '한식',
    time: '10:00-21:30\nBreak time ??\n토요일 휴무\n',
    lng: 127.0599747,
    lat: 37.59557439,
    menu: '철판 (삼겹살,  닭,  제육,  오징어,  불고기)',
    sensei: 'https://www.facebook.com/hufsmealchoi/posts/196727244154182',
    images: ['b154vb3fmdk.jpeg', 'i8b1652m62q.jpg', 'u6bccd16l5i.jpg']
  },
  {
    _id: '5a96eae4fffb67732feeeb49',
    name: '돌돌말아 뽀글뽀글',
    type: '한식',
    time: '06:00-22:00',
    lng: 127.057132,
    lat: 37.598694,
    menu:
      '참치찌개, 순두부찌개, 백반, 고등어구이, 김치찌개, 비빔밥, 알밥, 쫄면',
    images: ['61308dntjk.jpeg']
  }
]

export default places
