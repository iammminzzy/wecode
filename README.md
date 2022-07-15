# Git test

## git 명령어 정리

### 1. git add

- 작업 중인 파일을 stage에 올리는 명령어.
- stage : 커밋을 하기 전 중간 단계인 공간으로 장바구니 같은 역할을 한다.
- commit 관리를 용이하게 하기 위해 사용한다.

### 2. git commit

- 아직 stage에 있는 파일을 실제 git에 기록하는 명령어.
- git에서 가장 중요하다고 할 수 있는 단계.
- git commit -m "(commit message)" 의 형태로 메세지를 남길 수 있다.
  - 유의미한 작업 단계별로 commit과 commit message를 남기는 것이 중요!✅

### 3. git remote

- Local git과 remote repository를 관리하기 위한 명령어.
- git remote add (remote repository 이름) (remote repository 주소) : 해당 주소의 remote repository를 해당 이름으로 연결한다.
- git remote -v : 현재 연결되어 있는 remote repository의 주소를 볼 수 있다.
- git remote remove (remote repository 이름) : 현재 연결되어 있는 remote repository와의 연결을 끊는다.

### 4. git push

- Local git에서 관리 중인 파일을 연결된 remote repository로 전송하는 명령어.
- git push (remote repository 이름) (branch 이름) 형태로 입력한다.

### 5. git branch

- 작업할 branch를 생성하는 명령어.
- 기능 단위로 branch를 만들어 하나의 branchd에서는 한 가지의 기능만 담당하도록 하는 것이 좋다.
- git checkout -b (생성할 branch 이름) 의 형태로 branch 생성과 이동을 동시에 할 수 있다.

### 6. git pull

- remote repository의 프로젝트르 받아오는 명령어.
- 최신 상태인 remote repository의 master(혹은 main)의 상태와 Local git의 master의 상태가 일치하도록 업데이트할 때 사용한다.
- git fetch와의 차이점 : remote repository의 파일을 받아오는 것은 같지만, pull을 사용하면 merge까지 해준다.
