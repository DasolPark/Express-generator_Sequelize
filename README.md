bbㅠbㅠ# express-generator

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

- 비절차적인(non procedural) 언어이지만,  SQL문은 내부적으로 DBMS에 의하여 </br> 
  1️⃣ FROM 절에 쓰여진 테이블을 가져와서 </br>
  2️⃣ WHERE 절 조건에 의하여 투플을 선택한 다음 </br>
  3️⃣ SELECT 절에 있는 속성들을 결과로 출력한다.

- GROUP BY 절이 포함된 SQL 문의 실행 순서 </br>
  5️⃣ SELECT custid, COUNT(\*) AS 판매수량 </br>
  1️⃣ FROM orders </br>
  2️⃣ WHERE saleprice >= 8000 </br>
  3️⃣ GROUP BY custid </br>
  4️⃣ HAVING count(*) > 1 </br>
  6️⃣ ORDER BY custid;

- '' single quote를 사용한다(단, alias에 공백이 사용될 때는 "" 사용)

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

- **equi join** </br>
  가격이 20,000원인 도서를 주문한 고객의 이름과 도서의 이름을 구하시오 </br>
  SELECT customer.name, book.bookname </br>
  FROM customer, orders, book (여기까지는 카티전 프로덕트)</br>
  WHERE customer.custid = orders.custid and orders.bookid = book.bookid and book.saleprice = 20000;

- **outer join** </br>
  상품을 구매하지 않은 고객을 포함하여 고객의 이름과 고객이 주문한 도서의 판매가격을 구하시오 </br>
  SELECT customer.name, saleprice </br>
  FROM customer (**LEFT**/RIGHT) OUTER JOIN orders ON customer.custid = orders.custid

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
  HAVING HOUR >= 9 AND HOUR <ㅠ 20 </br>
  ORDER BY HOUR;

- **이름이 없는 상품의 ID를 조회하시오** </br>
  SELECT id </br>
  FROM product </br>
  WHERE name is null;

- **판매는 되었지만, 입고 목록이 유실되었을 경우 입고 목록에 없는 상품을 조회하시오** </br>
  SELECT id, name </br>
  FROM product_outs </br>
  WHERE id not in ( SELECT id FROM product_ins )

- **컵 또는 텀블러인 상품을 검색하시오** </br>
  SELECT * </br>
  FROM product </br>
  WHERE product_type in ('cup', 'tumbler'); </br>
  컵 또는 텀블러가 아닌 상품을 검색하려면 **not in**을 이용하면 된다

- **'머그'가 포함된 상품을 검색하시오** </br>
  SELECT * </br>
  FROM product </br>
  WHERE product_type = '%머그%';

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
- 판매는 되었지만, 입고 목록이 유실되었을 경우 입고 목록에 없는 상품을 조회하시오
- 컵 또는 텀블러인 상품을 검색하시오
- '머그'가 포함된 상품을 검색하시오
- equi join
- outer join