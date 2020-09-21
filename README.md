bㅠbㅠ# express-generator

- npm i -g express-generator
- express 'project-name' --view=pug
- npm install
- npm start (start는 특수한 키워드여서 run을 붙일 필요 없다)
- **bin/www**는 **서버 실행부**, **app.js**는 **핵심 로직 담당**(우주선의 조종실)
- bin/www에서 **var server = http.createServer(app);** 가 핵심

# MySQL install

- MySQL Community Downloads for windows or mac
- Custom install 'server' & 'workbench'
- Data Base(Schema) > Tables 구조
 
# Sequelize & MySQL

- npm i -g sequelize-cli
- npm i sequelize mysql2
- models
  - index.js는 Sequelize에서 가장 중요한 파일
- Model === Table(MySQL)

## Sequelize 명령어

- sequelize --help
- sequelize init: 필요한 files와 folders를 자동으로 생성해준다
  - config, models, migrations, seeders

## MySQL Basic

### Terminology

- Primary Key 기본키(not null, 중복 불가, 변경 불가)
- Foreign Key 외래키
  - 한 테이블 속성 집합이 다른 테이블의 기본키가 되는 것

### 명령어

- **기본 SQL Format** </br>
  SELECT Attribute </br>
  FROM Table </br>
  WHERE Condition;

- **Order by Format** </br>
  SELECT name </br>
  FROM table </br>
  ORDER BY cond1 ASC, cond1 DESC; **이런 식으로 조건을 2개 이상 줄 수 있다(중첩 된다)**

- 모든 상품의 정보를 ID순으로 조회하라 </br>
  SELECT * </br>
  FROM product;

- **가장 먼저 판매된 제품은?** </br>
  SELECT name </br>
  FROM product </br>
  WHERE datetime = (SELECT **min**(datetime) FROM product);

- **판매되지 않은 제품을 출력하라** </br>
  SELECT name </br>
  FROM product </br>
  WHERE product_condition != 'sold';

- **입고된 제품의 이름, 입고 날짜를 이름 순으로 출력하라. (단, 이름이 같은 제품은 나중에 들어온 제품을 먼저 출력한다.)** </br>
  SELECT name, datetime </br>
  FROM product </br>
  ORDER BY name ASC, datetime DESC;

- **전체 상품의 개수는?** </br>
  SELECT COUNT(*) as COUNT </br>
  FROM product;

- **상품 이름의 총 개수는? (중복되는 이름은 하나로 치며, null은 개수에서 제외한다)** </br>
  SELECT COUNT(**distinct** name) as COUNT </br>
  FROM product </br>
  WHERE name is not null;
  
- **상품 종류별 총 개수는?** </br>
  SELECT product_type, COUNT(product_type) as COUNT </br>
  FROM product </br>
  GROUP BY product_type </br>
  ORDER BY product_type ASC;

- **상품 이름이 같은 이름으로 2번 이상 쓰인 이름과 횟수는? (이름이 없는 상품은 제외, 이름 순 정렬)** </br>
  SELECT name, COUNT(name) as COUNT </br>
  FROM product </br>
  GROUP BY name </br>
  HAVING COUNT(name) >= 2 and name is not null</br>
  ORDER BY name;

- **상품이 가장 잘 팔리는 시간과 팔린 개수는? (09:00 ~ 19:59까지, 시간 순으로 정렬)** </br>
  SELECT HOUR(datetime) as **HOUR**, COUNT(HOUR(datetime)) as COUNT </br>
  FROM product </br>
  GROUP BY HOUR </br>
  HAVING HOUR >= 9 AND HOUR < 20 </br>
  ORDER BY HOUR;

- **이름이 없는 상품의 ID를 조회하시오** </br>
  SELECT id </br>
  FROM product </br>
  WHERE name is null;

## Reminder

- 모든 상품의 정보를 ID순으로 조회하라
- 가장 먼저 판매된 제품은?
- 판매되지 않은 제품을 출력하라
- 입고된 제품의 이름, 입고 날짜를 이름 순으로 출력하라. (단, 이름이 같은 제품은 나중에 들어온 제품을 먼저 출력한다.)
- 전체 상품의 개수는?
- 상품 이름의 총 개수는? (중복되는 이름은 하나로 치며, null은 개수에서 제외한다)
- 상품 종류별 총 개수는?
- 상품 이름이 같은 이름으로 2번 이상 쓰인 이름과 횟수는? (이름이 없는 상품은 제외, 이름 순 정렬)
- 상품이 가장 잘 팔리는 시간과 팔린 개수는? (09:00 ~ 19:59까지, 시간 순으로 정렬)
- 이름이 없는 상품의 ID를 조회하시오