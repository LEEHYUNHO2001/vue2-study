<template>
  <div class="life-cycle">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "A",
    };
  },
  beforeCreate() {
    console.log("beforeCreate");

    // this.msg = "B";
    /*
      beforeCreate 단계에서 data나 methods 속성이 인스턴스에 저장되어 있지 않다.
      그러므로 UI는 A를 출력한다.
    */
  },
  created() {
    console.log("created");

    // this.msg = "B";
    /*
      created부터 data, methods, computed 등이 활성화되어 접근할 수 있다. 그러므로 UI는 B를 출력한다.
      하지만 인스턴스가 화면에 부착하기 전 이므로 template속성에 정의된 DOM Element로 접근할 수 없다.
      API Endpoint에서 데이터를 받아 초기화하는 경우에 많이 사용한다. (또는 이벤트 리스너 선언)
    */
  },
  beforeMount() {
    console.log("beforeMount");

    // this.msg = "B";
    /*
      render()함수가 호출되기 직전(DOM에 인스턴스가 부착하기 직전)에 로직은 여기에 추가하면 된다.
      API Endpoint에서 데이터를 받아 초기화하는 것이 아닌, 데이터를 직접 주입하는 경우에 사용한다.
      tip ) Virtual DOM이 생성되어 있으나 실제 DOM에 부착하지 않은 상태이다.

      참고 : https://stackoverflow.com/questions/57077104/when-to-use-the-lifecycle-method-beforemount-in-vue-js

      사실 비동기 데이터 요청은 beforeCreate, created, beforeMount에서 가능하다.
      어차피 mounted 이후에 실제 비동기 요청이 처리되기 때문이다.
      많은 Vue 개발자들이 왠만하면 created에서 비동기 요청을 하는 이유는 
      그냥 웹에서 데이터를 받아 state에 초기화하는 경우가 많기 때문인 것 같다.
    */
  },
  mounted() {
    console.log("mounted");

    this.msg = "B";
    /*
      인스턴스가 mount된 후. 즉, 가상 DOM의 내용이 실제 DOM에 부착된 후에 실행된다.
      this.$el부터 data, methods 등에 접근 가능 하다.

      부모 컴포넌트와 자식 컴포넌드가 있는 경우,
      부모가 created되고 자식이 created부터 mounted되어야 부모가 mounted가 된다.

      하지만 자식 컴포넌트가 서버에서 비동기도 데이터를 받아오는 경우에
      부모의 mounted훅이 모든 자식 컴포넌트가 마운트트된 상태를 보장하지 않는다.
      이 경우에는 this.$nextTick을 이용할 수 있다.

      이전 단계에서는 this.msg = "B"와 같이 데이터를 변경해도 update에 대한 라이프사이클이 실행되지 않았다.
      하지만 mounted에서 데이터를 변경하면 update에 대한 라이프사이클이 실행된다.

      beforeMount에서도 this.$el에 접근이 가능하긴 하지만 여기서의 this.$el과 조금 다르다.
      stackoverflow 자료 첨부한것을 확인하자.
    */
  },
  beforeUpdate() {
    this.msg = "C";
    console.log("beforeUpdate");

    /*
      컴포넌트에서 사용하는 데이터가 변경되는 것이 감지되면, 변화 직전에 호출된다.
      변경되는 값을 추가적으로 변화시켜도 다시 update관련 라이프사이클을 호출하지 않는다.
    */
  },
  updated() {
    console.log("updated");

    /*
      변경된 데이터가 적용된 Virtual DOM을 실제 DOM에 적용된 이후에 호출되는 훅이다.
      여기서 데이터를 변경하면 무한 루프가 발생할 수 있으므로 
      해당 로직이 필요한 경우에는 computed나 watch를 이용하자.(왠만하면 그냥 beforeUpdate에서 처리)

      mounted와 마찬가지로 this.$nextTick를 사용할 수 있다.
    */
  },
  beforeDestroy() {
    console.log("beforeDestroy");

    /*
      인스턴스가 해체되기 직전에 호출된다. 아직은 모든 요소에 접근 가능하다.
      이벤트 리스너 해제 등의 작업을 해주면 된다. (메모리를 위해..!)
    */
  },
  destroyed() {
    console.log("destroyed");

    /*
      vue 인스턴스가 해체되고 난 이후에 호출된다.
    */
  },
  /*
    이 외에도 라이프 사이클 훅에는 ativated, unmount 등이 있다.
    React라이프 사이클 종류도 많은데 다 사용하지는 않는 것 처럼 Vue도 그렇다.
    https://v3.ko.vuejs.org/api/options-lifecycle-hooks.html
    궁금하다면 공식문서를 보고, 필요한 경우에 적용하면 될 것 같다.
  */
};
</script>

<style scoped></style>
