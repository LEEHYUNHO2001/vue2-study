<script>
import { defineComponent, ref, computed } from 'vue'
import { createPopper } from '@popperjs/core'

export default defineComponent({
  name: 'Dropdown',
  setup() {
    const button = ref(null)
    const dropdown = ref(null)
    const toggle = ref(false)

    const popperInstance = computed(() => {
      return createPopper(button.value, dropdown.value, {
        placement: 'auto-start',
        modifiers: [
          {
            name: 'flip',
            options: {
              allowedAutoPlacements: ['bottom-start', 'top-start'],
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, 2],
            },
          },
        ]
      })
    })

    const insertElement = (btn, tip) => {
      button.value = btn
      dropdown.value = tip
    }

    const handleShow = (e) => {
      if(button.value === null && dropdown.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.dropdownMenu'))
      }
    }

    const handleClick = (e) => {
      if(button.value === null && dropdown.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.dropdownMenu'))
      }
      dropdown.value.setAttribute('data-show', '')
      popperInstance.value.update()
      toggle.value = true
    }

    const handleHide = (e) => {
      if(button.value === null && dropdown.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.dropdownMenu'))
      }
      dropdown.value.removeAttribute('data-show')
      toggle.value = false
    }

    return {
      toggle,
      handleShow,
      handleClick,
      handleHide
    }
  }
})
</script>

<template>
  <div class="dropdown">
    <button type="button" class="button" id="dropdownMenu" @mouseenter="handleShow($event)" @click="toggle === false ? handleClick($event) : handleHide($event)" aria-expanded="false">Dropzone Button</button>
    <ul class="dropdownMenu" aria-labelledby="dropdownMenu">
      <li><a class="dropdownItem" href="#" @click="handleHide($event)">Action</a></li>
      <li><a class="dropdownItem" href="#" @click="handleHide($event)">Another action</a></li>
      <li><a class="dropdownItem" href="#" @click="handleHide($event)">Something else here</a></li>
    </ul>
  </div>
</template>

<style scoped>
.button {
  appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: seagreen;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 12pt;
  color: white;
}

.button::after {
  display: inline-block;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
}

.dropdownMenu {
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  z-index: 1000;
  min-width: 10rem;
  padding: .5rem 0;
  display: none;
}

.dropdownMenu[data-show] {
  display: block;
}

.dropdownItem {
  display: block;
  width: 100%;
  padding: .25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
</style>
