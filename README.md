# express-generator

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
- sequelize db:create (Schema 생성)
- sequelize.define (table 생성)