<template>
    <div class="progress">
        <span class="skill"> {{ name }} <i class="val"> {{ level }}</i></span>
        <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProgressItem',
  props: ["name","value","level"]
}
</script>