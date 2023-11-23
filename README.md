
## 목차
- [개요](#개요)
- [프로젝트 설명](#프로젝트_설명)
- [프로젝트 구성](#프로젝트_구성)

## 개요
- 프로젝트 이름: 지출 기입장
- 프로젝트 지속기간: 2023.10.25(수) ~ 2023.11.15(수)
- 개발 엔진 및 언어: React Framework, javascript , CRA , Charka CSS Library
- 멤버: 팀장 조영호 팀원: 이수찬, 고정인 

## 프로젝트 설명
- 소비가 많은 현대 사회에 지출을 줄이고자 프론트엔드 기술로로만 구현한 프로젝트

## 프로젝트 구성
<details>
  <summary>
  App.jsx
</summary> 
  <br/>
  [변경전]
  <br/>
  <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/e7b47109-f659-4cc6-94e7-afc962120780"/>
  <br/>
  
  **filterData는 날짜를 선택하고 나서 데이터 저장 state**
  <br/>
  [변경후]
  <br/>
  <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/aeb58e13-1993-4c80-b282-058301884336"/>
  <br/>
  **filterData삭제 -> 이유: 조회버튼을 없애고 데이터를 입력하자마자 조회가 되게끔 구현**
  <br/>
  [컴포넌트 구성]
  <br/>
  **1.AddItem-지출 추가 컴포넌트**
  <br/>
  **2.DateSelect-날짜 선택 컴포넌트**
  <br/>
  **3.GraphItem-그래프 컴포넌트**
  <br/>
  **4.List- 조회한 아이템 컴포넌트**
</details>

<details>
  <summary>
 지출 추가 컴포넌트
</summary> 
  <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/643036f0-6cd9-4e80-a907-8aa763735a7c"/>
  
  [변경전]
  <br/>
  <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/0daaf152-6d21-4341-928b-9f5848a51ed7"/>
  <br/>
  [변경후]
  <br/>
  <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/499e0794-e047-47f8-ad9c-4aa69aa1f4d2"/>
  <br/>
  **중요: setItems([...items, data]); -> 깊은 복사로 붙여 넣기!**
</details>

<details>
  <summary>
 날짜 선택 컴포넌트
</summary> 
  <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/f9047644-23f5-42f8-a862-dc588ea016fe"/>
  <br/>
  
   **중요: DatePicker라이브러리 사용**
   <br/>
   <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/05b14f81-06be-4bc4-ab75-f357a32d4e11"/>
    <br/>
</details>

<details>
  <summary>
  그래프 컴포넌트
</summary> 
  
   **중요: ReactApexChart 라이브러리 사용**
   <br/>
   <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/18c0c10a-149a-44bc-bdd7-4b0f5ffeac47"/>
    <br/>
   **조회버튼클릭시**
    <br/>
   <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/14464e90-9968-48ce-8169-75b68259ce6c"/>
</details>

<details>
  <summary>
  조회한 아이템 컴포넌트
</summary> 
  
   **중요: List -> ListItem -> Input 컴포넌트**
   <br/>
   <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/5df3c344-3bf4-4232-8a39-3c3ac05caec8"/>
    <br/>
   **리스트 컴포넌트 클릭시: 수정, 삭제 가능**
    <br/>
   <img src="https://github.com/frontend-study-project/ExpenseTracker/assets/91147281/69320d3c-66ad-4339-b814-4feeb3e6d9d3"/>
</details>

