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

## MySQL 명령어

- **기본 SQL Format** </br>
  select columns </br>
  from table </br>
  where condition;
- **Order by Format** </br>
  select name </br>
  from table </br>
  order by cond1 ASC, cond1 DESC; **이런 식으로 조건을 2개 이상 줄 수 있다(중첩 된다)**
- **가장 먼저 판매된 제품은?** </br>
  select name </br>
  from product </br>
  where datetime = (select **min**(datetime) from product);
- **전체 상품의 개수는?** </br>
  select count(*) as COUNT </br>
  from product; </br>
- **상품 이름의 총 개수는? (중복되는 이름은 하나로 치며, null은 개수에서 제외한다)** </br>
  select count(**distinct** name) as COUNT </br>
  from product;
- **상품별 이름의 개수는?**
  select name, count(name) as COUNT </br>
  from product </br>
  group by name </br>
  order by name ASC; </br>
- **상품 종류의 개수는? (알파벳 오름차순 정렬)** </br>
  select product_type, count(product_type) as COUNT </br>
  from product </br>
  group by product_id </br>
  order by product_id ASC </br>
- **상품 이름이 2번 이상 쓰인 이름과 횟수는? (이름이 없는 상품은 제외, 이름 순 정렬)** </br>
  select name, count(name) as COUNT </br>
  from product </br>
  group by name </br>
  having count(name) >= 2 and name is not null</br>
  order by name </br>
- **상품이 가장 잘 팔리는 시간과 팔린 개수는? (09:00 ~ 19:59까지, 시간 순으로 정렬)** </br>
  select HOUR(datetime), COUNT(HOUR(datetime)) as COUNT </br>
  from product </br>
  group by HOUR(datetime) </br>
  having HOUR >= 9 AND HOUR < 20 </br>
  order by HOUR; </br>

## Reminder

- 가장 먼저 판매된 제품은?
- 전체 상품의 개수는?
- 상품 이름의 총 개수는? (중복되는 이름은 하나로 치며, null은 개수에서 제외한다)
- 상품별 이름의 개수는?
- 상품 종류의 개수는? (알파벳 오름차순 정렬)
- 상품 이름이 2번 이상 쓰인 이름과 횟수는? (이름이 없는 상품은 제외, 이름 순 정렬)
- 상품이 가장 잘 팔리는 시간과 팔린 개수는? (09:00 ~ 19:59까지, 시간 순으로 정렬)