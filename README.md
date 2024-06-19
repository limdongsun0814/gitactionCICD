# 깃액션 CICD
#### 현제 포트폴리오 프로젝트에서 적용된 CICD 소스 코드
```
name: Deploy

on:
  push:
    branches: ['main']
  workflow_dispatch:
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Use repository source
        uses: actions/checkout@v4

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20.11.0
      - name: Cache node moules
        id: cache
        uses: actions/cache@v3
        with:
          path: '**/node_modules'
          key: ${{runner.os}}-node-${{hashFiles('**/package-lock.json')}}

          restore-keys: ${{runner.os}}-node-
      - name: list
        run: ls
        
      - name: Install modules
        run: | 
          cd project
          npm ci
        if: steps.cache.outputs.cache-hit != 'true'
      
      - name: Set public url
        run: |
          echo $GITHUB_REPOSITORY
          PUBLIC_URL=$(echo $GITHUB_REPOSITORY | sed -r 's/^.+\/(.+)$/\/\1\//')
          echo PUBLIC_URL=$PUBLIC_URL > ./env

      - name: build
        run: |
          ls
          cd project
          npm run build2
          ls
          cp build/index.html build/404.html
      - name: gh-page
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{secrets.GITHYB_TOKEN}}
          publish_dir: ./project/build
```

CICD 이벤트 시점
pull_request: 워크플로 리포지토리의 끌어오기 요청에 대한 작업이 발생할때 워크플로 실행
push: push할 경우 방생
workflow_dispatch: 워크플로를 수동으로 실행 가능하고 입력 값도 받을 수 있다.

```
on:
  push:
    branches: ['main']
  workflow_dispatch:
```

runs-on: 어떤 환경에서 실행할지 지정