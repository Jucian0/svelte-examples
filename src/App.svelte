<script>
  export let name;

  let posts = [];

  const restApi = page => {
    fetch(`http://www.hackintoshworld.com/wp-json/wp/v2/posts?page=${page}`)
      .then(resp => resp.json())
      .then(data => {
        posts = data;
      });
  };

  let page = 0;

  const incrementPage = () => {
    page++;
    restApi(page);
  };

  const decrementPage = () => {
    if (page > 0) {
      page--;
    }
    restApi(page);
  };
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Pages {name}!</h1>

<button on:click={incrementPage}>Increment Page</button>
<span>- {page} -</span>
<button on:click={decrementPage}>Decrement Page</button>

<div>
  <ul>
    {#each posts as item}
      <li>{item.title.rendered}</li>
    {/each}
  </ul>
</div>
