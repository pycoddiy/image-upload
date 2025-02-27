<template>
  <div>
    <form @submit.prevent="handleFileSubmit">
      <input type="file" @change="handleFileChange" />
      <button type="submit">Upload files</button>
    </form>
  </div>
</template>

<script lang="ts" setup>

const files = ref<FileList | null>( null )

function handleFileChange(event: Event) {
  files.value = (event.target as HTMLInputElement).files
  // console.log(files.value)
}

async function handleFileSubmit() {
  // const toast = useToast()
  // toast.add({'title': "Submit"})
  const fd = new FormData()
  if (files.value) {
    Array.from(files.value).forEach((file, index) => {
      fd.append(`index${index}`, file);
    });
  }
  //console.log(fd)
  const data = await $fetch('/api/file', {
    method: "POST",
    body: fd
  })
  console.log(data) 
  return
}
</script>