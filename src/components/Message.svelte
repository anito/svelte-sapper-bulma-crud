<script>
  export let messageHeader = 'Info';
  export let message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.';
</script>

<article class="message">
  <div class="message-header">
      <p>{messageHeader}</p>
    <button class="delete" aria-label="delete" aria-hidden="true"></button>
  </div>
  <div class="message-body">
    {message}
  </div>
</article>


<style>

</style>
