#### 작업예정 : jQuery 제이쿼리 JSON 데이터 파싱
- 외부 data.js vkdlfdpt json데이터를 저장후 html에서 불러와서 파싱.
- 외부 사이트에서 제공하는(RestAPI서버) json데이터를 html에서 불러와 파싱.
- RestAPI서버 중 코로나19 확진자 데이터를 받아서 html에서 파싱(Data를 분해해서 화면에 뿌려주는 작업)
- RestAPI서버주소: https://coroname.me/getdata
#### 20210513(목) 작업내역
 픽사베이 이미지 3개: 로고1, 슬라이드 이미지1, NoImage 1 받고, 경로 적어놓기
- 로고: https://pixabay.com/ko/illustrations/%EC%86%90%EC%97%90-%EC%9E%88%EB%8A%94-%EB%A1%9C%ED%84%B0%EC%8A%A4-%EB%A1%9C%ED%84%B0%EC%8A%A4-1889661/
- 슬라이드이미지: https://pixabay.com/ko/photos/%EA%BB%8D%EC%A7%88-%EB%AA%A8%EB%9E%98-%EB%B9%84%EC%B9%98-%EC%A1%B0%EA%B0%9C-%EB%AC%BC%EA%B0%80-792912/
- no_img: https://pixabay.com/ko/vectors/%ED%94%8C%EB%9E%98%EA%B7%B8-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EA%B5%AD%EA%B8%B0-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-3029663/
 - 작업 폴더를 나누는 이유: 시청(관공서), 대학, 기업의 웹 프로그램(사이트) 제작 시 제작한 이후에 1년간 무상 유지보수
   유지보수 이후 2천, 리뉴얼 4천 정도의 비용이 책정 됨 home 폴더, 기존작업물, 리뉴얼 home에 덮어쓰는 방식이 아니고,
   리뉴얼 할떄 Home2022 폴더에 작업을 하게 됩니다.
 - jQuery 코어 다운받기: min버전(압축- 속도 up), 일반버전(개발- 속도 normal)
 - jQuery 미처리 작업은 다음주진행
 - 오늘부터는 모바일 메인페이지 1개 만들어서 과제물로 제출 -> 추후 스프링에서 프로그램 입히는 소스로 사용.
 - 애니데스크(독일산): 팀뷰어(독일산) 사용하는 대신에 애니 데스크를 사용.
 - html5.html, css.html, js.html 여기까지
 - jQuery 기본구조만 실습했습니다.
#### 20210512(수) 작업내역
 - git clone 으로 프로젝트를 가져온 경우 아래 내용을 추가해주셔야합니다.
 - git config --list 확인해서 user.name, user.email

#### 20210511(화) 작업내역
- 로렘입숨 한글 URL-http://guny.kr/stuff/klorem/#/table-html
- 로렘입숨 영어 URL-https://loremipsum.io/
- html5의 레이아웃 구조 제작합니다.
- 서버(응답하는프로그램=response)
- 클라이언트(요청하는프로그램=request) = 아파치, 톰캣서버
- HTML은 마크업이 태그로 구성됩니다. <의미있는문자>.. </의미있는문자>
- http://127.0.0.1:80[8080|9000|5500|6500]
- PC의 네트워크 내부주소(공통): 127.0.0.1 = localhost
- yahoo.com(도메인) == 74.6.143.25(ip주소) == 주민번호
- ip주소버전: IPv4(74.6.143.25), IPv6(2001:4998:)
- HTML도 버전 : HTML5, HTML4.01(OLD VER) 현재는 HTML5로 정착 되었음
#### 20210510(월) 작업내역
- 업로드절차: 1. 커밋(commit) 2. 푸시(push)
- 다운로드절차: 1. 풀(pull) : 교실에서 작업한결과를 집에서 이어서 작업 할 때 사용
- 레포지토리(저장소) 초기화: git init 실행됨
- html 과 깃 저장소 연결.
- 포트의 역할이 트랜드로 많이 사용됩니다.
- 포트(port): 포트번호로 서비스를 만드는것이 트렌드
- 이전에는 80포트에 모든서비스를 묶어놓았습니다.
- 모든서비스를 개별로 분리하는 트렌드가 있습니다. :
 마이크로서비스라고 합니다. == RestAPI로 구현이 됩니다.
  도메인(https://naver.com:1451241/logincheck/네이버 인증 서비스 개발)
  외부 인원(네이버직원이 아닌) 위 포트기준으로 제작한 서비스를 갖다가 사용
- html : Hyper Text MarkUp Language 태그를 사용하는 언어
- md : MarkDown Language 태그를 사용하지 않는 언어 (git에서 사용하는 언어)
- 기업에서 사용가능한 라이선스 1. GNU  2. MIT