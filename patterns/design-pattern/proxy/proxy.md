# 프록시 패턴

## 프록시는 대리인을 뜻한다. 즉, 어떤 일을 대신해주는 패턴인 것이다

- 인터셉터하여 다른일을 할때 사용
- 모니터링할때 사용
- 확장할때 사용

프록시 패턴은 용도가 무궁무진하다. 다양한용도로 활용이 가능하고 대신 처리한다는 개념덕에 밸리데이션로직을 처리하거나

변경이 어려운 함수를 특별한 처리가 가능하다.

리액트에서는 데브툴스에서 제한된 용도로 사용된다.

뷰에서는 코어기능으로 프록시 인스턴스가 존재한다.

[react 소스코드 참고하기](https://github.com/facebook/react/blob/e225fa43ada4f4cf3d3ba4982cdd81bb093eaa46/packages/react-debug-tools/src/ReactDebugHooks.js#L370)

[vue 소스코드 참고하기](https://github1s.com/vuejs/vue/blob/HEAD/src/core/instance/proxy.ts#L43)
