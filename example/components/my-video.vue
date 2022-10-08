<script lang="ts" setup>
import { getCurrentInstance, h } from 'vue'

const vm = getCurrentInstance()

const getExtend = (file: string) => {
  const reg = /\.(\w+)$/
  const res = reg.exec(file)
  return res && res.length ? res[1] : ''
}

const RenderVideo = () => {
  let list: any
  if (vm && vm.slots.default) {
    list = vm.slots.default()
  }

  if (list[0].children) {
    const urls = list[0].children.split(/\n+/).filter((url: string) => url)

    return h(
      'video',
      { width: '480', height: '270', controls: true },
      urls.map((url: string) =>
        h('source', { src: url, type: 'video/' + getExtend(url) })
      )
    )
  }
  return ''
}
</script>

<template>
  <render-video />
</template>
