<script>
import { defineComponent, ref, computed } from 'vue'
import { createPopper } from '@popperjs/core'

export default defineComponent({
  name: 'Popover',
  props: {
    placement: String
  },
  setup(props) {
    const button = ref(null)
    const popover = ref(null)
    const toggle = ref(false)

    const popperInstance = computed(() => {
      return createPopper(button.value, popover.value, {
        placement: props.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ],
        strategy: 'absolute'
      })
    })

    const insertElement = (btn, tip) => {
      button.value = btn
      popover.value = tip
    }

    const handleShow = (e) => {
      if(button.value === null && popover.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.popoverPanel'))
      }
    }

    const handleClick = (e) => {
      if(button.value === null && popover.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.popoverPanel'))
      }
      popover.value.setAttribute('data-show', '')
      popperInstance.value.update()
      toggle.value = true
    }

    const handleHide = (e) => {
      if(button.value === null && popover.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.popoverPanel'))
      }
      popover.value.removeAttribute('data-show');
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
  <div class="popover">
    <button type="button" class="button" @mouseenter="handleShow($event)" @click="toggle === false ? handleClick($event) : handleHide($event)">Popover {{ placement }}</button>
    <div class="popoverPanel">
      <div class="popoverArrow" data-popper-arrow></div>
      <h3 class="popoverHeader">Popover {{ placement }}</h3>
      <div class="popoverBody">The is popover {{ placement }} content</div>
    </div>
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

.popoverPanel {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  font-size: .875rem;
  display: none;
}

.popoverPanel[data-show] {
  display: block;
}

.popoverHeader {
  padding: .5rem 1rem;
  margin: 0;
  font-size: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0,0,0,.2);
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
}

.popoverBody {
  padding: 1rem 1rem;
  color: #212529;
}

.popoverArrow,
.popoverArrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.popoverArrow {
  visibility: hidden;
}

.popoverArrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

.popoverPanel[data-popper-placement^='top'] > .popoverArrow {
  bottom: -4px;
}

.popoverPanel[data-popper-placement^='top'] > .popoverArrow::before {
  border-bottom: 1px solid rgba(0,0,0,.2);
  border-right: 1px solid rgba(0,0,0,.2);
}

.popoverPanel[data-popper-placement^='bottom'] > .popoverArrow {
  top: -4px;
}

.popoverPanel[data-popper-placement^='bottom'] > .popoverArrow::before {
  border-top: 1px solid rgba(0,0,0,.2);
  border-left: 1px solid rgba(0,0,0,.2);
}

.popoverPanel[data-popper-placement^='left'] > .popoverArrow {
  right: -4px;
}

.popoverPanel[data-popper-placement^='left'] > .popoverArrow::before {
  border-top: 1px solid rgba(0,0,0,.2);
  border-right: 1px solid rgba(0,0,0,.2);
}

.popoverPanel[data-popper-placement^='right'] > .popoverArrow {
  left: -4px;
}

.popoverPanel[data-popper-placement^='right'] > .popoverArrow::before {
  border-bottom: 1px solid rgba(0,0,0,.2);
  border-left: 1px solid rgba(0,0,0,.2);
}
</style>
