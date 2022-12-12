<script>
import { defineComponent, ref, computed, watchEffect, watch } from 'vue'
import { createPopper } from '@popperjs/core'

export default defineComponent({
  name: 'TimePicker',
  setup() {
    const button = ref(null)
    const picker = ref(null)
    const toggle = ref(false)

    const hour = ref(0)
    const minute = ref(0)
    const second = ref(0)

    const time = ref('')

    const checkNum = (num) => {
      let strNum = `${num}`
      if(strNum.length === 1) {
        strNum = '0' + strNum
      }
      return strNum
    }

    watchEffect(() => {
      time.value = `${checkNum(hour.value)}:${checkNum(minute.value)}:${checkNum(second.value)}`
    })

    watch(time, () => {
      const splitTime = time.value.split(':')
      hour.value = Number(splitTime[0])
      minute.value = Number(splitTime[1])
      second.value = Number(splitTime[2])
    })

    const popperInstance = computed(() => {
      return createPopper(button.value, picker.value, {
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
      picker.value = tip
    }

    const handleShow = (e) => {
      if(button.value === null && picker.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.pickerMenu'))
      }
    }

    const handleClick = (e) => {
      if(button.value === null && picker.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.pickerMenu'))
      }
      picker.value.setAttribute('data-show', '')
      popperInstance.value.update()
      toggle.value = true
    }

    const handleHide = (e) => {
      if(button.value === null && picker.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.pickerMenu'))
      }
      picker.value.removeAttribute('data-show')
      toggle.value = false
    }

    const handleHour = (type) => {
      if(type === 'add') {
        if(hour.value < 24) {
          hour.value = hour.value + 1
        }
      } else {
        if(hour.value > 1) {
          hour.value = hour.value - 1
        }
      }
    }

    const handleMinute = (type) => {
      if(type === 'add') {
        if(minute.value < 59) {
          minute.value = minute.value + 1
        }
      } else {
        if(minute.value > 0) {
          minute.value = minute.value - 1
        }
      }
    }

    const handleSecond = (type) => {
      if(type === 'add') {
        if(second.value < 59) {
          second.value = second.value + 1
        }
      } else {
        if(second.value > 0) {
          second.value = second.value - 1
        }
      }
    }

    return {
      toggle,
      handleShow,
      handleClick,
      handleHide,
      hour,
      minute,
      second,
      time,
      handleHour,
      handleMinute,
      handleSecond,
      checkNum
    }
  }
})
</script>

<template>
  <div class="picker">
    <input type="text" class="input" v-model="time" id="pickerMenu" @mouseenter="handleShow($event)" @click="toggle === false ? handleClick($event) : handleHide($event)" aria-expanded="false">
    <div class="pickerMenu" aria-labelledby="pickerMenu">
      <div style="display: flex;">
        <div style="display: flex; flex-direction: column; justify-content: center; padding-left: 10px; padding-right: 10px; width: 70px;">
          <h4 style="margin: 0; text-align: center;">Hour</h4>
          <div style="text-align: center; margin-bottom: -5px;" @click="handleHour('add')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16" style="pointer-events: none">
              <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
            </svg>
          </div>
          <div style="text-align: center">{{ checkNum(hour) }}</div>
          <div style="text-align: center; margin-top: -5px;" @click="handleHour('subtract')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16" style="pointer-events: none">
              <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; padding-left: 10px; padding-right: 10px; width: 70px;">
          <h4 style="margin: 0; text-align: center;">Minute</h4>
          <div style="text-align: center; margin-bottom: -5px;" @click="handleMinute('add')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16" style="pointer-events: none">
              <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
            </svg>
          </div>
          <div style="text-align: center">{{ checkNum(minute) }}</div>
          <div style="text-align: center; margin-top: -5px;" @click="handleMinute('subtract')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16" style="pointer-events: none">
              <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; padding-left: 10px; padding-right: 10px; width: 70px;">
          <h4 style="margin: 0; text-align: center;">Second</h4>
          <div style="text-align: center; margin-bottom: -5px;" @click="handleSecond('add')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16" style="pointer-events: none">
              <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
            </svg>
          </div>
          <div style="text-align: center">{{ checkNum(second) }}</div>
          <div style="text-align: center; margin-top: -5px;" @click="handleSecond('subtract')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16" style="pointer-events: none">
              <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.pickerMenu {
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  z-index: 1000;
  padding: .5rem 0;
  display: none;
}

.pickerMenu[data-show] {
  display: block;
}

.pickerItem {
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
