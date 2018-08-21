<template>
  <div id="app">
    <Header></Header>
    <Laylot></Laylot>
    <Container></Container>
    <Button></Button>
    <Form></Form>
    <form-two></form-two>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Laylot from './components/Laylout'
import Container from './components/Container'
import Button from './components/Button'
import Form from './components/Form'
import FormTwo from './components/Formtwo'
export default {
  name: 'app',
  components: {
    HelloWorld,Header,Laylot,Container,Button,Form,FormTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
