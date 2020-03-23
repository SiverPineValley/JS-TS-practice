# tsconfig.json 파일 설명을 위한 마크다운

## 1. include
`"include": ["src/**/*"]`: src 디렉터리 및 src 하위 디렉터리의 모든 파일을 컴파일 대상으로 포함한다.

### 1) module
동작 대상 플랫폼이 웹 브라우저인지 NodeJS인지를 구분합니다.

>- 웹 브라우저: amd
>- NodeJS: commonjs

### 2) moduleResolution
`"module": "amd"`이면 `classic`
`"module": "commonjs"`이면 `node`

### 3) target
트랜스파일할 대상 자바스크립트의 버전을 설정할 수 있습니다.


### 4) baseUrl, outDir
<b>baseUrl</b>과 <b>outDir</b>키에는 트랜스파일된 ES5 자바스크립트 파일을 저장하는 디렉터리를 설정합니다. tsc는 tsconfig.json 파일이 있는 디렉터리에서 실행됩니다. 따라서 현재 디렉터리를 의미하는 "."로 <b>baseUrl</b> 키값을 설정하는 것이 보통입니다.
<b>outDir</b>키는 <b>baseDir</b> 설정값을 기준으로 했을 때 하위 디렉터리의 이름입니다. 앞서 이 키는 <b>dist</b>라는 값을 설정했으므로 빌드된 결과가 dist 디렉터리에 만들어집니다.

### 5) paths
소스 파일의 <b>import</b>문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설정합니다. <b>import</b> 문이 찾아야 하는 소스가 외부 패키지이면 node_modules 디렉터리에서 찾아야 하므로 키값에 <b>node_modules/*</b>도 포함했습니다.


### 6) esModuleInterop
CommonJS 타입의 NodeJS에서 AMD방식의 브라우저 기반 라이브러리를 동작시키려면 이 키값이 <b>true</b>로 설정되어야 합니다.

### 7) sourceMap
이 키 값이 <b>true</b>이면 트랜스파일 디렉터리에는 .js파일 외에도 .js.map파일이 만들어집니다. 이 소스맵 파일은 변환된 자바스크립트 코드가 타입스크립트 코드의 어디에 해당하는지 알려줍니다. 소스맵 파일은 주로 디버깅할 때 사용됩니다.


### 8) downlevelIteration
<b>generator</b>이 정상적으로 동작하려면 이 키 값이 <b>true</b>이어야 합니다.

### 9) noImplicitAny
이 키값을 <b>false</b>로 설정하면 타입을 입력하지 않더라도 (혹은 <b>any</b>로 입력하더라도) 타입 스크립트 문법 상의 문제로 인식하지 않습니다.

</br>

## 2. compilerOptions
`"compilerOptions": {...}`: tsc 명령 형식에서 옵션을 나타냅니다.